"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ora = require("ora");
var puppeteer = require("puppeteer-core");
var inquirer = require("inquirer");
var prettier = require("prettier");
var path = require("path");
var fs = require("fs");
var apiNum = 0;
var _require = require("./index"),
  getFilenames = _require.getFilenames,
  toCamelCase = _require.toCamelCase,
  getRes = _require.getRes,
  getGenType = _require.getGenType,
  log = _require.log,
  getNum = _require.getNum;
var _require2 = require("./toTs"),
  jsonSchemaToTs = _require2.jsonSchemaToTs;
var _require3 = require("./translate.js"),
  genTemplateTS = _require3.genTemplateTS;
var cache = require("./cache");
var cacheKey = require(path.join(process.cwd(), "package.json"));
var specialChat = /\/|\d|\/\d|\/\$|\{|\}/g;
global.Generator = /*#__PURE__*/function () {
  function Generator(config) {
    var _exec,
      _name,
      _this = this;
    (0, _classCallCheck2.default)(this, Generator);
    this.config = config;
    // 存放apiFilePath 下所有的文件名
    this.files = [];
    this.cacheKey = cacheKey;
    this.projectNames = [];
    // 接口所有的名称
    this.apiNames = [];
    // 当前第几项
    this.curNum = function () {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return num;
    };
    config.importRequestName = config.importRequestName || "import ajax from '@/utils/request'";
    // 导入封装的接口名称
    var name = (_exec = /import (.*?) from/.exec(config.importRequestName)) === null || _exec === void 0 ? void 0 : _exec[1];
    (_name = name) !== null && _name !== void 0 && _name.includes("{") ? name = name.replace(/{|}/g, "").split(",")[0] : name;
    this.requestName = name;
    // 接口总共的数量
    this.totalApiNames = [];
    // 接口所有的菜单名称
    this.names = [];
    // 选择的文件名
    this.selectName = "";
    // 生成缓存数据的文件
    cache.setCacheFileName(config.cacheFileName);
    // 账号
    this.userName = config.users.userName;
    // 密码
    this.passWord = config.users.passWord;
    this.cookies = [];
    // 缓存
    this.cacheData = cache.getCache();
    // 如果没有缓存的话创建一个
    if (!this.cacheData) {
      this.cacheData = {};
      this.cacheData[this.cacheKey.name] = [];
    }
    this.apis = [];
    getFilenames(path.join(process.cwd(), "src/" + (config.apiFilePath || "api")), function (filename) {
      _this.files.push(filename);
    });
    (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee() {
      var defaultOptions;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            defaultOptions = {
              defaultViewport: null,
              args: ["--start-maximized"],
              ignoreDefaultArgs: ["--enable-automation"],
              executablePath: puppeteer.executablePath("chrome")
            };
            config.puppeteerOpt = Object.assign({
              method: "launch",
              run: function run(puppeteer) {
                return _objectSpread({
                  headless: config.debug ? !config.debug : true
                }, defaultOptions);
              }
            }, config.puppeteerOpt);
            _context.next = 4;
            return puppeteer[config.puppeteerOpt.method](Object.assign(defaultOptions, config.puppeteerOpt.run(puppeteer)));
          case 4:
            _this.browser = _context.sent;
            _this.berforeInit(config);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
    this.spinner = ora({
      text: "\u6B63\u5728\u751F\u6210\u4E2D...",
      spinner: {
        interval: 80,
        frames: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"]
      }
    });
    this.spinner.start();
  }
  return (0, _createClass2.default)(Generator, [{
    key: "berforeInit",
    value: function berforeInit() {
      var _this2 = this;
      this.config.projects.reduce(/*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(promise, item, index) {
          var _this2$cacheData$_thi;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if ((0, _typeof2.default)(item) == "object" && !item.projectId) {
                  spinner.fail("projectId\u4E0D\u80FD\u4E3A\u7A7A:");
                  process.exit();
                }
                _context2.next = 3;
                return promise;
              case 3:
                _context2.next = 5;
                return _this2.init((0, _typeof2.default)(item) == "object" ? item : {
                  projectId: item
                }, index);
              case 5:
                _this2.cacheData.selectName = _this2.selectName;
                if (!((_this2$cacheData$_thi = _this2.cacheData[_this2.cacheKey.name]) !== null && _this2$cacheData$_thi !== void 0 && _this2$cacheData$_thi[index])) {
                  _this2.cacheData[_this2.cacheKey.name][index] = {};
                }
                if (item.catIds && Array.isArray(item.catIds)) {
                  // 不存在则创建
                  _this2.cacheData[_this2.cacheKey.name][index].ids = item.catIds;
                } else {
                  _this2.cacheData[_this2.cacheKey.name][index].pid = item;
                }
                if (_this2.index == _this2.config.projects.length - 1) {
                  if (_this2.totalApiNames.length) {
                    (_this2.config.cache == undefined ? true : _this2.config.cache) && cache.setCache(_this2.cacheData);
                    _this2.spinner.succeed("\u63A5\u53E3\u5DF2\u5168\u90E8\u751F\u6210\u5B8C\u6BD5:");
                    log("\u603B\u5171\u751F\u6210\u63A5\u53E3".concat(_this2.totalApiNames.join(","), "\u5171").concat(_this2.totalApiNames.length, "\u4E2A\u63A5\u53E3"));
                  } else {
                    _this2.spinner.warn("\u7A0B\u5E8F\u5DF2\u6267\u884C\u5B8C\u6BD5,\u6CA1\u6709\u53EF\u9700\u8981\u751F\u6210\u7684\u63A5\u53E3");
                  }
                  process.exit();
                }
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x, _x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }(), Promise.resolve());
    }
  }, {
    key: "setHeader",
    value: function setHeader(desc, path, apiNames, url) {
      return "/* \n  \u5F15\u5165:import {".concat(apiNames, "} from '@").concat(path, "'\n  */        \n  ").concat(this.config.importRequestName, "\n    ");
    }
  }, {
    key: "setRequestTemplate",
    value: function () {
      var _setRequestTemplate = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(opt) {
        var _this3 = this;
        var _Object$assign, paramsName, annotation, requestFunc, match, projectName, determineParamsName, reqTypeCode, resTypeCode, reqTypeName, resTypeName, _JSON$parse, _opt$detail, req_body_form, req_params, req_query, req_body_other, method, req_body_type, req_body_is_json_schema, annotationComment, requestFuncCode;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _Object$assign = Object.assign({
                paramsName: "",
                annotation: "",
                requestFunc: ""
              }, this.config.requestOptions), paramsName = _Object$assign.paramsName, annotation = _Object$assign.annotation, requestFunc = _Object$assign.requestFunc;
              opt.restFul = "";
              match = opt.path.match(/\{([^}]+)\}/);
              if (match && match[1]) {
                opt.path = opt.path.replace(/\$\{([^}]+)\}/, function (match, p1) {
                  return "${".concat(p1.toLowerCase(), "}");
                });
                opt.restFul = match[1].toLowerCase();
              }
              projectName = opt.projectName;
              determineParamsName = function determineParamsName(opt) {
                return typeof paramsName === "function" ? paramsName.call(_this3, opt) : opt.restFul || paramsName || (opt.method === "get" ? "params" : "data");
              };
              opt.newParamsName = determineParamsName(opt);
              reqTypeCode = "";
              resTypeCode = "";
              reqTypeName = "";
              resTypeName = "";
              if (!opt.detail) {
                _context3.next = 21;
                break;
              }
              _opt$detail = opt.detail, req_body_form = _opt$detail.req_body_form, req_params = _opt$detail.req_params, req_query = _opt$detail.req_query, req_body_other = _opt$detail.req_body_other, method = _opt$detail.method, req_body_type = _opt$detail.req_body_type, req_body_is_json_schema = _opt$detail.req_body_is_json_schema;
              reqTypeName = "I".concat(opt.formatPaths.at(-2)).concat(opt.formatPaths.at(-1), "Params");
              resTypeName = "I".concat(opt.formatPaths.at(-2)).concat(opt.formatPaths.at(-1), "Data");
              _context3.next = 17;
              return genTemplateTS(reqTypeName, {
                reqBody: req_body_form.length ? req_body_form : req_params.length ? req_params : req_query.length ? req_query : req_body_other,
                method: method,
                reqType: req_body_type,
                jsonSchema: req_body_is_json_schema
              });
            case 17:
              reqTypeCode = _context3.sent;
              _context3.next = 20;
              return jsonSchemaToTs(resTypeName, opt.detail.res_body ? JSON.stringify((_JSON$parse = JSON.parse(opt.detail.res_body)) === null || _JSON$parse === void 0 || (_JSON$parse = _JSON$parse.properties) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.data) : "");
            case 20:
              resTypeCode = _context3.sent;
            case 21:
              !reqTypeCode ? reqTypeName = "any" : "";
              !resTypeCode ? resTypeName = "any" : "";
              annotationComment = typeof annotation === "function" ? "/*\n*@\u5E8F\u53F7:".concat(apiNum, "\n").concat(annotation.call(this, opt), "\n*/") : "/* \n      *@\u5E8F\u53F7:".concat(apiNum, "\n      *@\u9879\u76EE\u540D\u79F0:").concat(projectName, "\n      *@\u83DC\u5355\u540D\u79F0:").concat(opt.title, "(").concat(opt.url, ") \n      */");
              requestFuncCode = typeof requestFunc === "function" ? requestFunc.call(this, opt, reqTypeName, resTypeName).replace(/url:\s*([^,\s]+),/g, "url:`$1`,") : "\n      export function ".concat(opt.apiName, "(").concat(this.config.typescript ? "".concat(opt.newParamsName, "?:").concat(reqTypeName) : "".concat(opt.newParamsName), ") { \n        return ").concat(this.requestName).concat(this.config.typescript ? "<".concat(reqTypeName, ",").concat(resTypeName, ">") : "", "({ url: `").concat(opt.path, "`, method: '").concat(opt.method, "', ").concat(!opt.restFul ? opt.newParamsName : "", "})\n      }\n      ");
              return _context3.abrupt("return", "\n    ".concat(reqTypeCode, "\n    ").concat(resTypeCode, "\n    ").concat(annotationComment, "\n    ").concat(requestFuncCode, "\n    "));
            case 26:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function setRequestTemplate(_x4) {
        return _setRequestTemplate.apply(this, arguments);
      }
      return setRequestTemplate;
    }()
  }, {
    key: "getReadFiles",
    value: function getReadFiles() {
      this.readFiles = fs.readFileSync(this.selectName, "utf-8");
    }
  }, {
    key: "gen",
    value: function () {
      var _gen = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee5(message) {
        var _this4 = this;
        var _yield$inquirer$promp, type;
        return _regenerator.default.wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!message) {
                _context6.next = 11;
                break;
              }
              _context6.next = 3;
              return inquirer.prompt([{
                type: "list",
                message: message,
                name: "type",
                choices: this.files
              }]);
            case 3:
              _yield$inquirer$promp = _context6.sent;
              type = _yield$inquirer$promp.type;
              this.selectName = type;
              if (path.extname(this.selectName) === ".ts") {
                this.config.typescript = true;
              }
              this.getReadFiles();
              // 拿到最后序号
              if (getNum(this.readFiles)) {
                apiNum = getNum(this.readFiles);
              }
              this.paths = this.readFiles.split("\n").map(function (item) {
                if (/\/[\w\/]+/g.test(item.trim())) {
                  item = item.replace(/[,'`:"${|}]/g, "");
                  return item.match(/\/[\w\/]+/g)[0];
                }
              }).filter(function (item) {
                return item;
              });
              this.paths = (0, _toConsumableArray2.default)(new Set(this.paths));
            case 11:
              return _context6.abrupt("return", {
                add: function () {
                  var _add = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee4(data, catIds, fn) {
                    var isRepeat,
                      _loop,
                      lIndex,
                      _args5 = arguments;
                    return _regenerator.default.wrap(function _callee4$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          isRepeat = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : true;
                          _loop = /*#__PURE__*/_regenerator.default.mark(function _loop(lIndex) {
                            var item, detail, restFul, apiName;
                            return _regenerator.default.wrap(function _loop$(_context4) {
                              while (1) switch (_context4.prev = _context4.next) {
                                case 0:
                                  item = data.list[lIndex];
                                  if (!isRepeat) {
                                    _context4.next = 25;
                                    break;
                                  }
                                  if (!(!_this4.paths.includes(item.path.replace(/\{|\}/g, "")) && getGenType(catIds, lIndex + 1, item))) {
                                    _context4.next = 25;
                                    break;
                                  }
                                  _this4.spinner.start("\u6B63\u5728\u751F\u6210".concat(item.title, "\u63A5\u53E3\u4E2D..."));
                                  log(function () {
                                    if (data.list.length - 1 === lIndex) _this4.spinner.succeed("已全部生成完毕");
                                  });
                                  if (!_this4.config.typescript) {
                                    _context4.next = 10;
                                    break;
                                  }
                                  _context4.next = 8;
                                  return fn(lIndex + 1, item);
                                case 8:
                                  detail = _context4.sent;
                                  item.detail = detail;
                                case 10:
                                  apiNum++;
                                  restFul = ""; // 替换掉特殊字符串
                                  item.path = item.path.replace(/(\{\w+\})/g, function (value) {
                                    restFul = value.replace(/\{|\}/g, "");
                                    return "$" + value;
                                  });
                                  item.formatPaths = toCamelCase(item.path.replace(/(\/\$\{\w+\})/g, "")).match(/[A-Z][^A-Z]*/g).map(function (str) {
                                    return str.replace(specialChat, "");
                                  });
                                  // 转为驼峰命名
                                  apiName = _this4.config.getRequestFunctionName && _this4.config.getRequestFunctionName(toCamelCase(item.path), item, toCamelCase) || _this4.config.getRequestFunctionName && _this4.config.getRequestFunctionName(toCamelCase(item.path), item, toCamelCase) || toCamelCase(item.path);
                                  apiName = toCamelCase(apiName.replace("${" + restFul, "by").replace("}", "/" + restFul).replace("/", ""));
                                  apiName = (apiName.charAt(0).toLowerCase() + apiName.slice(1)).replace(specialChat, "");
                                  _this4.apiNames.push(apiName);
                                  _this4.totalApiNames.push(apiName);
                                  _this4.names.push(item.title);
                                  _context4.t0 = _this4.apis;
                                  _context4.next = 23;
                                  return _this4.setRequestTemplate(_objectSpread(_objectSpread({}, item), {}, {
                                    title: item.title,
                                    method: item.method.toLocaleLowerCase(),
                                    apiName: apiName,
                                    requestFunc: _this4.opt.requestFunc,
                                    restFul: restFul,
                                    apiNum: apiNum,
                                    projectName: "".concat(_this4.projectName, "(").concat(_this4.apiUrl, "/cat_").concat(item.catid, ")"),
                                    url: _this4.getUrl(item._id).menuUrl,
                                    path: item.path
                                  }));
                                case 23:
                                  _context4.t1 = _context4.sent;
                                  _context4.t0.push.call(_context4.t0, _context4.t1);
                                case 25:
                                case "end":
                                  return _context4.stop();
                              }
                            }, _loop);
                          });
                          lIndex = 0;
                        case 3:
                          if (!(lIndex < data.list.length)) {
                            _context5.next = 8;
                            break;
                          }
                          return _context5.delegateYield(_loop(lIndex), "t0", 5);
                        case 5:
                          lIndex++;
                          _context5.next = 3;
                          break;
                        case 8:
                          if (!_this4.apiNames.length) {
                            _this4.spinner.warn("\u63A5\u53E3\u5DF2\u5B58\u5728\u8BE5\u6587\u4EF6\u91CC,\u65E0\u9700\u8981\u751F\u6210");
                          }
                          return _context5.abrupt("return", Promise.resolve());
                        case 10:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee4);
                  }));
                  function add(_x6, _x7, _x8) {
                    return _add.apply(this, arguments);
                  }
                  return add;
                }()
              });
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee5, this);
      }));
      function gen(_x5) {
        return _gen.apply(this, arguments);
      }
      return gen;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee6(url) {
        return _regenerator.default.wrap(function _callee6$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return getRes(this.page, url, this.spinner);
            case 2:
              return _context7.abrupt("return", _context7.sent);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee6, this);
      }));
      function request(_x9) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "createWriteFile",
    value: function createWriteFile() {
      var _this5 = this;
      return {
        // 写入接口
        writeApi: function () {
          var _writeApi = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee7() {
            return _regenerator.default.wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!_this5.totalApiNames.length) {
                    _context8.next = 12;
                    break;
                  }
                  _this5.spinner.start(!_this5.paths.length ? "\u6B63\u5728\u5199\u5165\u6587\u4EF6\u4E2D...\n" : "\u6B63\u5728\u66F4\u65B0\u6587\u4EF6\u4E2D...\n");
                  _context8.t0 = fs;
                  _context8.t1 = _this5.selectName;
                  _context8.next = 6;
                  return prettier.format(_this5.apis.join("\n"), {
                    parser: _this5.config.typescript ? "typescript" : "babel"
                  });
                case 6:
                  _context8.t2 = _context8.sent;
                  _context8.t0.appendFileSync.call(_context8.t0, _context8.t1, _context8.t2);
                  _this5.spinner.succeed(!_this5.paths.length ? "文件写入成功" : "\u6587\u4EF6\u66F4\u65B0\u6210\u529F").succeed("\u6210\u529F\u751F\u6210".concat(_this5.projectName, "\u9879\u76EE(").concat(_this5.names.length, "\u4E2A\u63A5\u53E3):"));
                  log("\u83DC\u5355\u6807\u9898:".concat(_this5.names.join(",")), "\u751F\u6210\u63A5\u53E3\u540D\u79F0:".concat(_this5.apiNames.join(",")));
                  _this5.apiNames = [];
                  _this5.names = [];
                case 12:
                  return _context8.abrupt("return", _this5.createWriteFile());
                case 13:
                case "end":
                  return _context8.stop();
              }
            }, _callee7);
          }));
          function writeApi() {
            return _writeApi.apply(this, arguments);
          }
          return writeApi;
        }(),
        // 写入头部
        writeHeader: function writeHeader() {
          _this5.getReadFiles();
          if (!_this5.readFiles) {
            // 加入最前面的头部
            _this5.apis.unshift(_this5.setHeader(_this5.projectName, _this5.selectName.replace("\\g", "/").match(/src(.*)$/)[1], _this5.totalApiNames.join(","), _this5.apiUrl));
          }

          // 在文件内容中查找匹配项并进行替换
          var regex = /import\s*\{\s*([a-zA-Z,]+)\s*\}/;
          _this5.readFiles = _this5.readFiles.replace(regex, function (match, group) {
            // 在这里，group 就是大括号内的内容，你可以进行处理或替换
            return "import {".concat((0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(group.split(",")), (0, _toConsumableArray2.default)(_this5.totalApiNames)))).join(","), "}");
          });
          // 同步写入修改后的内容
          fs.writeFileSync(_this5.selectName, _this5.readFiles, "utf8");
          return _this5.createWriteFile();
        }
      };
    }
  }, {
    key: "getData",
    value: function getData(url) {
      var _this6 = this;
      return new Promise(function (resolve, reject) {
        _this6.page.on("response", /*#__PURE__*/function () {
          var _ref3 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee8(response) {
            var res;
            return _regenerator.default.wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (!(response.url() === url && response.status() === 200)) {
                    _context9.next = 6;
                    break;
                  }
                  _context9.next = 3;
                  return response.json();
                case 3:
                  res = _context9.sent;
                  if (res.errcode != 0) {
                    spinner.fail(res.errmsg);
                    process.exit();
                  }
                  resolve(res.data);
                case 6:
                case "end":
                  return _context9.stop();
              }
            }, _callee8);
          }));
          return function (_x10) {
            return _ref3.apply(this, arguments);
          };
        }());
      });
    }
  }]);
}();