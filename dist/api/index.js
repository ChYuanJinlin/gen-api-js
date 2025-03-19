"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toolGenDownloadbyTableName = toolGenDownloadbyTableName;
exports.toolGenPreviewbyTableId = toolGenPreviewbyTableId;
var _request = _interopRequireDefault(require("@/utils/request"));
/* 
  引入:import {toolGenPreviewbyTableId,toolGenDownloadbyTableName} from '@\api\index.js'
  */

/*
 *@序号:1
 *@项目名称:南充职业化培训
 *@菜单名称:预览代码(https://app.apifox.com/project/5648510)
 */

function toolGenPreviewbyTableId(tableid) {
  return (0, _request.default)({
    url: "/tool/gen/preview/".concat(tableid),
    method: "get"
  });
}

/*
 *@序号:2
 *@项目名称:南充职业化培训
 *@菜单名称:生成代码（下载方式）(https://app.apifox.com/project/5648510)
 */

function toolGenDownloadbyTableName(tablename) {
  return (0, _request.default)({
    url: "/tool/gen/download/".concat(tablename),
    method: "get"
  });
}