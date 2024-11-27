const { jsonSchemaToTs } = require("./toTs");
async function genTemplateTS(typeName = "ITest", option, jsonSchema) {
  const { reqBody, reqType, method } = option;
  if (jsonSchema) {
    jsonSchemaToTs(typeName, reqBody || "");
    return;
  }
  if (!reqBody) {
    return "";
  }
  const paramName = typeName;
  let IParamsTemplate = "";

  if (method === "POST" && reqType === "json") {
    IParamsTemplate = await translateTempte(reqBody, paramName);
  } else {
    IParamsTemplate = await Promise.resolve(
      translateTempteQuery(reqBody, paramName)
    );
  }

  let template = `${IParamsTemplate}`;
  return template;

  function translateTempteQuery(arr, paramName = "IParams") {
    if (arr.length === 0) return "";
    let start = `export interface ${paramName} {\n`;
    arr.forEach((item) => {
      item.format = item.desc;
      item.description = item.example;
      item.name = item.name.replace(/(\..*)|\[\d\]/g, "");
      start += `${translateComment(item)}\n`;
      start += `${item.name}${item.required === "1" ? ":" : "?:"} ${item.type === "file" ? "File" : "string"};\n`;
    });
    return start + "\n}";
  }
}

function translateTempte(obj, typeName = "IParams", property) {
  let start = `interface ${typeName} {\n`;
  if (property) {
    obj = obj.properties[property];
  }
  if (!obj) {
    return `type ${typeName} = undefined`;
  } else if (obj && obj.type === "object") {
    return start + translateTempteInner(obj) + "\n}";
  } else if (obj.type === "array") {
    return `type ${typeName} = Array<${translateArrayItem(obj.items)}>\n`;
  } else {
    return `type ${typeName} = ${obj.type === "integer" ? "number" : obj.type}\n`;
  }
}
function translateTempteInner(obj) {
  let start = "";
  for (const key in obj.properties) {
    if (Object.hasOwnProperty.call(obj.properties, key)) {
      const element = obj.properties[key];
      if (element.type === "object") {
        start += `${key}${obj?.required?.includes(key) ? ":" : "?:"} {\n${translateTempteInner(element)}\n};\n`;
      } else if (element.type === "array") {
        start += `${key}${obj?.required?.includes(key) ? ":" : "?:"} Array<\n${translateArrayItem(element.items)}>;\n`;
      } else if (Array.isArray(element.type)) {
        start += `${translateComment(element)}\n`;
        start += `${key}${obj?.required?.includes(key) ? ":" : "?:"} ${element.type.map((item) => (item === "integer" ? "number" : item)).join(" | ")};\n`;
      } else {
        start += `${translateComment(element)}\n`;
        start += `${key}${obj?.required?.includes(key) ? ":" : "?:"} ${element.type === "integer" ? "number" : element.type};\n`;
      }
    }
  }
  return start;
}

function translateArrayItem(items) {
  if (items.type === "object") {
    return `{${translateTempteInner(items)}}`;
  } else if (items.type === "array") {
    return `Array<${translateTempteInner(items.items)}>\n`;
  } else if (items.type === "object") {
    return `${translateTempteInner(items)}\n`;
  } else {
    return `${items.type === "integer" ? "number" : items.type}\n`;
  }
}

function translateComment(element) {
  if (element.format && !element.description) {
    return ` /* ${element.format}*/`;
  } else if (element.format && element.description) {
    return `/* ${element.format}, ${element.description.split("").join(", ")}*/`;
  } else if (element.description) {
    return `/* ${element.description.split("").join(", ")}*/`;
  } else {
    return "";
  }
}

module.exports = { genTemplateTS };
