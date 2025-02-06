"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var _require = require("../utils/index"),
  getIds = _require.getIds,
  getPageData = _require.getPageData;
module.exports = /*#__PURE__*/function (_global$Generator) {
  function ApiFox(config) {
    var _this;
    (0, _classCallCheck2.default)(this, ApiFox);
    _this = _callSuper(this, ApiFox, [config]);
    _this.setDocUrl("https://app.apifox.com");
    _this.setResponse("errorMessage", "errorCode");
    return _this;
  }
  (0, _inherits2.default)(ApiFox, _global$Generator);
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
      var _init = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee5(opt, index) {
        var _this2 = this;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.projectId = opt.projectId;
              this.setIndexUrl("/project/".concat(this.projectId));
              this.opt = opt;
              this.catIds = opt.catIds;
              this.index = index;
              return _context5.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {
                  var projectClass, readList, options;
                  return _regenerator.default.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _this2.browser.newPage();
                      case 2:
                        _this2.page = _context4.sent;
                        _context4.next = 5;
                        return _this2.page.goto(_this2.indexUrl);
                      case 5:
                        _this2.page.setDefaultTimeout(0);
                        projectClass = "#root > div > section > div > div.WebLayoutContainer_container__F2McA.WebLayoutContainer_webContainer__VHWYu > div.WebLayoutContainer_webTitleBar__269bc > div > div.h-full.flex-1 > nav > ol > li:nth-child(2) > span.ui-breadcrumb-overlay-link.cursor-pointer > span > div > div";
                        _context4.next = 9;
                        return _this2.page.waitForSelector(projectClass);
                      case 9:
                        _context4.next = 11;
                        return _this2.page.$eval(projectClass, function (el) {
                          return el.innerText;
                        });
                      case 11:
                        _this2.projectName = _context4.sent;
                        _this2.projectNames.push("".concat(_this2.projectName, "(").concat(_this2.indexUrl, ")"));
                        //   if (!this.isCatIds(this.catIds)) {
                        //     return false;
                        //   }
                        _this2.setFiles();
                        readList = function readList(lIndex, item) {
                          return new Promise(/*#__PURE__*/function () {
                            var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(resolve) {
                              var data;
                              return _regenerator.default.wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return getPageData(_this2.page, _this2.config.docUrl + "/api/interface/get?id=".concat(item._id), _this2.spinner);
                                  case 2:
                                    data = _context.sent;
                                    resolve(data);
                                  case 4:
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
                        options = {
                          projectName: _this2.projectName
                        };
                        _this2.getData("/api-tree-list").then(/*#__PURE__*/function () {
                          var _ref3 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(menuList) {
                            var readList, list, currentMenus, _diff;
                            return _regenerator.default.wrap(function _callee3$(_context3) {
                              while (1) switch (_context3.prev = _context3.next) {
                                case 0:
                                  readList = function readList(lIndex, item) {
                                    return new Promise(/*#__PURE__*/function () {
                                      var _ref4 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(resolve) {
                                        var data;
                                        return _regenerator.default.wrap(function _callee2$(_context2) {
                                          while (1) switch (_context2.prev = _context2.next) {
                                            case 0:
                                              _context2.next = 2;
                                              return getPageData(_this2.page, _this2.config.docUrl + "/api/v1/projects/".concat(opt.projectId, "/http-apis/").concat(item.id, "?locale=zh-CN"), _this2.spinner);
                                            case 2:
                                              data = _context2.sent;
                                              console.log("🚀 ~ ApiFox ~ returnnewPromise ~ data:", data);
                                              resolve(data);
                                            case 5:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }, _callee2);
                                      }));
                                      return function (_x7) {
                                        return _ref4.apply(this, arguments);
                                      };
                                    }());
                                  };
                                  list = [], currentMenus = [];
                                  _diff = function diff(obj) {
                                    if (obj && obj.children.length) {
                                      obj.children.forEach(function (item) {
                                        _diff(item);
                                      });
                                    } else {
                                      var apiObj = null;
                                      obj.api._id = obj.api.id;
                                      obj.api.title = obj.api.name;
                                      apiObj = JSON.parse(JSON.stringify(obj.api));
                                      obj = null;
                                      obj = apiObj;
                                      delete obj.api;
                                      list.push(obj);
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
                                    _context3.next = 9;
                                    break;
                                  }
                                  _context3.next = 7;
                                  return _this2.genAllApi(menuList, options);
                                case 7:
                                  _context3.next = 17;
                                  break;
                                case 9:
                                  if (_this2.opt.catIds) {
                                    _context3.next = 15;
                                    break;
                                  }
                                  // 如果当前没有分类只有项目则生成项目下的所有api
                                  _this2.projectName = currentMenus.name;
                                  _context3.next = 13;
                                  return _this2.genProjectApi(currentMenus, readList, options);
                                case 13:
                                  _context3.next = 17;
                                  break;
                                case 15:
                                  _context3.next = 17;
                                  return _this2.genProjectMenusApi(menuList, readList, options);
                                case 17:
                                  _context3.next = 19;
                                  return _this2.createWriteFile().writeHeader().writeApi();
                                case 19:
                                  resolve();
                                case 20:
                                case "end":
                                  return _context3.stop();
                              }
                            }, _callee3);
                          }));
                          return function (_x6) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function init(_x, _x2) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
}(global.Generator);