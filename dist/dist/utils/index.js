"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var fs = require("fs");
var path = require("path");

/**
 * @description: 获取文件夹下的所有文件的名称
 * @param {*} dir:文件目录
 * @param {*} callback:
 * @return {*}
 */
var _getFilenames = function getFilenames(dir, callback) {
  function ensureDirectoryExistence(filePath) {
    if (!fs.existsSync(filePath)) {
      console.log("文件夹不存在" + filePath);
      process.exit();
    }
  }
  ensureDirectoryExistence(dir);
  fs.readdir(dir, function (err, files) {
    if (err) throw err;
    files.forEach(function (file, index) {
      var fullPath = path.join(dir, file);
      fs.stat(fullPath, function (err, stats) {
        if (err) throw err;
        if (stats.isDirectory()) {
          _getFilenames(fullPath, callback);
        } else {
          callback(fullPath, files, index);
        }
      });
    });
  });
};
/**
 * @description: 创建文件
 * @param {*} _path:创建文件的路径
 * @param {*} data:创建文件的数据
 * @return {*}
 */
var createfolderFile = function createfolderFile(_path, data) {
  var paths = _path.split("/");
  paths.forEach(function (file, index) {
    // 如果为true 证明是文件
    if (/\w\.\w/g.test(file)) {
      fs.writeFileSync(path.join(process.cwd(), "src", _path.slice(0, _path.indexOf(file)) + file), data, "utf8");
    } else {
      if (fs.existsSync(path.join(process.cwd(), "src", _path.slice(0, _path.indexOf(file)) + file))) {
        console.log("文件已存在");
        process.exit();
      }
      fs.mkdirSync(path.join(process.cwd(), "src", _path.slice(0, _path.indexOf(file)) + file));
    }
  });
};
module.exports = {
  getFilenames: _getFilenames,
  createfolderFile: createfolderFile,
  /**
   * @description: 转为驼峰命名
   * @param {*} str:
   * @return {*}
   */
  toCamelCase: function toCamelCase(str) {
    return str.replace(/([/_-][a-z])/g, function (group) {
      return group.toUpperCase().replace(/\/|_|-/g, "");
    });
  },
  /**
   * @description: 获取response中的json数据
   * @param {*} page:
   * @param {*} url:
   * @param {*} spinner:
   */
  getRes: function getRes(page, url, spinner) {
    var _this = this;
    return (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(/*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(resolve) {
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return page.waitForResponse(/*#__PURE__*/function () {
                        var _ref2 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(res) {
                          var loginRes;
                          return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                if (!(new RegExp(url, "g").test(res.url()) && res.status() === 200)) {
                                  _context.next = 8;
                                  break;
                                }
                                _context.next = 3;
                                return res.json();
                              case 3:
                                loginRes = _context.sent;
                                if (loginRes.errcode != 0) {
                                  spinner.fail(loginRes.errmsg);
                                }
                                resolve(loginRes);
                                _context.next = 9;
                                break;
                              case 8:
                                if (res.status() === 500) {
                                  _this.spinner.fail("未知错误");
                                }
                              case 9:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function (_x2) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  getFileData: function getFileData() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.map(function (_path) {
      return fs.readFileSync(path.join(__dirname, _path), "utf-8");
    });
  },
  // 判断一下生成的类型  使用方式: catids:[111,'开始下标-结束下标']下标是从1开始(生成下标范围api)  catids:[111,3]生成单独某一项(传下标|id|菜单名称)catids:[111,'1 3 5]批量生成对应的项(传下标|id|菜单名称) catids:[111,'-xxx] 排除当前这项(传下标|id|菜单名称)
  getGenType: function getGenType(catIds, curIndex, item) {
    if (!item.path) {
      return;
    }
    var excludes = [];
    var arr = [curIndex, item._id, item.title];
    var regex = /-(\d+)(?![-\d])/g;
    var minIndex, maxIndex;
    var nums = [];
    // 标识是否是-开头
    var flag = false;
    var match;
    // 如果catIds没有全部生成
    if (!catIds) {
      return true;
    }
    if (catIds[1] && typeof catIds[1] === "string" && !/[- ]/g.test(catIds[1])) {
      throw new Error("请输入正确格式,如[xxx-xxx]|[xx xx xx]|[-xxx]  ");
    }
    while ((match = regex.exec(catIds[1])) !== null) {
      // 检查匹配的数字是否是单独的，不是1-xxx这种形式的一部分
      if (!/\d-\d/.test(match.input.slice(0, match.index + match[0].length))) {
        excludes.push(parseInt(match[1])); // 输出匹配到的数字
      }
    }

    // 如果排除项有值
    if (excludes.length && arr.some(function (item) {
      return excludes.includes(item);
    })) {
      return !arr.some(function (item) {
        return excludes.includes(item);
      });
    }
    if (catIds[1]) {
      if (catIds[1].toString().indexOf("-") > -1) {
        var _catIds$1$split = catIds[1].split("-"),
          _catIds$1$split2 = (0, _slicedToArray2.default)(_catIds$1$split, 2),
          min = _catIds$1$split2[0],
          max = _catIds$1$split2[1];
        minIndex = min;
        maxIndex = max || "";
        flag = true;
      } else {
        nums = catIds[1].toString().split(" ").map(function (item) {
          return parseInt(item);
        });
      }
    }
    if (!minIndex && !nums.length) return true;
    // 如果当前为true 证明是 是范围类型
    if (flag) {
      if (maxIndex && minIndex) {
        return curIndex >= minIndex && curIndex <= maxIndex;
      } else {
        throw new Error("请输入正确的范围");
      }
    } else {
      return arr.some(function (item) {
        return nums.includes(item);
      });
    }
  },
  log: function log() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function (item) {
      if (typeof item == "function") {
        if (item()) {
          console.log(item());
        }
      } else {
        console.log(item);
      }
    });
  },
  // 获取序号
  getNum: function getNum(str) {
    var _str$match;
    return parseInt((_str$match = str.match(/序号:(\d+)/g)) === null || _str$match === void 0 ? void 0 : _str$match.at(-1).split(":")[1]);
  },
  getIds: function getIds(ids) {
    return Array.isArray(ids) ? ids[0] : ids;
  },
  getPageData: function getPageData(page, url, spinner) {
    return (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee5() {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(/*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee4(resolve) {
                var res, loginRes, data;
                return _regenerator.default.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      res = page.goto(url);
                      _context4.next = 3;
                      return res;
                    case 3:
                      loginRes = _context4.sent;
                      _context4.next = 6;
                      return loginRes.json();
                    case 6:
                      data = _context4.sent;
                      if (data.errcode !== 0) {
                        spinner.fail(data.errmsg);
                      }
                      resolve(data.data);
                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
};