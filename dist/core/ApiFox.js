"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var _require = require("../utils/index"),
  getIds = _require.getIds;
module.exports = /*#__PURE__*/function (_Generator) {
  function ApiFox(config) {
    var _this;
    (0, _classCallCheck2.default)(this, ApiFox);
    _this = _callSuper(this, ApiFox, [config]);
    _this.setDocUrl("https://app.apifox.com");
    _this.setResponse("errorMessage", "errorCode");
    return _this;
  }
  (0, _inherits2.default)(ApiFox, _Generator);
  return (0, _createClass2.default)(ApiFox, [{
    key: "getUrl",
    value: function getUrl(catId) {
      return {
        projectUrl: this.config.docUrl + "/project/".concat(this.projectId, "/interface/api/cat_").concat(catId),
        menuUrl: this.config.docUrl + "/project/".concat(this.projectId),
        indexUrl: this.config.docUrl + "/project/".concat(this.projectId)
      };
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(opt, index) {
        var _this2 = this;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.projectId = opt.projectId;
              this.setIndexUrl("/project/".concat(this.projectId));
              this.opt = opt;
              this.catIds = opt.catIds;
              this.index = index;
              _context3.prev = 5;
              return _context3.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {
                  var projectClass, options, _yield$_this2$getData, _yield$_this2$getData2, menuList, details, readList, list, currentMenus, listAll, _diff;
                  return _regenerator.default.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _this2.browser.newPage();
                      case 2:
                        _this2.page = _context2.sent;
                        _context2.next = 5;
                        return _this2.page.goto(_this2.indexUrl);
                      case 5:
                        _this2.page.setDefaultTimeout(0);
                        projectClass = "#root > div > section > div > div.container-PJZkzQ.webContainer-sdsCoJ > div.webTitleBar-pNIDD3 > div > div.h-full.flex-1 > nav > ol > li:nth-child(2) > span.ui-breadcrumb-overlay-link.cursor-pointer > span > div > div";
                        _context2.next = 9;
                        return _this2.page.$(projectClass);
                      case 9:
                        if (_context2.sent) {
                          _context2.next = 11;
                          break;
                        }
                        _this2.spinner.warn("请登录");
                      case 11:
                        _context2.next = 13;
                        return _this2.page.waitForSelector(projectClass);
                      case 13:
                        _context2.next = 15;
                        return _this2.page.$eval(projectClass, function (el) {
                          return el.innerText;
                        });
                      case 15:
                        _this2.projectName = _context2.sent;
                        _this2.projectNames.push("".concat(_this2.projectName, "(").concat(_this2.indexUrl, ")"));
                        if (_this2.isCatIds(_this2.catIds)) {
                          _context2.next = 20;
                          break;
                        }
                        resolve();
                        return _context2.abrupt("return");
                      case 20:
                        _this2.setFiles();
                        options = {
                          projectName: _this2.projectName
                        };
                        _context2.next = 24;
                        return _this2.page.reload();
                      case 24:
                        _context2.next = 26;
                        return _this2.getData(["/api-tree-list", "/api-details"]);
                      case 26:
                        _yield$_this2$getData = _context2.sent;
                        _yield$_this2$getData2 = (0, _slicedToArray2.default)(_yield$_this2$getData, 2);
                        menuList = _yield$_this2$getData2[0];
                        details = _yield$_this2$getData2[1];
                        // 获取详情
                        readList = function readList(lIndex, item) {
                          return new Promise(/*#__PURE__*/function () {
                            var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(resolve) {
                              var data, _data$responses$prope, _data$responseExample;
                              return _regenerator.default.wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    data = details.find(function (dItem) {
                                      return dItem.folderId === item.folderId;
                                    });
                                    data.reqBody = data.parameters.query;
                                    data.reqType = data.requestBody.type;
                                    data.ReqJsonSchema = null;
                                    if (data.responses.properties) {
                                      data.ResJsonSchema = ((_data$responses$prope = data.responses.properties) === null || _data$responses$prope === void 0 ? void 0 : _data$responses$prope.data) || "";
                                    } else {
                                      data.ResJsonSchema = ((_data$responseExample = data.responseExamples) === null || _data$responseExample === void 0 ? void 0 : _data$responseExample.data) || "";
                                    }
                                    resolve(data);
                                  case 6:
                                  case "end":
                                    return _context.stop();
                                }
                              }, _callee);
                            }));
                            return function (_x5) {
                              return _ref2.apply(this, arguments);
                            };
                          }());
                        };
                        list = [], currentMenus = [], listAll = [];
                        _diff = function diff(obj) {
                          if (obj && obj.children.length) {
                            obj.children.forEach(function (item) {
                              _diff(item);
                            });
                          } else {
                            if (!obj.api) {
                              return;
                            }
                            var apiObj = null;
                            obj.api._id = obj.api.id;
                            obj.api.title = obj.api.name;
                            apiObj = JSON.parse(JSON.stringify(obj.api));
                            obj = null;
                            obj = apiObj;
                            delete obj.api;
                            list.push(obj);
                            listAll.push(obj);
                          }
                        };
                        menuList.forEach(function (item) {
                          var _item$folder, _item$folder2, _item$api;
                          _diff(item);
                          item.list = list;
                          list = [];
                          item._id = (_item$folder = item.folder) !== null && _item$folder !== void 0 && _item$folder.id ? (_item$folder2 = item.folder) === null || _item$folder2 === void 0 ? void 0 : _item$folder2.id : (_item$api = item.api) === null || _item$api === void 0 ? void 0 : _item$api.id;
                          if (item._id === getIds(_this2.catIds)) {
                            currentMenus = item;
                          }
                        });
                        if (!_this2.isProjectId()) {
                          _context2.next = 39;
                          break;
                        }
                        _context2.next = 37;
                        return _this2.genAllApi(menuList, options);
                      case 37:
                        _context2.next = 46;
                        break;
                      case 39:
                        if (_this2.opt.catIds) {
                          _context2.next = 44;
                          break;
                        }
                        _context2.next = 42;
                        return _this2.genProjectApi({
                          list: listAll
                        }, readList, options);
                      case 42:
                        _context2.next = 46;
                        break;
                      case 44:
                        _context2.next = 46;
                        return _this2.genProjectMenusApi(menuList, readList, options);
                      case 46:
                        _context2.next = 48;
                        return _this2.createWriteFile().writeHeader().writeApi();
                      case 48:
                        resolve();
                      case 49:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](5);
              console.log("🚀 ~ ApiFox ~ init ~ error:", _context3.t0);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[5, 9]]);
      }));
      function init(_x, _x2) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
}(Generator);