/* 
  引入:import {systemTestSequence,systemTestSendRisk,systemTestQueryRes,transactionBillQueryExport,transactionBillAmountCount,transactionBillOperationLog,transactionBillTransferTrace,transactionBillDetail,transactionBillInvoiceInfo,transactionGetInvoiceContInfo,transactionFinancingQueryPagination,transactionFinancingQueryExport,transactionFinancingBillQueryPagination,transactionRelationCont,transactionFinancedQueryExport,transactionTransferQueryPagination,transactionTransferingQueryExport,transactionTransferBillQueryPagination,transactionTransferedQueryExport,transactionSelectContract,transactionDownloadLoanFile,transactionDownloadOneCert,transactionDownloadOneContract,transactionQueryDetails,transactionQueryInvoice,transactionQuerySellInvoice,transactionSelectFinanEntFile,transactionDetailTrack,transactionHoldingQueryPagination,transactionHoldingQueryExport,transactionBillSelectOne,externalSDPCallback,externalContractSignResult,externalUnionCertificationFaceResult,ctrAuthorizationDownload,ctrUsbKeyApplyDownload,ctrUsbKeyApplyDownloadcoreEnt,ctrCancleUkApplyDownload,ctrRemakeUkeyApplyDownload,ctrResetUkeyPwdApplyDownload,businessQueryPagination,businessExportInfoSelect,businessBulidBusinessId,edpCheckEntCardType,edpCheckPrdOpenState,edpQueryUserEnt,edpGetUserBaseInfo,edpCheckUserThereElements,edpGetAccountBankInfo,edpGetAccountAccountInfo,edpStartPayApply,edpGetPayAuth,edpQueryMgrEnt,edpQueryUserInfo,edpQueryUserAccount,edpQueryLoginInfo,edpCreateUserName,prdOpenApplyGetPageList,prdOpenApplyGetPageListExport,prdOpenAuditGetPageList,prdOpenOpenedGetPageList,prdOpenOpenedGetPageListExport,prdOpenGetEntInfo,prdOpenGetUserInfo,prdOpenGetAccountInfo,prdOpenGetUkeyInfo,prdOpenSaveEntInfo,prdOpenSaveUserInfo,prdOpenSaveAccountInfo,prdOpenSaveCertInfo,prdOpenMgrAccept,prdOpenOmcCommitToAudit,prdOpenOmcReview,prdUsbKeyApplyDownload,prdSelectAuditRecords,prdResend,prdAsyncDoubleWriteData,prdOpenGetNewestEntInfo,prdOpenGetNewestUserInfo,prdOpenGetNewestAccountInfo,prdOpenGetNewestUkeyInfo,prdAuthorizeDownload,prdStaffauthDetail,prdOpenApplyValidate,prdOpenEntSync,prdOpenCheckIsFiliale,prdAuthorizationFromParentCompanyDownload,prdOpenAccountDownload,prdChangeApplyGetPageList,prdChangeCheckIsChanging,prdChangeViewEntInfo,prdChangeDraftEntInfo,prdChangeDraftAccountInfo,prdChangeCompareGetEntInfo,prdChangeCompareGetAccountInfo,prdChangeSaveEntInfo,prdChangeCancel,prdChangeCommitToAudit,prdChangeAudit,systemSysMqQuerySysMq,systemSysMqSend,systemAreaLeaderList,systemAreaOthersListbyAreaId,systemRoleInsertRole,systemRoleAddManage,systemRoleAddEnt,systemRolebyIDDisableAndEnable,systemRolebyIDDisableEnt,systemRoleEditEnt,systemRoleEditManage,systemRoleUpdateRole,systemRolebyIDDel,systemRoleUpdate,systemRolebyIDGet,systemRoleList,systemRoleOmcList,systemRoleEntList,systemRoleCyrole,systemRoleSelectUserUseRole,systemRoleSelectEntManageCanDistributiveRole,systemRoleUserbyUserid,systemRoleEntuserbyUserid,systemRolebyRoleIdAllocResouce,systemRolebyRoleIdGetResources,systemRolePagination,systemSyncAppointFileEdp,ukeyApply,ukeyBindukey,ukeyRevokeCert,ukeyCfcaRenewCert,ukeyQuerySummary,ukeySelectRevokeHistory,ukeySelectRevokeHistoryExport,ukeyCheckApplyUKeyTimes,ukeyManageSelect,ukeyManageSelect,ukeyManageSelect,ukeyManageDetails,ukeyManageUpdate,ukeyManageUpdate,ukeyManageUploadAgain,ukeyManageListExport,ukeyFileHistoryInfo,ukeyGetExpireList,ukeyExpireUpdate,ukeyRenewedList,ukeyRenewedListExport,ukeyRenewingListExport,ukeyCfcaReset,systemUserInsert,systemUserbyUserIdResetPwd,systemUserEdit,systemUserbyUserIdFrozenUser,systemUserbyUserIdThawUser,systemUserbyUserIdDelete,systemUserSelectOmcAll,systemUserSelectEntUser,systemUserbyUserIdSelectDetails,systemUserSelectDetails,systemUserLogin,systemUserChangePwd,systemUserChangePhone,systemUserChangeEmail,systemUserLogout,systemUserbyUserIdAllocRole,systemUserSelectByCondition,systemUserUkeyinfoQuery,systemOmcUserFindList,systemEntUserFindList,systemUserRoleFind,systemUsernameCreate,systemUserSelectUKeyEntUser,systemUserSelectUKeyEntUserExport,systemUserFind,systemSyncUserInfo,systemPublicKey,sysItosResend,sysItosQuerySysItos,sysItosConfirmFail,actuatorHealth,systemDeleteLock,systemGetContractAsync,systemSearchEntAcc,systemSearchEntAccsp,systemSignupSearchDirect,systemSignupSearchNormal,systemEximResult,systemKongUrlTest,systemCheckEntmgr,systemSdbankRateTest,systemAbcBalanceTest,systemCommonConstant,systemCommonDownloadFromURL,systemQueryBizfile,systemCommonUpload,systemCommonDownload,systemCommonDeleteFile,systemCommonDeleteCancel,systemCommonSelectFile,systemArchviesUpload,systemQuotaUpload,systemEdpRegionList,systemRegionList,systemRegionChildrensList,invoiceSyncFinResync,invoiceSyncFinResyncBatch,invoiceSyncFinSync,invoiceSyncResellResync,invoiceSyncResellResyncBatch,invoiceSyncResellSync,invoiceSyncResellSyncBatch,invoiceSyncRevisingInvoiceType,invoiceSyncRevisingResellInvoiceType,invoiceSyncRevisingOccupyInvoiceType,invoiceSyncRevisingInvoiceUpload,invoiceSyncRevisingInvoiceVerify,invoiceSyncRevisingResellSnap,systemMessageList,systemMessagebyIDGet,systemMessageUpdate,systemMessageSetRead,systemMessagePagination,systemResouceAdd,systemResoucebyIDDel,systemResouceUpdate,systemResouceList,systemResouceChildrensList,systemResoucebyIDGet,systemResoucePagination,systemResourceUserbyUserid,systemResourcebyIDLogicDelete,systemResourcebyIDDisable,systemResourcebyIDEnable,systemResourceRolebyRoleId,systemArchivesSelectAll,systemArchivesExport,systemArchivesSelectDetails,systemArchivesDispose,systemArchivesUkeyreceiptDownload,systemBankInfobyIDGet,systemBankInfoList,systemBankInfoPagination,systemBankInfoPaginationById,systemNoticeMsgAdd,systemNoticeMsgbyNoticeIdDel,systemNoticeMsgUpdate,systemNoticeMsgList,systemNoticeMsgbyNoticeIdGet,systemNoticeMsgPagination,systemEntNoticeMsgGetValidList,systemNoticeMsgGetLoginUserDetail,systemParameterbyIdGet,systemParameterUpdate,systemParameterList,systemParameterPagination,systemParameterSellRate,systemParameterUpdateRate,systemParameterSetRate,systemDictionaryAdd,systemDictionarybyIDDel,systemDictionaryUpdate,systemDictionaryChildrensList,systemDictionaryList,systemDictionarybyIDGet,systemDictionaryPagination,systemDictionarybyIDLogicDelete,systemDictionarybyIDDisable,systemDictionarybyIDEnable,systemSystemDateAdd,systemSystemDatebyIDGet,systemSystemDateUpdate,systemSystemDateSetWeekDay,systemSystemDateList,systemSystemDatePagination,systemSystemDateGetNextWeekDay,productConfSelectPage,productConfSelectList,productConfAddItem,productConfUpdateItem,productConfSelectById,systemQueryArea,systemConfigArea,systemQueryManagerList,systemQueryAllManagerList,systemManagerBatchupdate,systemManagerSingleupdate,systemQueryManagerUnallocated,systemQueryManagerEnt,systemQueryNomaskDetail,systemExportManagerAll,systemExportManagerAllocated,personQuery,personRecall,personRefuse,personConfirmSuccess,personConfirmRefuse,personSellConfirmSucc,ukeysignImport,systemMessageTemplateAdd,systemMessageTemplatebyIDDel,systemMessageTemplateUpdate,systemMessageTemplateList,systemMessageTemplatebyIDGet,systemMessageTemplatebyIDQueryDetail,systemMessageTemplatePagination,eviSceneQueryPage,eviDownEvidence,eviSceneDetail,eviSceneRetry,tradeTransactionIssueAmountCount,tradeTransactionBillAmountCount,tradeTransactionBillDetail,tradeTransactionBillCertPrint,tradeTransactionCreditResend,tradeTransactionBillDueQuery,tradeTransactionBillDueExport,testCouponIopNetworkTeest,transactionIssueGetDate,transactionIssueGetCode,transactionIssueGetEnterprise,transactionIssueGetSupplyEnterprise,transactionIssueGetOu,transactionIssueGetOuAccount,transactionIssueAdd,transactionIssueSelectReview,transactionIssueSelectReviewDetailbyTransferId,transactionIssueSelectSign,transactionIssueSelectSignDetailbyTransferDetailId,transactionIssueUpdateWithdrawn,transactionIssueSelectReviewRecord,transactionIssueSelectReviewRecordDetailTransferId,transactionIssueCheckBatch,transactionIssueAddBatch,transactionIssueUpdateTovoid,transactionIssueSelectOpenbill,transactionIssueExportOpenListRefuse,transactionIssueExportOpenList,transactionIssueSelectOpenebill,transactionIssueExportOpenBillList,transactionIssueSelectGfpPersonProcess,transactionIssueResendGfpBill,transactionIssueConfirmGfpFail,transactionIssueSelectGfpBillDetail,payplanCreditQuery,payplanCreditQueryFail,payplanCreditResendFailRequest,payplanCreditDetail,payplanCreditSubPlanQuery,payplanPlanWaitauthQuery,payplanPlanWaitauthDetail,payplanSubPlanWaitauthQuery,payplanPlanAuth,payplanDuepayResultQuery,payplanDuepayConfirmFail,payplanDuepaySelectSubPlan,payplanDuePayGenerateSceneNode,payplanCreditOutlineCheckdoing,payplanCreditOutlineDetail,payplanCreditOutlineSubmit,payplanCreditOutlineReview,payplanCreditOutlineReviewList,payplanDuepayConfirmFailSubmit,invoiceQueryAva,invoiceExportQueryAva,invoiceQueryUsed,invoiceExportQueryUsed,invoiceRecheckInvoice,invoiceSyncVerifyData,invoiceUpdateCheckResult,sqBillOpenQuery,sqBillOpenQueryDetail,sqBillOpenAuthQuery,sqBillOpenAuthDetail,sqBillOpenAuthReview,reexchangeSelectWaitMatched,reexchangeSelectPageList,reexchangeButtonWithdraw,reexchangeButtonUnbind,reexchangeButtonResend,duepayOrderSelectDuePage,duepayOrderSelectPassPage,duepayOrderSelectReviewPage,duepayOrderAddDuepayOrderProcess,duepayOrderReviewDuepayOrderProcess,duepayOrderQueryProcessDetail,financeRecoNoticeQueryPage,financeRecoNoticeExport,financeRecoNotice,financeRecoConfig,financeRecoNoticeInfore,financeRecoConfigInfore,sqBillCancelQuery,sqBillCancelRetryGfpBill,financeOrganAdd,financeOrganSelect,financeOrganDetail,financeOrganUpdate,financeOrganChange,financeOrganReview,financeOrganDelete,financeOrganReviewSelect,financeOrganPassSelect,financeOrganPassExport,financeFindAll,financeFinanceEdit,financeFinancesFind,financeFinancesManualImport,financeOrgFindbyFin,financeOrgFindbyFinanceCode,financeOrgFinAllFin,financeOrganUserQuery,financeOrganUsernameGet,financeOrganSaveUser,invoiceApplyQueryFin,invoiceApplyQueryDocFin,invoiceApplyDownloadDocFin,invoiceApplyExportFin,invoiceApplyQueryFinDetail,invoiceApplyQueryFinDetailInfo,invoiceApplyQueryFinFail,invoiceApplyExportFinFail,invoiceApplyFinFailRetry,invoiceApplyResultManCheck,invoiceApplyInvoiceFeeSend,invoiceApplyInvoiceFeeInfo,invoiceOccupyApplyList,invoiceOccupyApplyBillQuery,invoiceOccupyApplyInit,invoiceOccupyApplySubmit,invoiceOccupyApplyCancel,invoiceOccupyApplyDetail,invoiceOccupyApplyReviewList,invoiceOccupyApplyPass,invoiceOccupyApplyReject,invoiceOccupyApplyInvoiceQuery,invoiceOccupyApplyInvoiceValid,invoiceOccupyApplyInvoiceCalc,invoiceOccupyApplyInvoiceOcr,batchTransferAcceptanceList,batchTransferAcceptTransfersInfo,batchTransferAcceptInvoice,batchTransferAcceptRisk,batchTransferAcceptApproval,batchTransferSendRisk,batchTransferAcceptManual,quotaApplySave,quotaApplyCancel,quotaAprvAudit,quotaAprvChange,quotaAprvReCredit,quotaCreditApplySave,quotaCreditApplyCancle,quotaCreditAprvAudit,quotaCreditAprvChange,quotaCreditAprvReCredit,quotaFreezeApply,quotaThawApply,quotaThawAprv,quotaEntOpenQueryPage,quotaEntOpenExport,quotaEntOpenHisQuery,quotaEntOpenHisExport,quotaEntCreditQueryPage,quotaEntCreditExport,quotaEntCreditHisQuery,quotaEntCreditHisExport,quotaEntAllCreditQuery,quotaOpenApplyQueryPage,quotaOpenApplyDetail,quotaOpenReApplyDetail,quotaOpenAprvQueryPage,quotaOpenQueryPage,quotaOpenExport,quotaOpenDetail,quotaFreezeApplyQueryPage,quotaFreezeApplyExport,quotaFreezeApplyDetail,quotaThawAprvQueryPage,quotaThawAprvDetail,quotaFreezethawQueryPage,quotaFreezethawExport,quotaCreditApplyQueryPage,quotaCreditApplyDetail,quotaCreditReApplyDetail,quotaCreditAprvQueryPage,quotaCreditQueryPage,quotaCreditExport,quotaCreditDetail,quotaBatchOptSellCreditExportexist,quotaBatchOptSellCreditExportadd,quotaBatchOptSellCreditImportByExcel,quotaBatchOptOpenCreditExportadd,quotaBatchOptOpenCreditExportexist,quotaApplyWhiteListExport,quotaApplyWhiteListImport,itrusDetailsSelect,itrusInterfaceCount,itrusInterfaceExport,itrusInterfaceSelect,blockQueryBlock,blockQueryUser,blockQueryEnt,blockQueryDecode,invoiceWriteoffListQuery,invoiceWriteoffListExport,invoiceWriteoffDetail,invoiceWriteoffWriteoff,invoiceWriteoffWriteoffBack,enterpriseOrgOrgList,enterpriseOrgInit,enterpriseOrgQueryEnterprise,enterpriseOrgAdd,enterpriseOrgDetail,enterpriseOrgList,enterpriseOrgExportEnterpriseOrgList,enterpriseOrgOrgValid,enterpriseOrgEntValid,accountBalanceSelectList,accountBalanceQueryAccountNoDetail,accountBalanceExport,accountBalanceUpdateSingle,orgGetAllTree,orgGetSpecificTree,orgGetAllGroup,orgGetAllEnterprise,orgQueryLegalCoreEnt,orgGetList,orgExportList,orgAddOrgFile,orgGetDetailInfo,orgOpNode,orgDeleteOrg,orgGetLegalNoreg,orgEnterApplyQueryListNotRegisterLegal,orgGetCoreApplyList,orgGetCoreReviewList,orgExportReviewList,orgGetEntByCode,orgAddApply,orgGetEntInfo,orgGetAccountById,orgAddAccount,orgSelectUserInfo,orgGetUser,orgAddUser,orgGetOrganCodetType,orgGetFileHistory,orgGetFile,orgAddCoreEntFile,orgRejectApply,orgRejectAll,orgCoreDelete,orgGetCoreEntList,orgExportCoreList,orgCoreSonDetail,orgGetEntAll,orgUpdateOrgcodeInit,orgAddMemberUnitApply,baseRateSelectPage,baseRateSelectList,baseRateAddItem,baseRateUpdateItem,baseRateCreateRateCode,baseRateSelectHistoryList,baseRateSelectById,payReceiveCancel,payReceiveSelect,payReceiveDetail,payReceiveMatchHandle,payReceiveSelectWaitHandle,payExport,payReceiveRevert,interestSelectList,interestAddByExcel,interestExport,interestTemplateExport,baseRateChangeSelectApplyPage,baseRateChangeSelectReviewPage,baseRateChangeSelectPassPage,baseRateChangeAddBaseRateProcess,baseRateChangeReviewBaseRateProcess,baseRateChangeQueryProcessDetail,interestMatchSelectInterestPage,interestMatchExportInterestPageVip,interestMatchExportInterestPageGen,interestMatchQueryDetail,finCostRateSelect,finCostRateDetail,finCostRateAdd,finCostRateEdit,finCostRateExport,finAddCostRateByExcel,interestVipSelectList,interestVipAddByExcel,interestVipExport,interestVipTemplateExport,finCostRecordSelect,finCostRecordExport,finCostRecordSum,interestConfModelConfModelSelectPage,interestConfModelConfModelDetail,interestConfModelConfModelSelectList,interestConfModelConfModelRelateDetail,finFlowSendList,finFlowReceiveDetail,finFlowSendFileupload,finFlowReject,finFlowResend,finFlowAsynReceiveDeal,finVipRateSelect,finVipRateDetail,finVipRateAdd,finVipRateEdit,finVipRateExport,finAddVipCostRateByExcel,interestMatchChangeSelectApplyPage,interestMatchChangeSelectReviewPage,interestMatchChangeSelectPassPage,interestMatchChangeExportSelectPassPageGen,interestMatchChangeQueryProcessDetail,interestMatchChangeQueryVipProcessDetail,interestMatchChangeAddBySingle,interestMatchChangeReviewInterestMatchProcess,interestMatchChangeAddUploadExcel,interestMatchChangeCancelAll,interestMatchChangeVipChange,interestConfModelChangeSelectApplyPage,interestConfModelChangeSelectReviewPage,interestConfModelChangeSelectPassPage,interestConfModelChangeCreateRateCode,interestConfModelChangeSubmitInterestConfModelProcess,interestConfModelChangeReviewInterestConfModelProcess,interestConfModelChangeInterestConfModelProcessDetail,interestConfModelChangeCaculateRate,interestConfModelChangeInterestConfModelProcessFileDetailForRateConfId,interestConfModelChangeInterestConfModelProcessFileDetail,entOmcAccountSelectApprovalList,entOmcAccountSelectDraftList,entOmcAccountSelectAccountHistory,entOmcAccountSelectAccountHistoryDetail,entOmcAccountSelectEnt,entOmcAccountSelectAllEnt,entOmcAccountSelectAccout,entOmcAccountSubmitDraft,entOmcAccountAddBankAcocunt,entOmcAccountDelete,entOmcAccountSelectFiles,entOmcAccountSaveAsDraft,entOmcAccountDeleteDraft,entOmcAccountUpdateDraft,entOmcAccountUpLoadFile,entOmcAccountReview,entOmcAccountSelectAbnormalList,entOmcAccountDealWithAbnormal,entOmcAccountDealResult,entOmcAccountSelectAccountChangeDetail,entAccountQueryCnapsBankTypeList,entAccountQueryCnapsList,entPayeeList,entPayeesDownload,entDocumentSelect,entDocumentUploadDraft,entDocumentUploadApply,entDocumentUploadAudit,entDocumentSelectApplyList,entDocumentSelectAuditList,entDocumentUploadViewDetail,entDocumentDeleteSingle,entDocumentDeleteBiz,entDocumentSelectDocBiz,coreEntChgNewsonApplyInit,coreEntChgNewsonApplyDetail,coreEntChgNewsonApplySave,coreEntChgNewsonApplyCommit,coreEntChgNewsonApplyReject,coreEntChgNewsonApplyPass,coreEntChgNewsonApplyCancle,coreEntChgNewempApplyInit,coreEntChgNewempApplyDetail,coreEntChgNewempApplySave,coreEntChgNewempApplyCommit,coreEntChgNewempApplyPass,coreEntChgNewempApplyReject,coreEntChgNewempApplyCancle,coreEntChgEntCanapplyQuery,coreEntChgEntCanapplyOption,coreEntChgHisApplyList,coreEntChgHisApplyExport,coreEntChgUserQuery,coreEntChgUsernameGet,coreEntChgNewempApplyEntList,coreEntChgNewaccApplyInit,coreEntChgNewaccApplyDetail,coreEntChgNewaccApplySave,coreEntChgNewaccApplyPass,coreEntChgNewaccApplyReject,coreEntChgNewaccApplyCancle,coreEntChgCheckismidea,coreEntChgNewempSaveUser,coreEntChgUploadReview,entIntentionQueryPagenation,entIntentionGetInfo,entIntentionHandleInfo,entIntentionApplyExport,memSelectMemInfoChange,memAddMemInfoChange,memSelectOldMemInfo,memDeleteApply,memSelectMemInfoMagnifier,memSelectMemInfoProduct,memSelectMemInfoChangeDetail,memUpdateMemInfoChange,memSelectMemInfoChangeReviewDetail,memSelectMemInfoChangeSuccessDetail,memCommonUpload,memSelectFileList,memDeleteFile,memDeleteTempFile,memSelectFinishedChange,memSelectChangeDetail,memSelectChangeFileList,memSaveChangeUpLoadFile,entEnterpriseAuthbyEnterpriseIdSelect,entEnterpriseAuthbyEnterpriseIdEditSelect,entEnterpriseAuthSelectPaddingAuth,entEnterpriseAuthCheckEnterpriseInfoIsRepeat,entEnterpriseAuthReviewPassEntInfoAuth,entEnterpriseAuthReviewRejectEntInfoAuth,entEnterpriseAuthReviewCancelEntInfoAuth,entEnterpriseAuthRejectResendEntInfoAuth,entEnterpriseEdit,entEnterpriseReAuth,entEnterprisebyEnterpriseIdFrozen,entEnterprisebyEnterpriseIdThaw,entEnterpriseSelect,entEnterprisebyEnterpriseIdSelectDetails,entEnterprisesQuery,entMementInit,entEnterpriseSelectEnt,entEnterpriseUpdateEntGrade,entSelectEntInfo,entEntInfoExport,entEnterpriseSelectOuterEnt,entOnlineSupFindOrganCodeType,entOnlineFindEnts,entOnlineFindEnts,entOnlineFindEnts,entOnlineCancelFrozen,entOnlineEditAccountMoneyValidate,entOnlineSupFindEntInfo,entOnlineSupFindEntAccount,entOnlineSupFindUserInfo,entOnlineSupFindDocInfo,entOnlineMemFindEntInfo,entOnlineMemFindAccountInfo,entOnlineMemFindUserInfo,entOnlineMemFindDocInfo,entOnlineOperatorRecord,entOnlineMemUpdateMemEntother,batchTransferAcceptSyncVerifyData,batchTransferRiskRes,systemFilePreview} from '@\test\index.ts'
  */
import ajax from "@/utils/request";

type ITestSequenceParams = undefined;

/*
 *@序号:1
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138754)
 *@菜单名称:sequence(https://apaas-yapi.midea.com/project/7260/interface/api/744978)
 */

export function systemTestSequence(data?: ITestSequenceParams) {
  return ajax<ITestSequenceParams, any>({
    url: `/system/test/sequence`,
    method: "post",
    data,
  });
}

type ISendRiskParams = undefined;

/*
 *@序号:2
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138754)
 *@菜单名称:todo 记得删除 sunyh109(https://apaas-yapi.midea.com/project/7260/interface/api/744981)
 */

export function systemTestSendRisk(data?: ISendRiskParams) {
  return ajax<ISendRiskParams, any>({
    url: `/system/test/send/risk`,
    method: "post",
    data,
  });
}

export interface IQueryResParams {
  batchNo: string;
}

/*
 *@序号:3
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138754)
 *@菜单名称:queryRes(https://apaas-yapi.midea.com/project/7260/interface/api/744984)
 */

export function systemTestQueryRes(data?: IQueryResParams) {
  return ajax<IQueryResParams, any>({
    url: `/system/test/query/res`,
    method: "post",
    data,
  });
}

export interface IQueryExportParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:4
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:美易单查询列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/744987)
 */

export function transactionBillQueryExport(data?: IQueryExportParams) {
  return ajax<IQueryExportParams, any>({
    url: `/transaction/bill/query/export`,
    method: "post",
    data,
  });
}

export interface IAmountCountParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IAmountCountData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:5
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:美易单查询-金额统计(https://apaas-yapi.midea.com/project/7260/interface/api/744990)
 */

export function transactionBillAmountCount(data?: IAmountCountParams) {
  return ajax<IAmountCountParams, IAmountCountData>({
    url: `/transaction/bill/amount/count`,
    method: "post",
    data,
  });
}

export interface IOperationLogParams {
  transferId: string;

  detailId: string;

  billCode: string;
}
export interface IOperationLogData {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单状态
   */
  billState?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 操作用户所属企业
   */
  entName?: string;
  /**
   * 事件编码
   */
  eventCode?: string;
  /**
   * 事件名称
   */
  eventName?: string;
  /**
   * 下一个操作限制完成日期
   */
  limitDate?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 流水号
   */
  operationId?: number;
  /**
   * 操作用户角色名称
   */
  operatorRoleName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 交易明细ID
   */
  transferDetailId?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 操作用户用户信息
   */
  userName?: string;
  [property: string]: any;
}

/*
 *@序号:6
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看票据流转日志(https://apaas-yapi.midea.com/project/7260/interface/api/744993)
 */

export function transactionBillOperationLog(data?: IOperationLogParams) {
  return ajax<IOperationLogParams, IOperationLogData>({
    url: `/transaction/bill/operation/log`,
    method: "post",
    data,
  });
}

export interface ITransferTraceParams {
  billId: string;
}
export interface ITransferTraceData {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * id
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  /**
   * 区块链关联码
   */
  blockChainCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业
   */
  cashPaymentName?: string;
  /**
   * 子节点
   */
  childBill?: ChildBill[];
  /**
   * 子节点（美易单新轨迹）
   */
  children?: Child[];
  createBy?: string;
  createTime?: string;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 受让企业
   */
  inputterName?: string;
  /**
   * 当前节点标识
   */
  isCurrent?: boolean;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 父级编号
   */
  parentCode?: string;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 拒签企业
   */
  refuseEntName?: string;
  /**
   * 拒签标识
   */
  refuseRemark?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * 转让/开单日期
   */
  transferDate?: string;
  /**
   * 流水号
   */
  transferDetailId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * 新美易单轨迹持有方式
   */
  transferType?: number;
  [property: string]: any;
}

export interface ChildBill {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * id
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  /**
   * 区块链关联码
   */
  blockChainCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业
   */
  cashPaymentName?: string;
  /**
   * 子节点
   */
  childBill?: { [key: string]: any }[];
  /**
   * 子节点（美易单新轨迹）
   */
  children?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 受让企业
   */
  inputterName?: string;
  /**
   * 当前节点标识
   */
  isCurrent?: boolean;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 父级编号
   */
  parentCode?: string;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 拒签企业
   */
  refuseEntName?: string;
  /**
   * 拒签标识
   */
  refuseRemark?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * 转让/开单日期
   */
  transferDate?: string;
  /**
   * 流水号
   */
  transferDetailId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * 新美易单轨迹持有方式
   */
  transferType?: number;
  [property: string]: any;
}

export interface Child {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * id
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  /**
   * 区块链关联码
   */
  blockChainCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业
   */
  cashPaymentName?: string;
  /**
   * 子节点
   */
  childBill?: { [key: string]: any }[];
  /**
   * 子节点（美易单新轨迹）
   */
  children?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 受让企业
   */
  inputterName?: string;
  /**
   * 当前节点标识
   */
  isCurrent?: boolean;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 父级编号
   */
  parentCode?: string;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 拒签企业
   */
  refuseEntName?: string;
  /**
   * 拒签标识
   */
  refuseRemark?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * 转让/开单日期
   */
  transferDate?: string;
  /**
   * 流水号
   */
  transferDetailId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * 新美易单轨迹持有方式
   */
  transferType?: number;
  [property: string]: any;
}

/*
 *@序号:7
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看票据流转轨迹(https://apaas-yapi.midea.com/project/7260/interface/api/744996)
 */

export function transactionBillTransferTrace(data?: ITransferTraceParams) {
  return ajax<ITransferTraceParams, ITransferTraceData>({
    url: `/transaction/bill/transfer/trace`,
    method: "post",
    data,
  });
}

export interface IBillDetailParams {
  transferId: string;

  billCode: string;
}
export interface IBillDetailData {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:8
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:票据详情查看(https://apaas-yapi.midea.com/project/7260/interface/api/744999)
 */

export function transactionBillDetail(data?: IBillDetailParams) {
  return ajax<IBillDetailParams, IBillDetailData>({
    url: `/transaction/bill/detail`,
    method: "post",
    data,
  });
}

export interface IInvoiceInfoParams {
  invoiceRelateCode: string;
}

/*
 *@序号:9
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:发票信息(https://apaas-yapi.midea.com/project/7260/interface/api/745002)
 */

export function transactionBillInvoiceInfo(data?: IInvoiceInfoParams) {
  return ajax<IInvoiceInfoParams, any>({
    url: `/transaction/bill/invoiceInfo`,
    method: "post",
    data,
  });
}

export interface IContInfoParams {
  occupyBatchNo: string;
}

/*
 *@序号:10
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:getInvoiceContList(https://apaas-yapi.midea.com/project/7260/interface/api/745005)
 */

export function transactionGetInvoiceContInfo(data?: IContInfoParams) {
  return ajax<IContInfoParams, any>({
    url: `/transaction/get/invoiceCont/info`,
    method: "post",
    data,
  });
}

export interface IQueryPaginationParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IQueryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:11
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 （运营端），融资中(https://apaas-yapi.midea.com/project/7260/interface/api/745008)
 */

export function transactionFinancingQueryPagination(
  data?: IQueryPaginationParams,
) {
  return ajax<IQueryPaginationParams, IQueryPaginationData>({
    url: `/transaction/financing/query/pagination`,
    method: "post",
    data,
  });
}

export interface IQueryExportParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:12
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 导出（运营端），融资中(https://apaas-yapi.midea.com/project/7260/interface/api/745011)
 */

export function transactionFinancingQueryExport(data?: IQueryExportParams) {
  return ajax<IQueryExportParams, any>({
    url: `/transaction/financing/query/export`,
    method: "post",
    data,
  });
}

export interface IQueryPaginationParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IQueryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:13
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 （运营端），已融资(https://apaas-yapi.midea.com/project/7260/interface/api/745014)
 */

export function transactionFinancingBillQueryPagination(
  data?: IQueryPaginationParams,
) {
  return ajax<IQueryPaginationParams, IQueryPaginationData>({
    url: `/transaction/financing/bill/query/pagination`,
    method: "post",
    data,
  });
}

export interface IRelationContParams {
  applyId?: string;

  financeCode?: string;

  finOrganCode?: string;
}
export interface IRelationContData {
  /**
   * 融资申请批次id
   */
  applyId?: number;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 合同金额
   */
  contAmount?: string;
  /**
   * 合同附件docId
   */
  contDocId?: string;
  /**
   * 合同生效日yyyy-MM-dd
   */
  contEffDate?: string;
  /**
   * 合同到期日
   */
  contExDate?: string;
  /**
   * 合同附件名称
   */
  contFileName?: string;
  /**
   * 合同名称
   */
  contName?: string;
  /**
   * 贸易合同编号
   */
  contNo?: string;
  /**
   * t_ebill_trd_invoice_occupy_log表主键
   */
  occId?: string;
  /**
   * 占用类型
   */
  occupyType?: number;
  [property: string]: any;
}

/*
 *@序号:14
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:运营端融资合同(https://apaas-yapi.midea.com/project/7260/interface/api/745017)
 */

export function transactionRelationCont(data?: IRelationContParams) {
  return ajax<IRelationContParams, IRelationContData>({
    url: `/transaction/relation/cont`,
    method: "post",
    data,
  });
}

export interface IQueryExportParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:15
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 （运营端），已融资(https://apaas-yapi.midea.com/project/7260/interface/api/745020)
 */

export function transactionFinancedQueryExport(data?: IQueryExportParams) {
  return ajax<IQueryExportParams, any>({
    url: `/transaction/financed/query/export`,
    method: "post",
    data,
  });
}

export interface IQueryPaginationParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IQueryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:16
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询-转让中(https://apaas-yapi.midea.com/project/7260/interface/api/745023)
 */

export function transactionTransferQueryPagination(
  data?: IQueryPaginationParams,
) {
  return ajax<IQueryPaginationParams, IQueryPaginationData>({
    url: `/transaction/transfer/query/pagination`,
    method: "post",
    data,
  });
}

export interface IQueryExportParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:17
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询导出(转让中)(https://apaas-yapi.midea.com/project/7260/interface/api/745026)
 */

export function transactionTransferingQueryExport(data?: IQueryExportParams) {
  return ajax<IQueryExportParams, any>({
    url: `/transaction/transfering/query/export`,
    method: "post",
    data,
  });
}

export interface IQueryPaginationParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IQueryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:18
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询（已转让）(https://apaas-yapi.midea.com/project/7260/interface/api/745029)
 */

export function transactionTransferBillQueryPagination(
  data?: IQueryPaginationParams,
) {
  return ajax<IQueryPaginationParams, IQueryPaginationData>({
    url: `/transaction/transfer/bill/query/pagination`,
    method: "post",
    data,
  });
}

export interface IQueryExportParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:19
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询（已转让）导出(https://apaas-yapi.midea.com/project/7260/interface/api/745032)
 */

export function transactionTransferedQueryExport(data?: IQueryExportParams) {
  return ajax<IQueryExportParams, any>({
    url: `/transaction/transfered/query/export`,
    method: "post",
    data,
  });
}

export interface ISelectContractParams {
  transferDetailId: string;

  ctrBusinessType: string;
}
export interface ISelectContractData {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/*
 *@序号:20
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:协议列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/745035)
 */

export function transactionSelectContract(params?: ISelectContractParams) {
  return ajax<ISelectContractParams, ISelectContractData>({
    url: `/transaction/select/contract`,
    method: "get",
    params,
  });
}

export interface ILoanFileParams {
  transferDetailId: string;
}

/*
 *@序号:21
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:放款回单文件查询下载 add on 20230721 当前只有进出口银行使用(https://apaas-yapi.midea.com/project/7260/interface/api/745038)
 */

export function transactionDownloadLoanFile(data?: ILoanFileParams) {
  return ajax<ILoanFileParams, any>({
    url: `/transaction/download/loanFile`,
    method: "post",
    data,
  });
}

export interface IOneCertParams {
  transferDetailId: string;

  ctrBusinessType: string;
}

/*
 *@序号:22
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:凭证下载(https://apaas-yapi.midea.com/project/7260/interface/api/745041)
 */

export function transactionDownloadOneCert(data?: IOneCertParams) {
  return ajax<IOneCertParams, any>({
    url: `/transaction/download/one/cert`,
    method: "post",
    data,
  });
}

export interface IOneContractParams {
  signDetailId: string;
}

/*
 *@序号:23
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:单个协议下载(https://apaas-yapi.midea.com/project/7260/interface/api/745044)
 */

export function transactionDownloadOneContract(params?: IOneContractParams) {
  return ajax<IOneContractParams, any>({
    url: `/transaction/download/one/contract`,
    method: "get",
    params,
  });
}

export interface IQueryDetailsParams {
  transferDetailId: string;

  transferId: string;
}

/*
 *@序号:24
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:sellBillInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745047)
 */

export function transactionQueryDetails(data?: IQueryDetailsParams) {
  return ajax<IQueryDetailsParams, any>({
    url: `/transaction/query/details`,
    method: "post",
    data,
  });
}

export interface IQueryInvoiceParams {
  billCode: string;
}

/*
 *@序号:25
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:getInvoiceInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745050)
 */

export function transactionQueryInvoice(data?: IQueryInvoiceParams) {
  return ajax<IQueryInvoiceParams, any>({
    url: `/transaction/query/invoice`,
    method: "post",
    data,
  });
}

export interface ISellInvoiceParams {
  transferDetailId: string;
}

/*
 *@序号:26
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:querySellInvoice(https://apaas-yapi.midea.com/project/7260/interface/api/745053)
 */

export function transactionQuerySellInvoice(data?: ISellInvoiceParams) {
  return ajax<ISellInvoiceParams, any>({
    url: `/transaction/query/sell/invoice`,
    method: "post",
    data,
  });
}

export interface IEntFileParams {
  transferDetailId: string;
}

/*
 *@序号:27
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看交易文件(https://apaas-yapi.midea.com/project/7260/interface/api/745056)
 */

export function transactionSelectFinanEntFile(data?: IEntFileParams) {
  return ajax<IEntFileParams, any>({
    url: `/transaction/selectFinanEntFile`,
    method: "post",
    data,
  });
}

export interface IDetailTrackParams {
  transferId: string;

  transferDetailId: string;
}

/*
 *@序号:28
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看轨迹(https://apaas-yapi.midea.com/project/7260/interface/api/745059)
 */

export function transactionDetailTrack(data?: IDetailTrackParams) {
  return ajax<IDetailTrackParams, any>({
    url: `/transaction/detail/track`,
    method: "post",
    data,
  });
}

export interface IQueryPaginationParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IQueryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:29
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:持单查询(https://apaas-yapi.midea.com/project/7260/interface/api/745062)
 */

export function transactionHoldingQueryPagination(
  data?: IQueryPaginationParams,
) {
  return ajax<IQueryPaginationParams, IQueryPaginationData>({
    url: `/transaction/holding/query/pagination`,
    method: "post",
    data,
  });
}

export interface IQueryExportParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:30
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:持单查询-导出(https://apaas-yapi.midea.com/project/7260/interface/api/745065)
 */

export function transactionHoldingQueryExport(data?: IQueryExportParams) {
  return ajax<IQueryExportParams, any>({
    url: `/transaction/holding/query/export`,
    method: "post",
    data,
  });
}

export interface ISelectOneParams {
  billCode: string;
}

/*
 *@序号:31
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:queryBill(https://apaas-yapi.midea.com/project/7260/interface/api/745068)
 */

export function transactionBillSelectOne(data?: ISelectOneParams) {
  return ajax<ISelectOneParams, any>({
    url: `/transaction/bill/selectOne`,
    method: "post",
    data,
  });
}

type IPCallbackParams = undefined;

/*
 *@序号:32
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138758)
 *@菜单名称:callback(https://apaas-yapi.midea.com/project/7260/interface/api/745071)
 */

export function externalSDPCallback(data?: IPCallbackParams) {
  return ajax<IPCallbackParams, any>({
    url: `/external/SDP/callback`,
    method: "post",
    data,
  });
}

type ISignResultParams = undefined;

/*
 *@序号:33
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138760)
 *@菜单名称:signContractCallBack(https://apaas-yapi.midea.com/project/7260/interface/api/745074)
 */

export function externalContractSignResult(data?: ISignResultParams) {
  return ajax<ISignResultParams, any>({
    url: `/external/contract/signResult`,
    method: "post",
    data,
  });
}

type IFaceResultParams = undefined;

/*
 *@序号:34
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138762)
 *@菜单名称:unionCertificationScanFaceCallBack(https://apaas-yapi.midea.com/project/7260/interface/api/745077)
 */

export function externalUnionCertificationFaceResult(data?: IFaceResultParams) {
  return ajax<IFaceResultParams, any>({
    url: `/external/unionCertification/faceResult`,
    method: "post",
    data,
  });
}

export interface IAuthorizationDownloadParams {
  enterpriseName: string;

  orgId?: string;
}

/*
 *@序号:35
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:downloadAuthorize(https://apaas-yapi.midea.com/project/7260/interface/api/745080)
 */

export function ctrAuthorizationDownload(
  params?: IAuthorizationDownloadParams,
) {
  return ajax<IAuthorizationDownloadParams, any>({
    url: `/ctr/authorization/download`,
    method: "get",
    params,
  });
}

export interface IApplyDownloadParams {
  enterpriseName: string;
}

/*
 *@序号:36
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:omc协助下载全链融平台企业证书申请表(https://apaas-yapi.midea.com/project/7260/interface/api/745083)
 */

export function ctrUsbKeyApplyDownload(params?: IApplyDownloadParams) {
  return ajax<IApplyDownloadParams, any>({
    url: `/ctr/usbKeyApply/download`,
    method: "get",
    params,
  });
}

export interface IDownloadcoreEntParams {
  applyId: string;
}

/*
 *@序号:37
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:omc下载全链融平台企业证书申请表 - 核心企业(https://apaas-yapi.midea.com/project/7260/interface/api/745086)
 */

export function ctrUsbKeyApplyDownloadcoreEnt(params?: IDownloadcoreEntParams) {
  return ajax<IDownloadcoreEntParams, any>({
    url: `/ctr/usbKeyApply/download4coreEnt`,
    method: "get",
    params,
  });
}

export interface IApplyDownloadParams {
  enterpriseName: string;
}

/*
 *@序号:38
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:04_全链融平台数字证书注销申请表下载(https://apaas-yapi.midea.com/project/7260/interface/api/745089)
 */

export function ctrCancleUkApplyDownload(params?: IApplyDownloadParams) {
  return ajax<IApplyDownloadParams, any>({
    url: `/ctr/cancleUkApply/download`,
    method: "get",
    params,
  });
}

export interface IApplyDownloadParams {
  enterpriseName: string;

  typeFlag: string;
}

/*
 *@序号:39
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:05_全链融平台USB-KEY证书补办申请表(https://apaas-yapi.midea.com/project/7260/interface/api/745092)
 */

export function ctrRemakeUkeyApplyDownload(params?: IApplyDownloadParams) {
  return ajax<IApplyDownloadParams, any>({
    url: `/ctr/remakeUkeyApply/download`,
    method: "get",
    params,
  });
}

export interface IApplyDownloadParams {
  enterpriseName: string;
}

/*
 *@序号:40
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:06_全链融平台USB-KEY证书重置密码申请表(https://apaas-yapi.midea.com/project/7260/interface/api/745095)
 */

export function ctrResetUkeyPwdApplyDownload(params?: IApplyDownloadParams) {
  return ajax<IApplyDownloadParams, any>({
    url: `/ctr/resetUkeyPwdApply/download`,
    method: "get",
    params,
  });
}

export interface IQueryPaginationParams {
  /* 主键*/
  id?: string;
  /* 商圈编码*/
  businessId?: string;
  /* 集团简称*/
  orgSimpleName?: string;
  /* 核心企业名称*/
  coreEntName?: string;
  /* 核心企业企业编码*/
  coreEntId?: string;
  /* 核心企业组织编码*/
  coreOrgId?: string;
  /* 关联企业名称*/
  relateEntName?: string;
  /* 关联企业企业编码*/
  relateEntId?: string;
  /* 关联企业组织编码*/
  relateOrgId?: string;
  /* 商圈关系：1-邀请、2-交易*/
  relationType?: string;
  /* 商圈关系：1-邀请、2-交易*/
  relationTypeName?: string;
  /* 关联等级：默认为-- 第一手开单签收记录为【1级】*/
  relationLevel?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 更新人*/
  modifyBy?: string;
  /* 更新时间*/
  modifyTime?: string;
  /* 创建开始日期*/
  createStartDate?: string;
  /* 创建结束日期*/
  createEndDate?: string;
}
export interface IQueryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 商圈编码
   */
  businessId?: string;
  /**
   * 核心企业企业编码
   */
  coreEntId?: number;
  /**
   * 核心企业名称
   */
  coreEntName?: string;
  /**
   * 核心企业组织编码
   */
  coreOrgId?: number;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建结束日期
   */
  createEndDate?: string;
  /**
   * 创建开始日期
   */
  createStartDate?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 主键
   */
  id?: number;
  /**
   * 更新人
   */
  modifyBy?: string;
  /**
   * 更新时间
   */
  modifyTime?: string;
  /**
   * 集团简称
   */
  orgSimpleName?: string;
  /**
   * 关联企业企业编码
   */
  relateEntId?: number;
  /**
   * 关联企业名称
   */
  relateEntName?: string;
  /**
   * 关联企业组织编码
   */
  relateOrgId?: number;
  /**
   * 关联等级：默认为-- 第一手开单签收记录为【1级】
   */
  relationLevel?: string;
  /**
   * 商圈关系：1-邀请、2-交易
   */
  relationType?: number;
  /**
   * 商圈关系：1-邀请、2-交易
   */
  relationTypeName?: string;
  [property: string]: any;
}

/*
 *@序号:41
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138766)
 *@菜单名称:商圈信息查询(https://apaas-yapi.midea.com/project/7260/interface/api/745098)
 */

export function businessQueryPagination(data?: IQueryPaginationParams) {
  return ajax<IQueryPaginationParams, IQueryPaginationData>({
    url: `/business/query/pagination`,
    method: "post",
    data,
  });
}

export interface IInfoSelectParams {
  /* 主键*/
  id?: string;
  /* 商圈编码*/
  businessId?: string;
  /* 集团简称*/
  orgSimpleName?: string;
  /* 核心企业名称*/
  coreEntName?: string;
  /* 核心企业企业编码*/
  coreEntId?: string;
  /* 核心企业组织编码*/
  coreOrgId?: string;
  /* 关联企业名称*/
  relateEntName?: string;
  /* 关联企业企业编码*/
  relateEntId?: string;
  /* 关联企业组织编码*/
  relateOrgId?: string;
  /* 商圈关系：1-邀请、2-交易*/
  relationType?: string;
  /* 商圈关系：1-邀请、2-交易*/
  relationTypeName?: string;
  /* 关联等级：默认为-- 第一手开单签收记录为【1级】*/
  relationLevel?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 更新人*/
  modifyBy?: string;
  /* 更新时间*/
  modifyTime?: string;
  /* 创建开始日期*/
  createStartDate?: string;
  /* 创建结束日期*/
  createEndDate?: string;
}

/*
 *@序号:42
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138766)
 *@菜单名称:商圈信息导出(https://apaas-yapi.midea.com/project/7260/interface/api/745101)
 */

export function businessExportInfoSelect(data?: IInfoSelectParams) {
  return ajax<IInfoSelectParams, any>({
    url: `/business/export/info/select`,
    method: "post",
    data,
  });
}

/*
 *@序号:43
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138766)
 *@菜单名称:商圈商圈编码初始化方法(https://apaas-yapi.midea.com/project/7260/interface/api/745104)
 */

export function businessBulidBusinessId(params?: any) {
  return ajax<any, any>({
    url: `/business/bulid/businessId`,
    method: "get",
    params,
  });
}

export interface ICardTypeParams {
  cusCode: string;
}

/*
 *@序号:44
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkEntCardType(https://apaas-yapi.midea.com/project/7260/interface/api/745107)
 */

export function edpCheckEntCardType(data?: ICardTypeParams) {
  return ajax<ICardTypeParams, any>({
    url: `/edp/checkEntCardType`,
    method: "post",
    data,
  });
}

export interface IOpenStateParams {
  cusCode: string;
}

/*
 *@序号:45
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkPrdOpenState(https://apaas-yapi.midea.com/project/7260/interface/api/745110)
 */

export function edpCheckPrdOpenState(data?: IOpenStateParams) {
  return ajax<IOpenStateParams, any>({
    url: `/edp/checkPrdOpenState`,
    method: "post",
    data,
  });
}

export interface IUserEntParams {
  cusCode: string;
}
export interface IUserEntData {
  /**
   * 注册地具体地址
   */
  address?: string;
  /**
   * 三证合一证件号码
   */
  certMergCode?: string;
  /**
   * 三证合一证件有效期是否长期有效：0-否（默认）； 1-是
   */
  certMergIsOngEffective?: string;
  /**
   * 三证合一证件有效期结束时间(yyyy-MM-dd)
   */
  certMergValidateEnd?: string;
  /**
   * 三证合一证件有效期开始时间（yyyy-MM-dd）
   */
  certMergValidateStart?: string;
  /**
   * 注册地城市ID
   */
  cityId?: string;
  /**
   * 注册地城市名称
   */
  cityName?: string;
  /**
   * 核心类型：1-美的成员企业; 2-美的供应商核心; 3-外部核心
   */
  coreType?: number;
  /**
   * 注册地区县ID
   */
  countyId?: string;
  /**
   * 注册地区县名称
   */
  countyName?: string;
  /**
   * 客户编码
   */
  cusCode?: string;
  /**
   * 企业名称
   */
  enterpriseName?: string;
  /**
   * 文件列表
   */
  fileList?: FileList[];
  /**
   * 担保机构
   */
  guaranteOrgan?: string;
  /**
   * 引入来源
   */
  importSource?: string;
  /**
   * 是否核心企业：0-否; 1-是
   */
  isCore?: number;
  /**
   * 法人证件有效期是否是长期
   */
  legalIdIsLongEffective?: string;
  /**
   * 法人证件有效期结束时间
   */
  legalIdValidateEnd?: string;
  /**
   * 法人证件有效期开始时间
   */
  legalIdValidateStart?: string;
  /**
   * 法人代表
   */
  legalRepresentative?: string;
  /**
   * 法人代表证件号
   */
  legalRepresentativeIdNo?: string;
  /**
   * 法人代表证件类型:1-居民身份证;2-护照;3-港澳通行证;4-台湾通行证
   */
  legalRepresentativeIdType?: string;
  legalRepresentativeIdTypeCN?: string;
  /**
   * 营业执照有效期是否是长期有效
   */
  licenseIsLongEffective?: string;
  /**
   * 营业执照号码/统一社会信用代码
   */
  licenseNumber?: string;
  /**
   * 营业执照有效期结束时间
   */
  licenseValidateEnd?: string;
  /**
   * 营业执照有效期开始时间
   */
  licenseValidateStart?: string;
  /**
   * 通讯地址
   */
  mesAddress?: string;
  /**
   * 线下兑付，0：否；1：是
   */
  officeCash?: number;
  /**
   * 组织机构代码证件有效期是否是长期
   */
  organCodeIsLongEffective?: string;
  /**
   * 企业证件类型：三证合一-1；非三证合一-0
   */
  organCodeType?: string;
  organCodeTypeCN?: string;
  /**
   * 组织机构代码证件有效期结束时间
   */
  organCodeValidateEnd?: string;
  /**
   * 组织机构代码证件有效期开始时间
   */
  organCodeValidateStart?: string;
  /**
   * 注册地省ID
   */
  provinceId?: string;
  /**
   * 注册地省名称
   */
  provinceName?: string;
  /**
   * 税务登记号
   */
  taxId?: string;
  /**
   * 税务登记证是否长期有效：0-否（默认）； 1-是
   */
  taxIsLongEffective?: string;
  /**
   * 税务登记证有效结束时间（yyyy-MM-dd）
   */
  taxValidateEnd?: string;
  /**
   * 税务登记证有效开始时间（yyyy-MM-dd）
   */
  taxValidateStart?: string;
  /**
   * uk联系地址
   */
  ukAddress?: string;
  /**
   * uk地址所在区ID
   */
  ukAreaId?: string;
  /**
   * uk地址所在区
   */
  ukAreaName?: string;
  /**
   * uk地址所在市ID
   */
  ukCityId?: string;
  /**
   * uk地址所在市
   */
  ukCityName?: string;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * uk地址所在省ID
   */
  ukProvinceId?: string;
  /**
   * uk地址所在省
   */
  ukProvinceName?: string;
  [property: string]: any;
}

export interface FileList {
  /**
   * 文件分类，1：新增，2：变更
   */
  addOrChange?: number;
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，1-运营端，2-企业端
   */
  commitClient?: number;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 雪花ID
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类型:详见PubConstants.FileType
   */
  fileType?: string;
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 归属企业
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 来源:1-主数据；2-ibcp
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/*
 *@序号:46
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745113)
 */

export function edpQueryUserEnt(data?: IUserEntParams) {
  return ajax<IUserEntParams, IUserEntData>({
    url: `/edp/query/user/ent`,
    method: "post",
    data,
  });
}

export interface IBaseInfoParams {
  cardNo: string;

  cardType: string;
}

/*
 *@序号:47
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectUserBaseInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745116)
 */

export function edpGetUserBaseInfo(data?: IBaseInfoParams) {
  return ajax<IBaseInfoParams, any>({
    url: `/edp/get/user/baseInfo`,
    method: "post",
    data,
  });
}

export interface IThereElementsParams {
  /* 主键ID*/
  id?: string;
  /* 雪花ID*/
  userId?: string;
  /* 产品开通申请ID*/
  openApplyId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 客户编码*/
  cusCode?: string;
  /* 个人编码*/
  personalCode?: string;
  /* 个人客户号*/
  personalCusCode?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  systemId?: string;
  /* 用户姓名*/
  realName?: string;
  /* 证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证*/
  idType?: string;
  /* 证件类型*/
  idTypeCN?: string;
  /* 证件号码*/
  idNumber?: string;
  /* 身份证有效起始日期*/
  idValidStartDate?: string;
  /* 身份证有效结束日期*/
  idValidEndDate?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  phoneNumber?: string;
  /* 用户账号唯一编码*/
  loginId?: string;
  /* 登录名（要做唯一性判断）*/
  userName?: string;
  /* 邮箱*/
  email?: string;
  /* 工作岗位*/
  workPost?: string;
  /* 工作岗位*/
  workPostCN?: string;
  /* UK邮寄地址*/
  ukAddress?: string;
  /* 密码盐值*/
  salt?: string;
  /* 登录密码*/
  pwd?: string;
  /* 权限编码: 经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 删除状态：0-未删除 1-已删除*/
  isDelete?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 短信验证码*/
  verifyCode?: string;
  /* 是否邮寄ukey*/
  isSendUkey?: string;
  /* 掩码标记 0 - 否 1-是*/
  maskFlag?: string;
  /* 登录账号唯一编码*/
  loginUserDetail?: string;
  /* 登录用户名*/
  loginUserDetail?: string;
  /* 注册手机号*/
  loginUserDetail?: string;
  /* 邮箱*/
  loginUserDetail?: string;
}

/*
 *@序号:48
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkUserThereElements(https://apaas-yapi.midea.com/project/7260/interface/api/745119)
 */

export function edpCheckUserThereElements(data?: IThereElementsParams) {
  return ajax<IThereElementsParams, any>({
    url: `/edp/check/user/there/elements`,
    method: "post",
    data,
  });
}

type IBankInfoParams = undefined;

/*
 *@序号:49
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAccountBankInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745122)
 */

export function edpGetAccountBankInfo(data?: IBankInfoParams) {
  return ajax<IBankInfoParams, any>({
    url: `/edp/get/account/bankInfo`,
    method: "post",
    data,
  });
}

export interface IAccountInfoParams {
  cusCode: string;

  accountNo: string;

  scene?: string;
}

/*
 *@序号:50
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745125)
 */

export function edpGetAccountAccountInfo(data?: IAccountInfoParams) {
  return ajax<IAccountInfoParams, any>({
    url: `/edp/get/account/accountInfo`,
    method: "post",
    data,
  });
}

export interface IPayApplyParams {
  /* 产品开通申请ID*/
  applyId?: string;
  /* 银行账号*/
  accountNo?: string;
  /* 银行账户名称*/
  accountName?: string;
  /* 开户行名称*/
  bankName?: string;
  /* 联行号*/
  bankCode?: string;
  /* 支行名称*/
  bankBranchName?: string;
  /* 联行号*/
  cnapsCode?: string;
}

/*
 *@序号:51
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:startPayApply(https://apaas-yapi.midea.com/project/7260/interface/api/745128)
 */

export function edpStartPayApply(data?: IPayApplyParams) {
  return ajax<IPayApplyParams, any>({
    url: `/edp/start/pay/apply`,
    method: "post",
    data,
  });
}

export interface IPayAuthParams {
  /* 产品开通申请ID*/
  applyId?: string;
  /* 打款申请流水号*/
  flowNo?: string;
  /* 打款金额*/
  money?: string;
}

/*
 *@序号:52
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAuthByFlowNoAndMoney(https://apaas-yapi.midea.com/project/7260/interface/api/745132)
 */

export function edpGetPayAuth(data?: IPayAuthParams) {
  return ajax<IPayAuthParams, any>({
    url: `/edp/get/pay/auth`,
    method: "post",
    data,
  });
}

type IMgrEntParams = undefined;

export interface IMgrEntData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:53
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryMgrEnt(https://apaas-yapi.midea.com/project/7260/interface/api/745135)
 */

export function edpQueryMgrEnt(data?: IMgrEntParams) {
  return ajax<IMgrEntParams, IMgrEntData>({
    url: `/edp/query/mgr/ent`,
    method: "post",
    data,
  });
}

export interface IUserInfoParams {
  /* 证件号*/
  idNumber: string;
  /* 证件类型*/
  idType: string;
}
export interface IUserInfoData {
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 证件类型
   */
  idType?: string;
  /**
   * 证件类型中文名
   */
  idTypeCN?: string;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 登录账号唯一编码
   */
  loginId?: string;
  /**
   * 登录用户名
   */
  loginName?: string;
  loginUserDetail?: LoginUserDetail[];
  /**
   * 注册手机号
   */
  phone?: string;
  /**
   * 用户名
   */
  realName?: string;
  /**
   * 岗位
   */
  workPost?: string;
  /**
   * 岗位中文名
   */
  workPostCN?: string;
  [property: string]: any;
}

export interface LoginUserDetail {
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 登录账号唯一编码
   */
  loginId?: string;
  /**
   * 登录用户名
   */
  loginName?: string;
  /**
   * 注册手机号
   */
  phone?: string;
  [property: string]: any;
}

/*
 *@序号:54
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745138)
 */

export function edpQueryUserInfo(data?: IUserInfoParams) {
  return ajax<IUserInfoParams, IUserInfoData>({
    url: `/edp/query/userInfo`,
    method: "post",
    data,
  });
}

export interface IUserAccountParams {
  cusCode: string;
}
export interface IUserAccountData {
  accountName?: string;
  /**
   * 默认清分账户
   */
  clear?: Clear;
  /**
   * 默认授信机构银行账户
   */
  credit?: Credit;
  fileList?: FileList[];
  /**
   * 线下兑付，0：否；1：是
   */
  officeCash?: number;
  /**
   * 线下兑付中文名
   */
  officeCashCN?: string;
  /**
   * 默认收款账户
   */
  receive?: Receive;
  [property: string]: any;
}

/**
 * 默认清分账户
 */
export interface Clear {
  acctBizId?: string;
  acctType?: string;
  bankAcctName?: string;
  bankAcctNo?: string;
  bankBranchName?: string;
  bankCode?: string;
  bankName?: string;
  city?: string;
  cnapsCode?: string;
  curType?: string;
  custId?: string;
  province?: string;
  /**
   * 封装使用场景
   */
  useScene?: number;
  useSenceList?: ClearUseSenceList[];
  verifyStatus?: number;
  verifyStatusCN?: string;
  verifyStatusName?: number;
  verifyTime?: string;
  verifyType?: number;
  verifyTypeName?: number;
  [property: string]: any;
}

export interface ClearUseSenceList {
  acctBizId?: string;
  createBy?: string;
  createSys?: string;
  createTime?: string;
  custId?: string;
  defaultFlag?: number;
  updateBy?: string;
  updateSys?: string;
  updateTime?: string;
  useScene?: number;
  [property: string]: any;
}

/**
 * 默认授信机构银行账户
 */
export interface Credit {
  acctBizId?: string;
  acctType?: string;
  bankAcctName?: string;
  bankAcctNo?: string;
  bankBranchName?: string;
  bankCode?: string;
  bankName?: string;
  city?: string;
  cnapsCode?: string;
  curType?: string;
  custId?: string;
  province?: string;
  /**
   * 封装使用场景
   */
  useScene?: number;
  useSenceList?: CreditUseSenceList[];
  verifyStatus?: number;
  verifyStatusCN?: string;
  verifyStatusName?: number;
  verifyTime?: string;
  verifyType?: number;
  verifyTypeName?: number;
  [property: string]: any;
}

export interface CreditUseSenceList {
  acctBizId?: string;
  createBy?: string;
  createSys?: string;
  createTime?: string;
  custId?: string;
  defaultFlag?: number;
  updateBy?: string;
  updateSys?: string;
  updateTime?: string;
  useScene?: number;
  [property: string]: any;
}

export interface FileList {
  /**
   * 文件分类，1：新增，2：变更
   */
  addOrChange?: number;
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，1-运营端，2-企业端
   */
  commitClient?: number;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 雪花ID
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类型:详见PubConstants.FileType
   */
  fileType?: string;
  /**
   * 主键ID
   */
  id?: number;
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 归属企业
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 来源:1-主数据；2-ibcp
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 默认收款账户
 */
export interface Receive {
  acctBizId?: string;
  acctType?: string;
  bankAcctName?: string;
  bankAcctNo?: string;
  bankBranchName?: string;
  bankCode?: string;
  bankName?: string;
  city?: string;
  cnapsCode?: string;
  curType?: string;
  custId?: string;
  province?: string;
  /**
   * 封装使用场景
   */
  useScene?: number;
  useSenceList?: ReceiveUseSenceList[];
  verifyStatus?: number;
  verifyStatusCN?: string;
  verifyStatusName?: number;
  verifyTime?: string;
  verifyType?: number;
  verifyTypeName?: number;
  [property: string]: any;
}

export interface ReceiveUseSenceList {
  acctBizId?: string;
  createBy?: string;
  createSys?: string;
  createTime?: string;
  custId?: string;
  defaultFlag?: number;
  updateBy?: string;
  updateSys?: string;
  updateTime?: string;
  useScene?: number;
  [property: string]: any;
}

/*
 *@序号:55
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745141)
 */

export function edpQueryUserAccount(data?: IUserAccountParams) {
  return ajax<IUserAccountParams, IUserAccountData>({
    url: `/edp/query/user/account`,
    method: "post",
    data,
  });
}

export interface ILoginInfoParams {
  loginId: string;
}
export interface ILoginInfoData {
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 登录账号唯一编码
   */
  loginId?: string;
  /**
   * 登录用户名
   */
  loginName?: string;
  /**
   * 注册手机号
   */
  phone?: string;
  [property: string]: any;
}

/*
 *@序号:56
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryLoginInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745144)
 */

export function edpQueryLoginInfo(data?: ILoginInfoParams) {
  return ajax<ILoginInfoParams, ILoginInfoData>({
    url: `/edp/query/login/info`,
    method: "post",
    data,
  });
}

export interface IUserNameData {
  /**
   * 登录账户
   */
  userName?: string;
  [property: string]: any;
}

/*
 *@序号:57
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:createUserName(https://apaas-yapi.midea.com/project/7260/interface/api/745147)
 */

export function edpCreateUserName(data?: any) {
  return ajax<any, IUserNameData>({
    url: `/edp/create/userName`,
    method: "post",
    data,
  });
}

type IPageListParams = undefined;

/*
 *@序号:58
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getApplyPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745150)
 */

export function prdOpenApplyGetPageList(data?: IPageListParams) {
  return ajax<IPageListParams, any>({
    url: `/prd/open/apply/getPageList`,
    method: "post",
    data,
  });
}

export interface IListExportParams {
  /* 主键ID*/
  id?: string;
  /* 雪花ID*/
  openApplyId?: string;
  /* 企业表id*/
  enterpriseId?: string;
  /* 企业编码*/
  enterpriseCode?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 客户编码*/
  cusCode?: string;
  /* 申请来源，1:企业端 2:运营端*/
  systemId?: string;

  systemIdCN?: string;
  /* 申请状态：1-草稿; 2-待提交; 3-待分配; 4-待审核; 5-审批通过; 6-驳回； 7-作废*/
  applyState?: string;

  applyStateCN?: string;
  /* 申请日期*/
  applyTime?: string;
  /* 申请人*/
  applier?: string;
  /* 复核日期*/
  reviewTime?: string;
  /* 复核人*/
  reviewer?: string;
  /* 跟进人（客户经理）*/
  follower?: string;
  /* 是否是客户组长:0-不是；1-是*/
  isLeader?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 申请开始时间*/
  applyStartTime?: string;
  /* 申请结束时间*/
  applyEndTime?: string;
  /* 更新开始时间*/
  updateStartTime?: string;
  /* 更新结束时间*/
  updateEndTime?: string;
  /* 状态列表*/
  stateList?: string;
  /* 操作类型:1-首次开通；2-变更*/
  cmdType?: string;
  /* 操作类型*/
  cmdTypeCN?: string;

  pageNum?: string;

  pageSize?: string;
  /* 跟进人*/
  followerName?: string;
  /* 主数据客户号集合（非数据库字段）*/
  cusCodeList?: string;
  /* 企业名称（精确查找）*/
  exactEntName?: string;
  /* 复核日期开始时间（非数据库字段）*/
  reviewTimeStart?: string;
  /* 复核日期结束时间（非数据库字段）*/
  reviewTimeEnd?: string;
}

/*
 *@序号:59
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getApplyPageListExport(https://apaas-yapi.midea.com/project/7260/interface/api/745153)
 */

export function prdOpenApplyGetPageListExport(data?: IListExportParams) {
  return ajax<IListExportParams, any>({
    url: `/prd/open/apply/getPageListExport`,
    method: "post",
    data,
  });
}

type IPageListParams = undefined;

/*
 *@序号:60
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getAuditPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745156)
 */

export function prdOpenAuditGetPageList(data?: IPageListParams) {
  return ajax<IPageListParams, any>({
    url: `/prd/open/audit/getPageList`,
    method: "post",
    data,
  });
}

type IPageListParams = undefined;

/*
 *@序号:61
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getOpenedPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745159)
 */

export function prdOpenOpenedGetPageList(data?: IPageListParams) {
  return ajax<IPageListParams, any>({
    url: `/prd/open/opened/getPageList`,
    method: "post",
    data,
  });
}

export interface IListExportParams {
  /* 主键ID*/
  id?: string;
  /* 雪花ID*/
  openApplyId?: string;
  /* 企业表id*/
  enterpriseId?: string;
  /* 企业编码*/
  enterpriseCode?: string;
  /* 客户编码*/
  cusCode?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 申请来源，1:企业端 2:运营端*/
  systemId?: string;

  systemIdCN?: string;
  /* 是否是核心*/
  isCoreCN?: string;
  /* 核心类型*/
  coreTypeCN?: string;
  /* 企业等级*/
  enterpriseGrade?: string;
  /* 申请状态：1-草稿; 2-待提交; 3-待分配; 4-待审核; 5-审批通过; 6-驳回； 7-作废*/
  applyState?: string;
  /* 跟进人*/
  followerName?: string;
  /* 申请日期*/
  applyTime?: string;
  /* 申请人*/
  applier?: string;
  /* 更新日期*/
  reviewTime?: string;

  applyStateCN?: string;
  /* 复核人*/
  reviewer?: string;
  /* 跟进人（客户经理）*/
  follower?: string;
  /* 是否是客户组长:0-不是；1-是*/
  isLeader?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 申请开始时间*/
  applyStartTime?: string;
  /* 申请结束时间*/
  applyEndTime?: string;
  /* 更新开始时间*/
  updateStartTime?: string;
  /* 更新结束时间*/
  updateEndTime?: string;
  /* 状态列表*/
  stateList?: string;
  /* 操作类型:1-首次开通；2-变更*/
  cmdType?: string;
  /* 操作类型*/
  cmdTypeCN?: string;

  pageNum?: string;

  pageSize?: string;
  /* 主数据客户号集合（非数据库字段）*/
  cusCodeList?: string;
  /* 企业名称（精确查找）*/
  exactEntName?: string;
  /* 企业类型 1 成员企业 2 供应链企业 3保理公司 4运营主体*/
  enterpriseType?: string;
  /* 1-美的成员，2-美的供应商核心（原供应商转核心），3-外部核心（由外部机构引荐进入的），4-非核心企业（普通供应商）*/
  coreType?: string;
  /* 是否是核心*/
  isCore?: string;
  /* 客户经理名称*/
  mgrName?: string;
  /* 客户经理mip*/
  mgrMip?: string;
}

/*
 *@序号:62
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getOpenedPageListExport(https://apaas-yapi.midea.com/project/7260/interface/api/745162)
 */

export function prdOpenOpenedGetPageListExport(data?: IListExportParams) {
  return ajax<IListExportParams, any>({
    url: `/prd/open/opened/getPageListExport`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  id: string;
}

/*
 *@序号:63
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745165)
 */

export function prdOpenGetEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/open/get/ent/info`,
    method: "post",
    data,
  });
}

export interface IUserInfoParams {
  id: string;

  optionType?: string;
}

/*
 *@序号:64
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745168)
 */

export function prdOpenGetUserInfo(data?: IUserInfoParams) {
  return ajax<IUserInfoParams, any>({
    url: `/prd/open/get/user/info`,
    method: "post",
    data,
  });
}

export interface IAccountInfoParams {
  id: string;
}

/*
 *@序号:65
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745171)
 */

export function prdOpenGetAccountInfo(data?: IAccountInfoParams) {
  return ajax<IAccountInfoParams, any>({
    url: `/prd/open/get/account/info`,
    method: "post",
    data,
  });
}

export interface IUkeyInfoParams {
  id: string;
}

/*
 *@序号:66
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getUkeyInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745174)
 */

export function prdOpenGetUkeyInfo(data?: IUkeyInfoParams) {
  return ajax<IUkeyInfoParams, any>({
    url: `/prd/open/get/ukey/info`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  /* 申请id*/
  applyId?: string;
  /* 系统id*/
  systemId?: string;
  /* 主键ID*/
  entInfo?: string;
  /* 雪花ID*/
  entInfo?: string;
  /* 产品开通申请ID*/
  entInfo?: string;
  /* 企业名称*/
  entInfo?: string;
  /* 客户编码*/
  entInfo?: string;
  /* 企业证件类型：三证合一-1；非三证合一-0*/
  entInfo?: string;

  entInfo?: string;
  /* 三证合一证件号码*/
  entInfo?: string;
  /* 三证合一证件有效期开始时间（yyyy-MM-dd）*/
  entInfo?: string;
  /* 三证合一证件有效期结束时间(yyyy-MM-dd)*/
  entInfo?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  entInfo?: string;
  /* 注册地省ID*/
  entInfo?: string;
  /* 注册地省名称*/
  entInfo?: string;
  /* 注册地城市ID*/
  entInfo?: string;
  /* 注册地城市名称*/
  entInfo?: string;
  /* 注册地区县ID*/
  entInfo?: string;
  /* 注册地区县名称*/
  entInfo?: string;
  /* 注册地具体地址*/
  entInfo?: string;
  /* 证书类型（1、天威，2、CFCA）*/
  entInfo?: string;
  /* 通讯地址*/
  entInfo?: string;
  /* uk地址所在省ID*/
  entInfo?: string;
  /* uk地址所在省*/
  entInfo?: string;
  /* uk地址所在市ID*/
  entInfo?: string;
  /* uk地址所在市*/
  entInfo?: string;
  /* uk地址所在区ID*/
  entInfo?: string;
  /* uk地址所在区*/
  entInfo?: string;
  /* 是否核心企业：0-否; 1-是*/
  entInfo?: string;

  entInfo?: string;
  /* 核心类型：1-美的成员企业; 2-美的供应商核心; 3-外部核心*/
  entInfo?: string;

  entInfo?: string;
  /* 引入来源*/
  entInfo?: string;
  /* 担保机构*/
  entInfo?: string;
  /* 线下兑付，0：否；1：是*/
  entInfo?: string;
  /* 法人代表*/
  entInfo?: string;
  /* 法人代表证件类型:1-居民身份证;2-护照;3-港澳通行证;4-台湾通行证*/
  entInfo?: string;

  entInfo?: string;
  /* 法人代表证件号*/
  entInfo?: string;
  /* 法人证件有效期开始时间*/
  entInfo?: string;
  /* 法人证件有效期结束时间*/
  entInfo?: string;
  /* 法人证件有效期是否是长期*/
  entInfo?: string;
  /* 企业等级*/
  entInfo?: string;
  /* 创建人*/
  entInfo?: string;
  /* 创建时间*/
  entInfo?: string;
  /* 修改人（每次更新都记录）*/
  entInfo?: string;
  /* 修改时间（每次更新都记录）*/
  entInfo?: string;
  /* 三证合一证件有效期开始时间（yyyy-MM-dd）*/
  entInfo?: string;
  /* 三证合一证件有效期结束时间(yyyy-MM-dd)*/
  entInfo?: string;
  /* 法人证件有效期开始时间*/
  entInfo?: string;
  /* 法人证件有效期结束时间*/
  entInfo?: string;

  entInfo?: string;
  /* 复合操作员*/
  entInfo?: string;
  /* 提交来源*/
  entInfo?: string;
  /* 客户经理mip*/
  entInfo?: string;
  /* 客户经理mip*/
  entInfo?: string;
  /* 企业信息*/
  entInfoStr?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* 文件列表*/
  fileListStr?: string;
  /* 申请人*/
  applier?: string;
  /* 申请日期*/
  applyTime?: string;
  /* 客户经理mip*/
  managerId?: string;
  /* 客户经理姓名*/
  manageName?: string;
  /* 是否领导组长, f, a, l, s, e*/
  isLeader?: string;
}

/*
 *@序号:67
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745177)
 */

export function prdOpenSaveEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/open/save/ent/info`,
    method: "post",
    data,
  });
}

export interface IUserInfoParams {
  applyId?: string;

  systemId?: string;
  /* 主键ID*/
  clerkInfo?: string;
  /* 雪花ID*/
  clerkInfo?: string;
  /* 产品开通申请ID*/
  clerkInfo?: string;
  /* 企业ID*/
  clerkInfo?: string;
  /* 客户编码*/
  clerkInfo?: string;
  /* 个人编码*/
  clerkInfo?: string;
  /* 个人客户号*/
  clerkInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  clerkInfo?: string;
  /* 用户姓名*/
  clerkInfo?: string;
  /* 证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证*/
  clerkInfo?: string;
  /* 证件类型*/
  clerkInfo?: string;
  /* 证件号码*/
  clerkInfo?: string;
  /* 身份证有效起始日期*/
  clerkInfo?: string;
  /* 身份证有效结束日期*/
  clerkInfo?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  clerkInfo?: string;
  /* 用户账号唯一编码*/
  clerkInfo?: string;
  /* 登录名（要做唯一性判断）*/
  clerkInfo?: string;
  /* 邮箱*/
  clerkInfo?: string;
  /* 工作岗位*/
  clerkInfo?: string;
  /* 工作岗位*/
  clerkInfo?: string;
  /* UK邮寄地址*/
  clerkInfo?: string;
  /* 密码盐值*/
  clerkInfo?: string;
  /* 登录密码*/
  clerkInfo?: string;
  /* 权限编码: 经办员: CLERK,审核员：AUDITOR*/
  clerkInfo?: string;
  /* 删除状态：0-未删除 1-已删除*/
  clerkInfo?: string;
  /* 创建人*/
  clerkInfo?: string;
  /* 创建时间*/
  clerkInfo?: string;
  /* 修改人（每次更新都记录）*/
  clerkInfo?: string;
  /* 修改时间（每次更新都记录）*/
  clerkInfo?: string;
  /* 短信验证码*/
  clerkInfo?: string;
  /* 是否邮寄ukey*/
  clerkInfo?: string;
  /* 掩码标记 0 - 否 1-是*/
  clerkInfo?: string;
  /* 登录账号唯一编码*/
  clerkInfo?: string;
  /* 登录用户名*/
  clerkInfo?: string;
  /* 注册手机号*/
  clerkInfo?: string;
  /* 邮箱*/
  clerkInfo?: string;

  clerkInfoStr?: string;
  /* 主键ID*/
  auditorInfo?: string;
  /* 雪花ID*/
  auditorInfo?: string;
  /* 产品开通申请ID*/
  auditorInfo?: string;
  /* 企业ID*/
  auditorInfo?: string;
  /* 客户编码*/
  auditorInfo?: string;
  /* 个人编码*/
  auditorInfo?: string;
  /* 个人客户号*/
  auditorInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  auditorInfo?: string;
  /* 用户姓名*/
  auditorInfo?: string;
  /* 证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证*/
  auditorInfo?: string;
  /* 证件类型*/
  auditorInfo?: string;
  /* 证件号码*/
  auditorInfo?: string;
  /* 身份证有效起始日期*/
  auditorInfo?: string;
  /* 身份证有效结束日期*/
  auditorInfo?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  auditorInfo?: string;
  /* 用户账号唯一编码*/
  auditorInfo?: string;
  /* 登录名（要做唯一性判断）*/
  auditorInfo?: string;
  /* 邮箱*/
  auditorInfo?: string;
  /* 工作岗位*/
  auditorInfo?: string;
  /* 工作岗位*/
  auditorInfo?: string;
  /* UK邮寄地址*/
  auditorInfo?: string;
  /* 密码盐值*/
  auditorInfo?: string;
  /* 登录密码*/
  auditorInfo?: string;
  /* 权限编码: 经办员: CLERK,审核员：AUDITOR*/
  auditorInfo?: string;
  /* 删除状态：0-未删除 1-已删除*/
  auditorInfo?: string;
  /* 创建人*/
  auditorInfo?: string;
  /* 创建时间*/
  auditorInfo?: string;
  /* 修改人（每次更新都记录）*/
  auditorInfo?: string;
  /* 修改时间（每次更新都记录）*/
  auditorInfo?: string;
  /* 短信验证码*/
  auditorInfo?: string;
  /* 是否邮寄ukey*/
  auditorInfo?: string;
  /* 掩码标记 0 - 否 1-是*/
  auditorInfo?: string;
  /* 登录账号唯一编码*/
  auditorInfo?: string;
  /* 登录用户名*/
  auditorInfo?: string;
  /* 注册手机号*/
  auditorInfo?: string;
  /* 邮箱*/
  auditorInfo?: string;

  auditorInfoStr?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* 用户影像资料*/
  fileListStr?: string;
  /* 企业客户号*/
  cusCode?: string;
  /* UK邮寄地址*/
  ukAddress?: string;
  /* 用户名*/
  clerkVO?: string;
  /* 证件类型*/
  clerkVO?: string;
  /* 证件类型中文名*/
  clerkVO?: string;
  /* 证件号*/
  clerkVO?: string;
  /* 身份证有效起始日期*/
  clerkVO?: string;
  /* 身份证有效结束日期*/
  clerkVO?: string;
  /* 登录账号唯一编码*/
  clerkVO?: string;
  /* 登录用户名*/
  clerkVO?: string;
  /* 注册手机号*/
  clerkVO?: string;
  /* 邮箱*/
  clerkVO?: string;
  /* 登录账号唯一编码*/
  clerkVO?: string;
  /* 登录用户名*/
  clerkVO?: string;
  /* 注册手机号*/
  clerkVO?: string;
  /* 邮箱*/
  clerkVO?: string;
  /* 岗位*/
  clerkVO?: string;
  /* 岗位中文名*/
  clerkVO?: string;
  /* 用户名*/
  auditorVO?: string;
  /* 证件类型*/
  auditorVO?: string;
  /* 证件类型中文名*/
  auditorVO?: string;
  /* 证件号*/
  auditorVO?: string;
  /* 身份证有效起始日期*/
  auditorVO?: string;
  /* 身份证有效结束日期*/
  auditorVO?: string;
  /* 登录账号唯一编码*/
  auditorVO?: string;
  /* 登录用户名*/
  auditorVO?: string;
  /* 注册手机号*/
  auditorVO?: string;
  /* 邮箱*/
  auditorVO?: string;
  /* 登录账号唯一编码*/
  auditorVO?: string;
  /* 登录用户名*/
  auditorVO?: string;
  /* 注册手机号*/
  auditorVO?: string;
  /* 邮箱*/
  auditorVO?: string;
  /* 岗位*/
  auditorVO?: string;
  /* 岗位中文名*/
  auditorVO?: string;
}

/*
 *@序号:68
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745180)
 */

export function prdOpenSaveUserInfo(data?: IUserInfoParams) {
  return ajax<IUserInfoParams, any>({
    url: `/prd/open/save/user/info`,
    method: "post",
    data,
  });
}

export interface IAccountInfoParams {
  applyId?: string;

  systemId?: string;
  /* 主键ID*/
  receiveInfo?: string;
  /* 雪花ID*/
  receiveInfo?: string;
  /* 产品开通申请ID*/
  receiveInfo?: string;
  /* 企业ID*/
  receiveInfo?: string;
  /* 客户编码*/
  receiveInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  receiveInfo?: string;
  /* 账户类型：1-收款账户 2-清分账户 3-授信机构账户*/
  receiveInfo?: string;
  /* 银行账号*/
  receiveInfo?: string;
  /* 银行账户名称*/
  receiveInfo?: string;
  /* 开户行所在省ID*/
  receiveInfo?: string;
  /* 开户行所在省*/
  receiveInfo?: string;
  /* 开户行所在市ID*/
  receiveInfo?: string;
  /* 开户行所在市*/
  receiveInfo?: string;
  /* 开户行详细地址*/
  receiveInfo?: string;
  /* 总行名称*/
  receiveInfo?: string;
  /* 总行编码*/
  receiveInfo?: string;
  /* 支行名称*/
  receiveInfo?: string;
  /* 打款验证状态，0：未验证；1：已验证*/
  receiveInfo?: string;

  receiveInfo?: string;
  /* 是否是默认账户，0：非默认；1：默认*/
  receiveInfo?: string;
  /* 账户业务id*/
  receiveInfo?: string;
  /* 联行号*/
  receiveInfo?: string;
  /* 创建人*/
  receiveInfo?: string;
  /* 创建时间*/
  receiveInfo?: string;
  /* 修改人*/
  receiveInfo?: string;
  /* 修改时间*/
  receiveInfo?: string;

  receiveInfoStr?: string;
  /* 主键ID*/
  clearInfo?: string;
  /* 雪花ID*/
  clearInfo?: string;
  /* 产品开通申请ID*/
  clearInfo?: string;
  /* 企业ID*/
  clearInfo?: string;
  /* 客户编码*/
  clearInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  clearInfo?: string;
  /* 账户类型：1-收款账户 2-清分账户 3-授信机构账户*/
  clearInfo?: string;
  /* 银行账号*/
  clearInfo?: string;
  /* 银行账户名称*/
  clearInfo?: string;
  /* 开户行所在省ID*/
  clearInfo?: string;
  /* 开户行所在省*/
  clearInfo?: string;
  /* 开户行所在市ID*/
  clearInfo?: string;
  /* 开户行所在市*/
  clearInfo?: string;
  /* 开户行详细地址*/
  clearInfo?: string;
  /* 总行名称*/
  clearInfo?: string;
  /* 总行编码*/
  clearInfo?: string;
  /* 支行名称*/
  clearInfo?: string;
  /* 打款验证状态，0：未验证；1：已验证*/
  clearInfo?: string;

  clearInfo?: string;
  /* 是否是默认账户，0：非默认；1：默认*/
  clearInfo?: string;
  /* 账户业务id*/
  clearInfo?: string;
  /* 联行号*/
  clearInfo?: string;
  /* 创建人*/
  clearInfo?: string;
  /* 创建时间*/
  clearInfo?: string;
  /* 修改人*/
  clearInfo?: string;
  /* 修改时间*/
  clearInfo?: string;

  clearInfoStr?: string;
  /* 主键ID*/
  creditInfo?: string;
  /* 雪花ID*/
  creditInfo?: string;
  /* 产品开通申请ID*/
  creditInfo?: string;
  /* 企业ID*/
  creditInfo?: string;
  /* 客户编码*/
  creditInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  creditInfo?: string;
  /* 账户类型：1-收款账户 2-清分账户 3-授信机构账户*/
  creditInfo?: string;
  /* 银行账号*/
  creditInfo?: string;
  /* 银行账户名称*/
  creditInfo?: string;
  /* 开户行所在省ID*/
  creditInfo?: string;
  /* 开户行所在省*/
  creditInfo?: string;
  /* 开户行所在市ID*/
  creditInfo?: string;
  /* 开户行所在市*/
  creditInfo?: string;
  /* 开户行详细地址*/
  creditInfo?: string;
  /* 总行名称*/
  creditInfo?: string;
  /* 总行编码*/
  creditInfo?: string;
  /* 支行名称*/
  creditInfo?: string;
  /* 打款验证状态，0：未验证；1：已验证*/
  creditInfo?: string;

  creditInfo?: string;
  /* 是否是默认账户，0：非默认；1：默认*/
  creditInfo?: string;
  /* 账户业务id*/
  creditInfo?: string;
  /* 联行号*/
  creditInfo?: string;
  /* 创建人*/
  creditInfo?: string;
  /* 创建时间*/
  creditInfo?: string;
  /* 修改人*/
  creditInfo?: string;
  /* 修改时间*/
  creditInfo?: string;

  creditInfoStr?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;

  fileListStr?: string;
  /* 主键ID*/
  receiveChgInfo?: string;
  /* 雪花ID*/
  receiveChgInfo?: string;
  /* 产品变更申请表id*/
  receiveChgInfo?: string;

  receiveChgInfo?: string;
  /* 账户类型:1-收款账户 2-清分账户 3-授信机构账户*/
  receiveChgInfo?: string;
  /* 是否默认账户：0-否；1-是*/
  receiveChgInfo?: string;
  /* 银行账号*/
  receiveChgInfo?: string;
  /* 银行账户名称*/
  receiveChgInfo?: string;
  /* 开户行所在省ID*/
  receiveChgInfo?: string;
  /* 开户行所在省*/
  receiveChgInfo?: string;
  /* 开户行所在市ID*/
  receiveChgInfo?: string;
  /* 开户行所在市*/
  receiveChgInfo?: string;
  /* 开户行详细地址*/
  receiveChgInfo?: string;
  /* 总行名称*/
  receiveChgInfo?: string;
  /* 总行编码*/
  receiveChgInfo?: string;
  /* 支行名称*/
  receiveChgInfo?: string;
  /* 打款验证状态*/
  receiveChgInfo?: string;
  /* 账户业务id*/
  receiveChgInfo?: string;
  /* 联行号*/
  receiveChgInfo?: string;
  /* 创建人*/
  receiveChgInfo?: string;
  /* 创建时间*/
  receiveChgInfo?: string;
  /* 修改人（每次更新都记录）*/
  receiveChgInfo?: string;
  /* 修改时间（每次更新都记录）*/
  receiveChgInfo?: string;
  /* 是否线下兑付*/
  receiveChgInfo?: string;

  receiveChgInfoStr?: string;
  /* 主键ID*/
  clearChgInfo?: string;
  /* 雪花ID*/
  clearChgInfo?: string;
  /* 产品变更申请表id*/
  clearChgInfo?: string;

  clearChgInfo?: string;
  /* 账户类型:1-收款账户 2-清分账户 3-授信机构账户*/
  clearChgInfo?: string;
  /* 是否默认账户：0-否；1-是*/
  clearChgInfo?: string;
  /* 银行账号*/
  clearChgInfo?: string;
  /* 银行账户名称*/
  clearChgInfo?: string;
  /* 开户行所在省ID*/
  clearChgInfo?: string;
  /* 开户行所在省*/
  clearChgInfo?: string;
  /* 开户行所在市ID*/
  clearChgInfo?: string;
  /* 开户行所在市*/
  clearChgInfo?: string;
  /* 开户行详细地址*/
  clearChgInfo?: string;
  /* 总行名称*/
  clearChgInfo?: string;
  /* 总行编码*/
  clearChgInfo?: string;
  /* 支行名称*/
  clearChgInfo?: string;
  /* 打款验证状态*/
  clearChgInfo?: string;
  /* 账户业务id*/
  clearChgInfo?: string;
  /* 联行号*/
  clearChgInfo?: string;
  /* 创建人*/
  clearChgInfo?: string;
  /* 创建时间*/
  clearChgInfo?: string;
  /* 修改人（每次更新都记录）*/
  clearChgInfo?: string;
  /* 修改时间（每次更新都记录）*/
  clearChgInfo?: string;
  /* 是否线下兑付*/
  clearChgInfo?: string;

  clearChgInfoStr?: string;
  /* 主键ID*/
  creditChgInfo?: string;
  /* 雪花ID*/
  creditChgInfo?: string;
  /* 产品变更申请表id*/
  creditChgInfo?: string;

  creditChgInfo?: string;
  /* 账户类型:1-收款账户 2-清分账户 3-授信机构账户*/
  creditChgInfo?: string;
  /* 是否默认账户：0-否；1-是*/
  creditChgInfo?: string;
  /* 银行账号*/
  creditChgInfo?: string;
  /* 银行账户名称*/
  creditChgInfo?: string;
  /* 开户行所在省ID*/
  creditChgInfo?: string;
  /* 开户行所在省*/
  creditChgInfo?: string;
  /* 开户行所在市ID*/
  creditChgInfo?: string;
  /* 开户行所在市*/
  creditChgInfo?: string;
  /* 开户行详细地址*/
  creditChgInfo?: string;
  /* 总行名称*/
  creditChgInfo?: string;
  /* 总行编码*/
  creditChgInfo?: string;
  /* 支行名称*/
  creditChgInfo?: string;
  /* 打款验证状态*/
  creditChgInfo?: string;
  /* 账户业务id*/
  creditChgInfo?: string;
  /* 联行号*/
  creditChgInfo?: string;
  /* 创建人*/
  creditChgInfo?: string;
  /* 创建时间*/
  creditChgInfo?: string;
  /* 修改人（每次更新都记录）*/
  creditChgInfo?: string;
  /* 修改时间（每次更新都记录）*/
  creditChgInfo?: string;
  /* 是否线下兑付*/
  creditChgInfo?: string;

  creditChgInfoStr?: string;

  accountName?: string;
  /* 线下兑付，0：否；1：是*/
  officeCash?: string;

  officeCashCN?: string;

  remark?: string;
}

/*
 *@序号:69
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745183)
 */

export function prdOpenSaveAccountInfo(data?: IAccountInfoParams) {
  return ajax<IAccountInfoParams, any>({
    url: `/prd/open/save/account/info`,
    method: "post",
    data,
  });
}

export interface ICertInfoParams {
  applyId?: string;

  systemId?: string;

  verifyCode?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;

  fileListStr?: string;
}

/*
 *@序号:70
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveCertInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745186)
 */

export function prdOpenSaveCertInfo(data?: ICertInfoParams) {
  return ajax<ICertInfoParams, any>({
    url: `/prd/open/save/cert/info`,
    method: "post",
    data,
  });
}

export interface IMgrAcceptParams {
  applyId?: string;

  systemId?: string;

  isPass?: string;

  remark?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* UKEY申请书*/
  fileListStr?: string;
}

/*
 *@序号:71
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:mgrAccept(https://apaas-yapi.midea.com/project/7260/interface/api/745189)
 */

export function prdOpenMgrAccept(data?: IMgrAcceptParams) {
  return ajax<IMgrAcceptParams, any>({
    url: `/prd/open/mgr/accept`,
    method: "post",
    data,
  });
}

export interface IToAuditParams {
  applyId?: string;

  systemId?: string;

  isPass?: string;

  remark?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* UKEY申请书*/
  fileListStr?: string;
}

/*
 *@序号:72
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:omcCommitToAudit(https://apaas-yapi.midea.com/project/7260/interface/api/745192)
 */

export function prdOpenOmcCommitToAudit(data?: IToAuditParams) {
  return ajax<IToAuditParams, any>({
    url: `/prd/open/omc/commitToAudit`,
    method: "post",
    data,
  });
}

export interface IOmcReviewParams {
  applyId?: string;

  systemId?: string;

  isPass?: string;

  remark?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* UKEY申请书*/
  fileListStr?: string;
}

/*
 *@序号:73
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:omcReview(https://apaas-yapi.midea.com/project/7260/interface/api/745195)
 */

export function prdOpenOmcReview(data?: IOmcReviewParams) {
  return ajax<IOmcReviewParams, any>({
    url: `/prd/open/omc/review`,
    method: "post",
    data,
  });
}

export interface IApplyDownloadParams {
  id: string;
}

/*
 *@序号:74
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downloadUkeyApply(https://apaas-yapi.midea.com/project/7260/interface/api/745198)
 */

export function prdUsbKeyApplyDownload(params?: IApplyDownloadParams) {
  return ajax<IApplyDownloadParams, any>({
    url: `/prd/usbKeyApply/download`,
    method: "get",
    params,
  });
}

export interface IAuditRecordsParams {
  id: string;

  cmdType: string;
}

/*
 *@序号:75
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAuditRecords(https://apaas-yapi.midea.com/project/7260/interface/api/745201)
 */

export function prdSelectAuditRecords(data?: IAuditRecordsParams) {
  return ajax<IAuditRecordsParams, any>({
    url: `/prd/select/audit/records`,
    method: "post",
    data,
  });
}

export interface IPrdResendParams {
  applyId: string;
}

/*
 *@序号:76
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:resendPrdInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745204)
 */

export function prdResend(data?: IPrdResendParams) {
  return ajax<IPrdResendParams, any>({
    url: `/prd/resend`,
    method: "post",
    data,
  });
}

export interface IWriteDataParams {
  applyId: string;
}

/*
 *@序号:77
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:asyncDoubleWriteData(https://apaas-yapi.midea.com/project/7260/interface/api/745207)
 */

export function prdAsyncDoubleWriteData(data?: IWriteDataParams) {
  return ajax<IWriteDataParams, any>({
    url: `/prd/asyncDoubleWriteData`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  id: string;
}

/*
 *@序号:78
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745210)
 */

export function prdOpenGetNewestEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/open/get/newest/ent/info`,
    method: "post",
    data,
  });
}

export interface IUserInfoParams {
  id: string;
}

/*
 *@序号:79
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745213)
 */

export function prdOpenGetNewestUserInfo(data?: IUserInfoParams) {
  return ajax<IUserInfoParams, any>({
    url: `/prd/open/get/newest/user/info`,
    method: "post",
    data,
  });
}

export interface IAccountInfoParams {
  id: string;
}

/*
 *@序号:80
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745216)
 */

export function prdOpenGetNewestAccountInfo(data?: IAccountInfoParams) {
  return ajax<IAccountInfoParams, any>({
    url: `/prd/open/get/newest/account/info`,
    method: "post",
    data,
  });
}

export interface IUkeyInfoParams {
  id: string;
}

/*
 *@序号:81
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestUkeyInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745219)
 */

export function prdOpenGetNewestUkeyInfo(data?: IUkeyInfoParams) {
  return ajax<IUkeyInfoParams, any>({
    url: `/prd/open/get/newest/ukey/info`,
    method: "post",
    data,
  });
}

export interface IAuthorizeDownloadParams {
  applyId: string;
}

/*
 *@序号:82
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downloadAuthorize(https://apaas-yapi.midea.com/project/7260/interface/api/745222)
 */

export function prdAuthorizeDownload(data?: IAuthorizeDownloadParams) {
  return ajax<IAuthorizeDownloadParams, any>({
    url: `/prd/authorize/download`,
    method: "post",
    data,
  });
}

export interface IStaffauthDetailParams {
  applyId: string;
}

/*
 *@序号:83
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:staffauthDetail(https://apaas-yapi.midea.com/project/7260/interface/api/745225)
 */

export function prdStaffauthDetail(data?: IStaffauthDetailParams) {
  return ajax<IStaffauthDetailParams, any>({
    url: `/prd/staffauth/detail`,
    method: "post",
    data,
  });
}

export interface IApplyValidateParams {
  applyId: string;
}

/*
 *@序号:84
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:validateEntInfoChange(https://apaas-yapi.midea.com/project/7260/interface/api/745228)
 */

export function prdOpenApplyValidate(data?: IApplyValidateParams) {
  return ajax<IApplyValidateParams, any>({
    url: `/prd/open/apply/validate`,
    method: "post",
    data,
  });
}

export interface IEntSyncParams {
  applyNo?: string;

  cusCode?: string;

  applySys?: string;
}

/*
 *@序号:85
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:MQ消息如果堵塞，用这个接口临时同步一下（前端暂时没有调用）(https://apaas-yapi.midea.com/project/7260/interface/api/745231)
 */

export function prdOpenEntSync(data?: IEntSyncParams) {
  return ajax<IEntSyncParams, any>({
    url: `/prd/open/ent/sync`,
    method: "post",
    data,
  });
}

export interface IIsFilialeParams {
  id: string;
}

/*
 *@序号:86
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkIsFiliale(https://apaas-yapi.midea.com/project/7260/interface/api/745234)
 */

export function prdOpenCheckIsFiliale(data?: IIsFilialeParams) {
  return ajax<IIsFilialeParams, any>({
    url: `/prd/open/checkIsFiliale`,
    method: "post",
    data,
  });
}

export interface ICompanyDownloadParams {
  id: string;
}

/*
 *@序号:87
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downLoadAuthorizationFromParentCompany(https://apaas-yapi.midea.com/project/7260/interface/api/745237)
 */

export function prdAuthorizationFromParentCompanyDownload(
  data?: ICompanyDownloadParams,
) {
  return ajax<ICompanyDownloadParams, any>({
    url: `/prd/authorizationFromParentCompany/download`,
    method: "post",
    data,
  });
}

export interface IAccountDownloadParams {
  applyId: string;
}

/*
 *@序号:88
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downLoadAccountOpeningAgreement(https://apaas-yapi.midea.com/project/7260/interface/api/745240)
 */

export function prdOpenAccountDownload(data?: IAccountDownloadParams) {
  return ajax<IAccountDownloadParams, any>({
    url: `/prd/open/account/download`,
    method: "post",
    data,
  });
}

type IPageListParams = undefined;

/*
 *@序号:89
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getApplyPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745243)
 */

export function prdChangeApplyGetPageList(data?: IPageListParams) {
  return ajax<IPageListParams, any>({
    url: `/prd/change/apply/getPageList`,
    method: "post",
    data,
  });
}

export interface IIsChangingParams {
  cusCode: string;
}

/*
 *@序号:90
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:isExistChanging(https://apaas-yapi.midea.com/project/7260/interface/api/745246)
 */

export function prdChangeCheckIsChanging(data?: IIsChangingParams) {
  return ajax<IIsChangingParams, any>({
    url: `/prd/change/check/is/changing`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  cusCode: string;
}

/*
 *@序号:91
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectViewEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745249)
 */

export function prdChangeViewEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/change/view/ent/info`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  changeApplyId: string;
}

/*
 *@序号:92
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectDraftEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745252)
 */

export function prdChangeDraftEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/change/draft/ent/info`,
    method: "post",
    data,
  });
}

export interface IAccountInfoParams {
  changeApplyId: string;
}

/*
 *@序号:93
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectDraftAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745255)
 */

export function prdChangeDraftAccountInfo(data?: IAccountInfoParams) {
  return ajax<IAccountInfoParams, any>({
    url: `/prd/change/draft/account/info`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  changeApplyId: string;
}

/*
 *@序号:94
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectCompareEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745258)
 */

export function prdChangeCompareGetEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/change/compare/get/ent/info`,
    method: "post",
    data,
  });
}

export interface IAccountInfoParams {
  changeApplyId: string;
}

/*
 *@序号:95
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectCompareAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745261)
 */

export function prdChangeCompareGetAccountInfo(data?: IAccountInfoParams) {
  return ajax<IAccountInfoParams, any>({
    url: `/prd/change/compare/get/account/info`,
    method: "post",
    data,
  });
}

export interface IEntInfoParams {
  /* 产品开通申请id*/
  applyId?: string;
  /* 系统id*/
  systemId?: string;
  /* 主键ID*/
  entInfo?: string;
  /* 雪花ID*/
  entInfo?: string;
  /* 产品变更申请表id*/
  entInfo?: string;

  entInfo?: string;
  /* 旧的是否核心企业*/
  entInfo?: string;

  entInfo?: string;
  /* 旧的核心类型*/
  entInfo?: string;

  entInfo?: string;
  /* 旧的引入来源*/
  entInfo?: string;
  /* 旧的担保机构*/
  entInfo?: string;
  /* 旧的线下兑付，0：否；1：是*/
  entInfo?: string;

  entInfo?: string;
  /* 新的是否核心企业*/
  entInfo?: string;
  /* 新的是否核心企业*/
  entInfo?: string;
  /* 新的核心类型*/
  entInfo?: string;

  entInfo?: string;
  /* 新的引入来源*/
  entInfo?: string;
  /* 新的担保机构*/
  entInfo?: string;
  /* 新的线下兑付，0：否；1：是*/
  entInfo?: string;

  entInfo?: string;
  /* 创建人*/
  entInfo?: string;
  /* 创建时间*/
  entInfo?: string;
  /* 修改人（每次更新都记录）*/
  entInfo?: string;
  /* 修改时间（每次更新都记录）*/
  entInfo?: string;
  /* 企业名称*/
  entInfo?: string;
  /* 变更日期*/
  entInfo?: string;
  /* 主键ID*/
  entInfo?: string;
  /* 雪花ID*/
  entInfo?: string;

  entInfo?: string;
  /* 文件路径*/
  entInfo?: string;
  /* 文件类型:详见PubConstants.FileType*/
  entInfo?: string;
  /* 备注信息*/
  entInfo?: string;
  /* 业务数据ID*/
  entInfo?: string;
  /* 文件状态：1，正常 2，删除*/
  entInfo?: string;
  /* 文档id*/
  entInfo?: string;
  /* 经办员*/
  entInfo?: string;
  /* 审核员*/
  entInfo?: string;
  /* 来源:1-主数据；2-ibcp*/
  entInfo?: string;
  /* 文件分类，1：新增，2：变更*/
  entInfo?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  entInfo?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  entInfo?: string;
  /* 归属企业*/
  entInfo?: string;
  /* 创建人*/
  entInfo?: string;
  /* 创建时间*/
  entInfo?: string;
  /* 修改人（每次更新都记录）*/
  entInfo?: string;
  /* 修改时间（每次更新都记录）*/
  entInfo?: string;

  entInfoStr?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;

  fileListStr?: string;
  /* 产品变更申请id*/
  changeApplyId?: string;
  /* 企业客户编码*/
  cusCode?: string;
}

/*
 *@序号:96
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveChangeEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745264)
 */

export function prdChangeSaveEntInfo(data?: IEntInfoParams) {
  return ajax<IEntInfoParams, any>({
    url: `/prd/change/save/ent/info`,
    method: "post",
    data,
  });
}

export interface IChangeCancelParams {
  applyId?: string;

  systemId?: string;

  isPass?: string;

  remark?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* UKEY申请书*/
  fileListStr?: string;
}

/*
 *@序号:97
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:cancel(https://apaas-yapi.midea.com/project/7260/interface/api/745267)
 */

export function prdChangeCancel(data?: IChangeCancelParams) {
  return ajax<IChangeCancelParams, any>({
    url: `/prd/change/cancel`,
    method: "post",
    data,
  });
}

export interface IToAuditParams {
  applyId?: string;

  systemId?: string;
  /* 主键ID*/
  receiveInfo?: string;
  /* 雪花ID*/
  receiveInfo?: string;
  /* 产品开通申请ID*/
  receiveInfo?: string;
  /* 企业ID*/
  receiveInfo?: string;
  /* 客户编码*/
  receiveInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  receiveInfo?: string;
  /* 账户类型：1-收款账户 2-清分账户 3-授信机构账户*/
  receiveInfo?: string;
  /* 银行账号*/
  receiveInfo?: string;
  /* 银行账户名称*/
  receiveInfo?: string;
  /* 开户行所在省ID*/
  receiveInfo?: string;
  /* 开户行所在省*/
  receiveInfo?: string;
  /* 开户行所在市ID*/
  receiveInfo?: string;
  /* 开户行所在市*/
  receiveInfo?: string;
  /* 开户行详细地址*/
  receiveInfo?: string;
  /* 总行名称*/
  receiveInfo?: string;
  /* 总行编码*/
  receiveInfo?: string;
  /* 支行名称*/
  receiveInfo?: string;
  /* 打款验证状态，0：未验证；1：已验证*/
  receiveInfo?: string;

  receiveInfo?: string;
  /* 是否是默认账户，0：非默认；1：默认*/
  receiveInfo?: string;
  /* 账户业务id*/
  receiveInfo?: string;
  /* 联行号*/
  receiveInfo?: string;
  /* 创建人*/
  receiveInfo?: string;
  /* 创建时间*/
  receiveInfo?: string;
  /* 修改人*/
  receiveInfo?: string;
  /* 修改时间*/
  receiveInfo?: string;

  receiveInfoStr?: string;
  /* 主键ID*/
  clearInfo?: string;
  /* 雪花ID*/
  clearInfo?: string;
  /* 产品开通申请ID*/
  clearInfo?: string;
  /* 企业ID*/
  clearInfo?: string;
  /* 客户编码*/
  clearInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  clearInfo?: string;
  /* 账户类型：1-收款账户 2-清分账户 3-授信机构账户*/
  clearInfo?: string;
  /* 银行账号*/
  clearInfo?: string;
  /* 银行账户名称*/
  clearInfo?: string;
  /* 开户行所在省ID*/
  clearInfo?: string;
  /* 开户行所在省*/
  clearInfo?: string;
  /* 开户行所在市ID*/
  clearInfo?: string;
  /* 开户行所在市*/
  clearInfo?: string;
  /* 开户行详细地址*/
  clearInfo?: string;
  /* 总行名称*/
  clearInfo?: string;
  /* 总行编码*/
  clearInfo?: string;
  /* 支行名称*/
  clearInfo?: string;
  /* 打款验证状态，0：未验证；1：已验证*/
  clearInfo?: string;

  clearInfo?: string;
  /* 是否是默认账户，0：非默认；1：默认*/
  clearInfo?: string;
  /* 账户业务id*/
  clearInfo?: string;
  /* 联行号*/
  clearInfo?: string;
  /* 创建人*/
  clearInfo?: string;
  /* 创建时间*/
  clearInfo?: string;
  /* 修改人*/
  clearInfo?: string;
  /* 修改时间*/
  clearInfo?: string;

  clearInfoStr?: string;
  /* 主键ID*/
  creditInfo?: string;
  /* 雪花ID*/
  creditInfo?: string;
  /* 产品开通申请ID*/
  creditInfo?: string;
  /* 企业ID*/
  creditInfo?: string;
  /* 客户编码*/
  creditInfo?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  creditInfo?: string;
  /* 账户类型：1-收款账户 2-清分账户 3-授信机构账户*/
  creditInfo?: string;
  /* 银行账号*/
  creditInfo?: string;
  /* 银行账户名称*/
  creditInfo?: string;
  /* 开户行所在省ID*/
  creditInfo?: string;
  /* 开户行所在省*/
  creditInfo?: string;
  /* 开户行所在市ID*/
  creditInfo?: string;
  /* 开户行所在市*/
  creditInfo?: string;
  /* 开户行详细地址*/
  creditInfo?: string;
  /* 总行名称*/
  creditInfo?: string;
  /* 总行编码*/
  creditInfo?: string;
  /* 支行名称*/
  creditInfo?: string;
  /* 打款验证状态，0：未验证；1：已验证*/
  creditInfo?: string;

  creditInfo?: string;
  /* 是否是默认账户，0：非默认；1：默认*/
  creditInfo?: string;
  /* 账户业务id*/
  creditInfo?: string;
  /* 联行号*/
  creditInfo?: string;
  /* 创建人*/
  creditInfo?: string;
  /* 创建时间*/
  creditInfo?: string;
  /* 修改人*/
  creditInfo?: string;
  /* 修改时间*/
  creditInfo?: string;

  creditInfoStr?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;

  fileListStr?: string;
  /* 主键ID*/
  receiveChgInfo?: string;
  /* 雪花ID*/
  receiveChgInfo?: string;
  /* 产品变更申请表id*/
  receiveChgInfo?: string;

  receiveChgInfo?: string;
  /* 账户类型:1-收款账户 2-清分账户 3-授信机构账户*/
  receiveChgInfo?: string;
  /* 是否默认账户：0-否；1-是*/
  receiveChgInfo?: string;
  /* 银行账号*/
  receiveChgInfo?: string;
  /* 银行账户名称*/
  receiveChgInfo?: string;
  /* 开户行所在省ID*/
  receiveChgInfo?: string;
  /* 开户行所在省*/
  receiveChgInfo?: string;
  /* 开户行所在市ID*/
  receiveChgInfo?: string;
  /* 开户行所在市*/
  receiveChgInfo?: string;
  /* 开户行详细地址*/
  receiveChgInfo?: string;
  /* 总行名称*/
  receiveChgInfo?: string;
  /* 总行编码*/
  receiveChgInfo?: string;
  /* 支行名称*/
  receiveChgInfo?: string;
  /* 打款验证状态*/
  receiveChgInfo?: string;
  /* 账户业务id*/
  receiveChgInfo?: string;
  /* 联行号*/
  receiveChgInfo?: string;
  /* 创建人*/
  receiveChgInfo?: string;
  /* 创建时间*/
  receiveChgInfo?: string;
  /* 修改人（每次更新都记录）*/
  receiveChgInfo?: string;
  /* 修改时间（每次更新都记录）*/
  receiveChgInfo?: string;
  /* 是否线下兑付*/
  receiveChgInfo?: string;

  receiveChgInfoStr?: string;
  /* 主键ID*/
  clearChgInfo?: string;
  /* 雪花ID*/
  clearChgInfo?: string;
  /* 产品变更申请表id*/
  clearChgInfo?: string;

  clearChgInfo?: string;
  /* 账户类型:1-收款账户 2-清分账户 3-授信机构账户*/
  clearChgInfo?: string;
  /* 是否默认账户：0-否；1-是*/
  clearChgInfo?: string;
  /* 银行账号*/
  clearChgInfo?: string;
  /* 银行账户名称*/
  clearChgInfo?: string;
  /* 开户行所在省ID*/
  clearChgInfo?: string;
  /* 开户行所在省*/
  clearChgInfo?: string;
  /* 开户行所在市ID*/
  clearChgInfo?: string;
  /* 开户行所在市*/
  clearChgInfo?: string;
  /* 开户行详细地址*/
  clearChgInfo?: string;
  /* 总行名称*/
  clearChgInfo?: string;
  /* 总行编码*/
  clearChgInfo?: string;
  /* 支行名称*/
  clearChgInfo?: string;
  /* 打款验证状态*/
  clearChgInfo?: string;
  /* 账户业务id*/
  clearChgInfo?: string;
  /* 联行号*/
  clearChgInfo?: string;
  /* 创建人*/
  clearChgInfo?: string;
  /* 创建时间*/
  clearChgInfo?: string;
  /* 修改人（每次更新都记录）*/
  clearChgInfo?: string;
  /* 修改时间（每次更新都记录）*/
  clearChgInfo?: string;
  /* 是否线下兑付*/
  clearChgInfo?: string;

  clearChgInfoStr?: string;
  /* 主键ID*/
  creditChgInfo?: string;
  /* 雪花ID*/
  creditChgInfo?: string;
  /* 产品变更申请表id*/
  creditChgInfo?: string;

  creditChgInfo?: string;
  /* 账户类型:1-收款账户 2-清分账户 3-授信机构账户*/
  creditChgInfo?: string;
  /* 是否默认账户：0-否；1-是*/
  creditChgInfo?: string;
  /* 银行账号*/
  creditChgInfo?: string;
  /* 银行账户名称*/
  creditChgInfo?: string;
  /* 开户行所在省ID*/
  creditChgInfo?: string;
  /* 开户行所在省*/
  creditChgInfo?: string;
  /* 开户行所在市ID*/
  creditChgInfo?: string;
  /* 开户行所在市*/
  creditChgInfo?: string;
  /* 开户行详细地址*/
  creditChgInfo?: string;
  /* 总行名称*/
  creditChgInfo?: string;
  /* 总行编码*/
  creditChgInfo?: string;
  /* 支行名称*/
  creditChgInfo?: string;
  /* 打款验证状态*/
  creditChgInfo?: string;
  /* 账户业务id*/
  creditChgInfo?: string;
  /* 联行号*/
  creditChgInfo?: string;
  /* 创建人*/
  creditChgInfo?: string;
  /* 创建时间*/
  creditChgInfo?: string;
  /* 修改人（每次更新都记录）*/
  creditChgInfo?: string;
  /* 修改时间（每次更新都记录）*/
  creditChgInfo?: string;
  /* 是否线下兑付*/
  creditChgInfo?: string;

  creditChgInfoStr?: string;

  accountName?: string;
  /* 线下兑付，0：否；1：是*/
  officeCash?: string;

  officeCashCN?: string;

  remark?: string;
}

/*
 *@序号:98
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:commitToAudit(https://apaas-yapi.midea.com/project/7260/interface/api/745270)
 */

export function prdChangeCommitToAudit(data?: IToAuditParams) {
  return ajax<IToAuditParams, any>({
    url: `/prd/change/commit/to/audit`,
    method: "post",
    data,
  });
}

export interface IChangeAuditParams {
  applyId?: string;

  systemId?: string;

  isPass?: string;

  remark?: string;
  /* 主键ID*/
  fileList?: string;
  /* 雪花ID*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类型:详见PubConstants.FileType*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 来源:1-主数据；2-ibcp*/
  fileList?: string;
  /* 文件分类，1：新增，2：变更*/
  fileList?: string;
  /* 提交客户端，1-运营端，2-企业端*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 归属企业*/
  fileList?: string;
  /* 创建人*/
  fileList?: string;
  /* 创建时间*/
  fileList?: string;
  /* 修改人（每次更新都记录）*/
  fileList?: string;
  /* 修改时间（每次更新都记录）*/
  fileList?: string;
  /* UKEY申请书*/
  fileListStr?: string;
}

/*
 *@序号:99
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:audit(https://apaas-yapi.midea.com/project/7260/interface/api/745273)
 */

export function prdChangeAudit(data?: IChangeAuditParams) {
  return ajax<IChangeAuditParams, any>({
    url: `/prd/change/audit`,
    method: "post",
    data,
  });
}

export interface ISysMqParams {
  /* 业务流水号*/
  bizNo?: string;
  /* 上游系统业务单号*/
  sourceBizNo?: string;
  /* 原始单据来源业务单号*/
  originalBizNo?: string;
  /* 发送状态*/
  sendStatus?: string;
  /* 美易单号*/
  billcode?: string;

  pageNumber: string;

  pageSize: string;
}
export interface ISysMqData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单号
   */
  billcode?: string;
  /**
   * 业务流水号
   */
  bizNo?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 消息体
   */
  messageBody?: string;
  /**
   * 消息头
   */
  messageHeader?: string;
  /**
   * 修改人
   */
  modifyBy?: string;
  /**
   * 修改时间
   */
  modifyTime?: string;
  /**
   * 主键
   */
  mqId?: number;
  /**
   * 发送优先级
   */
  priority?: number;
  /**
   * 通讯方式
   */
  protocol?: string;
  /**
   * 通讯方式明文
   */
  protocolCn?: string;
  /**
   * 接收url
   */
  receiveUrl?: string;
  /**
   * 原因
   */
  remark?: string;
  /**
   * 发送次数
   */
  sendCount?: number;
  /**
   * 发送状态
   */
  sendStatus?: string;
  /**
   * 发送状态
   */
  sendStatusCn?: string;
  /**
   * 序号
   */
  serialNo?: string;
  /**
   * 消息类型
   */
  type?: string;
  /**
   * 类型名称
   */
  typeCn?: string;
  [property: string]: any;
}

/*
 *@序号:100
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138773)
 *@菜单名称:querySysMq(https://apaas-yapi.midea.com/project/7260/interface/api/745276)
 */

export function systemSysMqQuerySysMq(data?: ISysMqParams) {
  return ajax<ISysMqParams, ISysMqData>({
    url: `/system/sysMq/querySysMq`,
    method: "post",
    data,
  });
}

export interface IMqSendParams {
  mqId: string;
}

/*
 *@序号:101
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138773)
 *@菜单名称:send(https://apaas-yapi.midea.com/project/7260/interface/api/745279)
 */

export function systemSysMqSend(data?: IMqSendParams) {
  return ajax<IMqSendParams, any>({
    url: `/system/sysMq/send`,
    method: "post",
    data,
  });
}

/*
 *@序号:102
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138775)
 *@菜单名称:查询是业务组长的用户(https://apaas-yapi.midea.com/project/7260/interface/api/745282)
 */

export function systemAreaLeaderList(params?: any) {
  return ajax<any, any>({
    url: `/system/area/leader/list`,
    method: "get",
    params,
  });
}

export interface IOthersListParams {
  areaId?: string;
}

/*
 *@序号:103
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138775)
 *@菜单名称:查询未被分配的地区(https://apaas-yapi.midea.com/project/7260/interface/api/745285)
 */

export function systemAreaOthersListbyAreaId(areaid?: IOthersListParams) {
  return ajax<IOthersListParams, any>({
    url: `/system/area/others/list/${areaid}`,
    method: "get",
  });
}

export interface IInsertRoleParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:104
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:insertRole(https://apaas-yapi.midea.com/project/7260/interface/api/745288)
 */

export function systemRoleInsertRole(data?: IInsertRoleParams) {
  return ajax<IInsertRoleParams, any>({
    url: `/system/role/insertRole`,
    method: "post",
    data,
  });
}

export interface IAddManageParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:105
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:添加资源 [运营端][系统模块][角色]新增(https://apaas-yapi.midea.com/project/7260/interface/api/745291)
 */

export function systemRoleAddManage(data?: IAddManageParams) {
  return ajax<IAddManageParams, any>({
    url: `/system/role/addManage`,
    method: "post",
    data,
  });
}

export interface IAddEntParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:106
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:insertRoleEnt(https://apaas-yapi.midea.com/project/7260/interface/api/745294)
 */

export function systemRoleAddEnt(data?: IAddEntParams) {
  return ajax<IAddEntParams, any>({
    url: `/system/role/addEnt`,
    method: "post",
    data,
  });
}

export interface IAndEnableParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:107
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:禁用OR启用（运营端）(https://apaas-yapi.midea.com/project/7260/interface/api/745297)
 */

export function systemRolebyIDDisableAndEnable(id?: IAndEnableParams) {
  return ajax<IAndEnableParams, any>({
    url: `/system/role/${id}/disableAndEnable`,
    method: "post",
  });
}

export interface IDisableEntParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:108
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:禁用(https://apaas-yapi.midea.com/project/7260/interface/api/745300)
 */

export function systemRolebyIDDisableEnt(id?: IDisableEntParams) {
  return ajax<IDisableEntParams, any>({
    url: `/system/role/${id}/disableEnt`,
    method: "post",
  });
}

export interface IEditEntParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:109
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:编辑(https://apaas-yapi.midea.com/project/7260/interface/api/745303)
 */

export function systemRoleEditEnt(data?: IEditEntParams) {
  return ajax<IEditEntParams, any>({
    url: `/system/role/editEnt`,
    method: "post",
    data,
  });
}

export interface IEditManageParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:110
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:编辑(https://apaas-yapi.midea.com/project/7260/interface/api/745306)
 */

export function systemRoleEditManage(data?: IEditManageParams) {
  return ajax<IEditManageParams, any>({
    url: `/system/role/editManage`,
    method: "post",
    data,
  });
}

export interface IUpdateRoleParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:111
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:编辑(https://apaas-yapi.midea.com/project/7260/interface/api/745309)
 */

export function systemRoleUpdateRole(data?: IUpdateRoleParams) {
  return ajax<IUpdateRoleParams, any>({
    url: `/system/role/updateRole`,
    method: "post",
    data,
  });
}

export interface IRoleDelParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:112
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745312)
 */

export function systemRolebyIDDel(id?: IRoleDelParams) {
  return ajax<IRoleDelParams, any>({
    url: `/system/role/${id}/del`,
    method: "post",
  });
}

export interface IRoleUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:113
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745315)
 */

export function systemRoleUpdate(data?: IRoleUpdateParams) {
  return ajax<IRoleUpdateParams, any>({
    url: `/system/role/update`,
    method: "post",
    data,
  });
}

export interface IRoleGetParams {
  ID?: string;
}
export interface IRoleGetData {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:114
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询 [运营端][系统模块][角色](https://apaas-yapi.midea.com/project/7260/interface/api/745318)
 */

export function systemRolebyIDGet(id?: IRoleGetParams) {
  return ajax<IRoleGetParams, IRoleGetData>({
    url: `/system/role/${id}/get`,
    method: "post",
  });
}

export interface IRoleListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:115
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745321)
 */

export function systemRoleList(data?: IRoleListParams) {
  return ajax<IRoleListParams, any>({
    url: `/system/role/list`,
    method: "post",
    data,
  });
}

export interface IOmcListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:116
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745324)
 */

export function systemRoleOmcList(data?: IOmcListParams) {
  return ajax<IOmcListParams, any>({
    url: `/system/role/omc/list`,
    method: "post",
    data,
  });
}

export interface IEntListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}

/*
 *@序号:117
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745327)
 */

export function systemRoleEntList(data?: IEntListParams) {
  return ajax<IEntListParams, any>({
    url: `/system/role/ent/list`,
    method: "post",
    data,
  });
}

/*
 *@序号:118
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:成员单位角色列表查询:开票经办员，开票复核员，企业端查询员(https://apaas-yapi.midea.com/project/7260/interface/api/745330)
 */

export function systemRoleCyrole(data?: any) {
  return ajax<any, any>({ url: `/system/role/cyrole`, method: "post", data });
}

export interface IUseRoleParams {
  userName: string;
}
export interface IUseRoleData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:119
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询 [运营端][系统模块][角色](https://apaas-yapi.midea.com/project/7260/interface/api/745333)
 */

export function systemRoleSelectUserUseRole(data?: IUseRoleParams) {
  return ajax<IUseRoleParams, IUseRoleData>({
    url: `/system/role/selectUserUseRole`,
    method: "post",
    data,
  });
}

export interface IDistributiveRoleParams {
  userType: string;
}
export interface IDistributiveRoleData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:120
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:[运营端][系统模块][角色]查询企业管理员能分配的角色(https://apaas-yapi.midea.com/project/7260/interface/api/745336)
 */

export function systemRoleSelectEntManageCanDistributiveRole(
  data?: IDistributiveRoleParams,
) {
  return ajax<IDistributiveRoleParams, IDistributiveRoleData>({
    url: `/system/role/selectEntManageCanDistributiveRole`,
    method: "post",
    data,
  });
}

export interface IRoleUserParams {
  userid?: string;
}

/*
 *@序号:121
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745339)
 */

export function systemRoleUserbyUserid(userid?: IRoleUserParams) {
  return ajax<IRoleUserParams, any>({
    url: `/system/role/user/${userid}`,
    method: "post",
  });
}

export interface IRoleEntuserParams {
  userid?: string;
}

/*
 *@序号:122
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745342)
 */

export function systemRoleEntuserbyUserid(userid?: IRoleEntuserParams) {
  return ajax<IRoleEntuserParams, any>({
    url: `/system/role/entuser/${userid}`,
    method: "post",
  });
}

type IAllocResouceParams = undefined;

/*
 *@序号:123
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:allocResource(https://apaas-yapi.midea.com/project/7260/interface/api/745345)
 */

export function systemRolebyRoleIdAllocResouce(roleid?: IAllocResouceParams) {
  return ajax<IAllocResouceParams, any>({
    url: `/system/role/${roleid}/allocResouce`,
    method: "post",
  });
}

export interface IGetResourcesParams {
  roleId?: string;
}

/*
 *@序号:124
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:getRoleResource(https://apaas-yapi.midea.com/project/7260/interface/api/745348)
 */

export function systemRolebyRoleIdGetResources(roleid?: IGetResourcesParams) {
  return ajax<IGetResourcesParams, any>({
    url: `/system/role/${roleid}/getResources`,
    method: "get",
  });
}

export interface IRolePaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  roleId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 角色名称*/
  roleName?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleCode?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleState?: string;

  description?: string;
}
export interface IRolePaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:125
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745351)
 */

export function systemRolePagination(data?: IRolePaginationParams) {
  return ajax<IRolePaginationParams, IRolePaginationData>({
    url: `/system/role/pagination`,
    method: "post",
    data,
  });
}

export interface IFileEdpParams {
  /* 使用口令*/
  token: string;

  fileIdList: string;

  exFlag?: string;

  desc: string;
}

/*
 *@序号:126
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138779)
 *@菜单名称:推送指定经办员or审核员影印件(https://apaas-yapi.midea.com/project/7260/interface/api/745354)
 */

export function systemSyncAppointFileEdp(data?: IFileEdpParams) {
  return ajax<IFileEdpParams, any>({
    url: `/system/syncAppointFile2Edp`,
    method: "post",
    data,
  });
}

export interface IUkeyApplyParams {
  /* 企业表主键*/
  enterpriseId: string;
  /* 登录账号*/
  userName: string;

  userId?: string;
  /* 证书申请请求base64字符串*/
  csrText: string;
  /* 容器号*/
  containerName?: string;
}

/*
 *@序号:127
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:证书申请（新）(https://apaas-yapi.midea.com/project/7260/interface/api/745357)
 */

export function ukeyApply(data?: IUkeyApplyParams) {
  return ajax<IUkeyApplyParams, any>({
    url: `/ukey/apply`,
    method: "post",
    data,
  });
}

export interface IUkeyBindukeyParams {
  enterpriseId: string;

  ukeyDriverType: string;

  userName: string;

  userId?: string;

  ukeyId?: string;

  clientSignCert?: string;

  operateType?: string;

  ukeyApplyType?: string;
}

/*
 *@序号:128
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:证书写入ukey在后台记录绑定关系(https://apaas-yapi.midea.com/project/7260/interface/api/745360)
 */

export function ukeyBindukey(data?: IUkeyBindukeyParams) {
  return ajax<IUkeyBindukeyParams, any>({
    url: `/ukey/bindukey`,
    method: "post",
    data,
  });
}

export interface IRevokeCertParams {
  applyId?: string;

  ukeyId: string;

  enterpriseId: string;

  userName: string;

  userId?: string;

  certReqChallenge?: string;

  revokeReason: string;

  fileVoListStr?: string;
}

/*
 *@序号:129
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:注销证书（新）(https://apaas-yapi.midea.com/project/7260/interface/api/745363)
 */

export function ukeyRevokeCert(data?: IRevokeCertParams) {
  return ajax<IRevokeCertParams, any>({
    url: `/ukey/RevokeCert`,
    method: "post",
    data,
  });
}

export interface IRenewCertParams {
  enterpriseId: string;

  userName: string;

  csrData: string;

  containerName: string;

  userId?: string;
}

/*
 *@序号:130
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:CFCA证书续期(https://apaas-yapi.midea.com/project/7260/interface/api/745366)
 */

export function ukeyCfcaRenewCert(data?: IRenewCertParams) {
  return ajax<IRenewCertParams, any>({
    url: `/ukey/cfca/renewCert`,
    method: "post",
    data,
  });
}

export interface IQuerySummaryParams {
  enterpriseId: string;

  ukeyId: string;
}

/*
 *@序号:131
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查看证书详情(https://apaas-yapi.midea.com/project/7260/interface/api/745369)
 */

export function ukeyQuerySummary(data?: IQuerySummaryParams) {
  return ajax<IQuerySummaryParams, any>({
    url: `/ukey/querySummary`,
    method: "post",
    data,
  });
}

export interface IRevokeHistoryParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  ukeyId?: string;
  /* 用户ID*/
  userId?: string;
  /* 企业id*/
  enterpriseId?: string;
  /* 组织id（用于支持子公司逻辑）*/
  orgId?: string;
  /* UKey证书序列号*/
  certSerialNumber?: string;
  /* UKey证书有效期起始时间*/
  certNotBefore?: string;
  /* UKey证书有效期截止时间*/
  certNotAfter?: string;
  /* 诚信签用户ID*/
  espAccountId?: string;
  /* 证书签名数据*/
  signatureCert?: string;
  /* UKey证书主题*/
  certSubject?: string;
  /* ukey状态，0：待生效, 1：有效, 2：作废，3：吊销*/
  ukeyState?: string;
  /* 证书类型 ，1：天威，2：CFCA*/
  ukeyCertType?: string;
  /* 驱动类型 ，1：天威，2：CFCA*/
  driverType?: string;
  /* 注销时间*/
  revokeTime?: string;
  /* 注销原因*/
  revokeReason?: string;
  /* UKey证书颁发者信息*/
  certIssuer?: string;
  /* 用户名*/
  userName?: string;
  /* UKey续期状态*/
  renewState?: string;
  /* 续期受理人姓名*/
  accepterName?: string;
  /* 续期受理人userId*/
  accepterUserId?: string;

  operateType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 认证日期*/
  authTime?: string;
  /* 操作员*/
  realName?: string;
  /* 角色名称*/
  roleName?: string;
  /* 注销日期开始*/
  revokeTimeStart?: string;
  /* 注销日期结束*/
  revokeTimeEnd?: string;
}

/*
 *@序号:132
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查询uk注销记录(https://apaas-yapi.midea.com/project/7260/interface/api/745372)
 */

export function ukeySelectRevokeHistory(data?: IRevokeHistoryParams) {
  return ajax<IRevokeHistoryParams, any>({
    url: `/ukey/selectRevokeHistory`,
    method: "post",
    data,
  });
}

export interface IHistoryExportParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  ukeyId?: string;
  /* 用户ID*/
  userId?: string;
  /* 企业id*/
  enterpriseId?: string;
  /* 组织id（用于支持子公司逻辑）*/
  orgId?: string;
  /* UKey证书序列号*/
  certSerialNumber?: string;
  /* UKey证书有效期起始时间*/
  certNotBefore?: string;
  /* UKey证书有效期截止时间*/
  certNotAfter?: string;
  /* 诚信签用户ID*/
  espAccountId?: string;
  /* 证书签名数据*/
  signatureCert?: string;
  /* UKey证书主题*/
  certSubject?: string;
  /* ukey状态，0：待生效, 1：有效, 2：作废，3：吊销*/
  ukeyState?: string;
  /* 证书类型 ，1：天威，2：CFCA*/
  ukeyCertType?: string;
  /* 驱动类型 ，1：天威，2：CFCA*/
  driverType?: string;
  /* 注销时间*/
  revokeTime?: string;
  /* 注销原因*/
  revokeReason?: string;
  /* UKey证书颁发者信息*/
  certIssuer?: string;
  /* 用户名*/
  userName?: string;
  /* UKey续期状态*/
  renewState?: string;
  /* 续期受理人姓名*/
  accepterName?: string;
  /* 续期受理人userId*/
  accepterUserId?: string;

  operateType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 认证日期*/
  authTime?: string;
  /* 操作员*/
  realName?: string;
  /* 角色名称*/
  roleName?: string;
  /* 注销日期开始*/
  revokeTimeStart?: string;
  /* 注销日期结束*/
  revokeTimeEnd?: string;
}

/*
 *@序号:133
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey注销记录导出(https://apaas-yapi.midea.com/project/7260/interface/api/745375)
 */

export function ukeySelectRevokeHistoryExport(data?: IHistoryExportParams) {
  return ajax<IHistoryExportParams, any>({
    url: `/ukey/selectRevokeHistory/export`,
    method: "post",
    data,
  });
}

export interface IKeyTimesParams {
  enterpriseId: string;

  userId?: string;

  userName?: string;
}

/*
 *@序号:134
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:检查申请证书次数(https://apaas-yapi.midea.com/project/7260/interface/api/745378)
 */

export function ukeyCheckApplyUKeyTimes(data?: IKeyTimesParams) {
  return ajax<IKeyTimesParams, any>({
    url: `/ukey/checkApplyUKeyTimes`,
    method: "post",
    data,
  });
}

export interface IManageSelectParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey管理流水号*/
  ukeyManageId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 申请流水号*/
  applyId?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 审批状态*/
  manageState?: string;
  /* 审批状态str*/
  manageStateStr?: string;
  /* 管理类型*/
  manageType?: string;
  /* 理由*/
  manageReason?: string;
  /* 备注*/
  remark?: string;
  /* 客户经理处理意见*/
  mgrOpinion?: string;
  /* 企业端申请人用户id*/
  entApplierUserId?: string;
  /* 企业端 申请人用户账号*/
  entApplierUserName?: string;
  /* 企业端提交人*/
  entApplier?: string;
  /* 企业端提交时间*/
  entApplyTime?: string;
  /* 运营端经办人用户名*/
  omcApplier?: string;
  /* 运营端经办人提交时间*/
  omcApplyTime?: string;
  /* 运营端复核员审核时间*/
  omcReviewer?: string;
  /* 运营端复核员复核时间*/
  omcReviewTime?: string;
  /* 来源 (运营端)*/
  source?: string;
  /* ukey注销申请表名*/
  cancelFileName?: string;

  cancelDocId?: string;

  canceFileType?: string;
  /* ukey补办申请表*/
  retryFileName?: string;

  retryDocId?: string;

  retryFileType?: string;
  /* ukey重置密码申请表*/
  resetFileName?: string;

  resetDocId?: string;

  resetFileType?: string;
  /* ukey缴费证明*/
  paymentFileName?: string;

  paymentDocId?: string;

  paymentFileType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* uk邮寄地址*/
  ukeyMailAddress?: string;
}

/*
 *@序号:135
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:Ukey异常申请 查询(https://apaas-yapi.midea.com/project/7260/interface/api/745381)
 */

export function ukeyManageSelect(data?: IManageSelectParams) {
  return ajax<IManageSelectParams, any>({
    url: `/ukey/manage/1/select`,
    method: "post",
    data,
  });
}

export interface IManageSelectParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey管理流水号*/
  ukeyManageId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 申请流水号*/
  applyId?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 审批状态*/
  manageState?: string;
  /* 审批状态str*/
  manageStateStr?: string;
  /* 管理类型*/
  manageType?: string;
  /* 理由*/
  manageReason?: string;
  /* 备注*/
  remark?: string;
  /* 客户经理处理意见*/
  mgrOpinion?: string;
  /* 企业端申请人用户id*/
  entApplierUserId?: string;
  /* 企业端 申请人用户账号*/
  entApplierUserName?: string;
  /* 企业端提交人*/
  entApplier?: string;
  /* 企业端提交时间*/
  entApplyTime?: string;
  /* 运营端经办人用户名*/
  omcApplier?: string;
  /* 运营端经办人提交时间*/
  omcApplyTime?: string;
  /* 运营端复核员审核时间*/
  omcReviewer?: string;
  /* 运营端复核员复核时间*/
  omcReviewTime?: string;
  /* 来源 (运营端)*/
  source?: string;
  /* ukey注销申请表名*/
  cancelFileName?: string;

  cancelDocId?: string;

  canceFileType?: string;
  /* ukey补办申请表*/
  retryFileName?: string;

  retryDocId?: string;

  retryFileType?: string;
  /* ukey重置密码申请表*/
  resetFileName?: string;

  resetDocId?: string;

  resetFileType?: string;
  /* ukey缴费证明*/
  paymentFileName?: string;

  paymentDocId?: string;

  paymentFileType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* uk邮寄地址*/
  ukeyMailAddress?: string;
}

/*
 *@序号:136
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey异常复核(https://apaas-yapi.midea.com/project/7260/interface/api/745384)
 */

export function ukeyManageSelect(data?: IManageSelectParams) {
  return ajax<IManageSelectParams, any>({
    url: `/ukey/manage/2/select`,
    method: "post",
    data,
  });
}

export interface IManageSelectParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey管理流水号*/
  ukeyManageId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 申请流水号*/
  applyId?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 审批状态*/
  manageState?: string;
  /* 审批状态str*/
  manageStateStr?: string;
  /* 管理类型*/
  manageType?: string;
  /* 理由*/
  manageReason?: string;
  /* 备注*/
  remark?: string;
  /* 客户经理处理意见*/
  mgrOpinion?: string;
  /* 企业端申请人用户id*/
  entApplierUserId?: string;
  /* 企业端 申请人用户账号*/
  entApplierUserName?: string;
  /* 企业端提交人*/
  entApplier?: string;
  /* 企业端提交时间*/
  entApplyTime?: string;
  /* 运营端经办人用户名*/
  omcApplier?: string;
  /* 运营端经办人提交时间*/
  omcApplyTime?: string;
  /* 运营端复核员审核时间*/
  omcReviewer?: string;
  /* 运营端复核员复核时间*/
  omcReviewTime?: string;
  /* 来源 (运营端)*/
  source?: string;
  /* ukey注销申请表名*/
  cancelFileName?: string;

  cancelDocId?: string;

  canceFileType?: string;
  /* ukey补办申请表*/
  retryFileName?: string;

  retryDocId?: string;

  retryFileType?: string;
  /* ukey重置密码申请表*/
  resetFileName?: string;

  resetDocId?: string;

  resetFileType?: string;
  /* ukey缴费证明*/
  paymentFileName?: string;

  paymentDocId?: string;

  paymentFileType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* uk邮寄地址*/
  ukeyMailAddress?: string;
}

/*
 *@序号:137
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey异常查询(https://apaas-yapi.midea.com/project/7260/interface/api/745387)
 */

export function ukeyManageSelect(data?: IManageSelectParams) {
  return ajax<IManageSelectParams, any>({
    url: `/ukey/manage/3/select`,
    method: "post",
    data,
  });
}

export interface IManageDetailsParams {
  ukeyManageId: string;
}

/*
 *@序号:138
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查看详情(https://apaas-yapi.midea.com/project/7260/interface/api/745390)
 */

export function ukeyManageDetails(params?: IManageDetailsParams) {
  return ajax<IManageDetailsParams, any>({
    url: `/ukey/manage/details`,
    method: "get",
    params,
  });
}

export interface IManageUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey管理流水号*/
  ukeyManageId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 申请流水号*/
  applyId?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 审批状态*/
  manageState?: string;
  /* 审批状态str*/
  manageStateStr?: string;
  /* 管理类型*/
  manageType?: string;
  /* 理由*/
  manageReason?: string;
  /* 备注*/
  remark?: string;
  /* 客户经理处理意见*/
  mgrOpinion?: string;
  /* 企业端申请人用户id*/
  entApplierUserId?: string;
  /* 企业端 申请人用户账号*/
  entApplierUserName?: string;
  /* 企业端提交人*/
  entApplier?: string;
  /* 企业端提交时间*/
  entApplyTime?: string;
  /* 运营端经办人用户名*/
  omcApplier?: string;
  /* 运营端经办人提交时间*/
  omcApplyTime?: string;
  /* 运营端复核员审核时间*/
  omcReviewer?: string;
  /* 运营端复核员复核时间*/
  omcReviewTime?: string;
  /* 来源 (运营端)*/
  source?: string;
  /* ukey注销申请表名*/
  cancelFileName?: string;

  cancelDocId?: string;

  canceFileType?: string;
  /* ukey补办申请表*/
  retryFileName?: string;

  retryDocId?: string;

  retryFileType?: string;
  /* ukey重置密码申请表*/
  resetFileName?: string;

  resetDocId?: string;

  resetFileType?: string;
  /* ukey缴费证明*/
  paymentFileName?: string;

  paymentDocId?: string;

  paymentFileType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* uk邮寄地址*/
  ukeyMailAddress?: string;
}

/*
 *@序号:139
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:客户经理处理操作(通过/不通过)(https://apaas-yapi.midea.com/project/7260/interface/api/745393)
 */

export function ukeyManageUpdate(data?: IManageUpdateParams) {
  return ajax<IManageUpdateParams, any>({
    url: `/ukey/manage/update/1`,
    method: "post",
    data,
  });
}

export interface IManageUpdateParams {
  ukeyManageId: string;

  manageState: string;

  mgrOpinion?: string;
}

/*
 *@序号:140
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey管理复核(https://apaas-yapi.midea.com/project/7260/interface/api/745396)
 */

export function ukeyManageUpdate(data?: IManageUpdateParams) {
  return ajax<IManageUpdateParams, any>({
    url: `/ukey/manage/update/2`,
    method: "post",
    data,
  });
}

export interface IUploadAgainParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey管理流水号*/
  ukeyManageId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 申请流水号*/
  applyId?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 审批状态*/
  manageState?: string;
  /* 审批状态str*/
  manageStateStr?: string;
  /* 管理类型*/
  manageType?: string;
  /* 理由*/
  manageReason?: string;
  /* 备注*/
  remark?: string;
  /* 客户经理处理意见*/
  mgrOpinion?: string;
  /* 企业端申请人用户id*/
  entApplierUserId?: string;
  /* 企业端 申请人用户账号*/
  entApplierUserName?: string;
  /* 企业端提交人*/
  entApplier?: string;
  /* 企业端提交时间*/
  entApplyTime?: string;
  /* 运营端经办人用户名*/
  omcApplier?: string;
  /* 运营端经办人提交时间*/
  omcApplyTime?: string;
  /* 运营端复核员审核时间*/
  omcReviewer?: string;
  /* 运营端复核员复核时间*/
  omcReviewTime?: string;
  /* 来源 (运营端)*/
  source?: string;
  /* ukey注销申请表名*/
  cancelFileName?: string;

  cancelDocId?: string;

  canceFileType?: string;
  /* ukey补办申请表*/
  retryFileName?: string;

  retryDocId?: string;

  retryFileType?: string;
  /* ukey重置密码申请表*/
  resetFileName?: string;

  resetDocId?: string;

  resetFileType?: string;
  /* ukey缴费证明*/
  paymentFileName?: string;

  paymentDocId?: string;

  paymentFileType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* uk邮寄地址*/
  ukeyMailAddress?: string;
}

/*
 *@序号:141
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey管理补上传(https://apaas-yapi.midea.com/project/7260/interface/api/745399)
 */

export function ukeyManageUploadAgain(data?: IUploadAgainParams) {
  return ajax<IUploadAgainParams, any>({
    url: `/ukey/manage/upload/again`,
    method: "post",
    data,
  });
}

export interface IListExportParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey管理流水号*/
  ukeyManageId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 申请流水号*/
  applyId?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 审批状态*/
  manageState?: string;
  /* 审批状态str*/
  manageStateStr?: string;
  /* 管理类型*/
  manageType?: string;
  /* 理由*/
  manageReason?: string;
  /* 备注*/
  remark?: string;
  /* 客户经理处理意见*/
  mgrOpinion?: string;
  /* 企业端申请人用户id*/
  entApplierUserId?: string;
  /* 企业端 申请人用户账号*/
  entApplierUserName?: string;
  /* 企业端提交人*/
  entApplier?: string;
  /* 企业端提交时间*/
  entApplyTime?: string;
  /* 运营端经办人用户名*/
  omcApplier?: string;
  /* 运营端经办人提交时间*/
  omcApplyTime?: string;
  /* 运营端复核员审核时间*/
  omcReviewer?: string;
  /* 运营端复核员复核时间*/
  omcReviewTime?: string;
  /* 来源 (运营端)*/
  source?: string;
  /* ukey注销申请表名*/
  cancelFileName?: string;

  cancelDocId?: string;

  canceFileType?: string;
  /* ukey补办申请表*/
  retryFileName?: string;

  retryDocId?: string;

  retryFileType?: string;
  /* ukey重置密码申请表*/
  resetFileName?: string;

  resetDocId?: string;

  resetFileType?: string;
  /* ukey缴费证明*/
  paymentFileName?: string;

  paymentDocId?: string;

  paymentFileType?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
  /* uk邮寄地址*/
  ukeyMailAddress?: string;
}

/*
 *@序号:142
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:uk异常查询 导出(https://apaas-yapi.midea.com/project/7260/interface/api/745402)
 */

export function ukeyManageListExport(data?: IListExportParams) {
  return ajax<IListExportParams, any>({
    url: `/ukey/manage/list/export`,
    method: "post",
    data,
  });
}

export interface IHistoryInfoParams {
  ukeyManageId: string;

  fileType: string;
}

/*
 *@序号:143
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:findFileHistory(https://apaas-yapi.midea.com/project/7260/interface/api/745405)
 */

export function ukeyFileHistoryInfo(data?: IHistoryInfoParams) {
  return ajax<IHistoryInfoParams, any>({
    url: `/ukey/file/history/info`,
    method: "post",
    data,
  });
}

export interface IExpireListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey续期表流水号*/
  ukeyRenewId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* 续期日期*/
  renewTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 审核员姓名*/
  entReviewer?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 客户经理id*/
  mgrUserId?: string;
  /* 受理人姓名*/
  accepterName?: string;
  /* 受理人id*/
  accepterUserId?: string;
  /* 续期状态*/
  renewState?: string;
  /* 到期时间*/
  expireTime?: string;
  /* 到期时间开始（查询用）*/
  expireTimeStart?: string;
  /* 到期时间结束（查询用）*/
  expireTimeEnd?: string;
  /* 续期时间开始(查询用)*/
  renewedTimeStart?: string;
  /* 续期时间结束(查询用)*/
  renewedTimeEnd?: string;

  renewStateList?: string;
  /* ukey状态*/
  ukeyState?: string;
  /* ukey申请状态
申请状态，0：初始，1：请求RA成功，2：UKEY写入成功，3：过期作废，-1：作废*/
  applyState?: string;
  /* ukey状态*/
  enterpriseType?: string;
  /* 用户id*/
  userId?: string;

  pageNumber: string;

  pageSize: string;
}

/*
 *@序号:144
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:前端默认传enterprise_type为2(https://apaas-yapi.midea.com/project/7260/interface/api/745408)
 */

export function ukeyGetExpireList(data?: IExpireListParams) {
  return ajax<IExpireListParams, any>({
    url: `/ukey/get/expire/list`,
    method: "post",
    data,
  });
}

export interface IExpireUpdateParams {
  ukeyId: string;
}

/*
 *@序号:145
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:确认续期(https://apaas-yapi.midea.com/project/7260/interface/api/745411)
 */

export function ukeyExpireUpdate(data?: IExpireUpdateParams) {
  return ajax<IExpireUpdateParams, any>({
    url: `/ukey/expire/update`,
    method: "post",
    data,
  });
}

export interface IRenewedListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey续期表流水号*/
  ukeyRenewId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* 续期日期*/
  renewTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 审核员姓名*/
  entReviewer?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 客户经理id*/
  mgrUserId?: string;
  /* 受理人姓名*/
  accepterName?: string;
  /* 受理人id*/
  accepterUserId?: string;
  /* 续期状态*/
  renewState?: string;
  /* 到期时间*/
  expireTime?: string;
  /* 到期时间开始（查询用）*/
  expireTimeStart?: string;
  /* 到期时间结束（查询用）*/
  expireTimeEnd?: string;
  /* 续期时间开始(查询用)*/
  renewedTimeStart?: string;
  /* 续期时间结束(查询用)*/
  renewedTimeEnd?: string;

  renewStateList?: string;
  /* ukey状态*/
  ukeyState?: string;
  /* ukey申请状态
申请状态，0：初始，1：请求RA成功，2：UKEY写入成功，3：过期作废，-1：作废*/
  applyState?: string;
  /* ukey状态*/
  enterpriseType?: string;
  /* 用户id*/
  userId?: string;
}

/*
 *@序号:146
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查询供应商企业uk已续期列表(https://apaas-yapi.midea.com/project/7260/interface/api/745414)
 */

export function ukeyRenewedList(data?: IRenewedListParams) {
  return ajax<IRenewedListParams, any>({
    url: `/ukey/renewed/list`,
    method: "post",
    data,
  });
}

export interface IListExportParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey续期表流水号*/
  ukeyRenewId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* 续期日期*/
  renewTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 审核员姓名*/
  entReviewer?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 客户经理id*/
  mgrUserId?: string;
  /* 受理人姓名*/
  accepterName?: string;
  /* 受理人id*/
  accepterUserId?: string;
  /* 续期状态*/
  renewState?: string;
  /* 到期时间*/
  expireTime?: string;
  /* 到期时间开始（查询用）*/
  expireTimeStart?: string;
  /* 到期时间结束（查询用）*/
  expireTimeEnd?: string;
  /* 续期时间开始(查询用)*/
  renewedTimeStart?: string;
  /* 续期时间结束(查询用)*/
  renewedTimeEnd?: string;

  renewStateList?: string;
  /* ukey状态*/
  ukeyState?: string;
  /* ukey申请状态
申请状态，0：初始，1：请求RA成功，2：UKEY写入成功，3：过期作废，-1：作废*/
  applyState?: string;
  /* ukey状态*/
  enterpriseType?: string;
  /* 用户id*/
  userId?: string;
}

/*
 *@序号:147
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:导出供应商企业uk已续期列表(https://apaas-yapi.midea.com/project/7260/interface/api/745417)
 */

export function ukeyRenewedListExport(data?: IListExportParams) {
  return ajax<IListExportParams, any>({
    url: `/ukey/renewed/list/export`,
    method: "post",
    data,
  });
}

export interface IListExportParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ukey续期表流水号*/
  ukeyRenewId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 入驻时间*/
  authTime?: string;
  /* 续期日期*/
  renewTime?: string;
  /* ukey表的主键*/
  ukeyId?: string;
  /* 审核员姓名*/
  entReviewer?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 客户经理id*/
  mgrUserId?: string;
  /* 受理人姓名*/
  accepterName?: string;
  /* 受理人id*/
  accepterUserId?: string;
  /* 续期状态*/
  renewState?: string;
  /* 到期时间*/
  expireTime?: string;
  /* 到期时间开始（查询用）*/
  expireTimeStart?: string;
  /* 到期时间结束（查询用）*/
  expireTimeEnd?: string;
  /* 续期时间开始(查询用)*/
  renewedTimeStart?: string;
  /* 续期时间结束(查询用)*/
  renewedTimeEnd?: string;

  renewStateList?: string;
  /* ukey状态*/
  ukeyState?: string;
  /* ukey申请状态
申请状态，0：初始，1：请求RA成功，2：UKEY写入成功，3：过期作废，-1：作废*/
  applyState?: string;
  /* ukey状态*/
  enterpriseType?: string;
  /* 用户id*/
  userId?: string;
}

/*
 *@序号:148
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:导出供应商企业uk已到期列表(https://apaas-yapi.midea.com/project/7260/interface/api/745420)
 */

export function ukeyRenewingListExport(data?: IListExportParams) {
  return ajax<IListExportParams, any>({
    url: `/ukey/renewing/list/export`,
    method: "post",
    data,
  });
}

export interface ICfcaResetParams {
  enterpriseId: string;
}

/*
 *@序号:149
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:CFCA证书续期重置(https://apaas-yapi.midea.com/project/7260/interface/api/745423)
 */

export function ukeyCfcaReset(data?: ICfcaResetParams) {
  return ajax<ICfcaResetParams, any>({
    url: `/ukey/cfca/reset`,
    method: "post",
    data,
  });
}

export interface IUserInsertParams {
  userBO: string;

  roleIds: string;
}

/*
 *@序号:150
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:新增运营用户(https://apaas-yapi.midea.com/project/7260/interface/api/745426)
 */

export function systemUserInsert(data?: IUserInsertParams) {
  return ajax<IUserInsertParams, any>({
    url: `/system/user/insert`,
    method: "post",
    data,
  });
}

export interface IResetPwdParams {
  userId?: string;
}

/*
 *@序号:151
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:resetPassword(https://apaas-yapi.midea.com/project/7260/interface/api/745429)
 */

export function systemUserbyUserIdResetPwd(userid?: IResetPwdParams) {
  return ajax<IResetPwdParams, any>({
    url: `/system/user/${userid}/resetPwd`,
    method: "post",
  });
}

export interface IUserEditParams {
  roleIds: string;

  userId: string;
}

/*
 *@序号:152
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:编辑用户(https://apaas-yapi.midea.com/project/7260/interface/api/745432)
 */

export function systemUserEdit(data?: IUserEditParams) {
  return ajax<IUserEditParams, any>({
    url: `/system/user/edit`,
    method: "post",
    data,
  });
}

export interface IFrozenUserParams {
  userId?: string;
}

/*
 *@序号:153
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:frozenUser(https://apaas-yapi.midea.com/project/7260/interface/api/745435)
 */

export function systemUserbyUserIdFrozenUser(userid?: IFrozenUserParams) {
  return ajax<IFrozenUserParams, any>({
    url: `/system/user/${userid}/frozenUser`,
    method: "post",
  });
}

export interface IThawUserParams {
  userId?: string;
}

/*
 *@序号:154
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:ThawUser(https://apaas-yapi.midea.com/project/7260/interface/api/745438)
 */

export function systemUserbyUserIdThawUser(userid?: IThawUserParams) {
  return ajax<IThawUserParams, any>({
    url: `/system/user/${userid}/ThawUser`,
    method: "post",
  });
}

export interface IUserDeleteParams {
  userId?: string;
}

/*
 *@序号:155
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:删除用户(https://apaas-yapi.midea.com/project/7260/interface/api/745441)
 */

export function systemUserbyUserIdDelete(userid?: IUserDeleteParams) {
  return ajax<IUserDeleteParams, any>({
    url: `/system/user/${userid}/delete`,
    method: "post",
  });
}

export interface IOmcAllParams {
  userName?: string;

  pageNumber: string;

  pageSize: string;
}

/*
 *@序号:156
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectOmcAll(https://apaas-yapi.midea.com/project/7260/interface/api/745444)
 */

export function systemUserSelectOmcAll(data?: IOmcAllParams) {
  return ajax<IOmcAllParams, any>({
    url: `/system/user/selectOmcAll`,
    method: "post",
    data,
  });
}

export interface IEntUserParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  userId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  systemId?: string;
  /* 用户名（要做唯一性判断）*/
  userName?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  phoneNumber?: string;
  /* 邮件*/
  email?: string;
  /* 姓名*/
  realName?: string;
  /* 身份证件类型*/
  idType?: string;
  /* 证件号*/
  idNumber?: string;
  /* 地址所在省ID*/
  provinceId?: string;
  /* 地址所在省*/
  provinceName?: string;
  /* 地址所在市ID*/
  cityId?: string;
  /* 地址所在市*/
  cityName?: string;
  /* 区ID*/
  areaId?: string;
  /* 地址所在区*/
  areaName?: string;
  /* 联系地址*/
  address?: string;
  /* 用户状态 0冻结 1有效 2删除*/
  userState?: string;
  /* 密码盐值*/
  salt?: string;
  /* 登录密码*/
  pwd?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 证书类型：是否启用UKey*/
  licenseType?: string;
  /* 备注*/
  remark?: string;
  /* 用户来源:1一级供应商用户;2二级供应商用户*/
  userSource?: string;
  /* 区块链混淆密码*/
  userBlock?: string;
  /* mip账号*/
  mip?: string;
  /* UKey证书序列号*/
  certSerialNumber?: string;
  /* UKey证书有效期起始时间*/
  certNotBefore?: string;
  /* UKey证书有效期截止时间*/
  certNotAfter?: string;
  /* 诚信签用户ID*/
  espAccountId?: string;
  /* UKey证书颁发者信息*/
  certIssuer?: string;
  /* UKey证书主题*/
  certSubject?: string;
  /* 是否修改过初始密码*/
  isChangePwd?: string;
  /* 工作岗位*/
  workPost?: string;
  /* ukey是否有效，1有效，其他无效*/
  isUkeyEffect?: string;
  /* 证书类型（1、天威，2、CFCA）*/
  ukeyCertType?: string;
  /* 驱动类型 ，1：天威，2：CFCA*/
  driverType?: string;
  /* 身份证有效起始日期*/
  idValidStartDate?: string;
  /* 身份证有效结束日期*/
  idValidEndDate?: string;
  /* 操作员证件文件id（非数据库字段）*/
  licenseDocumentId?: string;
  /* 操作员证件文件name（非数据库字段）*/
  licenseDocumentName?: string;
  /* 天威用户状态 1有效 2冻结（非数据库字段）, f, a, l, s, e*/
  TWState?: string;
  /* 确认密码（非数据库字段）*/
  confirmPwd?: string;
  /* 角色代码（非数据库字段）*/
  roleCode?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;
  /* 流水号*/
  authorizationFile?: string;

  authorizationFile?: string;
  /* 文件路径*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 备注信息*/
  authorizationFile?: string;
  /* 业务数据ID*/
  authorizationFile?: string;
  /* 文件状态：1，正常 2，删除*/
  authorizationFile?: string;
  /* 文档id*/
  authorizationFile?: string;
  /* 经办员*/
  authorizationFile?: string;
  /* 审核员*/
  authorizationFile?: string;
  /* 文件来源*/
  authorizationFile?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  authorizationFile?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  authorizationFile?: string;
  /* 变更类型*/
  authorizationFile?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  authorizationFile?: string;
  /* 文件归属企业名*/
  authorizationFile?: string;
  /* 状态集合*/
  authorizationFile?: string;
  /* 授权书文件id（非数据库字段）*/
  authorizationDocumentId?: string;
  /* 授权书文件name（非数据库字段）*/
  authorizationDocumentName?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;
  /* 流水号*/
  otherFiles?: string;

  otherFiles?: string;
  /* 文件路径*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 备注信息*/
  otherFiles?: string;
  /* 业务数据ID*/
  otherFiles?: string;
  /* 文件状态：1，正常 2，删除*/
  otherFiles?: string;
  /* 文档id*/
  otherFiles?: string;
  /* 经办员*/
  otherFiles?: string;
  /* 审核员*/
  otherFiles?: string;
  /* 文件来源*/
  otherFiles?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  otherFiles?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  otherFiles?: string;
  /* 变更类型*/
  otherFiles?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  otherFiles?: string;
  /* 文件归属企业名*/
  otherFiles?: string;
  /* 状态集合*/
  otherFiles?: string;
  /* 企业名称（非数据库字段）*/
  enterpriseName?: string;
  /* 企业组织机构代码（非数据库字段）*/
  enterpriseOrganCode?: string;
  /* 企业证件类型（非数据库字段）*/
  organCodeType?: string;
  /* 企业类型（非数据库字段）*/
  enterpriseType?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;
  /* ID*/
  roleBOList?: string;
  /* 系统ID(哪个系统的资源)*/
  roleBOList?: string;
  /* 企业ID*/
  roleBOList?: string;
  /* 角色名称*/
  roleBOList?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleBOList?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleBOList?: string;
  /* 当前状态:0:非选中,1:选中*/
  roleBOList?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleBOList?: string;

  roleBOList?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;
  /* ID*/
  resouceList?: string;
  /* 系统ID(哪个系统的资源)*/
  resouceList?: string;
  /* 资源代码*/
  resouceList?: string;
  /* 资源名称*/
  resouceList?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resouceList?: string;
  /* 路径*/
  resouceList?: string;
  /* 图标*/
  resouceList?: string;
  /* 资源状态，0：禁用；1：正常*/
  resouceList?: string;
  /* 资源排序，从0开始*/
  resouceList?: string;
  /* 父资源id*/
  resouceList?: string;
  /* 描述*/
  resouceList?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  resouceList?: string;
  /* 当前状态:0:非选中,1:选中*/
  resouceList?: string;

  resouceList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;

  fileBOList?: string;
  /* 文件路径*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 备注信息*/
  fileBOList?: string;
  /* 业务数据ID*/
  fileBOList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 文件来源*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileBOList?: string;
  /* 文件归属企业名*/
  fileBOList?: string;
  /* 状态集合*/
  fileBOList?: string;
  /* 随机密码（非数据库字段）*/
  ramdomPwd?: string;
  /* 关联角色表主键（非数据库字段）*/
  roleId?: string;
  /* 是否使用注册账户（非数据库字段）*/
  isUserRegAccount?: string;
  /* 创建日期开始（非数据库字段）*/
  startCreateTime?: string;
  /* 创建日期结束（非数据库字段）*/
  endCreateTime?: string;
  /* 企业状态（非数据库字段）*/
  enterpriseState?: string;
  /* 企业来源（非数据库字段）*/
  enterpriseSource?: string;
  /* 是否存在证件过期（非数据库字段）, f, a, l, s, e*/
  isCertificateExpired?: string;
  /* 过期的证件列表（非数据库字段）*/
  expiredCertList?: string;
  /* 证书是否过期（非数据库字段）*/
  isUkeyExpired?: string;
  /* ukeyId（非数据库字段）*/
  ukeyId?: string;
  /* 企业入驻服务条款同意：1 （非数据库字段）*/
  termsOfService?: string;

  licenseNumber?: string;

  legalRepresentative?: string;

  legalRepresentativeIdType?: string;
  /* 上级领导mip账号(非数据库字段)*/
  leaderMip?: string;
  /* 组长id*/
  leaderId?: string;
  /* 组长姓名*/
  leaderName?: string;
  /* ukey是否已交钱,1:已交钱*/
  isUkeyCharged?: string;
  /* 企业等级*/
  enterpriseGrade?: string;
  /* 是否邮寄ukey*/
  isSendUkey?: string;
  /* 是否美的企业标识*/
  isMidea?: string;
  /* 消息模板编码*/
  messageCode?: string;
  /* 是否在白名单N-否 Y-是*/
  inWhiteList?: string;
}

/*
 *@序号:157
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectEntUser(https://apaas-yapi.midea.com/project/7260/interface/api/745447)
 */

export function systemUserSelectEntUser(data?: IEntUserParams) {
  return ajax<IEntUserParams, any>({
    url: `/system/user/selectEntUser`,
    method: "post",
    data,
  });
}

export interface ISelectDetailsParams {
  userId?: string;
}
export interface ISelectDetailsData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:158
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectUserDetails(https://apaas-yapi.midea.com/project/7260/interface/api/745450)
 */

export function systemUserbyUserIdSelectDetails(userid?: ISelectDetailsParams) {
  return ajax<ISelectDetailsParams, ISelectDetailsData>({
    url: `/system/user/${userid}/selectDetails`,
    method: "post",
  });
}

export interface ISelectDetailsData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:159
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectDetails(https://apaas-yapi.midea.com/project/7260/interface/api/745453)
 */

export function systemUserSelectDetails(data?: any) {
  return ajax<any, ISelectDetailsData>({
    url: `/system/user/selectDetails`,
    method: "post",
    data,
  });
}

export interface IUserLoginParams {
  username: string;

  pwd: string;

  pinCode?: string;
}
export interface IUserLoginData {
  blockBO?: BlockBO;
  errorCode?: string;
  isPinCode?: boolean;
  isSuccess?: boolean;
  message?: string;
  pinCodeUrl?: string;
  userBO?: UserBO;
  [property: string]: any;
}

export interface BlockBO {
  randomArr?: number[];
  userBlock?: string;
  userName?: string;
  [property: string]: any;
}

export interface UserBO {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:160
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:login(https://apaas-yapi.midea.com/project/7260/interface/api/745456)
 */

export function systemUserLogin(data?: IUserLoginParams) {
  return ajax<IUserLoginParams, IUserLoginData>({
    url: `/system/user/login`,
    method: "post",
    data,
  });
}

export interface IChangePwdParams {
  pwd: string;

  newPassword: string;

  vertifyCode: string;
}

/*
 *@序号:161
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:changePwd(https://apaas-yapi.midea.com/project/7260/interface/api/745459)
 */

export function systemUserChangePwd(data?: IChangePwdParams) {
  return ajax<IChangePwdParams, any>({
    url: `/system/user/changePwd`,
    method: "post",
    data,
  });
}

export interface IChangePhoneParams {
  /* 新手机号码*/
  newPhone: string;
}
export interface IChangePhoneData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:162
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:修改手机号码(https://apaas-yapi.midea.com/project/7260/interface/api/745462)
 */

export function systemUserChangePhone(data?: IChangePhoneParams) {
  return ajax<IChangePhoneParams, IChangePhoneData>({
    url: `/system/user/changePhone`,
    method: "post",
    data,
  });
}

export interface IChangeEmailParams {
  /* 新邮箱*/
  newEmail: string;
}
export interface IChangeEmailData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:163
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:[运营端][系统模块][用户]修改个人邮箱地址(https://apaas-yapi.midea.com/project/7260/interface/api/745465)
 */

export function systemUserChangeEmail(data?: IChangeEmailParams) {
  return ajax<IChangeEmailParams, IChangeEmailData>({
    url: `/system/user/changeEmail`,
    method: "post",
    data,
  });
}

export interface IUserLogoutData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:164
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:logout(https://apaas-yapi.midea.com/project/7260/interface/api/745468)
 */

export function systemUserLogout(data?: any) {
  return ajax<any, IUserLogoutData>({
    url: `/system/user/logout`,
    method: "post",
    data,
  });
}

type IAllocRoleParams = undefined;

/*
 *@序号:165
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:allocRole(https://apaas-yapi.midea.com/project/7260/interface/api/745471)
 */

export function systemUserbyUserIdAllocRole(userid?: IAllocRoleParams) {
  return ajax<IAllocRoleParams, any>({
    url: `/system/user/${userid}/allocRole`,
    method: "post",
  });
}

export interface IByConditionParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  userId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  systemId?: string;
  /* 用户名（要做唯一性判断）*/
  userName?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  phoneNumber?: string;
  /* 邮件*/
  email?: string;
  /* 姓名*/
  realName?: string;
  /* 身份证件类型*/
  idType?: string;
  /* 证件号*/
  idNumber?: string;
  /* 地址所在省ID*/
  provinceId?: string;
  /* 地址所在省*/
  provinceName?: string;
  /* 地址所在市ID*/
  cityId?: string;
  /* 地址所在市*/
  cityName?: string;
  /* 区ID*/
  areaId?: string;
  /* 地址所在区*/
  areaName?: string;
  /* 联系地址*/
  address?: string;
  /* 用户状态 0冻结 1有效 2删除*/
  userState?: string;
  /* 密码盐值*/
  salt?: string;
  /* 登录密码*/
  pwd?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 证书类型：是否启用UKey*/
  licenseType?: string;
  /* 备注*/
  remark?: string;
  /* 用户来源:1一级供应商用户;2二级供应商用户*/
  userSource?: string;
  /* 区块链混淆密码*/
  userBlock?: string;
  /* mip账号*/
  mip?: string;
  /* UKey证书序列号*/
  certSerialNumber?: string;
  /* UKey证书有效期起始时间*/
  certNotBefore?: string;
  /* UKey证书有效期截止时间*/
  certNotAfter?: string;
  /* 诚信签用户ID*/
  espAccountId?: string;
  /* UKey证书颁发者信息*/
  certIssuer?: string;
  /* UKey证书主题*/
  certSubject?: string;
  /* 是否修改过初始密码*/
  isChangePwd?: string;
  /* 工作岗位*/
  workPost?: string;
  /* ukey是否有效，1有效，其他无效*/
  isUkeyEffect?: string;
  /* 证书类型（1、天威，2、CFCA）*/
  ukeyCertType?: string;
  /* 驱动类型 ，1：天威，2：CFCA*/
  driverType?: string;
  /* 身份证有效起始日期*/
  idValidStartDate?: string;
  /* 身份证有效结束日期*/
  idValidEndDate?: string;
  /* 操作员证件文件id（非数据库字段）*/
  licenseDocumentId?: string;
  /* 操作员证件文件name（非数据库字段）*/
  licenseDocumentName?: string;
  /* 天威用户状态 1有效 2冻结（非数据库字段）, f, a, l, s, e*/
  TWState?: string;
  /* 确认密码（非数据库字段）*/
  confirmPwd?: string;
  /* 角色代码（非数据库字段）*/
  roleCode?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;
  /* 流水号*/
  authorizationFile?: string;

  authorizationFile?: string;
  /* 文件路径*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 备注信息*/
  authorizationFile?: string;
  /* 业务数据ID*/
  authorizationFile?: string;
  /* 文件状态：1，正常 2，删除*/
  authorizationFile?: string;
  /* 文档id*/
  authorizationFile?: string;
  /* 经办员*/
  authorizationFile?: string;
  /* 审核员*/
  authorizationFile?: string;
  /* 文件来源*/
  authorizationFile?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  authorizationFile?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  authorizationFile?: string;
  /* 变更类型*/
  authorizationFile?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  authorizationFile?: string;
  /* 文件归属企业名*/
  authorizationFile?: string;
  /* 状态集合*/
  authorizationFile?: string;
  /* 授权书文件id（非数据库字段）*/
  authorizationDocumentId?: string;
  /* 授权书文件name（非数据库字段）*/
  authorizationDocumentName?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;
  /* 流水号*/
  otherFiles?: string;

  otherFiles?: string;
  /* 文件路径*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 备注信息*/
  otherFiles?: string;
  /* 业务数据ID*/
  otherFiles?: string;
  /* 文件状态：1，正常 2，删除*/
  otherFiles?: string;
  /* 文档id*/
  otherFiles?: string;
  /* 经办员*/
  otherFiles?: string;
  /* 审核员*/
  otherFiles?: string;
  /* 文件来源*/
  otherFiles?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  otherFiles?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  otherFiles?: string;
  /* 变更类型*/
  otherFiles?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  otherFiles?: string;
  /* 文件归属企业名*/
  otherFiles?: string;
  /* 状态集合*/
  otherFiles?: string;
  /* 企业名称（非数据库字段）*/
  enterpriseName?: string;
  /* 企业组织机构代码（非数据库字段）*/
  enterpriseOrganCode?: string;
  /* 企业证件类型（非数据库字段）*/
  organCodeType?: string;
  /* 企业类型（非数据库字段）*/
  enterpriseType?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;
  /* ID*/
  roleBOList?: string;
  /* 系统ID(哪个系统的资源)*/
  roleBOList?: string;
  /* 企业ID*/
  roleBOList?: string;
  /* 角色名称*/
  roleBOList?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleBOList?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleBOList?: string;
  /* 当前状态:0:非选中,1:选中*/
  roleBOList?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleBOList?: string;

  roleBOList?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;
  /* ID*/
  resouceList?: string;
  /* 系统ID(哪个系统的资源)*/
  resouceList?: string;
  /* 资源代码*/
  resouceList?: string;
  /* 资源名称*/
  resouceList?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resouceList?: string;
  /* 路径*/
  resouceList?: string;
  /* 图标*/
  resouceList?: string;
  /* 资源状态，0：禁用；1：正常*/
  resouceList?: string;
  /* 资源排序，从0开始*/
  resouceList?: string;
  /* 父资源id*/
  resouceList?: string;
  /* 描述*/
  resouceList?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  resouceList?: string;
  /* 当前状态:0:非选中,1:选中*/
  resouceList?: string;

  resouceList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;

  fileBOList?: string;
  /* 文件路径*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 备注信息*/
  fileBOList?: string;
  /* 业务数据ID*/
  fileBOList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 文件来源*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileBOList?: string;
  /* 文件归属企业名*/
  fileBOList?: string;
  /* 状态集合*/
  fileBOList?: string;
  /* 随机密码（非数据库字段）*/
  ramdomPwd?: string;
  /* 关联角色表主键（非数据库字段）*/
  roleId?: string;
  /* 是否使用注册账户（非数据库字段）*/
  isUserRegAccount?: string;
  /* 创建日期开始（非数据库字段）*/
  startCreateTime?: string;
  /* 创建日期结束（非数据库字段）*/
  endCreateTime?: string;
  /* 企业状态（非数据库字段）*/
  enterpriseState?: string;
  /* 企业来源（非数据库字段）*/
  enterpriseSource?: string;
  /* 是否存在证件过期（非数据库字段）, f, a, l, s, e*/
  isCertificateExpired?: string;
  /* 过期的证件列表（非数据库字段）*/
  expiredCertList?: string;
  /* 证书是否过期（非数据库字段）*/
  isUkeyExpired?: string;
  /* ukeyId（非数据库字段）*/
  ukeyId?: string;
  /* 企业入驻服务条款同意：1 （非数据库字段）*/
  termsOfService?: string;

  licenseNumber?: string;

  legalRepresentative?: string;

  legalRepresentativeIdType?: string;
  /* 上级领导mip账号(非数据库字段)*/
  leaderMip?: string;
  /* 组长id*/
  leaderId?: string;
  /* 组长姓名*/
  leaderName?: string;
  /* ukey是否已交钱,1:已交钱*/
  isUkeyCharged?: string;
  /* 企业等级*/
  enterpriseGrade?: string;
  /* 是否邮寄ukey*/
  isSendUkey?: string;
  /* 是否美的企业标识*/
  isMidea?: string;
  /* 消息模板编码*/
  messageCode?: string;
  /* 是否在白名单N-否 Y-是*/
  inWhiteList?: string;
}

/*
 *@序号:166
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectByCondition(https://apaas-yapi.midea.com/project/7260/interface/api/745474)
 */

export function systemUserSelectByCondition(data?: IByConditionParams) {
  return ajax<IByConditionParams, any>({
    url: `/system/user/selectByCondition`,
    method: "post",
    data,
  });
}

export interface IUkeyinfoQueryParams {
  userId: string;
}

/*
 *@序号:167
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:查询绑定的Ukey信息(https://apaas-yapi.midea.com/project/7260/interface/api/745477)
 */

export function systemUserUkeyinfoQuery(data?: IUkeyinfoQueryParams) {
  return ajax<IUkeyinfoQueryParams, any>({
    url: `/system/user/ukeyinfo/query`,
    method: "post",
    data,
  });
}

export interface IFindListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  userId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  systemId?: string;
  /* 用户名（要做唯一性判断）*/
  userName?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  phoneNumber?: string;
  /* 邮件*/
  email?: string;
  /* 姓名*/
  realName?: string;
  /* 身份证件类型*/
  idType?: string;
  /* 证件号*/
  idNumber?: string;
  /* 地址所在省ID*/
  provinceId?: string;
  /* 地址所在省*/
  provinceName?: string;
  /* 地址所在市ID*/
  cityId?: string;
  /* 地址所在市*/
  cityName?: string;
  /* 区ID*/
  areaId?: string;
  /* 地址所在区*/
  areaName?: string;
  /* 联系地址*/
  address?: string;
  /* 用户状态 0冻结 1有效 2删除*/
  userState?: string;
  /* 密码盐值*/
  salt?: string;
  /* 登录密码*/
  pwd?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 证书类型：是否启用UKey*/
  licenseType?: string;
  /* 备注*/
  remark?: string;
  /* 用户来源:1一级供应商用户;2二级供应商用户*/
  userSource?: string;
  /* 区块链混淆密码*/
  userBlock?: string;
  /* mip账号*/
  mip?: string;
  /* UKey证书序列号*/
  certSerialNumber?: string;
  /* UKey证书有效期起始时间*/
  certNotBefore?: string;
  /* UKey证书有效期截止时间*/
  certNotAfter?: string;
  /* 诚信签用户ID*/
  espAccountId?: string;
  /* UKey证书颁发者信息*/
  certIssuer?: string;
  /* UKey证书主题*/
  certSubject?: string;
  /* 是否修改过初始密码*/
  isChangePwd?: string;
  /* 工作岗位*/
  workPost?: string;
  /* ukey是否有效，1有效，其他无效*/
  isUkeyEffect?: string;
  /* 证书类型（1、天威，2、CFCA）*/
  ukeyCertType?: string;
  /* 驱动类型 ，1：天威，2：CFCA*/
  driverType?: string;
  /* 身份证有效起始日期*/
  idValidStartDate?: string;
  /* 身份证有效结束日期*/
  idValidEndDate?: string;
  /* 操作员证件文件id（非数据库字段）*/
  licenseDocumentId?: string;
  /* 操作员证件文件name（非数据库字段）*/
  licenseDocumentName?: string;
  /* 天威用户状态 1有效 2冻结（非数据库字段）, f, a, l, s, e*/
  TWState?: string;
  /* 确认密码（非数据库字段）*/
  confirmPwd?: string;
  /* 角色代码（非数据库字段）*/
  roleCode?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;
  /* 流水号*/
  authorizationFile?: string;

  authorizationFile?: string;
  /* 文件路径*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 备注信息*/
  authorizationFile?: string;
  /* 业务数据ID*/
  authorizationFile?: string;
  /* 文件状态：1，正常 2，删除*/
  authorizationFile?: string;
  /* 文档id*/
  authorizationFile?: string;
  /* 经办员*/
  authorizationFile?: string;
  /* 审核员*/
  authorizationFile?: string;
  /* 文件来源*/
  authorizationFile?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  authorizationFile?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  authorizationFile?: string;
  /* 变更类型*/
  authorizationFile?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  authorizationFile?: string;
  /* 文件归属企业名*/
  authorizationFile?: string;
  /* 状态集合*/
  authorizationFile?: string;
  /* 授权书文件id（非数据库字段）*/
  authorizationDocumentId?: string;
  /* 授权书文件name（非数据库字段）*/
  authorizationDocumentName?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;
  /* 流水号*/
  otherFiles?: string;

  otherFiles?: string;
  /* 文件路径*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 备注信息*/
  otherFiles?: string;
  /* 业务数据ID*/
  otherFiles?: string;
  /* 文件状态：1，正常 2，删除*/
  otherFiles?: string;
  /* 文档id*/
  otherFiles?: string;
  /* 经办员*/
  otherFiles?: string;
  /* 审核员*/
  otherFiles?: string;
  /* 文件来源*/
  otherFiles?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  otherFiles?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  otherFiles?: string;
  /* 变更类型*/
  otherFiles?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  otherFiles?: string;
  /* 文件归属企业名*/
  otherFiles?: string;
  /* 状态集合*/
  otherFiles?: string;
  /* 企业名称（非数据库字段）*/
  enterpriseName?: string;
  /* 企业组织机构代码（非数据库字段）*/
  enterpriseOrganCode?: string;
  /* 企业证件类型（非数据库字段）*/
  organCodeType?: string;
  /* 企业类型（非数据库字段）*/
  enterpriseType?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;
  /* ID*/
  roleBOList?: string;
  /* 系统ID(哪个系统的资源)*/
  roleBOList?: string;
  /* 企业ID*/
  roleBOList?: string;
  /* 角色名称*/
  roleBOList?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleBOList?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleBOList?: string;
  /* 当前状态:0:非选中,1:选中*/
  roleBOList?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleBOList?: string;

  roleBOList?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;
  /* ID*/
  resouceList?: string;
  /* 系统ID(哪个系统的资源)*/
  resouceList?: string;
  /* 资源代码*/
  resouceList?: string;
  /* 资源名称*/
  resouceList?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resouceList?: string;
  /* 路径*/
  resouceList?: string;
  /* 图标*/
  resouceList?: string;
  /* 资源状态，0：禁用；1：正常*/
  resouceList?: string;
  /* 资源排序，从0开始*/
  resouceList?: string;
  /* 父资源id*/
  resouceList?: string;
  /* 描述*/
  resouceList?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  resouceList?: string;
  /* 当前状态:0:非选中,1:选中*/
  resouceList?: string;

  resouceList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;

  fileBOList?: string;
  /* 文件路径*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 备注信息*/
  fileBOList?: string;
  /* 业务数据ID*/
  fileBOList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 文件来源*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileBOList?: string;
  /* 文件归属企业名*/
  fileBOList?: string;
  /* 状态集合*/
  fileBOList?: string;
  /* 随机密码（非数据库字段）*/
  ramdomPwd?: string;
  /* 关联角色表主键（非数据库字段）*/
  roleId?: string;
  /* 是否使用注册账户（非数据库字段）*/
  isUserRegAccount?: string;
  /* 创建日期开始（非数据库字段）*/
  startCreateTime?: string;
  /* 创建日期结束（非数据库字段）*/
  endCreateTime?: string;
  /* 企业状态（非数据库字段）*/
  enterpriseState?: string;
  /* 企业来源（非数据库字段）*/
  enterpriseSource?: string;
  /* 是否存在证件过期（非数据库字段）, f, a, l, s, e*/
  isCertificateExpired?: string;
  /* 过期的证件列表（非数据库字段）*/
  expiredCertList?: string;
  /* 证书是否过期（非数据库字段）*/
  isUkeyExpired?: string;
  /* ukeyId（非数据库字段）*/
  ukeyId?: string;
  /* 企业入驻服务条款同意：1 （非数据库字段）*/
  termsOfService?: string;

  licenseNumber?: string;

  legalRepresentative?: string;

  legalRepresentativeIdType?: string;
  /* 上级领导mip账号(非数据库字段)*/
  leaderMip?: string;
  /* 组长id*/
  leaderId?: string;
  /* 组长姓名*/
  leaderName?: string;
  /* ukey是否已交钱,1:已交钱*/
  isUkeyCharged?: string;
  /* 企业等级*/
  enterpriseGrade?: string;
  /* 是否邮寄ukey*/
  isSendUkey?: string;
  /* 是否美的企业标识*/
  isMidea?: string;
  /* 消息模板编码*/
  messageCode?: string;
  /* 是否在白名单N-否 Y-是*/
  inWhiteList?: string;
}

/*
 *@序号:168
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:运营端人员管理(https://apaas-yapi.midea.com/project/7260/interface/api/745480)
 */

export function systemOmcUserFindList(data?: IFindListParams) {
  return ajax<IFindListParams, any>({
    url: `/system/omcUser/find/list`,
    method: "post",
    data,
  });
}

export interface IFindListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  userId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 系统ID(哪个系统的用户)，1:企业端 2:运营端*/
  systemId?: string;
  /* 用户名（要做唯一性判断）*/
  userName?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  phoneNumber?: string;
  /* 邮件*/
  email?: string;
  /* 姓名*/
  realName?: string;
  /* 身份证件类型*/
  idType?: string;
  /* 证件号*/
  idNumber?: string;
  /* 地址所在省ID*/
  provinceId?: string;
  /* 地址所在省*/
  provinceName?: string;
  /* 地址所在市ID*/
  cityId?: string;
  /* 地址所在市*/
  cityName?: string;
  /* 区ID*/
  areaId?: string;
  /* 地址所在区*/
  areaName?: string;
  /* 联系地址*/
  address?: string;
  /* 用户状态 0冻结 1有效 2删除*/
  userState?: string;
  /* 密码盐值*/
  salt?: string;
  /* 登录密码*/
  pwd?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleType?: string;
  /* 证书类型：是否启用UKey*/
  licenseType?: string;
  /* 备注*/
  remark?: string;
  /* 用户来源:1一级供应商用户;2二级供应商用户*/
  userSource?: string;
  /* 区块链混淆密码*/
  userBlock?: string;
  /* mip账号*/
  mip?: string;
  /* UKey证书序列号*/
  certSerialNumber?: string;
  /* UKey证书有效期起始时间*/
  certNotBefore?: string;
  /* UKey证书有效期截止时间*/
  certNotAfter?: string;
  /* 诚信签用户ID*/
  espAccountId?: string;
  /* UKey证书颁发者信息*/
  certIssuer?: string;
  /* UKey证书主题*/
  certSubject?: string;
  /* 是否修改过初始密码*/
  isChangePwd?: string;
  /* 工作岗位*/
  workPost?: string;
  /* ukey是否有效，1有效，其他无效*/
  isUkeyEffect?: string;
  /* 证书类型（1、天威，2、CFCA）*/
  ukeyCertType?: string;
  /* 驱动类型 ，1：天威，2：CFCA*/
  driverType?: string;
  /* 身份证有效起始日期*/
  idValidStartDate?: string;
  /* 身份证有效结束日期*/
  idValidEndDate?: string;
  /* 操作员证件文件id（非数据库字段）*/
  licenseDocumentId?: string;
  /* 操作员证件文件name（非数据库字段）*/
  licenseDocumentName?: string;
  /* 天威用户状态 1有效 2冻结（非数据库字段）, f, a, l, s, e*/
  TWState?: string;
  /* 确认密码（非数据库字段）*/
  confirmPwd?: string;
  /* 角色代码（非数据库字段）*/
  roleCode?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;

  authorizationFile?: string;
  /* 流水号*/
  authorizationFile?: string;

  authorizationFile?: string;
  /* 文件路径*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 文件类别-业务分类*/
  authorizationFile?: string;
  /* 备注信息*/
  authorizationFile?: string;
  /* 业务数据ID*/
  authorizationFile?: string;
  /* 文件状态：1，正常 2，删除*/
  authorizationFile?: string;
  /* 文档id*/
  authorizationFile?: string;
  /* 经办员*/
  authorizationFile?: string;
  /* 审核员*/
  authorizationFile?: string;
  /* 文件来源*/
  authorizationFile?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  authorizationFile?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  authorizationFile?: string;
  /* 变更类型*/
  authorizationFile?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  authorizationFile?: string;
  /* 文件归属企业名*/
  authorizationFile?: string;
  /* 状态集合*/
  authorizationFile?: string;
  /* 授权书文件id（非数据库字段）*/
  authorizationDocumentId?: string;
  /* 授权书文件name（非数据库字段）*/
  authorizationDocumentName?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;

  otherFiles?: string;
  /* 流水号*/
  otherFiles?: string;

  otherFiles?: string;
  /* 文件路径*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 文件类别-业务分类*/
  otherFiles?: string;
  /* 备注信息*/
  otherFiles?: string;
  /* 业务数据ID*/
  otherFiles?: string;
  /* 文件状态：1，正常 2，删除*/
  otherFiles?: string;
  /* 文档id*/
  otherFiles?: string;
  /* 经办员*/
  otherFiles?: string;
  /* 审核员*/
  otherFiles?: string;
  /* 文件来源*/
  otherFiles?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  otherFiles?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  otherFiles?: string;
  /* 变更类型*/
  otherFiles?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  otherFiles?: string;
  /* 文件归属企业名*/
  otherFiles?: string;
  /* 状态集合*/
  otherFiles?: string;
  /* 企业名称（非数据库字段）*/
  enterpriseName?: string;
  /* 企业组织机构代码（非数据库字段）*/
  enterpriseOrganCode?: string;
  /* 企业证件类型（非数据库字段）*/
  organCodeType?: string;
  /* 企业类型（非数据库字段）*/
  enterpriseType?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;

  roleBOList?: string;
  /* ID*/
  roleBOList?: string;
  /* 系统ID(哪个系统的资源)*/
  roleBOList?: string;
  /* 企业ID*/
  roleBOList?: string;
  /* 角色名称*/
  roleBOList?: string;
  /* 角色类型 1:管理员 2.普通角色*/
  roleBOList?: string;
  /* 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR*/
  roleBOList?: string;
  /* 当前状态:0:非选中,1:选中*/
  roleBOList?: string;
  /* 角色状态 0：禁用；1：正常',*/
  roleBOList?: string;

  roleBOList?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;

  ResouceBOMap?: string;
  /* ID*/
  ResouceBOMap?: string;
  /* 系统ID(哪个系统的资源)*/
  ResouceBOMap?: string;
  /* 资源代码*/
  ResouceBOMap?: string;
  /* 资源名称*/
  ResouceBOMap?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  ResouceBOMap?: string;
  /* 路径*/
  ResouceBOMap?: string;
  /* 图标*/
  ResouceBOMap?: string;
  /* 资源状态，0：禁用；1：正常*/
  ResouceBOMap?: string;
  /* 资源排序，从0开始*/
  ResouceBOMap?: string;
  /* 父资源id*/
  ResouceBOMap?: string;
  /* 描述*/
  ResouceBOMap?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  ResouceBOMap?: string;
  /* 当前状态:0:非选中,1:选中*/
  ResouceBOMap?: string;

  ResouceBOMap?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;

  resouceList?: string;
  /* ID*/
  resouceList?: string;
  /* 系统ID(哪个系统的资源)*/
  resouceList?: string;
  /* 资源代码*/
  resouceList?: string;
  /* 资源名称*/
  resouceList?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resouceList?: string;
  /* 路径*/
  resouceList?: string;
  /* 图标*/
  resouceList?: string;
  /* 资源状态，0：禁用；1：正常*/
  resouceList?: string;
  /* 资源排序，从0开始*/
  resouceList?: string;
  /* 父资源id*/
  resouceList?: string;
  /* 描述*/
  resouceList?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  resouceList?: string;
  /* 当前状态:0:非选中,1:选中*/
  resouceList?: string;

  resouceList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;

  fileBOList?: string;
  /* 文件路径*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 备注信息*/
  fileBOList?: string;
  /* 业务数据ID*/
  fileBOList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 文件来源*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileBOList?: string;
  /* 文件归属企业名*/
  fileBOList?: string;
  /* 状态集合*/
  fileBOList?: string;
  /* 随机密码（非数据库字段）*/
  ramdomPwd?: string;
  /* 关联角色表主键（非数据库字段）*/
  roleId?: string;
  /* 是否使用注册账户（非数据库字段）*/
  isUserRegAccount?: string;
  /* 创建日期开始（非数据库字段）*/
  startCreateTime?: string;
  /* 创建日期结束（非数据库字段）*/
  endCreateTime?: string;
  /* 企业状态（非数据库字段）*/
  enterpriseState?: string;
  /* 企业来源（非数据库字段）*/
  enterpriseSource?: string;
  /* 是否存在证件过期（非数据库字段）, f, a, l, s, e*/
  isCertificateExpired?: string;
  /* 过期的证件列表（非数据库字段）*/
  expiredCertList?: string;
  /* 证书是否过期（非数据库字段）*/
  isUkeyExpired?: string;
  /* ukeyId（非数据库字段）*/
  ukeyId?: string;
  /* 企业入驻服务条款同意：1 （非数据库字段）*/
  termsOfService?: string;

  licenseNumber?: string;

  legalRepresentative?: string;

  legalRepresentativeIdType?: string;
  /* 上级领导mip账号(非数据库字段)*/
  leaderMip?: string;
  /* 组长id*/
  leaderId?: string;
  /* 组长姓名*/
  leaderName?: string;
  /* ukey是否已交钱,1:已交钱*/
  isUkeyCharged?: string;
  /* 企业等级*/
  enterpriseGrade?: string;
  /* 是否邮寄ukey*/
  isSendUkey?: string;
  /* 是否美的企业标识*/
  isMidea?: string;
  /* 消息模板编码*/
  messageCode?: string;
  /* 是否在白名单N-否 Y-是*/
  inWhiteList?: string;
}

/*
 *@序号:169
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:企业端人员管理(https://apaas-yapi.midea.com/project/7260/interface/api/745483)
 */

export function systemEntUserFindList(data?: IFindListParams) {
  return ajax<IFindListParams, any>({
    url: `/system/entUser/find/list`,
    method: "post",
    data,
  });
}

export interface IRoleFindParams {
  userId: string;
}

/*
 *@序号:170
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:findUserAndRoleByUserId(https://apaas-yapi.midea.com/project/7260/interface/api/745486)
 */

export function systemUserRoleFind(data?: IRoleFindParams) {
  return ajax<IRoleFindParams, any>({
    url: `/system/user_role/find`,
    method: "post",
    data,
  });
}

/*
 *@序号:171
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:createUserName(https://apaas-yapi.midea.com/project/7260/interface/api/745489)
 */

export function systemUsernameCreate(data?: any) {
  return ajax<any, any>({
    url: `/system/username/create`,
    method: "post",
    data,
  });
}

export interface IEntUserParams {
  /* 企业名称*/
  enterpriseName?: string;
  /* 操作员名称*/
  realName?: string;
  /* ukey状态， 0：未绑定，1：已绑定，2：已过期
字典：PubConstants.BindState*/
  bindState?: string;
  /* 证书类型，1:天威，2:CFCA
字典：PubConstants.UkeyCertType*/
  ukeyCertType?: string;

  pageNumber: string;

  pageSize: string;
}

/*
 *@序号:172
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectUKeyEntUser(https://apaas-yapi.midea.com/project/7260/interface/api/745492)
 */

export function systemUserSelectUKeyEntUser(data?: IEntUserParams) {
  return ajax<IEntUserParams, any>({
    url: `/system/user/selectUKeyEntUser`,
    method: "post",
    data,
  });
}

export interface IUserExportParams {
  /* 企业名称*/
  enterpriseName?: string;
  /* 操作员名称*/
  realName?: string;
  /* ukey状态， 0：未绑定，1：已绑定，2：已过期
字典：PubConstants.BindState*/
  bindState?: string;
  /* 证书类型，1:天威，2:CFCA
字典：PubConstants.UkeyCertType*/
  ukeyCertType?: string;

  pageNumber: string;

  pageSize: string;
}

/*
 *@序号:173
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:exportUkeyEntUser(https://apaas-yapi.midea.com/project/7260/interface/api/745495)
 */

export function systemUserSelectUKeyEntUserExport(data?: IUserExportParams) {
  return ajax<IUserExportParams, any>({
    url: `/system/user/selectUKeyEntUser/export`,
    method: "post",
    data,
  });
}

export interface IUserFindParams {
  userName: string;

  roleCode: string;
}

/*
 *@序号:174
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:findEcrUser(https://apaas-yapi.midea.com/project/7260/interface/api/745498)
 */

export function systemUserFind(data?: IUserFindParams) {
  return ajax<IUserFindParams, any>({
    url: `/system/user/find`,
    method: "post",
    data,
  });
}

export interface IUserInfoParams {
  userId: string;
}

/*
 *@序号:175
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:addWhiteList(https://apaas-yapi.midea.com/project/7260/interface/api/745501)
 */

export function systemSyncUserInfo(data?: IUserInfoParams) {
  return ajax<IUserInfoParams, any>({
    url: `/system/syncUserInfo`,
    method: "post",
    data,
  });
}

/*
 *@序号:176
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:getPublicKey(https://apaas-yapi.midea.com/project/7260/interface/api/745504)
 */

export function systemPublicKey(params?: any) {
  return ajax<any, any>({ url: `/system/public-key`, method: "get", params });
}

export interface IItosResendParams {
  itosId: string;
}

/*
 *@序号:177
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138785)
 *@菜单名称:reSend(https://apaas-yapi.midea.com/project/7260/interface/api/745507)
 */

export function sysItosResend(data?: IItosResendParams) {
  return ajax<IItosResendParams, any>({
    url: `/sys/itos/resend`,
    method: "post",
    data,
  });
}

export interface ISysItosParams {
  /* 业务流水号*/
  bizNo?: string;
  /* 处理状态*/
  handStatus?: string;
  /* 上游系统业务单号*/
  sourceBizNo?: string;
  /* 原始单据来源业务单号*/
  originalBizNo?: string;
  /* 美易单号*/
  billcode?: string;

  pageNumber: string;

  pageSize: string;
}
export interface ISysItosData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单号
   */
  billcode?: string;
  bizNo?: string;
  createBy?: string;
  createTime?: string;
  handCount?: number;
  handStatus?: string;
  handStatusCn?: string;
  /**
   * 主键
   */
  itosId?: number;
  message?: string;
  modifyBy?: string;
  modifyTime?: string;
  priority?: number;
  remark?: string;
  type?: string;
  typeCn?: string;
  [property: string]: any;
}

/*
 *@序号:178
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138785)
 *@菜单名称:querySysItos(https://apaas-yapi.midea.com/project/7260/interface/api/745510)
 */

export function sysItosQuerySysItos(data?: ISysItosParams) {
  return ajax<ISysItosParams, ISysItosData>({
    url: `/sys/itos/querySysItos`,
    method: "post",
    data,
  });
}

export interface IConfirmFailParams {
  /* id*/
  itosId: string;
  /* 备注*/
  remark: string;
}

/*
 *@序号:179
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138785)
 *@菜单名称:confirmFail(https://apaas-yapi.midea.com/project/7260/interface/api/745513)
 */

export function sysItosConfirmFail(data?: IConfirmFailParams) {
  return ajax<IConfirmFailParams, any>({
    url: `/sys/itos/confirmFail`,
    method: "post",
    data,
  });
}

/*
 *@序号:180
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138787)
 *@菜单名称:health(https://apaas-yapi.midea.com/project/7260/interface/api/745516)
 */

export function actuatorHealth(data?: any) {
  return ajax<any, any>({ url: `/actuator/health`, method: "post", data });
}

export interface IDeleteLockParams {
  key: string;
}

/*
 *@序号:181
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:预留用例，清除redis指定key(https://apaas-yapi.midea.com/project/7260/interface/api/745519)
 */

export function systemDeleteLock(data?: IDeleteLockParams) {
  return ajax<IDeleteLockParams, any>({
    url: `/system/deleteLock`,
    method: "post",
    data,
  });
}

export interface IContractAsyncParams {
  tdIdAndTypeDTOListStr: string;

  entId: string;

  certSerialNumber: string;
}

/*
 *@序号:182
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:getContractAsync(https://apaas-yapi.midea.com/project/7260/interface/api/745522)
 */

export function systemGetContractAsync(data?: IContractAsyncParams) {
  return ajax<IContractAsyncParams, any>({
    url: `/system/getContractAsync`,
    method: "post",
    data,
  });
}

export interface IEntAccParams {
  token: string;

  coreEntId: string;
}

/*
 *@序号:183
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询农行1.9接口(https://apaas-yapi.midea.com/project/7260/interface/api/745525)
 */

export function systemSearchEntAcc(data?: IEntAccParams) {
  return ajax<IEntAccParams, any>({
    url: `/system/searchEntAcc`,
    method: "post",
    data,
  });
}

export interface IEntAccspParams {
  token: string;

  coreEntId: string;

  businessCode?: string;
}

/*
 *@序号:184
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询农行1.9接口searchEntAcc4sp(https://apaas-yapi.midea.com/project/7260/interface/api/745528)
 */

export function systemSearchEntAccsp(data?: IEntAccspParams) {
  return ajax<IEntAccspParams, any>({
    url: `/system/searchEntAcc4sp`,
    method: "post",
    data,
  });
}

export interface ISearchDirectParams {
  token: string;
  /* 企业ID*/
  enterpriseId: string;
}

/*
 *@序号:185
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询邮储建档申请结果(https://apaas-yapi.midea.com/project/7260/interface/api/745531)
 */

export function systemSignupSearchDirect(data?: ISearchDirectParams) {
  return ajax<ISearchDirectParams, any>({
    url: `/system/signupSearch/direct`,
    method: "post",
    data,
  });
}

export interface ISearchNormalParams {
  token: string;
  /* 企业ID*/
  enterpriseId: string;
}

/*
 *@序号:186
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询邮储建档申请结果(https://apaas-yapi.midea.com/project/7260/interface/api/745534)
 */

export function systemSignupSearchNormal(data?: ISearchNormalParams) {
  return ajax<ISearchNormalParams, any>({
    url: `/system/signupSearch/normal`,
    method: "post",
    data,
  });
}

export interface IEximResultParams {
  token: string;

  enterpriseId: string;
}

/*
 *@序号:187
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:eximQueryResult(https://apaas-yapi.midea.com/project/7260/interface/api/745537)
 */

export function systemEximResult(data?: IEximResultParams) {
  return ajax<IEximResultParams, any>({
    url: `/system/exim/result`,
    method: "post",
    data,
  });
}

type IUrlTestParams = undefined;

/*
 *@序号:188
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:(上线测试KONG网关接口）(https://apaas-yapi.midea.com/project/7260/interface/api/745540)
 */

export function systemKongUrlTest(data?: IUrlTestParams) {
  return ajax<IUrlTestParams, any>({
    url: `/system/kong/url/test`,
    method: "post",
    data,
  });
}

export interface ICheckEntmgrParams {
  token: string;
}

/*
 *@序号:189
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:探测entmgr表mgrID和user表userid是否一致(https://apaas-yapi.midea.com/project/7260/interface/api/745543)
 */

export function systemCheckEntmgr(params?: ICheckEntmgrParams) {
  return ajax<ICheckEntmgrParams, any>({
    url: `/system/check/entmgr`,
    method: "get",
    params,
  });
}

export interface IRateTestParams {
  token: string;

  certCode: string;
}

/*
 *@序号:190
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:巡检顺农商利率查询接口(https://apaas-yapi.midea.com/project/7260/interface/api/745546)
 */

export function systemSdbankRateTest(data?: IRateTestParams) {
  return ajax<IRateTestParams, any>({
    url: `/system/sdbank/rate/test`,
    method: "post",
    data,
  });
}

export interface IBalanceTestParams {
  token: string;

  account: string;
}

/*
 *@序号:191
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:巡检查询农行账户余额接口(https://apaas-yapi.midea.com/project/7260/interface/api/745549)
 */

export function systemAbcBalanceTest(data?: IBalanceTestParams) {
  return ajax<IBalanceTestParams, any>({
    url: `/system/abc/balance/test`,
    method: "post",
    data,
  });
}

export interface ICommonConstantParams {
  constantClassName?: string;
}
export interface ICommonConstantData {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/*
 *@序号:192
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:commonConstant(https://apaas-yapi.midea.com/project/7260/interface/api/745552)
 */

export function systemCommonConstant(data?: ICommonConstantParams) {
  return ajax<ICommonConstantParams, ICommonConstantData>({
    url: `/system/common/constant`,
    method: "post",
    data,
  });
}

export interface IRLParams {
  fileId: string;
}

/*
 *@序号:193
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:downLoadFileFromURL(https://apaas-yapi.midea.com/project/7260/interface/api/745555)
 */

export function systemCommonDownloadFromURL(data?: IRLParams) {
  return ajax<IRLParams, any>({
    url: `/system/common/downloadFromURL`,
    method: "post",
    data,
  });
}

export interface IQueryBizfileParams {
  bizId: string;

  fileSrc: string;
}
export interface IQueryBizfileData {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/*
 *@序号:194
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:getBizFile(https://apaas-yapi.midea.com/project/7260/interface/api/745558)
 */

export function systemQueryBizfile(data?: IQueryBizfileParams) {
  return ajax<IQueryBizfileParams, IQueryBizfileData>({
    url: `/system/query/bizfile`,
    method: "post",
    data,
  });
}

export interface ICommonUploadParams {
  uploadFile: File;
}
export interface ICommonUploadData {
  createUserId?: string;
  docId?: number;
  file?: number[];
  fileName?: string;
  filePath?: string;
  size?: number;
  [property: string]: any;
}

/*
 *@序号:195
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:fileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/745561)
 */

export function systemCommonUpload(data?: ICommonUploadParams) {
  return ajax<ICommonUploadParams, ICommonUploadData>({
    url: `/system/common/upload`,
    method: "post",
    data,
  });
}

export interface ICommonDownloadParams {
  docId: string;
}

/*
 *@序号:196
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:downloadDoc(https://apaas-yapi.midea.com/project/7260/interface/api/745564)
 */

export function systemCommonDownload(data?: ICommonDownloadParams) {
  return ajax<ICommonDownloadParams, any>({
    url: `/system/common/download`,
    method: "post",
    data,
  });
}

export interface IDeleteFileParams {
  /* t_ebill_sys_file表主键*/
  fileId: string;
}

/*
 *@序号:197
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:删除文件(https://apaas-yapi.midea.com/project/7260/interface/api/745567)
 */

export function systemCommonDeleteFile(data?: IDeleteFileParams) {
  return ajax<IDeleteFileParams, any>({
    url: `/system/common/deleteFile`,
    method: "post",
    data,
  });
}

export interface IDeleteCancelParams {
  fileIds: string;
}

/*
 *@序号:198
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:取消时，删除没有保存的文件(https://apaas-yapi.midea.com/project/7260/interface/api/745570)
 */

export function systemCommonDeleteCancel(data?: IDeleteCancelParams) {
  return ajax<IDeleteCancelParams, any>({
    url: `/system/common/delete/cancel`,
    method: "post",
    data,
  });
}

export interface ISelectFileParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  fileId?: string;

  fileName?: string;
  /* 文件路径*/
  filePath?: string;
  /* 文件类别-业务分类*/
  fileType?: string;
  /* 文件类别-业务分类*/
  fileTypes?: string;
  /* 备注信息*/
  remark?: string;
  /* 业务数据ID*/
  bizId?: string;
  /* 文件状态：1，正常 2，删除*/
  state?: string;
  /* 文档id*/
  documentId?: string;
  /* 经办员*/
  clerker?: string;
  /* 审核员*/
  auditor?: string;
  /* 文件来源*/
  source?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  category?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  commitClient?: string;
  /* 变更类型*/
  changeType?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  isBackstageUpload?: string;
  /* 文件归属企业名*/
  ownEnterpriseName?: string;
  /* 状态集合*/
  fileTypeList?: string;
}

/*
 *@序号:199
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:查找文件(https://apaas-yapi.midea.com/project/7260/interface/api/745573)
 */

export function systemCommonSelectFile(data?: ISelectFileParams) {
  return ajax<ISelectFileParams, any>({
    url: `/system/common/selectFile`,
    method: "post",
    data,
  });
}

export interface IArchviesUploadParams {
  uploadFile: File;
}
export interface IArchviesUploadData {
  createUserId?: string;
  docId?: number;
  file?: number[];
  fileName?: string;
  filePath?: string;
  size?: number;
  [property: string]: any;
}

/*
 *@序号:200
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:archviesFileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/745576)
 */

export function systemArchviesUpload(data?: IArchviesUploadParams) {
  return ajax<IArchviesUploadParams, IArchviesUploadData>({
    url: `/system/archvies/upload`,
    method: "post",
    data,
  });
}

export interface IQuotaUploadParams {
  uploadFile: File;
}
export interface IQuotaUploadData {
  createUserId?: string;
  docId?: number;
  file?: number[];
  fileName?: string;
  filePath?: string;
  size?: number;
  [property: string]: any;
}

/*
 *@序号:201
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:quotaFileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/745579)
 */

export function systemQuotaUpload(data?: IQuotaUploadParams) {
  return ajax<IQuotaUploadParams, IQuotaUploadData>({
    url: `/system/quota/upload`,
    method: "post",
    data,
  });
}

export interface IRegionListParams {
  parentCode?: string;
}
export interface IRegionListData {
  /**
   * 省市县编码
   */
  areaCode?: string;
  /**
   * 省市县名称
   */
  areaName?: string;
  /**
   * 类型1 省 2 市 3 区
   */
  areaType?: number;
  /**
   * 操作步骤1已保存,2审核中,3已启用,4已驳回,5删除中,6已删除,7修改中'
   */
  operate?: string;
  /**
   * 父级编码省的父级编码为-1
   */
  parentCode?: string;
  /**
   * 数据状态1-有效 2-无效
   */
  status?: string;
  /**
   * 英文名称
   */
  usName?: string;
  [property: string]: any;
}

/*
 *@序号:202
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:edpRegionList(https://apaas-yapi.midea.com/project/7260/interface/api/745582)
 */

export function systemEdpRegionList(data?: IRegionListParams) {
  return ajax<IRegionListParams, IRegionListData>({
    url: `/system/edp/region/list`,
    method: "post",
    data,
  });
}

export interface IRegionListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* pk*/
  regionId?: string;
  /* 上级id*/
  parentId?: string;
  /* 行政区域代码*/
  regionCode?: string;
  /* 行政区域名称*/
  regionName?: string;
  /* 显示序号*/
  displayNo?: string;
  /* 备注*/
  remark?: string;
  /* 最近更新人*/
  updateBy?: string;
  /* 最近更新时间*/
  updateTime?: string;
  /* 区域级别 1-省*/
  regionLevel?: string;
}

/*
 *@序号:203
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138793)
 *@菜单名称:查询 [运营端][系统模块][省市信息](https://apaas-yapi.midea.com/project/7260/interface/api/745585)
 */

export function systemRegionList(data?: IRegionListParams) {
  return ajax<IRegionListParams, any>({
    url: `/system/region/list`,
    method: "post",
    data,
  });
}

export interface IChildrensListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* pk*/
  regionId?: string;
  /* 上级id*/
  parentId?: string;
  /* 行政区域代码*/
  regionCode?: string;
  /* 行政区域名称*/
  regionName?: string;
  /* 显示序号*/
  displayNo?: string;
  /* 备注*/
  remark?: string;
  /* 最近更新人*/
  updateBy?: string;
  /* 最近更新时间*/
  updateTime?: string;
  /* 区域级别 1-省*/
  regionLevel?: string;
}

/*
 *@序号:204
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138793)
 *@菜单名称:查询 [运营端][系统模块][省市信息](https://apaas-yapi.midea.com/project/7260/interface/api/745588)
 */

export function systemRegionChildrensList(data?: IChildrensListParams) {
  return ajax<IChildrensListParams, any>({
    url: `/system/region/childrensList`,
    method: "post",
    data,
  });
}

export interface IFinResyncParams {
  id?: string;
}

/*
 *@序号:205
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745591)
 */

export function invoiceSyncFinResync(data?: IFinResyncParams) {
  return ajax<IFinResyncParams, any>({
    url: `/invoice/sync/fin/resync`,
    method: "post",
    data,
  });
}

/*
 *@序号:206
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745594)
 */

export function invoiceSyncFinResyncBatch(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/fin/resync/batch`,
    method: "post",
    data,
  });
}

export interface IFinSyncParams {
  invoiceNo?: string;

  invoiceCode?: string;
}

/*
 *@序号:207
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票池同步(https://apaas-yapi.midea.com/project/7260/interface/api/745597)
 */

export function invoiceSyncFinSync(data?: IFinSyncParams) {
  return ajax<IFinSyncParams, any>({
    url: `/invoice/sync/fin/sync`,
    method: "post",
    data,
  });
}

export interface IResellResyncParams {
  id?: string;
}

/*
 *@序号:208
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745600)
 */

export function invoiceSyncResellResync(data?: IResellResyncParams) {
  return ajax<IResellResyncParams, any>({
    url: `/invoice/sync/resell/resync`,
    method: "post",
    data,
  });
}

/*
 *@序号:209
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745603)
 */

export function invoiceSyncResellResyncBatch(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/resell/resync/batch`,
    method: "post",
    data,
  });
}

export interface IResellSyncParams {
  invoiceNo?: string;

  invoiceCode?: string;
}

/*
 *@序号:210
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745606)
 */

export function invoiceSyncResellSync(data?: IResellSyncParams) {
  return ajax<IResellSyncParams, any>({
    url: `/invoice/sync/resell/sync`,
    method: "post",
    data,
  });
}

/*
 *@序号:211
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745609)
 */

export function invoiceSyncResellSyncBatch(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/resell/sync/batch`,
    method: "post",
    data,
  });
}

/*
 *@序号:212
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票池专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745612)
 */

export function invoiceSyncRevisingInvoiceType(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/revising/invoice/type`,
    method: "post",
    data,
  });
}

/*
 *@序号:213
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票池专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745615)
 */

export function invoiceSyncRevisingResellInvoiceType(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/revising/resell/invoice/type`,
    method: "post",
    data,
  });
}

/*
 *@序号:214
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票开具专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745618)
 */

export function invoiceSyncRevisingOccupyInvoiceType(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/revising/occupy/invoice/type`,
    method: "post",
    data,
  });
}

/*
 *@序号:215
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票上传记录专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745621)
 */

export function invoiceSyncRevisingInvoiceUpload(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/revising/invoice/upload`,
    method: "post",
    data,
  });
}

/*
 *@序号:216
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票验证记录专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745624)
 */

export function invoiceSyncRevisingInvoiceVerify(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/revising/invoice/verify`,
    method: "post",
    data,
  });
}

/*
 *@序号:217
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理快照专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745627)
 */

export function invoiceSyncRevisingResellSnap(data?: any) {
  return ajax<any, any>({
    url: `/invoice/sync/revising/resell/snap`,
    method: "post",
    data,
  });
}

export interface IMessageListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  messageId?: string;
  /* 消息标题*/
  title?: string;
  /* 消息内容*/
  content?: string;
  /* 发送者ID*/
  senderId?: string;
  /* 介绍者ID*/
  receiverId?: string;
  /* 是否已读，0：未读；1：已读；*/
  isRead?: string;
  /* 发送时间*/
  sendTime?: string;
  /* 阅读时间*/
  readTime?: string;
  /* 接收者名称*/
  receiverName?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 组织ID*/
  orgId?: string;
}

/*
 *@序号:218
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745630)
 */

export function systemMessageList(data?: IMessageListParams) {
  return ajax<IMessageListParams, any>({
    url: `/system/message/list`,
    method: "post",
    data,
  });
}

export interface IMessageGetParams {
  ID?: string;
}
export interface IMessageGetData {
  /**
   * 消息内容
   */
  content?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 是否已读，0：未读；1：已读；
   */
  isRead?: number;
  /**
   * 主键
   */
  messageId?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 组织ID
   */
  orgId?: number;
  /**
   * 阅读时间
   */
  readTime?: string;
  /**
   * 介绍者ID
   */
  receiverId?: string;
  /**
   * 接收者名称
   */
  receiverName?: string;
  /**
   * 发送者ID
   */
  senderId?: string;
  /**
   * 发送时间
   */
  sendTime?: string;
  /**
   * 消息标题
   */
  title?: string;
  [property: string]: any;
}

/*
 *@序号:219
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745633)
 */

export function systemMessagebyIDGet(id?: IMessageGetParams) {
  return ajax<IMessageGetParams, IMessageGetData>({
    url: `/system/message/${id}/get`,
    method: "post",
  });
}

export interface IMessageUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  messageId?: string;
  /* 消息标题*/
  title?: string;
  /* 消息内容*/
  content?: string;
  /* 发送者ID*/
  senderId?: string;
  /* 介绍者ID*/
  receiverId?: string;
  /* 是否已读，0：未读；1：已读；*/
  isRead?: string;
  /* 发送时间*/
  sendTime?: string;
  /* 阅读时间*/
  readTime?: string;
  /* 接收者名称*/
  receiverName?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 组织ID*/
  orgId?: string;
}

/*
 *@序号:220
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745636)
 */

export function systemMessageUpdate(data?: IMessageUpdateParams) {
  return ajax<IMessageUpdateParams, any>({
    url: `/system/message/update`,
    method: "post",
    data,
  });
}

export interface ISetReadParams {
  /* (0,1,2,3)*/
  messageIds: string;
}

/*
 *@序号:221
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:setRead(https://apaas-yapi.midea.com/project/7260/interface/api/745639)
 */

export function systemMessageSetRead(data?: ISetReadParams) {
  return ajax<ISetReadParams, any>({
    url: `/system/message/setRead`,
    method: "post",
    data,
  });
}

export interface IMessagePaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  messageId?: string;
  /* 消息标题*/
  title?: string;
  /* 消息内容*/
  content?: string;
  /* 发送者ID*/
  senderId?: string;
  /* 介绍者ID*/
  receiverId?: string;
  /* 是否已读，0：未读；1：已读；*/
  isRead?: string;
  /* 发送时间*/
  sendTime?: string;
  /* 阅读时间*/
  readTime?: string;
  /* 接收者名称*/
  receiverName?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 组织ID*/
  orgId?: string;
}
export interface IMessagePaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:222
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745642)
 */

export function systemMessagePagination(data?: IMessagePaginationParams) {
  return ajax<IMessagePaginationParams, IMessagePaginationData>({
    url: `/system/message/pagination`,
    method: "post",
    data,
  });
}

export interface IResouceAddParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  resId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 资源代码*/
  resourceCode?: string;
  /* 资源名称*/
  resourceName?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resType?: string;
  /* 路径*/
  resUri?: string;
  /* 图标*/
  icon?: string;
  /* 资源状态，0：禁用；1：正常*/
  resStatus?: string;
  /* 资源排序，从0开始*/
  sort?: string;
  /* 父资源id*/
  parentId?: string;
  /* 描述*/
  description?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  systemSub?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* ID*/
  childrens?: string;
  /* 系统ID(哪个系统的资源)*/
  childrens?: string;
  /* 资源代码*/
  childrens?: string;
  /* 资源名称*/
  childrens?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  childrens?: string;
  /* 路径*/
  childrens?: string;
  /* 图标*/
  childrens?: string;
  /* 资源状态，0：禁用；1：正常*/
  childrens?: string;
  /* 资源排序，从0开始*/
  childrens?: string;
  /* 父资源id*/
  childrens?: string;
  /* 描述*/
  childrens?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  childrens?: string;
  /* 当前状态:0:非选中,1:选中*/
  childrens?: string;

  childrens?: string;
}

/*
 *@序号:223
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:insertResouce(https://apaas-yapi.midea.com/project/7260/interface/api/745645)
 */

export function systemResouceAdd(data?: IResouceAddParams) {
  return ajax<IResouceAddParams, any>({
    url: `/system/resouce/add`,
    method: "post",
    data,
  });
}

export interface IResouceDelParams {
  ID?: string;
}

/*
 *@序号:224
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745648)
 */

export function systemResoucebyIDDel(id?: IResouceDelParams) {
  return ajax<IResouceDelParams, any>({
    url: `/system/resouce/${id}/del`,
    method: "post",
  });
}

export interface IResouceUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  resId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 资源代码*/
  resourceCode?: string;
  /* 资源名称*/
  resourceName?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resType?: string;
  /* 路径*/
  resUri?: string;
  /* 图标*/
  icon?: string;
  /* 资源状态，0：禁用；1：正常*/
  resStatus?: string;
  /* 资源排序，从0开始*/
  sort?: string;
  /* 父资源id*/
  parentId?: string;
  /* 描述*/
  description?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  systemSub?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* ID*/
  childrens?: string;
  /* 系统ID(哪个系统的资源)*/
  childrens?: string;
  /* 资源代码*/
  childrens?: string;
  /* 资源名称*/
  childrens?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  childrens?: string;
  /* 路径*/
  childrens?: string;
  /* 图标*/
  childrens?: string;
  /* 资源状态，0：禁用；1：正常*/
  childrens?: string;
  /* 资源排序，从0开始*/
  childrens?: string;
  /* 父资源id*/
  childrens?: string;
  /* 描述*/
  childrens?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  childrens?: string;
  /* 当前状态:0:非选中,1:选中*/
  childrens?: string;

  childrens?: string;
}

/*
 *@序号:225
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745651)
 */

export function systemResouceUpdate(data?: IResouceUpdateParams) {
  return ajax<IResouceUpdateParams, any>({
    url: `/system/resouce/update`,
    method: "post",
    data,
  });
}

export interface IResouceListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  resId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 资源代码*/
  resourceCode?: string;
  /* 资源名称*/
  resourceName?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resType?: string;
  /* 路径*/
  resUri?: string;
  /* 图标*/
  icon?: string;
  /* 资源状态，0：禁用；1：正常*/
  resStatus?: string;
  /* 资源排序，从0开始*/
  sort?: string;
  /* 父资源id*/
  parentId?: string;
  /* 描述*/
  description?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  systemSub?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* ID*/
  childrens?: string;
  /* 系统ID(哪个系统的资源)*/
  childrens?: string;
  /* 资源代码*/
  childrens?: string;
  /* 资源名称*/
  childrens?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  childrens?: string;
  /* 路径*/
  childrens?: string;
  /* 图标*/
  childrens?: string;
  /* 资源状态，0：禁用；1：正常*/
  childrens?: string;
  /* 资源排序，从0开始*/
  childrens?: string;
  /* 父资源id*/
  childrens?: string;
  /* 描述*/
  childrens?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  childrens?: string;
  /* 当前状态:0:非选中,1:选中*/
  childrens?: string;

  childrens?: string;
}

/*
 *@序号:226
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745654)
 */

export function systemResouceList(data?: IResouceListParams) {
  return ajax<IResouceListParams, any>({
    url: `/system/resouce/list`,
    method: "post",
    data,
  });
}

export interface IChildrensListParams {
  resId: string;

  resourceName: string;
}

/*
 *@序号:227
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745657)
 */

export function systemResouceChildrensList(data?: IChildrensListParams) {
  return ajax<IChildrensListParams, any>({
    url: `/system/resouce/childrensList`,
    method: "post",
    data,
  });
}

export interface IResouceGetParams {
  ID?: string;
}
export interface IResouceGetData {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/*
 *@序号:228
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745660)
 */

export function systemResoucebyIDGet(id?: IResouceGetParams) {
  return ajax<IResouceGetParams, IResouceGetData>({
    url: `/system/resouce/${id}/get`,
    method: "post",
  });
}

export interface IResoucePaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* ID*/
  resId?: string;
  /* 系统ID(哪个系统的资源)*/
  systemId?: string;
  /* 资源代码*/
  resourceCode?: string;
  /* 资源名称*/
  resourceName?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  resType?: string;
  /* 路径*/
  resUri?: string;
  /* 图标*/
  icon?: string;
  /* 资源状态，0：禁用；1：正常*/
  resStatus?: string;
  /* 资源排序，从0开始*/
  sort?: string;
  /* 父资源id*/
  parentId?: string;
  /* 描述*/
  description?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  systemSub?: string;
  /* 当前状态:0:非选中,1:选中*/
  flag?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* ID*/
  childrens?: string;
  /* 系统ID(哪个系统的资源)*/
  childrens?: string;
  /* 资源代码*/
  childrens?: string;
  /* 资源名称*/
  childrens?: string;
  /* 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；*/
  childrens?: string;
  /* 路径*/
  childrens?: string;
  /* 图标*/
  childrens?: string;
  /* 资源状态，0：禁用；1：正常*/
  childrens?: string;
  /* 资源排序，从0开始*/
  childrens?: string;
  /* 父资源id*/
  childrens?: string;
  /* 描述*/
  childrens?: string;
  /* 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端*/
  childrens?: string;
  /* 当前状态:0:非选中,1:选中*/
  childrens?: string;

  childrens?: string;
}
export interface IResoucePaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:229
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745663)
 */

export function systemResoucePagination(data?: IResoucePaginationParams) {
  return ajax<IResoucePaginationParams, IResoucePaginationData>({
    url: `/system/resouce/pagination`,
    method: "post",
    data,
  });
}

export interface IResourceUserParams {
  userid?: string;
}

/*
 *@序号:230
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:userResource(https://apaas-yapi.midea.com/project/7260/interface/api/745666)
 */

export function systemResourceUserbyUserid(userid?: IResourceUserParams) {
  return ajax<IResourceUserParams, any>({
    url: `/system/resource/user/${userid}`,
    method: "post",
  });
}

export interface ILogicDeleteParams {
  ID?: string;
}

/*
 *@序号:231
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:逻辑删除(https://apaas-yapi.midea.com/project/7260/interface/api/745669)
 */

export function systemResourcebyIDLogicDelete(id?: ILogicDeleteParams) {
  return ajax<ILogicDeleteParams, any>({
    url: `/system/resource/${id}/logicDelete`,
    method: "post",
  });
}

export interface IResourceDisableParams {
  ID?: string;
}

/*
 *@序号:232
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:禁用(https://apaas-yapi.midea.com/project/7260/interface/api/745672)
 */

export function systemResourcebyIDDisable(id?: IResourceDisableParams) {
  return ajax<IResourceDisableParams, any>({
    url: `/system/resource/${id}/disable`,
    method: "post",
  });
}

export interface IResourceEnableParams {
  ID?: string;
}

/*
 *@序号:233
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:启用(https://apaas-yapi.midea.com/project/7260/interface/api/745675)
 */

export function systemResourcebyIDEnable(id?: IResourceEnableParams) {
  return ajax<IResourceEnableParams, any>({
    url: `/system/resource/${id}/enable`,
    method: "post",
  });
}

export interface IResourceRoleParams {
  roleId?: string;
}

/*
 *@序号:234
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:roleResource(https://apaas-yapi.midea.com/project/7260/interface/api/745678)
 */

export function systemResourceRolebyRoleId(roleid?: IResourceRoleParams) {
  return ajax<IResourceRoleParams, any>({
    url: `/system/resource/role/${roleid}`,
    method: "post",
  });
}

type ISelectAllParams = undefined;

export interface ISelectAllData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 统一社会信用代码
   */
  certMergCode?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 主数据企业客户编码
   */
  custId?: string;
  /**
   * 是否有效 1-有效 2-无效
   */
  effectiveFlag?: number;
  /**
   * 是否有效 1-有效 2-无效
   */
  effectiveFlagStr?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称
   */
  enterpriseName?: string;
  /**
   * 附件
   */
  fileList?: FileList[];
  /**
   * 是否强制Y-是 N-否
   */
  forceSignFlag?: string;
  /**
   * 处理意见
   */
  handleOpinion?: string;
  /**
   * 处理人
   */
  handlerName?: string;
  /**
   * 处理时间
   */
  handleTime?: string;
  /**
   * 处理时间
   */
  handleTimeStr?: string;
  /**
   * 主键
   */
  id?: number;
  /**
   * 证件号码
   */
  idNumber?: string;
  /**
   * 签约人证件类型身份证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证
   */
  idType?: number;
  /**
   * 签约人证件类型身份证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证
   */
  idTypeStr?: string;
  /**
   * 主数据用户编码
   */
  loginId?: string;
  /**
   * 更新人
   */
  modifyBy?: string;
  /**
   * 更新时间
   */
  modifyTime?: string;
  /**
   * 分页页码
   */
  pageNumber?: number;
  /**
   * 分页大小
   */
  pageSize?: number;
  /**
   * 联系电话
   */
  phoneNumber?: string;
  /**
   * 协议类型1-UKEY签收回执
   */
  protocolType?: number;
  /**
   * 协议类型1-UKEY签收回执
   */
  protocolTypeStr?: string;
  /**
   * 签约人
   */
  realName?: string;
  /**
   * 签约途径1-线上签约 2-线下签约
   */
  signChannel?: number;
  /**
   * 签约途径1-线上签约 2-线下签约
   */
  signChannelStr?: string;
  /**
   * 数据来源场景1-手工导入 2-企业入驻新增3-审核员变更新增 4-UKEY补发新增
   */
  signScene?: number;
  /**
   * 数据来源场景1-手工导入 2-企业入驻新增3-审核员变更新增 4-UKEY补发新增
   */
  signSceneStr?: string;
  /**
   * 签约状态1-待签约 2-签约异常 3-已签约
   */
  signState?: number;
  /**
   * 签约状态1-待签约 2-签约异常 3-已签约
   */
  signStateStr?: string;
  /**
   * 签订日期
   */
  signTime?: string;
  /**
   * 签订日期结束-查询条件
   */
  signTimeEnd?: string;
  /**
   * 签订日期开始-查询条件
   */
  signTimeStart?: string;
  /**
   * 签订日期
   */
  signTimeStr?: string;
  /**
   * 用户ID
   */
  userId?: number;
  /**
   * 用户账号
   */
  userName?: string;
  [property: string]: any;
}

export interface FileList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/*
 *@序号:235
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-查询(https://apaas-yapi.midea.com/project/7260/interface/api/745681)
 */

export function systemArchivesSelectAll(data?: ISelectAllParams) {
  return ajax<ISelectAllParams, ISelectAllData>({
    url: `/system/archives/selectAll`,
    method: "post",
    data,
  });
}

export interface IArchivesExportParams {
  /* 主键*/
  id?: string;
  /* 用户ID*/
  userId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 协议类型1-UKEY签收回执*/
  protocolType?: string;
  /* 协议类型1-UKEY签收回执*/
  protocolTypeStr?: string;
  /* 是否强制Y-是 N-否*/
  forceSignFlag?: string;
  /* 是否有效 1-有效 2-无效*/
  effectiveFlag?: string;
  /* 是否有效 1-有效 2-无效*/
  effectiveFlagStr?: string;
  /* 签约人*/
  realName?: string;
  /* 联系电话*/
  phoneNumber?: string;
  /* 签约人证件类型身份证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证*/
  idType?: string;
  /* 签约人证件类型身份证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证*/
  idTypeStr?: string;
  /* 证件号码*/
  idNumber?: string;
  /* 签约途径1-线上签约 2-线下签约*/
  signChannel?: string;
  /* 签约途径1-线上签约 2-线下签约*/
  signChannelStr?: string;
  /* 数据来源场景1-手工导入 2-企业入驻新增3-审核员变更新增 4-UKEY补发新增*/
  signScene?: string;
  /* 数据来源场景1-手工导入 2-企业入驻新增3-审核员变更新增 4-UKEY补发新增*/
  signSceneStr?: string;
  /* 签约状态1-待签约 2-签约异常 3-已签约*/
  signState?: string;
  /* 签约状态1-待签约 2-签约异常 3-已签约*/
  signStateStr?: string;
  /* 签订日期*/
  signTime?: string;
  /* 签订日期*/
  signTimeStr?: string;
  /* 签订日期开始-查询条件*/
  signTimeStart?: string;
  /* 签订日期结束-查询条件*/
  signTimeEnd?: string;
  /* 处理人*/
  handlerName?: string;
  /* 处理时间*/
  handleTime?: string;
  /* 处理时间*/
  handleTimeStr?: string;
  /* 处理意见*/
  handleOpinion?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 更新人*/
  modifyBy?: string;
  /* 更新时间*/
  modifyTime?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;
  /* 流水号*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 文件来源*/
  fileList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileList?: string;
  /* 变更类型*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 文件归属企业名*/
  fileList?: string;
  /* 状态集合*/
  fileList?: string;
  /* 分页页码*/
  pageNumber?: string;
  /* 分页大小*/
  pageSize?: string;
  /* 用户账号*/
  userName?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 主数据企业客户编码*/
  custId?: string;
  /* 主数据用户编码*/
  loginId?: string;
}

/*
 *@序号:236
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-查询导出(https://apaas-yapi.midea.com/project/7260/interface/api/745684)
 */

export function systemArchivesExport(data?: IArchivesExportParams) {
  return ajax<IArchivesExportParams, any>({
    url: `/system/archives/export`,
    method: "post",
    data,
  });
}

export interface ISelectDetailsParams {
  id: string;

  operateType?: string;
}
export interface ISelectDetailsData {
  /**
   * 统一社会信用代码
   */
  certMergCode?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 主数据企业客户编码
   */
  custId?: string;
  /**
   * 是否有效 1-有效 2-无效
   */
  effectiveFlag?: number;
  /**
   * 是否有效 1-有效 2-无效
   */
  effectiveFlagStr?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称
   */
  enterpriseName?: string;
  /**
   * 附件
   */
  fileList?: FileList[];
  /**
   * 是否强制Y-是 N-否
   */
  forceSignFlag?: string;
  /**
   * 处理意见
   */
  handleOpinion?: string;
  /**
   * 处理人
   */
  handlerName?: string;
  /**
   * 处理时间
   */
  handleTime?: string;
  /**
   * 处理时间
   */
  handleTimeStr?: string;
  /**
   * 主键
   */
  id?: number;
  /**
   * 证件号码
   */
  idNumber?: string;
  /**
   * 签约人证件类型身份证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证
   */
  idType?: number;
  /**
   * 签约人证件类型身份证件类型：1-居民身份证; 2-护照; 3-港澳通行证; 4-台湾通行证
   */
  idTypeStr?: string;
  /**
   * 主数据用户编码
   */
  loginId?: string;
  /**
   * 更新人
   */
  modifyBy?: string;
  /**
   * 更新时间
   */
  modifyTime?: string;
  /**
   * 分页页码
   */
  pageNumber?: number;
  /**
   * 分页大小
   */
  pageSize?: number;
  /**
   * 联系电话
   */
  phoneNumber?: string;
  /**
   * 协议类型1-UKEY签收回执
   */
  protocolType?: number;
  /**
   * 协议类型1-UKEY签收回执
   */
  protocolTypeStr?: string;
  /**
   * 签约人
   */
  realName?: string;
  /**
   * 签约途径1-线上签约 2-线下签约
   */
  signChannel?: number;
  /**
   * 签约途径1-线上签约 2-线下签约
   */
  signChannelStr?: string;
  /**
   * 数据来源场景1-手工导入 2-企业入驻新增3-审核员变更新增 4-UKEY补发新增
   */
  signScene?: number;
  /**
   * 数据来源场景1-手工导入 2-企业入驻新增3-审核员变更新增 4-UKEY补发新增
   */
  signSceneStr?: string;
  /**
   * 签约状态1-待签约 2-签约异常 3-已签约
   */
  signState?: number;
  /**
   * 签约状态1-待签约 2-签约异常 3-已签约
   */
  signStateStr?: string;
  /**
   * 签订日期
   */
  signTime?: string;
  /**
   * 签订日期结束-查询条件
   */
  signTimeEnd?: string;
  /**
   * 签订日期开始-查询条件
   */
  signTimeStart?: string;
  /**
   * 签订日期
   */
  signTimeStr?: string;
  /**
   * 用户ID
   */
  userId?: number;
  /**
   * 用户账号
   */
  userName?: string;
  [property: string]: any;
}

export interface FileList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/*
 *@序号:237
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-签约信息详情(https://apaas-yapi.midea.com/project/7260/interface/api/745687)
 */

export function systemArchivesSelectDetails(data?: ISelectDetailsParams) {
  return ajax<ISelectDetailsParams, ISelectDetailsData>({
    url: `/system/archives/selectDetails`,
    method: "post",
    data,
  });
}

export interface IArchivesDisposeParams {
  sysUkeySignManageBO: string;

  fileLists: string;

  buttonType?: string;
}

/*
 *@序号:238
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-处理(https://apaas-yapi.midea.com/project/7260/interface/api/745690)
 */

export function systemArchivesDispose(data?: IArchivesDisposeParams) {
  return ajax<IArchivesDisposeParams, any>({
    url: `/system/archives/dispose`,
    method: "post",
    data,
  });
}

export interface IUkeyreceiptDownloadParams {
  id: string;
}

/*
 *@序号:239
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-UKEY签收回执下载(https://apaas-yapi.midea.com/project/7260/interface/api/745693)
 */

export function systemArchivesUkeyreceiptDownload(
  data?: IUkeyreceiptDownloadParams,
) {
  return ajax<IUkeyreceiptDownloadParams, any>({
    url: `/system/archives/ukeyreceipt/download`,
    method: "post",
    data,
  });
}

export interface IInfoGetParams {
  ID?: string;
}
export interface IInfoGetData {
  /**
   * 银行行别
   */
  bankCategory?: string;
  bankCategoryName?: string;
  /**
   * 联行编码
   */
  bankCode?: string;
  /**
   * 银行名称
   */
  bankName?: string;
  /**
   * 银行类型
   */
  bankType?: string;
  /**
   * 银行所在市编码
   */
  city?: string;
  /**
   * 城市代码
   */
  cityCode?: string;
  createBy?: string;
  /**
   * 创建时间
   */
  createDate?: string;
  createTime?: string;
  /**
   * 银行总行名称
   */
  headBankName?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 网点地址
   */
  outletsAddress?: string;
  /**
   * 联系电话
   */
  phone?: string;
  /**
   * 邮政编码
   */
  postCode?: string;
  /**
   * 银行所在省编码
   */
  province?: string;
  /**
   * 签约银行行号
   */
  signBankCode?: string;
  /**
   * 更新人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateDate?: string;
  [property: string]: any;
}

/*
 *@序号:240
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:查询账号[运营端][系统模块][银行账号]查询(https://apaas-yapi.midea.com/project/7260/interface/api/745696)
 */

export function systemBankInfobyIDGet(id?: IInfoGetParams) {
  return ajax<IInfoGetParams, IInfoGetData>({
    url: `/system/bankInfo/${id}/get`,
    method: "post",
  });
}

export interface IInfoListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 联行编码*/
  bankCode?: string;
  /* 银行总行名称*/
  headBankName?: string;
  /* 银行名称*/
  bankName?: string;
  /* 城市代码*/
  cityCode?: string;
  /* 联系电话*/
  phone?: string;
  /* 邮政编码*/
  postCode?: string;
  /* 网点地址*/
  outletsAddress?: string;
  /* 银行行别*/
  bankCategory?: string;
  /* 银行类型*/
  bankType?: string;
  /* 签约银行行号*/
  signBankCode?: string;
  /* 创建时间*/
  createDate?: string;
  /* 更新人*/
  updateBy?: string;
  /* 更新时间*/
  updateDate?: string;
  /* 银行所在省编码*/
  province?: string;
  /* 银行所在市编码*/
  city?: string;

  bankCategoryName?: string;
}

/*
 *@序号:241
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:查询账号[运营端][系统模块][银行账号]查询(https://apaas-yapi.midea.com/project/7260/interface/api/745699)
 */

export function systemBankInfoList(data?: IInfoListParams) {
  return ajax<IInfoListParams, any>({
    url: `/system/bankInfo/list`,
    method: "post",
    data,
  });
}

export interface IInfoPaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 联行编码*/
  bankCode?: string;
  /* 银行总行名称*/
  headBankName?: string;
  /* 银行名称*/
  bankName?: string;
  /* 城市代码*/
  cityCode?: string;
  /* 联系电话*/
  phone?: string;
  /* 邮政编码*/
  postCode?: string;
  /* 网点地址*/
  outletsAddress?: string;
  /* 银行行别*/
  bankCategory?: string;
  /* 银行类型*/
  bankType?: string;
  /* 签约银行行号*/
  signBankCode?: string;
  /* 创建时间*/
  createDate?: string;
  /* 更新人*/
  updateBy?: string;
  /* 更新时间*/
  updateDate?: string;
  /* 银行所在省编码*/
  province?: string;
  /* 银行所在市编码*/
  city?: string;

  bankCategoryName?: string;
}
export interface IInfoPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:242
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745702)
 */

export function systemBankInfoPagination(data?: IInfoPaginationParams) {
  return ajax<IInfoPaginationParams, IInfoPaginationData>({
    url: `/system/bankInfo/pagination`,
    method: "post",
    data,
  });
}

export interface IByIdParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 联行编码*/
  bankCode?: string;
  /* 银行总行名称*/
  headBankName?: string;
  /* 银行名称*/
  bankName?: string;
  /* 城市代码*/
  cityCode?: string;
  /* 联系电话*/
  phone?: string;
  /* 邮政编码*/
  postCode?: string;
  /* 网点地址*/
  outletsAddress?: string;
  /* 银行行别*/
  bankCategory?: string;
  /* 银行类型*/
  bankType?: string;
  /* 签约银行行号*/
  signBankCode?: string;
  /* 创建时间*/
  createDate?: string;
  /* 更新人*/
  updateBy?: string;
  /* 更新时间*/
  updateDate?: string;
  /* 银行所在省编码*/
  province?: string;
  /* 银行所在市编码*/
  city?: string;

  bankCategoryName?: string;
}
export interface IByIDData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:243
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:分页查询（根据省id和市id）(https://apaas-yapi.midea.com/project/7260/interface/api/745705)
 */

export function systemBankInfoPaginationById(data?: IByIdParams) {
  return ajax<IByIdParams, IByIdData>({
    url: `/system/bankInfo/pagination/byId`,
    method: "post",
    data,
  });
}

export interface IMsgAddParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 通知编号*/
  noticeId?: string;
  /* 通知类型代码-区分通知类型*/
  noticeCode?: string;
  /* 通知标题*/
  noticeTitle?: string;
  /* 通知内容*/
  noticeContent?: string;
  /* 开始发布时间*/
  msgStartTime?: string;
  /* 结束发布时间*/
  msgEndTime?: string;
  /* 通知状态;1-有效,2-作废*/
  noticeState?: string;
  /* 公告开始时间String类型*/
  mgsStartStr?: string;
  /* 公告截止时间String类型*/
  mgsEndStr?: string;
}

/*
 *@序号:244
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745708)
 */

export function systemNoticeMsgAdd(data?: IMsgAddParams) {
  return ajax<IMsgAddParams, any>({
    url: `/system/noticeMsg/add`,
    method: "post",
    data,
  });
}

export interface IMsgDelParams {
  noticeId?: string;
}

/*
 *@序号:245
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745711)
 */

export function systemNoticeMsgbyNoticeIdDel(noticeid?: IMsgDelParams) {
  return ajax<IMsgDelParams, any>({
    url: `/system/noticeMsg/${noticeid}/del`,
    method: "post",
  });
}

export interface IMsgUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 通知编号*/
  noticeId?: string;
  /* 通知类型代码-区分通知类型*/
  noticeCode?: string;
  /* 通知标题*/
  noticeTitle?: string;
  /* 通知内容*/
  noticeContent?: string;
  /* 开始发布时间*/
  msgStartTime?: string;
  /* 结束发布时间*/
  msgEndTime?: string;
  /* 通知状态;1-有效,2-作废*/
  noticeState?: string;
  /* 公告开始时间String类型*/
  mgsStartStr?: string;
  /* 公告截止时间String类型*/
  mgsEndStr?: string;
}

/*
 *@序号:246
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745714)
 */

export function systemNoticeMsgUpdate(data?: IMsgUpdateParams) {
  return ajax<IMsgUpdateParams, any>({
    url: `/system/noticeMsg/update`,
    method: "post",
    data,
  });
}

export interface IMsgListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 通知编号*/
  noticeId?: string;
  /* 通知类型代码-区分通知类型*/
  noticeCode?: string;
  /* 通知标题*/
  noticeTitle?: string;
  /* 通知内容*/
  noticeContent?: string;
  /* 开始发布时间*/
  msgStartTime?: string;
  /* 结束发布时间*/
  msgEndTime?: string;
  /* 通知状态;1-有效,2-作废*/
  noticeState?: string;
  /* 公告开始时间String类型*/
  mgsStartStr?: string;
  /* 公告截止时间String类型*/
  mgsEndStr?: string;
}

/*
 *@序号:247
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:查询所有(https://apaas-yapi.midea.com/project/7260/interface/api/745717)
 */

export function systemNoticeMsgList(data?: IMsgListParams) {
  return ajax<IMsgListParams, any>({
    url: `/system/noticeMsg/list`,
    method: "post",
    data,
  });
}

export interface IMsgGetParams {
  noticeId?: string;
}
export interface IMsgGetData {
  createBy?: string;
  createTime?: string;
  /**
   * 公告截止时间String类型
   */
  mgsEndStr?: string;
  /**
   * 公告开始时间String类型
   */
  mgsStartStr?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 结束发布时间
   */
  msgEndTime?: string;
  /**
   * 开始发布时间
   */
  msgStartTime?: string;
  /**
   * 通知类型代码-区分通知类型
   */
  noticeCode?: string;
  /**
   * 通知内容
   */
  noticeContent?: string;
  /**
   * 通知编号
   */
  noticeId?: number;
  /**
   * 通知状态;1-有效,2-作废
   */
  noticeState?: number;
  /**
   * 通知标题
   */
  noticeTitle?: string;
  [property: string]: any;
}

/*
 *@序号:248
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745720)
 */

export function systemNoticeMsgbyNoticeIdGet(noticeid?: IMsgGetParams) {
  return ajax<IMsgGetParams, IMsgGetData>({
    url: `/system/noticeMsg/${noticeid}/get`,
    method: "post",
  });
}

export interface IMsgPaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 通知编号*/
  noticeId?: string;
  /* 通知类型代码-区分通知类型*/
  noticeCode?: string;
  /* 通知标题*/
  noticeTitle?: string;
  /* 通知内容*/
  noticeContent?: string;
  /* 开始发布时间*/
  msgStartTime?: string;
  /* 结束发布时间*/
  msgEndTime?: string;
  /* 通知状态;1-有效,2-作废*/
  noticeState?: string;
  /* 公告开始时间String类型*/
  mgsStartStr?: string;
  /* 公告截止时间String类型*/
  mgsEndStr?: string;
}
export interface IMsgPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:249
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745723)
 */

export function systemNoticeMsgPagination(data?: IMsgPaginationParams) {
  return ajax<IMsgPaginationParams, IMsgPaginationData>({
    url: `/system/noticeMsg/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:250
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:返回给企业端通知公告(https://apaas-yapi.midea.com/project/7260/interface/api/745726)
 */

export function systemEntNoticeMsgGetValidList(data?: any) {
  return ajax<any, any>({
    url: `/system/ent/noticeMsg/getValidList`,
    method: "post",
    data,
  });
}

/*
 *@序号:251
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745729)
 */

export function systemNoticeMsgGetLoginUserDetail(data?: any) {
  return ajax<any, any>({
    url: `/system/noticeMsg/getLoginUserDetail`,
    method: "post",
    data,
  });
}

export interface IParameterGetParams {
  id?: string;
}
export interface IParameterGetData {
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 流水号
   */
  paramId?: number;
  /**
   * 参数名称
   */
  paramName?: string;
  /**
   * 参数值
   */
  paramValue?: string;
  /**
   * 备注
   */
  remark?: string;
  [property: string]: any;
}

/*
 *@序号:252
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:查询 [运营端][系统模块][基础参数](https://apaas-yapi.midea.com/project/7260/interface/api/745732)
 */

export function systemParameterbyIdGet(id?: IParameterGetParams) {
  return ajax<IParameterGetParams, IParameterGetData>({
    url: `/system/parameter/${id}/get`,
    method: "post",
  });
}

export interface IParameterUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  paramId?: string;
  /* 参数名称*/
  paramName?: string;
  /* 参数值*/
  paramValue?: string;
  /* 备注*/
  remark?: string;
  /* 描述*/
  description?: string;
}

/*
 *@序号:253
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:修改 [运营端][系统模块][基础参数](https://apaas-yapi.midea.com/project/7260/interface/api/745735)
 */

export function systemParameterUpdate(data?: IParameterUpdateParams) {
  return ajax<IParameterUpdateParams, any>({
    url: `/system/parameter/update`,
    method: "post",
    data,
  });
}

export interface IParameterListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  paramId?: string;
  /* 参数名称*/
  paramName?: string;
  /* 参数值*/
  paramValue?: string;
  /* 备注*/
  remark?: string;
  /* 描述*/
  description?: string;
}

/*
 *@序号:254
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745738)
 */

export function systemParameterList(data?: IParameterListParams) {
  return ajax<IParameterListParams, any>({
    url: `/system/parameter/list`,
    method: "post",
    data,
  });
}

export interface IParameterPaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  paramId?: string;
  /* 参数名称*/
  paramName?: string;
  /* 参数值*/
  paramValue?: string;
  /* 备注*/
  remark?: string;
  /* 描述*/
  description?: string;
}
export interface IParameterPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:255
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745741)
 */

export function systemParameterPagination(data?: IParameterPaginationParams) {
  return ajax<IParameterPaginationParams, IParameterPaginationData>({
    url: `/system/parameter/pagination`,
    method: "post",
    data,
  });
}

export interface ISellRateData {
  createBy?: string;
  createTime?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 操作类型:add,update,delete
   */
  opType?: string;
  /**
   * 主键
   */
  rateId?: number;
  /**
   * 区间最大值
   */
  rateMax?: number;
  /**
   * 区间最小值
   */
  rateMin?: number;
  /**
   * 利率值
   */
  rateValue?: number;
  /**
   * 备注
   */
  remark?: string;
  [property: string]: any;
}

/*
 *@序号:256
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:getSellRate(https://apaas-yapi.midea.com/project/7260/interface/api/745744)
 */

export function systemParameterSellRate(data?: any) {
  return ajax<any, ISellRateData>({
    url: `/system/parameter/sell/rate`,
    method: "post",
    data,
  });
}

export interface IUpdateRateParams {
  jsonRateList?: string;
}
type IUpdateRateData = string;

/*
 *@序号:257
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:updateSellRate(https://apaas-yapi.midea.com/project/7260/interface/api/745747)
 */

export function systemParameterUpdateRate(data?: IUpdateRateParams) {
  return ajax<IUpdateRateParams, IUpdateRateData>({
    url: `/system/parameter/update/rate`,
    method: "post",
    data,
  });
}

export interface ISetRateParams {
  jsonRateList?: string;
}
type ISetRateData = string;

/*
 *@序号:258
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:setSellRate(https://apaas-yapi.midea.com/project/7260/interface/api/745750)
 */

export function systemParameterSetRate(data?: ISetRateParams) {
  return ajax<ISetRateParams, ISetRateData>({
    url: `/system/parameter/set/rate`,
    method: "post",
    data,
  });
}

export interface IDictionaryAddParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dicId?: string;
  /* 字典名称*/
  dicName?: string;
  /* 字典代码*/
  dicCode?: string;
  /* 父字典ID*/
  parentId?: string;
  /* 树路径id，用;隔开*/
  idPath?: string;
  /* 状态*/
  dicState?: string;
  /* 层级*/
  dicLayer?: string;
  /* 排序*/
  sort?: string;
  /* 描述*/
  description?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* 主键*/
  childrens?: string;
  /* 字典名称*/
  childrens?: string;
  /* 字典代码*/
  childrens?: string;
  /* 父字典ID*/
  childrens?: string;
  /* 树路径id，用;隔开*/
  childrens?: string;
  /* 状态*/
  childrens?: string;
  /* 层级*/
  childrens?: string;
  /* 排序*/
  childrens?: string;
  /* 描述*/
  childrens?: string;

  childrens?: string;
}

/*
 *@序号:259
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:insertDictionary(https://apaas-yapi.midea.com/project/7260/interface/api/745753)
 */

export function systemDictionaryAdd(data?: IDictionaryAddParams) {
  return ajax<IDictionaryAddParams, any>({
    url: `/system/dictionary/add`,
    method: "post",
    data,
  });
}

export interface IDictionaryDelParams {
  ID?: string;
}

/*
 *@序号:260
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745756)
 */

export function systemDictionarybyIDDel(id?: IDictionaryDelParams) {
  return ajax<IDictionaryDelParams, any>({
    url: `/system/dictionary/${id}/del`,
    method: "post",
  });
}

export interface IDictionaryUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dicId?: string;
  /* 字典名称*/
  dicName?: string;
  /* 字典代码*/
  dicCode?: string;
  /* 父字典ID*/
  parentId?: string;
  /* 树路径id，用;隔开*/
  idPath?: string;
  /* 状态*/
  dicState?: string;
  /* 层级*/
  dicLayer?: string;
  /* 排序*/
  sort?: string;
  /* 描述*/
  description?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* 主键*/
  childrens?: string;
  /* 字典名称*/
  childrens?: string;
  /* 字典代码*/
  childrens?: string;
  /* 父字典ID*/
  childrens?: string;
  /* 树路径id，用;隔开*/
  childrens?: string;
  /* 状态*/
  childrens?: string;
  /* 层级*/
  childrens?: string;
  /* 排序*/
  childrens?: string;
  /* 描述*/
  childrens?: string;

  childrens?: string;
}

/*
 *@序号:261
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745759)
 */

export function systemDictionaryUpdate(data?: IDictionaryUpdateParams) {
  return ajax<IDictionaryUpdateParams, any>({
    url: `/system/dictionary/update`,
    method: "post",
    data,
  });
}

export interface IChildrensListParams {
  dicId: string;

  dicName: string;
}

/*
 *@序号:262
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:查询（返回list）(https://apaas-yapi.midea.com/project/7260/interface/api/745762)
 */

export function systemDictionaryChildrensList(data?: IChildrensListParams) {
  return ajax<IChildrensListParams, any>({
    url: `/system/dictionary/childrensList`,
    method: "post",
    data,
  });
}

export interface IDictionaryListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dicId?: string;
  /* 字典名称*/
  dicName?: string;
  /* 字典代码*/
  dicCode?: string;
  /* 父字典ID*/
  parentId?: string;
  /* 树路径id，用;隔开*/
  idPath?: string;
  /* 状态*/
  dicState?: string;
  /* 层级*/
  dicLayer?: string;
  /* 排序*/
  sort?: string;
  /* 描述*/
  description?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* 主键*/
  childrens?: string;
  /* 字典名称*/
  childrens?: string;
  /* 字典代码*/
  childrens?: string;
  /* 父字典ID*/
  childrens?: string;
  /* 树路径id，用;隔开*/
  childrens?: string;
  /* 状态*/
  childrens?: string;
  /* 层级*/
  childrens?: string;
  /* 排序*/
  childrens?: string;
  /* 描述*/
  childrens?: string;

  childrens?: string;
}

/*
 *@序号:263
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:查询（返回list）(https://apaas-yapi.midea.com/project/7260/interface/api/745765)
 */

export function systemDictionaryList(data?: IDictionaryListParams) {
  return ajax<IDictionaryListParams, any>({
    url: `/system/dictionary/list`,
    method: "post",
    data,
  });
}

export interface IDictionaryGetParams {
  ID?: string;
}
export interface IDictionaryGetData {
  /**
   * 子节点
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 字典代码
   */
  dicCode?: string;
  /**
   * 主键
   */
  dicId?: number;
  /**
   * 层级
   */
  dicLayer?: number;
  /**
   * 字典名称
   */
  dicName?: string;
  /**
   * 状态
   */
  dicState?: number;
  /**
   * 树路径id，用;隔开
   */
  idPath?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父字典ID
   */
  parentId?: number;
  /**
   * 排序
   */
  sort?: number;
  [property: string]: any;
}

export interface Children {
  /**
   * 子节点
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 字典代码
   */
  dicCode?: string;
  /**
   * 主键
   */
  dicId?: number;
  /**
   * 层级
   */
  dicLayer?: number;
  /**
   * 字典名称
   */
  dicName?: string;
  /**
   * 状态
   */
  dicState?: number;
  /**
   * 树路径id，用;隔开
   */
  idPath?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父字典ID
   */
  parentId?: number;
  /**
   * 排序
   */
  sort?: number;
  [property: string]: any;
}

/*
 *@序号:264
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745768)
 */

export function systemDictionarybyIDGet(id?: IDictionaryGetParams) {
  return ajax<IDictionaryGetParams, IDictionaryGetData>({
    url: `/system/dictionary/${id}/get`,
    method: "post",
  });
}

export interface IDictionaryPaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dicId?: string;
  /* 字典名称*/
  dicName?: string;
  /* 字典代码*/
  dicCode?: string;
  /* 父字典ID*/
  parentId?: string;
  /* 树路径id，用;隔开*/
  idPath?: string;
  /* 状态*/
  dicState?: string;
  /* 层级*/
  dicLayer?: string;
  /* 排序*/
  sort?: string;
  /* 描述*/
  description?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;

  childrens?: string;
  /* 主键*/
  childrens?: string;
  /* 字典名称*/
  childrens?: string;
  /* 字典代码*/
  childrens?: string;
  /* 父字典ID*/
  childrens?: string;
  /* 树路径id，用;隔开*/
  childrens?: string;
  /* 状态*/
  childrens?: string;
  /* 层级*/
  childrens?: string;
  /* 排序*/
  childrens?: string;
  /* 描述*/
  childrens?: string;

  childrens?: string;
}
export interface IDictionaryPaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:265
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745771)
 */

export function systemDictionaryPagination(data?: IDictionaryPaginationParams) {
  return ajax<IDictionaryPaginationParams, IDictionaryPaginationData>({
    url: `/system/dictionary/pagination`,
    method: "post",
    data,
  });
}

export interface ILogicDeleteParams {
  ID?: string;
}

/*
 *@序号:266
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:逻辑删除(https://apaas-yapi.midea.com/project/7260/interface/api/745774)
 */

export function systemDictionarybyIDLogicDelete(id?: ILogicDeleteParams) {
  return ajax<ILogicDeleteParams, any>({
    url: `/system/dictionary/${id}/logicDelete`,
    method: "post",
  });
}

export interface IDictionaryDisableParams {
  ID?: string;
}

/*
 *@序号:267
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:禁用(https://apaas-yapi.midea.com/project/7260/interface/api/745777)
 */

export function systemDictionarybyIDDisable(id?: IDictionaryDisableParams) {
  return ajax<IDictionaryDisableParams, any>({
    url: `/system/dictionary/${id}/disable`,
    method: "post",
  });
}

export interface IDictionaryEnableParams {
  ID?: string;
}

/*
 *@序号:268
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:启用(https://apaas-yapi.midea.com/project/7260/interface/api/745780)
 */

export function systemDictionarybyIDEnable(id?: IDictionaryEnableParams) {
  return ajax<IDictionaryEnableParams, any>({
    url: `/system/dictionary/${id}/enable`,
    method: "post",
  });
}

export interface IDateAddParams {
  dateValue: string;

  holidayName: string;
}

/*
 *@序号:269
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:insertSystemDate(https://apaas-yapi.midea.com/project/7260/interface/api/745783)
 */

export function systemSystemDateAdd(data?: IDateAddParams) {
  return ajax<IDateAddParams, any>({
    url: `/system/systemDate/add`,
    method: "post",
    data,
  });
}

export interface IDateGetParams {
  ID?: string;
}
export interface IDateGetData {
  createBy?: string;
  createTime?: string;
  /**
   * 主键
   */
  dateId?: number;
  /**
   * 日期
   */
  dateValue?: string;
  /**
   * 节假日名称
   */
  holidayName?: string;
  /**
   * 是否节假日，0：否；1：是；
   */
  isHoliday?: number;
  modifyBy?: string;
  modifyTime?: string;
  [property: string]: any;
}

/*
 *@序号:270
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:查询 [运营端][系统模块][节假日](https://apaas-yapi.midea.com/project/7260/interface/api/745786)
 */

export function systemSystemDatebyIDGet(id?: IDateGetParams) {
  return ajax<IDateGetParams, IDateGetData>({
    url: `/system/systemDate/${id}/get`,
    method: "post",
  });
}

export interface IDateUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dateId?: string;
  /* 日期*/
  dateValue?: string;
  /* 节假日名称*/
  holidayName?: string;
  /* 是否节假日，0：否；1：是；*/
  isHoliday?: string;
}

/*
 *@序号:271
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:修改 [运营端][系统模块][节假日](https://apaas-yapi.midea.com/project/7260/interface/api/745789)
 */

export function systemSystemDateUpdate(data?: IDateUpdateParams) {
  return ajax<IDateUpdateParams, any>({
    url: `/system/systemDate/update`,
    method: "post",
    data,
  });
}

export interface IWeekDayParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dateId?: string;
  /* 日期*/
  dateValue?: string;
  /* 节假日名称*/
  holidayName?: string;
  /* 是否节假日，0：否；1：是；*/
  isHoliday?: string;
}

/*
 *@序号:272
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:取消 [运营端][系统模块][节假日](https://apaas-yapi.midea.com/project/7260/interface/api/745792)
 */

export function systemSystemDateSetWeekDay(data?: IWeekDayParams) {
  return ajax<IWeekDayParams, any>({
    url: `/system/systemDate/setWeekDay`,
    method: "post",
    data,
  });
}

export interface IDateListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dateId?: string;
  /* 日期*/
  dateValue?: string;
  /* 节假日名称*/
  holidayName?: string;
  /* 是否节假日，0：否；1：是；*/
  isHoliday?: string;
}

/*
 *@序号:273
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745795)
 */

export function systemSystemDateList(data?: IDateListParams) {
  return ajax<IDateListParams, any>({
    url: `/system/systemDate/list`,
    method: "post",
    data,
  });
}

export interface IDatePaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dateId?: string;
  /* 日期*/
  dateValue?: string;
  /* 节假日名称*/
  holidayName?: string;
  /* 是否节假日，0：否；1：是；*/
  isHoliday?: string;
}
export interface IDatePaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:274
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745798)
 */

export function systemSystemDatePagination(data?: IDatePaginationParams) {
  return ajax<IDatePaginationParams, IDatePaginationData>({
    url: `/system/systemDate/pagination`,
    method: "post",
    data,
  });
}

export interface IWeekDayParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  dateId?: string;
  /* 日期*/
  dateValue?: string;
  /* 节假日名称*/
  holidayName?: string;
  /* 是否节假日，0：否；1：是；*/
  isHoliday?: string;
}
export interface IWeekDayData {
  createBy?: string;
  createTime?: string;
  /**
   * 主键
   */
  dateId?: number;
  /**
   * 日期
   */
  dateValue?: string;
  /**
   * 节假日名称
   */
  holidayName?: string;
  /**
   * 是否节假日，0：否；1：是；
   */
  isHoliday?: number;
  modifyBy?: string;
  modifyTime?: string;
  [property: string]: any;
}

/*
 *@序号:275
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:查询某个节假日后的第一个工作日(https://apaas-yapi.midea.com/project/7260/interface/api/745801)
 */

export function systemSystemDateGetNextWeekDay(data?: IWeekDayParams) {
  return ajax<IWeekDayParams, IWeekDayData>({
    url: `/system/systemDate/getNextWeekDay`,
    method: "post",
    data,
  });
}

export interface ISelectPageParams {
  /* 主键*/
  id?: string;
  /* 产品代码*/
  appCode?: string;
  /* 产品名称*/
  appName?: string;
  /* 适用主体：1-深圳全链融科技有限公司*/
  suitableScope?: string;
  /* 生效日期：YYYY-MM-DD*/
  activationTime?: string;
  /* 状态：1-启用，2-停用*/
  productState?: string;
  /* 状态：1-启用，2-停用*/
  stateName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
}

/*
 *@序号:276
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:产品配置（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/745804)
 */

export function productConfSelectPage(data?: ISelectPageParams) {
  return ajax<ISelectPageParams, any>({
    url: `/productConf/selectPage`,
    method: "post",
    data,
  });
}

export interface ISelectListParams {
  /* 主键*/
  id?: string;
  /* 产品代码*/
  appCode?: string;
  /* 产品名称*/
  appName?: string;
  /* 适用主体：1-深圳全链融科技有限公司*/
  suitableScope?: string;
  /* 生效日期：YYYY-MM-DD*/
  activationTime?: string;
  /* 状态：1-启用，2-停用*/
  productState?: string;
  /* 状态：1-启用，2-停用*/
  stateName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
}

/*
 *@序号:277
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:selectList(https://apaas-yapi.midea.com/project/7260/interface/api/745807)
 */

export function productConfSelectList(data?: ISelectListParams) {
  return ajax<ISelectListParams, any>({
    url: `/productConf/selectList`,
    method: "post",
    data,
  });
}

export interface IAddItemParams {
  appCode: string;

  appName: string;

  suitableScope: string;

  productState: string;
}

/*
 *@序号:278
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:产品配置-新增(https://apaas-yapi.midea.com/project/7260/interface/api/745810)
 */

export function productConfAddItem(data?: IAddItemParams) {
  return ajax<IAddItemParams, any>({
    url: `/productConf/addItem`,
    method: "post",
    data,
  });
}

export interface IUpdateItemParams {
  id: string;

  appCode: string;

  appName: string;

  suitableScope: string;

  productState: string;
}

/*
 *@序号:279
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:产品配置-更新(https://apaas-yapi.midea.com/project/7260/interface/api/745813)
 */

export function productConfUpdateItem(data?: IUpdateItemParams) {
  return ajax<IUpdateItemParams, any>({
    url: `/productConf/updateItem`,
    method: "post",
    data,
  });
}

export interface IByIdParams {
  id: string;
}

/*
 *@序号:280
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:selectById(https://apaas-yapi.midea.com/project/7260/interface/api/745816)
 */

export function productConfSelectById(data?: IByIdParams) {
  return ajax<IByIdParams, any>({
    url: `/productConf/selectById`,
    method: "post",
    data,
  });
}

/*
 *@序号:281
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查出区域及相关客服组长信息(https://apaas-yapi.midea.com/project/7260/interface/api/745819)
 */

export function systemQueryArea(params?: any) {
  return ajax<any, any>({ url: `/system/query/area`, method: "get", params });
}

export interface IConfigAreaParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  areaId?: string;
  /* 区域名称*/
  areaName?: string;
  /* 组长的user_id*/
  leaderId?: string;
  /* 组长名称*/
  leaderName?: string;
  /* 备注*/
  remark?: string;

  areaRegionList?: string;

  areaRegionList?: string;

  areaRegionList?: string;

  areaRegionList?: string;
  /* 流水号*/
  areaRegionList?: string;
  /* 区域id*/
  areaRegionList?: string;
  /* 区域名称*/
  areaRegionList?: string;
  /* 地区id*/
  areaRegionList?: string;
  /* 地区名称*/
  areaRegionList?: string;
  /* 负责地区str*/
  areaRegionListStr?: string;
}

/*
 *@序号:282
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:更新区域客服组长信息(https://apaas-yapi.midea.com/project/7260/interface/api/745822)
 */

export function systemConfigArea(data?: IConfigAreaParams) {
  return ajax<IConfigAreaParams, any>({
    url: `/system/config/area`,
    method: "post",
    data,
  });
}

/*
 *@序号:283
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查出可以分配的客户经理(https://apaas-yapi.midea.com/project/7260/interface/api/745825)
 */

export function systemQueryManagerList(params?: any) {
  return ajax<any, any>({
    url: `/system/query/manager/list`,
    method: "get",
    params,
  });
}

/*
 *@序号:284
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查询所有客户经理(https://apaas-yapi.midea.com/project/7260/interface/api/745828)
 */

export function systemQueryAllManagerList(params?: any) {
  return ajax<any, any>({
    url: `/system/query/all/manager/list`,
    method: "get",
    params,
  });
}

/*
 *@序号:285
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:mgrBatchUpdate(https://apaas-yapi.midea.com/project/7260/interface/api/745831)
 */

export function systemManagerBatchupdate(data?: any) {
  return ajax<any, any>({
    url: `/system/manager/batchupdate`,
    method: "post",
    data,
  });
}

export interface IManagerSingleupdateParams {
  cusCode: string;
}

/*
 *@序号:286
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:updateEntByCusCode(https://apaas-yapi.midea.com/project/7260/interface/api/745834)
 */

export function systemManagerSingleupdate(data?: IManagerSingleupdateParams) {
  return ajax<IManagerSingleupdateParams, any>({
    url: `/system/manager/singleupdate`,
    method: "post",
    data,
  });
}

export interface IManagerUnallocatedParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  mgrEntId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 联系人名称*/
  contactsName?: string;
  /* 联系人电话*/
  contactsPhone?: string;
  /* 注册地具体地址*/
  address?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 行政区域名称*/
  regionName?: string;
  /* 区域名称*/
  areaName?: string;
  /* 企业等级*/
  entGrade?: string;
  /* 企业id*/
  entId?: string;
  /* 是否入驻*/
  isEnter?: string;
  /* 转移的新客户经理*/
  newMgrName?: string;
  /* 统一社会信用代码*/
  licenseNumber?: string;
  /* 主数据客户号*/
  custCode?: string;
  /* 同步状态：1-待更新，2-已处理*/
  synchronizationState?: string;
  /* 客户经理Mip*/
  mip?: string;
  /* 主数据客户号集合（非数据库字段）*/
  custCodeList?: string;
  /* 分配状态：Y:N （非数据库字段）*/
  distributeState?: string;
  /* 注册状态：wait：待处理，dealing：注册中，finished：已入驻*/
  regState?: string;
  /* 企业等级 (联表t_ebill_ent_enterprise)*/
  enterpriseGrade?: string;
  /* 注册状态中文值：wait：待处理，dealing：注册中，finished：已入驻*/
  regStateCn?: string;
  /* 客户经理组长id*/
  leaderId?: string;
}

/*
 *@序号:287
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查询未分配客户经理的企业(https://apaas-yapi.midea.com/project/7260/interface/api/745837)
 */

export function systemQueryManagerUnallocated(
  data?: IManagerUnallocatedParams,
) {
  return ajax<IManagerUnallocatedParams, any>({
    url: `/system/query/manager/unallocated`,
    method: "post",
    data,
  });
}

export interface IManagerEntParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  mgrEntId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 联系人名称*/
  contactsName?: string;
  /* 联系人电话*/
  contactsPhone?: string;
  /* 注册地具体地址*/
  address?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 行政区域名称*/
  regionName?: string;
  /* 区域名称*/
  areaName?: string;
  /* 企业等级*/
  entGrade?: string;
  /* 企业id*/
  entId?: string;
  /* 是否入驻*/
  isEnter?: string;
  /* 转移的新客户经理*/
  newMgrName?: string;
  /* 统一社会信用代码*/
  licenseNumber?: string;
  /* 主数据客户号*/
  custCode?: string;
  /* 同步状态：1-待更新，2-已处理*/
  synchronizationState?: string;
  /* 客户经理Mip*/
  mip?: string;
  /* 主数据客户号集合（非数据库字段）*/
  custCodeList?: string;
  /* 分配状态：Y:N （非数据库字段）*/
  distributeState?: string;
  /* 注册状态：wait：待处理，dealing：注册中，finished：已入驻*/
  regState?: string;
  /* 企业等级 (联表t_ebill_ent_enterprise)*/
  enterpriseGrade?: string;
  /* 注册状态中文值：wait：待处理，dealing：注册中，finished：已入驻*/
  regStateCn?: string;
  /* 客户经理组长id*/
  leaderId?: string;
}

/*
 *@序号:288
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:条件查询已分配客户经理的企业(https://apaas-yapi.midea.com/project/7260/interface/api/745840)
 */

export function systemQueryManagerEnt(data?: IManagerEntParams) {
  return ajax<IManagerEntParams, any>({
    url: `/system/query/manager/ent`,
    method: "post",
    data,
  });
}

export interface INomaskDetailParams {
  mgrEntId: string;

  mgrNoMaskType: string;
}

/*
 *@序号:289
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:queryNomaskDetail(https://apaas-yapi.midea.com/project/7260/interface/api/745843)
 */

export function systemQueryNomaskDetail(data?: INomaskDetailParams) {
  return ajax<INomaskDetailParams, any>({
    url: `/system/query/nomask/detail`,
    method: "post",
    data,
  });
}

export interface IManagerAllParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  mgrEntId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 联系人名称*/
  contactsName?: string;
  /* 联系人电话*/
  contactsPhone?: string;
  /* 注册地具体地址*/
  address?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 行政区域名称*/
  regionName?: string;
  /* 区域名称*/
  areaName?: string;
  /* 企业等级*/
  entGrade?: string;
  /* 企业id*/
  entId?: string;
  /* 是否入驻*/
  isEnter?: string;
  /* 转移的新客户经理*/
  newMgrName?: string;
  /* 统一社会信用代码*/
  licenseNumber?: string;
  /* 主数据客户号*/
  custCode?: string;
  /* 同步状态：1-待更新，2-已处理*/
  synchronizationState?: string;
  /* 客户经理Mip*/
  mip?: string;
  /* 主数据客户号集合（非数据库字段）*/
  custCodeList?: string;
  /* 分配状态：Y:N （非数据库字段）*/
  distributeState?: string;
  /* 注册状态：wait：待处理，dealing：注册中，finished：已入驻*/
  regState?: string;
  /* 企业等级 (联表t_ebill_ent_enterprise)*/
  enterpriseGrade?: string;
  /* 注册状态中文值：wait：待处理，dealing：注册中，finished：已入驻*/
  regStateCn?: string;
  /* 客户经理组长id*/
  leaderId?: string;
}

/*
 *@序号:290
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:客户经理管理-未分配客户经理的企业列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/745846)
 */

export function systemExportManagerAll(data?: IManagerAllParams) {
  return ajax<IManagerAllParams, any>({
    url: `/system/export/manager/all`,
    method: "post",
    data,
  });
}

export interface IManagerAllocatedParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  mgrEntId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 联系人名称*/
  contactsName?: string;
  /* 联系人电话*/
  contactsPhone?: string;
  /* 注册地具体地址*/
  address?: string;
  /* 客户经理姓名*/
  mgrName?: string;
  /* 行政区域名称*/
  regionName?: string;
  /* 区域名称*/
  areaName?: string;
  /* 企业等级*/
  entGrade?: string;
  /* 企业id*/
  entId?: string;
  /* 是否入驻*/
  isEnter?: string;
  /* 转移的新客户经理*/
  newMgrName?: string;
  /* 统一社会信用代码*/
  licenseNumber?: string;
  /* 主数据客户号*/
  custCode?: string;
  /* 同步状态：1-待更新，2-已处理*/
  synchronizationState?: string;
  /* 客户经理Mip*/
  mip?: string;
  /* 主数据客户号集合（非数据库字段）*/
  custCodeList?: string;
  /* 分配状态：Y:N （非数据库字段）*/
  distributeState?: string;
  /* 注册状态：wait：待处理，dealing：注册中，finished：已入驻*/
  regState?: string;
  /* 企业等级 (联表t_ebill_ent_enterprise)*/
  enterpriseGrade?: string;
  /* 注册状态中文值：wait：待处理，dealing：注册中，finished：已入驻*/
  regStateCn?: string;
  /* 客户经理组长id*/
  leaderId?: string;
}

/*
 *@序号:291
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:客户经理管理-已分配客户经理的企业列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/745849)
 */

export function systemExportManagerAllocated(data?: IManagerAllocatedParams) {
  return ajax<IManagerAllocatedParams, any>({
    url: `/system/export/manager/allocated`,
    method: "post",
    data,
  });
}

export interface IPersonQueryParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  id?: string;
  /* 执行状态:1-待处理；2-成功；3-失败；4-拒绝*/
  exeStatus?: string;
  /* 执行次数*/
  exeCount?: string;
  /* 业务编码*/
  businessCode?: string;
  /* 业务id*/
  businessId?: string;

  blockCode?: string;

  finTypeOutOrIn?: string;

  remark?: string;
}

/*
 *@序号:292
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:queryPersonProcess(https://apaas-yapi.midea.com/project/7260/interface/api/745852)
 */

export function personQuery(data?: IPersonQueryParams) {
  return ajax<IPersonQueryParams, any>({
    url: `/person/query`,
    method: "post",
    data,
  });
}

export interface IPersonRecallParams {
  ppId: string;
}

/*
 *@序号:293
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:recall(https://apaas-yapi.midea.com/project/7260/interface/api/745855)
 */

export function personRecall(params?: IPersonRecallParams) {
  return ajax<IPersonRecallParams, any>({
    url: `/person/recall`,
    method: "get",
    params,
  });
}

export interface IPersonRefuseParams {
  ppId: string;
}

/*
 *@序号:294
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:refuse(https://apaas-yapi.midea.com/project/7260/interface/api/745858)
 */

export function personRefuse(params?: IPersonRefuseParams) {
  return ajax<IPersonRefuseParams, any>({
    url: `/person/refuse`,
    method: "get",
    params,
  });
}

export interface IConfirmSuccessParams {
  ppId: string;
}

/*
 *@序号:295
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:区块链确认成功(https://apaas-yapi.midea.com/project/7260/interface/api/745861)
 */

export function personConfirmSuccess(params?: IConfirmSuccessParams) {
  return ajax<IConfirmSuccessParams, any>({
    url: `/person/confirm/success`,
    method: "get",
    params,
  });
}

export interface IConfirmRefuseParams {
  ppId: string;
}

/*
 *@序号:296
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:融资受理（发送融资端）(https://apaas-yapi.midea.com/project/7260/interface/api/745864)
 */

export function personConfirmRefuse(params?: IConfirmRefuseParams) {
  return ajax<IConfirmRefuseParams, any>({
    url: `/person/confirm/refuse`,
    method: "get",
    params,
  });
}

export interface IConfirmSuccParams {
  ppId: string;
}

/*
 *@序号:297
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:融资受理（发送融资端）(https://apaas-yapi.midea.com/project/7260/interface/api/745867)
 */

export function personSellConfirmSucc(params?: IConfirmSuccParams) {
  return ajax<IConfirmSuccParams, any>({
    url: `/person/sell/confirm/succ`,
    method: "get",
    params,
  });
}

type IUkeysignImportParams = undefined;

export interface IUkeysignImportData {
  /**
   * 导入失败
   */
  fail?: Fail[];
  [property: string]: any;
}

export interface Fail {
  /**
   * 描述
   */
  desc?: string;
  /**
   * 企业名称
   */
  enterpriseName?: string;
  [property: string]: any;
}

/*
 *@序号:298
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138819)
 *@菜单名称:importUkeySignRecord(https://apaas-yapi.midea.com/project/7260/interface/api/745870)
 */

export function ukeysignImport(data?: IUkeysignImportParams) {
  return ajax<IUkeysignImportParams, IUkeysignImportData>({
    url: `/ukeysign/import`,
    method: "post",
    data,
  });
}

export interface ITemplateAddParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 模板ID*/
  templateId?: string;
  /* 模板编码*/
  tempCode?: string;
  /* 业务类型，如开票*/
  serviceType?: string;
  /* 模板消息标题*/
  tempTitle?: string;
  /* 模板内容*/
  tempContent?: string;
  /* 模板类型，0：短信；1：站内信；2：邮件；多个类型用;隔开；*/
  tempType?: string;
}

/*
 *@序号:299
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:insertMessageTemplate(https://apaas-yapi.midea.com/project/7260/interface/api/745873)
 */

export function systemMessageTemplateAdd(data?: ITemplateAddParams) {
  return ajax<ITemplateAddParams, any>({
    url: `/system/messageTemplate/add`,
    method: "post",
    data,
  });
}

export interface ITemplateDelParams {
  ID?: string;
}

/*
 *@序号:300
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745876)
 */

export function systemMessageTemplatebyIDDel(id?: ITemplateDelParams) {
  return ajax<ITemplateDelParams, any>({
    url: `/system/messageTemplate/${id}/del`,
    method: "post",
  });
}

export interface ITemplateUpdateParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 模板ID*/
  templateId?: string;
  /* 模板编码*/
  tempCode?: string;
  /* 业务类型，如开票*/
  serviceType?: string;
  /* 模板消息标题*/
  tempTitle?: string;
  /* 模板内容*/
  tempContent?: string;
  /* 模板类型，0：短信；1：站内信；2：邮件；多个类型用;隔开；*/
  tempType?: string;
}

/*
 *@序号:301
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745879)
 */

export function systemMessageTemplateUpdate(data?: ITemplateUpdateParams) {
  return ajax<ITemplateUpdateParams, any>({
    url: `/system/messageTemplate/update`,
    method: "post",
    data,
  });
}

export interface ITemplateListParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 模板ID*/
  templateId?: string;
  /* 模板编码*/
  tempCode?: string;
  /* 业务类型，如开票*/
  serviceType?: string;
  /* 模板消息标题*/
  tempTitle?: string;
  /* 模板内容*/
  tempContent?: string;
  /* 模板类型，0：短信；1：站内信；2：邮件；多个类型用;隔开；*/
  tempType?: string;
}

/*
 *@序号:302
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745882)
 */

export function systemMessageTemplateList(data?: ITemplateListParams) {
  return ajax<ITemplateListParams, any>({
    url: `/system/messageTemplate/list`,
    method: "post",
    data,
  });
}

export interface ITemplateGetParams {
  ID?: string;
}
export interface ITemplateGetData {
  createBy?: string;
  createTime?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 业务类型，如开票
   */
  serviceType?: string;
  /**
   * 模板编码
   */
  tempCode?: string;
  /**
   * 模板内容
   */
  tempContent?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 模板消息标题
   */
  tempTitle?: string;
  /**
   * 模板类型，0：短信；1：站内信；2：邮件；多个类型用;隔开；
   */
  tempType?: string;
  [property: string]: any;
}

/*
 *@序号:303
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745885)
 */

export function systemMessageTemplatebyIDGet(id?: ITemplateGetParams) {
  return ajax<ITemplateGetParams, ITemplateGetData>({
    url: `/system/messageTemplate/${id}/get`,
    method: "post",
  });
}

export interface IQueryDetailParams {
  ID?: string;
}
export interface IQueryDetailData {
  createBy?: string;
  createTime?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 业务类型，如开票
   */
  serviceType?: string;
  /**
   * 模板编码
   */
  tempCode?: string;
  /**
   * 模板内容
   */
  tempContent?: string;
  /**
   * 模板ID
   */
  templateId?: number;
  /**
   * 模板消息标题
   */
  tempTitle?: string;
  /**
   * 模板类型，0：短信；1：站内信；2：邮件；多个类型用;隔开；
   */
  tempType?: string;
  [property: string]: any;
}

/*
 *@序号:304
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745888)
 */

export function systemMessageTemplatebyIDQueryDetail(id?: IQueryDetailParams) {
  return ajax<IQueryDetailParams, IQueryDetailData>({
    url: `/system/messageTemplate/${id}/queryDetail`,
    method: "post",
  });
}

export interface ITemplatePaginationParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 模板ID*/
  templateId?: string;
  /* 模板编码*/
  tempCode?: string;
  /* 业务类型，如开票*/
  serviceType?: string;
  /* 模板消息标题*/
  tempTitle?: string;
  /* 模板内容*/
  tempContent?: string;
  /* 模板类型，0：短信；1：站内信；2：邮件；多个类型用;隔开；*/
  tempType?: string;
}
export interface ITemplatePaginationData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: { [key: string]: any }[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

/*
 *@序号:305
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745891)
 */

export function systemMessageTemplatePagination(
  data?: ITemplatePaginationParams,
) {
  return ajax<ITemplatePaginationParams, ITemplatePaginationData>({
    url: `/system/messageTemplate/pagination`,
    method: "post",
    data,
  });
}

export interface IQueryPageParams {
  /* 业务流水号*/
  reqSeqId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 存证场景*/
  innerName?: string;
  /* 存证日期*/
  eviTime?: string;
  /* 存证日期（开始-查询用）*/
  eviTimeStart?: string;
  /* 存证日期（结束-查询用）*/
  eviTimeEnd?: string;
  /* 存证状态*/
  eviState?: string;
  /* 失败原因*/
  failReason?: string;
  /* 存证号*/
  eviSeqId?: string;
}
export interface IQueryPageData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 企业名称
   */
  enterpriseName?: string;
  /**
   * 存证号
   */
  eviSeqId?: string;
  /**
   * 存证状态
   */
  eviState?: number;
  /**
   * 存证日期
   */
  eviTime?: string;
  /**
   * 存证日期（结束-查询用）
   */
  eviTimeEnd?: string;
  /**
   * 存证日期（开始-查询用）
   */
  eviTimeStart?: string;
  /**
   * 失败原因
   */
  failReason?: string;
  /**
   * 存证场景
   */
  innerName?: string;
  /**
   * 业务流水号
   */
  reqSeqId?: string;
  [property: string]: any;
}

/*
 *@序号:306
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景存证记录查询(https://apaas-yapi.midea.com/project/7260/interface/api/745894)
 */

export function eviSceneQueryPage(data?: IQueryPageParams) {
  return ajax<IQueryPageParams, IQueryPageData>({
    url: `/evi/scene/query/page`,
    method: "post",
    data,
  });
}

export interface IDownEvidenceParams {
  reqSeqId: string;
}

/*
 *@序号:307
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景存证证书下载(https://apaas-yapi.midea.com/project/7260/interface/api/745897)
 */

export function eviDownEvidence(params?: IDownEvidenceParams) {
  return ajax<IDownEvidenceParams, any>({
    url: `/evi/down/evidence`,
    method: "get",
    params,
  });
}

export interface ISceneDetailParams {
  reqSeqId: string;
}

/*
 *@序号:308
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景详情(https://apaas-yapi.midea.com/project/7260/interface/api/745900)
 */

export function eviSceneDetail(params?: ISceneDetailParams) {
  return ajax<ISceneDetailParams, any>({
    url: `/evi/scene/detail`,
    method: "get",
    params,
  });
}

export interface ISceneRetryParams {
  reqSeqId: string;
}

/*
 *@序号:309
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景出证重试(https://apaas-yapi.midea.com/project/7260/interface/api/745903)
 */

export function eviSceneRetry(params?: ISceneRetryParams) {
  return ajax<ISceneRetryParams, any>({
    url: `/evi/scene/retry`,
    method: "get",
    params,
  });
}

export interface IAmountCountData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:310
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:收/付金额统计(https://apaas-yapi.midea.com/project/7260/interface/api/745906)
 */

export function tradeTransactionIssueAmountCount(data?: any) {
  return ajax<any, IAmountCountData>({
    url: `/trade/transaction/issue/amount/count`,
    method: "post",
    data,
  });
}

export interface IAmountCountData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:311
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:收/付金额统计(https://apaas-yapi.midea.com/project/7260/interface/api/745909)
 */

export function tradeTransactionBillAmountCount(data?: any) {
  return ajax<any, IAmountCountData>({
    url: `/trade/transaction/bill/amount/count`,
    method: "post",
    data,
  });
}

export interface IBillDetailParams {
  transferId: string;

  billCode: string;
}
export interface IBillDetailData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:312
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:票据详情查看(https://apaas-yapi.midea.com/project/7260/interface/api/745912)
 */

export function tradeTransactionBillDetail(data?: IBillDetailParams) {
  return ajax<IBillDetailParams, IBillDetailData>({
    url: `/trade/transaction/bill/detail`,
    method: "post",
    data,
  });
}

export interface ICertPrintParams {
  billCodes: string;
}
export interface ICERTPrintData {
  /**
   * 编号
   */
  billCode?: string;
  /**
   * 金单金额
   */
  billMoney?: number;
  /**
   * 状态(持有 、 到期)
   */
  billState?: string;
  /**
   * 类型  2表示供应商开单
   */
  billType?: string;
  /**
   * 凭证表中的biz_id
   */
  bizId?: string;
  /**
   * 凭证id
   */
  certId?: number;
  /**
   * 凭证日期
   */
  certificateDate?: string;
  /**
   * 凭证日期 大写
   */
  certificateDateUpper?: string;
  /**
   * 凭证类型 编码
   */
  certType?: number;
  /**
   * 凭证类型 名称
   */
  certTypeName?: string;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 固定利率
   */
  fixedRate?: number;
  /**
   * 保证人名称
   */
  guarantorName?: string;
  /**
   * 收单企业开户行名称
   */
  inputterAcctName?: string;
  /**
   * 收单企业银行账号
   */
  inputterAcctNo?: string;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 开单日
   */
  outputDate?: string;
  /**
   * 开单企业开户行名称
   */
  outputterAcctName?: string;
  /**
   * 开单企业银行账号
   */
  outputterAcctNo?: string;
  /**
   * 开单企业名称
   */
  outputterName?: string;
  /**
   * 持单企业开户行名称
   */
  ownerAcctName?: string;
  /**
   * 持单企业银行账号
   */
  ownerAcctNo?: string;
  /**
   * 持单企业名称
   */
  ownerName?: string;
  /**
   * 打印是否在前插入分页  1表示插入，0表示不插入  默认都插入
   */
  pageBreakBefore?: string;
  /**
   * 母单凭证id
   */
  parentId?: string;
  /**
   * 融资日期
   */
  sellDate?: string;
  /**
   * 融资天数
   */
  sellDays?: string;
  /**
   * 融资付息
   */
  sellInterest?: number;
  /**
   * 融资付息企业开户行名称
   */
  sellInterestPayAcctName?: string;
  /**
   * 融资付息企业银行账号
   */
  sellInterestPayAcctNo?: string;
  /**
   * 融资付息企业名称
   */
  sellInterestPayName?: string;
  /**
   * 被拆票据编号
   */
  splitCode?: string;
  /**
   * 拆单日
   */
  splitDate?: string;
  /**
   * 转单日
   */
  transferDate?: string;
  transferFlag?: string;
  /**
   * 转出人名称
   */
  transferorName?: string;
  /**
   * 人民币大写
   */
  upperMoney?: string;
  /**
   * 可变利率
   */
  variableRate?: number;
  [property: string]: any;
}

/*
 *@序号:313
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:票据凭证打印(支持批量和单个打印)(https://apaas-yapi.midea.com/project/7260/interface/api/745915)
 */

export function tradeTransactionBillCertPrint(data?: ICertPrintParams) {
  return ajax<ICertPrintParams, ICertPrintData>({
    url: `/trade/transaction/bill/cert/print`,
    method: "post",
    data,
  });
}

export interface ICreditResendParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 付款记录流水号*/
  creditId?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 持票（企业）流水号*/
  entId?: string;
  /* 持票（企业）名称*/
  entName?: string;
  /* 持票（企业）类型*/
  entType?: string;
  /* 付款状态：0-待处理；处理中:99; 3-成功；4-失败*/
  creditState?: string;
  /* 付款申请日*/
  creditDate?: string;
  /* 备注*/
  remark?: string;
  /* 订单号*/
  tradeNo?: string;
  /* 下单时间*/
  tradeTime?: string;
  /* 开票企业ID*/
  originaEnterpriseId?: string;
  /* 开票企业名称*/
  originaEnterpriseName?: string;
  /* 开票企业类型*/
  originaEnterpriseType?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 重发标志 0，未重发，1已重发过*/
  resendFlag?: string;
  /* 是否可重发， true可以，false不可以, f, a, l, s, e*/
  canResendFlag?: string;
  /* 是否可设置成功状态， true可以，false不可以, f, a, l, s, e*/
  canSetCreditStateFlag?: string;
  /* 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败*/
  refCreditState?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 最后一次失败原因*/
  lastFailReason?: string;
  /* 原始（根节点）美易单的金额(额外字段，兑付计划使用）*/
  originalMoney?: string;
  /* 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDate?: string;
  /* 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateStart?: string;
  /* 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateEnd?: string;
  /* 原始（根节点）美易单的开票日(额外字段，兑付计划使用）*/
  outputDate?: string;
  /* 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）*/
  limitDays?: string;
  /* 原始（根节点）美易单的收票企业名称*/
  inputEntName?: string;
  /* 企业名字过滤条件*/
  entNameList?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 开票企业的组织id*/
  originalOrgId?: string;
  /* 开票企业的组织名称*/
  originalOrgName?: string;
  /* 通知状态*/
  noticeState?: string;
  /* 通知结果*/
  noticeResult?: string;
  /* 通知失败次数*/
  failCount?: string;
  /* 兑付渠道*/
  cashingChannel?: string;
  /* 实际兑付日*/
  duepayDate?: string;
  /* 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号*/
  duePayType?: string;
  /* 关联审批id*/
  reviewId?: string;
  /* 关联审批状态*/
  reviewStatus?: string;
}

/*
 *@序号:314
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:美的付付款单重发(https://apaas-yapi.midea.com/project/7260/interface/api/745918)
 */

export function tradeTransactionCreditResend(data?: ICreditResendParams) {
  return ajax<ICreditResendParams, any>({
    url: `/trade/transaction/credit/resend`,
    method: "post",
    data,
  });
}

export interface IDueQueryParams {
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 原始（根节点）美易单ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 原始（根节点）票据金额*/
  originalBillMoney?: string;
  /* 开票企业ID*/
  originaOuputEnterpriseId?: string;
  /* 开票企业名称*/
  originaOuputEnterpriseName?: string;
  /* 开票企业类型1:成员企业 2 供应链企业 3保理公司*/
  originaOuputEnterpriseType?: string;
  /* 母单收票企业ID*/
  originaInputEnterpriseId?: string;
  /* 母单收票企业名称*/
  originaInputEnterpriseName?: string;
  /* 母单收票企业类型1:成员企业 2 供应链企业 3保理公司*/
  originaInputEnterpriseType?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 持票企业组织ID*/
  ownerOrgId?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 持票企业编码*/
  ownerEnterpriseCode?: string;
  /* 持票企业类型*/
  ownerEnterpriseType?: string;
  /* 账户账号*/
  ownerEnterpriseAccountNo?: string;
  /* 账户名称*/
  ownerEnterpriseAccountName?: string;
  /* 开户行代码*/
  ownerEnterpriseBankCode?: string;
  /* 开户行名称*/
  ownerEnterpriseBankName?: string;
  /* 持单企业ouName*/
  ownerOuName?: string;
  /* 层级*/
  billLevel?: string;
  /* 票据状态，冻结（在途，待签收）到期冻结（签收）、已到期（签收）、到期兑付（签收）*/
  billState?: string;

  billStateCN?: string;
  /* 不允许的票据状态*/
  notBillState?: string;
  /* 签收状态*/
  signState?: string;

  signStateCN?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 开票日期(左范围)*/
  outputDateStart?: string;
  /* 开票日期(右范围)*/
  outputDateEnd?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 到期日期(左范围)*/
  expireDateStart?: string;
  /* 到期日期(右范围)*/
  expireDateEnd?: string;
  /* 兑付日*/
  cashDate?: string;
  /* 兑付日期(左范围)*/
  cashDateStart?: string;
  /* 兑付日期(右范围)*/
  cashDateEnd?: string;
  /* 付款状态*/
  creditState?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 财司账号*/
  financialAccountNo?: string;
  /* 财司开户行*/
  financialBankName?: string;
  /* 美的付商户号*/
  partner?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 票据金额*/
  billMoney?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* 创建时间*/
  limitDays?: string;
  /* 剩余期限*/
  days?: string;
  /* 创建时间*/
  createTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 转单企业*/
  lasthandEnterpriseName?: string;
  /* 新美易单编号*/
  newParentCode?: string;
  /* 兑付企业*/
  cashPaymentName?: string;
  /* 持有日日期*/
  tradeDate?: string;
  /* 持有日日期*/
  tradeDateStart?: string;
  /* 持有日日期*/
  tradeDateEnd?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 是否可以执行线下兑付后续操作流程*/
  canSetPaid?: string;
  /* 持票企业等级*/
  ownerEnterpriseGrade?: string;
  /* 持单企业客户经理*/
  ownerMgrName?: string;
  /* 持单企业区域*/
  ownerAreaName?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 不允许的票据状态集合*/
  notBillStateList?: string;
}
export interface IDueQueryData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单流水号
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 票据状态，冻结（在途，待签收）到期冻结（签收）、已到期（签收）、到期兑付（签收）
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 是否可以执行线下兑付后续操作流程
   */
  canSetPaid?: number;
  /**
   * 兑付日
   */
  cashDate?: string;
  /**
   * 兑付日期(右范围)
   */
  cashDateEnd?: string;
  /**
   * 兑付日期(左范围)
   */
  cashDateStart?: string;
  /**
   * 兑付企业
   */
  cashPaymentName?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 付款状态
   */
  creditState?: number;
  /**
   * 剩余期限
   */
  days?: number;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * 到期日期(右范围)
   */
  expireDateEnd?: string;
  /**
   * 到期日期(左范围)
   */
  expireDateStart?: string;
  /**
   * 财司账号
   */
  financialAccountNo?: string;
  /**
   * 财司开户行
   */
  financialBankName?: string;
  /**
   * 转单企业
   */
  lasthandEnterpriseName?: string;
  /**
   * 创建时间
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 新美易单编号
   */
  newParentCode?: string;
  /**
   * 不允许的票据状态
   */
  notBillState?: number;
  /**
   * 不允许的票据状态集合
   */
  notBillStateList?: number[];
  /**
   * 原始（根节点）美易单ID
   */
  originaId?: number;
  /**
   * 母单收票企业ID
   */
  originaInputEnterpriseId?: number;
  /**
   * 母单收票企业名称
   */
  originaInputEnterpriseName?: string;
  /**
   * 母单收票企业类型1:成员企业 2 供应链企业 3保理公司
   */
  originaInputEnterpriseType?: number;
  /**
   * 原始（根节点）票据金额
   */
  originalBillMoney?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票企业ID
   */
  originaOuputEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaOuputEnterpriseName?: string;
  /**
   * 开票企业类型1:成员企业 2 供应链企业 3保理公司
   */
  originaOuputEnterpriseType?: number;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 开票日期(右范围)
   */
  outputDateEnd?: string;
  /**
   * 开票日期(左范围)
   */
  outputDateStart?: string;
  /**
   * 持单企业区域
   */
  ownerAreaName?: string;
  /**
   * 账户名称
   */
  ownerEnterpriseAccountName?: string;
  /**
   * 账户账号
   */
  ownerEnterpriseAccountNo?: string;
  /**
   * 开户行代码
   */
  ownerEnterpriseBankCode?: string;
  /**
   * 开户行名称
   */
  ownerEnterpriseBankName?: string;
  /**
   * 持票企业编码
   */
  ownerEnterpriseCode?: string;
  /**
   * 持票企业等级
   */
  ownerEnterpriseGrade?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业类型
   */
  ownerEnterpriseType?: number;
  /**
   * 持单企业客户经理
   */
  ownerMgrName?: string;
  /**
   * 持票企业组织ID
   */
  ownerOrgId?: number;
  /**
   * 持单企业ouName
   */
  ownerOuName?: string;
  /**
   * 美的付商户号
   */
  partner?: string;
  /**
   * 签收状态
   */
  signState?: number;
  signStateCN?: string;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 持有日日期
   */
  tradeDate?: string;
  /**
   * 持有日日期
   */
  tradeDateEnd?: string;
  /**
   * 持有日日期
   */
  tradeDateStart?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:315
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:美易单到期兑付查询(https://apaas-yapi.midea.com/project/7260/interface/api/745921)
 */

export function tradeTransactionBillDueQuery(data?: IDueQueryParams) {
  return ajax<IDueQueryParams, IDueQueryData>({
    url: `/trade/transaction/bill/due/query`,
    method: "post",
    data,
  });
}

export interface IDueExportParams {
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 原始（根节点）美易单ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 原始（根节点）票据金额*/
  originalBillMoney?: string;
  /* 开票企业ID*/
  originaOuputEnterpriseId?: string;
  /* 开票企业名称*/
  originaOuputEnterpriseName?: string;
  /* 开票企业类型1:成员企业 2 供应链企业 3保理公司*/
  originaOuputEnterpriseType?: string;
  /* 母单收票企业ID*/
  originaInputEnterpriseId?: string;
  /* 母单收票企业名称*/
  originaInputEnterpriseName?: string;
  /* 母单收票企业类型1:成员企业 2 供应链企业 3保理公司*/
  originaInputEnterpriseType?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 持票企业组织ID*/
  ownerOrgId?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 持票企业编码*/
  ownerEnterpriseCode?: string;
  /* 持票企业类型*/
  ownerEnterpriseType?: string;
  /* 账户账号*/
  ownerEnterpriseAccountNo?: string;
  /* 账户名称*/
  ownerEnterpriseAccountName?: string;
  /* 开户行代码*/
  ownerEnterpriseBankCode?: string;
  /* 开户行名称*/
  ownerEnterpriseBankName?: string;
  /* 持单企业ouName*/
  ownerOuName?: string;
  /* 层级*/
  billLevel?: string;
  /* 票据状态，冻结（在途，待签收）到期冻结（签收）、已到期（签收）、到期兑付（签收）*/
  billState?: string;

  billStateCN?: string;
  /* 不允许的票据状态*/
  notBillState?: string;
  /* 签收状态*/
  signState?: string;

  signStateCN?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 开票日期(左范围)*/
  outputDateStart?: string;
  /* 开票日期(右范围)*/
  outputDateEnd?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 到期日期(左范围)*/
  expireDateStart?: string;
  /* 到期日期(右范围)*/
  expireDateEnd?: string;
  /* 兑付日*/
  cashDate?: string;
  /* 兑付日期(左范围)*/
  cashDateStart?: string;
  /* 兑付日期(右范围)*/
  cashDateEnd?: string;
  /* 付款状态*/
  creditState?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 财司账号*/
  financialAccountNo?: string;
  /* 财司开户行*/
  financialBankName?: string;
  /* 美的付商户号*/
  partner?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 票据金额*/
  billMoney?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* 创建时间*/
  limitDays?: string;
  /* 剩余期限*/
  days?: string;
  /* 创建时间*/
  createTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 转单企业*/
  lasthandEnterpriseName?: string;
  /* 新美易单编号*/
  newParentCode?: string;
  /* 兑付企业*/
  cashPaymentName?: string;
  /* 持有日日期*/
  tradeDate?: string;
  /* 持有日日期*/
  tradeDateStart?: string;
  /* 持有日日期*/
  tradeDateEnd?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 是否可以执行线下兑付后续操作流程*/
  canSetPaid?: string;
  /* 持票企业等级*/
  ownerEnterpriseGrade?: string;
  /* 持单企业客户经理*/
  ownerMgrName?: string;
  /* 持单企业区域*/
  ownerAreaName?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 不允许的票据状态集合*/
  notBillStateList?: string;
}

/*
 *@序号:316
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:美易单到期兑付查询导出(https://apaas-yapi.midea.com/project/7260/interface/api/745924)
 */

export function tradeTransactionBillDueExport(data?: IDueExportParams) {
  return ajax<IDueExportParams, any>({
    url: `/trade/transaction/bill/due/export`,
    method: "post",
    data,
  });
}

export interface INetworkTeestParams {
  certMergCode?: string;
}

/*
 *@序号:317
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138827)
 *@菜单名称:运营平台网络测试(https://apaas-yapi.midea.com/project/7260/interface/api/745927)
 */

export function testCouponIopNetworkTeest(params?: INetworkTeestParams) {
  return ajax<INetworkTeestParams, any>({
    url: `/test/coupon/iopNetworkTeest`,
    method: "get",
    params,
  });
}

/*
 *@序号:318
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:获取系统当前日期字符串(https://apaas-yapi.midea.com/project/7260/interface/api/745930)
 */

export function transactionIssueGetDate(params?: any) {
  return ajax<any, any>({
    url: `/transaction/issue/get/date`,
    method: "get",
    params,
  });
}

/*
 *@序号:319
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，获取票据编号(https://apaas-yapi.midea.com/project/7260/interface/api/745933)
 */

export function transactionIssueGetCode(params?: any) {
  return ajax<any, any>({
    url: `/transaction/issue/get/code`,
    method: "get",
    params,
  });
}

export interface IGetEnterpriseParams {
  /* 企业名称关键字*/
  entName?: string;

  entType: string;

  entId: string;
}
export interface IGetEnterpriseData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:320
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，搜索企业名称(https://apaas-yapi.midea.com/project/7260/interface/api/745936)
 */

export function transactionIssueGetEnterprise(params?: IGetEnterpriseParams) {
  return ajax<IGetEnterpriseParams, IGetEnterpriseData>({
    url: `/transaction/issue/get/enterprise`,
    method: "get",
    params,
  });
}

export interface ISupplyEnterpriseParams {
  entName?: string;
}
export interface ISupplyEnterpriseData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:321
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，根据供应链企业名称，查找系统内是否存在(https://apaas-yapi.midea.com/project/7260/interface/api/745939)
 */

export function transactionIssueGetSupplyEnterprise(
  params?: ISupplyEnterpriseParams,
) {
  return ajax<ISupplyEnterpriseParams, ISupplyEnterpriseData>({
    url: `/transaction/issue/get/supplyEnterprise`,
    method: "get",
    params,
  });
}

export interface IGetOuParams {
  entId?: string;
}
export interface IGetOuData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:322
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，搜索OU单位(https://apaas-yapi.midea.com/project/7260/interface/api/745942)
 */

export function transactionIssueGetOu(params?: IGetOuParams) {
  return ajax<IGetOuParams, IGetOuData>({
    url: `/transaction/issue/get/ou`,
    method: "get",
    params,
  });
}

export interface IOuAccountParams {
  entId: string;

  ouId: string;
}
export interface IOuAccountData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:323
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，搜索OU单位有效的付款账户(https://apaas-yapi.midea.com/project/7260/interface/api/745945)
 */

export function transactionIssueGetOuAccount(params?: IOuAccountParams) {
  return ajax<IOuAccountParams, IOuAccountData>({
    url: `/transaction/issue/get/ou/account`,
    method: "get",
    params,
  });
}

export interface IIssueAddParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
type IIssueAddData = number;

/*
 *@序号:324
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请(https://apaas-yapi.midea.com/project/7260/interface/api/745948)
 */

export function transactionIssueAdd(data?: IIssueAddParams) {
  return ajax<IIssueAddParams, IIssueAddData>({
    url: `/transaction/issue/add`,
    method: "post",
    data,
  });
}

export interface ISelectReviewParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface ISelectReviewData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:325
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票复核查询(https://apaas-yapi.midea.com/project/7260/interface/api/745951)
 */

export function transactionIssueSelectReview(data?: ISelectReviewParams) {
  return ajax<ISelectReviewParams, ISelectReviewData>({
    url: `/transaction/issue/select/review`,
    method: "post",
    data,
  });
}

export interface IReviewDetailParams {
  transferId?: string;
}
export interface IReviewDetailData {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:326
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票复核，查询开票待复核票据详情(https://apaas-yapi.midea.com/project/7260/interface/api/745954)
 */

export function transactionIssueSelectReviewDetailbyTransferId(
  transferid?: IReviewDetailParams,
) {
  return ajax<IReviewDetailParams, IReviewDetailData>({
    url: `/transaction/issue/select/review/detail/${transferid}`,
    method: "get",
  });
}

export interface ISelectSignParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface ISelectSignData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:327
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:汇票签收查询(https://apaas-yapi.midea.com/project/7260/interface/api/745957)
 */

export function transactionIssueSelectSign(data?: ISelectSignParams) {
  return ajax<ISelectSignParams, ISelectSignData>({
    url: `/transaction/issue/select/sign`,
    method: "post",
    data,
  });
}

export interface ISignDetailParams {
  transferDetailId?: string;
}
export interface ISignDetailData {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:328
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:汇票签收查询详情(https://apaas-yapi.midea.com/project/7260/interface/api/745960)
 */

export function transactionIssueSelectSignDetailbyTransferDetailId(
  transferdetailid?: ISignDetailParams,
) {
  return ajax<ISignDetailParams, ISignDetailData>({
    url: `/transaction/issue/select/sign/detail/${transferdetailid}`,
    method: "get",
  });
}

export interface IUpdateWithdrawnParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
type IUpdateWithdrawnData = number;

/*
 *@序号:329
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:撤销操作(https://apaas-yapi.midea.com/project/7260/interface/api/745963)
 */

export function transactionIssueUpdateWithdrawn(data?: IUpdateWithdrawnParams) {
  return ajax<IUpdateWithdrawnParams, IUpdateWithdrawnData>({
    url: `/transaction/issue/update/withdrawn`,
    method: "post",
    data,
  });
}

export interface IReviewRecordParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
export interface IReviewRecordData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:330
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:复核查询，查询复核记录(https://apaas-yapi.midea.com/project/7260/interface/api/745966)
 */

export function transactionIssueSelectReviewRecord(data?: IReviewRecordParams) {
  return ajax<IReviewRecordParams, IReviewRecordData>({
    url: `/transaction/issue/select/review/record`,
    method: "post",
    data,
  });
}

export interface ITransferIdParams {
  /* 交易ID（必须）*/
  transferId: string;
}
export interface ITransferIDData {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:331
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:复核查询，查询复核记录详情(https://apaas-yapi.midea.com/project/7260/interface/api/745969)
 */

export function transactionIssueSelectReviewRecordDetailTransferId(
  params?: ITransferIdParams,
) {
  return ajax<ITransferIdParams, ITransferIdData>({
    url: `/transaction/issue/select/review/record/detail/transferId`,
    method: "get",
    params,
  });
}

export interface ICheckBatchParams {
  billFiles: File;
}
export interface ICheckBatchData {
  key?: { [key: string]: any };
  [property: string]: any;
}

/*
 *@序号:332
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:checkImportBill(https://apaas-yapi.midea.com/project/7260/interface/api/745972)
 */

export function transactionIssueCheckBatch(data?: ICheckBatchParams) {
  return ajax<ICheckBatchParams, ICheckBatchData>({
    url: `/transaction/issue/checkBatch`,
    method: "post",
    data,
  });
}

export interface IAddBatchParams {
  billInfoList?: string;
}
type IAddBatchData = string;

/*
 *@序号:333
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:commitBatchBill(https://apaas-yapi.midea.com/project/7260/interface/api/745975)
 */

export function transactionIssueAddBatch(data?: IAddBatchParams) {
  return ajax<IAddBatchParams, IAddBatchData>({
    url: `/transaction/issue/addBatch`,
    method: "post",
    data,
  });
}

export interface IUpdateTovoidParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}
type IUpdateTovoidData = number;

/*
 *@序号:334
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:作废(拒签作废、复核驳回作废)(https://apaas-yapi.midea.com/project/7260/interface/api/745978)
 */

export function transactionIssueUpdateTovoid(data?: IUpdateTovoidParams) {
  return ajax<IUpdateTovoidParams, IUpdateTovoidData>({
    url: `/transaction/issue/update/tovoid`,
    method: "post",
    data,
  });
}

export interface ISelectOpenbillParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;

  pageno: string;

  pagesize: string;
}
export interface ISelectOpenbillData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:335
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票列表查询 美易单开立(https://apaas-yapi.midea.com/project/7260/interface/api/745981)
 */

export function transactionIssueSelectOpenbill(params?: ISelectOpenbillParams) {
  return ajax<ISelectOpenbillParams, ISelectOpenbillData>({
    url: `/transaction/issue/select/openbill`,
    method: "get",
    params,
  });
}

export interface IListRefuseParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:336
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:exportQueryPaginationRefuse(https://apaas-yapi.midea.com/project/7260/interface/api/745984)
 */

export function transactionIssueExportOpenListRefuse(data?: IListRefuseParams) {
  return ajax<IListRefuseParams, any>({
    url: `/transaction/issue/export/openList/refuse`,
    method: "post",
    data,
  });
}

export interface IOpenListParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:337
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:exportQueryPagination(https://apaas-yapi.midea.com/project/7260/interface/api/745987)
 */

export function transactionIssueExportOpenList(data?: IOpenListParams) {
  return ajax<IOpenListParams, any>({
    url: `/transaction/issue/export/openList`,
    method: "post",
    data,
  });
}

export interface ISelectOpenebillParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;

  pageno: string;

  pagesize: string;
}
export interface ISelectOpenebillData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 实际融资天数
   */
  actualDays?: number;
  /**
   * 手续费
   */
  actualFee?: number;
  /**
   * 实收融资款
   */
  actualFinancingMoney?: number;
  /**
   * （查询）实收融资金额最大值，
   */
  actualFinancingMoneyMax?: number;
  /**
   * （查询）实收融资金额最小值，
   */
  actualFinancingMoneyMin?: number;
  /**
   * 实付利息
   */
  actualInterest?: number;
  /**
   * 实际费率
   */
  actualRate?: number;
  actualRateCN?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 申请批次Id
   */
  applyId?: number;
  /**
   * 复核状态：1-待复核；2-复核通过；3-驳回；
   */
  applyState?: number;
  bankServiceAmt?: number;
  bankServiceRate?: number;
  bankServiceRateCN?: string;
  batchCode?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单ID
   */
  billId?: number;
  /**
   * 层级
   */
  billLevel?: number;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * （查询）票据金额最大值，
   */
  billMoneyMax?: number;
  /**
   * （查询）票据金额最小值，
   */
  billMoneyMin?: number;
  /**
   * 美易单状态,以需求文档为准
   */
  billState?: number;
  billStateCN?: string;
  /**
   * 票据状态集合
   */
  billStateList?: number[];
  billStateName?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  billVersion?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 区块链编码
   */
  blockCode?: string;
  /**
   * 新美易单轨迹业务Id
   */
  businessId?: number;
  /**
   * 新美易单轨迹业务类型
   */
  businessType?: number;
  /**
   * 兑付企业名称
   */
  cashPaymentName?: string;
  /**
   * 兑付状态
   */
  cashState?: number;
  /**
   * 兑付状态集合
   */
  cashStateList?: number[];
  /**
   * 兑付状态名称
   */
  cashStateName?: string;
  /**
   * 子票编号
   */
  childCode?: string;
  /**
   * 子单数
   */
  childCount?: number;
  /**
   * 子票金额
   */
  childMoney?: number;
  /**
   * 当前持单企业的客户经理
   */
  clerker?: string;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  contFlag?: number;
  /**
   * 要查询的合同类型列表
   */
  contTypeList?: number[];
  /**
   * 申请人
   */
  createBy?: string;
  /**
   * 申请时间
   */
  createTime?: string;
  /**
   * 申请时间结束
   */
  createTimeEnd?: string;
  /**
   * 申请时间开始
   */
  createTimeStart?: string;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 期限(天)
   */
  days?: number;
  /**
   * 扣款金额
   */
  debitMoney?: number;
  /**
   * 扣款状态
   */
  debitState?: number;
  /**
   * 优惠金额
   */
  discountAmt?: number;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountType?: string;
  /**
   * 优惠券类型3-代金券，4-利率优惠券
   */
  discountTypeCN?: string;
  /**
   * （查询）兑付日期结束
   */
  dueDateEnd?: string;
  /**
   * （查询）兑付日期开始
   */
  dueDateStart?: string;
  /**
   * 到期标识
   */
  dueMark?: number;
  /**
   * 兑付日
   */
  duepayDate?: string;
  /**
   * 对企业美易单识别层级
   */
  entBillLevel?: number;
  /**
   * 对企业美易单识别号
   */
  entBillNum?: string;
  enterpriseGrade?: number;
  /**
   * 查询岗所属企业列表
   */
  enterpriseIdList?: number[];
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 新美易单轨迹前端区分有没扩展
   */
  expandFlag?: number;
  /**
   * 期望兑付
   */
  expectDuepayDate?: string;
  /**
   * 期望兑付Cn
   */
  expectDuepayDateCn?: string;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * （查询）到期日期结束
   */
  expireDateEnd?: string;
  /**
   * （查询）到期日期开始
   */
  expireDateStart?: string;
  /**
   * 融资机构名称
   */
  financeName?: string;
  /**
   * 融资端客户经理 （同受理人，页面不用）
   */
  finClerker?: string;
  /**
   * 融资机构类型
   */
  finType?: string;
  /**
   * 新融资利率
   */
  fixedRate?: number;
  fixedRateCN?: string;
  /**
   * 融资数据区分标志
   */
  flag?: number;
  /**
   * 持单日
   */
  holdDate?: string;
  /**
   * （查询）持单日期结束
   */
  holdDateEnd?: string;
  /**
   * （查询）持单日期条件标记（不为空时代表单独启用日期查询）
   */
  holdDateFlag?: number;
  /**
   * （查询）持单日期开始
   */
  holdDateStart?: string;
  /**
   * 放款完成结束时间
   */
  holdEntName?: string;
  /**
   * 持单事业部
   */
  holdOuName?: string;
  /**
   * 验证码
   */
  identifyingCode?: string;
  /**
   * 导入时的到期日期
   */
  importExpireDate?: string;
  /**
   * 导入时的开票日期
   */
  importOutputDate?: string;
  /**
   * 收单企业银行账号
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收单企业区域
   */
  inputAreaName?: string;
  /**
   * 收单企业开户行
   */
  inputBank?: string;
  /**
   * 收单企业等级
   */
  inputEntGrade?: string;
  /**
   * 收单企业客户经理
   */
  inputMgrName?: string;
  /**
   * 收票企业组织机构代码
   */
  inputOrganCode?: string;
  /**
   * 收单企业的组织id
   */
  inputOrgId?: number;
  /**
   * 收单企业的组织名称
   */
  inputOrgName?: string;
  /**
   * 收单企业编码
   */
  inputterEntCode?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业名称
   */
  inputterName?: string;
  /**
   * 收单企业事业部
   */
  inputterOuName?: string;
  /**
   * 计息天数
   */
  interestDays?: number;
  /**
   * 发票关联号
   */
  invoiceRelateCode?: string;
  /**
   * 已融资美易单-是否已开具发票
   */
  isApplyInvoice?: string;
  /**
   * 是否升序
   */
  isDesc?: string;
  /**
   * 上一手票（谁给的）企业ID
   */
  lasthandEnterpriseId?: number;
  /**
   * 上一手票（谁给的）企业名称
   */
  lasthandEnterpriseName?: string;
  /**
   * 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司
   */
  lasthandEnterpriseType?: number;
  lasthandOrgId?: number;
  lasthandOrgName?: string;
  leaderId?: number;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 修改人（每次更新都记录）
   */
  modifyBy?: string;
  /**
   * 修改时间（每次更新都记录）
   */
  modifyTime?: string;
  /**
   * 母票编号
   */
  newParentCode?: string;
  /**
   * 母票金额
   */
  newParentMoney?: number;
  /**
   * 不查的票据状态
   */
  notShowBillState?: number;
  /**
   * 美易单表的根票开票企业Id
   */
  originaEnterpriseId?: number;
  /**
   * 美易单表的根票开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 美易单表的根票开票组织Id
   */
  originalOrgId?: number;
  /**
   * 美易单表的根票开票组织名称
   */
  originalOrgName?: string;
  /**
   * 资金单位ID
   */
  ouId?: string;
  /**
   * 当前登录人所属OU单位
   */
  ouIdList?: number[];
  /**
   * 资金单位
   */
  ouName?: string;
  /**
   * 出单企业区域
   */
  outputAreaName?: string;
  /**
   * 付款账户开户行
   */
  outputBank?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * (查询)开票日期结束
   */
  outputDateEnd?: string;
  /**
   * (查询)开票日期开始
   */
  outputDateStart?: string;
  /**
   * 出票企业编码
   */
  outputEntCode?: string;
  /**
   * 出单企业等级
   */
  outputEntGrade?: string;
  /**
   * 出票企业流水号
   */
  outputEntId?: number;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 出单企业客户经理
   */
  outputMgrName?: string;
  /**
   * 开票企业组织机构代码
   */
  outputOrganCode?: string;
  /**
   * 开单企业的组织id
   */
  outputOrgId?: number;
  /**
   * 开单企业的组织名称
   */
  outputOrgName?: string;
  /**
   * 上一手事业部（融资企业）
   */
  outputOuName?: string;
  /**
   * 持票企业ID
   */
  ownerEnterpriseId?: number;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  parentBillCode?: string;
  /**
   * 母票编号
   */
  parentCode?: string;
  /**
   * 母票金额
   */
  parentMoney?: number;
  /**
   * 付款账户号码
   */
  payAccount?: string;
  /**
   * 付款账户名称
   */
  payAccountName?: string;
  /**
   * 融资实际放款日期
   */
  paymentDate?: string;
  /**
   * 放款完成结束时间
   */
  paymentDateEnd?: string;
  /**
   * 放款完成开始时间
   */
  paymentDateStart?: string;
  /**
   * 付款单号
   */
  paymentNo?: string;
  preHandBillCode?: string;
  /**
   * 受理人
   */
  receiver?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 再保理申请批次表ID
   */
  resellBatchId?: number;
  /**
   * 再保理单据表ID
   */
  resellBillId?: number;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * excel行数
   */
  row?: number;
  /**
   * 融资结束日期
   */
  sellApplyDateEnd?: string;
  /**
   * 融资开始日期
   */
  sellApplyDateStart?: string;
  /**
   * 融资生效日
   */
  sellDate?: string;
  /**
   * （查询）融资日期结束
   */
  sellDateEnd?: string;
  /**
   * （查询）融资日期开始
   */
  sellDateStart?: string;
  /**
   * 融资天数
   */
  sellDays?: number;
  /**
   * 融资企业ID
   */
  sellerId?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资表sell_id
   */
  sellId?: number;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * （查询）融资金额最大值，
   */
  sellMoneyMax?: number;
  /**
   * （查询）融资金额最小值，
   */
  sellMoneyMin?: number;
  /**
   * 融资状态
   */
  sellProcessState?: number;
  /**
   * 融资利率
   */
  sellRate?: number;
  /**
   * 融资状态(查询)
   */
  sellState?: number;
  /**
   * 显示标识（用于前端区分哪些东西需要显示）
   */
  showFlag?: number;
  /**
   * 签收日期
   */
  signDate?: string;
  /**
   * （查询）签收日期结束
   */
  signDateEnd?: string;
  /**
   * （查询）签收日期开始
   */
  signDateStart?: string;
  /**
   * 签收页面，展示的协议信息
   */
  signDetailId?: number;
  /**
   * 待签数据
   */
  signList?: string;
  /**
   * 状态
   */
  signStatus?: number;
  /**
   * 排序标志
   */
  sort?: number;
  /**
   * 排序字段名称
   */
  sortName?: string;
  /**
   * 来源: 1签收 2拆分交易留存子单 3拒签生成的单
   */
  sourceType?: number;
  /**
   * ABS申请批次表ID
   */
  spBatchId?: number;
  /**
   * 新美易单轨迹区分整转、拆转
   */
  splitFlag?: number;
  /**
   * 状态集合
   */
  stateList?: number[];
  /**
   * 发票总金额
   */
  totalInvoiceMoney?: number;
  /**
   * 美易单总支出
   */
  totalPay?: number;
  /**
   * 美易单总收入
   */
  totalReceive?: number;
  /**
   * 交易日期（签收日期/融资放款日期）
   */
  tradeDate?: string;
  /**
   * （查询）交易日期结束
   */
  tradeDateEnd?: string;
  /**
   * （查询）交易日期开始
   */
  tradeDateStart?: string;
  /**
   * 交易时签单企业的客户经理
   */
  tradeMgr?: string;
  /**
   * 转票企业ID
   */
  transEntId?: number;
  /**
   * 转票企业名称
   */
  transEntName?: string;
  /**
   * 转单日期
   */
  transferDate?: string;
  /**
   * （查询）转单日期结束
   */
  transferDateEnd?: string;
  /**
   * （查询）转单日期开始
   */
  transferDateStart?: string;
  /**
   * 交易详情ID
   */
  transferDetailId?: number;
  /**
   * 交易详情表版本
   */
  transferDetailVersion?: number;
  /**
   * 交易ID
   */
  transferId?: number;
  /**
   * 交易金额
   */
  transferMoney?: number;
  /**
   * （查询）交易金额最大值，
   */
  transferMoneyMax?: number;
  /**
   * （查询）交易金额最小值，
   */
  transferMoneyMin?: number;
  /**
   * 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销
   */
  transferState?: number;
  /**
   * 交易类型:1-开票;2-转票;3-融资
   */
  transferType?: number;
  /**
   * 业务类型文字描述
   */
  transferTypeText?: string;
  /**
   * 交易主表版本
   */
  transferVersion?: number;
  /**
   * 接受者资金单位
   */
  transOuName?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  [property: string]: any;
}

/*
 *@序号:338
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/745990)
 */

export function transactionIssueSelectOpenebill(
  params?: ISelectOpenebillParams,
) {
  return ajax<ISelectOpenebillParams, ISelectOpenebillData>({
    url: `/transaction/issue/select/openebill`,
    method: "get",
    params,
  });
}

export interface IBillListParams {
  /* 区块链编码*/
  blockCode?: string;
  /* 验证码*/
  identifyingCode?: string;
  /* 美易单ID*/
  billId?: string;
  /* 再保理单据表ID*/
  resellBillId?: string;
  /* 再保理申请批次表ID*/
  resellBatchId?: string;
  /* 交易ID*/
  transferId?: string;
  /* 交易详情ID*/
  transferDetailId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 复核状态：1-待复核；2-复核通过；3-驳回；*/
  applyState?: string;
  /* 交易状态:10无效； 20待签收；30已签收; 30拒签;40-已撤销*/
  transferState?: string;
  /* 每次更新操作加1。乐观锁实现*/
  billVersion?: string;
  /* 美易单状态,以需求文档为准*/
  billState?: string;

  billStateCN?: string;
  /* 交易类型:1-开票;2-转票;3-融资*/
  transferType?: string;
  /* 业务类型文字描述*/
  transferTypeText?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 出票企业编码*/
  outputEntCode?: string;
  /* 转票企业名称*/
  transEntName?: string;
  /* 收单企业名称*/
  inputterName?: string;
  /* 持票企业名称*/
  ownerEnterpriseName?: string;
  /* 票据金额*/
  billMoney?: string;
  /* 交易金额*/
  transferMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 导入时的开票日期*/
  importOutputDate?: string;
  /* 交易日期（签收日期/融资放款日期）*/
  tradeDate?: string;
  /* 到期日期*/
  expireDate?: string;
  /* 导入时的到期日期*/
  importExpireDate?: string;
  /* 付款单号*/
  paymentNo?: string;
  /* 交易主表版本*/
  transferVersion?: string;
  /* 交易详情表版本*/
  transferDetailVersion?: string;
  /* 备注*/
  remark?: string;
  /* （查询）票据金额最小值，*/
  billMoneyMin?: string;
  /* （查询）票据金额最大值，*/
  billMoneyMax?: string;
  /* （查询）交易金额最小值，*/
  transferMoneyMin?: string;
  /* （查询）交易金额最大值，*/
  transferMoneyMax?: string;
  /* (查询)开票日期开始*/
  outputDateStart?: string;
  /* (查询)开票日期结束*/
  outputDateEnd?: string;
  /* （查询）交易日期开始*/
  tradeDateStart?: string;
  /* （查询）交易日期结束*/
  tradeDateEnd?: string;
  /* （查询）到期日期开始*/
  expireDateStart?: string;
  /* （查询）到期日期结束*/
  expireDateEnd?: string;
  /* （查询）兑付日期开始*/
  dueDateStart?: string;
  /* （查询）兑付日期结束*/
  dueDateEnd?: string;
  /* 兑付日*/
  duepayDate?: string;
  /* 出票企业流水号*/
  outputEntId?: string;
  /* 收单企业ID*/
  inputterId?: string;
  /* 持票企业ID*/
  ownerEnterpriseId?: string;
  /* 转票企业ID*/
  transEntId?: string;
  /* 期限(天)*/
  days?: string;
  /* 融资利率*/
  sellRate?: string;
  /* 新融资利率*/
  fixedRate?: string;

  fixedRateCN?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资天数*/
  sellDays?: string;
  /* 融资状态(查询)*/
  sellState?: string;
  /* 扣款金额*/
  debitMoney?: string;
  /* 扣款状态*/
  debitState?: string;
  /* 子单数*/
  childCount?: string;
  /* 排序字段名称*/
  sortName?: string;
  /* 是否升序*/
  isDesc?: string;
  /* 收票企业组织机构代码*/
  inputOrganCode?: string;
  /* 开票企业组织机构代码*/
  outputOrganCode?: string;
  /* 状态集合*/
  stateList?: string;
  /* 资金单位*/
  ouName?: string;
  /* 收单企业事业部*/
  inputterOuName?: string;
  /* 付款账户号码*/
  payAccount?: string;
  /* 付款账户名称*/
  payAccountName?: string;
  /* 付款账户开户行*/
  outputBank?: string;
  /* 收单企业银行账号*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;
  /* 收单企业开户行*/
  inputBank?: string;
  /* 资金单位ID*/
  ouId?: string;
  /* 申请人*/
  createBy?: string;
  /* 申请时间*/
  createTime?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 流转次数*/
  exchangeCount?: string;
  /* 流转金额*/
  exchangeMoney?: string;
  /* 美易单表的根票开票企业Id*/
  originaEnterpriseId?: string;
  /* 美易单表的根票开票企业名称*/
  originaEnterpriseName?: string;
  /* 美易单表的根票开票组织Id*/
  originalOrgId?: string;
  /* 美易单表的根票开票组织名称*/
  originalOrgName?: string;
  /* 上一手票（谁给的）企业ID*/
  lasthandEnterpriseId?: string;
  /* 上一手票（谁给的）企业名称*/
  lasthandEnterpriseName?: string;
  /* 上一手票（谁给的）企业类型1:成员企业 2 供应链企业 3保理公司*/
  lasthandEnterpriseType?: string;

  lasthandOrgId?: string;

  lasthandOrgName?: string;
  /* 层级*/
  billLevel?: string;
  /* 兑付企业名称*/
  cashPaymentName?: string;
  /* 融资机构名称*/
  financeName?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 融资企业ID*/
  sellerId?: string;
  /* 融资生效日*/
  sellDate?: string;
  /* （查询）融资日期开始*/
  sellDateStart?: string;
  /* （查询）融资日期结束*/
  sellDateEnd?: string;
  /* 期限*/
  limitDays?: string;
  /* 美易单总支出*/
  totalPay?: string;
  /* 美易单总收入*/
  totalReceive?: string;
  /* 经办人*/
  applyer?: string;
  /* 复核人*/
  reviewer?: string;
  /* 母票金额*/
  parentMoney?: string;
  /* 母票编号*/
  parentCode?: string;
  /* 子票金额*/
  childMoney?: string;
  /* 子票编号*/
  childCode?: string;
  /* 实际融资天数*/
  actualDays?: string;
  /* 实收融资款*/
  actualFinancingMoney?: string;
  /* 实付利息*/
  actualInterest?: string;
  /* 接受者资金单位*/
  transOuName?: string;
  /* （查询）转单日期开始*/
  transferDateStart?: string;
  /* （查询）转单日期结束*/
  transferDateEnd?: string;
  /* 查询岗所属企业列表*/
  enterpriseIdList?: string;
  /* 当前登录人所属OU单位*/
  ouIdList?: string;
  /* 转单日期*/
  transferDate?: string;
  /* 申请时间开始*/
  createTimeStart?: string;
  /* 申请时间结束*/
  createTimeEnd?: string;
  /* 计息天数*/
  interestDays?: string;
  /* 待签数据*/
  signList?: string;
  /* 母票编号*/
  newParentCode?: string;
  /* 母票金额*/
  newParentMoney?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  showFlag?: string;
  /* （查询）融资金额最小值，*/
  sellMoneyMin?: string;
  /* （查询）融资金额最大值，*/
  sellMoneyMax?: string;
  /* （查询）实收融资金额最小值，*/
  actualFinancingMoneyMin?: string;
  /* （查询）实收融资金额最大值，*/
  actualFinancingMoneyMax?: string;
  /* 显示标识（用于前端区分哪些东西需要显示）*/
  contFlag?: string;
  /* 新美易单轨迹前端区分有没扩展*/
  expandFlag?: string;
  /* 新美易单轨迹区分整转、拆转*/
  splitFlag?: string;
  /* 新美易单轨迹业务Id*/
  businessId?: string;
  /* 新美易单轨迹业务类型*/
  businessType?: string;
  /* 来源: 1签收 2拆分交易留存子单 3拒签生成的单*/
  sourceType?: string;
  /* 到期标识*/
  dueMark?: string;
  /* 发票关联号*/
  invoiceRelateCode?: string;
  /* 发票总金额*/
  totalInvoiceMoney?: string;
  /* 签收页面，展示的协议信息*/
  signDetailId?: string;
  /* 对企业美易单识别号*/
  entBillNum?: string;
  /* 对企业美易单识别层级*/
  entBillLevel?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 币种*/
  currencyCode?: string;
  /* excel行数*/
  row?: string;
  /* 当前持单企业的客户经理*/
  clerker?: string;

  enterpriseGrade?: string;
  /* 融资端客户经理 （同受理人，页面不用）*/
  finClerker?: string;
  /* 收单企业区域*/
  inputAreaName?: string;
  /* 收单企业等级*/
  inputEntGrade?: string;
  /* 收单企业客户经理*/
  inputMgrName?: string;
  /* 收单企业编码*/
  inputterEntCode?: string;
  /* 出单企业等级*/
  outputEntGrade?: string;
  /* 出单企业区域*/
  outputAreaName?: string;
  /* 出单企业客户经理*/
  outputMgrName?: string;
  /* 融资状态*/
  sellProcessState?: string;
  /* 不查的票据状态*/
  notShowBillState?: string;
  /* 融资实际放款日期*/
  paymentDate?: string;
  /* 受理人*/
  receiver?: string;
  /* 签收日期*/
  signDate?: string;
  /* 排序标志*/
  sort?: string;
  /* 交易时签单企业的客户经理*/
  tradeMgr?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 融资开始日期*/
  sellApplyDateStart?: string;
  /* 融资结束日期*/
  sellApplyDateEnd?: string;
  /* 要查询的合同类型列表*/
  contTypeList?: string;
  /* 状态*/
  signStatus?: string;
  /* 票据状态集合*/
  billStateList?: string;
  /* 兑付状态*/
  cashState?: string;
  /* 兑付状态集合*/
  cashStateList?: string;

  billStateName?: string;
  /* 兑付状态名称*/
  cashStateName?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单企业的组织id*/
  outputOrgId?: string;
  /* 开单企业的组织名称*/
  outputOrgName?: string;
  /* 上一手事业部（融资企业）*/
  outputOuName?: string;
  /* 收单企业的组织id*/
  inputOrgId?: string;
  /* 收单企业的组织名称*/
  inputOrgName?: string;
  /* 手续费*/
  actualFee?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 融资机构类型*/
  finType?: string;
  /* 实际费率*/
  actualRate?: string;

  actualRateCN?: string;

  bankServiceAmt?: string;

  bankServiceRate?: string;

  bankServiceRateCN?: string;
  /* （查询）签收日期开始*/
  signDateStart?: string;
  /* （查询）签收日期结束*/
  signDateEnd?: string;
  /* 持单日*/
  holdDate?: string;
  /* （查询）持单日期开始*/
  holdDateStart?: string;
  /* （查询）持单日期结束*/
  holdDateEnd?: string;
  /* （查询）持单日期条件标记（不为空时代表单独启用日期查询）*/
  holdDateFlag?: string;
  /* 放款完成开始时间*/
  paymentDateStart?: string;
  /* 放款完成结束时间*/
  paymentDateEnd?: string;
  /* 融资数据区分标志*/
  flag?: string;
  /* 放款完成结束时间*/
  holdEntName?: string;
  /* 持单事业部*/
  holdOuName?: string;
  /* 申请批次Id*/
  applyId?: string;
  /* 融资表sell_id*/
  sellId?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* ABS申请批次表ID*/
  spBatchId?: string;
  /* 期望兑付Cn*/
  expectDuepayDateCn?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountType?: string;
  /* 优惠券类型3-代金券，4-利率优惠券*/
  discountTypeCN?: string;
  /* 优惠金额*/
  discountAmt?: string;
  /* 已融资美易单-是否已开具发票*/
  isApplyInvoice?: string;

  parentBillCode?: string;

  preHandBillCode?: string;

  batchCode?: string;

  leaderId?: string;
}

/*
 *@序号:339
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单列表查询导出(https://apaas-yapi.midea.com/project/7260/interface/api/745993)
 */

export function transactionIssueExportOpenBillList(data?: IBillListParams) {
  return ajax<IBillListParams, any>({
    url: `/transaction/issue/export/openBillList`,
    method: "post",
    data,
  });
}

export interface IPersonProcessParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 主键*/
  id?: string;
  /* 执行状态:1-待处理；2-成功；3-失败；4-拒绝*/
  exeStatus?: string;
  /* 执行状态:1-待处理；2-成功；3-失败；4-拒绝*/
  exeStatusStr?: string;
  /* 执行次数*/
  exeCount?: string;
  /* 调用渠道*/
  channel?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* Ou单位名称*/
  ouName?: string;
  /* 法人code*/
  legalcode?: string;
  /* 法人name*/
  legalname?: string;
  /* 付款账号（美易单内部账户）*/
  payAccount?: string;
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 票据金额(0-10亿之间)*/
  billMoney?: string;
  /* 期望开单日*/
  expectOutputDate?: string;
  /* 期限*/
  limitDays?: string;
  /* 发票文档编号*/
  invoiceDocid?: string;
  /* 收票企业名称*/
  inputterName?: string;
  /* 收单人编码*/
  inputterCode?: string;
  /* 收票企业开户行*/
  inputBank?: string;
  /* 收票企业银行账号/内部户*/
  inputAccount?: string;
  /* 内部户名称*/
  inputAccountName?: string;

  currencyCode?: string;

  operateBy?: string;

  operateByName?: string;

  remark?: string;
  /* 票据金额(0-10亿之间)*/
  billMoneyMin?: string;
  /* 票据金额(0-10亿之间)*/
  billMoneyMax?: string;
  /* 状态集合*/
  stateList?: string;
  /* 事业部名称*/
  bizUnitName?: string;
  /* 发票占额批次号*/
  invoiceOccupyBatch?: string;
  /* 代开发票,1:代开发票,0:非代开发票*/
  proxyType?: string;
  /* 代开发票,1:代开发票,0:非代开发票*/
  proxyTypeStr?: string;
  /* 创建时间字符串（接受时间）*/
  createTimeStr?: string;
  /* version 版本号*/
  version?: string;

  medBillNo?: string;

  actualOpenDate?: string;

  expireDate?: string;

  ouId?: string;

  payAccountName?: string;

  payeeBankProvinceCode?: string;

  payeeBankProvinceName?: string;

  payeeBankCityCode?: string;

  payeeBankCityName?: string;

  supplierAddress?: string;

  applyDetailNo?: string;
  /* 人工处理表主键*/
  handleId?: string;
  /* 人工处理表状态*/
  handleExeStatus?: string;
  /* 人工处理表执行次数*/
  handleExeCount?: string;
  /* 人工处理表业务编码*/
  businessCode?: string;
  /* 人工处理表业务关联Id*/
  businessId?: string;
  /* 人工处理失败原因*/
  handleRemark?: string;
  /* 开单中间表主键*/
  openId?: string;
  /* 期望开单日*/
  expectOutputDateStart?: string;
  /* 期望开单日*/
  expectOutputDateEnd?: string;
  /* 实际开单日开始*/
  actualOpenDateStart?: string;
  /* 实际开单日结束*/
  actualOpenDateEnd?: string;

  pageNo: string;

  pageSize: string;
}
export interface IPersonProcessData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  actualOpenDate?: string;
  /**
   * 实际开单日结束
   */
  actualOpenDateEnd?: string;
  /**
   * 实际开单日开始
   */
  actualOpenDateStart?: string;
  /**
   * 开单申请批次号
   */
  applyBatchNo?: string;
  /**
   * 网银付款申请单号（上游系统单号）
   */
  applyBillNo?: string;
  applyDetailNo?: string;
  /**
   * 票据金额(0-10亿之间)
   */
  billMoney?: number;
  /**
   * 票据金额(0-10亿之间)
   */
  billMoneyMax?: number;
  /**
   * 票据金额(0-10亿之间)
   */
  billMoneyMin?: number;
  /**
   * 事业部名称
   */
  bizUnitName?: string;
  /**
   * 人工处理表业务编码
   */
  businessCode?: string;
  /**
   * 人工处理表业务关联Id
   */
  businessId?: number;
  /**
   * 调用渠道
   */
  channel?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 创建时间字符串（接受时间）
   */
  createTimeStr?: string;
  currencyCode?: string;
  /**
   * 执行次数
   */
  exeCount?: number;
  /**
   * 执行状态:1-待处理；2-成功；3-失败；4-拒绝
   */
  exeStatus?: number;
  /**
   * 执行状态:1-待处理；2-成功；3-失败；4-拒绝
   */
  exeStatusStr?: string;
  /**
   * 期望开单日
   */
  expectOutputDate?: string;
  /**
   * 期望开单日
   */
  expectOutputDateEnd?: string;
  /**
   * 期望开单日
   */
  expectOutputDateStart?: string;
  expireDate?: string;
  /**
   * 人工处理表执行次数
   */
  handleExeCount?: number;
  /**
   * 人工处理表状态
   */
  handleExeStatus?: number;
  /**
   * 人工处理表主键
   */
  handleId?: number;
  /**
   * 人工处理失败原因
   */
  handleRemark?: string;
  /**
   * 主键
   */
  id?: number;
  /**
   * 收票企业银行账号/内部户
   */
  inputAccount?: string;
  /**
   * 内部户名称
   */
  inputAccountName?: string;
  /**
   * 收票企业开户行
   */
  inputBank?: string;
  /**
   * 收单人编码
   */
  inputterCode?: string;
  /**
   * 收票企业名称
   */
  inputterName?: string;
  /**
   * 发票文档编号
   */
  invoiceDocid?: string;
  /**
   * 发票占额批次号
   */
  invoiceOccupyBatch?: string;
  /**
   * 法人code
   */
  legalcode?: string;
  /**
   * 法人name
   */
  legalname?: string;
  /**
   * 期限
   */
  limitDays?: number;
  medBillNo?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 开单中间表主键
   */
  openId?: number;
  operateBy?: string;
  operateByName?: string;
  ouId?: string;
  /**
   * Ou单位名称
   */
  ouName?: string;
  /**
   * 开票企业名称
   */
  outputEntName?: string;
  /**
   * 付款账号（美易单内部账户）
   */
  payAccount?: string;
  payAccountName?: string;
  payeeBankCityCode?: string;
  payeeBankCityName?: string;
  payeeBankProvinceCode?: string;
  payeeBankProvinceName?: string;
  /**
   * 代开发票,1:代开发票,0:非代开发票
   */
  proxyType?: number;
  /**
   * 代开发票,1:代开发票,0:非代开发票
   */
  proxyTypeStr?: string;
  remark?: string;
  /**
   * 状态集合
   */
  stateList?: number[];
  supplierAddress?: string;
  /**
   * version 版本号
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:340
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:人工处理查询(https://apaas-yapi.midea.com/project/7260/interface/api/745996)
 */

export function transactionIssueSelectGfpPersonProcess(
  params?: IPersonProcessParams,
) {
  return ajax<IPersonProcessParams, IPersonProcessData>({
    url: `/transaction/issue/select/gfp/person/process`,
    method: "get",
    params,
  });
}

export interface IGfpBillParams {
  openId: string;
}

/*
 *@序号:341
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单指令处理-人工重试开票(https://apaas-yapi.midea.com/project/7260/interface/api/745999)
 */

export function transactionIssueResendGfpBill(data?: IGfpBillParams) {
  return ajax<IGfpBillParams, any>({
    url: `/transaction/issue/resend/gfp/bill`,
    method: "post",
    data,
  });
}

export interface IGfpFailParams {
  openId: string;

  remark: string;
}

/*
 *@序号:342
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单指令处理-人工确认失败(https://apaas-yapi.midea.com/project/7260/interface/api/746002)
 */

export function transactionIssueConfirmGfpFail(data?: IGfpFailParams) {
  return ajax<IGfpFailParams, any>({
    url: `/transaction/issue/confirm/gfp/fail`,
    method: "post",
    data,
  });
}

export interface IBillDetailParams {
  id: string;
}

/*
 *@序号:343
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:人工处理查询详情(https://apaas-yapi.midea.com/project/7260/interface/api/746005)
 */

export function transactionIssueSelectGfpBillDetail(
  params?: IBillDetailParams,
) {
  return ajax<IBillDetailParams, any>({
    url: `/transaction/issue/select/gfp/bill/detail`,
    method: "get",
    params,
  });
}

export interface ICreditQueryParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 付款记录流水号*/
  creditId?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 持票（企业）流水号*/
  entId?: string;
  /* 持票（企业）名称*/
  entName?: string;
  /* 持票（企业）类型*/
  entType?: string;
  /* 付款状态：0-待处理；处理中:99; 3-成功；4-失败*/
  creditState?: string;
  /* 付款申请日*/
  creditDate?: string;
  /* 备注*/
  remark?: string;
  /* 订单号*/
  tradeNo?: string;
  /* 下单时间*/
  tradeTime?: string;
  /* 开票企业ID*/
  originaEnterpriseId?: string;
  /* 开票企业名称*/
  originaEnterpriseName?: string;
  /* 开票企业类型*/
  originaEnterpriseType?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 重发标志 0，未重发，1已重发过*/
  resendFlag?: string;
  /* 是否可重发， true可以，false不可以, f, a, l, s, e*/
  canResendFlag?: string;
  /* 是否可设置成功状态， true可以，false不可以, f, a, l, s, e*/
  canSetCreditStateFlag?: string;
  /* 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败*/
  refCreditState?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 最后一次失败原因*/
  lastFailReason?: string;
  /* 原始（根节点）美易单的金额(额外字段，兑付计划使用）*/
  originalMoney?: string;
  /* 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDate?: string;
  /* 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateStart?: string;
  /* 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateEnd?: string;
  /* 原始（根节点）美易单的开票日(额外字段，兑付计划使用）*/
  outputDate?: string;
  /* 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）*/
  limitDays?: string;
  /* 原始（根节点）美易单的收票企业名称*/
  inputEntName?: string;
  /* 企业名字过滤条件*/
  entNameList?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 开票企业的组织id*/
  originalOrgId?: string;
  /* 开票企业的组织名称*/
  originalOrgName?: string;
  /* 通知状态*/
  noticeState?: string;
  /* 通知结果*/
  noticeResult?: string;
  /* 通知失败次数*/
  failCount?: string;
  /* 兑付渠道*/
  cashingChannel?: string;
  /* 实际兑付日*/
  duepayDate?: string;
  /* 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号*/
  duePayType?: string;
  /* 关联审批id*/
  reviewId?: string;
  /* 关联审批状态*/
  reviewStatus?: string;
}
export interface ICreditQueryData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单流水号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 是否可重发， true可以，false不可以
   */
  canResendFlag?: boolean;
  /**
   * 是否可设置成功状态， true可以，false不可以
   */
  canSetCreditStateFlag?: boolean;
  /**
   * 兑付渠道
   */
  cashingChannel?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款申请日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；处理中:99; 3-成功；4-失败
   */
  creditState?: number;
  /**
   * 实际兑付日
   */
  duepayDate?: string;
  /**
   * 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号
   */
  duePayType?: number;
  /**
   * 持票（企业）流水号
   */
  entId?: number;
  /**
   * 持票（企业）名称
   */
  entName?: string;
  /**
   * 企业名字过滤条件
   */
  entNameList?: string[];
  /**
   * 持票（企业）类型
   */
  entType?: number;
  /**
   * 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDate?: string;
  /**
   * 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateEnd?: string;
  /**
   * 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateStart?: string;
  /**
   * 通知失败次数
   */
  failCount?: number;
  /**
   * 原始（根节点）美易单的收票企业名称
   */
  inputEntName?: string;
  /**
   * 最后一次失败原因
   */
  lastFailReason?: string;
  /**
   * 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）
   */
  limitDays?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 通知结果
   */
  noticeResult?: string;
  /**
   * 通知状态
   */
  noticeState?: number;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 原始（根节点）美易单的金额(额外字段，兑付计划使用）
   */
  originalMoney?: number;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 原始（根节点）美易单的开票日(额外字段，兑付计划使用）
   */
  outputDate?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败
   */
  refCreditState?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发标志 0，未重发，1已重发过
   */
  resendFlag?: number;
  /**
   * 关联审批id
   */
  reviewId?: number;
  /**
   * 关联审批状态
   */
  reviewStatus?: number;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:344
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划查询(https://apaas-yapi.midea.com/project/7260/interface/api/746008)
 */

export function payplanCreditQuery(data?: ICreditQueryParams) {
  return ajax<ICreditQueryParams, ICreditQueryData>({
    url: `/payplan/credit/query`,
    method: "post",
    data,
  });
}

export interface IQueryFailParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 付款记录流水号*/
  creditId?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 持票（企业）流水号*/
  entId?: string;
  /* 持票（企业）名称*/
  entName?: string;
  /* 持票（企业）类型*/
  entType?: string;
  /* 付款状态：0-待处理；处理中:99; 3-成功；4-失败*/
  creditState?: string;
  /* 付款申请日*/
  creditDate?: string;
  /* 备注*/
  remark?: string;
  /* 订单号*/
  tradeNo?: string;
  /* 下单时间*/
  tradeTime?: string;
  /* 开票企业ID*/
  originaEnterpriseId?: string;
  /* 开票企业名称*/
  originaEnterpriseName?: string;
  /* 开票企业类型*/
  originaEnterpriseType?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 重发标志 0，未重发，1已重发过*/
  resendFlag?: string;
  /* 是否可重发， true可以，false不可以, f, a, l, s, e*/
  canResendFlag?: string;
  /* 是否可设置成功状态， true可以，false不可以, f, a, l, s, e*/
  canSetCreditStateFlag?: string;
  /* 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败*/
  refCreditState?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 最后一次失败原因*/
  lastFailReason?: string;
  /* 原始（根节点）美易单的金额(额外字段，兑付计划使用）*/
  originalMoney?: string;
  /* 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDate?: string;
  /* 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateStart?: string;
  /* 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateEnd?: string;
  /* 原始（根节点）美易单的开票日(额外字段，兑付计划使用）*/
  outputDate?: string;
  /* 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）*/
  limitDays?: string;
  /* 原始（根节点）美易单的收票企业名称*/
  inputEntName?: string;
  /* 企业名字过滤条件*/
  entNameList?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 开票企业的组织id*/
  originalOrgId?: string;
  /* 开票企业的组织名称*/
  originalOrgName?: string;
  /* 通知状态*/
  noticeState?: string;
  /* 通知结果*/
  noticeResult?: string;
  /* 通知失败次数*/
  failCount?: string;
  /* 兑付渠道*/
  cashingChannel?: string;
  /* 实际兑付日*/
  duepayDate?: string;
  /* 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号*/
  duePayType?: string;
  /* 关联审批id*/
  reviewId?: string;
  /* 关联审批状态*/
  reviewStatus?: string;
}
export interface IQueryFailData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单流水号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 是否可重发， true可以，false不可以
   */
  canResendFlag?: boolean;
  /**
   * 是否可设置成功状态， true可以，false不可以
   */
  canSetCreditStateFlag?: boolean;
  /**
   * 兑付渠道
   */
  cashingChannel?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款申请日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；处理中:99; 3-成功；4-失败
   */
  creditState?: number;
  /**
   * 实际兑付日
   */
  duepayDate?: string;
  /**
   * 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号
   */
  duePayType?: number;
  /**
   * 持票（企业）流水号
   */
  entId?: number;
  /**
   * 持票（企业）名称
   */
  entName?: string;
  /**
   * 企业名字过滤条件
   */
  entNameList?: string[];
  /**
   * 持票（企业）类型
   */
  entType?: number;
  /**
   * 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDate?: string;
  /**
   * 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateEnd?: string;
  /**
   * 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateStart?: string;
  /**
   * 通知失败次数
   */
  failCount?: number;
  /**
   * 原始（根节点）美易单的收票企业名称
   */
  inputEntName?: string;
  /**
   * 最后一次失败原因
   */
  lastFailReason?: string;
  /**
   * 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）
   */
  limitDays?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 通知结果
   */
  noticeResult?: string;
  /**
   * 通知状态
   */
  noticeState?: number;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 原始（根节点）美易单的金额(额外字段，兑付计划使用）
   */
  originalMoney?: number;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 原始（根节点）美易单的开票日(额外字段，兑付计划使用）
   */
  outputDate?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败
   */
  refCreditState?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发标志 0，未重发，1已重发过
   */
  resendFlag?: number;
  /**
   * 关联审批id
   */
  reviewId?: number;
  /**
   * 关联审批状态
   */
  reviewStatus?: number;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:345
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划失败(https://apaas-yapi.midea.com/project/7260/interface/api/746011)
 */

export function payplanCreditQueryFail(data?: IQueryFailParams) {
  return ajax<IQueryFailParams, IQueryFailData>({
    url: `/payplan/credit/queryFail`,
    method: "post",
    data,
  });
}

export interface IFailRequestParams {
  creditList: string;

  fileBOListStr?: string;

  resendMark: string;
}

/*
 *@序号:346
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:失败付款单重发申请(https://apaas-yapi.midea.com/project/7260/interface/api/746014)
 */

export function payplanCreditResendFailRequest(data?: IFailRequestParams) {
  return ajax<IFailRequestParams, any>({
    url: `/payplan/credit/resendFailRequest`,
    method: "post",
    data,
  });
}

export interface ICreditDetailParams {
  creditId: string;
}
export interface ICreditDetailData {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 持票（企业）名称
   */
  entName?: string;
  /**
   * 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDate?: string;
  /**
   * 内部法人持单企业内部户名称
   */
  inputAccountName?: string;
  /**
   * 原始（根节点）美易单的收票企业名称
   */
  inputEntName?: string;
  /**
   * 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）
   */
  limitDays?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 原始（根节点）美易单的金额(额外字段，兑付计划使用）
   */
  originalMoney?: number;
  /**
   * 原始（根节点）美易单的开票日(额外字段，兑付计划使用）
   */
  outputDate?: string;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  [property: string]: any;
}

/*
 *@序号:347
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-付款单明细(https://apaas-yapi.midea.com/project/7260/interface/api/746017)
 */

export function payplanCreditDetail(data?: ICreditDetailParams) {
  return ajax<ICreditDetailParams, ICreditDetailData>({
    url: `/payplan/credit/detail`,
    method: "post",
    data,
  });
}

export interface IPlanQueryParams {
  creditId: string;

  pageno: string;

  pagesize: string;
}
export interface IPlanQueryData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 加密银行卡号
   */
  accountNoAES?: string;
  /**
   * 收款方账户名称
   */
  acctName?: string;
  /**
   * 收款方银行账户
   */
  acctNo?: string;
  /**
   * 收款方账户类型：从银行账户表获取
   */
  acctType?: number;
  /**
   * 重发申请人
   */
  applyUserName?: string;
  /**
   * 收款方银行代码
   */
  bankCode?: string;
  /**
   * 收款方银行名称
   */
  bankName?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单编号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 卡归属市
   */
  cardCity?: string;
  /**
   * 卡归属省份
   */
  cardProvince?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；1-成功；2-失败
   */
  creditState?: number;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 扣款明细记录流水号
   */
  debitDetailId?: number;
  /**
   * 流水号
   */
  detailId?: number;
  /**
   * 付款方账户名称
   */
  duePayAcctName?: string;
  /**
   * 付款方银行账户
   */
  duePayAcctNo?: string;
  /**
   * 付款方银行名称
   */
  duePayBankName?: string;
  /**
   * 收钱的（企业）流水号
   */
  entId?: number;
  /**
   * 收钱的（企业）名称
   */
  entName?: string;
  /**
   * 收钱的（企业）类型
   */
  entType?: number;
  /**
   * 美的付错误代码
   */
  errorCode?: string;
  /**
   * 美的付错误描述
   */
  errorDesc?: string;
  /**
   * 失败原因
   */
  failReason?: string;
  /**
   * 收票企业类型(来源自开票渠道）
   */
  inputEnterpriseCode?: string;
  /**
   * 收票企业ID
   */
  inputEnterpriseId?: number;
  /**
   * 收票企业名称
   */
  inputEnterpriseName?: string;
  /**
   * 收票企业类型
   */
  inputEnterpriseType?: number;
  /**
   * 是否人工确认异常
   */
  isConfirmError?: string;
  /**
   * 美的支付用户名
   */
  loginName?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 扣款方（开票企业）ID
   */
  originaEnterpriseId?: number;
  /**
   * 扣款方（开票企业）名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 商户号
   */
  partner?: string;
  /**
   * 商户秘钥
   */
  partnerKey?: string;
  /**
   * 兑付计划号
   */
  planCode?: string;
  /**
   * 兑付子计划号
   */
  planDetailCode?: string;
  /**
   * 收款人姓名
   */
  realName?: string;
  /**
   * 退汇标识：N-正常，Y-退汇，null-正常
   */
  reexchangeFlag?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发时间
   */
  resendTime?: string;
  /**
   * 美的付结果代码
   */
  resultCode?: string;
  /**
   * 美的付结果描述
   */
  resultMsg?: string;
  /**
   * 审批时间
   */
  reviewTime?: string;
  /**
   * 审批人员
   */
  reviewUserName?: string;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * （农业银行专用） 0：同行支付，1：跨行支付
   */
  tradeType?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 美的支付用户类型
   */
  userType?: string;
  /**
   * 版本号
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:348
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-付款单兑付子计划列表(https://apaas-yapi.midea.com/project/7260/interface/api/746020)
 */

export function payplanCreditSubPlanQuery(data?: IPlanQueryParams) {
  return ajax<IPlanQueryParams, IPlanQueryData>({
    url: `/payplan/credit/subPlan/query`,
    method: "post",
    data,
  });
}

export interface IWaitauthQueryParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 流水号*/
  planId?: string;
  /* 兑付计划号*/
  planCode?: string;
  /* 母单ID*/
  originalId?: string;
  /* 母单单号*/
  originalCode?: string;
  /* 兑付金额*/
  planMoney?: string;
  /* 兑付计划状态：0-待处理；1-已导入; 2-失败； 20-重发待审批；21-重发待处理；22-重发审批不通过*/
  planState?: string;
  /* 版本*/
  version?: string;

  subPlanList?: string;

  subPlanList?: string;

  subPlanList?: string;

  subPlanList?: string;
  /* 流水号*/
  subPlanList?: string;
  /* 扣款明细记录流水号*/
  subPlanList?: string;
  /* 付款记录流水号*/
  subPlanList?: string;
  /* 原始（根节点）ID*/
  subPlanList?: string;
  /* 原始（根节点）美易单编号*/
  subPlanList?: string;
  /* 美易单编号*/
  subPlanList?: string;
  /* 美易单编号*/
  subPlanList?: string;
  /* 美易单金额*/
  subPlanList?: string;
  /* 收钱的（企业）流水号*/
  subPlanList?: string;
  /* 收钱的（企业）名称*/
  subPlanList?: string;
  /* 收钱的（企业）类型*/
  subPlanList?: string;
  /* ou单位主键*/
  subPlanList?: string;
  /* ou单位名称*/
  subPlanList?: string;
  /* 收款方银行账户*/
  subPlanList?: string;
  /* 收款方账户名称*/
  subPlanList?: string;
  /* 收款方银行代码*/
  subPlanList?: string;
  /* 收款方银行名称*/
  subPlanList?: string;
  /* 收款方账户类型：从银行账户表获取*/
  subPlanList?: string;
  /* 付款状态：0-待处理；1-成功；2-失败*/
  subPlanList?: string;
  /* 付款日*/
  subPlanList?: string;
  /* 备注*/
  subPlanList?: string;
  /* 订单号*/
  subPlanList?: string;
  /* 下单时间*/
  subPlanList?: string;
  /* （农业银行专用） 0：同行支付，1：跨行支付*/
  subPlanList?: string;
  /* 美的支付用户名*/
  subPlanList?: string;
  /* 美的支付用户类型*/
  subPlanList?: string;
  /* 收款人姓名*/
  subPlanList?: string;
  /* 卡归属省份*/
  subPlanList?: string;
  /* 卡归属市*/
  subPlanList?: string;
  /* 扣款方（开票企业）ID*/
  subPlanList?: string;
  /* 扣款方（开票企业）名称*/
  subPlanList?: string;
  /* 开票企业类型*/
  subPlanList?: string;
  /* 美的付结果代码*/
  subPlanList?: string;
  /* 美的付结果描述*/
  subPlanList?: string;
  /* 商户号*/
  subPlanList?: string;
  /* 商户秘钥*/
  subPlanList?: string;
  /* 加密银行卡号*/
  subPlanList?: string;
  /* 美的付错误代码*/
  subPlanList?: string;
  /* 美的付错误描述*/
  subPlanList?: string;
  /* 兑付计划号*/
  subPlanList?: string;
  /* 兑付子计划号*/
  subPlanList?: string;
  /* 版本号*/
  subPlanList?: string;
  /* 收票企业ID*/
  subPlanList?: string;
  /* 收票企业名称*/
  subPlanList?: string;
  /* 收票企业类型*/
  subPlanList?: string;
  /* 收票企业类型(来源自开票渠道）*/
  subPlanList?: string;
  /* 币种*/
  subPlanList?: string;
  /* 失败原因*/
  subPlanList?: string;
  /* 重发时间*/
  subPlanList?: string;
  /* 重发申请人*/
  subPlanList?: string;
  /* 审批时间*/
  subPlanList?: string;
  /* 审批人员*/
  subPlanList?: string;
  /* 是否人工确认异常*/
  subPlanList?: string;
  /* 持票企业的组织id*/
  subPlanList?: string;
  /* 持票企业的组织名称*/
  subPlanList?: string;
  /* 开票企业的组织id*/
  subPlanList?: string;
  /* 开票企业的组织名称*/
  subPlanList?: string;
  /* 渠道标识*/
  subPlanList?: string;
  /* 付款方银行账户*/
  subPlanList?: string;
  /* 付款方账户名称*/
  subPlanList?: string;
  /* 付款方银行名称*/
  subPlanList?: string;
  /* 退汇标识：N-正常，Y-退汇，null-正常*/
  subPlanList?: string;
  /* 到期时间*/
  expireDate?: string;
  /* 到期时间（查询条件左）*/
  expireDateStart?: string;
  /* 到期时间（查询条件右）*/
  expireDateEnd?: string;
  /* 重发的审核状态*/
  reviewStatus?: string;
  /* 重发的审核记录ID*/
  reviewId?: string;
  /* 渠道标识*/
  trdChannel?: string;
}
export interface IWaitauthQueryData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  createBy?: string;
  createTime?: string;
  /**
   * 到期时间
   */
  expireDate?: string;
  /**
   * 到期时间（查询条件右）
   */
  expireDateEnd?: string;
  /**
   * 到期时间（查询条件左）
   */
  expireDateStart?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 母单单号
   */
  originalCode?: string;
  /**
   * 母单ID
   */
  originalId?: number;
  /**
   * 兑付计划号
   */
  planCode?: string;
  /**
   * 流水号
   */
  planId?: number;
  /**
   * 兑付金额
   */
  planMoney?: number;
  /**
   * 兑付计划状态：0-待处理；1-已导入; 2-失败； 20-重发待审批；21-重发待处理；22-重发审批不通过
   */
  planState?: number;
  /**
   * 重发的审核记录ID
   */
  reviewId?: number;
  /**
   * 重发的审核状态
   */
  reviewStatus?: number;
  /**
   * 兑付子计划存放属性
   */
  subPlanList?: SubPlanList[];
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 版本
   */
  version?: number;
  [property: string]: any;
}

export interface SubPlanList {
  /**
   * 加密银行卡号
   */
  accountNoAES?: string;
  /**
   * 收款方账户名称
   */
  acctName?: string;
  /**
   * 收款方银行账户
   */
  acctNo?: string;
  /**
   * 收款方账户类型：从银行账户表获取
   */
  acctType?: number;
  /**
   * 重发申请人
   */
  applyUserName?: string;
  /**
   * 收款方银行代码
   */
  bankCode?: string;
  /**
   * 收款方银行名称
   */
  bankName?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单编号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 卡归属市
   */
  cardCity?: string;
  /**
   * 卡归属省份
   */
  cardProvince?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；1-成功；2-失败
   */
  creditState?: number;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 扣款明细记录流水号
   */
  debitDetailId?: number;
  /**
   * 流水号
   */
  detailId?: number;
  /**
   * 付款方账户名称
   */
  duePayAcctName?: string;
  /**
   * 付款方银行账户
   */
  duePayAcctNo?: string;
  /**
   * 付款方银行名称
   */
  duePayBankName?: string;
  /**
   * 收钱的（企业）流水号
   */
  entId?: number;
  /**
   * 收钱的（企业）名称
   */
  entName?: string;
  /**
   * 收钱的（企业）类型
   */
  entType?: number;
  /**
   * 美的付错误代码
   */
  errorCode?: string;
  /**
   * 美的付错误描述
   */
  errorDesc?: string;
  /**
   * 失败原因
   */
  failReason?: string;
  /**
   * 收票企业类型(来源自开票渠道）
   */
  inputEnterpriseCode?: string;
  /**
   * 收票企业ID
   */
  inputEnterpriseId?: number;
  /**
   * 收票企业名称
   */
  inputEnterpriseName?: string;
  /**
   * 收票企业类型
   */
  inputEnterpriseType?: number;
  /**
   * 是否人工确认异常
   */
  isConfirmError?: string;
  /**
   * 美的支付用户名
   */
  loginName?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 扣款方（开票企业）ID
   */
  originaEnterpriseId?: number;
  /**
   * 扣款方（开票企业）名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 商户号
   */
  partner?: string;
  /**
   * 商户秘钥
   */
  partnerKey?: string;
  /**
   * 兑付计划号
   */
  planCode?: string;
  /**
   * 兑付子计划号
   */
  planDetailCode?: string;
  /**
   * 收款人姓名
   */
  realName?: string;
  /**
   * 退汇标识：N-正常，Y-退汇，null-正常
   */
  reexchangeFlag?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发时间
   */
  resendTime?: string;
  /**
   * 美的付结果代码
   */
  resultCode?: string;
  /**
   * 美的付结果描述
   */
  resultMsg?: string;
  /**
   * 审批时间
   */
  reviewTime?: string;
  /**
   * 审批人员
   */
  reviewUserName?: string;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * （农业银行专用） 0：同行支付，1：跨行支付
   */
  tradeType?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 美的支付用户类型
   */
  userType?: string;
  /**
   * 版本号
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:349
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划查询(https://apaas-yapi.midea.com/project/7260/interface/api/746023)
 */

export function payplanPlanWaitauthQuery(data?: IWaitauthQueryParams) {
  return ajax<IWaitauthQueryParams, IWaitauthQueryData>({
    url: `/payplan/plan/waitauth/query`,
    method: "post",
    data,
  });
}

export interface IWaitauthDetailParams {
  reviewId: string;
}
export interface IWaitauthDetailData {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * 到期日期
   */
  expireDate?: string;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 持票企业名称
   */
  ownerEnterpriseName?: string;
  /**
   * 收款流水编号
   */
  receiveId?: string;
  [property: string]: any;
}

/*
 *@序号:350
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划查询-详情(https://apaas-yapi.midea.com/project/7260/interface/api/746026)
 */

export function payplanPlanWaitauthDetail(data?: IWaitauthDetailParams) {
  return ajax<IWaitauthDetailParams, IWaitauthDetailData>({
    url: `/payplan/plan/waitauth/detail`,
    method: "post",
    data,
  });
}

export interface IWaitauthQueryParams {
  reviewId: string;

  pageno: string;

  pagesize: string;
}
export interface IWaitauthQueryData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 加密银行卡号
   */
  accountNoAES?: string;
  /**
   * 收款方账户名称
   */
  acctName?: string;
  /**
   * 收款方银行账户
   */
  acctNo?: string;
  /**
   * 收款方账户类型：从银行账户表获取
   */
  acctType?: number;
  /**
   * 重发申请人
   */
  applyUserName?: string;
  /**
   * 收款方银行代码
   */
  bankCode?: string;
  /**
   * 收款方银行名称
   */
  bankName?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单编号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 卡归属市
   */
  cardCity?: string;
  /**
   * 卡归属省份
   */
  cardProvince?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；1-成功；2-失败
   */
  creditState?: number;
  /**
   * 币种
   */
  currencyCode?: string;
  /**
   * 扣款明细记录流水号
   */
  debitDetailId?: number;
  /**
   * 流水号
   */
  detailId?: number;
  /**
   * 付款方账户名称
   */
  duePayAcctName?: string;
  /**
   * 付款方银行账户
   */
  duePayAcctNo?: string;
  /**
   * 付款方银行名称
   */
  duePayBankName?: string;
  /**
   * 收钱的（企业）流水号
   */
  entId?: number;
  /**
   * 收钱的（企业）名称
   */
  entName?: string;
  /**
   * 收钱的（企业）类型
   */
  entType?: number;
  /**
   * 美的付错误代码
   */
  errorCode?: string;
  /**
   * 美的付错误描述
   */
  errorDesc?: string;
  /**
   * 失败原因
   */
  failReason?: string;
  /**
   * 收票企业类型(来源自开票渠道）
   */
  inputEnterpriseCode?: string;
  /**
   * 收票企业ID
   */
  inputEnterpriseId?: number;
  /**
   * 收票企业名称
   */
  inputEnterpriseName?: string;
  /**
   * 收票企业类型
   */
  inputEnterpriseType?: number;
  /**
   * 是否人工确认异常
   */
  isConfirmError?: string;
  /**
   * 美的支付用户名
   */
  loginName?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 扣款方（开票企业）ID
   */
  originaEnterpriseId?: number;
  /**
   * 扣款方（开票企业）名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 商户号
   */
  partner?: string;
  /**
   * 商户秘钥
   */
  partnerKey?: string;
  /**
   * 兑付计划号
   */
  planCode?: string;
  /**
   * 兑付子计划号
   */
  planDetailCode?: string;
  /**
   * 收款人姓名
   */
  realName?: string;
  /**
   * 退汇标识：N-正常，Y-退汇，null-正常
   */
  reexchangeFlag?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发时间
   */
  resendTime?: string;
  /**
   * 美的付结果代码
   */
  resultCode?: string;
  /**
   * 美的付结果描述
   */
  resultMsg?: string;
  /**
   * 审批时间
   */
  reviewTime?: string;
  /**
   * 审批人员
   */
  reviewUserName?: string;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * （农业银行专用） 0：同行支付，1：跨行支付
   */
  tradeType?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 美的支付用户类型
   */
  userType?: string;
  /**
   * 版本号
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:351
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划查询-详情-子计划列表(https://apaas-yapi.midea.com/project/7260/interface/api/746029)
 */

export function payplanSubPlanWaitauthQuery(data?: IWaitauthQueryParams) {
  return ajax<IWaitauthQueryParams, IWaitauthQueryData>({
    url: `/payplan/subPlan/waitauth/query`,
    method: "post",
    data,
  });
}

export interface IPlanAuthParams {
  reviewId: string;
  /* f, a, l, s, e*/
  isPass: string;
}

/*
 *@序号:352
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划审批(https://apaas-yapi.midea.com/project/7260/interface/api/746032)
 */

export function payplanPlanAuth(data?: IPlanAuthParams) {
  return ajax<IPlanAuthParams, any>({
    url: `/payplan/plan/auth`,
    method: "post",
    data,
  });
}

export interface IResultQueryParams {
  creditDetailId: string;
}

/*
 *@序号:353
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:农行接口-查询兑付结果(https://apaas-yapi.midea.com/project/7260/interface/api/746035)
 */

export function payplanDuepayResultQuery(data?: IResultQueryParams) {
  return ajax<IResultQueryParams, any>({
    url: `/payplan/duepay/result/query`,
    method: "post",
    data,
  });
}

export interface IConfirmFailParams {
  creditDetailId: string;

  fileBOListStr: string;

  remark: string;
}

/*
 *@序号:354
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:提交新增确认兑付失败申请(https://apaas-yapi.midea.com/project/7260/interface/api/746038)
 */

export function payplanDuepayConfirmFail(data?: IConfirmFailParams) {
  return ajax<IConfirmFailParams, any>({
    url: `/payplan/duepay/confirm/fail`,
    method: "post",
    data,
  });
}

export interface ISubPlanParams {
  /* 美易单子单号*/
  billCode: string;

  pageno: string;

  pagesize: string;
}

/*
 *@序号:355
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:根据美易单号查询状态为成功的兑付子计划(https://apaas-yapi.midea.com/project/7260/interface/api/746041)
 */

export function payplanDuepaySelectSubPlan(data?: ISubPlanParams) {
  return ajax<ISubPlanParams, any>({
    url: `/payplan/duepay/select/subPlan`,
    method: "post",
    data,
  });
}

export interface ISceneNodeParams {
  creditDetailId: string;
}

/*
 *@序号:356
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:duePayTest(https://apaas-yapi.midea.com/project/7260/interface/api/746044)
 */

export function payplanDuePayGenerateSceneNode(data?: ISceneNodeParams) {
  return ajax<ISceneNodeParams, any>({
    url: `/payplan/duePay/generateSceneNode`,
    method: "post",
    data,
  });
}

export interface IOutlineCheckdoingParams {
  creditId: string;
}
export interface IOutlineCheckdoingData {
  /**
   * 附件
   */
  attachmentFiles?: AttachmentFile[];
  /**
   * 关联付款单单号
   */
  creditId?: number;
  /**
   * 付款日期
   */
  duepayDate?: string;
  /**
   * 拒绝理由
   */
  rejectMsg?: string;
  /**
   * 线下付款，提交说明（只取最新）
   */
  remark?: string;
  /**
   * 关联审核记录明细
   */
  reviewBO?: ReviewBO;
  [property: string]: any;
}

export interface AttachmentFile {
  docId?: number;
  fileId?: number;
  fileName?: string;
  [property: string]: any;
}

/**
 * 关联审核记录明细
 */
export interface ReviewBO {
  /**
   * 申请人角色编码
   */
  applyRoleCode?: string;
  /**
   * 申请时间
   */
  applyTime?: string;
  /**
   * 申请人用户表id
   */
  applyUserId?: number;
  /**
   * 申请人名称
   */
  applyUserName?: string;
  /**
   * 业务记录id
   */
  businessId?: number;
  /**
   * 业务类型
   */
  businessType?: string;
  createBy?: string;
  createTime?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 审批申请流水号
   */
  reviewId?: number;
  /**
   * 复核人角色编码
   */
  reviewRoleCode?: string;
  /**
   * 审核状态,0:待审核；1：审核通过；2：审核驳回；
   */
  reviewStatus?: number;
  /**
   * 复核时间
   */
  reviewTime?: string;
  /**
   * 复核人角色id
   */
  reviewUserId?: number;
  /**
   * 复核人名称
   */
  reviewUserName?: string;
  /**
   * 版本
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:357
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下兑付流程重复发起检查(https://apaas-yapi.midea.com/project/7260/interface/api/746047)
 */

export function payplanCreditOutlineCheckdoing(
  data?: IOutlineCheckdoingParams,
) {
  return ajax<IOutlineCheckdoingParams, IOutlineCheckdoingData>({
    url: `/payplan/credit/outline/checkdoing`,
    method: "post",
    data,
  });
}

export interface IOutlineDetailParams {
  creditId: string;

  reviewId?: string;
}
export interface IOutlineDetailData {
  /**
   * 附件
   */
  attachmentFiles?: AttachmentFile[];
  /**
   * 关联付款单单号
   */
  creditId?: number;
  /**
   * 付款日期
   */
  duepayDate?: string;
  /**
   * 拒绝理由
   */
  rejectMsg?: string;
  /**
   * 线下付款，提交说明（只取最新）
   */
  remark?: string;
  /**
   * 关联审核记录明细
   */
  reviewBO?: ReviewBO;
  [property: string]: any;
}

export interface AttachmentFile {
  docId?: number;
  fileId?: number;
  fileName?: string;
  [property: string]: any;
}

/**
 * 关联审核记录明细
 */
export interface ReviewBO {
  /**
   * 申请人角色编码
   */
  applyRoleCode?: string;
  /**
   * 申请时间
   */
  applyTime?: string;
  /**
   * 申请人用户表id
   */
  applyUserId?: number;
  /**
   * 申请人名称
   */
  applyUserName?: string;
  /**
   * 业务记录id
   */
  businessId?: number;
  /**
   * 业务类型
   */
  businessType?: string;
  createBy?: string;
  createTime?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 审批申请流水号
   */
  reviewId?: number;
  /**
   * 复核人角色编码
   */
  reviewRoleCode?: string;
  /**
   * 审核状态,0:待审核；1：审核通过；2：审核驳回；
   */
  reviewStatus?: number;
  /**
   * 复核时间
   */
  reviewTime?: string;
  /**
   * 复核人角色id
   */
  reviewUserId?: number;
  /**
   * 复核人名称
   */
  reviewUserName?: string;
  /**
   * 版本
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:358
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下兑付单详情(https://apaas-yapi.midea.com/project/7260/interface/api/746050)
 */

export function payplanCreditOutlineDetail(data?: IOutlineDetailParams) {
  return ajax<IOutlineDetailParams, IOutlineDetailData>({
    url: `/payplan/credit/outline/detail`,
    method: "post",
    data,
  });
}

export interface IOutlineSubmitParams {
  inputData: string;
}

/*
 *@序号:359
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下兑付单提交(https://apaas-yapi.midea.com/project/7260/interface/api/746053)
 */

export function payplanCreditOutlineSubmit(data?: IOutlineSubmitParams) {
  return ajax<IOutlineSubmitParams, any>({
    url: `/payplan/credit/outline/submit`,
    method: "post",
    data,
  });
}

export interface IOutlineReviewParams {
  reviewId: string;

  isPass: string;

  rejectMsg?: string;
}
export interface IOutlineReviewData {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单流水号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 是否可重发， true可以，false不可以
   */
  canResendFlag?: boolean;
  /**
   * 是否可设置成功状态， true可以，false不可以
   */
  canSetCreditStateFlag?: boolean;
  /**
   * 兑付渠道
   */
  cashingChannel?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款申请日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；处理中:99; 3-成功；4-失败
   */
  creditState?: number;
  /**
   * 实际兑付日
   */
  duepayDate?: string;
  /**
   * 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号
   */
  duePayType?: number;
  /**
   * 持票（企业）流水号
   */
  entId?: number;
  /**
   * 持票（企业）名称
   */
  entName?: string;
  /**
   * 企业名字过滤条件
   */
  entNameList?: string[];
  /**
   * 持票（企业）类型
   */
  entType?: number;
  /**
   * 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDate?: string;
  /**
   * 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateEnd?: string;
  /**
   * 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateStart?: string;
  /**
   * 通知失败次数
   */
  failCount?: number;
  /**
   * 原始（根节点）美易单的收票企业名称
   */
  inputEntName?: string;
  /**
   * 最后一次失败原因
   */
  lastFailReason?: string;
  /**
   * 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）
   */
  limitDays?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 通知结果
   */
  noticeResult?: string;
  /**
   * 通知状态
   */
  noticeState?: number;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 原始（根节点）美易单的金额(额外字段，兑付计划使用）
   */
  originalMoney?: number;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 原始（根节点）美易单的开票日(额外字段，兑付计划使用）
   */
  outputDate?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败
   */
  refCreditState?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发标志 0，未重发，1已重发过
   */
  resendFlag?: number;
  /**
   * 关联审批id
   */
  reviewId?: number;
  /**
   * 关联审批状态
   */
  reviewStatus?: number;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:360
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下付款单审批(https://apaas-yapi.midea.com/project/7260/interface/api/746056)
 */

export function payplanCreditOutlineReview(data?: IOutlineReviewParams) {
  return ajax<IOutlineReviewParams, IOutlineReviewData>({
    url: `/payplan/credit/outline/review`,
    method: "post",
    data,
  });
}

export interface IReviewListParams {
  /* 付款记录流水号*/
  creditId?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 美易单金额（兑付金额）*/
  openBillMoney?: string;
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 美易单金额（兑付金额）*/
  billMoney?: string;
  /* 审批ID*/
  reviewId?: string;
  /* 审批状态*/
  reviewStatus?: string;
  /* 审批拒绝理由*/
  rejectMsg?: string;
  /* 审批拒绝理由*/
  expireDate?: string;
}
export interface IReviewListData {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单流水号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 是否可重发， true可以，false不可以
   */
  canResendFlag?: boolean;
  /**
   * 是否可设置成功状态， true可以，false不可以
   */
  canSetCreditStateFlag?: boolean;
  /**
   * 兑付渠道
   */
  cashingChannel?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款申请日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；处理中:99; 3-成功；4-失败
   */
  creditState?: number;
  /**
   * 实际兑付日
   */
  duepayDate?: string;
  /**
   * 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号
   */
  duePayType?: number;
  /**
   * 持票（企业）流水号
   */
  entId?: number;
  /**
   * 持票（企业）名称
   */
  entName?: string;
  /**
   * 企业名字过滤条件
   */
  entNameList?: string[];
  /**
   * 持票（企业）类型
   */
  entType?: number;
  /**
   * 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDate?: string;
  /**
   * 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateEnd?: string;
  /**
   * 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateStart?: string;
  /**
   * 通知失败次数
   */
  failCount?: number;
  /**
   * 原始（根节点）美易单的收票企业名称
   */
  inputEntName?: string;
  /**
   * 最后一次失败原因
   */
  lastFailReason?: string;
  /**
   * 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）
   */
  limitDays?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 通知结果
   */
  noticeResult?: string;
  /**
   * 通知状态
   */
  noticeState?: number;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 原始（根节点）美易单的金额(额外字段，兑付计划使用）
   */
  originalMoney?: number;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 原始（根节点）美易单的开票日(额外字段，兑付计划使用）
   */
  outputDate?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败
   */
  refCreditState?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发标志 0，未重发，1已重发过
   */
  resendFlag?: number;
  /**
   * 关联审批id
   */
  reviewId?: number;
  /**
   * 关联审批状态
   */
  reviewStatus?: number;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:361
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下付款单待审列表(https://apaas-yapi.midea.com/project/7260/interface/api/746059)
 */

export function payplanCreditOutlineReviewList(data?: IReviewListParams) {
  return ajax<IReviewListParams, IReviewListData>({
    url: `/payplan/credit/outline/review/list`,
    method: "post",
    data,
  });
}

export interface IFailSubmitParams {
  /* t_ebill_acct_credit_detail主键*/
  creditDetailId?: string;
  /* 附件list字符串*/
  fileBOListStr?: string;
  /* 备注*/
  remark?: string;
  /* 企业id*/
  entId?: string;
  /* 操作用户userID*/
  userId?: string;
  /* 真实名称*/
  realName?: string;
  /* 用户名*/
  userName?: string;
  /* 收款流水id*/
  receiveId?: string;
  /* 美易单号*/
  billCode?: string;
}

/*
 *@序号:362
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:提交确认异常申请(https://apaas-yapi.midea.com/project/7260/interface/api/746062)
 */

export function payplanDuepayConfirmFailSubmit(data?: IFailSubmitParams) {
  return ajax<IFailSubmitParams, any>({
    url: `/payplan/duepay/confirm/fail/submit`,
    method: "post",
    data,
  });
}

export interface IQueryAvaParams {
  /* 发票号码*/
  invoiceNo?: string;
  /* 发票代码*/
  invoiceCode?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 开票日期-查询条件*/
  outputDateStart?: string;

  outputDateEnd?: string;
  /* 开票日期 - excel输入用*/
  ImportOutputDate?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 发票金额*/
  invoiceMoney?: string;
  /* 发票金额*/
  invoiceMoneyNoTax?: string;
  /* 开单可用发票金额*/
  openAvailableAmount?: string;
  /* 开单占用金额*/
  openOccupyAmount?: string;
  /* 融资可用发票金额*/
  transferAvailableAmount?: string;
  /* 转单占用金额*/
  transferOccupyAmount?: string;
  /* 转单可用发票金额*/
  sellAvailableAmount?: string;
  /* 融资占用金额*/
  sellOccupyAmount?: string;
  /* 验真结果*/
  invoiceCheckResult?: string;
  /* 发票类型*/
  invoiceTypeStr?: string;

  invoiceType?: string;
}
export interface IQueryAvaData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方企业名称
   */
  buyEntName?: string;
  /**
   * 开票日期 - excel输入用
   */
  ImportOutputDate?: string;
  /**
   * 验真结果
   */
  invoiceCheckResult?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票金额
   */
  invoiceMoney?: number;
  /**
   * 发票金额
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo?: string;
  invoiceType?: number;
  /**
   * 发票类型
   */
  invoiceTypeStr?: string;
  /**
   * 开单可用发票金额
   */
  openAvailableAmount?: number;
  /**
   * 开单占用金额
   */
  openOccupyAmount?: number;
  /**
   * 开票日期
   */
  outputDate?: string;
  outputDateEnd?: string;
  /**
   * 开票日期-查询条件
   */
  outputDateStart?: string;
  /**
   * 转单可用发票金额
   */
  sellAvailableAmount?: number;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方企业名称
   */
  sellEntName?: string;
  /**
   * 融资占用金额
   */
  sellOccupyAmount?: number;
  /**
   * 融资可用发票金额
   */
  transferAvailableAmount?: number;
  /**
   * 转单占用金额
   */
  transferOccupyAmount?: number;
  [property: string]: any;
}

/*
 *@序号:363
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询可用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746065)
 */

export function invoiceQueryAva(data?: IQueryAvaParams) {
  return ajax<IQueryAvaParams, IQueryAvaData>({
    url: `/invoice/queryAva`,
    method: "post",
    data,
  });
}

export interface IQueryAvaParams {
  /* 发票号码*/
  invoiceNo?: string;
  /* 发票代码*/
  invoiceCode?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 开票日期-查询条件*/
  outputDateStart?: string;

  outputDateEnd?: string;
  /* 开票日期 - excel输入用*/
  ImportOutputDate?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 发票金额*/
  invoiceMoney?: string;
  /* 发票金额*/
  invoiceMoneyNoTax?: string;
  /* 开单可用发票金额*/
  openAvailableAmount?: string;
  /* 开单占用金额*/
  openOccupyAmount?: string;
  /* 融资可用发票金额*/
  transferAvailableAmount?: string;
  /* 转单占用金额*/
  transferOccupyAmount?: string;
  /* 转单可用发票金额*/
  sellAvailableAmount?: string;
  /* 融资占用金额*/
  sellOccupyAmount?: string;
  /* 验真结果*/
  invoiceCheckResult?: string;
  /* 发票类型*/
  invoiceTypeStr?: string;

  invoiceType?: string;
}

/*
 *@序号:364
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询可用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746068)
 */

export function invoiceExportQueryAva(params?: IQueryAvaParams) {
  return ajax<IQueryAvaParams, any>({
    url: `/invoice/export/queryAva`,
    method: "get",
    params,
  });
}

export interface IQueryUsedParams {
  /* 美易单编号*/
  billCode?: string;
  /* 交易类型*/
  occupyType?: string;
  /* 交易类型（中文）*/
  occupyTypeCN?: string;
  /* 发票号码*/
  invoiceNo?: string;
  /* 发票代码*/
  invoiceCode?: string;
  /* 发票类型中文 @See PubConstants.InvoiceTypeName*/
  invoiceTypeCn?: string;
  /* 发票类型*/
  invoiceType?: string;
  /* 发票金额*/
  invoiceMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 发票金额*/
  busTotalMoney?: string;
  /* 占用日期*/
  occupyDate?: string;
  /* 占用日期-查询条件*/
  occupyDateStart?: string;

  occupyDateEnd?: string;
  /* 占用金额*/
  occupyMoney?: string;
}
export interface IQueryUsedData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 发票金额
   */
  busTotalMoney?: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方企业名称
   */
  buyEntName?: string;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票金额
   */
  invoiceMoney?: number;
  /**
   * 发票号码
   */
  invoiceNo?: string;
  /**
   * 发票类型
   */
  invoiceType?: number;
  /**
   * 发票类型中文 @See PubConstants.InvoiceTypeName
   */
  invoiceTypeCn?: string;
  /**
   * 占用日期
   */
  occupyDate?: string;
  occupyDateEnd?: string;
  /**
   * 占用日期-查询条件
   */
  occupyDateStart?: string;
  /**
   * 占用金额
   */
  occupyMoney?: number;
  /**
   * 交易类型
   */
  occupyType?: number;
  /**
   * 交易类型（中文）
   */
  occupyTypeCN?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方企业名称
   */
  sellEntName?: string;
  [property: string]: any;
}

/*
 *@序号:365
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询已用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746071)
 */

export function invoiceQueryUsed(data?: IQueryUsedParams) {
  return ajax<IQueryUsedParams, IQueryUsedData>({
    url: `/invoice/queryUsed`,
    method: "post",
    data,
  });
}

export interface IQueryUsedParams {
  /* 美易单编号*/
  billCode?: string;
  /* 交易类型*/
  occupyType?: string;
  /* 交易类型（中文）*/
  occupyTypeCN?: string;
  /* 发票号码*/
  invoiceNo?: string;
  /* 发票代码*/
  invoiceCode?: string;
  /* 发票类型中文 @See PubConstants.InvoiceTypeName*/
  invoiceTypeCn?: string;
  /* 发票类型*/
  invoiceType?: string;
  /* 发票金额*/
  invoiceMoney?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 发票金额*/
  busTotalMoney?: string;
  /* 占用日期*/
  occupyDate?: string;
  /* 占用日期-查询条件*/
  occupyDateStart?: string;

  occupyDateEnd?: string;
  /* 占用金额*/
  occupyMoney?: string;
}

/*
 *@序号:366
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询可用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746074)
 */

export function invoiceExportQueryUsed(params?: IQueryUsedParams) {
  return ajax<IQueryUsedParams, any>({
    url: `/invoice/export/queryUsed`,
    method: "get",
    params,
  });
}

export interface IRecheckInvoiceParams {
  invoiceNo?: string;

  invoiceCode?: string;

  doMax?: string;

  uploadId?: string;
}

/*
 *@序号:367
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:重验发票(https://apaas-yapi.midea.com/project/7260/interface/api/746077)
 */

export function invoiceRecheckInvoice(params?: IRecheckInvoiceParams) {
  return ajax<IRecheckInvoiceParams, any>({
    url: `/invoice/recheck/invoice`,
    method: "get",
    params,
  });
}

/*
 *@序号:368
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:同步发票验真结果(https://apaas-yapi.midea.com/project/7260/interface/api/746080)
 */

export function invoiceSyncVerifyData(data?: any) {
  return ajax<any, any>({
    url: `/invoice/syncVerifyData`,
    method: "post",
    data,
  });
}

export interface ICheckResultParams {
  invoiceNo: string;

  invoiceCode: string;
}

/*
 *@序号:369
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:更新已验真发票发票结果为未校验(https://apaas-yapi.midea.com/project/7260/interface/api/746083)
 */

export function invoiceUpdateCheckResult(data?: ICheckResultParams) {
  return ajax<ICheckResultParams, any>({
    url: `/invoice/update/check/result`,
    method: "post",
    data,
  });
}

export interface IOpenQueryParams {
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 美易单编号*/
  medBillNo?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 收票企业名称*/
  inputterName?: string;
  /* 期望开单日-开始*/
  expectOutputDateStart?: string;
  /* 期望开单日-结束*/
  expectOutputDateEnd?: string;
  /* 实际开单日-开始*/
  actualOpenDateStart?: string;
  /* 实际开单日-结束*/
  actualOpenDateEnd?: string;
  /* 执行状态:1-待处理；2-成功；3-失败；4-拒绝*/
  exeStatus?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单金额(起始)*/
  billMoneyMin?: string;
  /* 开单金额(结束)*/
  billMoneyMax?: string;
  /* 代开发票*/
  proxyType?: string;
}

/*
 *@序号:370
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:queryOpenbillSq(https://apaas-yapi.midea.com/project/7260/interface/api/746086)
 */

export function sqBillOpenQuery(data?: IOpenQueryParams) {
  return ajax<IOpenQueryParams, any>({
    url: `/sq/bill/open/query`,
    method: "post",
    data,
  });
}

export interface IQueryDetailParams {
  billId: string;
}

/*
 *@序号:371
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:queryOpenbillSqDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746089)
 */

export function sqBillOpenQueryDetail(data?: IQueryDetailParams) {
  return ajax<IQueryDetailParams, any>({
    url: `/sq/bill/open/query/detail`,
    method: "post",
    data,
  });
}

export interface IAuthQueryParams {
  /* 网银付款申请单号（上游系统单号）*/
  applyBillNo?: string;
  /* 美易单编号*/
  medBillNo?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 收票企业名称*/
  inputterName?: string;
  /* 期望开单日-开始*/
  expectOutputDateStart?: string;
  /* 期望开单日-结束*/
  expectOutputDateEnd?: string;
  /* 实际开单日-开始*/
  actualOpenDateStart?: string;
  /* 实际开单日-结束*/
  actualOpenDateEnd?: string;
  /* 执行状态:1-待处理；2-成功；3-失败；4-拒绝*/
  exeStatus?: string;
  /* 开单申请批次号*/
  applyBatchNo?: string;
  /* 开单金额(起始)*/
  billMoneyMin?: string;
  /* 开单金额(结束)*/
  billMoneyMax?: string;
  /* 代开发票*/
  proxyType?: string;
}

/*
 *@序号:372
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:开单指令待审核查询(https://apaas-yapi.midea.com/project/7260/interface/api/746092)
 */

export function sqBillOpenAuthQuery(data?: IAuthQueryParams) {
  return ajax<IAuthQueryParams, any>({
    url: `/sq/bill/open/auth/query`,
    method: "post",
    data,
  });
}

export interface IAuthDetailParams {
  id: string;
}

/*
 *@序号:373
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:开单指令待审核查询(https://apaas-yapi.midea.com/project/7260/interface/api/746095)
 */

export function sqBillOpenAuthDetail(data?: IAuthDetailParams) {
  return ajax<IAuthDetailParams, any>({
    url: `/sq/bill/open/auth/detail`,
    method: "post",
    data,
  });
}

export interface IAuthReviewParams {
  /* 开单指令的唯一标识符*/
  id?: string;
  /* 审核是否通过的标志，1表示通过，0表示未通过*/
  isPass?: string;
  /* 驳回理由，如果审核未通过，这个参数不能为空*/
  remark?: string;
}

/*
 *@序号:374
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:处理开单指令审核复核。(https://apaas-yapi.midea.com/project/7260/interface/api/746098)
 */

export function sqBillOpenAuthReview(data?: IAuthReviewParams) {
  return ajax<IAuthReviewParams, any>({
    url: `/sq/bill/open/auth/review`,
    method: "post",
    data,
  });
}

export interface IWaitMatchedParams {
  billId: string;
}

/*
 *@序号:375
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:查找可用于进行退汇匹配的流水</br>(https://apaas-yapi.midea.com/project/7260/interface/api/746101)
 */

export function reexchangeSelectWaitMatched(data?: IWaitMatchedParams) {
  return ajax<IWaitMatchedParams, any>({
    url: `/reexchange/select/waitMatched`,
    method: "post",
    data,
  });
}

export interface IPageListParams {
  /* 主键*/
  id?: string;
  /* 收款流水编号*/
  receiveId?: string;
  /* 收款日期*/
  receiveDate?: string;
  /* 收款流水金额*/
  receiveAmt?: string;
  /* 收款方名称*/
  receiveName?: string;
  /* 收款方账户*/
  receiveAccountNo?: string;
  /* 收款方开户行*/
  receiveBankName?: string;
  /* 付款方名称*/
  payName?: string;
  /* 付款方账户*/
  payAccountNo?: string;
  /* 付款方开户行*/
  payBankName?: string;
  /* 关联美易单编号*/
  relateBillCode?: string;
  /* 处理状态：*/
  handleState?: string;
  /* 处理状态（非数据库状态） ReexchangePaymentState*/
  handleStateCn?: string;
  /* ecr记账状态：1-成功，2-失败*/
  sendEprState?: string;
  /* ecr记账状态中文值（非数据库字段）*/
  sendEprStateCn?: string;
  /* 出纳台账编号*/
  cashAccountingCode?: string;
  /* 付款出纳台账编号*/
  paymentCashAccountingCode?: string;
  /* 付款日期 --> add by chenyuan46 on 20230217*/
  payDate?: string;
  /* ERP账户*/
  erpAccount?: string;
  /* 付款出纳台账编号*/
  paymentErpAccount?: string;
  /* CreditDetail表主键*/
  relateCreditDetailId?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 收款日期开始(非数据库字段)*/
  receiveDateStart?: string;
  /* 收款日期结束(非数据库字段)*/
  receiveDateEnd?: string;
  /* 收款流水金额min(非数据库字段)*/
  receiveAmtMin?: string;
  /* 收款流水金额max(非数据库字段)*/
  receiveAmtMax?: string;
  /* 付款组织ID*/
  paymentOuId?: string;
  /* 付款方法ID*/
  paymentMethodId?: string;
  /* OU组织名称*/
  ouName?: string;
}

/*
 *@序号:376
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:查询退汇流水列表-分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746104)
 */

export function reexchangeSelectPageList(data?: IPageListParams) {
  return ajax<IPageListParams, any>({
    url: `/reexchange/select/pageList`,
    method: "post",
    data,
  });
}

export interface IButtonWithdrawParams {
  /* t_ebill_reexchange_info主键id*/
  id: string;
}

/*
 *@序号:377
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:退汇流水-撤回(https://apaas-yapi.midea.com/project/7260/interface/api/746107)
 */

export function reexchangeButtonWithdraw(data?: IButtonWithdrawParams) {
  return ajax<IButtonWithdrawParams, any>({
    url: `/reexchange/button/withdraw`,
    method: "post",
    data,
  });
}

export interface IButtonUnbindParams {
  /* t_ebill_reexchange_info主键id*/
  id: string;
}

/*
 *@序号:378
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:退汇流水-解绑(https://apaas-yapi.midea.com/project/7260/interface/api/746110)
 */

export function reexchangeButtonUnbind(data?: IButtonUnbindParams) {
  return ajax<IButtonUnbindParams, any>({
    url: `/reexchange/button/unbind`,
    method: "post",
    data,
  });
}

export interface IButtonResendParams {
  /* 收款流水号*/
  receiveId: string;
}

/*
 *@序号:379
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:退汇流水-重发ERP(https://apaas-yapi.midea.com/project/7260/interface/api/746113)
 */

export function reexchangeButtonResend(data?: IButtonResendParams) {
  return ajax<IButtonResendParams, any>({
    url: `/reexchange/button/resend`,
    method: "post",
    data,
  });
}

export interface IDuePageParams {
  /* 主键*/
  id?: string;
  /* bill表主键*/
  billId?: string;
  /* 美易单子单*/
  billCode?: string;
  /* 美易单母单-原始单*/
  oriBillCode?: string;
  /* 兑付企业*/
  duePayEnt?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 兑付渠道：ibcp/gfp*/
  trdChannel?: string;
  /* 兑付渠道中文：ibcp/gfp*/
  trdChannelCn?: string;
  /* 到期日*/
  expireDate?: string;
  /* 到期日str*/
  expireDateCn?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* 期望兑付str*/
  expectDuepayDateCn?: string;
  /* 旧的期望兑付日*/
  oldDuepayDate?: string;
  /* 新的期望兑付日*/
  newDuepayDate?: string;
  /* 操作状态*/
  state?: string;
  /* 申请时间*/
  createTime?: string;
  /* 申请人*/
  createBy?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 到期日开始*/
  expireDateStart?: string;
  /* 到期日结束*/
  expireDateEnd?: string;
  /* 操作状态中文值*/
  stateCn?: string;
  /* 票据状态集合*/
  billStateList?: string;
}

/*
 *@序号:380
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:查询到期兑付维护列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746116)
 */

export function duepayOrderSelectDuePage(data?: IDuePageParams) {
  return ajax<IDuePageParams, any>({
    url: `/duepayOrder/selectDuePage`,
    method: "post",
    data,
  });
}

export interface IPassPageParams {
  /* 主键*/
  id?: string;
  /* 变更临时表主键*/
  changeId?: string;
  /* 流程类型：1-利率配置*/
  processType?: string;
  /* 申请人*/
  applier?: string;
  /* 申请人userId*/
  applierId?: string;
  /* 申请备注*/
  applierRemark?: string;
  /* 申请日期：YYYY-MM-DD*/
  submitTime?: string;
  /* 复核人*/
  auditor?: string;
  /* 复核人userId*/
  auditorId?: string;
  /* 复核备注*/
  reviewRemark?: string;
  /* 驳回意见*/
  rejectRemark?: string;
  /* 复核日期：YYYY-MM-DD*/
  reviewTime?: string;
  /* 状态：1-草稿，2-审批中，3-已驳回，4-审批通过 ，4-终止作废*/
  state?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 申请时间最小值(非数据库字段)*/
  submitTimeStart?: string;
  /* 申请时间最大值(非数据库字段)*/
  submitTimeEnd?: string;
  /* 生效状态(非数据库字段)*/
  isEffective?: string;
  /* stateList集合(非数据库字段)*/
  stateList?: string;
  /* 操作类型(非数据库字段)*/
  operateType?: string;
  /* 状态（非数据库字段）：1-草稿，2-审批中，3-已驳回，4-审批通过*/
  stateCn?: string;
  /* 美易单billId*/
  billId?: string;
  /* 美易单子单*/
  billCode?: string;
  /* 美易单母单-原始单*/
  oriBillCode?: string;
  /* 兑付企业*/
  duePayEnt?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 兑付渠道：ibcp/gfp*/
  trdChannel?: string;
  /* 兑付渠道中文：ibcp/gfp*/
  trdChannelCn?: string;
  /* 到期日*/
  expireDate?: string;
  /* 到期日str*/
  expireDateCn?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* 期望兑付str*/
  expectDuepayDateCn?: string;
  /* 旧的期望兑付日*/
  oldDuepayDate?: string;
  /* 新的期望兑付日*/
  newDuepayDate?: string;
  /* 到期日开始*/
  expireDateStart?: string;
  /* 到期日结束*/
  expireDateEnd?: string;
}

/*
 *@序号:381
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-审批通过列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746119)
 */

export function duepayOrderSelectPassPage(data?: IPassPageParams) {
  return ajax<IPassPageParams, any>({
    url: `/duepayOrder/selectPassPage`,
    method: "post",
    data,
  });
}

export interface IReviewPageParams {
  /* 主键*/
  id?: string;
  /* 变更临时表主键*/
  changeId?: string;
  /* 流程类型：1-利率配置*/
  processType?: string;
  /* 申请人*/
  applier?: string;
  /* 申请人userId*/
  applierId?: string;
  /* 申请备注*/
  applierRemark?: string;
  /* 申请日期：YYYY-MM-DD*/
  submitTime?: string;
  /* 复核人*/
  auditor?: string;
  /* 复核人userId*/
  auditorId?: string;
  /* 复核备注*/
  reviewRemark?: string;
  /* 驳回意见*/
  rejectRemark?: string;
  /* 复核日期：YYYY-MM-DD*/
  reviewTime?: string;
  /* 状态：1-草稿，2-审批中，3-已驳回，4-审批通过 ，4-终止作废*/
  state?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 申请时间最小值(非数据库字段)*/
  submitTimeStart?: string;
  /* 申请时间最大值(非数据库字段)*/
  submitTimeEnd?: string;
  /* 生效状态(非数据库字段)*/
  isEffective?: string;
  /* stateList集合(非数据库字段)*/
  stateList?: string;
  /* 操作类型(非数据库字段)*/
  operateType?: string;
  /* 状态（非数据库字段）：1-草稿，2-审批中，3-已驳回，4-审批通过*/
  stateCn?: string;
  /* 美易单billId*/
  billId?: string;
  /* 美易单子单*/
  billCode?: string;
  /* 美易单母单-原始单*/
  oriBillCode?: string;
  /* 兑付企业*/
  duePayEnt?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 兑付渠道：ibcp/gfp*/
  trdChannel?: string;
  /* 兑付渠道中文：ibcp/gfp*/
  trdChannelCn?: string;
  /* 到期日*/
  expireDate?: string;
  /* 到期日str*/
  expireDateCn?: string;
  /* 期望兑付*/
  expectDuepayDate?: string;
  /* 期望兑付str*/
  expectDuepayDateCn?: string;
  /* 旧的期望兑付日*/
  oldDuepayDate?: string;
  /* 新的期望兑付日*/
  newDuepayDate?: string;
  /* 到期日开始*/
  expireDateStart?: string;
  /* 到期日结束*/
  expireDateEnd?: string;
}

/*
 *@序号:382
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-待审批查询列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746122)
 */

export function duepayOrderSelectReviewPage(data?: IReviewPageParams) {
  return ajax<IReviewPageParams, any>({
    url: `/duepayOrder/selectReviewPage`,
    method: "post",
    data,
  });
}

export interface IOrderProcessParams {
  billId: string;

  expectDuepayDate: string;

  oldExpectDuepayDate: string;

  applierRemark: string;

  docId: string;

  fileName: string;
}

/*
 *@序号:383
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-发起变更(https://apaas-yapi.midea.com/project/7260/interface/api/746125)
 */

export function duepayOrderAddDuepayOrderProcess(data?: IOrderProcessParams) {
  return ajax<IOrderProcessParams, any>({
    url: `/duepayOrder/add/duepayOrderProcess`,
    method: "post",
    data,
  });
}

export interface IOrderProcessParams {
  approveProcessId: string;

  targetState: string;

  reviewRemark?: string;
}

/*
 *@序号:384
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-审批流程：pass或reject操作(https://apaas-yapi.midea.com/project/7260/interface/api/746128)
 */

export function duepayOrderReviewDuepayOrderProcess(
  data?: IOrderProcessParams,
) {
  return ajax<IOrderProcessParams, any>({
    url: `/duepayOrder/review/duepayOrderProcess`,
    method: "post",
    data,
  });
}

export interface IProcessDetailParams {
  approveProcessId: string;
}

/*
 *@序号:385
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-查看变更明细(https://apaas-yapi.midea.com/project/7260/interface/api/746131)
 */

export function duepayOrderQueryProcessDetail(data?: IProcessDetailParams) {
  return ajax<IProcessDetailParams, any>({
    url: `/duepayOrder/query/processDetail`,
    method: "post",
    data,
  });
}

export interface IQueryPageParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 付款记录流水号*/
  creditId?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 持票（企业）流水号*/
  entId?: string;
  /* 持票（企业）名称*/
  entName?: string;
  /* 持票（企业）类型*/
  entType?: string;
  /* 付款状态：0-待处理；处理中:99; 3-成功；4-失败*/
  creditState?: string;
  /* 付款申请日*/
  creditDate?: string;
  /* 备注*/
  remark?: string;
  /* 订单号*/
  tradeNo?: string;
  /* 下单时间*/
  tradeTime?: string;
  /* 开票企业ID*/
  originaEnterpriseId?: string;
  /* 开票企业名称*/
  originaEnterpriseName?: string;
  /* 开票企业类型*/
  originaEnterpriseType?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 重发标志 0，未重发，1已重发过*/
  resendFlag?: string;
  /* 是否可重发， true可以，false不可以, f, a, l, s, e*/
  canResendFlag?: string;
  /* 是否可设置成功状态， true可以，false不可以, f, a, l, s, e*/
  canSetCreditStateFlag?: string;
  /* 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败*/
  refCreditState?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 最后一次失败原因*/
  lastFailReason?: string;
  /* 原始（根节点）美易单的金额(额外字段，兑付计划使用）*/
  originalMoney?: string;
  /* 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDate?: string;
  /* 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateStart?: string;
  /* 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateEnd?: string;
  /* 原始（根节点）美易单的开票日(额外字段，兑付计划使用）*/
  outputDate?: string;
  /* 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）*/
  limitDays?: string;
  /* 原始（根节点）美易单的收票企业名称*/
  inputEntName?: string;
  /* 企业名字过滤条件*/
  entNameList?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 开票企业的组织id*/
  originalOrgId?: string;
  /* 开票企业的组织名称*/
  originalOrgName?: string;
  /* 通知状态*/
  noticeState?: string;
  /* 通知结果*/
  noticeResult?: string;
  /* 通知失败次数*/
  failCount?: string;
  /* 兑付渠道*/
  cashingChannel?: string;
  /* 实际兑付日*/
  duepayDate?: string;
  /* 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号*/
  duePayType?: string;
  /* 关联审批id*/
  reviewId?: string;
  /* 关联审批状态*/
  reviewStatus?: string;

  creditStateName?: string;

  trdChannelName?: string;

  sellDate?: string;
  /* 实际放款日*/
  paymentDate?: string;

  billExpireDate?: string;

  billNo?: string;

  noticeStateName?: string;
  /* 交易类型*/
  transferType?: string;
  /* 开始兑付日期*/
  startCreditDate?: string;
  /* 结束兑付日期*/
  endCreditDate?: string;
}
export interface IQueryPageData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单流水号
   */
  billId?: number;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 是否可重发， true可以，false不可以
   */
  canResendFlag?: boolean;
  /**
   * 是否可设置成功状态， true可以，false不可以
   */
  canSetCreditStateFlag?: boolean;
  /**
   * 兑付渠道
   */
  cashingChannel?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 付款申请日
   */
  creditDate?: string;
  /**
   * 付款记录流水号
   */
  creditId?: number;
  /**
   * 付款状态：0-待处理；处理中:99; 3-成功；4-失败
   */
  creditState?: number;
  /**
   * 实际兑付日
   */
  duepayDate?: string;
  /**
   * 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号
   */
  duePayType?: number;
  /**
   * 持票（企业）流水号
   */
  entId?: number;
  /**
   * 持票（企业）名称
   */
  entName?: string;
  /**
   * 企业名字过滤条件
   */
  entNameList?: string[];
  /**
   * 持票（企业）类型
   */
  entType?: number;
  /**
   * 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDate?: string;
  /**
   * 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateEnd?: string;
  /**
   * 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）
   */
  expireDateStart?: string;
  /**
   * 通知失败次数
   */
  failCount?: number;
  /**
   * 原始（根节点）美易单的收票企业名称
   */
  inputEntName?: string;
  /**
   * 最后一次失败原因
   */
  lastFailReason?: string;
  /**
   * 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）
   */
  limitDays?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 通知结果
   */
  noticeResult?: string;
  /**
   * 通知状态
   */
  noticeState?: number;
  /**
   * 开票企业ID
   */
  originaEnterpriseId?: number;
  /**
   * 开票企业名称
   */
  originaEnterpriseName?: string;
  /**
   * 开票企业类型
   */
  originaEnterpriseType?: number;
  /**
   * 原始（根节点）ID
   */
  originaId?: number;
  /**
   * 原始（根节点）美易单编号
   */
  originalCode?: string;
  /**
   * 原始（根节点）美易单的金额(额外字段，兑付计划使用）
   */
  originalMoney?: number;
  /**
   * 开票企业的组织id
   */
  originalOrgId?: number;
  /**
   * 开票企业的组织名称
   */
  originalOrgName?: string;
  /**
   * ou单位主键
   */
  ouId?: string;
  /**
   * ou单位名称
   */
  ouName?: string;
  /**
   * 原始（根节点）美易单的开票日(额外字段，兑付计划使用）
   */
  outputDate?: string;
  /**
   * 持票企业的组织id
   */
  ownerOrgId?: number;
  /**
   * 持票企业的组织名称
   */
  ownerOrgName?: string;
  /**
   * 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败
   */
  refCreditState?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 重发标志 0，未重发，1已重发过
   */
  resendFlag?: number;
  /**
   * 关联审批id
   */
  reviewId?: number;
  /**
   * 关联审批状态
   */
  reviewStatus?: number;
  /**
   * 订单号
   */
  tradeNo?: string;
  /**
   * 下单时间
   */
  tradeTime?: string;
  /**
   * 渠道标识
   */
  trdChannel?: string;
  /**
   * 每次更新操作加1。乐观锁实现
   */
  version?: number;
  [property: string]: any;
}

/*
 *@序号:386
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:融资兑付通知查询(https://apaas-yapi.midea.com/project/7260/interface/api/746134)
 */

export function financeRecoNoticeQueryPage(data?: IQueryPageParams) {
  return ajax<IQueryPageParams, IQueryPageData>({
    url: `/finance/reco/notice/queryPage`,
    method: "post",
    data,
  });
}

export interface INoticeExportParams {
  createBy?: string;

  createTime?: string;

  modifyBy?: string;

  modifyTime?: string;
  /* 付款记录流水号*/
  creditId?: string;
  /* 原始（根节点）ID*/
  originaId?: string;
  /* 原始（根节点）美易单编号*/
  originalCode?: string;
  /* 美易单流水号*/
  billId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 美易单金额*/
  billMoney?: string;
  /* 持票（企业）流水号*/
  entId?: string;
  /* 持票（企业）名称*/
  entName?: string;
  /* 持票（企业）类型*/
  entType?: string;
  /* 付款状态：0-待处理；处理中:99; 3-成功；4-失败*/
  creditState?: string;
  /* 付款申请日*/
  creditDate?: string;
  /* 备注*/
  remark?: string;
  /* 订单号*/
  tradeNo?: string;
  /* 下单时间*/
  tradeTime?: string;
  /* 开票企业ID*/
  originaEnterpriseId?: string;
  /* 开票企业名称*/
  originaEnterpriseName?: string;
  /* 开票企业类型*/
  originaEnterpriseType?: string;
  /* ou单位主键*/
  ouId?: string;
  /* ou单位名称*/
  ouName?: string;
  /* 每次更新操作加1。乐观锁实现*/
  version?: string;
  /* 重发标志 0，未重发，1已重发过*/
  resendFlag?: string;
  /* 是否可重发， true可以，false不可以, f, a, l, s, e*/
  canResendFlag?: string;
  /* 是否可设置成功状态， true可以，false不可以, f, a, l, s, e*/
  canSetCreditStateFlag?: string;
  /* 参考付款状态（从明细表获取）：0-待处理；1-成功；2-失败*/
  refCreditState?: string;
  /* 渠道标识*/
  trdChannel?: string;
  /* 最后一次失败原因*/
  lastFailReason?: string;
  /* 原始（根节点）美易单的金额(额外字段，兑付计划使用）*/
  originalMoney?: string;
  /* 原始（根节点）美易单的到期日，子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDate?: string;
  /* 原始（根节点）美易单的到期日开始（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateStart?: string;
  /* 原始（根节点）美易单的到期日结束（查询条件），子单也是同样的到期日(额外字段，兑付计划使用）*/
  expireDateEnd?: string;
  /* 原始（根节点）美易单的开票日(额外字段，兑付计划使用）*/
  outputDate?: string;
  /* 原始（根节点）美易单的期限（有效日期）(额外字段，兑付计划使用）*/
  limitDays?: string;
  /* 原始（根节点）美易单的收票企业名称*/
  inputEntName?: string;
  /* 企业名字过滤条件*/
  entNameList?: string;
  /* 持票企业的组织id*/
  ownerOrgId?: string;
  /* 持票企业的组织名称*/
  ownerOrgName?: string;
  /* 开票企业的组织id*/
  originalOrgId?: string;
  /* 开票企业的组织名称*/
  originalOrgName?: string;
  /* 通知状态*/
  noticeState?: string;
  /* 通知结果*/
  noticeResult?: string;
  /* 通知失败次数*/
  failCount?: string;
  /* 兑付渠道*/
  cashingChannel?: string;
  /* 实际兑付日*/
  duepayDate?: string;
  /* 到期回款方式 DuePayType: 1- 回款至银行收款户 2-回款至核心企业资方同名账户 3-再保理收款账号*/
  duePayType?: string;
  /* 关联审批id*/
  reviewId?: string;
  /* 关联审批状态*/
  reviewStatus?: string;

  creditStateName?: string;

  trdChannelName?: string;

  sellDate?: string;
  /* 实际放款日*/
  paymentDate?: string;

  billExpireDate?: string;

  billNo?: string;

  noticeStateName?: string;
  /* 交易类型*/
  transferType?: string;
  /* 开始兑付日期*/
  startCreditDate?: string;
  /* 结束兑付日期*/
  endCreditDate?: string;
}

/*
 *@序号:387
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:融资兑付通知导出(https://apaas-yapi.midea.com/project/7260/interface/api/746137)
 */

export function financeRecoNoticeExport(data?: INoticeExportParams) {
  return ajax<INoticeExportParams, any>({
    url: `/finance/reco/notice/export`,
    method: "post",
    data,
  });
}

export interface IRecoNoticeParams {
  id?: string;
}
type IRecoNoticeData = string;

/*
 *@序号:388
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:人工通知(https://apaas-yapi.midea.com/project/7260/interface/api/746140)
 */

export function financeRecoNotice(data?: IRecoNoticeParams) {
  return ajax<IRecoNoticeParams, IRecoNoticeData>({
    url: `/finance/reco/notice`,
    method: "post",
    data,
  });
}

export interface IRecoConfigParams {
  id?: string;
}
type IRecoConfigData = string;

/*
 *@序号:389
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:确认成功(https://apaas-yapi.midea.com/project/7260/interface/api/746143)
 */

export function financeRecoConfig(data?: IRecoConfigParams) {
  return ajax<IRecoConfigParams, IRecoConfigData>({
    url: `/finance/reco/config`,
    method: "post",
    data,
  });
}

export interface INoticeInforeParams {
  id?: string;
}
type INoticeInforeData = string;

/*
 *@序号:390
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:人工通知(https://apaas-yapi.midea.com/project/7260/interface/api/746146)
 */

export function financeRecoNoticeInfore(data?: INoticeInforeParams) {
  return ajax<INoticeInforeParams, INoticeInforeData>({
    url: `/finance/reco/noticeInfore`,
    method: "post",
    data,
  });
}

export interface IConfigInforeParams {
  id?: string;
}
type IConfigInforeData = string;

/*
 *@序号:391
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:确认成功(https://apaas-yapi.midea.com/project/7260/interface/api/746149)
 */

export function financeRecoConfigInfore(data?: IConfigInforeParams) {
  return ajax<IConfigInforeParams, IConfigInforeData>({
    url: `/finance/reco/configInfore`,
    method: "post",
    data,
  });
}

export interface ICancelQueryParams {
  /* 撤单申请编号*/
  cancelApplyNo?: string;
  /* 美易单编号*/
  medBillNo?: string;
  /* 开票企业名称*/
  outputEntName?: string;
  /* 收票企业名称*/
  inputterName?: string;
  /* 期望开单日-开始*/
  expectOutputStartDate?: string;
  /* 期望开单日-结束*/
  expectOutputEndDate?: string;
  /* 实际开单日-开始*/
  actualOpenDateStart?: string;
  /* 实际开单日-结束*/
  actualOpenDateEnd?: string;
  /* 执行状态:1-待处理；2-成功；3-失败；4-拒绝*/
  exeStatus?: string;
}

/*
 *@序号:392
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:queryOpenbillSq(https://apaas-yapi.midea.com/project/7260/interface/api/746152)
 */

export function sqBillCancelQuery(data?: ICancelQueryParams) {
  return ajax<ICancelQueryParams, any>({
    url: `/sq/bill/cancel/query`,
    method: "post",
    data,
  });
}

export interface IGfpBillParams {
  cancelId?: string;
}

/*
 *@序号:393
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:人工重新撤单(https://apaas-yapi.midea.com/project/7260/interface/api/746155)
 */

export function sqBillCancelRetryGfpBill(data?: IGfpBillParams) {
  return ajax<IGfpBillParams, any>({
    url: `/sq/bill/cancel/retry/gfp/bill`,
    method: "post",
    data,
  });
}

export interface IOrganAddParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:394
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:新增 融资机构申请(https://apaas-yapi.midea.com/project/7260/interface/api/746158)
 */

export function financeOrganAdd(data?: IOrganAddParams) {
  return ajax<IOrganAddParams, any>({
    url: `/finance/organ/add`,
    method: "post",
    data,
  });
}

export interface IOrganSelectParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:395
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:融资机构申请/变更 查询页面(https://apaas-yapi.midea.com/project/7260/interface/api/746161)
 */

export function financeOrganSelect(data?: IOrganSelectParams) {
  return ajax<IOrganSelectParams, any>({
    url: `/finance/organ/1/select`,
    method: "post",
    data,
  });
}

export interface IOrganDetailParams {
  organId: string;

  isChangeInit?: string;
}

/*
 *@序号:396
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询融资机构详情(https://apaas-yapi.midea.com/project/7260/interface/api/746164)
 */

export function financeOrganDetail(params?: IOrganDetailParams) {
  return ajax<IOrganDetailParams, any>({
    url: `/finance/organ/detail`,
    method: "get",
    params,
  });
}

export interface IOrganUpdateParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:397
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:编辑 (保存/提交) reviewState in (1001,1002)(https://apaas-yapi.midea.com/project/7260/interface/api/746167)
 */

export function financeOrganUpdate(data?: IOrganUpdateParams) {
  return ajax<IOrganUpdateParams, any>({
    url: `/finance/organ/update`,
    method: "post",
    data,
  });
}

export interface IOrganChangeParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:398
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:changeFinanceOrgan(https://apaas-yapi.midea.com/project/7260/interface/api/746170)
 */

export function financeOrganChange(data?: IOrganChangeParams) {
  return ajax<IOrganChangeParams, any>({
    url: `/finance/organ/change`,
    method: "post",
    data,
  });
}

export interface IOrganReviewParams {
  /* 融资机构id*/
  organId: string;
  /* 操作状态*/
  reviewState?: string;
  /* 审批说明*/
  rejectMsg?: string;
  /* 当前操作人用户名*/
  clerker?: string;
  /* 当前操作人真实名称*/
  clerkerName?: string;
  /* ip*/
  ip?: string;
}

/*
 *@序号:399
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:复核操作  通过/驳回(https://apaas-yapi.midea.com/project/7260/interface/api/746173)
 */

export function financeOrganReview(data?: IOrganReviewParams) {
  return ajax<IOrganReviewParams, any>({
    url: `/finance/organ/review`,
    method: "post",
    data,
  });
}

export interface IOrganDeleteParams {
  organId: string;
}

/*
 *@序号:400
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:deleteFinanceOrgan(https://apaas-yapi.midea.com/project/7260/interface/api/746176)
 */

export function financeOrganDelete(params?: IOrganDeleteParams) {
  return ajax<IOrganDeleteParams, any>({
    url: `/finance/organ/delete`,
    method: "get",
    params,
  });
}

export interface IReviewSelectParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:401
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:selectOrganReview(https://apaas-yapi.midea.com/project/7260/interface/api/746179)
 */

export function financeOrganReviewSelect(data?: IReviewSelectParams) {
  return ajax<IReviewSelectParams, any>({
    url: `/finance/organ/review/select`,
    method: "post",
    data,
  });
}

export interface IPassSelectParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:402
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:selectOrganPass(https://apaas-yapi.midea.com/project/7260/interface/api/746182)
 */

export function financeOrganPassSelect(data?: IPassSelectParams) {
  return ajax<IPassSelectParams, any>({
    url: `/finance/organ/pass/select`,
    method: "post",
    data,
  });
}

export interface IPassExportParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:403
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:exportOrganPass(https://apaas-yapi.midea.com/project/7260/interface/api/746185)
 */

export function financeOrganPassExport(params?: IPassExportParams) {
  return ajax<IPassExportParams, any>({
    url: `/finance/organ/pass/export`,
    method: "get",
    params,
  });
}

/*
 *@序号:404
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询所有审核通过的的融资机构信息(https://apaas-yapi.midea.com/project/7260/interface/api/746188)
 */

export function financeFindAll(params?: any) {
  return ajax<any, any>({ url: `/finance/find/all`, method: "get", params });
}

export interface IFinanceEditParams {
  /* 融资机构主键*/
  id?: string;
  /* 机构名称*/
  organName?: string;
  /* 机构编码*/
  organCode?: string;
  /* 状态 0:无效 1:有效 2变更中*/
  state?: string;
  /* 流程状态FinanceOrganReviewState:1001-草稿;1002-审核中;1003-审核通过;1004-已驳回;1005-作废*/
  reviewState?: string;
  /* 注册资金*/
  registerAmount?: string;
  /* 结算费用方式 1:逐笔结算 2:批量结算*/
  closeType?: string;
  /* 版本号*/
  version?: string;
  /* 操作类型：1-新增; 2-变更*/
  operationType?: string;
  /* 统一社会信用代码*/
  certMergCode?: string;
  /* 统一社会信用代码有效期开始时间（yyyy-MM-dd）*/
  certmergvalidatestart?: string;
  /* 统一社会信用代码有效期结束时间(yyyy-MM-dd)*/
  certmergvalidateend?: string;
  /* 三证合一证件有效期是否长期有效：0-否（默认）； 1-是*/
  certmergislongeffective?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 法人代表证件号*/
  legalRepresentativeIdNo?: string;
  /* 法人证件有效期开始时间*/
  legalIdValidateStart?: string;
  /* 法人证件有效期结束时间*/
  legalIdValidateEnd?: string;
  /* 法人证件有效期是否是长期*/
  legalIdIsLongEffective?: string;
  /* 注册地址*/
  address?: string;
  /* 通讯地址*/
  mesAddress?: string;
  /* 首次入驻时间*/
  authTime?: string;
  /* 更新人(变更操作申请人)*/
  changeBy?: string;
  /* 变更复核通过日期*/
  changeTime?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 主键*/
  organAccountBOList?: string;
  /* 企业id*/
  organAccountBOList?: string;
  /* 融资机构id*/
  organAccountBOList?: string;
  /* 户名*/
  organAccountBOList?: string;
  /* 账户类型; 1:收款账户,2:付款账户*/
  organAccountBOList?: string;
  /* 开户行所在省ID*/
  organAccountBOList?: string;
  /* 开户行所在省*/
  organAccountBOList?: string;
  /* 开户行所在市ID*/
  organAccountBOList?: string;
  /* 开户行所在市*/
  organAccountBOList?: string;
  /* 开户行代码*/
  organAccountBOList?: string;
  /* 开户行*/
  organAccountBOList?: string;
  /* 银行账号*/
  organAccountBOList?: string;
  /* 账户状态 1:正常 2:删除*/
  organAccountBOList?: string;
  /* 创建人*/
  organAccountBOList?: string;
  /* 创建时间*/
  organAccountBOList?: string;
  /* 修改人*/
  organAccountBOList?: string;
  /* 修改时间*/
  organAccountBOList?: string;
  /* 主键*/
  organContactBOList?: string;
  /* 联系人名称*/
  organContactBOList?: string;
  /* 关联类型 1:融资机构 2:核心企业分公司*/
  organContactBOList?: string;
  /* 关联业务id*/
  organContactBOList?: string;
  /* 职务*/
  organContactBOList?: string;
  /* 固定电话*/
  organContactBOList?: string;
  /* 手机号码*/
  organContactBOList?: string;
  /* 邮箱*/
  organContactBOList?: string;
  /* 备注*/
  organContactBOList?: string;
  /* 账户状态  1:正常 2:删除*/
  organContactBOList?: string;
  /* 创建人*/
  organContactBOList?: string;
  /* 创建时间*/
  organContactBOList?: string;
  /* 修改人*/
  organContactBOList?: string;
  /* 修改时间*/
  organContactBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;

  fileBOList?: string;
  /* 流水号*/
  fileBOList?: string;
  /* 文件名*/
  fileBOList?: string;
  /* 文件类别-业务分类*/
  fileBOList?: string;
  /* 业务id，取时间戳*/
  fileBOList?: string;
  /* 文档id*/
  fileBOList?: string;
  /* 企业名称*/
  fileBOList?: string;
  /* 文件来源，来自企业、个人、交易*/
  fileBOList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileBOList?: string;
  /* 资料来源，提交客户端 1：omc，2：ent*/
  fileBOList?: string;
  /* 变更类型*/
  fileBOList?: string;
  /* 经办员*/
  fileBOList?: string;

  fileBOList?: string;
  /* 审核员*/
  fileBOList?: string;
  /* 版本号*/
  fileBOList?: string;
  /* 文件审核状态： 1-草稿， 2-审批中，3-作废，4-驳回，5-通过*/
  fileBOList?: string;
  /* 文件后缀名*/
  fileBOList?: string;
  /* 文件大小*/
  fileBOList?: string;
  /* 经办员备注*/
  fileBOList?: string;
  /* 审核员备注*/
  fileBOList?: string;
  /* 主键*/
  logFlowBOList?: string;
  /* 业务类型*/
  logFlowBOList?: string;
  /* 业务ID*/
  logFlowBOList?: string;
  /* 节点ID*/
  logFlowBOList?: string;
  /* 节点名称*/
  logFlowBOList?: string;
  /* 操作人ID*/
  logFlowBOList?: string;
  /* 操作人名称*/
  logFlowBOList?: string;
  /* 操作时间*/
  logFlowBOList?: string;
  /* 审批结果*/
  logFlowBOList?: string;
  /* 审批意见*/
  logFlowBOList?: string;
  /* 创建人*/
  logFlowBOList?: string;
  /* 创建时间*/
  logFlowBOList?: string;
  /* 限制天数*/
  logFlowBOList?: string;
  /* 创建日期开始*/
  createTimeStart?: string;
  /* 创建日期结束*/
  createTimeEnd?: string;
  /* 认证时间开始*/
  authTimeStart?: string;
  /* 认证时间结束*/
  authTimeEnd?: string;
  /* 区分内部外部 融资机构 out-外部，in-内部*/
  finTypeOutOrIn?: string;
  /* 变更冻结标识 0-冻结中，1-冻结接触*/
  freezFlag?: string;
  /* 父节点id*/
  parentId?: string;
  /* 顶级节点id*/
  topId?: string;
  /* 组织类型：1-资方组织；2-融资机构*/
  orgType?: string;
  /* 资金方名称*/
  financeName?: string;
  /* 资方组织编码*/
  financeCode?: string;
  /* 资方组织编码 状态 0:无效 1:有效 2变更中*/
  financeState?: string;
  /* 费用结算账户类型：1-收款，2-付款*/
  settleType?: string;
  /* 资方组织的利率同步方式：1-手工导入；2-接口同步*/
  rateSyncType?: string;

  rateSyncTypeName?: string;
  /* 到期回款方式:1-回款至银行收款户 2-回款至核心企业资方同名账户*/
  duePayType?: string;
  /* 资方行别代码*/
  financeOrganBankCode?: string;
  /* 是否申请Ukey:是Y，否N*/
  isApplyUkey?: string;
  /* 地址区域值对象，json格式*/
  ukeyAddressRegion?: string;
  /* 省份名称*/
  provinceName?: string;
  /* 省份Id*/
  provinceId?: string;
  /* 城市名称*/
  cityName?: string;
  /* 城市Id*/
  cityId?: string;
  /* 区县名称*/
  countyName?: string;
  /* 区县Id*/
  countyId?: string;
  /* 详细地址*/
  ukeyAddressDetail?: string;
  /* 流水号*/
  operatorList?: string;
  /* 融资机构主键*/
  operatorList?: string;
  /* 用户ID*/
  operatorList?: string;
  /* 用户名（登录账号）*/
  operatorList?: string;
  /* 姓名*/
  operatorList?: string;
  /* 角色编码列表*/
  operatorList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  operatorList?: string;
  /* 证件号*/
  operatorList?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  operatorList?: string;
  /* 邮件*/
  operatorList?: string;
  /* 是否持有Ukey,Y,是，N否*/
  operatorList?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  operatorList?: string;
  /* 处理状态,1,待处理，2已处理*/
  operatorList?: string;
  /* 描述*/
  operatorList?: string;
  /* 创建人*/
  operatorList?: string;
  /* 创建时间*/
  operatorList?: string;
  /* 修改人（每次更新都记录）*/
  operatorList?: string;
  /* 修改时间（每次更新都记录）*/
  operatorList?: string;
  /* 角色编码列表中文名（非数据字段）*/
  operatorList?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;
  /* 发起人用户名*/
  applierAcctName?: string;
  /* 融资接入方式 - FinanceAccessMode*/
  accessMode?: string;
  /* 机构类型, BANK银行, FACTOR保理, BROKER证券商, NON_BANK非银机构*/
  organType?: string;
  /* 是否上传发票影印件：Y-需要，N-不需要*/
  isNeedInvoiceFile?: string;
}

/*
 *@序号:405
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:资方组织编辑(https://apaas-yapi.midea.com/project/7260/interface/api/746191)
 */

export function financeFinanceEdit(data?: IFinanceEditParams) {
  return ajax<IFinanceEditParams, any>({
    url: `/finance/finance/edit`,
    method: "post",
    data,
  });
}

/*
 *@序号:406
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询资方组织列表(https://apaas-yapi.midea.com/project/7260/interface/api/746194)
 */

export function financeFinancesFind(data?: any) {
  return ajax<any, any>({
    url: `/finance/finances/find`,
    method: "post",
    data,
  });
}

/*
 *@序号:407
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:返回给前端的资方组织列表（只有手工导入，无接口同步）(https://apaas-yapi.midea.com/project/7260/interface/api/746197)
 */

export function financeFinancesManualImport(data?: any) {
  return ajax<any, any>({
    url: `/finance/finances/manualImport`,
    method: "post",
    data,
  });
}

export interface IFindbyFinParams {
  parentId: string;
}

/*
 *@序号:408
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询资方组织下的融资机构(https://apaas-yapi.midea.com/project/7260/interface/api/746200)
 */

export function financeOrgFindbyFin(data?: IFindbyFinParams) {
  return ajax<IFindbyFinParams, any>({
    url: `/finance/org/findbyFin`,
    method: "post",
    data,
  });
}

export interface IFinanceCodeParams {
  financeCode: string;
}

/*
 *@序号:409
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询资方组织下的融资机构(https://apaas-yapi.midea.com/project/7260/interface/api/746203)
 */

export function financeOrgFindbyFinanceCode(data?: IFinanceCodeParams) {
  return ajax<IFinanceCodeParams, any>({
    url: `/finance/org/findbyFinanceCode`,
    method: "post",
    data,
  });
}

/*
 *@序号:410
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:findAllFinance(https://apaas-yapi.midea.com/project/7260/interface/api/746206)
 */

export function financeOrgFinAllFin(data?: any) {
  return ajax<any, any>({
    url: `/finance/org/finAllFin`,
    method: "post",
    data,
  });
}

export interface IUserQueryParams {
  idNumber?: string;

  idType?: string;
}
export interface IUserQueryData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:411
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:用户查询（身份证类型，身份证）(https://apaas-yapi.midea.com/project/7260/interface/api/746209)
 */

export function financeOrganUserQuery(data?: IUserQueryParams) {
  return ajax<IUserQueryParams, IUserQueryData>({
    url: `/finance/organ/user/query`,
    method: "post",
    data,
  });
}

export interface IUsernameGetData {
  /**
   * 联系地址
   */
  address?: string;
  /**
   * 区ID
   */
  areaId?: number;
  /**
   * 地址所在区
   */
  areaName?: string;
  /**
   * 授权书文件id（非数据库字段）
   */
  authorizationDocumentId?: number;
  /**
   * 授权书文件name（非数据库字段）
   */
  authorizationDocumentName?: string;
  /**
   * 授权书文件（非数据库字段）
   */
  authorizationFile?: AuthorizationFile;
  /**
   * UKey证书颁发者信息
   */
  certIssuer?: string;
  /**
   * UKey证书有效期截止时间
   */
  certNotAfter?: string;
  /**
   * UKey证书有效期起始时间
   */
  certNotBefore?: string;
  /**
   * UKey证书序列号
   */
  certSerialNumber?: string;
  /**
   * UKey证书主题
   */
  certSubject?: string;
  /**
   * 地址所在市ID
   */
  cityId?: number;
  /**
   * 地址所在市
   */
  cityName?: string;
  /**
   * 确认密码（非数据库字段）
   */
  confirmPwd?: string;
  createBy?: string;
  createTime?: string;
  /**
   * 驱动类型 ，1：天威，2：CFCA
   */
  driverType?: number;
  /**
   * 邮件
   */
  email?: string;
  /**
   * 创建日期结束（非数据库字段）
   */
  endCreateTime?: string;
  /**
   * 企业等级
   */
  enterpriseGrade?: number;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 企业名称（非数据库字段）
   */
  enterpriseName?: string;
  /**
   * 企业组织机构代码（非数据库字段）
   */
  enterpriseOrganCode?: string;
  /**
   * 企业来源（非数据库字段）
   */
  enterpriseSource?: number;
  /**
   * 企业状态（非数据库字段）
   */
  enterpriseState?: number;
  /**
   * 企业类型（非数据库字段）
   */
  enterpriseType?: number;
  /**
   * 诚信签用户ID
   */
  espAccountId?: string;
  /**
   * 过期的证件列表（非数据库字段）
   */
  expiredCertList?: string[];
  /**
   * 文件列表（非数据库字段）
   */
  fileBOList?: FileBOList[];
  /**
   * 证件号
   */
  idNumber?: string;
  /**
   * 身份证件类型
   */
  idType?: number;
  /**
   * 身份证有效结束日期
   */
  idValidEndDate?: string;
  /**
   * 身份证有效起始日期
   */
  idValidStartDate?: string;
  /**
   * 是否在白名单N-否 Y-是
   */
  inWhiteList?: string;
  /**
   * 是否存在证件过期（非数据库字段）
   */
  isCertificateExpired?: boolean;
  /**
   * 是否修改过初始密码
   */
  isChangePwd?: number;
  /**
   * 是否美的企业标识
   */
  isMidea?: string;
  /**
   * 是否邮寄ukey
   */
  isSendUkey?: string;
  /**
   * ukey是否已交钱,1:已交钱
   */
  isUkeyCharged?: number;
  /**
   * ukey是否有效，1有效，其他无效
   */
  isUkeyEffect?: number;
  /**
   * 证书是否过期（非数据库字段）
   */
  isUkeyExpired?: number;
  /**
   * 是否使用注册账户（非数据库字段）
   */
  isUserRegAccount?: number;
  /**
   * 组长id
   */
  leaderId?: number;
  /**
   * 上级领导mip账号(非数据库字段)
   */
  leaderMip?: string;
  /**
   * 组长姓名
   */
  leaderName?: string;
  legalRepresentative?: string;
  legalRepresentativeIdType?: string;
  /**
   * 操作员证件文件id（非数据库字段）
   */
  licenseDocumentId?: number;
  /**
   * 操作员证件文件name（非数据库字段）
   */
  licenseDocumentName?: string;
  licenseNumber?: string;
  /**
   * 证书类型：是否启用UKey
   */
  licenseType?: number;
  /**
   * 消息模板编码
   */
  messageCode?: string;
  /**
   * mip账号
   */
  mip?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 企业证件类型（非数据库字段）
   */
  organCodeType?: number;
  /**
   * 其他文件（非数据库字段）
   */
  otherFiles?: OtherFiles;
  /**
   * 手机号（不能唯一，代开票的账号，一个手机号）
   */
  phoneNumber?: string;
  /**
   * 地址所在省ID
   */
  provinceId?: number;
  /**
   * 地址所在省
   */
  provinceName?: string;
  /**
   * 登录密码
   */
  pwd?: string;
  /**
   * 随机密码（非数据库字段）
   */
  ramdomPwd?: string;
  /**
   * 姓名
   */
  realName?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 资源Map（非数据库字段）
   */
  ResouceBOMap?: ResouceBOMap;
  /**
   * 资源List（非数据库字段）
   */
  resouceList?: ResouceList[];
  /**
   * 角色List（非数据库字段
   */
  roleBOList?: RoleBOList[];
  /**
   * 角色代码（非数据库字段）
   */
  roleCode?: string;
  /**
   * 关联角色表主键（非数据库字段）
   */
  roleId?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 密码盐值
   */
  salt?: string;
  /**
   * 创建日期开始（非数据库字段）
   */
  startCreateTime?: string;
  /**
   * 系统ID(哪个系统的用户)，1:企业端 2:运营端
   */
  systemId?: number;
  /**
   * 企业入驻服务条款同意：1 （非数据库字段）
   */
  termsOfService?: number;
  /**
   * 天威用户状态 1有效 2冻结（非数据库字段）
   */
  TWState?: boolean;
  /**
   * 证书类型（1、天威，2、CFCA）
   */
  ukeyCertType?: number;
  /**
   * ukeyId（非数据库字段）
   */
  ukeyId?: number;
  /**
   * 区块链混淆密码
   */
  userBlock?: string;
  /**
   * ID
   */
  userId?: number;
  /**
   * 用户名（要做唯一性判断）
   */
  userName?: string;
  /**
   * 用户来源:1一级供应商用户;2二级供应商用户
   */
  userSource?: number;
  /**
   * 用户状态 0冻结 1有效 2删除
   */
  userState?: number;
  /**
   * 工作岗位
   */
  workPost?: string;
  [property: string]: any;
}

/**
 * 资源Map（非数据库字段）
 */
export interface ResouceBOMap {
  key?: Key;
  [property: string]: any;
}

export interface Key {
  /**
   * 子资源LIST
   */
  childrens?: Children[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface Children {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

/**
 * 授权书文件（非数据库字段）
 */
export interface AuthorizationFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface FileBOList {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

/**
 * 其他文件（非数据库字段）
 */
export interface OtherFiles {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface ResouceList {
  /**
   * 子资源LIST
   */
  childrens?: { [key: string]: any }[];
  createBy?: string;
  createTime?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  /**
   * 图标
   */
  icon?: string;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 父资源id
   */
  parentId?: number;
  /**
   * ID
   */
  resId?: number;
  /**
   * 资源代码
   */
  resourceCode?: string;
  /**
   * 资源名称
   */
  resourceName?: string;
  /**
   * 资源状态，0：禁用；1：正常
   */
  resStatus?: number;
  /**
   * 资源类型：目录 ，菜单 ，按钮；配字典，保存字典ID，用;隔开；
   */
  resType?: string;
  /**
   * 路径
   */
  resUri?: string;
  /**
   * 资源排序，从0开始
   */
  sort?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  /**
   * 子系统 11：企业端的个人中心 ,12:企业端网站页面 ,21:运营端
   */
  systemSub?: string;
  [property: string]: any;
}

export interface RoleBOList {
  createBy?: string;
  createTime?: string;
  description?: string;
  /**
   * 企业ID
   */
  enterpriseId?: number;
  /**
   * 当前状态:0:非选中,1:选中
   */
  flag?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 权限编码。管理员:ADMIN ,经办员: CLERK,审核员：AUDITOR
   */
  roleCode?: string;
  /**
   * ID
   */
  roleId?: number;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 角色状态 0：禁用；1：正常',
   */
  roleState?: number;
  /**
   * 角色类型 1:管理员 2.普通角色
   */
  roleType?: number;
  /**
   * 系统ID(哪个系统的资源)
   */
  systemId?: number;
  [property: string]: any;
}

/*
 *@序号:412
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:getUserName(https://apaas-yapi.midea.com/project/7260/interface/api/746212)
 */

export function financeOrganUsernameGet(data?: any) {
  return ajax<any, IUsernameGetData>({
    url: `/finance/organ/username/get`,
    method: "post",
    data,
  });
}

export interface ISaveUserParams {
  /* 流水号*/
  id?: string;
  /* 融资机构主键*/
  financeOrganId?: string;
  /* 用户ID*/
  userId?: string;
  /* 用户名（登录账号）*/
  userName?: string;
  /* 姓名*/
  realName?: string;
  /* 角色编码列表*/
  roleCodeList?: string;
  /* 身份证件类型,1-居民身份证,2-护照,3-港澳通行证,4-台湾通行证*/
  idType?: string;
  /* 证件号*/
  idNumber?: string;
  /* 手机号（不能唯一，代开票的账号，一个手机号）*/
  phoneNumber?: string;
  /* 邮件*/
  email?: string;
  /* 是否持有Ukey,Y,是，N否*/
  hasUkey?: string;
  /* 记录状态,1,新增，2变更，3有效，4移除，5作废*/
  recordState?: string;
  /* 处理状态,1,待处理，2已处理*/
  handleState?: string;
  /* 描述*/
  remark?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人（每次更新都记录）*/
  modifyBy?: string;
  /* 修改时间（每次更新都记录）*/
  modifyTime?: string;
  /* 角色编码列表中文名（非数据字段）*/
  roleCodeListCn?: string;
}

/*
 *@序号:413
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:融资机构新增操作员(https://apaas-yapi.midea.com/project/7260/interface/api/746215)
 */

export function financeOrganSaveUser(data?: ISaveUserParams) {
  return ajax<ISaveUserParams, any>({
    url: `/finance/organ/save/user`,
    method: "post",
    data,
  });
}

export interface IQueryFinParams {
  /* 融资发票申请id*/
  applyId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 发票开具类型*/
  busType?: string;
  /* 发票申请类型（中文）*/
  busTypeStr?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 客户经理*/
  mgrName?: string;
  /* 融资机构*/
  financeName?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资手续费*/
  sellFee?: string;
  /* 融资放款日*/
  sellDate?: string;
  /* 融资放款日*/
  sellDateStart?: string;
  /* 融资放款日*/
  sellDateEnd?: string;
  /* 融资状态*/
  sellState?: string;
  /* 融资状态（中文）*/
  sellStateStr?: string;
  /* 费用结记状态*/
  isCharge?: string;
  /* 费用结记状态(中文)*/
  isChargeStr?: string;
  /* 融资状态*/
  invoicingState?: string;
  /* 融资状态*/
  invoicingStateStr?: string;
}
export interface IQueryFinData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 融资发票申请id
   */
  applyId?: number;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 发票开具类型
   */
  busType?: number;
  /**
   * 发票申请类型（中文）
   */
  busTypeStr?: string;
  /**
   * 融资机构
   */
  financeName?: string;
  /**
   * 融资状态
   */
  invoicingState?: number;
  /**
   * 融资状态
   */
  invoicingStateStr?: string;
  /**
   * 费用结记状态
   */
  isCharge?: string;
  /**
   * 费用结记状态(中文)
   */
  isChargeStr?: string;
  /**
   * 客户经理
   */
  mgrName?: string;
  /**
   * 融资放款日
   */
  sellDate?: string;
  /**
   * 融资放款日
   */
  sellDateEnd?: string;
  /**
   * 融资放款日
   */
  sellDateStart?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资手续费
   */
  sellFee?: string;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * 融资状态
   */
  sellState?: number;
  /**
   * 融资状态（中文）
   */
  sellStateStr?: string;
  [property: string]: any;
}

/*
 *@序号:414
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具列表(https://apaas-yapi.midea.com/project/7260/interface/api/746218)
 */

export function invoiceApplyQueryFin(data?: IQueryFinParams) {
  return ajax<IQueryFinParams, IQueryFinData>({
    url: `/invoice/apply/query/fin`,
    method: "post",
    data,
  });
}

export interface IDocFinParams {
  applyId: string;
}
export interface IDocFinData {
  /**
   * 文档id
   */
  docId?: number;
  /**
   * 文档连接
   */
  docLink?: string;
  /**
   * 文档名称
   */
  docName?: string;
  [property: string]: any;
}

/*
 *@序号:415
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具申请发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746221)
 */

export function invoiceApplyQueryDocFin(data?: IDocFinParams) {
  return ajax<IDocFinParams, IDocFinData>({
    url: `/invoice/apply/query/doc/fin`,
    method: "post",
    data,
  });
}

export interface IDocFinParams {
  docId: string;

  docName?: string;
}

/*
 *@序号:416
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具列表(https://apaas-yapi.midea.com/project/7260/interface/api/746224)
 */

export function invoiceApplyDownloadDocFin(params?: IDocFinParams) {
  return ajax<IDocFinParams, any>({
    url: `/invoice/apply/download/doc/fin`,
    method: "get",
    params,
  });
}

export interface IExportFinParams {
  /* 融资发票申请id*/
  applyId?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 发票开具类型*/
  busType?: string;
  /* 发票申请类型（中文）*/
  busTypeStr?: string;
  /* 融资企业*/
  sellerName?: string;
  /* 客户经理*/
  mgrName?: string;
  /* 融资机构*/
  financeName?: string;
  /* 融资金额*/
  sellMoney?: string;
  /* 融资利息*/
  sellInterest?: string;
  /* 融资手续费*/
  sellFee?: string;
  /* 融资放款日*/
  sellDate?: string;
  /* 融资放款日*/
  sellDateStart?: string;
  /* 融资放款日*/
  sellDateEnd?: string;
  /* 融资状态*/
  sellState?: string;
  /* 融资状态（中文）*/
  sellStateStr?: string;
  /* 费用结记状态*/
  isCharge?: string;
  /* 费用结记状态(中文)*/
  isChargeStr?: string;
  /* 融资状态*/
  invoicingState?: string;
  /* 融资状态*/
  invoicingStateStr?: string;
}

/*
 *@序号:417
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具列表-导出(https://apaas-yapi.midea.com/project/7260/interface/api/746227)
 */

export function invoiceApplyExportFin(params?: IExportFinParams) {
  return ajax<IExportFinParams, any>({
    url: `/invoice/apply/export/fin`,
    method: "get",
    params,
  });
}

export interface IFinDetailParams {
  applyId: string;

  pageNumber: string;

  pageSize: string;
}
export interface IFinDetailData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 关联美易单编号
   */
  billCode?: string;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方企业名称
   */
  buyEntName?: string;
  /**
   * 失败原因
   */
  failReason?: string;
  /**
   * 发票类型
   */
  invoicieType?: number;
  /**
   * 发票类型(中文)
   */
  invoicieTypeCN?: string;
  /**
   * 开票业务流水号
   */
  invoicingCode?: string;
  /**
   * 开票状态
   */
  invoicingState?: number;
  /**
   * 开票状态（中文）
   */
  invoicingStateCN?: string;
  /**
   * 是否冲销（中文）
   */
  isCancle?: number;
  /**
   * 是否冲销（中文）
   */
  isCancleCN?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方企业名称
   */
  sellEntName?: string;
  /**
   * 货物、应税劳务及服务
   */
  serviceItem?: string;
  /**
   * 税率
   */
  taxRate?: number;
  [property: string]: any;
}

/*
 *@序号:418
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具明细(https://apaas-yapi.midea.com/project/7260/interface/api/746230)
 */

export function invoiceApplyQueryFinDetail(data?: IFinDetailParams) {
  return ajax<IFinDetailParams, IFinDetailData>({
    url: `/invoice/apply/query/fin/detail`,
    method: "post",
    data,
  });
}

export interface IDetailInfoParams {
  applyId: string;
}
export interface IDetailInfoData {
  /**
   * 融资发票申请id
   */
  applyId?: number;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 发票开具类型
   */
  busType?: number;
  /**
   * 发票申请类型（中文）
   */
  busTypeStr?: string;
  /**
   * 融资机构
   */
  financeName?: string;
  /**
   * 融资状态
   */
  invoicingState?: number;
  /**
   * 融资状态
   */
  invoicingStateStr?: string;
  /**
   * 费用结记状态
   */
  isCharge?: string;
  /**
   * 费用结记状态(中文)
   */
  isChargeStr?: string;
  /**
   * 客户经理
   */
  mgrName?: string;
  /**
   * 融资放款日
   */
  sellDate?: string;
  /**
   * 融资放款日
   */
  sellDateEnd?: string;
  /**
   * 融资放款日
   */
  sellDateStart?: string;
  /**
   * 融资企业
   */
  sellerName?: string;
  /**
   * 融资手续费
   */
  sellFee?: string;
  /**
   * 融资利息
   */
  sellInterest?: number;
  /**
   * 融资金额
   */
  sellMoney?: number;
  /**
   * 融资状态
   */
  sellState?: number;
  /**
   * 融资状态（中文）
   */
  sellStateStr?: string;
  [property: string]: any;
}

/*
 *@序号:419
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具明细(https://apaas-yapi.midea.com/project/7260/interface/api/746233)
 */

export function invoiceApplyQueryFinDetailInfo(data?: IDetailInfoParams) {
  return ajax<IDetailInfoParams, IDetailInfoData>({
    url: `/invoice/apply/query/fin/detail/info`,
    method: "post",
    data,
  });
}

export interface IFinFailParams {
  /* 开票业务流水号*/
  invoicingCode?: string;
  /* 关联美易单编号*/
  billCode?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 货物、应税劳务及服务*/
  serviceItem?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 税率*/
  taxRate?: string;
  /* 发票类型*/
  invoicieType?: string;
  /* 发票类型(中文)*/
  invoicieTypeCN?: string;
  /* 备注信息*/
  remark?: string;
  /* 开票状态*/
  invoicingState?: string;
  /* 开票状态（中文）*/
  invoicingStateCN?: string;
  /* 是否冲销（中文）*/
  isCancle?: string;
  /* 是否冲销（中文）*/
  isCancleCN?: string;
  /* 失败原因*/
  failReason?: string;
}
export interface IFinFailData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 关联美易单编号
   */
  billCode?: string;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方企业名称
   */
  buyEntName?: string;
  /**
   * 失败原因
   */
  failReason?: string;
  /**
   * 发票类型
   */
  invoicieType?: number;
  /**
   * 发票类型(中文)
   */
  invoicieTypeCN?: string;
  /**
   * 开票业务流水号
   */
  invoicingCode?: string;
  /**
   * 开票状态
   */
  invoicingState?: number;
  /**
   * 开票状态（中文）
   */
  invoicingStateCN?: string;
  /**
   * 是否冲销（中文）
   */
  isCancle?: number;
  /**
   * 是否冲销（中文）
   */
  isCancleCN?: string;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方企业名称
   */
  sellEntName?: string;
  /**
   * 货物、应税劳务及服务
   */
  serviceItem?: string;
  /**
   * 税率
   */
  taxRate?: number;
  [property: string]: any;
}

/*
 *@序号:420
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具失败明细(https://apaas-yapi.midea.com/project/7260/interface/api/746236)
 */

export function invoiceApplyQueryFinFail(data?: IFinFailParams) {
  return ajax<IFinFailParams, IFinFailData>({
    url: `/invoice/apply/query/fin/fail`,
    method: "post",
    data,
  });
}

export interface IFinFailParams {
  /* 开票业务流水号*/
  invoicingCode?: string;
  /* 关联美易单编号*/
  billCode?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 货物、应税劳务及服务*/
  serviceItem?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 税率*/
  taxRate?: string;
  /* 发票类型*/
  invoicieType?: string;
  /* 发票类型(中文)*/
  invoicieTypeCN?: string;
  /* 备注信息*/
  remark?: string;
  /* 开票状态*/
  invoicingState?: string;
  /* 开票状态（中文）*/
  invoicingStateCN?: string;
  /* 是否冲销（中文）*/
  isCancle?: string;
  /* 是否冲销（中文）*/
  isCancleCN?: string;
  /* 失败原因*/
  failReason?: string;
}

/*
 *@序号:421
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具失败明细(https://apaas-yapi.midea.com/project/7260/interface/api/746239)
 */

export function invoiceApplyExportFinFail(params?: IFinFailParams) {
  return ajax<IFinFailParams, any>({
    url: `/invoice/apply/export/fin/fail`,
    method: "get",
    params,
  });
}

export interface IFailRetryParams {
  /* 开票业务流水号*/
  invoicingCode?: string;
  /* 关联美易单编号*/
  billCode?: string;
  /* 开票日期*/
  outputDate?: string;
  /* 货物、应税劳务及服务*/
  serviceItem?: string;
  /* 购货方企业名称*/
  buyEntName?: string;
  /* 购货方纳税人识别号*/
  buyEntCode?: string;
  /* 销货方企业名称*/
  sellEntName?: string;
  /* 销货方纳税人识别号*/
  sellEntCode?: string;
  /* 税率*/
  taxRate?: string;
  /* 发票类型*/
  invoicieType?: string;
  /* 发票类型(中文)*/
  invoicieTypeCN?: string;
  /* 备注信息*/
  remark?: string;
  /* 开票状态*/
  invoicingState?: string;
  /* 开票状态（中文）*/
  invoicingStateCN?: string;
  /* 是否冲销（中文）*/
  isCancle?: string;
  /* 是否冲销（中文）*/
  isCancleCN?: string;
  /* 失败原因*/
  failReason?: string;
}

/*
 *@序号:422
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具失败明细(https://apaas-yapi.midea.com/project/7260/interface/api/746242)
 */

export function invoiceApplyFinFailRetry(data?: IFailRetryParams) {
  return ajax<IFailRetryParams, any>({
    url: `/invoice/apply/fin/fail/retry`,
    method: "post",
    data,
  });
}

export interface IManCheckParams {
  invoicingCode: string;

  transType: string;
}

/*
 *@序号:423
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:手工触发查询发票开具结果(https://apaas-yapi.midea.com/project/7260/interface/api/746245)
 */

export function invoiceApplyResultManCheck(params?: IManCheckParams) {
  return ajax<IManCheckParams, any>({
    url: `/invoice/apply/result/man/check`,
    method: "get",
    params,
  });
}

export interface IFeeSendParams {
  id: string;
}

/*
 *@序号:424
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:invoiceApplyFeeSend(https://apaas-yapi.midea.com/project/7260/interface/api/746248)
 */

export function invoiceApplyInvoiceFeeSend(data?: IFeeSendParams) {
  return ajax<IFeeSendParams, any>({
    url: `/invoice/apply/invoice/fee/send`,
    method: "post",
    data,
  });
}

export interface IFeeInfoParams {
  id: string;
}

/*
 *@序号:425
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:invoiceApplyFeeInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746251)
 */

export function invoiceApplyInvoiceFeeInfo(data?: IFeeInfoParams) {
  return ajax<IFeeInfoParams, any>({
    url: `/invoice/apply/invoice/fee/info`,
    method: "post",
    data,
  });
}

type IApplyListParams = undefined;

export interface IApplyListData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 变更状态
   */
  applyState?: number;
  /**
   * 变更状态
   */
  applyStateCN?: string;
  /**
   * 变更日期
   */
  applyTime?: string;
  /**
   * 美易单号
   */
  billCode?: string;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 申请ID
   */
  id?: number;
  /**
   * 收单企业
   */
  inputterName?: string;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 开单日
   */
  outputDate?: string;
  /**
   * 开单企业
   */
  outputEntName?: string;
  [property: string]: any;
}

/*
 *@序号:426
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:list(https://apaas-yapi.midea.com/project/7260/interface/api/746254)
 */

export function invoiceOccupyApplyList(data?: IApplyListParams) {
  return ajax<IApplyListParams, IApplyListData>({
    url: `/invoice/occupy/apply/list`,
    method: "post",
    data,
  });
}

export interface IBillQueryParams {
  /* 美易单号*/
  billCode: string;
}
export interface IBillQueryData {
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 美易单号
   */
  billCode?: string;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 开单状态
   */
  billState?: number;
  /**
   * 开单状态
   */
  billStateCN?: string;
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 银行账号
   */
  inputAccount?: string;
  /**
   * 开户行
   */
  inputBank?: string;
  /**
   * 收单企业组织机构ID
   */
  inputOrgId?: number;
  /**
   * 收单企业组织机构
   */
  inputOrgName?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业
   */
  inputterName?: string;
  /**
   * 发票信息
   */
  invoicesAfter?: InvoicesAfter[];
  /**
   * 发票信息
   */
  invoicesBefore?: InvoicesBefore[];
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 开单日
   */
  outputDate?: string;
  /**
   * 开单企业ID
   */
  outputEntId?: number;
  /**
   * 开单企业
   */
  outputEntName?: string;
  /**
   * 开单企业组织机构ID
   */
  outputOrgId?: number;
  /**
   * 开单企业组织机构
   */
  outputOrgName?: string;
  /**
   * 内部账号
   */
  payAccount?: string;
  /**
   * 内部账户
   */
  payAccountName?: string;
  /**
   * 1，代开发票模式，0，非代开发票模式
   */
  proxyType?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * 发票汇总金额
   */
  sumInvoiceMoney?: number;
  [property: string]: any;
}

export interface InvoicesAfter {
  /**
   * 发票可用金额
   */
  availableMoney: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode: string;
  /**
   * 购货方
   */
  buyEntName: string;
  /**
   * 合同金额
   */
  contAmount?: string;
  /**
   * 合同附件docId
   */
  contDocId?: string;
  /**
   * 合同生效日期
   */
  contEffDate?: string;
  /**
   * 合同到期日
   */
  contExDate?: string;
  /**
   * 合同附件名称
   */
  contFileName?: string;
  /**
   * 合同编号
   */
  contNo?: string;
  /**
   * 删除标记0-不可删 1-可删
   */
  deleteFlag?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票影印件
   */
  invoiceDocId: number;
  /**
   * 发票关联文档名称
   */
  invoiceFileName?: string;
  /**
   * 发票金额
   */
  invoiceMoney: number;
  /**
   * 发票金额（不含税）
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo: string;
  /**
   * 发票类型
   */
  invoiceType: number;
  /**
   * 发票类型
   */
  invoiceTypeCN?: string;
  /**
   * 发票占用金额
   */
  occupyMoney: number;
  /**
   * 开票日期
   */
  outputDate: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode: string;
  /**
   * 销货方
   */
  sellEntName: string;
  /**
   * 税额
   */
  taxAmt?: number;
  /**
   * 发票校验码
   */
  verifyCode?: string;
  /**
   * 发票验真结果
   */
  verifyResult: number;
  /**
   * 发票验真结果
   */
  verifyResultCN?: string;
  [property: string]: any;
}

export interface InvoicesBefore {
  /**
   * 发票可用金额
   */
  availableMoney: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode: string;
  /**
   * 购货方
   */
  buyEntName: string;
  /**
   * 合同金额
   */
  contAmount?: string;
  /**
   * 合同附件docId
   */
  contDocId?: string;
  /**
   * 合同生效日期
   */
  contEffDate?: string;
  /**
   * 合同到期日
   */
  contExDate?: string;
  /**
   * 合同附件名称
   */
  contFileName?: string;
  /**
   * 合同编号
   */
  contNo?: string;
  /**
   * 删除标记0-不可删 1-可删
   */
  deleteFlag?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票影印件
   */
  invoiceDocId: number;
  /**
   * 发票关联文档名称
   */
  invoiceFileName?: string;
  /**
   * 发票金额
   */
  invoiceMoney: number;
  /**
   * 发票金额（不含税）
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo: string;
  /**
   * 发票类型
   */
  invoiceType: number;
  /**
   * 发票类型
   */
  invoiceTypeCN?: string;
  /**
   * 发票占用金额
   */
  occupyMoney: number;
  /**
   * 开票日期
   */
  outputDate: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode: string;
  /**
   * 销货方
   */
  sellEntName: string;
  /**
   * 税额
   */
  taxAmt?: number;
  /**
   * 发票校验码
   */
  verifyCode?: string;
  /**
   * 发票验真结果
   */
  verifyResult: number;
  /**
   * 发票验真结果
   */
  verifyResultCN?: string;
  [property: string]: any;
}

/*
 *@序号:427
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:billInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746257)
 */

export function invoiceOccupyApplyBillQuery(data?: IBillQueryParams) {
  return ajax<IBillQueryParams, IBillQueryData>({
    url: `/invoice/occupy/apply/billQuery`,
    method: "post",
    data,
  });
}

export interface IApplyInitData {
  /**
   * 变更说明
   */
  applyRemark?: string;
  /**
   * 变更日期
   */
  applyTime?: string;
  /**
   * 变更人
   */
  clerker?: string;
  /**
   * 变更人名称
   */
  clerkerName?: string;
  [property: string]: any;
}

/*
 *@序号:428
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:init(https://apaas-yapi.midea.com/project/7260/interface/api/746260)
 */

export function invoiceOccupyApplyInit(data?: any) {
  return ajax<any, IApplyInitData>({
    url: `/invoice/occupy/apply/init`,
    method: "post",
    data,
  });
}

export interface IApplySubmitParams {
  /* 申请ID*/
  id?: string;
  /* 美易单号*/
  billCode: string;
  /* 变更人*/
  clerker?: string;
  /* 变更人名称*/
  clerkerName?: string;
  /* 变更日期*/
  applyTime?: string;
  /* 变更说明*/
  applyRemark?: string;
  /* 开单日*/
  outputDate: string;
  /* 美易单金额*/
  billMoney: string;
  /* 开单企业*/
  outputEntName: string;
  /* 开单企业ID*/
  outputEntId: string;
  /* 开单企业组织机构ID*/
  outputOrgId: string;
  /* 开单企业组织机构*/
  outputOrgName: string;
  /* 到期日*/
  expireDate: string;
  /* 期限*/
  limitDays: string;
  /* 内部账号*/
  payAccount?: string;
  /* 内部账户*/
  payAccountName?: string;
  /* 收单企业*/
  inputterName: string;
  /* 收单企业ID*/
  inputterId: string;
  /* 收单企业组织机构ID*/
  inputOrgId?: string;
  /* 收单企业组织机构*/
  inputOrgName?: string;
  /* 变更后发票信息*/
  invoicesAfter: string;
  /* 发票影印件*/
  convertInvoicesAfter: string;
  /* 发票关联文档名称*/
  convertInvoicesAfter?: string;
  /* 发票代码*/
  convertInvoicesAfter?: string;
  /* 发票号码*/
  convertInvoicesAfter: string;
  /* 发票类型*/
  convertInvoicesAfter: string;
  /* 发票类型*/
  convertInvoicesAfter?: string;
  /* 开票日期*/
  convertInvoicesAfter: string;
  /* 发票金额（不含税）*/
  convertInvoicesAfter?: string;
  /* 发票金额*/
  convertInvoicesAfter: string;
  /* 购货方*/
  convertInvoicesAfter: string;
  /* 购货方纳税人识别号*/
  convertInvoicesAfter: string;
  /* 销货方*/
  convertInvoicesAfter: string;
  /* 销货方纳税人识别号*/
  convertInvoicesAfter: string;
  /* 发票校验码*/
  convertInvoicesAfter?: string;
  /* 合同编号*/
  convertInvoicesAfter?: string;
  /* 发票验真结果*/
  convertInvoicesAfter: string;
  /* 发票验真结果*/
  convertInvoicesAfter?: string;
  /* 合同金额*/
  convertInvoicesAfter?: string;
  /* 合同生效日期*/
  convertInvoicesAfter?: string;
  /* 合同到期日*/
  convertInvoicesAfter?: string;
  /* 合同附件docId*/
  convertInvoicesAfter?: string;
  /* 合同附件名称*/
  convertInvoicesAfter?: string;
  /* 发票可用金额*/
  convertInvoicesAfter: string;
  /* 发票占用金额*/
  convertInvoicesAfter: string;
  /* 税额*/
  convertInvoicesAfter?: string;
  /* 删除标记0-不可删 1-可删*/
  convertInvoicesAfter?: string;
}
type IApplySubmitData = null;

/*
 *@序号:429
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:submit(https://apaas-yapi.midea.com/project/7260/interface/api/746263)
 */

export function invoiceOccupyApplySubmit(data?: IApplySubmitParams) {
  return ajax<IApplySubmitParams, IApplySubmitData>({
    url: `/invoice/occupy/apply/submit`,
    method: "post",
    data,
  });
}

export interface IApplyCancelParams {
  /* 申请ID*/
  id: string;
  /* 变更人*/
  clerker?: string;
  /* 变更人名称*/
  clerkerName?: string;
  /* 变更说明*/
  applyRemark: string;
}
type IApplyCancelData = null;

/*
 *@序号:430
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:cancel(https://apaas-yapi.midea.com/project/7260/interface/api/746266)
 */

export function invoiceOccupyApplyCancel(data?: IApplyCancelParams) {
  return ajax<IApplyCancelParams, IApplyCancelData>({
    url: `/invoice/occupy/apply/cancel`,
    method: "post",
    data,
  });
}

export interface IApplyDetailParams {
  /* 申请ID*/
  id: string;
}
export interface IApplyDetailData {
  /**
   * 经办人
   */
  applyer?: string;
  /**
   * 变更说明
   */
  applyRemark?: string;
  /**
   * 变更日期
   */
  applyTime?: string;
  /**
   * 美易单号
   */
  billCode?: string;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 开单状态
   */
  billState?: number;
  /**
   * 开单状态
   */
  billStateCN?: string;
  /**
   * 变更人
   */
  clerker?: string;
  /**
   * 变更人名称
   */
  clerkerName?: string;
  /**
   * 流转次数
   */
  exchangeCount?: number;
  /**
   * 流转金额
   */
  exchangeMoney?: number;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 银行账号
   */
  inputAccount?: string;
  /**
   * 开户行
   */
  inputBank?: string;
  /**
   * 收单企业组织机构ID
   */
  inputOrgId?: number;
  /**
   * 收单企业组织机构
   */
  inputOrgName?: string;
  /**
   * 收单企业ID
   */
  inputterId?: number;
  /**
   * 收单企业
   */
  inputterName?: string;
  /**
   * 变更后发票信息
   */
  invoicesAfter?: InvoicesAfter[];
  /**
   * 变更前发票信息
   */
  invoicesBefore?: InvoicesBefore[];
  /**
   * 期限
   */
  limitDays?: number;
  logs?: Log[];
  /**
   * 开单日
   */
  outputDate?: string;
  /**
   * 开单企业ID
   */
  outputEntId?: number;
  /**
   * 开单企业
   */
  outputEntName?: string;
  /**
   * 开单企业组织机构ID
   */
  outputOrgId?: number;
  /**
   * 开单企业组织机构
   */
  outputOrgName?: string;
  /**
   * 内部账号
   */
  payAccount?: string;
  /**
   * 内部账户
   */
  payAccountName?: string;
  /**
   * 1，代开发票模式，0，非代开发票模式
   */
  proxyType?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 复核人
   */
  reviewer?: string;
  /**
   * 审批说明
   */
  reviewRemark?: string;
  /**
   * 发票汇总金额
   */
  sumInvoiceMoney?: number;
  [property: string]: any;
}

export interface InvoicesAfter {
  /**
   * 发票可用金额
   */
  availableMoney: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode: string;
  /**
   * 购货方
   */
  buyEntName: string;
  /**
   * 合同金额
   */
  contAmount?: string;
  /**
   * 合同附件docId
   */
  contDocId?: string;
  /**
   * 合同生效日期
   */
  contEffDate?: string;
  /**
   * 合同到期日
   */
  contExDate?: string;
  /**
   * 合同附件名称
   */
  contFileName?: string;
  /**
   * 合同编号
   */
  contNo?: string;
  /**
   * 删除标记0-不可删 1-可删
   */
  deleteFlag?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票影印件
   */
  invoiceDocId: number;
  /**
   * 发票关联文档名称
   */
  invoiceFileName?: string;
  /**
   * 发票金额
   */
  invoiceMoney: number;
  /**
   * 发票金额（不含税）
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo: string;
  /**
   * 发票类型
   */
  invoiceType: number;
  /**
   * 发票类型
   */
  invoiceTypeCN?: string;
  /**
   * 发票占用金额
   */
  occupyMoney: number;
  /**
   * 开票日期
   */
  outputDate: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode: string;
  /**
   * 销货方
   */
  sellEntName: string;
  /**
   * 税额
   */
  taxAmt?: number;
  /**
   * 发票校验码
   */
  verifyCode?: string;
  /**
   * 发票验真结果
   */
  verifyResult: number;
  /**
   * 发票验真结果
   */
  verifyResultCN?: string;
  [property: string]: any;
}

export interface InvoicesBefore {
  /**
   * 发票可用金额
   */
  availableMoney: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode: string;
  /**
   * 购货方
   */
  buyEntName: string;
  /**
   * 合同金额
   */
  contAmount?: string;
  /**
   * 合同附件docId
   */
  contDocId?: string;
  /**
   * 合同生效日期
   */
  contEffDate?: string;
  /**
   * 合同到期日
   */
  contExDate?: string;
  /**
   * 合同附件名称
   */
  contFileName?: string;
  /**
   * 合同编号
   */
  contNo?: string;
  /**
   * 删除标记0-不可删 1-可删
   */
  deleteFlag?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票影印件
   */
  invoiceDocId: number;
  /**
   * 发票关联文档名称
   */
  invoiceFileName?: string;
  /**
   * 发票金额
   */
  invoiceMoney: number;
  /**
   * 发票金额（不含税）
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo: string;
  /**
   * 发票类型
   */
  invoiceType: number;
  /**
   * 发票类型
   */
  invoiceTypeCN?: string;
  /**
   * 发票占用金额
   */
  occupyMoney: number;
  /**
   * 开票日期
   */
  outputDate: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode: string;
  /**
   * 销货方
   */
  sellEntName: string;
  /**
   * 税额
   */
  taxAmt?: number;
  /**
   * 发票校验码
   */
  verifyCode?: string;
  /**
   * 发票验真结果
   */
  verifyResult: number;
  /**
   * 发票验真结果
   */
  verifyResultCN?: string;
  [property: string]: any;
}

export interface Log {
  /**
   * 审批意见
   */
  comment?: string;
  [property: string]: any;
}

/*
 *@序号:431
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:detail(https://apaas-yapi.midea.com/project/7260/interface/api/746269)
 */

export function invoiceOccupyApplyDetail(data?: IApplyDetailParams) {
  return ajax<IApplyDetailParams, IApplyDetailData>({
    url: `/invoice/occupy/apply/detail`,
    method: "post",
    data,
  });
}

type IReviewListParams = undefined;

export interface IReviewListData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 变更状态
   */
  applyState?: number;
  /**
   * 变更状态
   */
  applyStateCN?: string;
  /**
   * 变更日期
   */
  applyTime?: string;
  /**
   * 美易单号
   */
  billCode?: string;
  /**
   * 美易单金额
   */
  billMoney?: number;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 申请ID
   */
  id?: number;
  /**
   * 收单企业
   */
  inputterName?: string;
  /**
   * 期限
   */
  limitDays?: number;
  /**
   * 开单日
   */
  outputDate?: string;
  /**
   * 开单企业
   */
  outputEntName?: string;
  [property: string]: any;
}

/*
 *@序号:432
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:reviewList(https://apaas-yapi.midea.com/project/7260/interface/api/746272)
 */

export function invoiceOccupyApplyReviewList(data?: IReviewListParams) {
  return ajax<IReviewListParams, IReviewListData>({
    url: `/invoice/occupy/apply/reviewList`,
    method: "post",
    data,
  });
}

export interface IApplyPassParams {
  /* 申请ID*/
  id: string;
  /* 复核人*/
  checker?: string;
  /* 复核人名称*/
  checkerName?: string;
  /* 审批说明*/
  reviewRemark: string;
}
type IApplyPassData = null;

/*
 *@序号:433
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:pass(https://apaas-yapi.midea.com/project/7260/interface/api/746275)
 */

export function invoiceOccupyApplyPass(data?: IApplyPassParams) {
  return ajax<IApplyPassParams, IApplyPassData>({
    url: `/invoice/occupy/apply/pass`,
    method: "post",
    data,
  });
}

export interface IApplyRejectParams {
  /* 申请ID*/
  id: string;
  /* 复核人*/
  checker?: string;
  /* 复核人名称*/
  checkerName?: string;
  /* 审批说明*/
  reviewRemark: string;
}
type IApplyRejectData = null;

/*
 *@序号:434
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:reject(https://apaas-yapi.midea.com/project/7260/interface/api/746278)
 */

export function invoiceOccupyApplyReject(data?: IApplyRejectParams) {
  return ajax<IApplyRejectParams, IApplyRejectData>({
    url: `/invoice/occupy/apply/reject`,
    method: "post",
    data,
  });
}

export interface IInvoiceQueryParams {
  /* 发票代码*/
  invoiceCode?: string;
  /* 发票号码*/
  invoiceNo: string;
}
export interface IInvoiceQueryData {
  /**
   * 发票可用金额
   */
  availableMoney?: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方
   */
  buyEntName?: string;
  /**
   * 合同编号
   */
  contNo?: string;
  /**
   * 删除标记0-不可删 1-可删
   */
  deleteFlag?: number;
  /**
   * 存在标记
   */
  existsFlag?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票影印件
   */
  invoiceDocId?: number;
  /**
   * 发票金额
   */
  invoiceMoney?: number;
  /**
   * 发票金额（不含税）
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo?: string;
  /**
   * 发票类型
   */
  invoiceType?: number;
  /**
   * 发票类型
   */
  invoiceTypeCN?: string;
  /**
   * 发票占用金额
   */
  occupyMoney?: number;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方
   */
  sellEntName?: string;
  /**
   * 税额
   */
  taxAmt?: number;
  /**
   * 发票校验码
   */
  verifyCode?: string;
  /**
   * 发票验真结果
   */
  verifyResult?: number;
  /**
   * 发票验真结果
   */
  verifyResultCN?: string;
  [property: string]: any;
}

/*
 *@序号:435
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceQuery(https://apaas-yapi.midea.com/project/7260/interface/api/746281)
 */

export function invoiceOccupyApplyInvoiceQuery(data?: IInvoiceQueryParams) {
  return ajax<IInvoiceQueryParams, IInvoiceQueryData>({
    url: `/invoice/occupy/apply/invoiceQuery`,
    method: "post",
    data,
  });
}

export interface IInvoiceValidParams {
  /* 美易单号*/
  billCode: string;
  /* 发票代码*/
  invoiceCode?: string;
  /* 发票号码*/
  invoiceNo: string;
  /* 发票类型*/
  invoiceType: string;
  /* 开票日期*/
  outputDate: string;
  /* 发票金额（不含税）*/
  invoiceMoneyNoTax: string;
  /* 税额*/
  taxAmt: string;
  /* 购货方*/
  buyEntName: string;
  /* 购货方纳税人识别号*/
  buyEntCode: string;
  /* 销货方*/
  sellEntName: string;
  /* 销货方纳税人识别号*/
  sellEntCode: string;
  /* 发票校验码*/
  verifyCode?: string;
  /* 发票验真结果*/
  verifyResult?: string;
  /* 发票可用金额*/
  availableMoney: string;
  /* 发票占用金额*/
  occupyMoney?: string;
  /* 发票影印件*/
  invoiceDocId: string;
  /* 发票影印件名称*/
  invoiceFileName?: string;
}
type IInvoiceValidData = null;

/*
 *@序号:436
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceValid(https://apaas-yapi.midea.com/project/7260/interface/api/746284)
 */

export function invoiceOccupyApplyInvoiceValid(data?: IInvoiceValidParams) {
  return ajax<IInvoiceValidParams, IInvoiceValidData>({
    url: `/invoice/occupy/apply/invoiceValid`,
    method: "post",
    data,
  });
}

export interface IInvoiceCalcParams {
  /* 发票代码*/
  invoiceCode?: string;
  /* 发票号码*/
  invoiceNo: string;
  /* 发票金额（不含税）*/
  invoiceMoneyNoTax?: string;
  /* 税额*/
  taxAmt?: string;
  /* 发票占用金额*/
  occupyMoney?: string;
}
export interface IInvoiceCalcData {
  /**
   * 发票可用金额
   */
  availableMoney?: number;
  [property: string]: any;
}

/*
 *@序号:437
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceCalc(https://apaas-yapi.midea.com/project/7260/interface/api/746287)
 */

export function invoiceOccupyApplyInvoiceCalc(data?: IInvoiceCalcParams) {
  return ajax<IInvoiceCalcParams, IInvoiceCalcData>({
    url: `/invoice/occupy/apply/invoiceCalc`,
    method: "post",
    data,
  });
}

export interface IInvoiceOcrParams {
  docId: string;
}
export interface IInvoiceOcrData {
  /**
   * 发票可用金额
   */
  availableMoney: number;
  /**
   * 购货方纳税人识别号
   */
  buyEntCode: string;
  /**
   * 购货方
   */
  buyEntName: string;
  /**
   * 合同金额
   */
  contAmount?: string;
  /**
   * 合同附件docId
   */
  contDocId?: string;
  /**
   * 合同生效日期
   */
  contEffDate?: string;
  /**
   * 合同到期日
   */
  contExDate?: string;
  /**
   * 合同附件名称
   */
  contFileName?: string;
  /**
   * 合同编号
   */
  contNo?: string;
  /**
   * 删除标记0-不可删 1-可删
   */
  deleteFlag?: number;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * 发票影印件
   */
  invoiceDocId: number;
  /**
   * 发票关联文档名称
   */
  invoiceFileName?: string;
  /**
   * 发票金额
   */
  invoiceMoney: number;
  /**
   * 发票金额（不含税）
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo: string;
  /**
   * 发票类型
   */
  invoiceType: number;
  /**
   * 发票类型
   */
  invoiceTypeCN?: string;
  /**
   * 发票占用金额
   */
  occupyMoney: number;
  /**
   * 开票日期
   */
  outputDate: string;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode: string;
  /**
   * 销货方
   */
  sellEntName: string;
  /**
   * 税额
   */
  taxAmt?: number;
  /**
   * 发票校验码
   */
  verifyCode?: string;
  /**
   * 发票验真结果
   */
  verifyResult: number;
  /**
   * 发票验真结果
   */
  verifyResultCN?: string;
  [property: string]: any;
}

/*
 *@序号:438
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceOcr(https://apaas-yapi.midea.com/project/7260/interface/api/746290)
 */

export function invoiceOccupyApplyInvoiceOcr(data?: IInvoiceOcrParams) {
  return ajax<IInvoiceOcrParams, IInvoiceOcrData>({
    url: `/invoice/occupy/apply/invoiceOcr`,
    method: "post",
    data,
  });
}

export interface IAcceptanceListParams {
  /* 申请编号：批量转单关联表serial_no*/
  batchTransferSerialNo?: string;
  /* 受理状态列表json字符串：1待受理，2模型处理中，3待人工处理，4人工处理中，5已通过，6已拒绝*/
  acceptStatusListStr?: string;
  /* 审批状态列表json字符串：1审批中，2已通过，3已驳回，4废弃*/
  approvalStatusListStr?: string;
  /* 最近风险结果json字符串：1已接收，2接收失败，3转人工，4通过，5拒绝*/
  recentRiskResListStr?: string;
  /* 美易单编号*/
  billCode?: string;
  /* 上一手美易单编号*/
  lastHandBillCode?: string;
  /* 母单编号*/
  parentBillCode?: string;
  /* 最小美易单金额*/
  minBillMoney?: string;
  /* 最大美易单金额*/
  maxBillMoney?: string;
  /* 转让企业名称*/
  transferEntName?: string;
  /* 受让企业名称*/
  inputEntName?: string;
  /* 开单企业名称*/
  outputEntName?: string;
  /* 转让日期开始*/
  transferDateStart?: string;
  /* 转让日期结束*/
  transferDateEnd?: string;
  /* 到期日开始*/
  expireDateStart?: string;
  /* 到期日结束*/
  expireDateEnd?: string;

  pageNum?: string;

  pageSize?: string;
}
export interface IAcceptanceListData {
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: List[];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatepageNums?: number[];
  navigatePages?: number;
  nextPage?: number;
  pageNum?: number;
  pages?: number;
  pageSize?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
  [property: string]: any;
}

export interface List {
  /**
   * 受理状态：1待受理，2模型处理中，3待人工处理，4人工处理中，5已通过，6已拒绝
   */
  acceptStatus?: number;
  acceptStatusCN?: string;
  /**
   * 审批状态：1审批中，2已通过，3已驳回，4废弃
   */
  approvalStatus?: number;
  approvalStatusCN?: string;
  /**
   * 申请编号批量转单关联表serial_no
   */
  batchTransferSerialNo?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 票据金额
   */
  billMoney?: number;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 受让企业客户号
   */
  inputEntCustCode?: string;
  /**
   * 受让企业客户经理
   */
  inputEntMgrName?: string;
  /**
   * 受让企业名称
   */
  inputEntName?: string;
  /**
   * 上一手美易单编号
   */
  lastHandBillCode?: string;
  /**
   * 受理人mip
   */
  manualAcceptorMip?: string;
  /**
   * 受理人名称
   */
  manualAcceptorName?: string;
  /**
   * 人工受理备注
   */
  manualAcceptRemark?: string;
  /**
   * 1同意2拒绝
   */
  manualAcceptRes?: number;
  /**
   * 最新风控批次号
   */
  newestRiskBatchNo?: string;
  /**
   * 开单企业名称
   */
  outputEntName?: string;
  /**
   * 母单编号
   */
  parentBillCode?: string;
  /**
   * 最近风险结果：1已接收，2接收失败，3转人工，4通过，5拒绝
   */
  recentRiskRes?: number;
  recentRiskResCN?: string;
  /**
   * 受理记录业务流水号
   */
  serialNo?: string;
  /**
   * 转让日期
   */
  transferDate?: string;
  /**
   * 交易详情表id
   */
  transferDetailId?: number;
  /**
   * 转让企业客户号
   */
  transferEntCustCode?: string;
  /**
   * 转让企业客户经理
   */
  transferEntMgrName?: string;
  /**
   * 转让企业名称
   */
  transferEntName?: string;
  /**
   * 交易备注
   */
  transferRemark?: string;
  [property: string]: any;
}

/*
 *@序号:439
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:转单审核处理列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/746293)
 */

export function batchTransferAcceptanceList(data?: IAcceptanceListParams) {
  return ajax<IAcceptanceListParams, IAcceptanceListData>({
    url: `/batch/transfer/acceptance/list`,
    method: "post",
    data,
  });
}

export interface ITransfersInfoParams {
  transferAcceptanceSerialNo: string;
}
export interface ITransfersInfoData {
  /**
   * 受理状态
   */
  acceptStatus?: number;
  /**
   * 受理状态名称
   */
  acceptStatusCN?: string;
  /**
   * 批量转单关联表serial_no
   */
  batchTransferSerialNo?: string;
  /**
   * 美易单编号
   */
  billCode?: string;
  /**
   * 美易单金额（元）-- 票据金额
   */
  billMoney?: number;
  /**
   * 到期日
   */
  expireDate?: string;
  /**
   * 受理附件
   */
  file?: File[];
  /**
   * 主键
   */
  id?: number;
  /**
   * 账号名称  --  受让企业账号名称
   */
  inputEntAccountName?: string;
  /**
   * 应收美易单账号 -- 受让企业账号
   */
  inputEntAccountNo?: string;
  /**
   * 受让企业客户号
   */
  inputEntCustCode?: string;
  /**
   * 受让企业客户经理
   */
  inputEntMgrName?: string;
  /**
   * 受让企业名称
   */
  inputEntName?: string;
  /**
   * 上一手美易单编号
   */
  lastHandBillCode?: string;
  /**
   * 法律性文件
   */
  legalFiles?: LegalFile[];
  /**
   * 受理意见
   */
  manualAcceptRemark?: string;
  /**
   * 受理结果
   */
  manualAcceptRes?: number;
  /**
   * 受理结果名称
   */
  manualAcceptResCN?: string;
  /**
   * 开单企业(兑付企业)
   */
  outputEntName?: string;
  /**
   * 美易单母单编号
   */
  parentBillCode?: string;
  /**
   * 最近风险结果：1已接收，2接收失败，3转人工，4通过，5拒绝
   */
  recentRiskRes?: number;
  /**
   * 最近风险结果名称
   */
  recentRiskResCN?: string;
  /**
   * 风控相关信息
   */
  riskList?: RiskList[];
  /**
   * 受理记录业务流水号
   */
  serialNo?: string;
  /**
   * 转单日
   */
  transferDate?: string;
  /**
   * 交易详情表id
   */
  transferDetailId?: number;
  /**
   * 转让企业客户号
   */
  transferEntCustCode?: string;
  /**
   * 转让企业客户经理
   */
  transferEntMgrName?: string;
  /**
   * 转让企业名称
   */
  transferEntName?: string;
  /**
   * 备注
   */
  transferRemark?: string;
  [property: string]: any;
}

export interface File {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  /**
   * 文件后缀类型
   */
  fileLastName?: string;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件大小
   */
  size?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface LegalFile {
  /**
   * 审核员
   */
  auditor?: string;
  /**
   * 业务数据ID
   */
  bizId?: string;
  /**
   * 文件分类，1：客户基础资料，2：企业变更资料
   */
  category?: number;
  /**
   * 变更类型
   */
  changeType?: number;
  /**
   * 经办员
   */
  clerker?: string;
  /**
   * 提交客户端，omc：运营端，ent：企业端
   */
  commitClient?: number;
  createBy?: string;
  createTime?: string;
  /**
   * 文档id
   */
  documentId?: number;
  /**
   * 流水号
   */
  fileId?: number;
  /**
   * 文件后缀类型
   */
  fileLastName?: string;
  fileName?: string;
  /**
   * 文件路径
   */
  filePath?: string;
  /**
   * 文件类别-业务分类
   */
  fileType?: string;
  /**
   * 状态集合
   */
  fileTypeList?: string[];
  /**
   * 文件类别-业务分类
   */
  fileTypes?: string[];
  /**
   * 是否属于档案中心补上传， 0：不属于，1：属于
   */
  isBackstageUpload?: number;
  modifyBy?: string;
  modifyTime?: string;
  /**
   * 文件归属企业名
   */
  ownEnterpriseName?: string;
  /**
   * 备注信息
   */
  remark?: string;
  /**
   * 文件大小
   */
  size?: string;
  /**
   * 文件来源
   */
  source?: number;
  /**
   * 文件状态：1，正常 2，删除
   */
  state?: number;
  [property: string]: any;
}

export interface RiskList {
  /**
   * 主键
   */
  id?: number;
  /**
   * 风控流水号
   */
  riskBatchNo?: string;
  /**
   * 风控结果（1转人工，2通过，3拒绝）
   */
  riskRes?: number;
  /**
   * 风控结果名称
   */
  riskResCN?: string;
  /**
   * 风控结果描述
   */
  riskResDesc?: string;
  /**
   * 业务流水号，也用于请求风控流水号
   */
  serialNo?: string;
  /**
   * 提交风控时间
   */
  submitTime?: string;
  /**
   * 转单受理记录表业务流水号
   */
  transferAcceptanceSerialNo?: string;
  [property: string]: any;
}

/*
 *@序号:440
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptTransfersInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746296)
 */

export function batchTransferAcceptTransfersInfo(data?: ITransfersInfoParams) {
  return ajax<ITransfersInfoParams, ITransfersInfoData>({
    url: `/batch/transfer/accept/transfersInfo`,
    method: "post",
    data,
  });
}

export interface IAcceptInvoiceParams {
  transferAcceptanceSerialNo: string;
}
export interface IAcceptInvoiceData {
  /**
   * 发票池发票信息
   */
  newInvoice?: NewInvoice;
  /**
   * 发票池发票信息
   */
  oldInvoice?: OldInvoice;
  [property: string]: any;
}

/**
 * 发票池发票信息
 */
export interface NewInvoice {
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方企业id
   */
  buyEntId?: number;
  /**
   * 购货方企业名称
   */
  buyEntName?: string;
  /**
   * 主键
   */
  id?: number;
  /**
   * 验真结果
   */
  invoiceCheckResult?: number;
  /**
   * 验真结果中文
   */
  invoiceCheckResultName?: string;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * OCR发票的文档id
   */
  invoiceDocId?: string;
  /**
   * OCR发票文档名称
   */
  invoiceDocName?: string;
  /**
   * 发票金额
   */
  invoiceMoney?: number;
  /**
   * 发票金额(不含税)
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo?: string;
  /**
   * 发票类型InvoiceType:1-普通发票;2-普通电子发票;3-专用发票
   */
  invoiceType?: number;
  /**
   * 发票类型名称
   */
  invoiceTypeStr?: string;
  /**
   * 本次占用金额
   */
  openOccupyAmount?: number;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 1，代开发票模式，0，非代开发票模式
   */
  proxyType?: number;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方企业ID
   */
  sellEntId?: number;
  /**
   * 销货方企业名称
   */
  sellEntName?: string;
  /**
   * 发票验真码
   */
  verifyCode?: string;
  [property: string]: any;
}

/**
 * 发票池发票信息
 */
export interface OldInvoice {
  /**
   * 购货方纳税人识别号
   */
  buyEntCode?: string;
  /**
   * 购货方企业id
   */
  buyEntId?: number;
  /**
   * 购货方企业名称
   */
  buyEntName?: string;
  /**
   * 主键
   */
  id?: number;
  /**
   * 验真结果
   */
  invoiceCheckResult?: number;
  /**
   * 验真结果中文
   */
  invoiceCheckResultName?: string;
  /**
   * 发票代码
   */
  invoiceCode?: string;
  /**
   * OCR发票的文档id
   */
  invoiceDocId?: string;
  /**
   * OCR发票文档名称
   */
  invoiceDocName?: string;
  /**
   * 发票金额
   */
  invoiceMoney?: number;
  /**
   * 发票金额(不含税)
   */
  invoiceMoneyNoTax?: number;
  /**
   * 发票号码
   */
  invoiceNo?: string;
  /**
   * 发票类型InvoiceType:1-普通发票;2-普通电子发票;3-专用发票
   */
  invoiceType?: number;
  /**
   * 发票类型名称
   */
  invoiceTypeStr?: string;
  /**
   * 本次占用金额
   */
  openOccupyAmount?: number;
  /**
   * 开票日期
   */
  outputDate?: string;
  /**
   * 1，代开发票模式，0，非代开发票模式
   */
  proxyType?: number;
  /**
   * 销货方纳税人识别号
   */
  sellEntCode?: string;
  /**
   * 销货方企业ID
   */
  sellEntId?: number;
  /**
   * 销货方企业名称
   */
  sellEntName?: string;
  /**
   * 发票验真码
   */
  verifyCode?: string;
  [property: string]: any;
}

/*
 *@序号:441
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptInvoice(https://apaas-yapi.midea.com/project/7260/interface/api/746299)
 */

export function batchTransferAcceptInvoice(data?: IAcceptInvoiceParams) {
  return ajax<IAcceptInvoiceParams, IAcceptInvoiceData>({
    url: `/batch/transfer/accept/invoice`,
    method: "post",
    data,
  });
}

export interface IAcceptRiskParams {
  riskBatchNo: string;
}
export interface IAcceptRiskData {
  /**
   * 摘要
   */
  innerMsg?: string;
  /**
   * 审批结果 03:通过  02:决绝  01:转人工
   */
  riskResFlag?: number;
  /**
   * 审批结果 03:通过  02:决绝  01:转人工
   */
  riskResFlagCN?: string;
  /**
   * 批次号
   */
  ruleBatchNum?: string;
  /**
   * 规则名称
   */
  ruleDesc?: string;
  /**
   * 规则集名称
   */
  rulesetDesc?: string;
  /**
   * 场景
   */
  scence?: string;
  [property: string]: any;
}

/*
 *@序号:442
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptRisk(https://apaas-yapi.midea.com/project/7260/interface/api/746302)
 */

export function batchTransferAcceptRisk(data?: IAcceptRiskParams) {
  return ajax<IAcceptRiskParams, IAcceptRiskData>({
    url: `/batch/transfer/accept/risk`,
    method: "post",
    data,
  });
}

export interface IAcceptApprovalParams {
  transferAcceptanceSerialNo: string;
}
export interface IAcceptApprovalData {
  /**
   * 审批意见
   */
  fdAuditeInfo?: string;
  /**
   * 操作人
   */
  fdHandlerName?: string;
  /**
   * 操作时间
   */
  fdHandlerTime?: string;
  /**
   * 操作类型
   */
  operationName?: string;
  [property: string]: any;
}

/*
 *@序号:443
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptApproval(https://apaas-yapi.midea.com/project/7260/interface/api/746305)
 */

export function batchTransferAcceptApproval(data?: IAcceptApprovalParams) {
  return ajax<IAcceptApprovalParams, IAcceptApprovalData>({
    url: `/batch/transfer/accept/approval`,
    method: "post",
    data,
  });
}

export interface ISendRiskParams {
  transferAcceptanceSerialNo: string;
}
type ISendRiskData = string;

/*
 *@序号:444
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:sendRiskManuel(https://apaas-yapi.midea.com/project/7260/interface/api/746308)
 */

export function batchTransferSendRisk(data?: ISendRiskParams) {
  return ajax<ISendRiskParams, ISendRiskData>({
    url: `/batch/transfer/send/risk`,
    method: "post",
    data,
  });
}

type IAcceptManualParams = undefined;

type IAcceptManualData = string;

/*
 *@序号:445
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:人工受理(https://apaas-yapi.midea.com/project/7260/interface/api/746311)
 */

export function batchTransferAcceptManual(data?: IAcceptManualParams) {
  return ajax<IAcceptManualParams, IAcceptManualData>({
    url: `/batch/transfer/accept/manual`,
    method: "post",
    data,
  });
}

export interface IApplySaveParams {
  /* 主键*/
  id?: string;
  /* 原授信额度ID*/
  originId?: string;

  creditNo?: string;
  /* 授信机构ID*/
  loanSourceCode?: string;
  /* 授信机构名称*/
  loanSourceName?: string;
  /* 组织机构ID*/
  orgId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 额度类型*/
  creditType?: string;
  /* 授信额度*/
  creditLmt?: string;
  /* 已分配额度*/
  alocLmt?: string;
  /* 已用额度*/
  usedLmt?: string;
  /* 可用额度*/
  useableLmt?: string;
  /* 币种*/
  currency?: string;
  /* 开始时间*/
  startDate?: string;
  /* 结束时间*/
  endDate?: string;
  /* 状态*/
  creditState?: string;
  /* 业务ID*/
  bizId?: string;
  /* 审批状态*/
  aprvState?: string;
  /* 版本号*/
  version?: string;
  /* 操作方式*/
  optType?: string;
  /* 申请人*/
  applyUser?: string;
  /* 审核人*/
  aprvUser?: string;
  /* 审批日期*/
  aprvTime?: string;
  /* 操作方式*/
  optTypeName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 状态集*/
  creditStates?: string;
  /* 状态集*/
  aprvStates?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;
  /* 主键*/
  quotaCreditList?: string;
  /* 上级ID*/
  quotaCreditList?: string;
  /* 申请ID*/
  quotaCreditList?: string;
  /* 授信编号*/
  quotaCreditList?: string;
  /* 授信机构ID*/
  quotaCreditList?: string;
  /* 授信机构名称*/
  quotaCreditList?: string;
  /* 企业ID*/
  quotaCreditList?: string;
  /* 企业名称*/
  quotaCreditList?: string;
  /* 额度类型*/
  quotaCreditList?: string;
  /* 占用类型*/
  quotaCreditList?: string;
  /* 占用类型名称*/
  quotaCreditList?: string;
  /* 分组标识*/
  quotaCreditList?: string;
  /* 授信额度*/
  quotaCreditList?: string;
  /* 共用额度*/
  quotaCreditList?: string;
  /* 冻结额度*/
  quotaCreditList?: string;
  /* 已用额度*/
  quotaCreditList?: string;
  /* 可用额度*/
  quotaCreditList?: string;
  /* 币种*/
  quotaCreditList?: string;
  /* 开始时间*/
  quotaCreditList?: string;
  /* 结束时间*/
  quotaCreditList?: string;
  /* 状态*/
  quotaCreditList?: string;
  /* 流程状态*/
  quotaCreditList?: string;
  /* 版本号*/
  quotaCreditList?: string;
  /* 原授信状态*/
  quotaCreditList?: string;
  /* 原占用类型*/
  quotaCreditList?: string;
  /* 原分组标识*/
  quotaCreditList?: string;
  /* 原授信额度*/
  quotaCreditList?: string;
  /* 原共用额度*/
  quotaCreditList?: string;
  /* 审批状态集合*/
  quotaCreditList?: string;
  /* 流程状态集合*/
  quotaCreditList?: string;
  /* 集团名称*/
  quotaCreditList?: string;
  /* 营业执照号码/统一社会信用代码*/
  quotaCreditList?: string;
  /* 标识是否有变化, f, a, l, s, e*/
  quotaCreditList?: string;
  /* 授信详细*/
  quotaCreditJson?: string;
  /* 主键*/
  logFlowList?: string;
  /* 业务类型*/
  logFlowList?: string;
  /* 业务ID*/
  logFlowList?: string;
  /* 节点ID*/
  logFlowList?: string;
  /* 节点名称*/
  logFlowList?: string;
  /* 操作人ID*/
  logFlowList?: string;
  /* 操作人名称*/
  logFlowList?: string;
  /* 操作时间*/
  logFlowList?: string;
  /* 审批结果*/
  logFlowList?: string;
  /* 审批意见*/
  logFlowList?: string;
  /* 创建人*/
  logFlowList?: string;
  /* 创建时间*/
  logFlowList?: string;
  /* 限制天数*/
  logFlowList?: string;

  logFlowList?: string;
  /* 商圈编码*/
  bankBusinessCode?: string;
  /* 是否集团模式：0-否，1-是*/
  isGroup?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;
  /* 流水号*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 文件来源*/
  fileList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileList?: string;
  /* 变更类型*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 文件归属企业名*/
  fileList?: string;
  /* 状态集合*/
  fileList?: string;
  /* 白名单标识，0-关闭，1-打开*/
  whiteListFlag?: string;

  whiteListFlagCn?: string;
  /* 白名单列表json*/
  quotaCreditWhiteListBOJson?: string;

  quotaCreditWhiteListBOList?: string;
  /* 关联t_ebill_quota_credit_apply 主键id*/
  quotaCreditWhiteListBOList?: string;
  /* 社会信用代码*/
  quotaCreditWhiteListBOList?: string;
  /* 企业名称*/
  quotaCreditWhiteListBOList?: string;
  /* 生效标志位, f, a, l, s, e*/
  quotaCreditWhiteListBOList?: string;
  /* 创建时间*/
  quotaCreditWhiteListBOList?: string;
  /* 创建人*/
  quotaCreditWhiteListBOList?: string;
  /* 修改时间*/
  quotaCreditWhiteListBOList?: string;
  /* 修改人*/
  quotaCreditWhiteListBOList?: string;
}
type IApplySaveData = string;

/*
 *@序号:446
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:save(https://apaas-yapi.midea.com/project/7260/interface/api/746314)
 */

export function quotaApplySave(data?: IApplySaveParams) {
  return ajax<IApplySaveParams, IApplySaveData>({
    url: `/quota/apply/save`,
    method: "post",
    data,
  });
}

export interface IApplyCancelParams {
  id?: string;
}
type IApplyCancelData = string;

/*
 *@序号:447
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:cancel(https://apaas-yapi.midea.com/project/7260/interface/api/746317)
 */

export function quotaApplyCancel(data?: IApplyCancelParams) {
  return ajax<IApplyCancelParams, IApplyCancelData>({
    url: `/quota/apply/cancel`,
    method: "post",
    data,
  });
}

export interface IAprvAuditParams {
  optType?: string;

  id?: string;

  remark?: string;
}
type IAprvAuditData = string;

/*
 *@序号:448
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:audit(https://apaas-yapi.midea.com/project/7260/interface/api/746320)
 */

export function quotaAprvAudit(data?: IAprvAuditParams) {
  return ajax<IAprvAuditParams, IAprvAuditData>({
    url: `/quota/aprv/audit`,
    method: "post",
    data,
  });
}

export interface IAprvChangeParams {
  /* 主键*/
  id?: string;
  /* 原授信额度ID*/
  originId?: string;

  creditNo?: string;
  /* 授信机构ID*/
  loanSourceCode?: string;
  /* 授信机构名称*/
  loanSourceName?: string;
  /* 组织机构ID*/
  orgId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 额度类型*/
  creditType?: string;
  /* 授信额度*/
  creditLmt?: string;
  /* 已分配额度*/
  alocLmt?: string;
  /* 已用额度*/
  usedLmt?: string;
  /* 可用额度*/
  useableLmt?: string;
  /* 币种*/
  currency?: string;
  /* 开始时间*/
  startDate?: string;
  /* 结束时间*/
  endDate?: string;
  /* 状态*/
  creditState?: string;
  /* 业务ID*/
  bizId?: string;
  /* 审批状态*/
  aprvState?: string;
  /* 版本号*/
  version?: string;
  /* 操作方式*/
  optType?: string;
  /* 申请人*/
  applyUser?: string;
  /* 审核人*/
  aprvUser?: string;
  /* 审批日期*/
  aprvTime?: string;
  /* 操作方式*/
  optTypeName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 状态集*/
  creditStates?: string;
  /* 状态集*/
  aprvStates?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;
  /* 主键*/
  quotaCreditList?: string;
  /* 上级ID*/
  quotaCreditList?: string;
  /* 申请ID*/
  quotaCreditList?: string;
  /* 授信编号*/
  quotaCreditList?: string;
  /* 授信机构ID*/
  quotaCreditList?: string;
  /* 授信机构名称*/
  quotaCreditList?: string;
  /* 企业ID*/
  quotaCreditList?: string;
  /* 企业名称*/
  quotaCreditList?: string;
  /* 额度类型*/
  quotaCreditList?: string;
  /* 占用类型*/
  quotaCreditList?: string;
  /* 占用类型名称*/
  quotaCreditList?: string;
  /* 分组标识*/
  quotaCreditList?: string;
  /* 授信额度*/
  quotaCreditList?: string;
  /* 共用额度*/
  quotaCreditList?: string;
  /* 冻结额度*/
  quotaCreditList?: string;
  /* 已用额度*/
  quotaCreditList?: string;
  /* 可用额度*/
  quotaCreditList?: string;
  /* 币种*/
  quotaCreditList?: string;
  /* 开始时间*/
  quotaCreditList?: string;
  /* 结束时间*/
  quotaCreditList?: string;
  /* 状态*/
  quotaCreditList?: string;
  /* 流程状态*/
  quotaCreditList?: string;
  /* 版本号*/
  quotaCreditList?: string;
  /* 原授信状态*/
  quotaCreditList?: string;
  /* 原占用类型*/
  quotaCreditList?: string;
  /* 原分组标识*/
  quotaCreditList?: string;
  /* 原授信额度*/
  quotaCreditList?: string;
  /* 原共用额度*/
  quotaCreditList?: string;
  /* 审批状态集合*/
  quotaCreditList?: string;
  /* 流程状态集合*/
  quotaCreditList?: string;
  /* 集团名称*/
  quotaCreditList?: string;
  /* 营业执照号码/统一社会信用代码*/
  quotaCreditList?: string;
  /* 标识是否有变化, f, a, l, s, e*/
  quotaCreditList?: string;
  /* 授信详细*/
  quotaCreditJson?: string;
  /* 主键*/
  logFlowList?: string;
  /* 业务类型*/
  logFlowList?: string;
  /* 业务ID*/
  logFlowList?: string;
  /* 节点ID*/
  logFlowList?: string;
  /* 节点名称*/
  logFlowList?: string;
  /* 操作人ID*/
  logFlowList?: string;
  /* 操作人名称*/
  logFlowList?: string;
  /* 操作时间*/
  logFlowList?: string;
  /* 审批结果*/
  logFlowList?: string;
  /* 审批意见*/
  logFlowList?: string;
  /* 创建人*/
  logFlowList?: string;
  /* 创建时间*/
  logFlowList?: string;
  /* 限制天数*/
  logFlowList?: string;

  logFlowList?: string;
  /* 商圈编码*/
  bankBusinessCode?: string;
  /* 是否集团模式：0-否，1-是*/
  isGroup?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;
  /* 流水号*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 文件来源*/
  fileList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileList?: string;
  /* 变更类型*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 文件归属企业名*/
  fileList?: string;
  /* 状态集合*/
  fileList?: string;
  /* 白名单标识，0-关闭，1-打开*/
  whiteListFlag?: string;

  whiteListFlagCn?: string;
  /* 白名单列表json*/
  quotaCreditWhiteListBOJson?: string;

  quotaCreditWhiteListBOList?: string;
  /* 关联t_ebill_quota_credit_apply 主键id*/
  quotaCreditWhiteListBOList?: string;
  /* 社会信用代码*/
  quotaCreditWhiteListBOList?: string;
  /* 企业名称*/
  quotaCreditWhiteListBOList?: string;
  /* 生效标志位, f, a, l, s, e*/
  quotaCreditWhiteListBOList?: string;
  /* 创建时间*/
  quotaCreditWhiteListBOList?: string;
  /* 创建人*/
  quotaCreditWhiteListBOList?: string;
  /* 修改时间*/
  quotaCreditWhiteListBOList?: string;
  /* 修改人*/
  quotaCreditWhiteListBOList?: string;
}
type IAprvChangeData = string;

/*
 *@序号:449
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:change(https://apaas-yapi.midea.com/project/7260/interface/api/746323)
 */

export function quotaAprvChange(data?: IAprvChangeParams) {
  return ajax<IAprvChangeParams, IAprvChangeData>({
    url: `/quota/aprv/change`,
    method: "post",
    data,
  });
}

export interface IReCreditParams {
  /* 主键*/
  id?: string;
  /* 原授信额度ID*/
  originId?: string;

  creditNo?: string;
  /* 授信机构ID*/
  loanSourceCode?: string;
  /* 授信机构名称*/
  loanSourceName?: string;
  /* 组织机构ID*/
  orgId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 额度类型*/
  creditType?: string;
  /* 授信额度*/
  creditLmt?: string;
  /* 已分配额度*/
  alocLmt?: string;
  /* 已用额度*/
  usedLmt?: string;
  /* 可用额度*/
  useableLmt?: string;
  /* 币种*/
  currency?: string;
  /* 开始时间*/
  startDate?: string;
  /* 结束时间*/
  endDate?: string;
  /* 状态*/
  creditState?: string;
  /* 业务ID*/
  bizId?: string;
  /* 审批状态*/
  aprvState?: string;
  /* 版本号*/
  version?: string;
  /* 操作方式*/
  optType?: string;
  /* 申请人*/
  applyUser?: string;
  /* 审核人*/
  aprvUser?: string;
  /* 审批日期*/
  aprvTime?: string;
  /* 操作方式*/
  optTypeName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 状态集*/
  creditStates?: string;
  /* 状态集*/
  aprvStates?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;
  /* 主键*/
  quotaCreditList?: string;
  /* 上级ID*/
  quotaCreditList?: string;
  /* 申请ID*/
  quotaCreditList?: string;
  /* 授信编号*/
  quotaCreditList?: string;
  /* 授信机构ID*/
  quotaCreditList?: string;
  /* 授信机构名称*/
  quotaCreditList?: string;
  /* 企业ID*/
  quotaCreditList?: string;
  /* 企业名称*/
  quotaCreditList?: string;
  /* 额度类型*/
  quotaCreditList?: string;
  /* 占用类型*/
  quotaCreditList?: string;
  /* 占用类型名称*/
  quotaCreditList?: string;
  /* 分组标识*/
  quotaCreditList?: string;
  /* 授信额度*/
  quotaCreditList?: string;
  /* 共用额度*/
  quotaCreditList?: string;
  /* 冻结额度*/
  quotaCreditList?: string;
  /* 已用额度*/
  quotaCreditList?: string;
  /* 可用额度*/
  quotaCreditList?: string;
  /* 币种*/
  quotaCreditList?: string;
  /* 开始时间*/
  quotaCreditList?: string;
  /* 结束时间*/
  quotaCreditList?: string;
  /* 状态*/
  quotaCreditList?: string;
  /* 流程状态*/
  quotaCreditList?: string;
  /* 版本号*/
  quotaCreditList?: string;
  /* 原授信状态*/
  quotaCreditList?: string;
  /* 原占用类型*/
  quotaCreditList?: string;
  /* 原分组标识*/
  quotaCreditList?: string;
  /* 原授信额度*/
  quotaCreditList?: string;
  /* 原共用额度*/
  quotaCreditList?: string;
  /* 审批状态集合*/
  quotaCreditList?: string;
  /* 流程状态集合*/
  quotaCreditList?: string;
  /* 集团名称*/
  quotaCreditList?: string;
  /* 营业执照号码/统一社会信用代码*/
  quotaCreditList?: string;
  /* 标识是否有变化, f, a, l, s, e*/
  quotaCreditList?: string;
  /* 授信详细*/
  quotaCreditJson?: string;
  /* 主键*/
  logFlowList?: string;
  /* 业务类型*/
  logFlowList?: string;
  /* 业务ID*/
  logFlowList?: string;
  /* 节点ID*/
  logFlowList?: string;
  /* 节点名称*/
  logFlowList?: string;
  /* 操作人ID*/
  logFlowList?: string;
  /* 操作人名称*/
  logFlowList?: string;
  /* 操作时间*/
  logFlowList?: string;
  /* 审批结果*/
  logFlowList?: string;
  /* 审批意见*/
  logFlowList?: string;
  /* 创建人*/
  logFlowList?: string;
  /* 创建时间*/
  logFlowList?: string;
  /* 限制天数*/
  logFlowList?: string;

  logFlowList?: string;
  /* 商圈编码*/
  bankBusinessCode?: string;
  /* 是否集团模式：0-否，1-是*/
  isGroup?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;
  /* 流水号*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 文件来源*/
  fileList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileList?: string;
  /* 变更类型*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 文件归属企业名*/
  fileList?: string;
  /* 状态集合*/
  fileList?: string;
  /* 白名单标识，0-关闭，1-打开*/
  whiteListFlag?: string;

  whiteListFlagCn?: string;
  /* 白名单列表json*/
  quotaCreditWhiteListBOJson?: string;

  quotaCreditWhiteListBOList?: string;
  /* 关联t_ebill_quota_credit_apply 主键id*/
  quotaCreditWhiteListBOList?: string;
  /* 社会信用代码*/
  quotaCreditWhiteListBOList?: string;
  /* 企业名称*/
  quotaCreditWhiteListBOList?: string;
  /* 生效标志位, f, a, l, s, e*/
  quotaCreditWhiteListBOList?: string;
  /* 创建时间*/
  quotaCreditWhiteListBOList?: string;
  /* 创建人*/
  quotaCreditWhiteListBOList?: string;
  /* 修改时间*/
  quotaCreditWhiteListBOList?: string;
  /* 修改人*/
  quotaCreditWhiteListBOList?: string;
}
type IReCreditData = string;

/*
 *@序号:450
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:reCredit(https://apaas-yapi.midea.com/project/7260/interface/api/746326)
 */

export function quotaAprvReCredit(data?: IReCreditParams) {
  return ajax<IReCreditParams, IReCreditData>({
    url: `/quota/aprv/reCredit`,
    method: "post",
    data,
  });
}

export interface IApplySaveParams {
  /* 主键*/
  id?: string;
  /* 原授信额度ID*/
  originId?: string;

  creditNo?: string;
  /* 授信机构ID*/
  loanSourceCode?: string;
  /* 授信机构名称*/
  loanSourceName?: string;
  /* 组织机构ID*/
  orgId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 额度类型*/
  creditType?: string;
  /* 授信额度*/
  creditLmt?: string;
  /* 已分配额度*/
  alocLmt?: string;
  /* 已用额度*/
  usedLmt?: string;
  /* 可用额度*/
  useableLmt?: string;
  /* 币种*/
  currency?: string;
  /* 开始时间*/
  startDate?: string;
  /* 结束时间*/
  endDate?: string;
  /* 状态*/
  creditState?: string;
  /* 业务ID*/
  bizId?: string;
  /* 审批状态*/
  aprvState?: string;
  /* 版本号*/
  version?: string;
  /* 操作方式*/
  optType?: string;
  /* 申请人*/
  applyUser?: string;
  /* 审核人*/
  aprvUser?: string;
  /* 审批日期*/
  aprvTime?: string;
  /* 操作方式*/
  optTypeName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 状态集*/
  creditStates?: string;
  /* 状态集*/
  aprvStates?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;
  /* 主键*/
  quotaCreditList?: string;
  /* 上级ID*/
  quotaCreditList?: string;
  /* 申请ID*/
  quotaCreditList?: string;
  /* 授信编号*/
  quotaCreditList?: string;
  /* 授信机构ID*/
  quotaCreditList?: string;
  /* 授信机构名称*/
  quotaCreditList?: string;
  /* 企业ID*/
  quotaCreditList?: string;
  /* 企业名称*/
  quotaCreditList?: string;
  /* 额度类型*/
  quotaCreditList?: string;
  /* 占用类型*/
  quotaCreditList?: string;
  /* 占用类型名称*/
  quotaCreditList?: string;
  /* 分组标识*/
  quotaCreditList?: string;
  /* 授信额度*/
  quotaCreditList?: string;
  /* 共用额度*/
  quotaCreditList?: string;
  /* 冻结额度*/
  quotaCreditList?: string;
  /* 已用额度*/
  quotaCreditList?: string;
  /* 可用额度*/
  quotaCreditList?: string;
  /* 币种*/
  quotaCreditList?: string;
  /* 开始时间*/
  quotaCreditList?: string;
  /* 结束时间*/
  quotaCreditList?: string;
  /* 状态*/
  quotaCreditList?: string;
  /* 流程状态*/
  quotaCreditList?: string;
  /* 版本号*/
  quotaCreditList?: string;
  /* 原授信状态*/
  quotaCreditList?: string;
  /* 原占用类型*/
  quotaCreditList?: string;
  /* 原分组标识*/
  quotaCreditList?: string;
  /* 原授信额度*/
  quotaCreditList?: string;
  /* 原共用额度*/
  quotaCreditList?: string;
  /* 审批状态集合*/
  quotaCreditList?: string;
  /* 流程状态集合*/
  quotaCreditList?: string;
  /* 集团名称*/
  quotaCreditList?: string;
  /* 营业执照号码/统一社会信用代码*/
  quotaCreditList?: string;
  /* 标识是否有变化, f, a, l, s, e*/
  quotaCreditList?: string;
  /* 授信详细*/
  quotaCreditJson?: string;
  /* 主键*/
  logFlowList?: string;
  /* 业务类型*/
  logFlowList?: string;
  /* 业务ID*/
  logFlowList?: string;
  /* 节点ID*/
  logFlowList?: string;
  /* 节点名称*/
  logFlowList?: string;
  /* 操作人ID*/
  logFlowList?: string;
  /* 操作人名称*/
  logFlowList?: string;
  /* 操作时间*/
  logFlowList?: string;
  /* 审批结果*/
  logFlowList?: string;
  /* 审批意见*/
  logFlowList?: string;
  /* 创建人*/
  logFlowList?: string;
  /* 创建时间*/
  logFlowList?: string;
  /* 限制天数*/
  logFlowList?: string;

  logFlowList?: string;
  /* 商圈编码*/
  bankBusinessCode?: string;
  /* 是否集团模式：0-否，1-是*/
  isGroup?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;
  /* 流水号*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 文件来源*/
  fileList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileList?: string;
  /* 变更类型*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 文件归属企业名*/
  fileList?: string;
  /* 状态集合*/
  fileList?: string;
  /* 白名单标识，0-关闭，1-打开*/
  whiteListFlag?: string;

  whiteListFlagCn?: string;
  /* 白名单列表json*/
  quotaCreditWhiteListBOJson?: string;

  quotaCreditWhiteListBOList?: string;
  /* 关联t_ebill_quota_credit_apply 主键id*/
  quotaCreditWhiteListBOList?: string;
  /* 社会信用代码*/
  quotaCreditWhiteListBOList?: string;
  /* 企业名称*/
  quotaCreditWhiteListBOList?: string;
  /* 生效标志位, f, a, l, s, e*/
  quotaCreditWhiteListBOList?: string;
  /* 创建时间*/
  quotaCreditWhiteListBOList?: string;
  /* 创建人*/
  quotaCreditWhiteListBOList?: string;
  /* 修改时间*/
  quotaCreditWhiteListBOList?: string;
  /* 修改人*/
  quotaCreditWhiteListBOList?: string;
}
type IApplySaveData = string;

/*
 *@序号:451
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:saveCredit(https://apaas-yapi.midea.com/project/7260/interface/api/746329)
 */

export function quotaCreditApplySave(data?: IApplySaveParams) {
  return ajax<IApplySaveParams, IApplySaveData>({
    url: `/quota/credit/apply/save`,
    method: "post",
    data,
  });
}

export interface IApplyCancleParams {
  id?: string;
}
type IApplyCancleData = string;

/*
 *@序号:452
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度作废(https://apaas-yapi.midea.com/project/7260/interface/api/746332)
 */

export function quotaCreditApplyCancle(data?: IApplyCancleParams) {
  return ajax<IApplyCancleParams, IApplyCancleData>({
    url: `/quota/credit/apply/cancle`,
    method: "post",
    data,
  });
}

export interface IAprvAuditParams {
  optType?: string;

  id?: string;

  remark?: string;
}
type IAprvAuditData = string;

/*
 *@序号:453
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度审批(https://apaas-yapi.midea.com/project/7260/interface/api/746335)
 */

export function quotaCreditAprvAudit(data?: IAprvAuditParams) {
  return ajax<IAprvAuditParams, IAprvAuditData>({
    url: `/quota/credit/aprv/audit`,
    method: "post",
    data,
  });
}

export interface IAprvChangeParams {
  /* 主键*/
  id?: string;
  /* 原授信额度ID*/
  originId?: string;

  creditNo?: string;
  /* 授信机构ID*/
  loanSourceCode?: string;
  /* 授信机构名称*/
  loanSourceName?: string;
  /* 组织机构ID*/
  orgId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 额度类型*/
  creditType?: string;
  /* 授信额度*/
  creditLmt?: string;
  /* 已分配额度*/
  alocLmt?: string;
  /* 已用额度*/
  usedLmt?: string;
  /* 可用额度*/
  useableLmt?: string;
  /* 币种*/
  currency?: string;
  /* 开始时间*/
  startDate?: string;
  /* 结束时间*/
  endDate?: string;
  /* 状态*/
  creditState?: string;
  /* 业务ID*/
  bizId?: string;
  /* 审批状态*/
  aprvState?: string;
  /* 版本号*/
  version?: string;
  /* 操作方式*/
  optType?: string;
  /* 申请人*/
  applyUser?: string;
  /* 审核人*/
  aprvUser?: string;
  /* 审批日期*/
  aprvTime?: string;
  /* 操作方式*/
  optTypeName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 状态集*/
  creditStates?: string;
  /* 状态集*/
  aprvStates?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;
  /* 主键*/
  quotaCreditList?: string;
  /* 上级ID*/
  quotaCreditList?: string;
  /* 申请ID*/
  quotaCreditList?: string;
  /* 授信编号*/
  quotaCreditList?: string;
  /* 授信机构ID*/
  quotaCreditList?: string;
  /* 授信机构名称*/
  quotaCreditList?: string;
  /* 企业ID*/
  quotaCreditList?: string;
  /* 企业名称*/
  quotaCreditList?: string;
  /* 额度类型*/
  quotaCreditList?: string;
  /* 占用类型*/
  quotaCreditList?: string;
  /* 占用类型名称*/
  quotaCreditList?: string;
  /* 分组标识*/
  quotaCreditList?: string;
  /* 授信额度*/
  quotaCreditList?: string;
  /* 共用额度*/
  quotaCreditList?: string;
  /* 冻结额度*/
  quotaCreditList?: string;
  /* 已用额度*/
  quotaCreditList?: string;
  /* 可用额度*/
  quotaCreditList?: string;
  /* 币种*/
  quotaCreditList?: string;
  /* 开始时间*/
  quotaCreditList?: string;
  /* 结束时间*/
  quotaCreditList?: string;
  /* 状态*/
  quotaCreditList?: string;
  /* 流程状态*/
  quotaCreditList?: string;
  /* 版本号*/
  quotaCreditList?: string;
  /* 原授信状态*/
  quotaCreditList?: string;
  /* 原占用类型*/
  quotaCreditList?: string;
  /* 原分组标识*/
  quotaCreditList?: string;
  /* 原授信额度*/
  quotaCreditList?: string;
  /* 原共用额度*/
  quotaCreditList?: string;
  /* 审批状态集合*/
  quotaCreditList?: string;
  /* 流程状态集合*/
  quotaCreditList?: string;
  /* 集团名称*/
  quotaCreditList?: string;
  /* 营业执照号码/统一社会信用代码*/
  quotaCreditList?: string;
  /* 标识是否有变化, f, a, l, s, e*/
  quotaCreditList?: string;
  /* 授信详细*/
  quotaCreditJson?: string;
  /* 主键*/
  logFlowList?: string;
  /* 业务类型*/
  logFlowList?: string;
  /* 业务ID*/
  logFlowList?: string;
  /* 节点ID*/
  logFlowList?: string;
  /* 节点名称*/
  logFlowList?: string;
  /* 操作人ID*/
  logFlowList?: string;
  /* 操作人名称*/
  logFlowList?: string;
  /* 操作时间*/
  logFlowList?: string;
  /* 审批结果*/
  logFlowList?: string;
  /* 审批意见*/
  logFlowList?: string;
  /* 创建人*/
  logFlowList?: string;
  /* 创建时间*/
  logFlowList?: string;
  /* 限制天数*/
  logFlowList?: string;

  logFlowList?: string;
  /* 商圈编码*/
  bankBusinessCode?: string;
  /* 是否集团模式：0-否，1-是*/
  isGroup?: string;
  /* 发起人ID*/
  applierId?: string;
  /* 发起人真实名字*/
  applierRealName?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;

  fileList?: string;
  /* 流水号*/
  fileList?: string;

  fileList?: string;
  /* 文件路径*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 文件类别-业务分类*/
  fileList?: string;
  /* 备注信息*/
  fileList?: string;
  /* 业务数据ID*/
  fileList?: string;
  /* 文件状态：1，正常 2，删除*/
  fileList?: string;
  /* 文档id*/
  fileList?: string;
  /* 经办员*/
  fileList?: string;
  /* 审核员*/
  fileList?: string;
  /* 文件来源*/
  fileList?: string;
  /* 文件分类，1：客户基础资料，2：企业变更资料*/
  fileList?: string;
  /* 提交客户端，omc：运营端，ent：企业端*/
  fileList?: string;
  /* 变更类型*/
  fileList?: string;
  /* 是否属于档案中心补上传， 0：不属于，1：属于*/
  fileList?: string;
  /* 文件归属企业名*/
  fileList?: string;
  /* 状态集合*/
  fileList?: string;
  /* 白名单标识，0-关闭，1-打开*/
  whiteListFlag?: string;

  whiteListFlagCn?: string;
  /* 白名单列表json*/
  quotaCreditWhiteListBOJson?: string;

  quotaCreditWhiteListBOList?: string;
  /* 关联t_ebill_quota_credit_apply 主键id*/
  quotaCreditWhiteListBOList?: string;
  /* 社会信用代码*/
  quotaCreditWhiteListBOList?: string;
  /* 企业名称*/
  quotaCreditWhiteListBOList?: string;
  /* 生效标志位, f, a, l, s, e*/
  quotaCreditWhiteListBOList?: string;
  /* 创建时间*/
  quotaCreditWhiteListBOList?: string;
  /* 创建人*/
  quotaCreditWhiteListBOList?: string;
  /* 修改时间*/
  quotaCreditWhiteListBOList?: string;
  /* 修改人*/
  quotaCreditWhiteListBOList?: string;
}
type IAprvChangeData = string;

/*
 *@序号:454
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度变更(https://apaas-yapi.midea.com/project/7260/interface/api/746338)
 */

export function quotaCreditAprvChange(data?: IAprvChangeParams) {
  return ajax<IAprvChangeParams, IAprvChangeData>({
    url: `/quota/credit/aprv/change`,
    method: "post",
    data,
  });
}

export interface IReCreditParams {
  /* 主键*/
  id?: string;
  /* 原授信额度ID*/
  originId?: string;

  creditNo?: string;
  /* 授信机构ID*/
  loanSourceCode?: string;
  /* 授信机构名称*/
  loanSourceName?: string;
  /* 组织机构ID*/
  orgId?: string;
  /* 企业ID*/
  enterpriseId?: string;
  /* 企业名称*/
  enterpriseName?: string;
  /* 法定代表人*/
  legalRepresentative?: string;
  /* 额度类型*/
  creditType?: string;
  /* 授信额度*/
  creditLmt?: string;
  /* 已分配额度*/
  alocLmt?: string;
  /* 已用额度*/
  usedLmt?: string;
  /* 可用额度*/
  useableLmt?: string;
  /* 币种*/
  currency?: string;
  /* 开始时间*/
  startDate?: string;
  /* 结束时间*/
  endDate?: string;
  /* 状态*/
  creditState?: string;
  /* 业务ID*/
  bizId?: string;
  /* 审批状态*/
  aprvState?: string;
  /* 版本号*/
  version?: string;
  /* 操作方式*/
  optType?: string;
  /* 申请人*/
  applyUser?: string;
  /* 审核人*/
  aprvUser?: string;
  /* 审批日期*/
  aprvTime?: string;
  /* 操作方式*/
  optTypeName?: string;
  /* 创建人*/
  createBy?: string;
  /* 创建时间*/
  createTime?: string;
  /* 修改人*/
  modifyBy?: string;
  /* 修改时间*/
  modifyTime?: string;
  /* 状态集*/
  creditStates?: string;
  /* 状态集*/
  aprvStates?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;

  quotaCreditList?: string;
  /* 主键*/
  quotaCreditList?: string;
  /* 上级ID*/
  quotaCreditList?: string;
  /* 申请ID*/
  quotaCreditList?: string;
  /* 授信编号*/
  quotaCreditList?: string;
  /* 授信机构ID*/
  quotaCreditList?: string;
  /* 授信机构名称*/
  quotaCreditList?: string;
  /* 企业ID*/
  quotaCreditList?: string;
  /* 企业名称*/