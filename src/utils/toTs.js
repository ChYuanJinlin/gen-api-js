const {
  quicktype,
  InputData,
  JSONSchemaInput,
  TypeScriptTargetLanguage,
  TypeScriptRenderer,
  getOptionValues,
  stringEscape,
  tsFlowOptions,
  FetchingJSONSchemaStore,
} = require("quicktype-core");


class MyTypeScriptTargetLanguage extends TypeScriptTargetLanguage {
  makeRenderer(renderContext, untypedOptionValues) {
    return new MyTypeScriptRenderer(
      this,
      renderContext,
      getOptionValues(tsFlowOptions, untypedOptionValues)
    );
  }
}

class MyTypeScriptRenderer extends TypeScriptRenderer {
  emitEnum(e, enumName) {
    this.emitDescription(this.descriptionForType(e));
    this.emitLine(["export type ", enumName, " = "]);
    this.forEachEnumCase(e, "none", (name, jsonName, position) => {
      const suffix = position === "last" || position === "only" ? ";" : " | ";
      this.indent(() =>
        this.emitLine(`"${stringEscape(jsonName)}"`, suffix)
      );
    });
  }
}

async function quicktypeJSONSchema(typeName, jsonSchemaString) {
  if(!jsonSchemaString) {
    return ''
  }
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

  const inputData = new InputData();
  inputData.addInput(schemaInput);
  const { lines } = await quicktype({
    inputData,
    "export": true,
    lang: new MyTypeScriptTargetLanguage(),
    rendererOptions: {
      "just-types": true,
    },
  });
  return lines.join("\n");
}

module.exports = { jsonSchemaToTs: quicktypeJSONSchema };
