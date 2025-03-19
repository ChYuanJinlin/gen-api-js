/* 
  引入:import {receivingItemListGet,receivingItemSelectPtsItemPageGet,receivingItemExportPost,receivingItembyItemIdGet,receivingItemPost,receivingItemPut,receivingItembyItemIdsDelete,receivingItemGetKeyAndValueGet,receivingItemImportListPost,receivingItemGetCountItemGet,receivingItemSubmitPtsItemPost,receivingItemGetTrainConfigItemListGet,receivingItemInsertPtsClickItemPost,receivingItemInsertPtsClickItemPut,receivingItemDeptItemTreePost,receivingItemSelectUserPtsItemHomePageGet} from '@\api\test.ts'
  */
import ajax from "@/utils/request";

/*
 *@序号:1
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemListGet(params?: any) {
  return ajax<any, any>({ url: `/receiving/item/list`, method: "get", params });
}

/*
 *@序号:2
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:查询事项管理列表--学习计划(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectPtsItemPageGet(params?: any) {
  return ajax<any, any>({
    url: `/receiving/item/selectPtsItemPage`,
    method: "get",
    params,
  });
}

/*
 *@序号:3
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:导出事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemExportPost(data?: any) {
  return ajax<any, any>({
    url: `/receiving/item/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:4
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: any) {
  return ajax<any, any>({ url: `/receiving/item/${itemid}`, method: "get" });
}

/*
 *@序号:5
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:新增事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItemPost(data?: any) {
  return ajax<any, any>({ url: `/receiving/item`, method: "post", data });
}

/*
 *@序号:6
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:修改事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItemPut(data?: any) {
  return ajax<any, any>({ url: `/receiving/item`, method: "put", data });
}

/*
 *@序号:7
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: any) {
  return ajax<any, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}

/*
 *@序号:8
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:查询事项管理下拉--新增试题时使用(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetKeyAndValueGet(params?: any) {
  return ajax<any, any>({
    url: `/receiving/item/getKeyAndValue`,
    method: "get",
    params,
  });
}

/*
 *@序号:9
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:导入事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemImportListPost(data?: any) {
  return ajax<any, any>({
    url: `/receiving/item/importList`,
    method: "post",
    data,
  });
}

/*
 *@序号:10
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:获取事项/人员总数(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetCountItemGet(params?: any) {
  return ajax<any, any>({
    url: `/receiving/item/getCountItem`,
    method: "get",
    params,
  });
}

/*
 *@序号:11
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:事项管理submit(https://app.apifox.com/project/5648510)
 */

export function receivingItemSubmitPtsItemPost(data?: any) {
  return ajax<any, any>({
    url: `/receiving/item/submitPtsItem`,
    method: "post",
    data,
  });
}

/*
 *@序号:12
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:查询模拟训练事项配置列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetTrainConfigItemListGet(params?: any) {
  return ajax<any, any>({
    url: `/receiving/item/getTrainConfigItemList`,
    method: "get",
    params,
  });
}

/*
 *@序号:13
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPost(data?: any) {
  return ajax<any, any>({
    url: `/receiving/item/insertPtsClickItem`,
    method: "post",
    data,
  });
}

/*
 *@序号:14
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPut(data?: any) {
  return ajax<any, any>({
    url: `/receiving/item/insertPtsClickItem`,
    method: "put",
    data,
  });
}

/*
 *@序号:15
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:获取部门事项树列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemDeptItemTreePost(data?: any) {
  return ajax<any, any>({
    url: `/receiving/item/deptItemTree`,
    method: "post",
    data,
  });
}

/*
 *@序号:16
 *@项目名称:南充职业化培训(undefined/cat_undefined)
 *@菜单名称:个人收藏查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectUserPtsItemHomePageGet(params?: any) {
  return ajax<any, any>({
    url: `/receiving/item/selectUserPtsItemHomePage`,
    method: "get",
    params,
  });
}
