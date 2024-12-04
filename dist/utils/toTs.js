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
var _require = require("quicktype-core"),
  quicktype = _require.quicktype,
  InputData = _require.InputData,
  JSONSchemaInput = _require.JSONSchemaInput,
  TypeScriptTargetLanguage = _require.TypeScriptTargetLanguage,
  TypeScriptRenderer = _require.TypeScriptRenderer,
  getOptionValues = _require.getOptionValues,
  stringEscape = _require.stringEscape,
  tsFlowOptions = _require.tsFlowOptions,
  FetchingJSONSchemaStore = _require.FetchingJSONSchemaStore;
var MyTypeScriptTargetLanguage = /*#__PURE__*/function (_TypeScriptTargetLang) {
  function MyTypeScriptTargetLanguage() {
    (0, _classCallCheck2.default)(this, MyTypeScriptTargetLanguage);
    return _callSuper(this, MyTypeScriptTargetLanguage, arguments);
  }
  (0, _inherits2.default)(MyTypeScriptTargetLanguage, _TypeScriptTargetLang);
  return (0, _createClass2.default)(MyTypeScriptTargetLanguage, [{
    key: "makeRenderer",
    value: function makeRenderer(renderContext, untypedOptionValues) {
      return new MyTypeScriptRenderer(this, renderContext, getOptionValues(tsFlowOptions, untypedOptionValues));
    }
  }]);
}(TypeScriptTargetLanguage);
var MyTypeScriptRenderer = /*#__PURE__*/function (_TypeScriptRenderer) {
  function MyTypeScriptRenderer() {
    (0, _classCallCheck2.default)(this, MyTypeScriptRenderer);
    return _callSuper(this, MyTypeScriptRenderer, arguments);
  }
  (0, _inherits2.default)(MyTypeScriptRenderer, _TypeScriptRenderer);
  return (0, _createClass2.default)(MyTypeScriptRenderer, [{
    key: "emitEnum",
    value: function emitEnum(e, enumName) {
      var _this = this;
      this.emitDescription(this.descriptionForType(e));
      this.emitLine(["export type ", enumName, " = "]);
      this.forEachEnumCase(e, "none", function (name, jsonName, position) {
        var suffix = position === "last" || position === "only" ? ";" : " | ";
        _this.indent(function () {
          return _this.emitLine("\"".concat(stringEscape(jsonName), "\""), suffix);
        });
      });
    }
  }]);
}(TypeScriptRenderer);
function quicktypeJSONSchema(_x, _x2) {
  return _quicktypeJSONSchema.apply(this, arguments);
}
function _quicktypeJSONSchema() {
  _quicktypeJSONSchema = (0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(typeName, jsonSchemaString) {
    var schemaInput, inputData, _yield$quicktype, lines;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("🚀 ~ quicktypeJSONSchema ~ jsonSchemaString:", jsonSchemaString);
          console.log("🚀 ~ quicktypeJSONSchema ~ typeName:", typeName);
          if (jsonSchemaString) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", '');
        case 4:
          schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore()); // We could add multiple schemas for multiple types,
          // but here we're just making one type from JSON schema.
          _context.next = 7;
          return schemaInput.addSource({
            name: typeName,
            schema: jsonSchemaString
          });
        case 7:
          inputData = new InputData();
          inputData.addInput(schemaInput);
          debugger;
          _context.next = 12;
          return quicktype({
            inputData: inputData,
            "export": true,
            lang: new MyTypeScriptTargetLanguage(),
            rendererOptions: {
              "just-types": true
            }
          });
        case 12:
          _yield$quicktype = _context.sent;
          lines = _yield$quicktype.lines;
          return _context.abrupt("return", lines.join("\n"));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _quicktypeJSONSchema.apply(this, arguments);
}
module.exports = {
  jsonSchemaToTs: quicktypeJSONSchema
};