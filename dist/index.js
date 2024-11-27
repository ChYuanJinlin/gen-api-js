"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _GenApi;
require("./utils/Generator");
var path = require("path");
var YApi = require(path.join(__dirname, "core/YApi"));
module.exports = (_GenApi = /*#__PURE__*/function () {
  function GenApi() {
    (0, _classCallCheck2.default)(this, GenApi);
  }
  return (0, _createClass2.default)(GenApi, null, [{
    key: "createGenApi",
    value: function createGenApi(config) {
      this.docName = config.docName;
      switch (this.docName) {
        case "yapi":
          return new YApi(config);
        default:
          break;
      }
    }
  }]);
}(), (0, _defineProperty2.default)(_GenApi, "docName", void 0), _GenApi);