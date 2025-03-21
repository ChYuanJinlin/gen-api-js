"use strict";

var fs = require("fs");
var path = require("path");
var cacheData = {};
module.exports = {
  cacheFileName: "",
  getCacheKey: function getCacheKey(key) {
    if (fs.existsSync(path.join(process.cwd(), this.cacheFileName))) {
      cacheData = fs.readFileSync(path.join(process.cwd(), this.cacheFileName), "utf-8");
      var data = cacheData ? JSON.parse(cacheData) : {};
      return data[key];
    }
  },
  getCache: function getCache() {
    if (fs.existsSync(path.join(process.cwd(), this.cacheFileName))) {
      cacheData = fs.readFileSync(path.join(process.cwd(), this.cacheFileName), "utf-8");
      return cacheData ? JSON.parse(cacheData) : null;
    }
  },
  setCache: function setCache(data) {
    fs.writeFileSync(path.join(process.cwd(), this.cacheFileName), JSON.stringify(data));
  },
  setCacheFileName: function setCacheFileName() {
    var cacheFileName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "genApi.data.json";
    this.cacheFileName = cacheFileName;
  }
};