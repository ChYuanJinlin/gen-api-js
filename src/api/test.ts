/* 
  引入:import {receivingItemListGet,receivingItemSelectPtsItemPageGet,receivingItemExportPost,receivingItembyItemIdGet,receivingItemPost,receivingItemPut,receivingItembyItemIdsDelete,receivingItemGetKeyAndValueGet,receivingItemImportListPost,receivingItemGetCountItemGet,receivingItemSubmitPtsItemPost,receivingItemGetTrainConfigItemListGet,receivingItemInsertPtsClickItemPost,receivingItemInsertPtsClickItemPut,receivingItemDeptItemTreePost,receivingItemSelectUserPtsItemHomePageGet} from '@\api\test.ts'
  */
import ajax from "@/utils/request";

export interface IListGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:1
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemListGet(params?: IListGetParams) {
  return ajax<IListGetParams, any>({
    url: `/receiving/item/list`,
    method: "get",
    params,
  });
}

export interface ISelectPtsItemPageGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:2
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理列表--学习计划(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectPtsItemPageGet(
  params?: ISelectPtsItemPageGetParams,
) {
  return ajax<ISelectPtsItemPageGetParams, any>({
    url: `/receiving/item/selectPtsItemPage`,
    method: "get",
    params,
  });
}

export interface IExportPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:3
 *@项目名称:南充职业化培训
 *@菜单名称:导出事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemExportPost(data?: IExportPostParams) {
  return ajax<IExportPostParams, any>({
    url: `/receiving/item/export`,
    method: "post",
    data,
  });
}

export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:4
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:5
 *@项目名称:南充职业化培训
 *@菜单名称:新增事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItemPost(data?: IPostParams) {
  return ajax<IPostParams, any>({
    url: `/receiving/item`,
    method: "post",
    data,
  });
}

export interface IPutParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:6
 *@项目名称:南充职业化培训
 *@菜单名称:修改事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItemPut(data?: IPutParams) {
  return ajax<IPutParams, any>({ url: `/receiving/item`, method: "put", data });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:7
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}

export interface IGetKeyAndValueGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:8
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理下拉--新增试题时使用(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetKeyAndValueGet(
  params?: IGetKeyAndValueGetParams,
) {
  return ajax<IGetKeyAndValueGetParams, any>({
    url: `/receiving/item/getKeyAndValue`,
    method: "get",
    params,
  });
}

export interface IImportListPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:9
 *@项目名称:南充职业化培训
 *@菜单名称:导入事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemImportListPost(data?: IImportListPostParams) {
  return ajax<IImportListPostParams, any>({
    url: `/receiving/item/importList`,
    method: "post",
    data,
  });
}

export interface IGetCountItemGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:10
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项/人员总数(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetCountItemGet(params?: IGetCountItemGetParams) {
  return ajax<IGetCountItemGetParams, any>({
    url: `/receiving/item/getCountItem`,
    method: "get",
    params,
  });
}

export interface ISubmitPtsItemPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:11
 *@项目名称:南充职业化培训
 *@菜单名称:事项管理submit(https://app.apifox.com/project/5648510)
 */

export function receivingItemSubmitPtsItemPost(
  data?: ISubmitPtsItemPostParams,
) {
  return ajax<ISubmitPtsItemPostParams, any>({
    url: `/receiving/item/submitPtsItem`,
    method: "post",
    data,
  });
}

export interface IGetTrainConfigItemListGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:12
 *@项目名称:南充职业化培训
 *@菜单名称:查询模拟训练事项配置列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetTrainConfigItemListGet(
  params?: IGetTrainConfigItemListGetParams,
) {
  return ajax<IGetTrainConfigItemListGetParams, any>({
    url: `/receiving/item/getTrainConfigItemList`,
    method: "get",
    params,
  });
}

export interface IInsertPtsClickItemPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:13
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPost(
  data?: IInsertPtsClickItemPostParams,
) {
  return ajax<IInsertPtsClickItemPostParams, any>({
    url: `/receiving/item/insertPtsClickItem`,
    method: "post",
    data,
  });
}

export interface IInsertPtsClickItemPutParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:14
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPut(
  data?: IInsertPtsClickItemPutParams,
) {
  return ajax<IInsertPtsClickItemPutParams, any>({
    url: `/receiving/item/insertPtsClickItem`,
    method: "put",
    data,
  });
}

export interface IDeptItemTreePostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:15
 *@项目名称:南充职业化培训
 *@菜单名称:获取部门事项树列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemDeptItemTreePost(data?: IDeptItemTreePostParams) {
  return ajax<IDeptItemTreePostParams, any>({
    url: `/receiving/item/deptItemTree`,
    method: "post",
    data,
  });
}

export interface ISelectUserPtsItemHomePageGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:16
 *@项目名称:南充职业化培训
 *@菜单名称:个人收藏查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectUserPtsItemHomePageGet(
  params?: ISelectUserPtsItemHomePageGetParams,
) {
  return ajax<ISelectUserPtsItemHomePageGetParams, any>({
    url: `/receiving/item/selectUserPtsItemHomePage`,
    method: "get",
    params,
  });
}
export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:17
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:18
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}
export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:19
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:20
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}
export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:21
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:22
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}
export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:23
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:24
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}
export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:25
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:26
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}
export interface IGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:27
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项管理详细信息(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdGet(itemid?: IGetParams) {
  return ajax<IGetParams, any>({
    url: `/receiving/item/${itemid}`,
    method: "get",
  });
}

export interface IDeleteParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:28
 *@项目名称:南充职业化培训
 *@菜单名称:删除事项管理(https://app.apifox.com/project/5648510)
 */

export function receivingItembyItemIdsDelete(itemids?: IDeleteParams) {
  return ajax<IDeleteParams, any>({
    url: `/receiving/item/${itemids}`,
    method: "delete",
  });
}
export interface ISelectPtsItemPageGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:29
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理列表--学习计划(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectPtsItemPageGet(
  params?: ISelectPtsItemPageGetParams,
) {
  return ajax<ISelectPtsItemPageGetParams, any>({
    url: `/receiving/item/selectPtsItemPage`,
    method: "get",
    params,
  });
}

export interface IGetKeyAndValueGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:30
 *@项目名称:南充职业化培训
 *@菜单名称:查询事项管理下拉--新增试题时使用(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetKeyAndValueGet(
  params?: IGetKeyAndValueGetParams,
) {
  return ajax<IGetKeyAndValueGetParams, any>({
    url: `/receiving/item/getKeyAndValue`,
    method: "get",
    params,
  });
}

export interface IImportListPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:31
 *@项目名称:南充职业化培训
 *@菜单名称:导入事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemImportListPost(data?: IImportListPostParams) {
  return ajax<IImportListPostParams, any>({
    url: `/receiving/item/importList`,
    method: "post",
    data,
  });
}

export interface IGetCountItemGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:32
 *@项目名称:南充职业化培训
 *@菜单名称:获取事项/人员总数(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetCountItemGet(params?: IGetCountItemGetParams) {
  return ajax<IGetCountItemGetParams, any>({
    url: `/receiving/item/getCountItem`,
    method: "get",
    params,
  });
}

export interface ISubmitPtsItemPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:33
 *@项目名称:南充职业化培训
 *@菜单名称:事项管理submit(https://app.apifox.com/project/5648510)
 */

export function receivingItemSubmitPtsItemPost(
  data?: ISubmitPtsItemPostParams,
) {
  return ajax<ISubmitPtsItemPostParams, any>({
    url: `/receiving/item/submitPtsItem`,
    method: "post",
    data,
  });
}

export interface IGetTrainConfigItemListGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:34
 *@项目名称:南充职业化培训
 *@菜单名称:查询模拟训练事项配置列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemGetTrainConfigItemListGet(
  params?: IGetTrainConfigItemListGetParams,
) {
  return ajax<IGetTrainConfigItemListGetParams, any>({
    url: `/receiving/item/getTrainConfigItemList`,
    method: "get",
    params,
  });
}

export interface IInsertPtsClickItemPostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:35
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPost(
  data?: IInsertPtsClickItemPostParams,
) {
  return ajax<IInsertPtsClickItemPostParams, any>({
    url: `/receiving/item/insertPtsClickItem`,
    method: "post",
    data,
  });
}

export interface IInsertPtsClickItemPutParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:36
 *@项目名称:南充职业化培训
 *@菜单名称:辅助接件事项点击次数统计(https://app.apifox.com/project/5648510)
 */

export function receivingItemInsertPtsClickItemPut(
  data?: IInsertPtsClickItemPutParams,
) {
  return ajax<IInsertPtsClickItemPutParams, any>({
    url: `/receiving/item/insertPtsClickItem`,
    method: "put",
    data,
  });
}

export interface IDeptItemTreePostParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:37
 *@项目名称:南充职业化培训
 *@菜单名称:获取部门事项树列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemDeptItemTreePost(data?: IDeptItemTreePostParams) {
  return ajax<IDeptItemTreePostParams, any>({
    url: `/receiving/item/deptItemTree`,
    method: "post",
    data,
  });
}

export interface ISelectUserPtsItemHomePageGetParams {
  /* 创建者, 创, 建, 者*/
  createBy?: string;
  /* 创建时间, 创, 建, 时, 间*/
  createTime?: string;
  /* 更新者, 更, 新, 者*/
  updateBy?: string;
  /* 更新时间, 更, 新, 时, 间*/
  updateTime?: string;
  /* 备注, 备, 注*/
  remark?: string;

  params?: string;
  /* 事项id, 事, 项, i, d*/
  itemId?: string;
  /* 所属机构id, 所, 属, 机, 构, i, d*/
  departId?: string;
  /* 所属机构, 所, 属, 机, 构*/
  deptName?: string;
  /* 窗口, 窗, 口*/
  window?: string;
  /* 窗口, 窗, 口*/
  windowName?: string;
  /* 主事项, 主, 事, 项*/
  mainItem?: string;
  /* 事项名称, 事, 项, 名, 称*/
  itemName?: string;
  /* 事项编码, 事, 项, 编, 码*/
  itemCode?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemType?: string;
  /* 事项类型, 事, 项, 类, 型*/
  itemTypeName?: string;
  /* 事项分类, 事, 项, 分, 类*/
  itemClassify?: string;
  /* 事项分类名称, 事, 项, 分, 类, 名, 称*/
  itemClassifyName?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handType?: string;
  /* 办件类型, 办, 件, 类, 型*/
  handTypeName?: string;
  /* 状态（0正常 1暂停）, 状, 态, （, 0, 正, 常,  , 1, 暂, 停, ）*/
  status?: string;
  /* 实施编码, 实, 施, 编, 码*/
  implementCode?: string;
  /* 服务对象, 服, 务, 对, 象*/
  serviceData?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFrom?: string;
  /* 办理形式, 办, 理, 形, 式*/
  handFromName?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRange?: string;
  /* 通办范围, 通, 办, 范, 围*/
  handRangeName?: string;
  /* 法定办结时限, 法, 定, 办, 结, 时, 限*/
  legalHandDeadline?: string;
  /* 承诺办结时限, 承, 诺, 办, 结, 时, 限*/
  commitHandDeadline?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFree?: string;
  /* 是否收费（0-是，1-否）, 是, 否, 收, 费, （, 0, -, 是, ，, 1, -, 否, ）*/
  isFreeName?: string;
  /* 认证登记需求, 认, 证, 登, 记, 需, 求*/
  authentication?: string;
  /* 受理条件, 受, 理, 条, 件*/
  acceptanceCondition?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultType?: string;
  /* 审批结果类型, 审, 批, 结, 果, 类, 型*/
  approveResultTypeName?: string;
  /* 审批结果名称, 审, 批, 结, 果, 名, 称*/
  approveResultName?: string;
  /* 审批结果样本, 审, 批, 结, 果, 样, 本*/
  approveResultFile?: string;
  /* uuid, u, u, i, d*/
  uuid?: string;
  /* 场景难度, 场, 景, 难, 度*/
  difficultLevel?: string;
  /* 办理流程说明, 办, 理, 流, 程, 说, 明*/
  flowContent?: string;
  /* 事项描述, 事, 项, 描, 述*/
  itemDescribe?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  flowList?: string;
  /* 办理流程名称, 办, 理, 流, 程, 名, 称*/
  flowList?: string;
  /* 办理时长, 办, 理, 时, 长*/
  flowList?: string;
  /* 转外时限, 转, 外, 时, 限*/
  flowList?: string;
  /* 事项id, 事, 项, i, d*/
  flowList?: string;
  /* 排序, 排, 序*/
  flowList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  flowList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  lawList?: string;
  /* 法律（法规）名称, 法, 律, （, 法, 规, ）, 名, 称*/
  lawList?: string;
  /* 法律（法规）类型, 法, 律, （, 法, 规, ）, 类, 型*/
  lawList?: string;
  /* 法律条例, 法, 律, 条, 例*/
  lawList?: string;
  /* 法律条款内容, 法, 律, 条, 款, 内, 容*/
  lawList?: string;
  /* 事项id, 事, 项, i, d*/
  lawList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  lawList?: string;
  /* 依据文号, 依, 据, 文, 号*/
  lawList?: string;
  /* 颁布机关, 颁, 布, 机, 关*/
  lawList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  materialList?: string;
  /* 材料名称, 材, 料, 名, 称*/
  materialList?: string;
  /* 材料形式, 材, 料, 形, 式*/
  materialList?: string;
  /* 材料必要性, 材, 料, 必, 要, 性*/
  materialList?: string;
  /* 材料示例, 材, 料, 示, 例*/
  materialList?: string;
  /* 事项id, 事, 项, i, d*/
  materialList?: string;
  /* 空表, 空, 表*/
  materialList?: string;
  /* 样表, 样, 表*/
  materialList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  materialList?: string;
  /* 申请材料uuid, 申, 请, 材, 料, u, u, i, d*/
  materialList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  situationList?: string;
  /* 情形名称, 情, 形, 名, 称*/
  situationList?: string;
  /* 情形依据, 情, 形, 依, 据*/
  situationList?: string;
  /* 关联材料, 关, 联, 材, 料*/
  situationList?: string;
  /* 事项id, 事, 项, i, d*/
  situationList?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  situationList?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 情形题目, 情, 形, 题, 目*/
  ptsSituationQuestionReturnVos?: string;
  /* uuid, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 事项uuid, 事, 项, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 题目类型, 题, 目, 类, 型*/
  ptsSituationQuestionReturnVos?: string;
  /* $column.columnComment, $, c, o, l, u, m, n, ., c, o, l, u, m, n, C, o, m, m, e, n, t*/
  ptsSituationQuestionReturnVos?: string;
  /* 所属事项依据题目uuid, 所, 属, 事, 项, 依, 据, 题, 目, u, u, i, d*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项内容（有可能是图片）, 选, 项, 内, 容, （, 有, 可, 能, 是, 图, 片, ）*/
  ptsSituationQuestionReturnVos?: string;
  /* 选项（ABC....）, 选, 项, （, A, B, C, ., ., ., ., ）*/
  ptsSituationQuestionReturnVos?: string;
}

/*
 *@序号:38
 *@项目名称:南充职业化培训
 *@菜单名称:个人收藏查询事项管理列表(https://app.apifox.com/project/5648510)
 */

export function receivingItemSelectUserPtsItemHomePageGet(
  params?: ISelectUserPtsItemHomePageGetParams,
) {
  return ajax<ISelectUserPtsItemHomePageGetParams, any>({
    url: `/receiving/item/selectUserPtsItemHomePage`,
    method: "get",
    params,
  });
}
