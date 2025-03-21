const { getIds, getPageData } = require("../utils/index");

module.exports = class YApi extends global.Generator {
  constructor(config) {
    super(config);
    this.setDocUrl("http://api.doc.jiyou-tech.com");
  }
  getUrl(catId) {
    return {
      projectUrl:
        this.config.docUrl +
        `/project/${this.projectId}/interface/api/cat_${catId}`,
      menuUrl:
        this.config.docUrl +
        `/project/${this.projectId}/interface/api/${catId}`,
      indexUrl: this.config.docUrl + `/project/${this.projectId}/interface/api`,
    };
  }

  async init(opt, index) {
    return new Promise(async (resolve, reject) => {
      this.page = await this.browser.newPage();
      this.page.setDefaultTimeout(0);
      // yapi登录地址
      await this.page.goto(this.config.docUrl + "/login");
      await this.page.waitForSelector("#email", {
        timeout: 0,
      });

      // 输入账号密码
      await this.page.waitForSelector("#email");
      await this.page.type("#email", this.userName);
      await this.page.type("#password", this.passWord);
      await this.page.keyboard.press("Enter");
      await this.request(this.config.docUrl + "/api/user/login");
      const c = await this.page.cookies();
      this.cookies = c.map((item) => ({
        name: item.name,
        value: item.value,
      }));

      await this.page.setCookie(...this.cookies);
      // 等待登录之后出现的头部
      await this.page.waitForSelector(
        "#yapi > div > div.router-main > div.header-box.m-header.ant-layout-header"
      );
      await getPageData(
        this.page,
        this.config.docUrl + `/api/project/get?id=${opt.projectId}`,
        this.spinner
      );

      this.opt = opt;
      this.catIds = opt.catIds;

      this.projectId = opt.projectId;
      this.index = index;

      if (opt.catIds && Array.isArray(opt.catIds)) {
        const oldCatIds =
          this.cacheData[this.cacheKey.name]?.[index]?.ids || [];

        this.catIds = opt.catIds.filter(
          (item) => !oldCatIds.some((s) => getIds(s) === getIds(item))
        );
        if (!this.catIds.length) {
          resolve();
          return false;
        }
      } else {
        if (
          this.cacheData[this.cacheKey.name]?.[index] &&
          this.cacheData[this.cacheKey.name][index].pid
        ) {
          resolve();
          return false;
        }
      }
      // 判单当前是否选过文件,如果选过文件把当前选过的文件加载第一项
      if (this.selectName) {
        this.files = [...new Set([this.selectName, ...this.files])];
      }
      try {
        this.apiUrl = this.getUrl().indexUrl;
        await this.page.goto(this.apiUrl);
        // 监听当前接口返回数据
        this.getData(
          `/api/interface/list_menu?project_id=${opt.projectId}`
        ).then(async (menuList) => {
          this.spinner.stop();
          await this.page.waitForSelector(
            "#yapi > div > div.router-main > div.header-box.m-header.ant-layout-header > div > div.breadcrumb-container > div > span:nth-child(2) > span.ant-breadcrumb-link",
            {
              timeout: 0,
            }
          );

          this.projectName = await this.page.$eval(
            "#yapi > div > div.router-main > div.header-box.m-header.ant-layout-header > div > div.breadcrumb-container > div > span:nth-child(2) > span.ant-breadcrumb-link",
            (el) => el.innerText
          );

          this.projectNames.push(`${this.projectName}(${this.apiUrl})`);
          // 判断当前数组里面是否都是string类型或者是number类型
          const readList = (lIndex, item) => {
            return new Promise(async (resolve) => {
              const data = await getPageData(
                this.page,
                this.config.docUrl + `/api/interface/get?id=${item._id}`,
                this.spinner
              );
              data.reqBody = data.req_body_form.length
                ? data.req_body_form
                : data.req_params.length
                  ? data.req_params
                  : data.req_query.length
                    ? data.req_query
                    : data.req_body_other;
              data.reqType = data.req_body_type;
              data.ReqJsonSchema = data.req_body_is_json_schema;
              data.ResJsonSchema = data.res_body
                ? JSON.stringify(
                    JSON.parse(data.res_body)?.properties?.data
                  )
                : "";
              resolve(data);
            });
          };
          if (
            this.config.projects.every(
              (item) => typeof item === "string" || typeof item === "number"
            )
          ) {
            this.selectName = "";
            for (let mIndex = 0; mIndex < menuList.length; mIndex++) {
              if (!this.selectName) {
                await this.gen("请选择需要生成所有接口的文件");
              }
              (await this.gen()).add(menuList[mIndex], null, null, true);
            }
          } else {
            if (!this.opt.catIds) {
              const res = await this.page.goto(
                this.config.docUrl +
                  `/api/interface/list?page=1&limit=999999&project_id=${opt.projectId}`
              );
              menuList = (await res.json()).data;

              const { add } = await this.gen(
                `请选择需要生成${this.projectName}项目接口文件((接口共${menuList.list.length}个))`
              );
              await add(menuList, undefined, readList);
            } else {
              const ids = menuList.map((item) => item._id);
              const noIds = this.catIds.filter(
                (item) => !ids.includes(getIds(item))
              );
              noIds.some((item) => {
                this.spinner.warn(
                  `${item}分类id不存在,请检查该分类id是否在该项目`
                );
                resolve();
              });

              for (let i = 0; i < this.catIds.length; i++) {
                for (let index = 0; index < menuList.length; index++) {
                  if (menuList[index]._id == getIds(this.catIds[i])) {
                    await this.page.click(
                      `.interface-list > li:nth-child(${index + 2})`
                    );
                    const { add } = await this.gen(
                      `请选择需要生成${menuList[index].name || menuList[index].desc}接口的文件(项目名:${this.projectName}(接口共${menuList[index].list.length}个))`
                    );

                    if (menuList[index].list) {
                      await add(menuList[index], this.catIds[i], readList);
                    }

                    break;
                  }
                }
              }
            }
          }

          await this.createWriteFile().writeHeader().writeApi();
          resolve();
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
};
