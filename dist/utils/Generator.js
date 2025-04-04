"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Generator_brand;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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
  getIds = _require.getIds,
  log = _require.log,
  getNum = _require.getNum;
var _require2 = require("./toTs"),
  jsonSchemaToTs = _require2.jsonSchemaToTs;
var _require3 = require("./translate.js"),
  genTemplateTS = _require3.genTemplateTS;
var cache = require("./cache");
var cacheKey = require(path.join(process.cwd(), "package.json"));
var specialChat = /\/|\d|\/\d|\/\$|\{|\}/g;
global.Generator = (_Generator_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function () {
  function Generator(config) {
    var _exec,
      _name,
      _this = this;
    (0, _classCallCheck2.default)(this, Generator);
    _classPrivateMethodInitSpec(this, _Generator_brand);
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
              executablePath: puppeteer.executablePath("chrome"),
              userDataDir: "./userData" // 设置用户数据目录
            };
            config.puppeteerOpt = Object.assign({
              method: "launch",
              run: function run(puppeteer) {
                return _objectSpread({
                  headless: false,
                  devtools: config.debug ? !config.debug : true
                }, defaultOptions);
              }
            }, config.puppeteerOpt);
            _context.next = 4;
            return puppeteer[config.puppeteerOpt.method](Object.assign(defaultOptions, config.puppeteerOpt.run(puppeteer)));
          case 4:
            _this.browser = _context.sent;
            _assertClassBrand(_Generator_brand, _this, _run).call(_this, config);
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
  }
  // 设置url
  return (0, _createClass2.default)(Generator, [{
    key: "setDocUrl",
    value: function setDocUrl(url) {
      // 默认域名
      this.config.docUrl = this.config.docUrl.replace(/\/$/, "") || url;
    }
  }, {
    key: "setIndexUrl",
    value: function setIndexUrl(url) {
      // 默认域名
      this.indexUrl = this.config.docUrl + url;
    }
  }, {
    key: "setResponse",
    value: function setResponse(msgKey, codeKey) {
      this.msgKey = msgKey;
      this.codeKey = codeKey;
    }
  }, {
    key: "isProjectId",
    value: function isProjectId() {
      return this.config.projects.every(function (item) {
        return typeof item === "string" || typeof item === "number";
      });
    }
  }, {
    key: "isCatIds",
    value: function isCatIds(catIds) {
      if (catIds && Array.isArray(catIds)) {
        var _this$cacheData$this$;
        var oldCatIds = ((_this$cacheData$this$ = this.cacheData[this.cacheKey.name]) === null || _this$cacheData$this$ === void 0 || (_this$cacheData$this$ = _this$cacheData$this$[this.index]) === null || _this$cacheData$this$ === void 0 ? void 0 : _this$cacheData$this$.ids) || [];
        this.catIds = catIds.filter(function (item) {
          return !oldCatIds.some(function (s) {
            return getIds(s) === getIds(item);
          });
        });
        if (!this.catIds.length) {
          return false;
        }
      } else {
        var _this$cacheData$this$2;
        if ((_this$cacheData$this$2 = this.cacheData[this.cacheKey.name]) !== null && _this$cacheData$this$2 !== void 0 && _this$cacheData$this$2[this.index] && this.cacheData[this.cacheKey.name][this.index].pid) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "setFiles",
    value: function setFiles() {
      if (this.selectName) {
        this.files = (0, _toConsumableArray2.default)(new Set([this.selectName].concat((0, _toConsumableArray2.default)(this.files))));
      }
    }
  }, {
    key: "setHeader",
    value: function setHeader(desc, path, apiNames, url) {
      return "/* \n  \u5F15\u5165:import {".concat(apiNames, "} from '@").concat(path, "'\n  */        \n  ").concat(this.config.importRequestName, "\n    ");
    }
  }, {
    key: "setRequestTemplate",
    value: function () {
      var _setRequestTemplate = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(opt) {
        var _this2 = this;
        var _Object$assign, paramsName, annotation, requestFunc, match, projectName, determineParamsName, reqTypeCode, resTypeCode, reqTypeName, resTypeName, _opt$detail, reqBody, reqType, ReqJsonSchema, method, ResJsonSchema, typeName, annotationComment, requestFuncCode;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
                return typeof paramsName === "function" ? paramsName.call(_this2, opt) : opt.restFul || paramsName || (opt.method === "get" ? "params" : "data");
              };
              opt.newParamsName = determineParamsName(opt);
              reqTypeCode = "";
              resTypeCode = "";
              reqTypeName = "";
              resTypeName = "";
              if (!opt.detail) {
                _context2.next = 22;
                break;
              }
              _opt$detail = opt.detail, reqBody = _opt$detail.reqBody, reqType = _opt$detail.reqType, ReqJsonSchema = _opt$detail.ReqJsonSchema, method = _opt$detail.method, ResJsonSchema = _opt$detail.ResJsonSchema;
              typeName = opt.formatPaths.slice(2).join("");
              reqTypeName = "I".concat(typeName, "Params");
              resTypeName = "I".concat(typeName, "Data");
              _context2.next = 18;
              return genTemplateTS(reqTypeName, {
                reqBody: reqBody,
                method: method,
                reqType: reqType,
                ReqJsonSchema: ReqJsonSchema
              });
            case 18:
              reqTypeCode = _context2.sent;
              _context2.next = 21;
              return jsonSchemaToTs(resTypeName, ResJsonSchema);
            case 21:
              resTypeCode = _context2.sent;
            case 22:
              !reqTypeCode ? reqTypeName = "any" : "";
              !resTypeCode ? resTypeName = "any" : "";
              annotationComment = typeof annotation === "function" ? "/*\n*@\u5E8F\u53F7:".concat(apiNum, "\n").concat(annotation.call(this, opt), "\n*/") : "/* \n      *@\u5E8F\u53F7:".concat(apiNum, "\n      *@\u9879\u76EE\u540D\u79F0:").concat(projectName, "\n      *@\u83DC\u5355\u540D\u79F0:").concat(opt.title, "(").concat(opt.url, ") \n      */");
              requestFuncCode = typeof requestFunc === "function" ? requestFunc.call(this, opt, reqTypeName, resTypeName).replace(/url:\s*([^,\s]+),/g, "url:`$1`,") : "\n      export function ".concat(opt.apiName, "(").concat(this.config.typescript ? "".concat(opt.newParamsName, "?:").concat(reqTypeName) : "".concat(opt.newParamsName), ") { \n        return ").concat(this.requestName).concat(this.config.typescript ? "<".concat(reqTypeName, ",").concat(resTypeName, ">") : "", "({ url: `").concat(opt.path, "`, method: '").concat(opt.method, "', ").concat(!opt.restFul ? opt.newParamsName : "", "})\n      }\n      ");
              return _context2.abrupt("return", "\n    ".concat(reqTypeCode, "\n    ").concat(resTypeCode, "\n    ").concat(annotationComment, "\n    ").concat(requestFuncCode, "\n    "));
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function setRequestTemplate(_x) {
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
      var _gen = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee4(message) {
        var _this3 = this;
        var options,
          _yield$inquirer$promp,
          type,
          _args5 = arguments;
        return _regenerator.default.wrap(function _callee4$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
              if (!message) {
                _context5.next = 14;
                break;
              }
              this.spinner.stop();
              _context5.next = 5;
              return inquirer.prompt([{
                type: "list",
                message: message,
                name: "type",
                choices: this.files
              }]);
            case 5:
              _yield$inquirer$promp = _context5.sent;
              type = _yield$inquirer$promp.type;
              this.spinner.start();
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
            case 14:
              return _context5.abrupt("return", {
                add: function () {
                  var _add = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(data, catIds, fn) {
                    var flag,
                      _loop,
                      lIndex,
                      _args4 = arguments;
                    return _regenerator.default.wrap(function _callee3$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          flag = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;
                          _loop = /*#__PURE__*/_regenerator.default.mark(function _loop(lIndex) {
                            var item, _toCamelCase$match, detail, restFul, apiName;
                            return _regenerator.default.wrap(function _loop$(_context3) {
                              while (1) switch (_context3.prev = _context3.next) {
                                case 0:
                                  item = data.list[lIndex]; // 如果没有重复的项则生成
                                  if (!(item.path && /\w/g.test(item.path) && (flag || !_this3.paths.some(function (pItem) {
                                    return pItem.toLocaleLowerCase() === item.path.toLocaleLowerCase().replace(/\{|\}/g, "");
                                  }) && getGenType(catIds, lIndex + 1, item)))) {
                                    _context3.next = 24;
                                    break;
                                  }
                                  _this3.spinner.start("\u6B63\u5728\u751F\u6210".concat(item.title, "\u63A5\u53E3\u4E2D..."));
                                  log(function () {
                                    if (data.list.length - 1 === lIndex) _this3.spinner.succeed("已全部生成完毕");
                                  });
                                  if (!_this3.config.typescript) {
                                    _context3.next = 9;
                                    break;
                                  }
                                  _context3.next = 7;
                                  return fn(lIndex + 1, item);
                                case 7:
                                  detail = _context3.sent;
                                  item.detail = detail;
                                case 9:
                                  apiNum++;
                                  restFul = ""; // 替换掉特殊字符串
                                  item.path = item.path.replace(/(\{\w+\})/g, function (value) {
                                    restFul = value.replace(/\{|\}/g, "");
                                    return "$" + value;
                                  });
                                  item.formatPaths = (_toCamelCase$match = toCamelCase(item.path.replace(/(\/\$\{\w+\})/g, "") + "/" + item.method).match(/[A-Z][^A-Z]*/g)) === null || _toCamelCase$match === void 0 ? void 0 : _toCamelCase$match.map(function (str) {
                                    return str.replace(specialChat, "");
                                  });
                                  // 转为驼峰命名
                                  apiName = _this3.config.getRequestFunctionName && _this3.config.getRequestFunctionName(toCamelCase(item.path + "/" + item.method), item, toCamelCase) || _this3.config.getRequestFunctionName && _this3.config.getRequestFunctionName(toCamelCase(item.path + "/" + item.method), item, toCamelCase) || toCamelCase(item.path + "/" + item.method);
                                  apiName = toCamelCase(apiName.replace("${" + restFul, "by").replace("}", "/" + restFul).replace("/", ""));
                                  apiName = (apiName.charAt(0).toLowerCase() + apiName.slice(1)).replace(specialChat, "");
                                  _this3.apiNames.push(apiName);
                                  _this3.totalApiNames.push(apiName);
                                  _this3.names.push(item.title);
                                  _context3.t0 = _this3.apis;
                                  _context3.next = 22;
                                  return _this3.setRequestTemplate(Object.assign(options, _objectSpread(_objectSpread({}, item), {}, {
                                    title: item.title,
                                    method: item.method.toLocaleLowerCase(),
                                    apiName: apiName,
                                    requestFunc: _this3.opt.requestFunc,
                                    restFul: restFul,
                                    apiNum: apiNum,
                                    projectName: (typeof options.projectName === "function" ? options.projectName(item) : options.projectName) || "".concat(_this3.projectName, "(").concat(_this3.apiUrl, "/cat_").concat(item.catid, ")"),
                                    url: _this3.getUrl(item._id).menuUrl,
                                    path: item.path
                                  })));
                                case 22:
                                  _context3.t1 = _context3.sent;
                                  _context3.t0.push.call(_context3.t0, _context3.t1);
                                case 24:
                                case "end":
                                  return _context3.stop();
                              }
                            }, _loop);
                          });
                          lIndex = 0;
                        case 3:
                          if (!(lIndex < data.list.length)) {
                            _context4.next = 8;
                            break;
                          }
                          return _context4.delegateYield(_loop(lIndex), "t0", 5);
                        case 5:
                          lIndex++;
                          _context4.next = 3;
                          break;
                        case 8:
                          if (!_this3.apiNames.length) {
                            _this3.spinner.warn("\u63A5\u53E3\u5DF2\u5B58\u5728\u8BE5\u6587\u4EF6\u91CC,\u65E0\u9700\u8981\u751F\u6210");
                          }
                          return _context4.abrupt("return", Promise.resolve());
                        case 10:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee3);
                  }));
                  function add(_x3, _x4, _x5) {
                    return _add.apply(this, arguments);
                  }
                  return add;
                }()
              });
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee4, this);
      }));
      function gen(_x2) {
        return _gen.apply(this, arguments);
      }
      return gen;
    }() // 生成项目所有的api
  }, {
    key: "genAllApi",
    value: function () {
      var _genAllApi = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee5(menuList, options) {
        var mIndex;
        return _regenerator.default.wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this.selectName = "";
              mIndex = 0;
            case 2:
              if (!(mIndex < menuList.length)) {
                _context6.next = 18;
                break;
              }
              _context6.prev = 3;
              if (this.selectName) {
                _context6.next = 7;
                break;
              }
              _context6.next = 7;
              return this.gen("请选择需要生成所有接口的文件", options);
            case 7:
              _context6.next = 9;
              return this.gen(null, options);
            case 9:
              _context6.sent.add(menuList[mIndex], null, null, true);
              _context6.next = 15;
              break;
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](3);
              console.log("🚀 ~ genAllApi ~ error:", _context6.t0);
            case 15:
              mIndex++;
              _context6.next = 2;
              break;
            case 18:
              return _context6.abrupt("return", Promise.resolve());
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee5, this, [[3, 12]]);
      }));
      function genAllApi(_x6, _x7) {
        return _genAllApi.apply(this, arguments);
      }
      return genAllApi;
    }() // 生成当前菜单下所有的api
  }, {
    key: "genProjectApi",
    value: function () {
      var _genProjectApi = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee6(menuList, readList, options) {
        var _yield$this$gen, add;
        return _regenerator.default.wrap(function _callee6$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.gen("\u8BF7\u9009\u62E9\u9700\u8981\u751F\u6210".concat(this.projectName, "\u9879\u76EE\u63A5\u53E3\u6587\u4EF6((\u63A5\u53E3\u5171").concat(menuList.list.length, "\u4E2A))"), options);
            case 2:
              _yield$this$gen = _context7.sent;
              add = _yield$this$gen.add;
              _context7.next = 6;
              return add(menuList, undefined, readList);
            case 6:
              return _context7.abrupt("return", Promise.resolve());
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee6, this);
      }));
      function genProjectApi(_x8, _x9, _x10) {
        return _genProjectApi.apply(this, arguments);
      }
      return genProjectApi;
    }() // 生成项目下某个api
  }, {
    key: "genProjectMenusApi",
    value: function () {
      var _genProjectMenusApi = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee7(menuList, readList, options) {
        var i, index, _yield$this$gen2, add;
        return _regenerator.default.wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < this.catIds.length)) {
                _context8.next = 19;
                break;
              }
              index = 0;
            case 3:
              if (!(index < menuList.length)) {
                _context8.next = 16;
                break;
              }
              if (!(menuList[index]._id === getIds(this.catIds[i]))) {
                _context8.next = 13;
                break;
              }
              _context8.next = 7;
              return this.gen("\u8BF7\u9009\u62E9\u9700\u8981\u751F\u6210".concat(menuList[index].name || menuList[index].desc, "\u63A5\u53E3\u7684\u6587\u4EF6(\u9879\u76EE\u540D:").concat(this.projectName, "(\u63A5\u53E3\u5171").concat(menuList[index].list.length, "\u4E2A))"), options);
            case 7:
              _yield$this$gen2 = _context8.sent;
              add = _yield$this$gen2.add;
              if (!menuList[index].list) {
                _context8.next = 12;
                break;
              }
              _context8.next = 12;
              return add(menuList[index], this.catIds[i], readList);
            case 12:
              return _context8.abrupt("break", 16);
            case 13:
              index++;
              _context8.next = 3;
              break;
            case 16:
              i++;
              _context8.next = 1;
              break;
            case 19:
              return _context8.abrupt("return", Promise.resolve());
            case 20:
            case "end":
              return _context8.stop();
          }
        }, _callee7, this);
      }));
      function genProjectMenusApi(_x11, _x12, _x13) {
        return _genProjectMenusApi.apply(this, arguments);
      }
      return genProjectMenusApi;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee8(url) {
        return _regenerator.default.wrap(function _callee8$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return getRes(this.page, url, this.spinner);
            case 2:
              return _context9.abrupt("return", _context9.sent);
            case 3:
            case "end":
              return _context9.stop();
          }
        }, _callee8, this);
      }));
      function request(_x14) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "createWriteFile",
    value: function createWriteFile() {
      var _this4 = this;
      return {
        // 写入接口
        writeApi: function () {
          var _writeApi = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee9() {
            return _regenerator.default.wrap(function _callee9$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (!_this4.totalApiNames.length) {
                    _context10.next = 12;
                    break;
                  }
                  _this4.spinner.start(!_this4.paths.length ? "\u6B63\u5728\u5199\u5165\u6587\u4EF6\u4E2D...\n" : "\u6B63\u5728\u66F4\u65B0\u6587\u4EF6\u4E2D...\n");
                  _context10.t0 = fs;
                  _context10.t1 = _this4.selectName;
                  _context10.next = 6;
                  return prettier.format(_this4.apis.join("\n"), {
                    parser: _this4.config.typescript ? "typescript" : "babel"
                  });
                case 6:
                  _context10.t2 = _context10.sent;
                  _context10.t0.appendFileSync.call(_context10.t0, _context10.t1, _context10.t2);
                  _this4.spinner.succeed(!_this4.paths.length ? "文件写入成功" : "\u6587\u4EF6\u66F4\u65B0\u6210\u529F").succeed("\u6210\u529F\u751F\u6210".concat(_this4.projectName, "\u9879\u76EE(").concat(_this4.names.length, "\u4E2A\u63A5\u53E3):"));
                  log("\u83DC\u5355\u6807\u9898:".concat(_this4.names.join(",")), "\u751F\u6210\u63A5\u53E3\u540D\u79F0:".concat(_this4.apiNames.join(",")));
                  _this4.apiNames = [];
                  _this4.names = [];
                case 12:
                  return _context10.abrupt("return", _this4.createWriteFile());
                case 13:
                case "end":
                  return _context10.stop();
              }
            }, _callee9);
          }));
          function writeApi() {
            return _writeApi.apply(this, arguments);
          }
          return writeApi;
        }(),
        // 写入头部
        writeHeader: function writeHeader() {
          _this4.getReadFiles();
          if (!_this4.readFiles) {
            // 加入最前面的头部
            _this4.apis.unshift(_this4.setHeader(_this4.projectName, _this4.selectName.replace("\\g", "/").match(/src(.*)$/)[1], _this4.totalApiNames.join(","), _this4.apiUrl));
          }

          // 在文件内容中查找匹配项并进行替换
          var regex = /import\s*\{\s*([a-zA-Z,]+)\s*\}/;
          _this4.readFiles = _this4.readFiles.replace(regex, function (match, group) {
            // 在这里，group 就是大括号内的内容，你可以进行处理或替换
            return "import {".concat((0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(group.split(",")), (0, _toConsumableArray2.default)(_this4.totalApiNames)))).join(","), "}");
          });
          // 同步写入修改后的内容
          fs.writeFileSync(_this4.selectName, _this4.readFiles, "utf8");
          return _this4.createWriteFile();
        }
      };
    }
  }, {
    key: "getData",
    value: function getData(url) {
      var _this5 = this;
      var data = [];
      var count = 0;
      return new Promise(function (resolve, reject) {
        _this5.page.on("response", /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee10(response) {
            var res, index, item;
            return _regenerator.default.wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  if (!(new RegExp(Array.isArray(url) ? url.join("|") : url, "g").test(response.url()) && response.status() === 200)) {
                    _context11.next = 18;
                    break;
                  }
                  _context11.next = 3;
                  return response.json();
                case 3:
                  res = _context11.sent;
                  index = 0;
                case 5:
                  if (!(index < url.length)) {
                    _context11.next = 14;
                    break;
                  }
                  item = url[index];
                  if (!new RegExp(item, "g").test(response.url())) {
                    _context11.next = 11;
                    break;
                  }
                  data[index] = res.data;
                  count++;
                  return _context11.abrupt("break", 14);
                case 11:
                  index++;
                  _context11.next = 5;
                  break;
                case 14:
                  if (!res.success || res[_this5.codeKey] && res[_this5.codeKey || "errcode"] != 0) {
                    spinner.fail(res[_this5.msgKey || "errmsg"]);
                    process.exit();
                  }
                  if (!Array.isArray(url)) {
                    resolve(res.data);
                  } else if (count === url.length) {
                    resolve(data);
                  }
                  _context11.next = 19;
                  break;
                case 18:
                  if (response.status() === 500) {
                    _this5.spinner.fail("未知错误");
                  }
                case 19:
                case "end":
                  return _context11.stop();
              }
            }, _callee10);
          }));
          return function (_x15) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    }
  }]);
}());
function _run() {
  var _this6 = this;
  this.config.projects.reduce(/*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee11(promise, item, index) {
      var _this6$cacheData$_thi;
      return _regenerator.default.wrap(function _callee11$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            if ((0, _typeof2.default)(item) == "object" && !item.projectId) {
              spinner.fail("projectId\u4E0D\u80FD\u4E3A\u7A7A:");
              process.exit();
            }
            _context12.next = 3;
            return promise;
          case 3:
            _context12.next = 5;
            return _this6.init((0, _typeof2.default)(item) == "object" ? item : {
              projectId: item
            }, index);
          case 5:
            _this6.cacheData.selectName = _this6.selectName;
            if (!((_this6$cacheData$_thi = _this6.cacheData[_this6.cacheKey.name]) !== null && _this6$cacheData$_thi !== void 0 && _this6$cacheData$_thi[index])) {
              _this6.cacheData[_this6.cacheKey.name][index] = {};
            }
            if (item.catIds && Array.isArray(item.catIds)) {
              // 不存在则创建
              _this6.cacheData[_this6.cacheKey.name][index].ids = item.catIds;
            } else {
              _this6.cacheData[_this6.cacheKey.name][index].pid = item;
            }
            if (_this6.index == _this6.config.projects.length - 1) {
              if (_this6.totalApiNames.length) {
                (_this6.config.cache == undefined ? true : _this6.config.cache) && cache.setCache(_this6.cacheData);
                _this6.spinner.succeed("\u63A5\u53E3\u5DF2\u5168\u90E8\u751F\u6210\u5B8C\u6BD5:");
                log("\u603B\u5171\u751F\u6210\u63A5\u53E3".concat(_this6.totalApiNames.join(","), "\u5171").concat(_this6.totalApiNames.length, "\u4E2A\u63A5\u53E3"));
              } else {
                _this6.spinner.warn("\u7A0B\u5E8F\u5DF2\u6267\u884C\u5B8C\u6BD5,\u6CA1\u6709\u53EF\u9700\u8981\u751F\u6210\u7684\u63A5\u53E3");
              }
              process.exit();
            }
          case 9:
          case "end":
            return _context12.stop();
        }
      }, _callee11);
    }));
    return function (_x16, _x17, _x18) {
      return _ref3.apply(this, arguments);
    };
  }(), Promise.resolve());
}