const fs = require("fs");
const path = require("path");

/**
 * @description: 获取文件夹下的所有文件的名称
 * @param {*} dir:文件目录
 * @param {*} callback:
 * @return {*}
 */
const getFilenames = (dir, callback) => {
  function ensureDirectoryExistence(filePath) {
    if (!fs.existsSync(filePath)) {
      console.log("文件夹不存在" + filePath);
      process.exit();
    }
  }
  ensureDirectoryExistence(dir);

  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file, index) => {
      let fullPath = path.join(dir, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) throw err;
        if (stats.isDirectory()) {
          getFilenames(fullPath, callback);
        } else {
          callback(fullPath, files, index);
        }
      });
    });
  });
};
/**
 * @description: 创建文件
 * @param {*} _path:创建文件的路径
 * @param {*} data:创建文件的数据
 * @return {*}
 */
const createfolderFile = (_path, data) => {
  const paths = _path.split("/");
  paths.forEach((file, index) => {
    // 如果为true 证明是文件
    if (/\w\.\w/g.test(file)) {
      fs.writeFileSync(
        path.join(
          process.cwd(),
          "src",
          _path.slice(0, _path.indexOf(file)) + file
        ),
        data,
        "utf8"
      );
    } else {
      if (
        fs.existsSync(
          path.join(
            process.cwd(),
            "src",
            _path.slice(0, _path.indexOf(file)) + file
          )
        )
      ) {
        console.log("文件已存在");
        process.exit();
      }
      fs.mkdirSync(
        path.join(
          process.cwd(),
          "src",
          _path.slice(0, _path.indexOf(file)) + file
        )
      );
    }
  });
};

module.exports = {
  getFilenames,
  createfolderFile,
  /**
   * @description: 转为驼峰命名
   * @param {*} str:
   * @return {*}
   */
  toCamelCase(str) {
    return str.replace(/([/_-][a-z])/g, (group) =>
      group.toUpperCase().replace(/\/|_|-/g, "")
    );
  },
  /**
   * @description: 获取response中的json数据
   * @param {*} page:
   * @param {*} url:
   * @param {*} spinner:
   */
  async getRes(page, url, spinner) {
    return new Promise(async (resolve) => {
      await page.waitForResponse(async (res) => {
        if (new RegExp(url, "g").test(res.url()) && res.status() === 200) {
          const loginRes = await res.json();
          if (loginRes.errcode != 0) {
            spinner.fail(loginRes.errmsg);
          }
          resolve(loginRes);
        } else if (res.status() === 500) {
          this.spinner.fail("未知错误");
        }
      });
    });
  },
  getFileData(...args) {
    return args.map((_path) => {
      return fs.readFileSync(path.join(__dirname, _path), "utf-8");
    });
  },
  // 判断一下生成的类型  使用方式: catids:[111,'开始下标-结束下标']下标是从1开始(生成下标范围api)  catids:[111,3]生成单独某一项(传下标|id|菜单名称)catids:[111,'1 3 5]批量生成对应的项(传下标|id|菜单名称) catids:[111,'-xxx] 排除当前这项(传下标|id|菜单名称)
  getGenType(catIds, curIndex, item) {
    if (!item.path) {
      return;
    }
    const excludes = [];
    const arr = [curIndex, item._id, item.title];
    const regex = /-(\d+)(?![-\d])/g;
    let minIndex, maxIndex;
    let nums = [];
    // 标识是否是-开头
    let flag = false;
    let match;
    // 如果catIds没有全部生成
    if (!catIds) {
      return true;
    }
    if (
      catIds[1] &&
      typeof catIds[1] === "string" &&
      !/[- ]/g.test(catIds[1])
    ) {
      throw new Error("请输入正确格式,如[xxx-xxx]|[xx xx xx]|[-xxx]  ");
    }

    while ((match = regex.exec(catIds[1])) !== null) {
      // 检查匹配的数字是否是单独的，不是1-xxx这种形式的一部分
      if (!/\d-\d/.test(match.input.slice(0, match.index + match[0].length))) {
        excludes.push(parseInt(match[1])); // 输出匹配到的数字
      }
    }

    // 如果排除项有值
    if (excludes.length && arr.some((item) => excludes.includes(item))) {
      return !arr.some((item) => excludes.includes(item));
    }

    if (catIds[1]) {
      if (catIds[1].toString().indexOf("-") > -1) {
        const [min, max] = catIds[1].split("-");
        minIndex = min;
        maxIndex = max || "";
        flag = true;
      } else {
        nums = catIds[1]
          .toString()
          .split(" ")
          .map((item) => parseInt(item));
      }
    }
    if (!minIndex && !nums.length) return true;
    // 如果当前为true 证明是 是范围类型
    if (flag) {
      if (maxIndex && minIndex) {
        return curIndex >= minIndex && curIndex <= maxIndex;
      } else {
        throw new Error("请输入正确的范围");
      }
    } else {
      return arr.some((item) => nums.includes(item));
    }
  },

  log(...args) {
    args.forEach((item) => {
      if (typeof item == "function") {
        if (item()) {
          console.log(item());
        }
      } else {
        console.log(item);
      }
    });
  },

  // 获取序号
  getNum(str) {
    return parseInt(
      str
        .match(/序号:(\d+)/g)
        ?.at(-1)
        .split(":")[1]
    );
  },
  getIds(ids) {
    return Array.isArray(ids) ? ids[0] : ids;
  },
  async getPageData(page, url, spinner) {
    return new Promise(async (resolve) => {
      const res = page.goto(url);

      const loginRes = await res;
      const data = await loginRes.json();
      if (data.errcode !== 0) {
        spinner.fail(data.errmsg);
      }
      resolve(data.data);
    });
  },
};
