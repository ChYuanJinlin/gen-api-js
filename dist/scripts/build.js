"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require("../utils/index"),
  getFilenames = _require.getFilenames;
var path = require("path");
var prettier = require("prettier");
var fs = require("fs");
var filesNames = [];
getFilenames(path.join(__dirname, "../core"), /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(filesName, files, index) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filesNames.push(filesName.split("\\").at(-1).replace(".js", ""));
          if (!(files.length - 1 === index)) {
            _context.next = 8;
            break;
          }
          _context.t0 = fs;
          _context.t1 = path.join(__dirname, "../index.js");
          _context.next = 6;
          return prettier.format(genIndex(), {
            parser: "babel"
          });
        case 6:
          _context.t2 = _context.sent;
          _context.t0.writeFileSync.call(_context.t0, _context.t1, _context.t2, "utf8");
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
function genIndex() {
  var templateCode = "\n    require(\"./utils/Generator\");\n    const path = require(\"path\");\n    ".concat(filesNames.map(function (name) {
    return "const ".concat(name, " = require(path.join(__dirname, \"core/").concat(name, "\"));");
  }).join("\n"), "\n    module.exports = class GenApi {\n    static docName;\n    static createGenApi(config) {\n        this.docName = config.docName;\n        switch (this.docName) {\n        ").concat(filesNames.map(function (name) {
    return "case \"".concat(name.toLowerCase(), "\":\n                return new ").concat(name, "(config);");
  }).join("\n"), "\n        default:\n            break;\n        }\n    }\n    };\n    ");
  return templateCode;
}