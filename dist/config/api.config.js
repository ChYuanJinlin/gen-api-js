/* 参考文档:https://www.npmjs.com/package/@yuanjinlin/gen-api */
module.exports = {
  // 在线文档的账户信息
  users: {
    userName: "",
    passWord: "",
  },

  docName: "", // 在线文档网站名称
  // debug: false,//是否开启调试
  docUrl: "", //在线文档网站地址
  // cache:true,//是否开启缓存 默认为开启状态
  // typescript:false,//语言类型 默认为js
  // cacheFileName:"genApi.data.json",//缓存文件名称 默认为 genApi.data.json
  // 生成api的文件夹
  // apiFilePath: "api",// 会从src路径下寻找
  /*  puppeteer 选项配置  参考: https://pptr.nodejs.cn/
  puppeteerOptions:{
    method:'launch',
    run(puppeteer) {
      return {
        headless: true,
        defaultViewport: null,
        args: ["--start-maximized"],
        ignoreDefaultArgs: ["--enable-automation"],
        executablePath: puppeteer.executablePath("chrome"),
         devtools: true,
      };
    },
  } */
  // 自定义apiName函数名
  /*   getRequestFunctionName(apiName, opt, toCamelCase) {
    let funcName = toCamelCase(
      `${opt.method.toLocaleLowerCase()}/${opt.formatPaths.at(-2)}/${opt.formatPaths.at(-1)}`
    );
    return funcName;
  }, */

  // importRequestName: "",  // 头部引入的请求方法名称

  /* requestOptions: {
     annotation:"",
     paramsName: "",
    requestFunc(opt, reqTypeName, resTypeName) {
      return `
     export function ${opt.apiName}(${this.config.typescript ? `${opt.newParamsName}?:${reqTypeName}` : `${opt.newParamsName}`} ) ${this.config.typescript ? `: Promise<${resTypeName}>` : ""}  {
       ${`return request.${this.config.typescript ?`${opt.method}<${resTypeName}>` :`${opt.method}` }({ url: ${opt.path},${!opt.restFul ? ` ${opt.newParamsName}` : `${""}`}})

          `}
      }

    `;
    }
  }, */
  // api项目配置项
  // 配置选项:  如果要生成当前项目下所有的接口只需要传项目id过来即可 projectId 是必填项 使用方式:catids:[xxx] 批量使用传参:catids:[xxx,'开始下标-结束下标']下标是从1开始(生成下标范围api)  catids:[xxx,3]生成单独某一项(传下标|id|菜单名称)catids:[xxx,'1 3 5]批量生成对应的项(传下标|id|菜单名称) catids:[xxx,'-xxx] 排除当前这项(传下标|id|菜单名称)
  projects: [],
};
