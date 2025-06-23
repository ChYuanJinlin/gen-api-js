const { getIds } = require("../utils/index");
module.exports = class ApiFox extends Generator {
  constructor(config) {
    super(config);
    this.setDocUrl("https://app.apifox.com");
    this.setResponse("errorMessage", "errorCode");
  }
  getUrl(catId) {
    return {
      projectUrl:
        this.config.docUrl +
        `/project/${this.projectId}/interface/api/cat_${catId}`,
      menuUrl: this.config.docUrl + `/project/${this.projectId}`,
      indexUrl: this.config.docUrl + `/project/${this.projectId}`,
    };
  }

  async init(opt, index) {
    this.projectId = opt.projectId;
    this.setIndexUrl(`/project/${this.projectId}`);
    this.opt = opt;
    this.catIds = opt.catIds;
    this.index = index;
    try {
      return new Promise(async (resolve, reject) => {
        this.page = await this.browser.newPage();
        await this.page.goto(this.indexUrl);
        this.page.setDefaultTimeout(0);
        const projectClass =
          "#root > div > section > div > div.container-PJZkzQ.webContainer-sdsCoJ > div.webTitleBar-pNIDD3 > div > div.h-full.flex-1 > nav > ol > li:nth-child(2) > span.ui-breadcrumb-overlay-link.cursor-pointer > span > div > div";
        if ((await this.page.$('#root > div > div > div.content-w8on4p > div > div > div > div'))) {
          this.spinner.warn("请登录");
        }
        await this.page.waitForSelector(projectClass);
        this.projectName = await this.page.$eval(
          projectClass,
          (el) => el.innerText
        );

        this.projectNames.push(`${this.projectName}(${this.indexUrl})`);
        if (!this.isCatIds(this.catIds)) {
          resolve();
          return;
        }
        this.setFiles();
        const options = {
          projectName: this.projectName,
        };
        await this.page.reload();
        const [menuList, details] = await this.getData([
          `/api-tree-list`,
          "/api-details",
        ]);

        // 获取详情
        const readList = (lIndex, item) => {
          return new Promise(async (resolve) => {
            const data = details.find(
              (dItem) => dItem.folderId === item.folderId
            );
            data.reqBody = data.parameters.query;
            data.reqType = data.requestBody.type;
            data.ReqJsonSchema = null;
            if (data.responses.properties) {
              data.ResJsonSchema = data.responses.properties?.data || "";
            } else {
              data.ResJsonSchema = data.responseExamples?.data || "";
            }
            resolve(data);
          });
        };
        let list = [],
          currentMenus = [],
          listAll = [];
        const diff = (obj) => {
          if (obj && obj.children.length) {
            obj.children.forEach((item) => {
              diff(item);
            });
          } else {
            if (!obj.api) {
              return;
            }
            let apiObj = null;
            obj.api._id = obj.api.id;
            obj.api.title = obj.api.name;
            apiObj = JSON.parse(JSON.stringify(obj.api));
            obj = null;
            obj = apiObj;
            delete obj.api;

            list.push(obj);
            listAll.push(obj);
          }
        };
        menuList.forEach((item) => {
          diff(item);
          item.list = list;
          list = [];
          item._id = item.folder?.id ? item.folder?.id : item.api?.id;
          if (item._id === getIds(this.catIds)) {
            currentMenus = item;
          }
        });

        if (this.isProjectId()) {
          // 生成项目下所有的api
          await this.genAllApi(menuList, options);
        } else if (!this.opt.catIds) {
          // 如果当前没有分类只有项目则生成项目下的所有api
          await this.genProjectApi({ list: listAll }, readList, options);
        } else {
          // 生成某个api
          await this.genProjectMenusApi(menuList, readList, options);
        }

        await this.createWriteFile().writeHeader().writeApi();
        resolve();
      });
    } catch (error) {
      console.log("🚀 ~ ApiFox ~ init ~ error:", error);
    }
  }
};
