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
module.exports = /*#__PURE__*/function (_global$Generator) {
  function ApiFox(config) {
    var _this;
    (0, _classCallCheck2.default)(this, ApiFox);
    _this = _callSuper(this, ApiFox, [config]);
    _this.setDocUrl("https://app.apifox.com");
    _this.setResponse('errorMessage', 'errorCode');
    return _this;
  }
  (0, _inherits2.default)(ApiFox, _global$Generator);
  return (0, _createClass2.default)(ApiFox, [{
    key: "getUrl",
    value: function getUrl(catId) {
      return {
        projectUrl: this.config.docUrl + "/project/".concat(this.projectId, "/interface/api/cat_").concat(catId),
        menuUrl: this.config.docUrl + "/project/".concat(this.projectId, "/interface/api/").concat(catId),
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
              return _context3.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {
                  var projectClass;
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
                        projectClass = "#root > div > section > div > div.WebLayoutContainer_container__F2McA.WebLayoutContainer_webContainer__VHWYu > div.WebLayoutContainer_webTitleBar__269bc > div > div.h-full.flex-1 > nav > ol > li:nth-child(2) > span.ui-breadcrumb-overlay-link.cursor-pointer > span > div > div";
                        _context2.next = 9;
                        return _this2.page.waitForSelector(projectClass);
                      case 9:
                        _context2.next = 11;
                        return _this2.page.$eval(projectClass, function (el) {
                          return el.innerText;
                        });
                      case 11:
                        _this2.projectName = _context2.sent;
                        //   if (!this.isCatIds(this.catIds)) {
                        //     return false;
                        //   }
                        _this2.setFiles();
                        _this2.getData("/api-tree-list").then(/*#__PURE__*/function () {
                          var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(menuList) {
                            return _regenerator.default.wrap(function _callee$(_context) {
                              while (1) switch (_context.prev = _context.next) {
                                case 0:
                                  console.log("🚀 ~ ApiFox ~ ).then ~ menuList:", menuList);
                                  resolve();
                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }, _callee);
                          }));
                          return function (_x5) {
                            return _ref2.apply(this, arguments);
                          };
                        }());
                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function init(_x, _x2) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
}(global.Generator);