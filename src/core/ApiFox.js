module.exports = class ApiFox extends global.Generator {
  constructor(config) {
    super(config);
    this.setDocUrl("https://app.apifox.com");
    this.setResponse('errorMessage','errorCode')
  }
  getUrl(catId) {
    return {
      projectUrl:
        this.config.docUrl +
        `/project/${this.projectId}/interface/api/cat_${catId}`,
      menuUrl:
        this.config.docUrl +
        `/project/${this.projectId}/interface/api/${catId}`,
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

    //   if (!this.isCatIds(this.catIds)) {
    //     return false;
    //   }
      this.setFiles();
      this.getData(
        `/api-tree-list`
      ).then(async (menuList) => {
        console.log("🚀 ~ ApiFox ~ ).then ~ menuList:", menuList);
        this.projectNames.push(`${this.projectName}(${this.indexUrl})`);
        resolve();
      });
    });
  }
};
