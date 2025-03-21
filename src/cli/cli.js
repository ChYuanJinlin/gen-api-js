#!/usr/bin/env node
const { program } = require("commander");
const path = require("path");
const fs = require("fs");
const { getFileData, createfolderFile } = require("../utils/index.js");
// 获取配置文件的数据
const [configData, axiosData] = getFileData(
  "../config/api.config.js",
  "../config/axios.js"
);
if (process.argv.length > 2) {
  program
    .version(require("../package.json").version)
    .description("API文档生成工具");

  program
    .command("init")
    .description("初始化配置文件 ")
    .option("--axios <path>", "创建axios文件")
    .action((options) => {
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

      const initPath = path.join(process.cwd(), "api.config.js");
      fs.writeFileSync(initPath, configData, "utf8");
      console.log(`初始化配置文件成功${initPath}`);

      process.exit();
    });

  program
    .command("--p <path>")
    .description("自定义配置文件路径")
    .action((path) => {
      if (!path) {
        console.log("请传入你的路径！");
        process.exit();
      }
      if (!fs.existsSync(path.join(process.cwd(), path))) {
        console.log(
          "找不到配置文件，请使用命令 gen-api --c <path> 创建你的配置文件路径!"
        );
        process.exit();
      }
      process.exit();
    });

  program
    .command("--c <path>")
    .description("创建自定义配置文件")
    .action((path) => {
      if (!path) {
        console.log("请传入你的路径！");
        process.exit();
      }
      if (fs.existsSync(path.join(process.cwd(), path))) {
        console.log("配置文件已存在");
        process.exit();
      }
      const cPath = path.join(process.cwd(), path);
      fs.writeFileSync(cPath, configData, "utf8");
      console.log(`配置文件创建成功${cPath}`);
      process.exit();
    });

  program.parse(process.argv);
}

require("../gen-api");
