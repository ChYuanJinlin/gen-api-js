#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _require = require("commander"),
  program = _require.program;
var path = require("path");
var fs = require("fs");
var _require2 = require("../utils/index.js"),
  getFileData = _require2.getFileData,
  createfolderFile = _require2.createfolderFile;
// 获取配置文件的数据
var _getFileData = getFileData("../config/api.config.js", "../config/axios.js"),
  _getFileData2 = (0, _slicedToArray2.default)(_getFileData, 2),
  configData = _getFileData2[0],
  axiosData = _getFileData2[1];
if (process.argv.length > 2) {
  program.version(require("../package.json").version).description("API文档生成工具");
  program.command("init").description("初始化配置文件 ").option("--axios <path>", "创建axios文件").action(function (options) {
    if (process.argv.length >= 4) {
      if (!options.axios) {
        console.log("请传入你的路径！");
      } else {
        createfolderFile(options.axios, axiosData);
        console.log("创建axios文件成功");
      }
    }
    if (fs.existsSync(path.join(process.cwd(), "api.config.js"))) {
      console.log("配置文件已存在");
      process.exit();
    }
    var initPath = path.join(process.cwd(), "api.config.js");
    fs.writeFileSync(initPath, configData, "utf8");
    console.log("\u521D\u59CB\u5316\u914D\u7F6E\u6587\u4EF6\u6210\u529F".concat(initPath));
    process.exit();
  });
  program.command("--p <path>").description("自定义配置文件路径").action(function (path) {
    if (!path) {
      console.log("请传入你的路径！");
      process.exit();
    }
    if (!fs.existsSync(path.join(process.cwd(), path))) {
      console.log("找不到配置文件，请使用命令 gen-api --c <path> 创建你的配置文件路径!");
      process.exit();
    }
    process.exit();
  });
  program.command("--c <path>").description("创建自定义配置文件").action(function (path) {
    if (!path) {
      console.log("请传入你的路径！");
      process.exit();
    }
    if (fs.existsSync(path.join(process.cwd(), path))) {
      console.log("配置文件已存在");
      process.exit();
    }
    var cPath = path.join(process.cwd(), path);
    fs.writeFileSync(cPath, configData, "utf8");
    console.log("\u914D\u7F6E\u6587\u4EF6\u521B\u5EFA\u6210\u529F".concat(cPath));
    process.exit();
  });
  program.parse(process.argv);
}
require("../gen-api");