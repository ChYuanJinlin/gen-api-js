"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
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
  function YApi(config) {
    var _this;
    (0, _classCallCheck2.default)(this, YApi);
    _this = _callSuper(this, YApi, [config]);
    // 默认域名
    _this.config.docUrl = _this.config.docUrl.replace(/\/$/, "") || "http://api.doc.jiyou-tech.com";
    return _this;
  }
  (0, _inherits2.default)(YApi, _global$Generator);
  return (0, _createClass2.default)(YApi, [{
    key: "getUrl",
    value: function getUrl(catId) {
      return {
        projectUrl: this.config.docUrl + "/project/".concat(this.projectId, "/interface/api/cat_").concat(catId),
        menuUrl: this.config.docUrl + "/project/".concat(this.projectId, "/interface/api/").concat(catId),
        indexUrl: this.config.docUrl + "/project/".concat(this.projectId, "/interface/api")
      };
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee4(opt, index) {
        var _this2 = this;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, reject) {
                  var _this2$page;
                  var c, _this2$cacheData$_thi, oldCatIds, _this2$cacheData$_thi2;
                  return _regenerator.default.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this2.browser.newPage();
                      case 2:
                        _this2.page = _context3.sent;
                        _this2.page.setDefaultTimeout(0);
                        // yapi登录地址
                        _context3.next = 6;
                        return _this2.page.goto(_this2.config.docUrl + "/login");
                      case 6:
                        _context3.next = 8;
                        return _this2.page.waitForSelector("#email", {
                          timeout: 0
                        });
                      case 8:
                        _context3.next = 10;
                        return _this2.page.waitForSelector("#email");
                      case 10:
                        _context3.next = 12;
                        return _this2.page.type("#email", _this2.userName);
                      case 12:
                        _context3.next = 14;
                        return _this2.page.type("#password", _this2.passWord);
                      case 14:
                        _context3.next = 16;
                        return _this2.page.keyboard.press("Enter");
                      case 16:
                        _context3.next = 18;
                        return _this2.request(_this2.config.docUrl + "/api/user/login");
                      case 18:
                        _context3.next = 20;
                        return _this2.page.cookies();
                      case 20:
                        c = _context3.sent;
                        _this2.cookies = c.map(function (item) {
                          return {
                            name: item.name,
                            value: item.value
                          };
                        });
                        _context3.next = 24;
                        return (_this2$page = _this2.page).setCookie.apply(_this2$page, (0, _toConsumableArray2.default)(_this2.cookies));
                      case 24:
                        _context3.next = 26;
                        return _this2.page.waitForSelector("#yapi > div > div.router-main > div.header-box.m-header.ant-layout-header");
                      case 26:
                        _context3.next = 28;
                        return getPageData(_this2.page, _this2.config.docUrl + "/api/project/get?id=".concat(opt.projectId), _this2.spinner);
                      case 28:
                        _this2.opt = opt;
                        _this2.catIds = opt.catIds;
                        _this2.projectId = opt.projectId;
                        _this2.index = index;
                        if (!(opt.catIds && Array.isArray(opt.catIds))) {
                          _context3.next = 40;
                          break;
                        }
                        oldCatIds = ((_this2$cacheData$_thi = _this2.cacheData[_this2.cacheKey.name]) === null || _this2$cacheData$_thi === void 0 || (_this2$cacheData$_thi = _this2$cacheData$_thi[index]) === null || _this2$cacheData$_thi === void 0 ? void 0 : _this2$cacheData$_thi.ids) || [];
                        _this2.catIds = opt.catIds.filter(function (item) {
                          return !oldCatIds.some(function (s) {
                            return getIds(s) === getIds(item);
                          });
                        });
                        if (_this2.catIds.length) {
                          _context3.next = 38;
                          break;
                        }
                        resolve();
                        return _context3.abrupt("return", false);
                      case 38:
                        _context3.next = 43;
                        break;
                      case 40:
                        if (!((_this2$cacheData$_thi2 = _this2.cacheData[_this2.cacheKey.name]) !== null && _this2$cacheData$_thi2 !== void 0 && _this2$cacheData$_thi2[index] && _this2.cacheData[_this2.cacheKey.name][index].pid)) {
                          _context3.next = 43;
                          break;
                        }
                        resolve();
                        return _context3.abrupt("return", false);
                      case 43:
                        // 判单当前是否选过文件,如果选过文件把当前选过的文件加载第一项
                        if (_this2.selectName) {
                          _this2.files = (0, _toConsumableArray2.default)(new Set([_this2.selectName].concat((0, _toConsumableArray2.default)(_this2.files))));
                        }
                        _context3.prev = 44;
                        _this2.apiUrl = _this2.getUrl().indexUrl;
                        _context3.next = 48;
                        return _this2.page.goto(_this2.apiUrl);
                      case 48:
                        // 监听当前接口返回数据
                        _this2.getData("".concat(_this2.config.docUrl, "/api/interface/list_menu?project_id=").concat(opt.projectId)).then(/*#__PURE__*/function () {
                          var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(menuList) {
                            var readList, mIndex, res, _yield$_this2$gen, add, ids, noIds, i, _index, _yield$_this2$gen2, _add;
                            return _regenerator.default.wrap(function _callee2$(_context2) {
                              while (1) switch (_context2.prev = _context2.next) {
                                case 0:
                                  _this2.spinner.stop();
                                  _context2.next = 3;
                                  return _this2.page.waitForSelector("#yapi > div > div.router-main > div.header-box.m-header.ant-layout-header > div > div.breadcrumb-container > div > span:nth-child(2) > span.ant-breadcrumb-link", {
                                    timeout: 0
                                  });
                                case 3:
                                  _context2.next = 5;
                                  return _this2.page.$eval("#yapi > div > div.router-main > div.header-box.m-header.ant-layout-header > div > div.breadcrumb-container > div > span:nth-child(2) > span.ant-breadcrumb-link", function (el) {
                                    return el.innerText;
                                  });
                                case 5:
                                  _this2.projectName = _context2.sent;
                                  _this2.projectNames.push("".concat(_this2.projectName, "(").concat(_this2.apiUrl, ")"));
                                  // 判断当前数组里面是否都是string类型或者是number类型
                                  readList = function readList(lIndex, item) {
                                    return new Promise(/*#__PURE__*/function () {
                                      var _ref3 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(resolve) {
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
                                      return function (_x6) {
                                        return _ref3.apply(this, arguments);
                                      };
                                    }());
                                  };
                                  if (!_this2.config.projects.every(function (item) {
                                    return typeof item === "string" || typeof item === "number";
                                  })) {
                                    _context2.next = 23;
                                    break;
                                  }
                                  _this2.selectName = "";
                                  mIndex = 0;
                                case 11:
                                  if (!(mIndex < menuList.length)) {
                                    _context2.next = 21;
                                    break;
                                  }
                                  if (_this2.selectName) {
                                    _context2.next = 15;
                                    break;
                                  }
                                  _context2.next = 15;
                                  return _this2.gen("请选择需要生成所有接口的文件");
                                case 15:
                                  _context2.next = 17;
                                  return _this2.gen();
                                case 17:
                                  _context2.sent.add(menuList[mIndex]);
                                case 18:
                                  mIndex++;
                                  _context2.next = 11;
                                  break;
                                case 21:
                                  _context2.next = 62;
                                  break;
                                case 23:
                                  if (_this2.opt.catIds) {
                                    _context2.next = 38;
                                    break;
                                  }
                                  _context2.next = 26;
                                  return _this2.page.goto(_this2.config.docUrl + "/api/interface/list?page=1&limit=999999&project_id=".concat(opt.projectId));
                                case 26:
                                  res = _context2.sent;
                                  _context2.next = 29;
                                  return res.json();
                                case 29:
                                  menuList = _context2.sent.data;
                                  _context2.next = 32;
                                  return _this2.gen("\u8BF7\u9009\u62E9\u9700\u8981\u751F\u6210".concat(_this2.projectName, "\u9879\u76EE\u63A5\u53E3\u6587\u4EF6((\u63A5\u53E3\u5171").concat(menuList.list.length, "\u4E2A))"));
                                case 32:
                                  _yield$_this2$gen = _context2.sent;
                                  add = _yield$_this2$gen.add;
                                  _context2.next = 36;
                                  return add(menuList, undefined, readList);
                                case 36:
                                  _context2.next = 62;
                                  break;
                                case 38:
                                  ids = menuList.map(function (item) {
                                    return item._id;
                                  });
                                  noIds = _this2.catIds.filter(function (item) {
                                    return !ids.includes(getIds(item));
                                  });
                                  noIds.some(function (item) {
                                    _this2.spinner.warn("".concat(item, "\u5206\u7C7Bid\u4E0D\u5B58\u5728,\u8BF7\u68C0\u67E5\u8BE5\u5206\u7C7Bid\u662F\u5426\u5728\u8BE5\u9879\u76EE"));
                                    process.exit();
                                  });
                                  i = 0;
                                case 42:
                                  if (!(i < _this2.catIds.length)) {
                                    _context2.next = 62;
                                    break;
                                  }
                                  _index = 0;
                                case 44:
                                  if (!(_index < menuList.length)) {
                                    _context2.next = 59;
                                    break;
                                  }
                                  if (!(menuList[_index]._id == getIds(_this2.catIds[i]))) {
                                    _context2.next = 56;
                                    break;
                                  }
                                  _context2.next = 48;
                                  return _this2.page.click(".interface-list > li:nth-child(".concat(_index + 2, ")"));
                                case 48:
                                  _context2.next = 50;
                                  return _this2.gen("\u8BF7\u9009\u62E9\u9700\u8981\u751F\u6210".concat(menuList[_index].name || menuList[_index].desc, "\u63A5\u53E3\u7684\u6587\u4EF6(\u9879\u76EE\u540D:").concat(_this2.projectName, "(\u63A5\u53E3\u5171").concat(menuList[_index].list.length, "\u4E2A))"));
                                case 50:
                                  _yield$_this2$gen2 = _context2.sent;
                                  _add = _yield$_this2$gen2.add;
                                  if (!menuList[_index].list) {
                                    _context2.next = 55;
                                    break;
                                  }
                                  _context2.next = 55;
                                  return _add(menuList[_index], _this2.catIds[i], readList, true);
                                case 55:
                                  return _context2.abrupt("break", 59);
                                case 56:
                                  _index++;
                                  _context2.next = 44;
                                  break;
                                case 59:
                                  i++;
                                  _context2.next = 42;
                                  break;
                                case 62:
                                  _context2.next = 64;
                                  return _this2.createWriteFile().writeHeader().writeApi();
                                case 64:
                                  resolve();
                                case 65:
                                case "end":
                                  return _context2.stop();
                              }
                            }, _callee2);
                          }));
                          return function (_x5) {
                            return _ref2.apply(this, arguments);
                          };
                        }());
                        _context3.next = 54;
                        break;
                      case 51:
                        _context3.prev = 51;
                        _context3.t0 = _context3["catch"](44);
                        console.log(_context3.t0);
                      case 54:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, null, [[44, 51]]);
                }));
                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function init(_x, _x2) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
}(global.Generator);