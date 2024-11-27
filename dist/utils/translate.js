"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require("./toTs"),
  jsonSchemaToTs = _require.jsonSchemaToTs;
function genTemplateTS() {
  return _genTemplateTS.apply(this, arguments);
}
function _genTemplateTS() {
  _genTemplateTS = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee() {
    var typeName,
      option,
      jsonSchema,
      reqBody,
      reqType,
      method,
      paramName,
      IParamsTemplate,
      template,
      translateTempteQuery,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          translateTempteQuery = function _translateTempteQuery(arr) {
            var paramName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "IParams";
            if (arr.length === 0) return "";
            var start = "export interface ".concat(paramName, " {\n");
            arr.forEach(function (item) {
              item.format = item.desc;
              item.description = item.example;
              item.name = item.name.replace(/(\..*)|\[\d\]/g, "");
              start += "".concat(translateComment(item), "\n");
              start += "".concat(item.name).concat(item.required === "1" ? ":" : "?:", " ").concat(item.type === "file" ? "File" : "string", ";\n");
            });
            return start + "\n}";
          };
          typeName = _args.length > 0 && _args[0] !== undefined ? _args[0] : "ITest";
          option = _args.length > 1 ? _args[1] : undefined;
          jsonSchema = _args.length > 2 ? _args[2] : undefined;
          reqBody = option.reqBody, reqType = option.reqType, method = option.method;
          if (!jsonSchema) {
            _context.next = 8;
            break;
          }
          jsonSchemaToTs(typeName, reqBody || "");
          return _context.abrupt("return");
        case 8:
          if (reqBody) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", "");
        case 10:
          paramName = typeName;
          IParamsTemplate = "";
          if (!(method === "POST" && reqType === "json")) {
            _context.next = 18;
            break;
          }
          _context.next = 15;
          return translateTempte(reqBody, paramName);
        case 15:
          IParamsTemplate = _context.sent;
          _context.next = 21;
          break;
        case 18:
          _context.next = 20;
          return Promise.resolve(translateTempteQuery(reqBody, paramName));
        case 20:
          IParamsTemplate = _context.sent;
        case 21:
          template = "".concat(IParamsTemplate);
          return _context.abrupt("return", template);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _genTemplateTS.apply(this, arguments);
}
function translateTempte(obj) {
  var typeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "IParams";
  var property = arguments.length > 2 ? arguments[2] : undefined;
  var start = "interface ".concat(typeName, " {\n");
  if (property) {
    obj = obj.properties[property];
  }
  if (!obj) {
    return "type ".concat(typeName, " = undefined");
  } else if (obj && obj.type === "object") {
    return start + translateTempteInner(obj) + "\n}";
  } else if (obj.type === "array") {
    return "type ".concat(typeName, " = Array<").concat(translateArrayItem(obj.items), ">\n");
  } else {
    return "type ".concat(typeName, " = ").concat(obj.type === "integer" ? "number" : obj.type, "\n");
  }
}
function translateTempteInner(obj) {
  var start = "";
  for (var key in obj.properties) {
    if (Object.hasOwnProperty.call(obj.properties, key)) {
      var element = obj.properties[key];
      if (element.type === "object") {
        var _obj$required;
        start += "".concat(key).concat(obj !== null && obj !== void 0 && (_obj$required = obj.required) !== null && _obj$required !== void 0 && _obj$required.includes(key) ? ":" : "?:", " {\n").concat(translateTempteInner(element), "\n};\n");
      } else if (element.type === "array") {
        var _obj$required2;
        start += "".concat(key).concat(obj !== null && obj !== void 0 && (_obj$required2 = obj.required) !== null && _obj$required2 !== void 0 && _obj$required2.includes(key) ? ":" : "?:", " Array<\n").concat(translateArrayItem(element.items), ">;\n");
      } else if (Array.isArray(element.type)) {
        var _obj$required3;
        start += "".concat(translateComment(element), "\n");
        start += "".concat(key).concat(obj !== null && obj !== void 0 && (_obj$required3 = obj.required) !== null && _obj$required3 !== void 0 && _obj$required3.includes(key) ? ":" : "?:", " ").concat(element.type.map(function (item) {
          return item === "integer" ? "number" : item;
        }).join(" | "), ";\n");
      } else {
        var _obj$required4;
        start += "".concat(translateComment(element), "\n");
        start += "".concat(key).concat(obj !== null && obj !== void 0 && (_obj$required4 = obj.required) !== null && _obj$required4 !== void 0 && _obj$required4.includes(key) ? ":" : "?:", " ").concat(element.type === "integer" ? "number" : element.type, ";\n");
      }
    }
  }
  return start;
}
function translateArrayItem(items) {
  if (items.type === "object") {
    return "{".concat(translateTempteInner(items), "}");
  } else if (items.type === "array") {
    return "Array<".concat(translateTempteInner(items.items), ">\n");
  } else if (items.type === "object") {
    return "".concat(translateTempteInner(items), "\n");
  } else {
    return "".concat(items.type === "integer" ? "number" : items.type, "\n");
  }
}
function translateComment(element) {
  if (element.format && !element.description) {
    return " /* ".concat(element.format, "*/");
  } else if (element.format && element.description) {
    return "/* ".concat(element.format, ", ").concat(element.description.split("").join(", "), "*/");
  } else if (element.description) {
    return "/* ".concat(element.description.split("").join(", "), "*/");
  } else {
    return "";
  }
}
module.exports = {
  genTemplateTS: genTemplateTS
};