/* 
  引入:import {toolGenPreviewbyTableId,toolGenDownloadbyTableName} from '@\api\index.js'
  */
import ajax from "@/utils/request";

/*
 *@序号:1
 *@项目名称:南充职业化培训
 *@菜单名称:预览代码(https://app.apifox.com/project/5648510)
 */

export function toolGenPreviewbyTableId(tableid) {
  return ajax({ url: `/tool/gen/preview/${tableid}`, method: "get" });
}

/*
 *@序号:2
 *@项目名称:南充职业化培训
 *@菜单名称:生成代码（下载方式）(https://app.apifox.com/project/5648510)
 */

export function toolGenDownloadbyTableName(tablename) {
  return ajax({ url: `/tool/gen/download/${tablename}`, method: "get" });
}
