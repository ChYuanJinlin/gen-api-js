const ora = require("ora");
const puppeteer = require("puppeteer-core");
const inquirer = require("inquirer");
const prettier = require("prettier");
const path = require("path");
const fs = require("fs");
let apiNum = 0;
const {
  getFilenames,
  toCamelCase,
  getRes,
  getGenType,
  log,
  getNum,
} = require("./index");
const { jsonSchemaToTs } = require("./toTs");
const { genTemplateTS } = require("./translate.js");
const cache = require("./cache");
const cacheKey = require(path.join(process.cwd(), "package.json"));
const specialChat = /\/|\d|\/\d|\/\$|\{|\}/g;
global.Generator = class Generator {
  constructor(config) {
    this.config = config;
    // 存放apiFilePath 下所有的文件名
    this.files = [];
    this.cacheKey = cacheKey;
    this.projectNames = [];
    // 接口所有的名称
    this.apiNames = [];
    // 当前第几项
    this.curNum = (num = 1) => num;
    // 导入封装的接口名称
    let name = /import (.*?) from/.exec(config.importRequestName)?.[1];
    name?.includes("{")
      ? (name = name.replace(/{|}/g, "").split(",")[0])
      : name;
    this.requestName = name;
    // 接口总共的数量
    this.totalApiNames = [];
    // 接口所有的菜单名称
    this.names = [];
    // 选择的文件名
    this.selectName = "";
    // 生成缓存数据的文件
    cache.setCacheFileName(config.cacheFileName);
    // 账号
    this.userName = config.users.userName;
    // 密码
    this.passWord = config.users.passWord;
    this.cookies = [];
    // 缓存
    this.cacheData = cache.getCache();
    // 如果没有缓存的话创建一个
    if (!this.cacheData) {
      this.cacheData = {};
      this.cacheData[this.cacheKey.name] = [];
    }
    this.apis = [];
    getFilenames(
      path.join(process.cwd(), "src/" + (config.apiFilePath || "api")),
      (filename) => {
        this.files.push(filename);
      }
    );

    (async () => {
      const defaultOptions = {
        defaultViewport: null,
        args: ["--start-maximized"],
        ignoreDefaultArgs: ["--enable-automation"],
        executablePath: puppeteer.executablePath("chrome"),
      };
      config.puppeteerOpt = Object.assign(
        {
          method: "launch",
          run(puppeteer) {
            return {
              headless: config.debug ? !config.debug : true,
              ...defaultOptions,
              // devtools: true,
              // slowMo: 50,
            };
          },
        },
        config.puppeteerOpt
      );

      this.browser = await puppeteer[config.puppeteerOpt.method](
        Object.assign(defaultOptions, config.puppeteerOpt.run(puppeteer))
      );

      this.berforeInit(config);
    })();
    this.spinner = ora({
      text: `正在生成中...`,
      spinner: {
        interval: 80,
        frames: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"],
      },
    });

    this.spinner.start();
  }
  berforeInit() {
    this.config.projects.reduce(async (promise, item, index) => {
      if (typeof item == "object" && !item.projectId) {
        spinner.fail(`projectId不能为空:`);
        process.exit();
      }

      await promise;
      await this.init(
        typeof item == "object" ? item : { projectId: item },
        index
      );

      this.cacheData.selectName = this.selectName;

      if (!this.cacheData[this.cacheKey.name]?.[index]) {
        this.cacheData[this.cacheKey.name][index] = {};
      }
      if (item.catIds && Array.isArray(item.catIds)) {
        // 不存在则创建
        this.cacheData[this.cacheKey.name][index].ids = item.catIds;
      } else {
        this.cacheData[this.cacheKey.name][index].pid = item;
      }

      if (this.index == this.config.projects.length - 1) {
        if (this.totalApiNames.length) {
          (this.config.cache == undefined ? true : this.config.cache) &&
            cache.setCache(this.cacheData);
          this.spinner.succeed(`接口已全部生成完毕:`);
          log(
            `总共生成接口${this.totalApiNames.join(",")}共${this.totalApiNames.length}个接口`
          );
        } else {
          this.spinner.warn(`程序已执行完毕,没有可需要生成的接口`);
        }

        process.exit();
      }
    }, Promise.resolve());
  }

  setHeader(desc, path, apiNames, url) {
    return `/* 
  引入:import {${apiNames}} from '@${path}'
  */        
  ${this.config.importRequestName}
    `;
  }

  async setRequestTemplate(opt) {
    const {
      paramsName = "",
      annotation = "",
      requestFunc = "",
    } = this.config.requestOptions;
    const projectName = opt.projectName;
    const determineParamsName = (opt) => {
      return typeof paramsName === "function"
        ? paramsName.call(this, opt)
        : opt.restFul || paramsName || opt.method === "get"
          ? "params"
          : "data";
    };

    const newParamsName = determineParamsName(opt);
    opt.newParamsName = newParamsName;

    let reqTypeCode = "";
    let resTypeCode = "";
    let reqTypeName = "";
    let resTypeName = "";
    if (opt.detail) {
      const {
        req_body_form,
        req_params,
        req_query,
        req_body_other,
        method,
        req_body_type,
        req_body_is_json_schema,
      } = opt.detail;
      reqTypeName = `I${opt.formatPaths.at(-2)}${opt.formatPaths.at(-1)}Params`;
      resTypeName = `I${opt.formatPaths.at(-2)}${opt.formatPaths.at(-1)}Data`;

      reqTypeCode = await genTemplateTS(reqTypeName, {
        reqBody: req_body_form.length
          ? req_body_form
          : req_params.length
            ? req_params
            : req_query.length
              ? req_query
              : req_body_other,
        method,
        reqType: req_body_type,
        jsonSchema: req_body_is_json_schema,
      });

      resTypeCode = await jsonSchemaToTs(
        resTypeName,
        opt.detail.res_body
          ? JSON.stringify(JSON.parse(opt.detail.res_body)?.properties?.data)
          : ""
      );
    }

    const annotationComment =
      typeof annotation === "function"
        ? `/*\n*@序号:${apiNum}\n${annotation.call(this, opt)}\n*/`
        : `/* 
      *@序号:${apiNum}
      *@项目名称:${projectName}
      *@菜单名称:${opt.title}(${opt.url}) 
      */`;

    const requestFuncCode =
      typeof requestFunc === "function"
        ? requestFunc
            .call(this, opt, reqTypeName, resTypeName)
            .replace(/url:\s*([^,\s]+),/g, "url:`$1`,")
        : `
      export function ${opt.apiName}(${this.config.typescript ? `${newParamsName}?:${reqTypeName}` : `${newParamsName}`}) ${this.config.typescript ? `: Promise<any>` : ""}  { 
        return ${this.requestName}({ url: \`${opt.path}\`, method: '${opt.method}', ${!opt.restFul ? ` ${newParamsName}` : ``}})
      }
      `;

    return `
    ${reqTypeCode}
    ${resTypeCode}
    ${annotationComment}
    ${requestFuncCode}
    `;
  }
  async gen(message) {
    if (message) {
      const { type } = await inquirer.prompt([
        {
          type: "list",
          message,
          name: "type",
          choices: this.files,
        },
      ]);
      this.selectName = type;
      this.readFiles = fs.readFileSync(this.selectName, "utf-8");
      // 拿到最后序号
      if (getNum(this.readFiles)) {
        apiNum = getNum(this.readFiles);
      }
      this.paths = this.readFiles
        .split("\n")
        .map((item) => {
          if (/^url/.test(item.trim())) {
            return item
              .split(":")[1]
              .replace(/[,'`:"${|}]/g, "")
              .trim();
          }
        })
        .filter((item) => item);
    }
    return {
      add: async (data, catIds, fn, isRepeat = true) => {
        for (let lIndex = 0; lIndex < data.list.length; lIndex++) {
          const item = data.list[lIndex];
          if (isRepeat) {
            // 如果没有重复的项则生成

            if (
              !this.paths.includes(item.path.replace(/\{|\}/g, "")) &&
              getGenType(catIds, lIndex + 1, item)
            ) {
              this.spinner.start(`正在生成${item.title}接口中...`);
              log(() => {
                if (data.list.length - 1 === lIndex)
                  this.spinner.succeed("已全部生成完毕");
              });
              if (this.config.typescript) {
                const detail = await fn(lIndex + 1, item);
                item.detail = detail;
              }

              apiNum++;
              let restFul = "";
              // 替换掉特殊字符串
              item.path = item.path.replace(/(\{\w+\})/g, (value) => {
                restFul = value.replace(/\{|\}/g, "");

                return "$" + value;
              });
              item.formatPaths = toCamelCase(
                item.path.replace(/(\/\$\{\w+\})/g, "")
              )
                .match(/[A-Z][^A-Z]*/g)
                .map((str) => str.replace(specialChat, ""));
              // 转为驼峰命名
              let apiName =
                (this.config.getRequestFunctionName &&
                  this.config.getRequestFunctionName(
                    toCamelCase(item.path),
                    item,
                    toCamelCase
                  )) ||
                (this.config.getRequestFunctionName &&
                  this.config.getRequestFunctionName(
                    toCamelCase(item.path),
                    item,
                    toCamelCase
                  )) ||
                toCamelCase(item.path);

              apiName = toCamelCase(
                apiName
                  .replace("${" + restFul, "by")
                  .replace("}", "/" + restFul)
                  .replace("/", "")
              );
              apiName = (
                apiName.charAt(0).toLowerCase() + apiName.slice(1)
              ).replace(specialChat, "");

              this.apiNames.push(apiName);
              this.totalApiNames.push(apiName);
              this.names.push(item.title);
            
              this.apis.push(
                await this.setRequestTemplate({
                  ...item,
                  title: item.title,
                  method: item.method.toLocaleLowerCase(),
                  apiName,
                  requestFunc: this.opt.requestFunc,
                  restFul,
                  apiNum,
                  projectName: `${this.projectName}(${this.apiUrl}/cat_${item.catid})`,
                  url: this.getUrl(item._id).menuUrl,
                  path: item.path,
                })
              );
            }
          }
        }

        if (!this.apiNames.length) {
          this.spinner.warn(`接口已存在该文件里,无需要生成`);
        }
        return Promise.resolve();
      },
    };
  }
  async request(url) {
    return await getRes(this.page, url, this.spinner);
  }
  createWriteFile() {
    return {
      // 写入接口
      writeApi: async () => {
        if (this.totalApiNames.length) {
          this.spinner.start(
            !this.paths.length ? `正在写入文件中...\n` : `正在更新文件中...\n`
          );
          fs.appendFileSync(
            this.selectName,
            await prettier.format(this.apis.join("\n"), {
              parser: this.config.typescript ? "typescript" : "babel",
            })
          );
          this.spinner
            .succeed(!this.paths.length ? "文件写入成功" : `文件更新成功`)
            .succeed(
              `成功生成${this.projectName}项目(${this.names.length}个接口):`
            );

          log(
            `菜单标题:${this.names.join(",")}`,
            `生成接口名称:${this.apiNames.join(",")}`
          );
          this.apiNames = [];
          this.names = [];
        }

        return this.createWriteFile();
      },

      // 写入头部
      writeHeader: () => {
        if (
          this.config.projects.every(
            (item) => typeof item === "string" || typeof item === "number"
          )
        ) {
          if (this.index == this.config.projects.length - 1) {
            // 加入最前面的头部
            this.apis.unshift(
              this.setHeader(
                this.projectName,
                this.selectName.replace("\\g", "/").match(/src(.*)$/)[1],
                this.totalApiNames.join(","),
                this.apiUrl
              )
            );
          }
        } else {
          if (!this.readFiles) {
            // 加入最前面的头部
            this.apis.unshift(
              this.setHeader(
                this.projectName,
                this.selectName.replace("\\g", "/").match(/src(.*)$/)[1],
                this.totalApiNames.join(","),
                this.apiUrl
              )
            );
          }
        }

        // 在文件内容中查找匹配项并进行替换
        const regex = /import\s*\{\s*([a-zA-Z,]+)\s*\}/;

        this.readFiles = this.readFiles.replace(regex, (match, group) => {
          // 在这里，group 就是大括号内的内容，你可以进行处理或替换
          return `import {${[...new Set([...group.split(","), ...this.totalApiNames])].join(",")}}`;
        });
        // 同步写入修改后的内容
        fs.writeFileSync(this.selectName, this.readFiles, "utf8");
        return this.createWriteFile();
      },
    };
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      this.page.on("response", async (response) => {
        if (response.url() === url && response.status() === 200) {
          const res = await response.json();
          if (res.errcode != 0) {
            spinner.fail(res.errmsg);
            process.exit();
          }
          resolve(res.data);
        }
      });
    });
  }
};
