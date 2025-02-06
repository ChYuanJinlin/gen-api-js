const { getIds, getPageData } = require("../utils/index");
module.exports = class ApiFox extends global.Generator {
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
    return new Promise(async (resolve, reject) => {
      this.page = await this.browser.newPage();
      await this.page.goto(this.indexUrl);
      this.page.setDefaultTimeout(0);
      const projectClass =
        "#root > div > section > div > div.WebLayoutContainer_container__F2McA.WebLayoutContainer_webContainer__VHWYu > div.WebLayoutContainer_webTitleBar__269bc > div > div.h-full.flex-1 > nav > ol > li:nth-child(2) > span.ui-breadcrumb-overlay-link.cursor-pointer > span > div > div";
      await this.page.waitForSelector(projectClass);

      this.projectName = await this.page.$eval(
        projectClass,
        (el) => el.innerText
      );
      this.projectNames.push(`${this.projectName}(${this.indexUrl})`);
      //   if (!this.isCatIds(this.catIds)) {
      //     return false;
      //   }
      this.setFiles();
      const readList = (lIndex, item) => {
        return new Promise(async (resolve) => {
          const data = await getPageData(
            this.page,
            this.config.docUrl + `/api/interface/get?id=${item._id}`,
            this.spinner
          );
          resolve(data);
        });
      };
      const options = {
        projectName: this.projectName,
      };
      this.getData(`/api-tree-list`).then(async (menuList) => {
        const readList = (lIndex, item) => {
          return new Promise(async (resolve) => {
            const data = await getPageData(
              this.page,
              this.config.docUrl +
                `/api/v1/projects/${opt.projectId}/http-apis/${item.id}?locale=zh-CN`,
              this.spinner
            );
            console.log("🚀 ~ ApiFox ~ returnnewPromise ~ data:", data);
            resolve(data);
          });
        };
        let list = [],
          currentMenus = [];
        const diff = (obj) => {
          if (obj && obj.children.length) {
            obj.children.forEach((item) => {
              diff(item);
            });
          } else {
            let apiObj = null;
            obj.api._id = obj.api.id;
            obj.api.title = obj.api.name;
            apiObj = JSON.parse(JSON.stringify(obj.api));
            obj = null;
            obj = apiObj;
            delete obj.api;

            list.push(obj);
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
          this.projectName = currentMenus.name;
          await this.genProjectApi(currentMenus, readList, options);
        } else {
          // 生成某个api
          await this.genProjectMenusApi(menuList, readList, options);
        }

        await this.createWriteFile().writeHeader().writeApi();
        resolve();
      });
    });
  }
};
