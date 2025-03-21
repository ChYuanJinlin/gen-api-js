#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const GenApi = require("./index.js");
require("core-js/stable");
// require("regenerator-runtime/runtime");
let configPath = "";
let docsWebs = [];
docsWebs = fs
  .readdirSync(path.join(__dirname, "./", "core"))
  .map((file) => {
    return file.toLocaleLowerCase().replace(".js", "");
  });



if (fs.existsSync(path.join(process.cwd(), "api.config.js"))) {
  configPath = "api.config.js";
} else if (process.argv[3]) {
  configPath = process.argv[3];
} else {
  console.log("找不到配置文件，请使用 gen-api init 命令初始化配置文件");
  process.exit();
}

// 读取配置文件
const configs = require(path.join(process.cwd(), configPath));
if (!configs.users.userName || !configs.users.passWord) {
  console.log("账号或密码不能为空");
  process.exit();
}
if (
  !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
    configs.users.userName
  )
) {
  console.log("请输入正确的邮箱号");
  process.exit();
}
if (!configs.docUrl) {
  console.log("docUrl字段必填");
  process.exit();
}


configs.docName = configs.docName || "yapi";
if (!docsWebs.includes(configs.docName)) {
  console.log(`不支持该${configs.docName}在线API网站`);
  process.exit();
}

if (Array.isArray(configs.projects) && !configs.projects.length) {
  console.log("projects必填!");
  process.exit();
}

// 创建需要生成在线文档的api
GenApi.createGenApi(configs);
