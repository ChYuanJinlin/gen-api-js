/* 
  引入:import {postGetPersonalReportList} from '@\test\index.ts'
  */
import ajax from "@/utils/request";

export interface IReportListParams {
  /**
   * 身份证号
   */
  idCardNo?: string;
  /**
   * 页码,非空
   */
  pageNo?: number;
  /**
   * 页大小,非空
   */
  pageSize?: number;
  /**
   * 姓名
   */
  personName?: string;
  /**
   * 征信报告编号
   */
  reportId?: string;
  [property: string]: any;
}

/**
 * 返回结果
 */
export interface IReportListData {
  /**
   * 列表数据
   */
  list?: List[];
  /**
   * 总记录数
   */
  totalCount?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 征信报告编号
   */
  creditReportBasicInfoBOList?: CreditReportBasicInfoBOList[];
  /**
   * 身份证号
   */
  idCardNo?: string;
  /**
   * 姓名
   */
  personName?: string;
  [property: string]: any;
}

export interface CreditReportBasicInfoBOList {
  /**
   * 征信报告编号
   */
  reportId?: string;
  /**
   * 更新时间
   */
  updateDate?: string;
  [property: string]: any;
}

/*
 *@序号:1
 *@项目名称:aigc-itg-web(https://apaas-yapi.midea.com/project/6816/interface/api/cat_142178)
 *@菜单名称:个人信用报告列表查询(https://apaas-yapi.midea.com/project/6816/interface/api/100279709)
 */

export function postGetPersonalReportList(
  data?: IReportListParams,
): Promise<Ajax.BaseResponse<IReportListData>> {
  return _post(`/creditReport/getPersonalReportList`, data);
}
