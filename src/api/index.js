/* 
  引入:import {receivingItemListGet,receivingItemSelectPtsItemPageGet,receivingItemExportPost,receivingItembyItemIdGet,receivingItemPost,receivingItemPut,receivingItembyItemIdsDelete,receivingItemGetKeyAndValueGet,receivingItemImportListPost,receivingItemGetCountItemGet,receivingItemSubmitPtsItemPost,receivingItemGetTrainConfigItemListGet,receivingItemInsertPtsClickItemPost,receivingItemInsertPtsClickItemPut,receivingItemDeptItemTreePost,receivingItemSelectUserPtsItemHomePageGet} from '@\api\index.js'
  */
import ajax from "@/utils/request";

/*
 *@序号:1
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemListGet(params) {
  return ajax({ url: `/receiving/item/list`, method: "get", params });
}

/*
 *@序号:2
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理列表--学习计划(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectPtsItemPageGet(params) {
  return ajax({
    url: `/receiving/item/selectPtsItemPage`,
    method: "get",
    params,
  });
}

/*
 *@序号:3
 *@项目名称:南充职业化培训
 *@菜单名称:导出事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemExportPost(data) {
  return ajax({ url: `/receiving/item/export`, method: "post", data });
}

/*
 *@序号:4
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid) {
  return ajax({ url: `/receiving/item/${itemid}`, method: "get" });
}

/*
 *@序号:5
 *@项目名称:南充职业化培训
 *@菜单名称:新增事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItemPost(data) {
  return ajax({ url: `/receiving/item`, method: "post", data });
}

/*
 *@序号:6
 *@项目名称:南充职业化培训
 *@菜单名称:修改事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItemPut(data) {
  return ajax({ url: `/receiving/item`, method: "put", data });
}

/*
 *@序号:7
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids) {
  return ajax({ url: `/receiving/item/${itemids}`, method: "delete" });
}

/*
 *@序号:8
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理下拉--新增试题时使用(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetKeyAndValueGet(params) {
  return ajax({ url: `/receiving/item/getKeyAndValue`, method: "get", params });
}

/*
 *@序号:9
 *@项目名称:南充职业化培训
 *@菜单名称:导入事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemImportListPost(data) {
  return ajax({ url: `/receiving/item/importList`, method: "post", data });
}

/*
 *@序号:10
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项/人员总数(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetCountItemGet(params) {
  return ajax({ url: `/receiving/item/getCountItem`, method: "get", params });
}

/*
 *@序号:11
 *@项目名称:南充职业化培训
 *@菜单名称:事项管理submit(https://app.apifox.com/project/5648510)
 */

export function receivingItemSubmitPtsItemPost(data) {
  return ajax({ url: `/receiving/item/submitPtsItem`, method: "post", data });
}

/*
 *@序号:12
 *@项目名称:南充职业化培训
 *@菜单名称:查询模拟训练事项配置列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetTrainConfigItemListGet(params) {
  return ajax({
    url: `/receiving/item/getTrainConfigItemList`,
    method: "get",
    params,
  });
}

/*
 *@序号:13
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPost(data) {
  return ajax({
    url: `/receiving/item/insertPtsClickItem`,
    method: "post",
    data,
  });
}

/*
 *@序号:14
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPut(data) {
  return ajax({
    url: `/receiving/item/insertPtsClickItem`,
    method: "put",
    data,
  });
}

/*
 *@序号:15
 *@项目名称:南充职业化培训
 *@菜单名称:获取部门事项树列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemDeptItemTreePost(data) {
  return ajax({ url: `/receiving/item/deptItemTree`, method: "post", data });
}

/*
 *@序号:16
 *@项目名称:南充职业化培训
 *@菜单名称:个人收藏查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectUserPtsItemHomePageGet(params) {
  return ajax({
    url: `/receiving/item/selectUserPtsItemHomePage`,
    method: "get",
    params,
  });
}
/*
 *@序号:17
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理列表--学习计划(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectPtsItemPageGet(params) {
  return ajax({
    url: `/receiving/item/selectPtsItemPage`,
    method: "get",
    params,
  });
}

/*
 *@序号:18
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理下拉--新增试题时使用(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetKeyAndValueGet(params) {
  return ajax({ url: `/receiving/item/getKeyAndValue`, method: "get", params });
}

/*
 *@序号:19
 *@项目名称:南充职业化培训
 *@菜单名称:导入事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemImportListPost(data) {
  return ajax({ url: `/receiving/item/importList`, method: "post", data });
}

/*
 *@序号:20
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项/人员总数(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetCountItemGet(params) {
  return ajax({ url: `/receiving/item/getCountItem`, method: "get", params });
}

/*
 *@序号:21
 *@项目名称:南充职业化培训
 *@菜单名称:事项管理submit(https://app.apifox.com/project/5648510)
 */

export function receivingItemSubmitPtsItemPost(data) {
  return ajax({ url: `/receiving/item/submitPtsItem`, method: "post", data });
}

/*
 *@序号:22
 *@项目名称:南充职业化培训
 *@菜单名称:查询模拟训练事项配置列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetTrainConfigItemListGet(params) {
  return ajax({
    url: `/receiving/item/getTrainConfigItemList`,
    method: "get",
    params,
  });
}

/*
 *@序号:23
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPost(data) {
  return ajax({
    url: `/receiving/item/insertPtsClickItem`,
    method: "post",
    data,
  });
}

/*
 *@序号:24
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPut(data) {
  return ajax({
    url: `/receiving/item/insertPtsClickItem`,
    method: "put",
    data,
  });
}

/*
 *@序号:25
 *@项目名称:南充职业化培训
 *@菜单名称:获取部门事项树列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemDeptItemTreePost(data) {
  return ajax({ url: `/receiving/item/deptItemTree`, method: "post", data });
}

/*
 *@序号:26
 *@项目名称:南充职业化培训
 *@菜单名称:个人收藏查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectUserPtsItemHomePageGet(params) {
  return ajax({
    url: `/receiving/item/selectUserPtsItemHomePage`,
    method: "get",
    params,
  });
}
