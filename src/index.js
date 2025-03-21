require("./utils/Generator");
const path = require("path");
const ApiFox = require(path.join(__dirname, "core/ApiFox"));
const YApi = require(path.join(__dirname, "core/YApi"));
module.exports = class GenApi {
  static docName;
  static createGenApi(config) {
    this.docName = config.docName;
    switch (this.docName) {
      case "apifox":
        return new ApiFox(config);
      case "yapi":
        return new YApi(config);
      default:
        break;
    }
  }
};
