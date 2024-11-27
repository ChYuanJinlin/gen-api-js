const { getFilenames } = require("../utils/index");
const path = require("path");
const prettier = require("prettier");
const fs = require("fs");
const filesNames = [];
getFilenames(
  path.join(__dirname, "../core"),
  async (filesName, files, index) => {
    filesNames.push(filesName.split("\\").at(-1).replace(".js", ""));
    if (files.length - 1 === index) {
      fs.writeFileSync(
        path.join(__dirname, "../index.js"),
        await prettier.format(genIndex(), {
          parser: "babel",
        }),
        "utf8"
      );
    }
  }
);

function genIndex() {
  const templateCode = `
    require("./utils/Generator");
    const path = require("path");
    ${filesNames.map((name) => `const ${name} = require(path.join(__dirname, "core/${name}"));`).join("\n")}
    module.exports = class GenApi {
    static docName;
    static createGenApi(config) {
        this.docName = config.docName;
        switch (this.docName) {
        ${filesNames
          .map(
            (name) => `case "${name.toLowerCase()}":
                return new ${name}(config);`
          )
          .join("\n")}
        default:
            break;
        }
    }
    };
    `;
  return templateCode;
}
