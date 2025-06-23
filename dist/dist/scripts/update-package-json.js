"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var fs = require('fs');
var path = require('path');

// 读取原始 package.json 文件
var originalPackageJsonPath = path.join(__dirname, '../../package.json');
var originalPackageJson = JSON.parse(fs.readFileSync(originalPackageJsonPath, 'utf-8'));

// 创建一个新的 package.json 对象，修改 main 和 bin 路径
var newPackageJson = _objectSpread(_objectSpread({}, originalPackageJson), {}, {
  main: 'dist/index.js',
  // 相对于 dist 目录
  bin: {
    'gen-api': 'dist/cli/cli.js' // 相对于 dist 目录
  },
  files: ['dist']
});

// 写入新的 package.json 文件到 dist 目录
var distPackageJsonPath = path.join(__dirname, '../../dist/package.json');
fs.writeFileSync(distPackageJsonPath, JSON.stringify(newPackageJson, null, 2), 'utf-8');
console.log('Copied and updated package.json to dist directory');