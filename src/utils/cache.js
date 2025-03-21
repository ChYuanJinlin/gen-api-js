const fs = require("fs");
const path = require("path");
let cacheData = {};

module.exports = {
  cacheFileName: "",
  getCacheKey(key) {
    if (fs.existsSync(path.join(process.cwd(), this.cacheFileName))) {
      cacheData = fs.readFileSync(
        path.join(process.cwd(), this.cacheFileName),
        "utf-8"
      );
      let data = cacheData ? JSON.parse(cacheData) : {};
      return data[key];
    }
  },
  getCache() {
    if (fs.existsSync(path.join(process.cwd(), this.cacheFileName))) {
      cacheData = fs.readFileSync(
        path.join(process.cwd(), this.cacheFileName),
        "utf-8"
      );
      return cacheData ? JSON.parse(cacheData) : null;
    }
  },
  setCache(data) {
    fs.writeFileSync(
      path.join(process.cwd(), this.cacheFileName),
      JSON.stringify(data)
    );
  },
  setCacheFileName(cacheFileName = "genApi.data.json") {
    this.cacheFileName = cacheFileName;
  },
};
