/* 
  引入:import {systemTestSequence,systemTestSendRisk,systemTestQueryRes,transactionBillQueryExport,transactionBillAmountCount,transactionBillOperationLog,transactionBillTransferTrace,transactionBillDetail,transactionBillInvoiceInfo,transactionGetInvoiceContInfo,transactionFinancingQueryPagination,transactionFinancingQueryExport,transactionFinancingBillQueryPagination,transactionRelationCont,transactionFinancedQueryExport,transactionTransferQueryPagination,transactionTransferingQueryExport,transactionTransferBillQueryPagination,transactionTransferedQueryExport,transactionSelectContract,transactionDownloadLoanFile,transactionDownloadOneCert,transactionDownloadOneContract,transactionQueryDetails,transactionQueryInvoice,transactionQuerySellInvoice,transactionSelectFinanEntFile,transactionDetailTrack,transactionHoldingQueryPagination,transactionHoldingQueryExport,transactionBillSelectOne,externalSDPCallback,externalContractSignResult,externalUnionCertificationFaceResult,ctrAuthorizationDownload,ctrUsbKeyApplyDownload,ctrUsbKeyApplyDownloadcoreEnt,ctrCancleUkApplyDownload,ctrRemakeUkeyApplyDownload,ctrResetUkeyPwdApplyDownload,businessQueryPagination,businessExportInfoSelect,businessBulidBusinessId,edpCheckEntCardType,edpCheckPrdOpenState,edpQueryUserEnt,edpGetUserBaseInfo,edpCheckUserThereElements,edpGetAccountBankInfo,edpGetAccountAccountInfo,edpStartPayApply,edpGetPayAuth,edpQueryMgrEnt,edpQueryUserInfo,edpQueryUserAccount,edpQueryLoginInfo,edpCreateUserName,prdOpenApplyGetPageList,prdOpenApplyGetPageListExport,prdOpenAuditGetPageList,prdOpenOpenedGetPageList,prdOpenOpenedGetPageListExport,prdOpenGetEntInfo,prdOpenGetUserInfo,prdOpenGetAccountInfo,prdOpenGetUkeyInfo,prdOpenSaveEntInfo,prdOpenSaveUserInfo,prdOpenSaveAccountInfo,prdOpenSaveCertInfo,prdOpenMgrAccept,prdOpenOmcCommitToAudit,prdOpenOmcReview,prdUsbKeyApplyDownload,prdSelectAuditRecords,prdResend,prdAsyncDoubleWriteData,prdOpenGetNewestEntInfo,prdOpenGetNewestUserInfo,prdOpenGetNewestAccountInfo,prdOpenGetNewestUkeyInfo,prdAuthorizeDownload,prdStaffauthDetail,prdOpenApplyValidate,prdOpenEntSync,prdOpenCheckIsFiliale,prdAuthorizationFromParentCompanyDownload,prdOpenAccountDownload,prdChangeApplyGetPageList,prdChangeCheckIsChanging,prdChangeViewEntInfo,prdChangeDraftEntInfo,prdChangeDraftAccountInfo,prdChangeCompareGetEntInfo,prdChangeCompareGetAccountInfo,prdChangeSaveEntInfo,prdChangeCancel,prdChangeCommitToAudit,prdChangeAudit,systemSysMqQuerySysMq,systemSysMqSend,systemAreaLeaderList,systemAreaOthersListbyAreaId,systemRoleInsertRole,systemRoleAddManage,systemRoleAddEnt,systemRolebyIDDisableAndEnable,systemRolebyIDDisableEnt,systemRoleEditEnt,systemRoleEditManage,systemRoleUpdateRole,systemRolebyIDDel,systemRoleUpdate,systemRolebyIDGet,systemRoleList,systemRoleOmcList,systemRoleEntList,systemRoleCyrole,systemRoleSelectUserUseRole,systemRoleSelectEntManageCanDistributiveRole,systemRoleUserbyUserid,systemRoleEntuserbyUserid,systemRolebyRoleIdAllocResouce,systemRolebyRoleIdGetResources,systemRolePagination,systemSyncAppointFileEdp,ukeyApply,ukeyBindukey,ukeyRevokeCert,ukeyCfcaRenewCert,ukeyQuerySummary,ukeySelectRevokeHistory,ukeySelectRevokeHistoryExport,ukeyCheckApplyUKeyTimes,ukeyManageSelect,ukeyManageSelect,ukeyManageSelect,ukeyManageDetails,ukeyManageUpdate,ukeyManageUpdate,ukeyManageUploadAgain,ukeyManageListExport,ukeyFileHistoryInfo,ukeyGetExpireList,ukeyExpireUpdate,ukeyRenewedList,ukeyRenewedListExport,ukeyRenewingListExport,ukeyCfcaReset,systemUserInsert,systemUserbyUserIdResetPwd,systemUserEdit,systemUserbyUserIdFrozenUser,systemUserbyUserIdThawUser,systemUserbyUserIdDelete,systemUserSelectOmcAll,systemUserSelectEntUser,systemUserbyUserIdSelectDetails,systemUserSelectDetails,systemUserLogin,systemUserChangePwd,systemUserChangePhone,systemUserChangeEmail,systemUserLogout,systemUserbyUserIdAllocRole,systemUserSelectByCondition,systemUserUkeyinfoQuery,systemOmcUserFindList,systemEntUserFindList,systemUserRoleFind,systemUsernameCreate,systemUserSelectUKeyEntUser,systemUserSelectUKeyEntUserExport,systemUserFind,systemSyncUserInfo,systemPublicKey,sysItosResend,sysItosQuerySysItos,sysItosConfirmFail,actuatorHealth,systemDeleteLock,systemGetContractAsync,systemSearchEntAcc,systemSearchEntAccsp,systemSignupSearchDirect,systemSignupSearchNormal,systemEximResult,systemKongUrlTest,systemCheckEntmgr,systemSdbankRateTest,systemAbcBalanceTest,systemCommonConstant,systemCommonDownloadFromURL,systemQueryBizfile,systemCommonUpload,systemCommonDownload,systemCommonDeleteFile,systemCommonDeleteCancel,systemCommonSelectFile,systemArchviesUpload,systemQuotaUpload,systemEdpRegionList,systemRegionList,systemRegionChildrensList,invoiceSyncFinResync,invoiceSyncFinResyncBatch,invoiceSyncFinSync,invoiceSyncResellResync,invoiceSyncResellResyncBatch,invoiceSyncResellSync,invoiceSyncResellSyncBatch,invoiceSyncRevisingInvoiceType,invoiceSyncRevisingResellInvoiceType,invoiceSyncRevisingOccupyInvoiceType,invoiceSyncRevisingInvoiceUpload,invoiceSyncRevisingInvoiceVerify,invoiceSyncRevisingResellSnap,systemMessageList,systemMessagebyIDGet,systemMessageUpdate,systemMessageSetRead,systemMessagePagination,systemResouceAdd,systemResoucebyIDDel,systemResouceUpdate,systemResouceList,systemResouceChildrensList,systemResoucebyIDGet,systemResoucePagination,systemResourceUserbyUserid,systemResourcebyIDLogicDelete,systemResourcebyIDDisable,systemResourcebyIDEnable,systemResourceRolebyRoleId,systemArchivesSelectAll,systemArchivesExport,systemArchivesSelectDetails,systemArchivesDispose,systemArchivesUkeyreceiptDownload,systemBankInfobyIDGet,systemBankInfoList,systemBankInfoPagination,systemBankInfoPaginationById,systemNoticeMsgAdd,systemNoticeMsgbyNoticeIdDel,systemNoticeMsgUpdate,systemNoticeMsgList,systemNoticeMsgbyNoticeIdGet,systemNoticeMsgPagination,systemEntNoticeMsgGetValidList,systemNoticeMsgGetLoginUserDetail,systemParameterbyIdGet,systemParameterUpdate,systemParameterList,systemParameterPagination,systemParameterSellRate,systemParameterUpdateRate,systemParameterSetRate,systemDictionaryAdd,systemDictionarybyIDDel,systemDictionaryUpdate,systemDictionaryChildrensList,systemDictionaryList,systemDictionarybyIDGet,systemDictionaryPagination,systemDictionarybyIDLogicDelete,systemDictionarybyIDDisable,systemDictionarybyIDEnable,systemSystemDateAdd,systemSystemDatebyIDGet,systemSystemDateUpdate,systemSystemDateSetWeekDay,systemSystemDateList,systemSystemDatePagination,systemSystemDateGetNextWeekDay,productConfSelectPage,productConfSelectList,productConfAddItem,productConfUpdateItem,productConfSelectById,systemQueryArea,systemConfigArea,systemQueryManagerList,systemQueryAllManagerList,systemManagerBatchupdate,systemManagerSingleupdate,systemQueryManagerUnallocated,systemQueryManagerEnt,systemQueryNomaskDetail,systemExportManagerAll,systemExportManagerAllocated,personQuery,personRecall,personRefuse,personConfirmSuccess,personConfirmRefuse,personSellConfirmSucc,ukeysignImport,systemMessageTemplateAdd,systemMessageTemplatebyIDDel,systemMessageTemplateUpdate,systemMessageTemplateList,systemMessageTemplatebyIDGet,systemMessageTemplatebyIDQueryDetail,systemMessageTemplatePagination,eviSceneQueryPage,eviDownEvidence,eviSceneDetail,eviSceneRetry,tradeTransactionIssueAmountCount,tradeTransactionBillAmountCount,tradeTransactionBillDetail,tradeTransactionBillCertPrint,tradeTransactionCreditResend,tradeTransactionBillDueQuery,tradeTransactionBillDueExport,testCouponIopNetworkTeest,transactionIssueGetDate,transactionIssueGetCode,transactionIssueGetEnterprise,transactionIssueGetSupplyEnterprise,transactionIssueGetOu,transactionIssueGetOuAccount,transactionIssueAdd,transactionIssueSelectReview,transactionIssueSelectReviewDetailbyTransferId,transactionIssueSelectSign,transactionIssueSelectSignDetailbyTransferDetailId,transactionIssueUpdateWithdrawn,transactionIssueSelectReviewRecord,transactionIssueSelectReviewRecordDetailTransferId,transactionIssueCheckBatch,transactionIssueAddBatch,transactionIssueUpdateTovoid,transactionIssueSelectOpenbill,transactionIssueExportOpenListRefuse,transactionIssueExportOpenList,transactionIssueSelectOpenebill,transactionIssueExportOpenBillList,transactionIssueSelectGfpPersonProcess,transactionIssueResendGfpBill,transactionIssueConfirmGfpFail,transactionIssueSelectGfpBillDetail,payplanCreditQuery,payplanCreditQueryFail,payplanCreditResendFailRequest,payplanCreditDetail,payplanCreditSubPlanQuery,payplanPlanWaitauthQuery,payplanPlanWaitauthDetail,payplanSubPlanWaitauthQuery,payplanPlanAuth,payplanDuepayResultQuery,payplanDuepayConfirmFail,payplanDuepaySelectSubPlan,payplanDuePayGenerateSceneNode,payplanCreditOutlineCheckdoing,payplanCreditOutlineDetail,payplanCreditOutlineSubmit,payplanCreditOutlineReview,payplanCreditOutlineReviewList,payplanDuepayConfirmFailSubmit,invoiceQueryAva,invoiceExportQueryAva,invoiceQueryUsed,invoiceExportQueryUsed,invoiceRecheckInvoice,invoiceSyncVerifyData,invoiceUpdateCheckResult,sqBillOpenQuery,sqBillOpenQueryDetail,sqBillOpenAuthQuery,sqBillOpenAuthDetail,sqBillOpenAuthReview,reexchangeSelectWaitMatched,reexchangeSelectPageList,reexchangeButtonWithdraw,reexchangeButtonUnbind,reexchangeButtonResend,duepayOrderSelectDuePage,duepayOrderSelectPassPage,duepayOrderSelectReviewPage,duepayOrderAddDuepayOrderProcess,duepayOrderReviewDuepayOrderProcess,duepayOrderQueryProcessDetail,financeRecoNoticeQueryPage,financeRecoNoticeExport,financeRecoNotice,financeRecoConfig,financeRecoNoticeInfore,financeRecoConfigInfore,sqBillCancelQuery,sqBillCancelRetryGfpBill,financeOrganAdd,financeOrganSelect,financeOrganDetail,financeOrganUpdate,financeOrganChange,financeOrganReview,financeOrganDelete,financeOrganReviewSelect,financeOrganPassSelect,financeOrganPassExport,financeFindAll,financeFinanceEdit,financeFinancesFind,financeFinancesManualImport,financeOrgFindbyFin,financeOrgFindbyFinanceCode,financeOrgFinAllFin,financeOrganUserQuery,financeOrganUsernameGet,financeOrganSaveUser,invoiceApplyQueryFin,invoiceApplyQueryDocFin,invoiceApplyDownloadDocFin,invoiceApplyExportFin,invoiceApplyQueryFinDetail,invoiceApplyQueryFinDetailInfo,invoiceApplyQueryFinFail,invoiceApplyExportFinFail,invoiceApplyFinFailRetry,invoiceApplyResultManCheck,invoiceApplyInvoiceFeeSend,invoiceApplyInvoiceFeeInfo,invoiceOccupyApplyList,invoiceOccupyApplyBillQuery,invoiceOccupyApplyInit,invoiceOccupyApplySubmit,invoiceOccupyApplyCancel,invoiceOccupyApplyDetail,invoiceOccupyApplyReviewList,invoiceOccupyApplyPass,invoiceOccupyApplyReject,invoiceOccupyApplyInvoiceQuery,invoiceOccupyApplyInvoiceValid,invoiceOccupyApplyInvoiceCalc,invoiceOccupyApplyInvoiceOcr,batchTransferAcceptanceList,batchTransferAcceptTransfersInfo,batchTransferAcceptInvoice,batchTransferAcceptRisk,batchTransferAcceptApproval,batchTransferSendRisk,batchTransferAcceptManual,quotaApplySave,quotaApplyCancel,quotaAprvAudit,quotaAprvChange,quotaAprvReCredit,quotaCreditApplySave,quotaCreditApplyCancle,quotaCreditAprvAudit,quotaCreditAprvChange,quotaCreditAprvReCredit,quotaFreezeApply,quotaThawApply,quotaThawAprv,quotaEntOpenQueryPage,quotaEntOpenExport,quotaEntOpenHisQuery,quotaEntOpenHisExport,quotaEntCreditQueryPage,quotaEntCreditExport,quotaEntCreditHisQuery,quotaEntCreditHisExport,quotaEntAllCreditQuery,quotaOpenApplyQueryPage,quotaOpenApplyDetail,quotaOpenReApplyDetail,quotaOpenAprvQueryPage,quotaOpenQueryPage,quotaOpenExport,quotaOpenDetail,quotaFreezeApplyQueryPage,quotaFreezeApplyExport,quotaFreezeApplyDetail,quotaThawAprvQueryPage,quotaThawAprvDetail,quotaFreezethawQueryPage,quotaFreezethawExport,quotaCreditApplyQueryPage,quotaCreditApplyDetail,quotaCreditReApplyDetail,quotaCreditAprvQueryPage,quotaCreditQueryPage,quotaCreditExport,quotaCreditDetail,quotaBatchOptSellCreditExportexist,quotaBatchOptSellCreditExportadd,quotaBatchOptSellCreditImportByExcel,quotaBatchOptOpenCreditExportadd,quotaBatchOptOpenCreditExportexist,quotaApplyWhiteListExport,quotaApplyWhiteListImport,itrusDetailsSelect,itrusInterfaceCount,itrusInterfaceExport,itrusInterfaceSelect,blockQueryBlock,blockQueryUser,blockQueryEnt,blockQueryDecode,invoiceWriteoffListQuery,invoiceWriteoffListExport,invoiceWriteoffDetail,invoiceWriteoffWriteoff,invoiceWriteoffWriteoffBack,enterpriseOrgOrgList,enterpriseOrgInit,enterpriseOrgQueryEnterprise,enterpriseOrgAdd,enterpriseOrgDetail,enterpriseOrgList,enterpriseOrgExportEnterpriseOrgList,enterpriseOrgOrgValid,enterpriseOrgEntValid,accountBalanceSelectList,accountBalanceQueryAccountNoDetail,accountBalanceExport,accountBalanceUpdateSingle,orgGetAllTree,orgGetSpecificTree,orgGetAllGroup,orgGetAllEnterprise,orgQueryLegalCoreEnt,orgGetList,orgExportList,orgAddOrgFile,orgGetDetailInfo,orgOpNode,orgDeleteOrg,orgGetLegalNoreg,orgEnterApplyQueryListNotRegisterLegal,orgGetCoreApplyList,orgGetCoreReviewList,orgExportReviewList,orgGetEntByCode,orgAddApply,orgGetEntInfo,orgGetAccountById,orgAddAccount,orgSelectUserInfo,orgGetUser,orgAddUser,orgGetOrganCodetType,orgGetFileHistory,orgGetFile,orgAddCoreEntFile,orgRejectApply,orgRejectAll,orgCoreDelete,orgGetCoreEntList,orgExportCoreList,orgCoreSonDetail,orgGetEntAll,orgUpdateOrgcodeInit,orgAddMemberUnitApply,baseRateSelectPage,baseRateSelectList,baseRateAddItem,baseRateUpdateItem,baseRateCreateRateCode,baseRateSelectHistoryList,baseRateSelectById,payReceiveCancel,payReceiveSelect,payReceiveDetail,payReceiveMatchHandle,payReceiveSelectWaitHandle,payExport,payReceiveRevert,interestSelectList,interestAddByExcel,interestExport,interestTemplateExport,baseRateChangeSelectApplyPage,baseRateChangeSelectReviewPage,baseRateChangeSelectPassPage,baseRateChangeAddBaseRateProcess,baseRateChangeReviewBaseRateProcess,baseRateChangeQueryProcessDetail,interestMatchSelectInterestPage,interestMatchExportInterestPageVip,interestMatchExportInterestPageGen,interestMatchQueryDetail,finCostRateSelect,finCostRateDetail,finCostRateAdd,finCostRateEdit,finCostRateExport,finAddCostRateByExcel,interestVipSelectList,interestVipAddByExcel,interestVipExport,interestVipTemplateExport,finCostRecordSelect,finCostRecordExport,finCostRecordSum,interestConfModelConfModelSelectPage,interestConfModelConfModelDetail,interestConfModelConfModelSelectList,interestConfModelConfModelRelateDetail,finFlowSendList,finFlowReceiveDetail,finFlowSendFileupload,finFlowReject,finFlowResend,finFlowAsynReceiveDeal,finVipRateSelect,finVipRateDetail,finVipRateAdd,finVipRateEdit,finVipRateExport,finAddVipCostRateByExcel,interestMatchChangeSelectApplyPage,interestMatchChangeSelectReviewPage,interestMatchChangeSelectPassPage,interestMatchChangeExportSelectPassPageGen,interestMatchChangeQueryProcessDetail,interestMatchChangeQueryVipProcessDetail,interestMatchChangeAddBySingle,interestMatchChangeReviewInterestMatchProcess,interestMatchChangeAddUploadExcel,interestMatchChangeCancelAll,interestMatchChangeVipChange,interestConfModelChangeSelectApplyPage,interestConfModelChangeSelectReviewPage,interestConfModelChangeSelectPassPage,interestConfModelChangeCreateRateCode,interestConfModelChangeSubmitInterestConfModelProcess,interestConfModelChangeReviewInterestConfModelProcess,interestConfModelChangeInterestConfModelProcessDetail,interestConfModelChangeCaculateRate,interestConfModelChangeInterestConfModelProcessFileDetailForRateConfId,interestConfModelChangeInterestConfModelProcessFileDetail,entOmcAccountSelectApprovalList,entOmcAccountSelectDraftList,entOmcAccountSelectAccountHistory,entOmcAccountSelectAccountHistoryDetail,entOmcAccountSelectEnt,entOmcAccountSelectAllEnt,entOmcAccountSelectAccout,entOmcAccountSubmitDraft,entOmcAccountAddBankAcocunt,entOmcAccountDelete,entOmcAccountSelectFiles,entOmcAccountSaveAsDraft,entOmcAccountDeleteDraft,entOmcAccountUpdateDraft,entOmcAccountUpLoadFile,entOmcAccountReview,entOmcAccountSelectAbnormalList,entOmcAccountDealWithAbnormal,entOmcAccountDealResult,entOmcAccountSelectAccountChangeDetail,entAccountQueryCnapsBankTypeList,entAccountQueryCnapsList,entPayeeList,entPayeesDownload,entDocumentSelect,entDocumentUploadDraft,entDocumentUploadApply,entDocumentUploadAudit,entDocumentSelectApplyList,entDocumentSelectAuditList,entDocumentUploadViewDetail,entDocumentDeleteSingle,entDocumentDeleteBiz,entDocumentSelectDocBiz,coreEntChgNewsonApplyInit,coreEntChgNewsonApplyDetail,coreEntChgNewsonApplySave,coreEntChgNewsonApplyCommit,coreEntChgNewsonApplyReject,coreEntChgNewsonApplyPass,coreEntChgNewsonApplyCancle,coreEntChgNewempApplyInit,coreEntChgNewempApplyDetail,coreEntChgNewempApplySave,coreEntChgNewempApplyCommit,coreEntChgNewempApplyPass,coreEntChgNewempApplyReject,coreEntChgNewempApplyCancle,coreEntChgEntCanapplyQuery,coreEntChgEntCanapplyOption,coreEntChgHisApplyList,coreEntChgHisApplyExport,coreEntChgUserQuery,coreEntChgUsernameGet,coreEntChgNewempApplyEntList,coreEntChgNewaccApplyInit,coreEntChgNewaccApplyDetail,coreEntChgNewaccApplySave,coreEntChgNewaccApplyPass,coreEntChgNewaccApplyReject,coreEntChgNewaccApplyCancle,coreEntChgCheckismidea,coreEntChgNewempSaveUser,coreEntChgUploadReview,entIntentionQueryPagenation,entIntentionGetInfo,entIntentionHandleInfo,entIntentionApplyExport,memSelectMemInfoChange,memAddMemInfoChange,memSelectOldMemInfo,memDeleteApply,memSelectMemInfoMagnifier,memSelectMemInfoProduct,memSelectMemInfoChangeDetail,memUpdateMemInfoChange,memSelectMemInfoChangeReviewDetail,memSelectMemInfoChangeSuccessDetail,memCommonUpload,memSelectFileList,memDeleteFile,memDeleteTempFile,memSelectFinishedChange,memSelectChangeDetail,memSelectChangeFileList,memSaveChangeUpLoadFile,entEnterpriseAuthbyEnterpriseIdSelect,entEnterpriseAuthbyEnterpriseIdEditSelect,entEnterpriseAuthSelectPaddingAuth,entEnterpriseAuthCheckEnterpriseInfoIsRepeat,entEnterpriseAuthReviewPassEntInfoAuth,entEnterpriseAuthReviewRejectEntInfoAuth,entEnterpriseAuthReviewCancelEntInfoAuth,entEnterpriseAuthRejectResendEntInfoAuth,entEnterpriseEdit,entEnterpriseReAuth,entEnterprisebyEnterpriseIdFrozen,entEnterprisebyEnterpriseIdThaw,entEnterpriseSelect,entEnterprisebyEnterpriseIdSelectDetails,entEnterprisesQuery,entMementInit,entEnterpriseSelectEnt,entEnterpriseUpdateEntGrade,entSelectEntInfo,entEntInfoExport,entEnterpriseSelectOuterEnt,entOnlineSupFindOrganCodeType,entOnlineFindEnts,entOnlineFindEnts,entOnlineFindEnts,entOnlineCancelFrozen,entOnlineEditAccountMoneyValidate,entOnlineSupFindEntInfo,entOnlineSupFindEntAccount,entOnlineSupFindUserInfo,entOnlineSupFindDocInfo,entOnlineMemFindEntInfo,entOnlineMemFindAccountInfo,entOnlineMemFindUserInfo,entOnlineMemFindDocInfo,entOnlineOperatorRecord,entOnlineMemUpdateMemEntother,batchTransferAcceptSyncVerifyData,batchTransferRiskRes,systemFilePreview} from '@\test\index.js'
  */
import ajax from "@/utils/request";

/*
 *@序号:1
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138754)
 *@菜单名称:sequence(https://apaas-yapi.midea.com/project/7260/interface/api/744978)
 */

export function systemTestSequence(data) {
  return ajax({ url: `/system/test/sequence`, method: "post", data });
}

/*
 *@序号:2
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138754)
 *@菜单名称:todo 记得删除 sunyh109(https://apaas-yapi.midea.com/project/7260/interface/api/744981)
 */

export function systemTestSendRisk(data) {
  return ajax({ url: `/system/test/send/risk`, method: "post", data });
}

/*
 *@序号:3
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138754)
 *@菜单名称:queryRes(https://apaas-yapi.midea.com/project/7260/interface/api/744984)
 */

export function systemTestQueryRes(data) {
  return ajax({ url: `/system/test/query/res`, method: "post", data });
}

/*
 *@序号:4
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:美易单查询列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/744987)
 */

export function transactionBillQueryExport(data) {
  return ajax({ url: `/transaction/bill/query/export`, method: "post", data });
}

/*
 *@序号:5
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:美易单查询-金额统计(https://apaas-yapi.midea.com/project/7260/interface/api/744990)
 */

export function transactionBillAmountCount(data) {
  return ajax({ url: `/transaction/bill/amount/count`, method: "post", data });
}

/*
 *@序号:6
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看票据流转日志(https://apaas-yapi.midea.com/project/7260/interface/api/744993)
 */

export function transactionBillOperationLog(data) {
  return ajax({ url: `/transaction/bill/operation/log`, method: "post", data });
}

/*
 *@序号:7
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看票据流转轨迹(https://apaas-yapi.midea.com/project/7260/interface/api/744996)
 */

export function transactionBillTransferTrace(data) {
  return ajax({
    url: `/transaction/bill/transfer/trace`,
    method: "post",
    data,
  });
}

/*
 *@序号:8
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:票据详情查看(https://apaas-yapi.midea.com/project/7260/interface/api/744999)
 */

export function transactionBillDetail(data) {
  return ajax({ url: `/transaction/bill/detail`, method: "post", data });
}

/*
 *@序号:9
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:发票信息(https://apaas-yapi.midea.com/project/7260/interface/api/745002)
 */

export function transactionBillInvoiceInfo(data) {
  return ajax({ url: `/transaction/bill/invoiceInfo`, method: "post", data });
}

/*
 *@序号:10
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:getInvoiceContList(https://apaas-yapi.midea.com/project/7260/interface/api/745005)
 */

export function transactionGetInvoiceContInfo(data) {
  return ajax({
    url: `/transaction/get/invoiceCont/info`,
    method: "post",
    data,
  });
}

/*
 *@序号:11
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 （运营端），融资中(https://apaas-yapi.midea.com/project/7260/interface/api/745008)
 */

export function transactionFinancingQueryPagination(data) {
  return ajax({
    url: `/transaction/financing/query/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:12
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 导出（运营端），融资中(https://apaas-yapi.midea.com/project/7260/interface/api/745011)
 */

export function transactionFinancingQueryExport(data) {
  return ajax({
    url: `/transaction/financing/query/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:13
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 （运营端），已融资(https://apaas-yapi.midea.com/project/7260/interface/api/745014)
 */

export function transactionFinancingBillQueryPagination(data) {
  return ajax({
    url: `/transaction/financing/bill/query/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:14
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:运营端融资合同(https://apaas-yapi.midea.com/project/7260/interface/api/745017)
 */

export function transactionRelationCont(data) {
  return ajax({ url: `/transaction/relation/cont`, method: "post", data });
}

/*
 *@序号:15
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:融单查询 （运营端），已融资(https://apaas-yapi.midea.com/project/7260/interface/api/745020)
 */

export function transactionFinancedQueryExport(data) {
  return ajax({
    url: `/transaction/financed/query/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:16
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询-转让中(https://apaas-yapi.midea.com/project/7260/interface/api/745023)
 */

export function transactionTransferQueryPagination(data) {
  return ajax({
    url: `/transaction/transfer/query/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:17
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询导出(转让中)(https://apaas-yapi.midea.com/project/7260/interface/api/745026)
 */

export function transactionTransferingQueryExport(data) {
  return ajax({
    url: `/transaction/transfering/query/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:18
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询（已转让）(https://apaas-yapi.midea.com/project/7260/interface/api/745029)
 */

export function transactionTransferBillQueryPagination(data) {
  return ajax({
    url: `/transaction/transfer/bill/query/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:19
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:转单查询（已转让）导出(https://apaas-yapi.midea.com/project/7260/interface/api/745032)
 */

export function transactionTransferedQueryExport(data) {
  return ajax({
    url: `/transaction/transfered/query/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:20
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:协议列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/745035)
 */

export function transactionSelectContract(params) {
  return ajax({ url: `/transaction/select/contract`, method: "get", params });
}

/*
 *@序号:21
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:放款回单文件查询下载 add on 20230721 当前只有进出口银行使用(https://apaas-yapi.midea.com/project/7260/interface/api/745038)
 */

export function transactionDownloadLoanFile(data) {
  return ajax({ url: `/transaction/download/loanFile`, method: "post", data });
}

/*
 *@序号:22
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:凭证下载(https://apaas-yapi.midea.com/project/7260/interface/api/745041)
 */

export function transactionDownloadOneCert(data) {
  return ajax({ url: `/transaction/download/one/cert`, method: "post", data });
}

/*
 *@序号:23
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:单个协议下载(https://apaas-yapi.midea.com/project/7260/interface/api/745044)
 */

export function transactionDownloadOneContract(params) {
  return ajax({
    url: `/transaction/download/one/contract`,
    method: "get",
    params,
  });
}

/*
 *@序号:24
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:sellBillInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745047)
 */

export function transactionQueryDetails(data) {
  return ajax({ url: `/transaction/query/details`, method: "post", data });
}

/*
 *@序号:25
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:getInvoiceInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745050)
 */

export function transactionQueryInvoice(data) {
  return ajax({ url: `/transaction/query/invoice`, method: "post", data });
}

/*
 *@序号:26
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:querySellInvoice(https://apaas-yapi.midea.com/project/7260/interface/api/745053)
 */

export function transactionQuerySellInvoice(data) {
  return ajax({ url: `/transaction/query/sell/invoice`, method: "post", data });
}

/*
 *@序号:27
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看交易文件(https://apaas-yapi.midea.com/project/7260/interface/api/745056)
 */

export function transactionSelectFinanEntFile(data) {
  return ajax({ url: `/transaction/selectFinanEntFile`, method: "post", data });
}

/*
 *@序号:28
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:查看轨迹(https://apaas-yapi.midea.com/project/7260/interface/api/745059)
 */

export function transactionDetailTrack(data) {
  return ajax({ url: `/transaction/detail/track`, method: "post", data });
}

/*
 *@序号:29
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:持单查询(https://apaas-yapi.midea.com/project/7260/interface/api/745062)
 */

export function transactionHoldingQueryPagination(data) {
  return ajax({
    url: `/transaction/holding/query/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:30
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:持单查询-导出(https://apaas-yapi.midea.com/project/7260/interface/api/745065)
 */

export function transactionHoldingQueryExport(data) {
  return ajax({
    url: `/transaction/holding/query/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:31
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138756)
 *@菜单名称:queryBill(https://apaas-yapi.midea.com/project/7260/interface/api/745068)
 */

export function transactionBillSelectOne(data) {
  return ajax({ url: `/transaction/bill/selectOne`, method: "post", data });
}

/*
 *@序号:32
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138758)
 *@菜单名称:callback(https://apaas-yapi.midea.com/project/7260/interface/api/745071)
 */

export function externalSDPCallback(data) {
  return ajax({ url: `/external/SDP/callback`, method: "post", data });
}

/*
 *@序号:33
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138760)
 *@菜单名称:signContractCallBack(https://apaas-yapi.midea.com/project/7260/interface/api/745074)
 */

export function externalContractSignResult(data) {
  return ajax({ url: `/external/contract/signResult`, method: "post", data });
}

/*
 *@序号:34
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138762)
 *@菜单名称:unionCertificationScanFaceCallBack(https://apaas-yapi.midea.com/project/7260/interface/api/745077)
 */

export function externalUnionCertificationFaceResult(data) {
  return ajax({
    url: `/external/unionCertification/faceResult`,
    method: "post",
    data,
  });
}

/*
 *@序号:35
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:downloadAuthorize(https://apaas-yapi.midea.com/project/7260/interface/api/745080)
 */

export function ctrAuthorizationDownload(params) {
  return ajax({ url: `/ctr/authorization/download`, method: "get", params });
}

/*
 *@序号:36
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:omc协助下载全链融平台企业证书申请表(https://apaas-yapi.midea.com/project/7260/interface/api/745083)
 */

export function ctrUsbKeyApplyDownload(params) {
  return ajax({ url: `/ctr/usbKeyApply/download`, method: "get", params });
}

/*
 *@序号:37
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:omc下载全链融平台企业证书申请表 - 核心企业(https://apaas-yapi.midea.com/project/7260/interface/api/745086)
 */

export function ctrUsbKeyApplyDownloadcoreEnt(params) {
  return ajax({
    url: `/ctr/usbKeyApply/download4coreEnt`,
    method: "get",
    params,
  });
}

/*
 *@序号:38
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:04_全链融平台数字证书注销申请表下载(https://apaas-yapi.midea.com/project/7260/interface/api/745089)
 */

export function ctrCancleUkApplyDownload(params) {
  return ajax({ url: `/ctr/cancleUkApply/download`, method: "get", params });
}

/*
 *@序号:39
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:05_全链融平台USB-KEY证书补办申请表(https://apaas-yapi.midea.com/project/7260/interface/api/745092)
 */

export function ctrRemakeUkeyApplyDownload(params) {
  return ajax({ url: `/ctr/remakeUkeyApply/download`, method: "get", params });
}

/*
 *@序号:40
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138764)
 *@菜单名称:06_全链融平台USB-KEY证书重置密码申请表(https://apaas-yapi.midea.com/project/7260/interface/api/745095)
 */

export function ctrResetUkeyPwdApplyDownload(params) {
  return ajax({
    url: `/ctr/resetUkeyPwdApply/download`,
    method: "get",
    params,
  });
}

/*
 *@序号:41
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138766)
 *@菜单名称:商圈信息查询(https://apaas-yapi.midea.com/project/7260/interface/api/745098)
 */

export function businessQueryPagination(data) {
  return ajax({ url: `/business/query/pagination`, method: "post", data });
}

/*
 *@序号:42
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138766)
 *@菜单名称:商圈信息导出(https://apaas-yapi.midea.com/project/7260/interface/api/745101)
 */

export function businessExportInfoSelect(data) {
  return ajax({ url: `/business/export/info/select`, method: "post", data });
}

/*
 *@序号:43
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138766)
 *@菜单名称:商圈商圈编码初始化方法(https://apaas-yapi.midea.com/project/7260/interface/api/745104)
 */

export function businessBulidBusinessId(params) {
  return ajax({ url: `/business/bulid/businessId`, method: "get", params });
}

/*
 *@序号:44
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkEntCardType(https://apaas-yapi.midea.com/project/7260/interface/api/745107)
 */

export function edpCheckEntCardType(data) {
  return ajax({ url: `/edp/checkEntCardType`, method: "post", data });
}

/*
 *@序号:45
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkPrdOpenState(https://apaas-yapi.midea.com/project/7260/interface/api/745110)
 */

export function edpCheckPrdOpenState(data) {
  return ajax({ url: `/edp/checkPrdOpenState`, method: "post", data });
}

/*
 *@序号:46
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745113)
 */

export function edpQueryUserEnt(data) {
  return ajax({ url: `/edp/query/user/ent`, method: "post", data });
}

/*
 *@序号:47
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectUserBaseInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745116)
 */

export function edpGetUserBaseInfo(data) {
  return ajax({ url: `/edp/get/user/baseInfo`, method: "post", data });
}

/*
 *@序号:48
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkUserThereElements(https://apaas-yapi.midea.com/project/7260/interface/api/745119)
 */

export function edpCheckUserThereElements(data) {
  return ajax({ url: `/edp/check/user/there/elements`, method: "post", data });
}

/*
 *@序号:49
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAccountBankInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745122)
 */

export function edpGetAccountBankInfo(data) {
  return ajax({ url: `/edp/get/account/bankInfo`, method: "post", data });
}

/*
 *@序号:50
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745125)
 */

export function edpGetAccountAccountInfo(data) {
  return ajax({ url: `/edp/get/account/accountInfo`, method: "post", data });
}

/*
 *@序号:51
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:startPayApply(https://apaas-yapi.midea.com/project/7260/interface/api/745128)
 */

export function edpStartPayApply(data) {
  return ajax({ url: `/edp/start/pay/apply`, method: "post", data });
}

/*
 *@序号:52
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAuthByFlowNoAndMoney(https://apaas-yapi.midea.com/project/7260/interface/api/745132)
 */

export function edpGetPayAuth(data) {
  return ajax({ url: `/edp/get/pay/auth`, method: "post", data });
}

/*
 *@序号:53
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryMgrEnt(https://apaas-yapi.midea.com/project/7260/interface/api/745135)
 */

export function edpQueryMgrEnt(data) {
  return ajax({ url: `/edp/query/mgr/ent`, method: "post", data });
}

/*
 *@序号:54
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745138)
 */

export function edpQueryUserInfo(data) {
  return ajax({ url: `/edp/query/userInfo`, method: "post", data });
}

/*
 *@序号:55
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745141)
 */

export function edpQueryUserAccount(data) {
  return ajax({ url: `/edp/query/user/account`, method: "post", data });
}

/*
 *@序号:56
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:queryLoginInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745144)
 */

export function edpQueryLoginInfo(data) {
  return ajax({ url: `/edp/query/login/info`, method: "post", data });
}

/*
 *@序号:57
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:createUserName(https://apaas-yapi.midea.com/project/7260/interface/api/745147)
 */

export function edpCreateUserName(data) {
  return ajax({ url: `/edp/create/userName`, method: "post", data });
}

/*
 *@序号:58
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getApplyPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745150)
 */

export function prdOpenApplyGetPageList(data) {
  return ajax({ url: `/prd/open/apply/getPageList`, method: "post", data });
}

/*
 *@序号:59
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getApplyPageListExport(https://apaas-yapi.midea.com/project/7260/interface/api/745153)
 */

export function prdOpenApplyGetPageListExport(data) {
  return ajax({
    url: `/prd/open/apply/getPageListExport`,
    method: "post",
    data,
  });
}

/*
 *@序号:60
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getAuditPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745156)
 */

export function prdOpenAuditGetPageList(data) {
  return ajax({ url: `/prd/open/audit/getPageList`, method: "post", data });
}

/*
 *@序号:61
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getOpenedPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745159)
 */

export function prdOpenOpenedGetPageList(data) {
  return ajax({ url: `/prd/open/opened/getPageList`, method: "post", data });
}

/*
 *@序号:62
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getOpenedPageListExport(https://apaas-yapi.midea.com/project/7260/interface/api/745162)
 */

export function prdOpenOpenedGetPageListExport(data) {
  return ajax({
    url: `/prd/open/opened/getPageListExport`,
    method: "post",
    data,
  });
}

/*
 *@序号:63
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745165)
 */

export function prdOpenGetEntInfo(data) {
  return ajax({ url: `/prd/open/get/ent/info`, method: "post", data });
}

/*
 *@序号:64
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745168)
 */

export function prdOpenGetUserInfo(data) {
  return ajax({ url: `/prd/open/get/user/info`, method: "post", data });
}

/*
 *@序号:65
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745171)
 */

export function prdOpenGetAccountInfo(data) {
  return ajax({ url: `/prd/open/get/account/info`, method: "post", data });
}

/*
 *@序号:66
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getUkeyInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745174)
 */

export function prdOpenGetUkeyInfo(data) {
  return ajax({ url: `/prd/open/get/ukey/info`, method: "post", data });
}

/*
 *@序号:67
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745177)
 */

export function prdOpenSaveEntInfo(data) {
  return ajax({ url: `/prd/open/save/ent/info`, method: "post", data });
}

/*
 *@序号:68
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745180)
 */

export function prdOpenSaveUserInfo(data) {
  return ajax({ url: `/prd/open/save/user/info`, method: "post", data });
}

/*
 *@序号:69
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745183)
 */

export function prdOpenSaveAccountInfo(data) {
  return ajax({ url: `/prd/open/save/account/info`, method: "post", data });
}

/*
 *@序号:70
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveCertInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745186)
 */

export function prdOpenSaveCertInfo(data) {
  return ajax({ url: `/prd/open/save/cert/info`, method: "post", data });
}

/*
 *@序号:71
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:mgrAccept(https://apaas-yapi.midea.com/project/7260/interface/api/745189)
 */

export function prdOpenMgrAccept(data) {
  return ajax({ url: `/prd/open/mgr/accept`, method: "post", data });
}

/*
 *@序号:72
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:omcCommitToAudit(https://apaas-yapi.midea.com/project/7260/interface/api/745192)
 */

export function prdOpenOmcCommitToAudit(data) {
  return ajax({ url: `/prd/open/omc/commitToAudit`, method: "post", data });
}

/*
 *@序号:73
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:omcReview(https://apaas-yapi.midea.com/project/7260/interface/api/745195)
 */

export function prdOpenOmcReview(data) {
  return ajax({ url: `/prd/open/omc/review`, method: "post", data });
}

/*
 *@序号:74
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downloadUkeyApply(https://apaas-yapi.midea.com/project/7260/interface/api/745198)
 */

export function prdUsbKeyApplyDownload(params) {
  return ajax({ url: `/prd/usbKeyApply/download`, method: "get", params });
}

/*
 *@序号:75
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectAuditRecords(https://apaas-yapi.midea.com/project/7260/interface/api/745201)
 */

export function prdSelectAuditRecords(data) {
  return ajax({ url: `/prd/select/audit/records`, method: "post", data });
}

/*
 *@序号:76
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:resendPrdInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745204)
 */

export function prdResend(data) {
  return ajax({ url: `/prd/resend`, method: "post", data });
}

/*
 *@序号:77
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:asyncDoubleWriteData(https://apaas-yapi.midea.com/project/7260/interface/api/745207)
 */

export function prdAsyncDoubleWriteData(data) {
  return ajax({ url: `/prd/asyncDoubleWriteData`, method: "post", data });
}

/*
 *@序号:78
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745210)
 */

export function prdOpenGetNewestEntInfo(data) {
  return ajax({ url: `/prd/open/get/newest/ent/info`, method: "post", data });
}

/*
 *@序号:79
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745213)
 */

export function prdOpenGetNewestUserInfo(data) {
  return ajax({ url: `/prd/open/get/newest/user/info`, method: "post", data });
}

/*
 *@序号:80
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745216)
 */

export function prdOpenGetNewestAccountInfo(data) {
  return ajax({
    url: `/prd/open/get/newest/account/info`,
    method: "post",
    data,
  });
}

/*
 *@序号:81
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getNewestUkeyInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745219)
 */

export function prdOpenGetNewestUkeyInfo(data) {
  return ajax({ url: `/prd/open/get/newest/ukey/info`, method: "post", data });
}

/*
 *@序号:82
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downloadAuthorize(https://apaas-yapi.midea.com/project/7260/interface/api/745222)
 */

export function prdAuthorizeDownload(data) {
  return ajax({ url: `/prd/authorize/download`, method: "post", data });
}

/*
 *@序号:83
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:staffauthDetail(https://apaas-yapi.midea.com/project/7260/interface/api/745225)
 */

export function prdStaffauthDetail(data) {
  return ajax({ url: `/prd/staffauth/detail`, method: "post", data });
}

/*
 *@序号:84
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:validateEntInfoChange(https://apaas-yapi.midea.com/project/7260/interface/api/745228)
 */

export function prdOpenApplyValidate(data) {
  return ajax({ url: `/prd/open/apply/validate`, method: "post", data });
}

/*
 *@序号:85
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:MQ消息如果堵塞，用这个接口临时同步一下（前端暂时没有调用）(https://apaas-yapi.midea.com/project/7260/interface/api/745231)
 */

export function prdOpenEntSync(data) {
  return ajax({ url: `/prd/open/ent/sync`, method: "post", data });
}

/*
 *@序号:86
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:checkIsFiliale(https://apaas-yapi.midea.com/project/7260/interface/api/745234)
 */

export function prdOpenCheckIsFiliale(data) {
  return ajax({ url: `/prd/open/checkIsFiliale`, method: "post", data });
}

/*
 *@序号:87
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downLoadAuthorizationFromParentCompany(https://apaas-yapi.midea.com/project/7260/interface/api/745237)
 */

export function prdAuthorizationFromParentCompanyDownload(data) {
  return ajax({
    url: `/prd/authorizationFromParentCompany/download`,
    method: "post",
    data,
  });
}

/*
 *@序号:88
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:downLoadAccountOpeningAgreement(https://apaas-yapi.midea.com/project/7260/interface/api/745240)
 */

export function prdOpenAccountDownload(data) {
  return ajax({ url: `/prd/open/account/download`, method: "post", data });
}

/*
 *@序号:89
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:getApplyPageList(https://apaas-yapi.midea.com/project/7260/interface/api/745243)
 */

export function prdChangeApplyGetPageList(data) {
  return ajax({ url: `/prd/change/apply/getPageList`, method: "post", data });
}

/*
 *@序号:90
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:isExistChanging(https://apaas-yapi.midea.com/project/7260/interface/api/745246)
 */

export function prdChangeCheckIsChanging(data) {
  return ajax({ url: `/prd/change/check/is/changing`, method: "post", data });
}

/*
 *@序号:91
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectViewEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745249)
 */

export function prdChangeViewEntInfo(data) {
  return ajax({ url: `/prd/change/view/ent/info`, method: "post", data });
}

/*
 *@序号:92
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectDraftEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745252)
 */

export function prdChangeDraftEntInfo(data) {
  return ajax({ url: `/prd/change/draft/ent/info`, method: "post", data });
}

/*
 *@序号:93
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectDraftAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745255)
 */

export function prdChangeDraftAccountInfo(data) {
  return ajax({ url: `/prd/change/draft/account/info`, method: "post", data });
}

/*
 *@序号:94
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectCompareEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745258)
 */

export function prdChangeCompareGetEntInfo(data) {
  return ajax({
    url: `/prd/change/compare/get/ent/info`,
    method: "post",
    data,
  });
}

/*
 *@序号:95
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:selectCompareAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745261)
 */

export function prdChangeCompareGetAccountInfo(data) {
  return ajax({
    url: `/prd/change/compare/get/account/info`,
    method: "post",
    data,
  });
}

/*
 *@序号:96
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:saveChangeEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/745264)
 */

export function prdChangeSaveEntInfo(data) {
  return ajax({ url: `/prd/change/save/ent/info`, method: "post", data });
}

/*
 *@序号:97
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:cancel(https://apaas-yapi.midea.com/project/7260/interface/api/745267)
 */

export function prdChangeCancel(data) {
  return ajax({ url: `/prd/change/cancel`, method: "post", data });
}

/*
 *@序号:98
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:commitToAudit(https://apaas-yapi.midea.com/project/7260/interface/api/745270)
 */

export function prdChangeCommitToAudit(data) {
  return ajax({ url: `/prd/change/commit/to/audit`, method: "post", data });
}

/*
 *@序号:99
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138768)
 *@菜单名称:audit(https://apaas-yapi.midea.com/project/7260/interface/api/745273)
 */

export function prdChangeAudit(data) {
  return ajax({ url: `/prd/change/audit`, method: "post", data });
}

/*
 *@序号:100
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138773)
 *@菜单名称:querySysMq(https://apaas-yapi.midea.com/project/7260/interface/api/745276)
 */

export function systemSysMqQuerySysMq(data) {
  return ajax({ url: `/system/sysMq/querySysMq`, method: "post", data });
}

/*
 *@序号:101
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138773)
 *@菜单名称:send(https://apaas-yapi.midea.com/project/7260/interface/api/745279)
 */

export function systemSysMqSend(data) {
  return ajax({ url: `/system/sysMq/send`, method: "post", data });
}

/*
 *@序号:102
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138775)
 *@菜单名称:查询是业务组长的用户(https://apaas-yapi.midea.com/project/7260/interface/api/745282)
 */

export function systemAreaLeaderList(params) {
  return ajax({ url: `/system/area/leader/list`, method: "get", params });
}

/*
 *@序号:103
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138775)
 *@菜单名称:查询未被分配的地区(https://apaas-yapi.midea.com/project/7260/interface/api/745285)
 */

export function systemAreaOthersListbyAreaId(areaid) {
  return ajax({ url: `/system/area/others/list/${areaid}`, method: "get" });
}

/*
 *@序号:104
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:insertRole(https://apaas-yapi.midea.com/project/7260/interface/api/745288)
 */

export function systemRoleInsertRole(data) {
  return ajax({ url: `/system/role/insertRole`, method: "post", data });
}

/*
 *@序号:105
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:添加资源 [运营端][系统模块][角色]新增(https://apaas-yapi.midea.com/project/7260/interface/api/745291)
 */

export function systemRoleAddManage(data) {
  return ajax({ url: `/system/role/addManage`, method: "post", data });
}

/*
 *@序号:106
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:insertRoleEnt(https://apaas-yapi.midea.com/project/7260/interface/api/745294)
 */

export function systemRoleAddEnt(data) {
  return ajax({ url: `/system/role/addEnt`, method: "post", data });
}

/*
 *@序号:107
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:禁用OR启用（运营端）(https://apaas-yapi.midea.com/project/7260/interface/api/745297)
 */

export function systemRolebyIDDisableAndEnable(id) {
  return ajax({ url: `/system/role/${id}/disableAndEnable`, method: "post" });
}

/*
 *@序号:108
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:禁用(https://apaas-yapi.midea.com/project/7260/interface/api/745300)
 */

export function systemRolebyIDDisableEnt(id) {
  return ajax({ url: `/system/role/${id}/disableEnt`, method: "post" });
}

/*
 *@序号:109
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:编辑(https://apaas-yapi.midea.com/project/7260/interface/api/745303)
 */

export function systemRoleEditEnt(data) {
  return ajax({ url: `/system/role/editEnt`, method: "post", data });
}

/*
 *@序号:110
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:编辑(https://apaas-yapi.midea.com/project/7260/interface/api/745306)
 */

export function systemRoleEditManage(data) {
  return ajax({ url: `/system/role/editManage`, method: "post", data });
}

/*
 *@序号:111
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:编辑(https://apaas-yapi.midea.com/project/7260/interface/api/745309)
 */

export function systemRoleUpdateRole(data) {
  return ajax({ url: `/system/role/updateRole`, method: "post", data });
}

/*
 *@序号:112
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745312)
 */

export function systemRolebyIDDel(id) {
  return ajax({ url: `/system/role/${id}/del`, method: "post" });
}

/*
 *@序号:113
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745315)
 */

export function systemRoleUpdate(data) {
  return ajax({ url: `/system/role/update`, method: "post", data });
}

/*
 *@序号:114
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询 [运营端][系统模块][角色](https://apaas-yapi.midea.com/project/7260/interface/api/745318)
 */

export function systemRolebyIDGet(id) {
  return ajax({ url: `/system/role/${id}/get`, method: "post" });
}

/*
 *@序号:115
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745321)
 */

export function systemRoleList(data) {
  return ajax({ url: `/system/role/list`, method: "post", data });
}

/*
 *@序号:116
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745324)
 */

export function systemRoleOmcList(data) {
  return ajax({ url: `/system/role/omc/list`, method: "post", data });
}

/*
 *@序号:117
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745327)
 */

export function systemRoleEntList(data) {
  return ajax({ url: `/system/role/ent/list`, method: "post", data });
}

/*
 *@序号:118
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:成员单位角色列表查询:开票经办员，开票复核员，企业端查询员(https://apaas-yapi.midea.com/project/7260/interface/api/745330)
 */

export function systemRoleCyrole(data) {
  return ajax({ url: `/system/role/cyrole`, method: "post", data });
}

/*
 *@序号:119
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询 [运营端][系统模块][角色](https://apaas-yapi.midea.com/project/7260/interface/api/745333)
 */

export function systemRoleSelectUserUseRole(data) {
  return ajax({ url: `/system/role/selectUserUseRole`, method: "post", data });
}

/*
 *@序号:120
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:[运营端][系统模块][角色]查询企业管理员能分配的角色(https://apaas-yapi.midea.com/project/7260/interface/api/745336)
 */

export function systemRoleSelectEntManageCanDistributiveRole(data) {
  return ajax({
    url: `/system/role/selectEntManageCanDistributiveRole`,
    method: "post",
    data,
  });
}

/*
 *@序号:121
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745339)
 */

export function systemRoleUserbyUserid(userid) {
  return ajax({ url: `/system/role/user/${userid}`, method: "post" });
}

/*
 *@序号:122
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745342)
 */

export function systemRoleEntuserbyUserid(userid) {
  return ajax({ url: `/system/role/entuser/${userid}`, method: "post" });
}

/*
 *@序号:123
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:allocResource(https://apaas-yapi.midea.com/project/7260/interface/api/745345)
 */

export function systemRolebyRoleIdAllocResouce(roleid) {
  return ajax({ url: `/system/role/${roleid}/allocResouce`, method: "post" });
}

/*
 *@序号:124
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:getRoleResource(https://apaas-yapi.midea.com/project/7260/interface/api/745348)
 */

export function systemRolebyRoleIdGetResources(roleid) {
  return ajax({ url: `/system/role/${roleid}/getResources`, method: "get" });
}

/*
 *@序号:125
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138777)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745351)
 */

export function systemRolePagination(data) {
  return ajax({ url: `/system/role/pagination`, method: "post", data });
}

/*
 *@序号:126
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138779)
 *@菜单名称:推送指定经办员or审核员影印件(https://apaas-yapi.midea.com/project/7260/interface/api/745354)
 */

export function systemSyncAppointFileEdp(data) {
  return ajax({ url: `/system/syncAppointFile2Edp`, method: "post", data });
}

/*
 *@序号:127
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:证书申请（新）(https://apaas-yapi.midea.com/project/7260/interface/api/745357)
 */

export function ukeyApply(data) {
  return ajax({ url: `/ukey/apply`, method: "post", data });
}

/*
 *@序号:128
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:证书写入ukey在后台记录绑定关系(https://apaas-yapi.midea.com/project/7260/interface/api/745360)
 */

export function ukeyBindukey(data) {
  return ajax({ url: `/ukey/bindukey`, method: "post", data });
}

/*
 *@序号:129
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:注销证书（新）(https://apaas-yapi.midea.com/project/7260/interface/api/745363)
 */

export function ukeyRevokeCert(data) {
  return ajax({ url: `/ukey/RevokeCert`, method: "post", data });
}

/*
 *@序号:130
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:CFCA证书续期(https://apaas-yapi.midea.com/project/7260/interface/api/745366)
 */

export function ukeyCfcaRenewCert(data) {
  return ajax({ url: `/ukey/cfca/renewCert`, method: "post", data });
}

/*
 *@序号:131
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查看证书详情(https://apaas-yapi.midea.com/project/7260/interface/api/745369)
 */

export function ukeyQuerySummary(data) {
  return ajax({ url: `/ukey/querySummary`, method: "post", data });
}

/*
 *@序号:132
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查询uk注销记录(https://apaas-yapi.midea.com/project/7260/interface/api/745372)
 */

export function ukeySelectRevokeHistory(data) {
  return ajax({ url: `/ukey/selectRevokeHistory`, method: "post", data });
}

/*
 *@序号:133
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey注销记录导出(https://apaas-yapi.midea.com/project/7260/interface/api/745375)
 */

export function ukeySelectRevokeHistoryExport(data) {
  return ajax({
    url: `/ukey/selectRevokeHistory/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:134
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:检查申请证书次数(https://apaas-yapi.midea.com/project/7260/interface/api/745378)
 */

export function ukeyCheckApplyUKeyTimes(data) {
  return ajax({ url: `/ukey/checkApplyUKeyTimes`, method: "post", data });
}

/*
 *@序号:135
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:Ukey异常申请 查询(https://apaas-yapi.midea.com/project/7260/interface/api/745381)
 */

export function ukeyManageSelect(data) {
  return ajax({ url: `/ukey/manage/1/select`, method: "post", data });
}

/*
 *@序号:136
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey异常复核(https://apaas-yapi.midea.com/project/7260/interface/api/745384)
 */

export function ukeyManageSelect(data) {
  return ajax({ url: `/ukey/manage/2/select`, method: "post", data });
}

/*
 *@序号:137
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey异常查询(https://apaas-yapi.midea.com/project/7260/interface/api/745387)
 */

export function ukeyManageSelect(data) {
  return ajax({ url: `/ukey/manage/3/select`, method: "post", data });
}

/*
 *@序号:138
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查看详情(https://apaas-yapi.midea.com/project/7260/interface/api/745390)
 */

export function ukeyManageDetails(params) {
  return ajax({ url: `/ukey/manage/details`, method: "get", params });
}

/*
 *@序号:139
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:客户经理处理操作(通过/不通过)(https://apaas-yapi.midea.com/project/7260/interface/api/745393)
 */

export function ukeyManageUpdate(data) {
  return ajax({ url: `/ukey/manage/update/1`, method: "post", data });
}

/*
 *@序号:140
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey管理复核(https://apaas-yapi.midea.com/project/7260/interface/api/745396)
 */

export function ukeyManageUpdate(data) {
  return ajax({ url: `/ukey/manage/update/2`, method: "post", data });
}

/*
 *@序号:141
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:ukey管理补上传(https://apaas-yapi.midea.com/project/7260/interface/api/745399)
 */

export function ukeyManageUploadAgain(data) {
  return ajax({ url: `/ukey/manage/upload/again`, method: "post", data });
}

/*
 *@序号:142
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:uk异常查询 导出(https://apaas-yapi.midea.com/project/7260/interface/api/745402)
 */

export function ukeyManageListExport(data) {
  return ajax({ url: `/ukey/manage/list/export`, method: "post", data });
}

/*
 *@序号:143
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:findFileHistory(https://apaas-yapi.midea.com/project/7260/interface/api/745405)
 */

export function ukeyFileHistoryInfo(data) {
  return ajax({ url: `/ukey/file/history/info`, method: "post", data });
}

/*
 *@序号:144
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:前端默认传enterprise_type为2(https://apaas-yapi.midea.com/project/7260/interface/api/745408)
 */

export function ukeyGetExpireList(data) {
  return ajax({ url: `/ukey/get/expire/list`, method: "post", data });
}

/*
 *@序号:145
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:确认续期(https://apaas-yapi.midea.com/project/7260/interface/api/745411)
 */

export function ukeyExpireUpdate(data) {
  return ajax({ url: `/ukey/expire/update`, method: "post", data });
}

/*
 *@序号:146
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:查询供应商企业uk已续期列表(https://apaas-yapi.midea.com/project/7260/interface/api/745414)
 */

export function ukeyRenewedList(data) {
  return ajax({ url: `/ukey/renewed/list`, method: "post", data });
}

/*
 *@序号:147
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:导出供应商企业uk已续期列表(https://apaas-yapi.midea.com/project/7260/interface/api/745417)
 */

export function ukeyRenewedListExport(data) {
  return ajax({ url: `/ukey/renewed/list/export`, method: "post", data });
}

/*
 *@序号:148
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:导出供应商企业uk已到期列表(https://apaas-yapi.midea.com/project/7260/interface/api/745420)
 */

export function ukeyRenewingListExport(data) {
  return ajax({ url: `/ukey/renewing/list/export`, method: "post", data });
}

/*
 *@序号:149
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138781)
 *@菜单名称:CFCA证书续期重置(https://apaas-yapi.midea.com/project/7260/interface/api/745423)
 */

export function ukeyCfcaReset(data) {
  return ajax({ url: `/ukey/cfca/reset`, method: "post", data });
}

/*
 *@序号:150
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:新增运营用户(https://apaas-yapi.midea.com/project/7260/interface/api/745426)
 */

export function systemUserInsert(data) {
  return ajax({ url: `/system/user/insert`, method: "post", data });
}

/*
 *@序号:151
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:resetPassword(https://apaas-yapi.midea.com/project/7260/interface/api/745429)
 */

export function systemUserbyUserIdResetPwd(userid) {
  return ajax({ url: `/system/user/${userid}/resetPwd`, method: "post" });
}

/*
 *@序号:152
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:编辑用户(https://apaas-yapi.midea.com/project/7260/interface/api/745432)
 */

export function systemUserEdit(data) {
  return ajax({ url: `/system/user/edit`, method: "post", data });
}

/*
 *@序号:153
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:frozenUser(https://apaas-yapi.midea.com/project/7260/interface/api/745435)
 */

export function systemUserbyUserIdFrozenUser(userid) {
  return ajax({ url: `/system/user/${userid}/frozenUser`, method: "post" });
}

/*
 *@序号:154
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:ThawUser(https://apaas-yapi.midea.com/project/7260/interface/api/745438)
 */

export function systemUserbyUserIdThawUser(userid) {
  return ajax({ url: `/system/user/${userid}/ThawUser`, method: "post" });
}

/*
 *@序号:155
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:删除用户(https://apaas-yapi.midea.com/project/7260/interface/api/745441)
 */

export function systemUserbyUserIdDelete(userid) {
  return ajax({ url: `/system/user/${userid}/delete`, method: "post" });
}

/*
 *@序号:156
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectOmcAll(https://apaas-yapi.midea.com/project/7260/interface/api/745444)
 */

export function systemUserSelectOmcAll(data) {
  return ajax({ url: `/system/user/selectOmcAll`, method: "post", data });
}

/*
 *@序号:157
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectEntUser(https://apaas-yapi.midea.com/project/7260/interface/api/745447)
 */

export function systemUserSelectEntUser(data) {
  return ajax({ url: `/system/user/selectEntUser`, method: "post", data });
}

/*
 *@序号:158
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectUserDetails(https://apaas-yapi.midea.com/project/7260/interface/api/745450)
 */

export function systemUserbyUserIdSelectDetails(userid) {
  return ajax({ url: `/system/user/${userid}/selectDetails`, method: "post" });
}

/*
 *@序号:159
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectDetails(https://apaas-yapi.midea.com/project/7260/interface/api/745453)
 */

export function systemUserSelectDetails(data) {
  return ajax({ url: `/system/user/selectDetails`, method: "post", data });
}

/*
 *@序号:160
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:login(https://apaas-yapi.midea.com/project/7260/interface/api/745456)
 */

export function systemUserLogin(data) {
  return ajax({ url: `/system/user/login`, method: "post", data });
}

/*
 *@序号:161
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:changePwd(https://apaas-yapi.midea.com/project/7260/interface/api/745459)
 */

export function systemUserChangePwd(data) {
  return ajax({ url: `/system/user/changePwd`, method: "post", data });
}

/*
 *@序号:162
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:修改手机号码(https://apaas-yapi.midea.com/project/7260/interface/api/745462)
 */

export function systemUserChangePhone(data) {
  return ajax({ url: `/system/user/changePhone`, method: "post", data });
}

/*
 *@序号:163
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:[运营端][系统模块][用户]修改个人邮箱地址(https://apaas-yapi.midea.com/project/7260/interface/api/745465)
 */

export function systemUserChangeEmail(data) {
  return ajax({ url: `/system/user/changeEmail`, method: "post", data });
}

/*
 *@序号:164
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:logout(https://apaas-yapi.midea.com/project/7260/interface/api/745468)
 */

export function systemUserLogout(data) {
  return ajax({ url: `/system/user/logout`, method: "post", data });
}

/*
 *@序号:165
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:allocRole(https://apaas-yapi.midea.com/project/7260/interface/api/745471)
 */

export function systemUserbyUserIdAllocRole(userid) {
  return ajax({ url: `/system/user/${userid}/allocRole`, method: "post" });
}

/*
 *@序号:166
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectByCondition(https://apaas-yapi.midea.com/project/7260/interface/api/745474)
 */

export function systemUserSelectByCondition(data) {
  return ajax({ url: `/system/user/selectByCondition`, method: "post", data });
}

/*
 *@序号:167
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:查询绑定的Ukey信息(https://apaas-yapi.midea.com/project/7260/interface/api/745477)
 */

export function systemUserUkeyinfoQuery(data) {
  return ajax({ url: `/system/user/ukeyinfo/query`, method: "post", data });
}

/*
 *@序号:168
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:运营端人员管理(https://apaas-yapi.midea.com/project/7260/interface/api/745480)
 */

export function systemOmcUserFindList(data) {
  return ajax({ url: `/system/omcUser/find/list`, method: "post", data });
}

/*
 *@序号:169
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:企业端人员管理(https://apaas-yapi.midea.com/project/7260/interface/api/745483)
 */

export function systemEntUserFindList(data) {
  return ajax({ url: `/system/entUser/find/list`, method: "post", data });
}

/*
 *@序号:170
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:findUserAndRoleByUserId(https://apaas-yapi.midea.com/project/7260/interface/api/745486)
 */

export function systemUserRoleFind(data) {
  return ajax({ url: `/system/user_role/find`, method: "post", data });
}

/*
 *@序号:171
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:createUserName(https://apaas-yapi.midea.com/project/7260/interface/api/745489)
 */

export function systemUsernameCreate(data) {
  return ajax({ url: `/system/username/create`, method: "post", data });
}

/*
 *@序号:172
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:selectUKeyEntUser(https://apaas-yapi.midea.com/project/7260/interface/api/745492)
 */

export function systemUserSelectUKeyEntUser(data) {
  return ajax({ url: `/system/user/selectUKeyEntUser`, method: "post", data });
}

/*
 *@序号:173
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:exportUkeyEntUser(https://apaas-yapi.midea.com/project/7260/interface/api/745495)
 */

export function systemUserSelectUKeyEntUserExport(data) {
  return ajax({
    url: `/system/user/selectUKeyEntUser/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:174
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:findEcrUser(https://apaas-yapi.midea.com/project/7260/interface/api/745498)
 */

export function systemUserFind(data) {
  return ajax({ url: `/system/user/find`, method: "post", data });
}

/*
 *@序号:175
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:addWhiteList(https://apaas-yapi.midea.com/project/7260/interface/api/745501)
 */

export function systemSyncUserInfo(data) {
  return ajax({ url: `/system/syncUserInfo`, method: "post", data });
}

/*
 *@序号:176
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138783)
 *@菜单名称:getPublicKey(https://apaas-yapi.midea.com/project/7260/interface/api/745504)
 */

export function systemPublicKey(params) {
  return ajax({ url: `/system/public-key`, method: "get", params });
}

/*
 *@序号:177
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138785)
 *@菜单名称:reSend(https://apaas-yapi.midea.com/project/7260/interface/api/745507)
 */

export function sysItosResend(data) {
  return ajax({ url: `/sys/itos/resend`, method: "post", data });
}

/*
 *@序号:178
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138785)
 *@菜单名称:querySysItos(https://apaas-yapi.midea.com/project/7260/interface/api/745510)
 */

export function sysItosQuerySysItos(data) {
  return ajax({ url: `/sys/itos/querySysItos`, method: "post", data });
}

/*
 *@序号:179
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138785)
 *@菜单名称:confirmFail(https://apaas-yapi.midea.com/project/7260/interface/api/745513)
 */

export function sysItosConfirmFail(data) {
  return ajax({ url: `/sys/itos/confirmFail`, method: "post", data });
}

/*
 *@序号:180
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138787)
 *@菜单名称:health(https://apaas-yapi.midea.com/project/7260/interface/api/745516)
 */

export function actuatorHealth(data) {
  return ajax({ url: `/actuator/health`, method: "post", data });
}

/*
 *@序号:181
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:预留用例，清除redis指定key(https://apaas-yapi.midea.com/project/7260/interface/api/745519)
 */

export function systemDeleteLock(data) {
  return ajax({ url: `/system/deleteLock`, method: "post", data });
}

/*
 *@序号:182
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:getContractAsync(https://apaas-yapi.midea.com/project/7260/interface/api/745522)
 */

export function systemGetContractAsync(data) {
  return ajax({ url: `/system/getContractAsync`, method: "post", data });
}

/*
 *@序号:183
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询农行1.9接口(https://apaas-yapi.midea.com/project/7260/interface/api/745525)
 */

export function systemSearchEntAcc(data) {
  return ajax({ url: `/system/searchEntAcc`, method: "post", data });
}

/*
 *@序号:184
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询农行1.9接口searchEntAcc4sp(https://apaas-yapi.midea.com/project/7260/interface/api/745528)
 */

export function systemSearchEntAccsp(data) {
  return ajax({ url: `/system/searchEntAcc4sp`, method: "post", data });
}

/*
 *@序号:185
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询邮储建档申请结果(https://apaas-yapi.midea.com/project/7260/interface/api/745531)
 */

export function systemSignupSearchDirect(data) {
  return ajax({ url: `/system/signupSearch/direct`, method: "post", data });
}

/*
 *@序号:186
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:查询邮储建档申请结果(https://apaas-yapi.midea.com/project/7260/interface/api/745534)
 */

export function systemSignupSearchNormal(data) {
  return ajax({ url: `/system/signupSearch/normal`, method: "post", data });
}

/*
 *@序号:187
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:eximQueryResult(https://apaas-yapi.midea.com/project/7260/interface/api/745537)
 */

export function systemEximResult(data) {
  return ajax({ url: `/system/exim/result`, method: "post", data });
}

/*
 *@序号:188
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:(上线测试KONG网关接口）(https://apaas-yapi.midea.com/project/7260/interface/api/745540)
 */

export function systemKongUrlTest(data) {
  return ajax({ url: `/system/kong/url/test`, method: "post", data });
}

/*
 *@序号:189
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:探测entmgr表mgrID和user表userid是否一致(https://apaas-yapi.midea.com/project/7260/interface/api/745543)
 */

export function systemCheckEntmgr(params) {
  return ajax({ url: `/system/check/entmgr`, method: "get", params });
}

/*
 *@序号:190
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:巡检顺农商利率查询接口(https://apaas-yapi.midea.com/project/7260/interface/api/745546)
 */

export function systemSdbankRateTest(data) {
  return ajax({ url: `/system/sdbank/rate/test`, method: "post", data });
}

/*
 *@序号:191
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138789)
 *@菜单名称:巡检查询农行账户余额接口(https://apaas-yapi.midea.com/project/7260/interface/api/745549)
 */

export function systemAbcBalanceTest(data) {
  return ajax({ url: `/system/abc/balance/test`, method: "post", data });
}

/*
 *@序号:192
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:commonConstant(https://apaas-yapi.midea.com/project/7260/interface/api/745552)
 */

export function systemCommonConstant(data) {
  return ajax({ url: `/system/common/constant`, method: "post", data });
}

/*
 *@序号:193
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:downLoadFileFromURL(https://apaas-yapi.midea.com/project/7260/interface/api/745555)
 */

export function systemCommonDownloadFromURL(data) {
  return ajax({ url: `/system/common/downloadFromURL`, method: "post", data });
}

/*
 *@序号:194
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:getBizFile(https://apaas-yapi.midea.com/project/7260/interface/api/745558)
 */

export function systemQueryBizfile(data) {
  return ajax({ url: `/system/query/bizfile`, method: "post", data });
}

/*
 *@序号:195
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:fileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/745561)
 */

export function systemCommonUpload(data) {
  return ajax({ url: `/system/common/upload`, method: "post", data });
}

/*
 *@序号:196
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:downloadDoc(https://apaas-yapi.midea.com/project/7260/interface/api/745564)
 */

export function systemCommonDownload(data) {
  return ajax({ url: `/system/common/download`, method: "post", data });
}

/*
 *@序号:197
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:删除文件(https://apaas-yapi.midea.com/project/7260/interface/api/745567)
 */

export function systemCommonDeleteFile(data) {
  return ajax({ url: `/system/common/deleteFile`, method: "post", data });
}

/*
 *@序号:198
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:取消时，删除没有保存的文件(https://apaas-yapi.midea.com/project/7260/interface/api/745570)
 */

export function systemCommonDeleteCancel(data) {
  return ajax({ url: `/system/common/delete/cancel`, method: "post", data });
}

/*
 *@序号:199
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:查找文件(https://apaas-yapi.midea.com/project/7260/interface/api/745573)
 */

export function systemCommonSelectFile(data) {
  return ajax({ url: `/system/common/selectFile`, method: "post", data });
}

/*
 *@序号:200
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:archviesFileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/745576)
 */

export function systemArchviesUpload(data) {
  return ajax({ url: `/system/archvies/upload`, method: "post", data });
}

/*
 *@序号:201
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:quotaFileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/745579)
 */

export function systemQuotaUpload(data) {
  return ajax({ url: `/system/quota/upload`, method: "post", data });
}

/*
 *@序号:202
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:edpRegionList(https://apaas-yapi.midea.com/project/7260/interface/api/745582)
 */

export function systemEdpRegionList(data) {
  return ajax({ url: `/system/edp/region/list`, method: "post", data });
}

/*
 *@序号:203
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138793)
 *@菜单名称:查询 [运营端][系统模块][省市信息](https://apaas-yapi.midea.com/project/7260/interface/api/745585)
 */

export function systemRegionList(data) {
  return ajax({ url: `/system/region/list`, method: "post", data });
}

/*
 *@序号:204
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138793)
 *@菜单名称:查询 [运营端][系统模块][省市信息](https://apaas-yapi.midea.com/project/7260/interface/api/745588)
 */

export function systemRegionChildrensList(data) {
  return ajax({ url: `/system/region/childrensList`, method: "post", data });
}

/*
 *@序号:205
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745591)
 */

export function invoiceSyncFinResync(data) {
  return ajax({ url: `/invoice/sync/fin/resync`, method: "post", data });
}

/*
 *@序号:206
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745594)
 */

export function invoiceSyncFinResyncBatch(data) {
  return ajax({ url: `/invoice/sync/fin/resync/batch`, method: "post", data });
}

/*
 *@序号:207
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票池同步(https://apaas-yapi.midea.com/project/7260/interface/api/745597)
 */

export function invoiceSyncFinSync(data) {
  return ajax({ url: `/invoice/sync/fin/sync`, method: "post", data });
}

/*
 *@序号:208
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745600)
 */

export function invoiceSyncResellResync(data) {
  return ajax({ url: `/invoice/sync/resell/resync`, method: "post", data });
}

/*
 *@序号:209
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745603)
 */

export function invoiceSyncResellResyncBatch(data) {
  return ajax({
    url: `/invoice/sync/resell/resync/batch`,
    method: "post",
    data,
  });
}

/*
 *@序号:210
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745606)
 */

export function invoiceSyncResellSync(data) {
  return ajax({ url: `/invoice/sync/resell/sync`, method: "post", data });
}

/*
 *@序号:211
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:再保理发票附件重新同步(https://apaas-yapi.midea.com/project/7260/interface/api/745609)
 */

export function invoiceSyncResellSyncBatch(data) {
  return ajax({ url: `/invoice/sync/resell/sync/batch`, method: "post", data });
}

/*
 *@序号:212
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138795)
 *@菜单名称:发票池专用发票类型拆分(https://apaas-yapi.midea.com/project/7260/interface/api/745612)
 */

export function invoiceSyncRevisingInvoiceType(data) {
  return ajax({
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

export function invoiceSyncRevisingResellInvoiceType(data) {
  return ajax({
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

export function invoiceSyncRevisingOccupyInvoiceType(data) {
  return ajax({
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

export function invoiceSyncRevisingInvoiceUpload(data) {
  return ajax({
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

export function invoiceSyncRevisingInvoiceVerify(data) {
  return ajax({
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

export function invoiceSyncRevisingResellSnap(data) {
  return ajax({
    url: `/invoice/sync/revising/resell/snap`,
    method: "post",
    data,
  });
}

/*
 *@序号:218
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745630)
 */

export function systemMessageList(data) {
  return ajax({ url: `/system/message/list`, method: "post", data });
}

/*
 *@序号:219
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745633)
 */

export function systemMessagebyIDGet(id) {
  return ajax({ url: `/system/message/${id}/get`, method: "post" });
}

/*
 *@序号:220
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745636)
 */

export function systemMessageUpdate(data) {
  return ajax({ url: `/system/message/update`, method: "post", data });
}

/*
 *@序号:221
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:setRead(https://apaas-yapi.midea.com/project/7260/interface/api/745639)
 */

export function systemMessageSetRead(data) {
  return ajax({ url: `/system/message/setRead`, method: "post", data });
}

/*
 *@序号:222
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138797)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745642)
 */

export function systemMessagePagination(data) {
  return ajax({ url: `/system/message/pagination`, method: "post", data });
}

/*
 *@序号:223
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:insertResouce(https://apaas-yapi.midea.com/project/7260/interface/api/745645)
 */

export function systemResouceAdd(data) {
  return ajax({ url: `/system/resouce/add`, method: "post", data });
}

/*
 *@序号:224
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745648)
 */

export function systemResoucebyIDDel(id) {
  return ajax({ url: `/system/resouce/${id}/del`, method: "post" });
}

/*
 *@序号:225
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745651)
 */

export function systemResouceUpdate(data) {
  return ajax({ url: `/system/resouce/update`, method: "post", data });
}

/*
 *@序号:226
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745654)
 */

export function systemResouceList(data) {
  return ajax({ url: `/system/resouce/list`, method: "post", data });
}

/*
 *@序号:227
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745657)
 */

export function systemResouceChildrensList(data) {
  return ajax({ url: `/system/resouce/childrensList`, method: "post", data });
}

/*
 *@序号:228
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745660)
 */

export function systemResoucebyIDGet(id) {
  return ajax({ url: `/system/resouce/${id}/get`, method: "post" });
}

/*
 *@序号:229
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745663)
 */

export function systemResoucePagination(data) {
  return ajax({ url: `/system/resouce/pagination`, method: "post", data });
}

/*
 *@序号:230
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:userResource(https://apaas-yapi.midea.com/project/7260/interface/api/745666)
 */

export function systemResourceUserbyUserid(userid) {
  return ajax({ url: `/system/resource/user/${userid}`, method: "post" });
}

/*
 *@序号:231
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:逻辑删除(https://apaas-yapi.midea.com/project/7260/interface/api/745669)
 */

export function systemResourcebyIDLogicDelete(id) {
  return ajax({ url: `/system/resource/${id}/logicDelete`, method: "post" });
}

/*
 *@序号:232
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:禁用(https://apaas-yapi.midea.com/project/7260/interface/api/745672)
 */

export function systemResourcebyIDDisable(id) {
  return ajax({ url: `/system/resource/${id}/disable`, method: "post" });
}

/*
 *@序号:233
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:启用(https://apaas-yapi.midea.com/project/7260/interface/api/745675)
 */

export function systemResourcebyIDEnable(id) {
  return ajax({ url: `/system/resource/${id}/enable`, method: "post" });
}

/*
 *@序号:234
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138799)
 *@菜单名称:roleResource(https://apaas-yapi.midea.com/project/7260/interface/api/745678)
 */

export function systemResourceRolebyRoleId(roleid) {
  return ajax({ url: `/system/resource/role/${roleid}`, method: "post" });
}

/*
 *@序号:235
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-查询(https://apaas-yapi.midea.com/project/7260/interface/api/745681)
 */

export function systemArchivesSelectAll(data) {
  return ajax({ url: `/system/archives/selectAll`, method: "post", data });
}

/*
 *@序号:236
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-查询导出(https://apaas-yapi.midea.com/project/7260/interface/api/745684)
 */

export function systemArchivesExport(data) {
  return ajax({ url: `/system/archives/export`, method: "post", data });
}

/*
 *@序号:237
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-签约信息详情(https://apaas-yapi.midea.com/project/7260/interface/api/745687)
 */

export function systemArchivesSelectDetails(data) {
  return ajax({ url: `/system/archives/selectDetails`, method: "post", data });
}

/*
 *@序号:238
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-处理(https://apaas-yapi.midea.com/project/7260/interface/api/745690)
 */

export function systemArchivesDispose(data) {
  return ajax({ url: `/system/archives/dispose`, method: "post", data });
}

/*
 *@序号:239
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138801)
 *@菜单名称:签约管理-UKEY签收回执下载(https://apaas-yapi.midea.com/project/7260/interface/api/745693)
 */

export function systemArchivesUkeyreceiptDownload(data) {
  return ajax({
    url: `/system/archives/ukeyreceipt/download`,
    method: "post",
    data,
  });
}

/*
 *@序号:240
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:查询账号[运营端][系统模块][银行账号]查询(https://apaas-yapi.midea.com/project/7260/interface/api/745696)
 */

export function systemBankInfobyIDGet(id) {
  return ajax({ url: `/system/bankInfo/${id}/get`, method: "post" });
}

/*
 *@序号:241
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:查询账号[运营端][系统模块][银行账号]查询(https://apaas-yapi.midea.com/project/7260/interface/api/745699)
 */

export function systemBankInfoList(data) {
  return ajax({ url: `/system/bankInfo/list`, method: "post", data });
}

/*
 *@序号:242
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745702)
 */

export function systemBankInfoPagination(data) {
  return ajax({ url: `/system/bankInfo/pagination`, method: "post", data });
}

/*
 *@序号:243
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138803)
 *@菜单名称:分页查询（根据省id和市id）(https://apaas-yapi.midea.com/project/7260/interface/api/745705)
 */

export function systemBankInfoPaginationById(data) {
  return ajax({
    url: `/system/bankInfo/pagination/byId`,
    method: "post",
    data,
  });
}

/*
 *@序号:244
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745708)
 */

export function systemNoticeMsgAdd(data) {
  return ajax({ url: `/system/noticeMsg/add`, method: "post", data });
}

/*
 *@序号:245
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745711)
 */

export function systemNoticeMsgbyNoticeIdDel(noticeid) {
  return ajax({ url: `/system/noticeMsg/${noticeid}/del`, method: "post" });
}

/*
 *@序号:246
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745714)
 */

export function systemNoticeMsgUpdate(data) {
  return ajax({ url: `/system/noticeMsg/update`, method: "post", data });
}

/*
 *@序号:247
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:查询所有(https://apaas-yapi.midea.com/project/7260/interface/api/745717)
 */

export function systemNoticeMsgList(data) {
  return ajax({ url: `/system/noticeMsg/list`, method: "post", data });
}

/*
 *@序号:248
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/745720)
 */

export function systemNoticeMsgbyNoticeIdGet(noticeid) {
  return ajax({ url: `/system/noticeMsg/${noticeid}/get`, method: "post" });
}

/*
 *@序号:249
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745723)
 */

export function systemNoticeMsgPagination(data) {
  return ajax({ url: `/system/noticeMsg/pagination`, method: "post", data });
}

/*
 *@序号:250
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138805)
 *@菜单名称:返回给企业端通知公告(https://apaas-yapi.midea.com/project/7260/interface/api/745726)
 */

export function systemEntNoticeMsgGetValidList(data) {
  return ajax({
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

export function systemNoticeMsgGetLoginUserDetail(data) {
  return ajax({
    url: `/system/noticeMsg/getLoginUserDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:252
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:查询 [运营端][系统模块][基础参数](https://apaas-yapi.midea.com/project/7260/interface/api/745732)
 */

export function systemParameterbyIdGet(id) {
  return ajax({ url: `/system/parameter/${id}/get`, method: "post" });
}

/*
 *@序号:253
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:修改 [运营端][系统模块][基础参数](https://apaas-yapi.midea.com/project/7260/interface/api/745735)
 */

export function systemParameterUpdate(data) {
  return ajax({ url: `/system/parameter/update`, method: "post", data });
}

/*
 *@序号:254
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745738)
 */

export function systemParameterList(data) {
  return ajax({ url: `/system/parameter/list`, method: "post", data });
}

/*
 *@序号:255
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745741)
 */

export function systemParameterPagination(data) {
  return ajax({ url: `/system/parameter/pagination`, method: "post", data });
}

/*
 *@序号:256
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:getSellRate(https://apaas-yapi.midea.com/project/7260/interface/api/745744)
 */

export function systemParameterSellRate(data) {
  return ajax({ url: `/system/parameter/sell/rate`, method: "post", data });
}

/*
 *@序号:257
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:updateSellRate(https://apaas-yapi.midea.com/project/7260/interface/api/745747)
 */

export function systemParameterUpdateRate(data) {
  return ajax({ url: `/system/parameter/update/rate`, method: "post", data });
}

/*
 *@序号:258
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138807)
 *@菜单名称:setSellRate(https://apaas-yapi.midea.com/project/7260/interface/api/745750)
 */

export function systemParameterSetRate(data) {
  return ajax({ url: `/system/parameter/set/rate`, method: "post", data });
}

/*
 *@序号:259
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:insertDictionary(https://apaas-yapi.midea.com/project/7260/interface/api/745753)
 */

export function systemDictionaryAdd(data) {
  return ajax({ url: `/system/dictionary/add`, method: "post", data });
}

/*
 *@序号:260
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745756)
 */

export function systemDictionarybyIDDel(id) {
  return ajax({ url: `/system/dictionary/${id}/del`, method: "post" });
}

/*
 *@序号:261
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745759)
 */

export function systemDictionaryUpdate(data) {
  return ajax({ url: `/system/dictionary/update`, method: "post", data });
}

/*
 *@序号:262
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:查询（返回list）(https://apaas-yapi.midea.com/project/7260/interface/api/745762)
 */

export function systemDictionaryChildrensList(data) {
  return ajax({
    url: `/system/dictionary/childrensList`,
    method: "post",
    data,
  });
}

/*
 *@序号:263
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:查询（返回list）(https://apaas-yapi.midea.com/project/7260/interface/api/745765)
 */

export function systemDictionaryList(data) {
  return ajax({ url: `/system/dictionary/list`, method: "post", data });
}

/*
 *@序号:264
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745768)
 */

export function systemDictionarybyIDGet(id) {
  return ajax({ url: `/system/dictionary/${id}/get`, method: "post" });
}

/*
 *@序号:265
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745771)
 */

export function systemDictionaryPagination(data) {
  return ajax({ url: `/system/dictionary/pagination`, method: "post", data });
}

/*
 *@序号:266
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:逻辑删除(https://apaas-yapi.midea.com/project/7260/interface/api/745774)
 */

export function systemDictionarybyIDLogicDelete(id) {
  return ajax({ url: `/system/dictionary/${id}/logicDelete`, method: "post" });
}

/*
 *@序号:267
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:禁用(https://apaas-yapi.midea.com/project/7260/interface/api/745777)
 */

export function systemDictionarybyIDDisable(id) {
  return ajax({ url: `/system/dictionary/${id}/disable`, method: "post" });
}

/*
 *@序号:268
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138809)
 *@菜单名称:启用(https://apaas-yapi.midea.com/project/7260/interface/api/745780)
 */

export function systemDictionarybyIDEnable(id) {
  return ajax({ url: `/system/dictionary/${id}/enable`, method: "post" });
}

/*
 *@序号:269
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:insertSystemDate(https://apaas-yapi.midea.com/project/7260/interface/api/745783)
 */

export function systemSystemDateAdd(data) {
  return ajax({ url: `/system/systemDate/add`, method: "post", data });
}

/*
 *@序号:270
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:查询 [运营端][系统模块][节假日](https://apaas-yapi.midea.com/project/7260/interface/api/745786)
 */

export function systemSystemDatebyIDGet(id) {
  return ajax({ url: `/system/systemDate/${id}/get`, method: "post" });
}

/*
 *@序号:271
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:修改 [运营端][系统模块][节假日](https://apaas-yapi.midea.com/project/7260/interface/api/745789)
 */

export function systemSystemDateUpdate(data) {
  return ajax({ url: `/system/systemDate/update`, method: "post", data });
}

/*
 *@序号:272
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:取消 [运营端][系统模块][节假日](https://apaas-yapi.midea.com/project/7260/interface/api/745792)
 */

export function systemSystemDateSetWeekDay(data) {
  return ajax({ url: `/system/systemDate/setWeekDay`, method: "post", data });
}

/*
 *@序号:273
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745795)
 */

export function systemSystemDateList(data) {
  return ajax({ url: `/system/systemDate/list`, method: "post", data });
}

/*
 *@序号:274
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745798)
 */

export function systemSystemDatePagination(data) {
  return ajax({ url: `/system/systemDate/pagination`, method: "post", data });
}

/*
 *@序号:275
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138811)
 *@菜单名称:查询某个节假日后的第一个工作日(https://apaas-yapi.midea.com/project/7260/interface/api/745801)
 */

export function systemSystemDateGetNextWeekDay(data) {
  return ajax({
    url: `/system/systemDate/getNextWeekDay`,
    method: "post",
    data,
  });
}

/*
 *@序号:276
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:产品配置（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/745804)
 */

export function productConfSelectPage(data) {
  return ajax({ url: `/productConf/selectPage`, method: "post", data });
}

/*
 *@序号:277
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:selectList(https://apaas-yapi.midea.com/project/7260/interface/api/745807)
 */

export function productConfSelectList(data) {
  return ajax({ url: `/productConf/selectList`, method: "post", data });
}

/*
 *@序号:278
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:产品配置-新增(https://apaas-yapi.midea.com/project/7260/interface/api/745810)
 */

export function productConfAddItem(data) {
  return ajax({ url: `/productConf/addItem`, method: "post", data });
}

/*
 *@序号:279
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:产品配置-更新(https://apaas-yapi.midea.com/project/7260/interface/api/745813)
 */

export function productConfUpdateItem(data) {
  return ajax({ url: `/productConf/updateItem`, method: "post", data });
}

/*
 *@序号:280
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138813)
 *@菜单名称:selectById(https://apaas-yapi.midea.com/project/7260/interface/api/745816)
 */

export function productConfSelectById(data) {
  return ajax({ url: `/productConf/selectById`, method: "post", data });
}

/*
 *@序号:281
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查出区域及相关客服组长信息(https://apaas-yapi.midea.com/project/7260/interface/api/745819)
 */

export function systemQueryArea(params) {
  return ajax({ url: `/system/query/area`, method: "get", params });
}

/*
 *@序号:282
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:更新区域客服组长信息(https://apaas-yapi.midea.com/project/7260/interface/api/745822)
 */

export function systemConfigArea(data) {
  return ajax({ url: `/system/config/area`, method: "post", data });
}

/*
 *@序号:283
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查出可以分配的客户经理(https://apaas-yapi.midea.com/project/7260/interface/api/745825)
 */

export function systemQueryManagerList(params) {
  return ajax({ url: `/system/query/manager/list`, method: "get", params });
}

/*
 *@序号:284
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查询所有客户经理(https://apaas-yapi.midea.com/project/7260/interface/api/745828)
 */

export function systemQueryAllManagerList(params) {
  return ajax({ url: `/system/query/all/manager/list`, method: "get", params });
}

/*
 *@序号:285
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:mgrBatchUpdate(https://apaas-yapi.midea.com/project/7260/interface/api/745831)
 */

export function systemManagerBatchupdate(data) {
  return ajax({ url: `/system/manager/batchupdate`, method: "post", data });
}

/*
 *@序号:286
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:updateEntByCusCode(https://apaas-yapi.midea.com/project/7260/interface/api/745834)
 */

export function systemManagerSingleupdate(data) {
  return ajax({ url: `/system/manager/singleupdate`, method: "post", data });
}

/*
 *@序号:287
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:查询未分配客户经理的企业(https://apaas-yapi.midea.com/project/7260/interface/api/745837)
 */

export function systemQueryManagerUnallocated(data) {
  return ajax({
    url: `/system/query/manager/unallocated`,
    method: "post",
    data,
  });
}

/*
 *@序号:288
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:条件查询已分配客户经理的企业(https://apaas-yapi.midea.com/project/7260/interface/api/745840)
 */

export function systemQueryManagerEnt(data) {
  return ajax({ url: `/system/query/manager/ent`, method: "post", data });
}

/*
 *@序号:289
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:queryNomaskDetail(https://apaas-yapi.midea.com/project/7260/interface/api/745843)
 */

export function systemQueryNomaskDetail(data) {
  return ajax({ url: `/system/query/nomask/detail`, method: "post", data });
}

/*
 *@序号:290
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:客户经理管理-未分配客户经理的企业列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/745846)
 */

export function systemExportManagerAll(data) {
  return ajax({ url: `/system/export/manager/all`, method: "post", data });
}

/*
 *@序号:291
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138815)
 *@菜单名称:客户经理管理-已分配客户经理的企业列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/745849)
 */

export function systemExportManagerAllocated(data) {
  return ajax({
    url: `/system/export/manager/allocated`,
    method: "post",
    data,
  });
}

/*
 *@序号:292
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:queryPersonProcess(https://apaas-yapi.midea.com/project/7260/interface/api/745852)
 */

export function personQuery(data) {
  return ajax({ url: `/person/query`, method: "post", data });
}

/*
 *@序号:293
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:recall(https://apaas-yapi.midea.com/project/7260/interface/api/745855)
 */

export function personRecall(params) {
  return ajax({ url: `/person/recall`, method: "get", params });
}

/*
 *@序号:294
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:refuse(https://apaas-yapi.midea.com/project/7260/interface/api/745858)
 */

export function personRefuse(params) {
  return ajax({ url: `/person/refuse`, method: "get", params });
}

/*
 *@序号:295
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:区块链确认成功(https://apaas-yapi.midea.com/project/7260/interface/api/745861)
 */

export function personConfirmSuccess(params) {
  return ajax({ url: `/person/confirm/success`, method: "get", params });
}

/*
 *@序号:296
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:融资受理（发送融资端）(https://apaas-yapi.midea.com/project/7260/interface/api/745864)
 */

export function personConfirmRefuse(params) {
  return ajax({ url: `/person/confirm/refuse`, method: "get", params });
}

/*
 *@序号:297
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138817)
 *@菜单名称:融资受理（发送融资端）(https://apaas-yapi.midea.com/project/7260/interface/api/745867)
 */

export function personSellConfirmSucc(params) {
  return ajax({ url: `/person/sell/confirm/succ`, method: "get", params });
}

/*
 *@序号:298
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138819)
 *@菜单名称:importUkeySignRecord(https://apaas-yapi.midea.com/project/7260/interface/api/745870)
 */

export function ukeysignImport(data) {
  return ajax({ url: `/ukeysign/import`, method: "post", data });
}

/*
 *@序号:299
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:insertMessageTemplate(https://apaas-yapi.midea.com/project/7260/interface/api/745873)
 */

export function systemMessageTemplateAdd(data) {
  return ajax({ url: `/system/messageTemplate/add`, method: "post", data });
}

/*
 *@序号:300
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:删除(https://apaas-yapi.midea.com/project/7260/interface/api/745876)
 */

export function systemMessageTemplatebyIDDel(id) {
  return ajax({ url: `/system/messageTemplate/${id}/del`, method: "post" });
}

/*
 *@序号:301
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:修改(https://apaas-yapi.midea.com/project/7260/interface/api/745879)
 */

export function systemMessageTemplateUpdate(data) {
  return ajax({ url: `/system/messageTemplate/update`, method: "post", data });
}

/*
 *@序号:302
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:查询(https://apaas-yapi.midea.com/project/7260/interface/api/745882)
 */

export function systemMessageTemplateList(data) {
  return ajax({ url: `/system/messageTemplate/list`, method: "post", data });
}

/*
 *@序号:303
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745885)
 */

export function systemMessageTemplatebyIDGet(id) {
  return ajax({ url: `/system/messageTemplate/${id}/get`, method: "post" });
}

/*
 *@序号:304
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:查询（详情）(https://apaas-yapi.midea.com/project/7260/interface/api/745888)
 */

export function systemMessageTemplatebyIDQueryDetail(id) {
  return ajax({
    url: `/system/messageTemplate/${id}/queryDetail`,
    method: "post",
  });
}

/*
 *@序号:305
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138821)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/745891)
 */

export function systemMessageTemplatePagination(data) {
  return ajax({
    url: `/system/messageTemplate/pagination`,
    method: "post",
    data,
  });
}

/*
 *@序号:306
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景存证记录查询(https://apaas-yapi.midea.com/project/7260/interface/api/745894)
 */

export function eviSceneQueryPage(data) {
  return ajax({ url: `/evi/scene/query/page`, method: "post", data });
}

/*
 *@序号:307
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景存证证书下载(https://apaas-yapi.midea.com/project/7260/interface/api/745897)
 */

export function eviDownEvidence(params) {
  return ajax({ url: `/evi/down/evidence`, method: "get", params });
}

/*
 *@序号:308
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景详情(https://apaas-yapi.midea.com/project/7260/interface/api/745900)
 */

export function eviSceneDetail(params) {
  return ajax({ url: `/evi/scene/detail`, method: "get", params });
}

/*
 *@序号:309
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138823)
 *@菜单名称:场景出证重试(https://apaas-yapi.midea.com/project/7260/interface/api/745903)
 */

export function eviSceneRetry(params) {
  return ajax({ url: `/evi/scene/retry`, method: "get", params });
}

/*
 *@序号:310
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:收/付金额统计(https://apaas-yapi.midea.com/project/7260/interface/api/745906)
 */

export function tradeTransactionIssueAmountCount(data) {
  return ajax({
    url: `/trade/transaction/issue/amount/count`,
    method: "post",
    data,
  });
}

/*
 *@序号:311
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:收/付金额统计(https://apaas-yapi.midea.com/project/7260/interface/api/745909)
 */

export function tradeTransactionBillAmountCount(data) {
  return ajax({
    url: `/trade/transaction/bill/amount/count`,
    method: "post",
    data,
  });
}

/*
 *@序号:312
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:票据详情查看(https://apaas-yapi.midea.com/project/7260/interface/api/745912)
 */

export function tradeTransactionBillDetail(data) {
  return ajax({ url: `/trade/transaction/bill/detail`, method: "post", data });
}

/*
 *@序号:313
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:票据凭证打印(支持批量和单个打印)(https://apaas-yapi.midea.com/project/7260/interface/api/745915)
 */

export function tradeTransactionBillCertPrint(data) {
  return ajax({
    url: `/trade/transaction/bill/cert/print`,
    method: "post",
    data,
  });
}

/*
 *@序号:314
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:美的付付款单重发(https://apaas-yapi.midea.com/project/7260/interface/api/745918)
 */

export function tradeTransactionCreditResend(data) {
  return ajax({
    url: `/trade/transaction/credit/resend`,
    method: "post",
    data,
  });
}

/*
 *@序号:315
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:美易单到期兑付查询(https://apaas-yapi.midea.com/project/7260/interface/api/745921)
 */

export function tradeTransactionBillDueQuery(data) {
  return ajax({
    url: `/trade/transaction/bill/due/query`,
    method: "post",
    data,
  });
}

/*
 *@序号:316
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138825)
 *@菜单名称:美易单到期兑付查询导出(https://apaas-yapi.midea.com/project/7260/interface/api/745924)
 */

export function tradeTransactionBillDueExport(data) {
  return ajax({
    url: `/trade/transaction/bill/due/export`,
    method: "post",
    data,
  });
}

/*
 *@序号:317
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138827)
 *@菜单名称:运营平台网络测试(https://apaas-yapi.midea.com/project/7260/interface/api/745927)
 */

export function testCouponIopNetworkTeest(params) {
  return ajax({ url: `/test/coupon/iopNetworkTeest`, method: "get", params });
}

/*
 *@序号:318
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:获取系统当前日期字符串(https://apaas-yapi.midea.com/project/7260/interface/api/745930)
 */

export function transactionIssueGetDate(params) {
  return ajax({ url: `/transaction/issue/get/date`, method: "get", params });
}

/*
 *@序号:319
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，获取票据编号(https://apaas-yapi.midea.com/project/7260/interface/api/745933)
 */

export function transactionIssueGetCode(params) {
  return ajax({ url: `/transaction/issue/get/code`, method: "get", params });
}

/*
 *@序号:320
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，搜索企业名称(https://apaas-yapi.midea.com/project/7260/interface/api/745936)
 */

export function transactionIssueGetEnterprise(params) {
  return ajax({
    url: `/transaction/issue/get/enterprise`,
    method: "get",
    params,
  });
}

/*
 *@序号:321
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，根据供应链企业名称，查找系统内是否存在(https://apaas-yapi.midea.com/project/7260/interface/api/745939)
 */

export function transactionIssueGetSupplyEnterprise(params) {
  return ajax({
    url: `/transaction/issue/get/supplyEnterprise`,
    method: "get",
    params,
  });
}

/*
 *@序号:322
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，搜索OU单位(https://apaas-yapi.midea.com/project/7260/interface/api/745942)
 */

export function transactionIssueGetOu(params) {
  return ajax({ url: `/transaction/issue/get/ou`, method: "get", params });
}

/*
 *@序号:323
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请，搜索OU单位有效的付款账户(https://apaas-yapi.midea.com/project/7260/interface/api/745945)
 */

export function transactionIssueGetOuAccount(params) {
  return ajax({
    url: `/transaction/issue/get/ou/account`,
    method: "get",
    params,
  });
}

/*
 *@序号:324
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票申请(https://apaas-yapi.midea.com/project/7260/interface/api/745948)
 */

export function transactionIssueAdd(data) {
  return ajax({ url: `/transaction/issue/add`, method: "post", data });
}

/*
 *@序号:325
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票复核查询(https://apaas-yapi.midea.com/project/7260/interface/api/745951)
 */

export function transactionIssueSelectReview(data) {
  return ajax({
    url: `/transaction/issue/select/review`,
    method: "post",
    data,
  });
}

/*
 *@序号:326
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票复核，查询开票待复核票据详情(https://apaas-yapi.midea.com/project/7260/interface/api/745954)
 */

export function transactionIssueSelectReviewDetailbyTransferId(transferid) {
  return ajax({
    url: `/transaction/issue/select/review/detail/${transferid}`,
    method: "get",
  });
}

/*
 *@序号:327
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:汇票签收查询(https://apaas-yapi.midea.com/project/7260/interface/api/745957)
 */

export function transactionIssueSelectSign(data) {
  return ajax({ url: `/transaction/issue/select/sign`, method: "post", data });
}

/*
 *@序号:328
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:汇票签收查询详情(https://apaas-yapi.midea.com/project/7260/interface/api/745960)
 */

export function transactionIssueSelectSignDetailbyTransferDetailId(
  transferdetailid,
) {
  return ajax({
    url: `/transaction/issue/select/sign/detail/${transferdetailid}`,
    method: "get",
  });
}

/*
 *@序号:329
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:撤销操作(https://apaas-yapi.midea.com/project/7260/interface/api/745963)
 */

export function transactionIssueUpdateWithdrawn(data) {
  return ajax({
    url: `/transaction/issue/update/withdrawn`,
    method: "post",
    data,
  });
}

/*
 *@序号:330
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:复核查询，查询复核记录(https://apaas-yapi.midea.com/project/7260/interface/api/745966)
 */

export function transactionIssueSelectReviewRecord(data) {
  return ajax({
    url: `/transaction/issue/select/review/record`,
    method: "post",
    data,
  });
}

/*
 *@序号:331
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:复核查询，查询复核记录详情(https://apaas-yapi.midea.com/project/7260/interface/api/745969)
 */

export function transactionIssueSelectReviewRecordDetailTransferId(params) {
  return ajax({
    url: `/transaction/issue/select/review/record/detail/transferId`,
    method: "get",
    params,
  });
}

/*
 *@序号:332
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:checkImportBill(https://apaas-yapi.midea.com/project/7260/interface/api/745972)
 */

export function transactionIssueCheckBatch(data) {
  return ajax({ url: `/transaction/issue/checkBatch`, method: "post", data });
}

/*
 *@序号:333
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:commitBatchBill(https://apaas-yapi.midea.com/project/7260/interface/api/745975)
 */

export function transactionIssueAddBatch(data) {
  return ajax({ url: `/transaction/issue/addBatch`, method: "post", data });
}

/*
 *@序号:334
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:作废(拒签作废、复核驳回作废)(https://apaas-yapi.midea.com/project/7260/interface/api/745978)
 */

export function transactionIssueUpdateTovoid(data) {
  return ajax({
    url: `/transaction/issue/update/tovoid`,
    method: "post",
    data,
  });
}

/*
 *@序号:335
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开票列表查询 美易单开立(https://apaas-yapi.midea.com/project/7260/interface/api/745981)
 */

export function transactionIssueSelectOpenbill(params) {
  return ajax({
    url: `/transaction/issue/select/openbill`,
    method: "get",
    params,
  });
}

/*
 *@序号:336
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:exportQueryPaginationRefuse(https://apaas-yapi.midea.com/project/7260/interface/api/745984)
 */

export function transactionIssueExportOpenListRefuse(data) {
  return ajax({
    url: `/transaction/issue/export/openList/refuse`,
    method: "post",
    data,
  });
}

/*
 *@序号:337
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:exportQueryPagination(https://apaas-yapi.midea.com/project/7260/interface/api/745987)
 */

export function transactionIssueExportOpenList(data) {
  return ajax({
    url: `/transaction/issue/export/openList`,
    method: "post",
    data,
  });
}

/*
 *@序号:338
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/745990)
 */

export function transactionIssueSelectOpenebill(params) {
  return ajax({
    url: `/transaction/issue/select/openebill`,
    method: "get",
    params,
  });
}

/*
 *@序号:339
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单列表查询导出(https://apaas-yapi.midea.com/project/7260/interface/api/745993)
 */

export function transactionIssueExportOpenBillList(data) {
  return ajax({
    url: `/transaction/issue/export/openBillList`,
    method: "post",
    data,
  });
}

/*
 *@序号:340
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:人工处理查询(https://apaas-yapi.midea.com/project/7260/interface/api/745996)
 */

export function transactionIssueSelectGfpPersonProcess(params) {
  return ajax({
    url: `/transaction/issue/select/gfp/person/process`,
    method: "get",
    params,
  });
}

/*
 *@序号:341
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单指令处理-人工重试开票(https://apaas-yapi.midea.com/project/7260/interface/api/745999)
 */

export function transactionIssueResendGfpBill(data) {
  return ajax({
    url: `/transaction/issue/resend/gfp/bill`,
    method: "post",
    data,
  });
}

/*
 *@序号:342
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:开单指令处理-人工确认失败(https://apaas-yapi.midea.com/project/7260/interface/api/746002)
 */

export function transactionIssueConfirmGfpFail(data) {
  return ajax({
    url: `/transaction/issue/confirm/gfp/fail`,
    method: "post",
    data,
  });
}

/*
 *@序号:343
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138829)
 *@菜单名称:人工处理查询详情(https://apaas-yapi.midea.com/project/7260/interface/api/746005)
 */

export function transactionIssueSelectGfpBillDetail(params) {
  return ajax({
    url: `/transaction/issue/select/gfp/bill/detail`,
    method: "get",
    params,
  });
}

/*
 *@序号:344
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划查询(https://apaas-yapi.midea.com/project/7260/interface/api/746008)
 */

export function payplanCreditQuery(data) {
  return ajax({ url: `/payplan/credit/query`, method: "post", data });
}

/*
 *@序号:345
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划失败(https://apaas-yapi.midea.com/project/7260/interface/api/746011)
 */

export function payplanCreditQueryFail(data) {
  return ajax({ url: `/payplan/credit/queryFail`, method: "post", data });
}

/*
 *@序号:346
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:失败付款单重发申请(https://apaas-yapi.midea.com/project/7260/interface/api/746014)
 */

export function payplanCreditResendFailRequest(data) {
  return ajax({
    url: `/payplan/credit/resendFailRequest`,
    method: "post",
    data,
  });
}

/*
 *@序号:347
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-付款单明细(https://apaas-yapi.midea.com/project/7260/interface/api/746017)
 */

export function payplanCreditDetail(data) {
  return ajax({ url: `/payplan/credit/detail`, method: "post", data });
}

/*
 *@序号:348
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-付款单兑付子计划列表(https://apaas-yapi.midea.com/project/7260/interface/api/746020)
 */

export function payplanCreditSubPlanQuery(data) {
  return ajax({ url: `/payplan/credit/subPlan/query`, method: "post", data });
}

/*
 *@序号:349
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划查询(https://apaas-yapi.midea.com/project/7260/interface/api/746023)
 */

export function payplanPlanWaitauthQuery(data) {
  return ajax({ url: `/payplan/plan/waitauth/query`, method: "post", data });
}

/*
 *@序号:350
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划查询-详情(https://apaas-yapi.midea.com/project/7260/interface/api/746026)
 */

export function payplanPlanWaitauthDetail(data) {
  return ajax({ url: `/payplan/plan/waitauth/detail`, method: "post", data });
}

/*
 *@序号:351
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划查询-详情-子计划列表(https://apaas-yapi.midea.com/project/7260/interface/api/746029)
 */

export function payplanSubPlanWaitauthQuery(data) {
  return ajax({ url: `/payplan/subPlan/waitauth/query`, method: "post", data });
}

/*
 *@序号:352
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:待审批兑付计划审批(https://apaas-yapi.midea.com/project/7260/interface/api/746032)
 */

export function payplanPlanAuth(data) {
  return ajax({ url: `/payplan/plan/auth`, method: "post", data });
}

/*
 *@序号:353
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:农行接口-查询兑付结果(https://apaas-yapi.midea.com/project/7260/interface/api/746035)
 */

export function payplanDuepayResultQuery(data) {
  return ajax({ url: `/payplan/duepay/result/query`, method: "post", data });
}

/*
 *@序号:354
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:提交新增确认兑付失败申请(https://apaas-yapi.midea.com/project/7260/interface/api/746038)
 */

export function payplanDuepayConfirmFail(data) {
  return ajax({ url: `/payplan/duepay/confirm/fail`, method: "post", data });
}

/*
 *@序号:355
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:根据美易单号查询状态为成功的兑付子计划(https://apaas-yapi.midea.com/project/7260/interface/api/746041)
 */

export function payplanDuepaySelectSubPlan(data) {
  return ajax({ url: `/payplan/duepay/select/subPlan`, method: "post", data });
}

/*
 *@序号:356
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:duePayTest(https://apaas-yapi.midea.com/project/7260/interface/api/746044)
 */

export function payplanDuePayGenerateSceneNode(data) {
  return ajax({
    url: `/payplan/duePay/generateSceneNode`,
    method: "post",
    data,
  });
}

/*
 *@序号:357
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下兑付流程重复发起检查(https://apaas-yapi.midea.com/project/7260/interface/api/746047)
 */

export function payplanCreditOutlineCheckdoing(data) {
  return ajax({
    url: `/payplan/credit/outline/checkdoing`,
    method: "post",
    data,
  });
}

/*
 *@序号:358
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下兑付单详情(https://apaas-yapi.midea.com/project/7260/interface/api/746050)
 */

export function payplanCreditOutlineDetail(data) {
  return ajax({ url: `/payplan/credit/outline/detail`, method: "post", data });
}

/*
 *@序号:359
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下兑付单提交(https://apaas-yapi.midea.com/project/7260/interface/api/746053)
 */

export function payplanCreditOutlineSubmit(data) {
  return ajax({ url: `/payplan/credit/outline/submit`, method: "post", data });
}

/*
 *@序号:360
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下付款单审批(https://apaas-yapi.midea.com/project/7260/interface/api/746056)
 */

export function payplanCreditOutlineReview(data) {
  return ajax({ url: `/payplan/credit/outline/review`, method: "post", data });
}

/*
 *@序号:361
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:兑付计划-线下付款单待审列表(https://apaas-yapi.midea.com/project/7260/interface/api/746059)
 */

export function payplanCreditOutlineReviewList(data) {
  return ajax({
    url: `/payplan/credit/outline/review/list`,
    method: "post",
    data,
  });
}

/*
 *@序号:362
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138831)
 *@菜单名称:提交确认异常申请(https://apaas-yapi.midea.com/project/7260/interface/api/746062)
 */

export function payplanDuepayConfirmFailSubmit(data) {
  return ajax({
    url: `/payplan/duepay/confirm/fail/submit`,
    method: "post",
    data,
  });
}

/*
 *@序号:363
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询可用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746065)
 */

export function invoiceQueryAva(data) {
  return ajax({ url: `/invoice/queryAva`, method: "post", data });
}

/*
 *@序号:364
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询可用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746068)
 */

export function invoiceExportQueryAva(params) {
  return ajax({ url: `/invoice/export/queryAva`, method: "get", params });
}

/*
 *@序号:365
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询已用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746071)
 */

export function invoiceQueryUsed(data) {
  return ajax({ url: `/invoice/queryUsed`, method: "post", data });
}

/*
 *@序号:366
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:查询可用发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746074)
 */

export function invoiceExportQueryUsed(params) {
  return ajax({ url: `/invoice/export/queryUsed`, method: "get", params });
}

/*
 *@序号:367
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:重验发票(https://apaas-yapi.midea.com/project/7260/interface/api/746077)
 */

export function invoiceRecheckInvoice(params) {
  return ajax({ url: `/invoice/recheck/invoice`, method: "get", params });
}

/*
 *@序号:368
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:同步发票验真结果(https://apaas-yapi.midea.com/project/7260/interface/api/746080)
 */

export function invoiceSyncVerifyData(data) {
  return ajax({ url: `/invoice/syncVerifyData`, method: "post", data });
}

/*
 *@序号:369
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138833)
 *@菜单名称:更新已验真发票发票结果为未校验(https://apaas-yapi.midea.com/project/7260/interface/api/746083)
 */

export function invoiceUpdateCheckResult(data) {
  return ajax({ url: `/invoice/update/check/result`, method: "post", data });
}

/*
 *@序号:370
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:queryOpenbillSq(https://apaas-yapi.midea.com/project/7260/interface/api/746086)
 */

export function sqBillOpenQuery(data) {
  return ajax({ url: `/sq/bill/open/query`, method: "post", data });
}

/*
 *@序号:371
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:queryOpenbillSqDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746089)
 */

export function sqBillOpenQueryDetail(data) {
  return ajax({ url: `/sq/bill/open/query/detail`, method: "post", data });
}

/*
 *@序号:372
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:开单指令待审核查询(https://apaas-yapi.midea.com/project/7260/interface/api/746092)
 */

export function sqBillOpenAuthQuery(data) {
  return ajax({ url: `/sq/bill/open/auth/query`, method: "post", data });
}

/*
 *@序号:373
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:开单指令待审核查询(https://apaas-yapi.midea.com/project/7260/interface/api/746095)
 */

export function sqBillOpenAuthDetail(data) {
  return ajax({ url: `/sq/bill/open/auth/detail`, method: "post", data });
}

/*
 *@序号:374
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:处理开单指令审核复核。(https://apaas-yapi.midea.com/project/7260/interface/api/746098)
 */

export function sqBillOpenAuthReview(data) {
  return ajax({ url: `/sq/bill/open/auth/review`, method: "post", data });
}

/*
 *@序号:375
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:查找可用于进行退汇匹配的流水</br>(https://apaas-yapi.midea.com/project/7260/interface/api/746101)
 */

export function reexchangeSelectWaitMatched(data) {
  return ajax({ url: `/reexchange/select/waitMatched`, method: "post", data });
}

/*
 *@序号:376
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:查询退汇流水列表-分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746104)
 */

export function reexchangeSelectPageList(data) {
  return ajax({ url: `/reexchange/select/pageList`, method: "post", data });
}

/*
 *@序号:377
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:退汇流水-撤回(https://apaas-yapi.midea.com/project/7260/interface/api/746107)
 */

export function reexchangeButtonWithdraw(data) {
  return ajax({ url: `/reexchange/button/withdraw`, method: "post", data });
}

/*
 *@序号:378
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:退汇流水-解绑(https://apaas-yapi.midea.com/project/7260/interface/api/746110)
 */

export function reexchangeButtonUnbind(data) {
  return ajax({ url: `/reexchange/button/unbind`, method: "post", data });
}

/*
 *@序号:379
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138837)
 *@菜单名称:退汇流水-重发ERP(https://apaas-yapi.midea.com/project/7260/interface/api/746113)
 */

export function reexchangeButtonResend(data) {
  return ajax({ url: `/reexchange/button/resend`, method: "post", data });
}

/*
 *@序号:380
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:查询到期兑付维护列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746116)
 */

export function duepayOrderSelectDuePage(data) {
  return ajax({ url: `/duepayOrder/selectDuePage`, method: "post", data });
}

/*
 *@序号:381
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-审批通过列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746119)
 */

export function duepayOrderSelectPassPage(data) {
  return ajax({ url: `/duepayOrder/selectPassPage`, method: "post", data });
}

/*
 *@序号:382
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-待审批查询列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746122)
 */

export function duepayOrderSelectReviewPage(data) {
  return ajax({ url: `/duepayOrder/selectReviewPage`, method: "post", data });
}

/*
 *@序号:383
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-发起变更(https://apaas-yapi.midea.com/project/7260/interface/api/746125)
 */

export function duepayOrderAddDuepayOrderProcess(data) {
  return ajax({
    url: `/duepayOrder/add/duepayOrderProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:384
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-审批流程：pass或reject操作(https://apaas-yapi.midea.com/project/7260/interface/api/746128)
 */

export function duepayOrderReviewDuepayOrderProcess(data) {
  return ajax({
    url: `/duepayOrder/review/duepayOrderProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:385
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138839)
 *@菜单名称:兑付指令维护-查看变更明细(https://apaas-yapi.midea.com/project/7260/interface/api/746131)
 */

export function duepayOrderQueryProcessDetail(data) {
  return ajax({
    url: `/duepayOrder/query/processDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:386
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:融资兑付通知查询(https://apaas-yapi.midea.com/project/7260/interface/api/746134)
 */

export function financeRecoNoticeQueryPage(data) {
  return ajax({ url: `/finance/reco/notice/queryPage`, method: "post", data });
}

/*
 *@序号:387
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:融资兑付通知导出(https://apaas-yapi.midea.com/project/7260/interface/api/746137)
 */

export function financeRecoNoticeExport(data) {
  return ajax({ url: `/finance/reco/notice/export`, method: "post", data });
}

/*
 *@序号:388
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:人工通知(https://apaas-yapi.midea.com/project/7260/interface/api/746140)
 */

export function financeRecoNotice(data) {
  return ajax({ url: `/finance/reco/notice`, method: "post", data });
}

/*
 *@序号:389
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:确认成功(https://apaas-yapi.midea.com/project/7260/interface/api/746143)
 */

export function financeRecoConfig(data) {
  return ajax({ url: `/finance/reco/config`, method: "post", data });
}

/*
 *@序号:390
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:人工通知(https://apaas-yapi.midea.com/project/7260/interface/api/746146)
 */

export function financeRecoNoticeInfore(data) {
  return ajax({ url: `/finance/reco/noticeInfore`, method: "post", data });
}

/*
 *@序号:391
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:确认成功(https://apaas-yapi.midea.com/project/7260/interface/api/746149)
 */

export function financeRecoConfigInfore(data) {
  return ajax({ url: `/finance/reco/configInfore`, method: "post", data });
}

/*
 *@序号:392
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:queryOpenbillSq(https://apaas-yapi.midea.com/project/7260/interface/api/746152)
 */

export function sqBillCancelQuery(data) {
  return ajax({ url: `/sq/bill/cancel/query`, method: "post", data });
}

/*
 *@序号:393
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138835)
 *@菜单名称:人工重新撤单(https://apaas-yapi.midea.com/project/7260/interface/api/746155)
 */

export function sqBillCancelRetryGfpBill(data) {
  return ajax({ url: `/sq/bill/cancel/retry/gfp/bill`, method: "post", data });
}

/*
 *@序号:394
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:新增 融资机构申请(https://apaas-yapi.midea.com/project/7260/interface/api/746158)
 */

export function financeOrganAdd(data) {
  return ajax({ url: `/finance/organ/add`, method: "post", data });
}

/*
 *@序号:395
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:融资机构申请/变更 查询页面(https://apaas-yapi.midea.com/project/7260/interface/api/746161)
 */

export function financeOrganSelect(data) {
  return ajax({ url: `/finance/organ/1/select`, method: "post", data });
}

/*
 *@序号:396
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询融资机构详情(https://apaas-yapi.midea.com/project/7260/interface/api/746164)
 */

export function financeOrganDetail(params) {
  return ajax({ url: `/finance/organ/detail`, method: "get", params });
}

/*
 *@序号:397
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:编辑 (保存/提交) reviewState in (1001,1002)(https://apaas-yapi.midea.com/project/7260/interface/api/746167)
 */

export function financeOrganUpdate(data) {
  return ajax({ url: `/finance/organ/update`, method: "post", data });
}

/*
 *@序号:398
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:changeFinanceOrgan(https://apaas-yapi.midea.com/project/7260/interface/api/746170)
 */

export function financeOrganChange(data) {
  return ajax({ url: `/finance/organ/change`, method: "post", data });
}

/*
 *@序号:399
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:复核操作  通过/驳回(https://apaas-yapi.midea.com/project/7260/interface/api/746173)
 */

export function financeOrganReview(data) {
  return ajax({ url: `/finance/organ/review`, method: "post", data });
}

/*
 *@序号:400
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:deleteFinanceOrgan(https://apaas-yapi.midea.com/project/7260/interface/api/746176)
 */

export function financeOrganDelete(params) {
  return ajax({ url: `/finance/organ/delete`, method: "get", params });
}

/*
 *@序号:401
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:selectOrganReview(https://apaas-yapi.midea.com/project/7260/interface/api/746179)
 */

export function financeOrganReviewSelect(data) {
  return ajax({ url: `/finance/organ/review/select`, method: "post", data });
}

/*
 *@序号:402
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:selectOrganPass(https://apaas-yapi.midea.com/project/7260/interface/api/746182)
 */

export function financeOrganPassSelect(data) {
  return ajax({ url: `/finance/organ/pass/select`, method: "post", data });
}

/*
 *@序号:403
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:exportOrganPass(https://apaas-yapi.midea.com/project/7260/interface/api/746185)
 */

export function financeOrganPassExport(params) {
  return ajax({ url: `/finance/organ/pass/export`, method: "get", params });
}

/*
 *@序号:404
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询所有审核通过的的融资机构信息(https://apaas-yapi.midea.com/project/7260/interface/api/746188)
 */

export function financeFindAll(params) {
  return ajax({ url: `/finance/find/all`, method: "get", params });
}

/*
 *@序号:405
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:资方组织编辑(https://apaas-yapi.midea.com/project/7260/interface/api/746191)
 */

export function financeFinanceEdit(data) {
  return ajax({ url: `/finance/finance/edit`, method: "post", data });
}

/*
 *@序号:406
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询资方组织列表(https://apaas-yapi.midea.com/project/7260/interface/api/746194)
 */

export function financeFinancesFind(data) {
  return ajax({ url: `/finance/finances/find`, method: "post", data });
}

/*
 *@序号:407
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:返回给前端的资方组织列表（只有手工导入，无接口同步）(https://apaas-yapi.midea.com/project/7260/interface/api/746197)
 */

export function financeFinancesManualImport(data) {
  return ajax({ url: `/finance/finances/manualImport`, method: "post", data });
}

/*
 *@序号:408
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询资方组织下的融资机构(https://apaas-yapi.midea.com/project/7260/interface/api/746200)
 */

export function financeOrgFindbyFin(data) {
  return ajax({ url: `/finance/org/findbyFin`, method: "post", data });
}

/*
 *@序号:409
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:查询资方组织下的融资机构(https://apaas-yapi.midea.com/project/7260/interface/api/746203)
 */

export function financeOrgFindbyFinanceCode(data) {
  return ajax({ url: `/finance/org/findbyFinanceCode`, method: "post", data });
}

/*
 *@序号:410
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:findAllFinance(https://apaas-yapi.midea.com/project/7260/interface/api/746206)
 */

export function financeOrgFinAllFin(data) {
  return ajax({ url: `/finance/org/finAllFin`, method: "post", data });
}

/*
 *@序号:411
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:用户查询（身份证类型，身份证）(https://apaas-yapi.midea.com/project/7260/interface/api/746209)
 */

export function financeOrganUserQuery(data) {
  return ajax({ url: `/finance/organ/user/query`, method: "post", data });
}

/*
 *@序号:412
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:getUserName(https://apaas-yapi.midea.com/project/7260/interface/api/746212)
 */

export function financeOrganUsernameGet(data) {
  return ajax({ url: `/finance/organ/username/get`, method: "post", data });
}

/*
 *@序号:413
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138843)
 *@菜单名称:融资机构新增操作员(https://apaas-yapi.midea.com/project/7260/interface/api/746215)
 */

export function financeOrganSaveUser(data) {
  return ajax({ url: `/finance/organ/save/user`, method: "post", data });
}

/*
 *@序号:414
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具列表(https://apaas-yapi.midea.com/project/7260/interface/api/746218)
 */

export function invoiceApplyQueryFin(data) {
  return ajax({ url: `/invoice/apply/query/fin`, method: "post", data });
}

/*
 *@序号:415
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具申请发票列表(https://apaas-yapi.midea.com/project/7260/interface/api/746221)
 */

export function invoiceApplyQueryDocFin(data) {
  return ajax({ url: `/invoice/apply/query/doc/fin`, method: "post", data });
}

/*
 *@序号:416
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具列表(https://apaas-yapi.midea.com/project/7260/interface/api/746224)
 */

export function invoiceApplyDownloadDocFin(params) {
  return ajax({
    url: `/invoice/apply/download/doc/fin`,
    method: "get",
    params,
  });
}

/*
 *@序号:417
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具列表-导出(https://apaas-yapi.midea.com/project/7260/interface/api/746227)
 */

export function invoiceApplyExportFin(params) {
  return ajax({ url: `/invoice/apply/export/fin`, method: "get", params });
}

/*
 *@序号:418
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具明细(https://apaas-yapi.midea.com/project/7260/interface/api/746230)
 */

export function invoiceApplyQueryFinDetail(data) {
  return ajax({ url: `/invoice/apply/query/fin/detail`, method: "post", data });
}

/*
 *@序号:419
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具明细(https://apaas-yapi.midea.com/project/7260/interface/api/746233)
 */

export function invoiceApplyQueryFinDetailInfo(data) {
  return ajax({
    url: `/invoice/apply/query/fin/detail/info`,
    method: "post",
    data,
  });
}

/*
 *@序号:420
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具失败明细(https://apaas-yapi.midea.com/project/7260/interface/api/746236)
 */

export function invoiceApplyQueryFinFail(data) {
  return ajax({ url: `/invoice/apply/query/fin/fail`, method: "post", data });
}

/*
 *@序号:421
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具失败明细(https://apaas-yapi.midea.com/project/7260/interface/api/746239)
 */

export function invoiceApplyExportFinFail(params) {
  return ajax({ url: `/invoice/apply/export/fin/fail`, method: "get", params });
}

/*
 *@序号:422
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:查询融资发票开具失败明细(https://apaas-yapi.midea.com/project/7260/interface/api/746242)
 */

export function invoiceApplyFinFailRetry(data) {
  return ajax({ url: `/invoice/apply/fin/fail/retry`, method: "post", data });
}

/*
 *@序号:423
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:手工触发查询发票开具结果(https://apaas-yapi.midea.com/project/7260/interface/api/746245)
 */

export function invoiceApplyResultManCheck(params) {
  return ajax({
    url: `/invoice/apply/result/man/check`,
    method: "get",
    params,
  });
}

/*
 *@序号:424
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:invoiceApplyFeeSend(https://apaas-yapi.midea.com/project/7260/interface/api/746248)
 */

export function invoiceApplyInvoiceFeeSend(data) {
  return ajax({ url: `/invoice/apply/invoice/fee/send`, method: "post", data });
}

/*
 *@序号:425
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138845)
 *@菜单名称:invoiceApplyFeeInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746251)
 */

export function invoiceApplyInvoiceFeeInfo(data) {
  return ajax({ url: `/invoice/apply/invoice/fee/info`, method: "post", data });
}

/*
 *@序号:426
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:list(https://apaas-yapi.midea.com/project/7260/interface/api/746254)
 */

export function invoiceOccupyApplyList(data) {
  return ajax({ url: `/invoice/occupy/apply/list`, method: "post", data });
}

/*
 *@序号:427
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:billInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746257)
 */

export function invoiceOccupyApplyBillQuery(data) {
  return ajax({ url: `/invoice/occupy/apply/billQuery`, method: "post", data });
}

/*
 *@序号:428
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:init(https://apaas-yapi.midea.com/project/7260/interface/api/746260)
 */

export function invoiceOccupyApplyInit(data) {
  return ajax({ url: `/invoice/occupy/apply/init`, method: "post", data });
}

/*
 *@序号:429
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:submit(https://apaas-yapi.midea.com/project/7260/interface/api/746263)
 */

export function invoiceOccupyApplySubmit(data) {
  return ajax({ url: `/invoice/occupy/apply/submit`, method: "post", data });
}

/*
 *@序号:430
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:cancel(https://apaas-yapi.midea.com/project/7260/interface/api/746266)
 */

export function invoiceOccupyApplyCancel(data) {
  return ajax({ url: `/invoice/occupy/apply/cancel`, method: "post", data });
}

/*
 *@序号:431
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:detail(https://apaas-yapi.midea.com/project/7260/interface/api/746269)
 */

export function invoiceOccupyApplyDetail(data) {
  return ajax({ url: `/invoice/occupy/apply/detail`, method: "post", data });
}

/*
 *@序号:432
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:reviewList(https://apaas-yapi.midea.com/project/7260/interface/api/746272)
 */

export function invoiceOccupyApplyReviewList(data) {
  return ajax({
    url: `/invoice/occupy/apply/reviewList`,
    method: "post",
    data,
  });
}

/*
 *@序号:433
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:pass(https://apaas-yapi.midea.com/project/7260/interface/api/746275)
 */

export function invoiceOccupyApplyPass(data) {
  return ajax({ url: `/invoice/occupy/apply/pass`, method: "post", data });
}

/*
 *@序号:434
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:reject(https://apaas-yapi.midea.com/project/7260/interface/api/746278)
 */

export function invoiceOccupyApplyReject(data) {
  return ajax({ url: `/invoice/occupy/apply/reject`, method: "post", data });
}

/*
 *@序号:435
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceQuery(https://apaas-yapi.midea.com/project/7260/interface/api/746281)
 */

export function invoiceOccupyApplyInvoiceQuery(data) {
  return ajax({
    url: `/invoice/occupy/apply/invoiceQuery`,
    method: "post",
    data,
  });
}

/*
 *@序号:436
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceValid(https://apaas-yapi.midea.com/project/7260/interface/api/746284)
 */

export function invoiceOccupyApplyInvoiceValid(data) {
  return ajax({
    url: `/invoice/occupy/apply/invoiceValid`,
    method: "post",
    data,
  });
}

/*
 *@序号:437
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceCalc(https://apaas-yapi.midea.com/project/7260/interface/api/746287)
 */

export function invoiceOccupyApplyInvoiceCalc(data) {
  return ajax({
    url: `/invoice/occupy/apply/invoiceCalc`,
    method: "post",
    data,
  });
}

/*
 *@序号:438
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138847)
 *@菜单名称:invoiceOcr(https://apaas-yapi.midea.com/project/7260/interface/api/746290)
 */

export function invoiceOccupyApplyInvoiceOcr(data) {
  return ajax({
    url: `/invoice/occupy/apply/invoiceOcr`,
    method: "post",
    data,
  });
}

/*
 *@序号:439
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:转单审核处理列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/746293)
 */

export function batchTransferAcceptanceList(data) {
  return ajax({ url: `/batch/transfer/acceptance/list`, method: "post", data });
}

/*
 *@序号:440
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptTransfersInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746296)
 */

export function batchTransferAcceptTransfersInfo(data) {
  return ajax({
    url: `/batch/transfer/accept/transfersInfo`,
    method: "post",
    data,
  });
}

/*
 *@序号:441
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptInvoice(https://apaas-yapi.midea.com/project/7260/interface/api/746299)
 */

export function batchTransferAcceptInvoice(data) {
  return ajax({ url: `/batch/transfer/accept/invoice`, method: "post", data });
}

/*
 *@序号:442
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptRisk(https://apaas-yapi.midea.com/project/7260/interface/api/746302)
 */

export function batchTransferAcceptRisk(data) {
  return ajax({ url: `/batch/transfer/accept/risk`, method: "post", data });
}

/*
 *@序号:443
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:queryAcceptApproval(https://apaas-yapi.midea.com/project/7260/interface/api/746305)
 */

export function batchTransferAcceptApproval(data) {
  return ajax({ url: `/batch/transfer/accept/approval`, method: "post", data });
}

/*
 *@序号:444
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:sendRiskManuel(https://apaas-yapi.midea.com/project/7260/interface/api/746308)
 */

export function batchTransferSendRisk(data) {
  return ajax({ url: `/batch/transfer/send/risk`, method: "post", data });
}

/*
 *@序号:445
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:人工受理(https://apaas-yapi.midea.com/project/7260/interface/api/746311)
 */

export function batchTransferAcceptManual(data) {
  return ajax({ url: `/batch/transfer/accept/manual`, method: "post", data });
}

/*
 *@序号:446
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:save(https://apaas-yapi.midea.com/project/7260/interface/api/746314)
 */

export function quotaApplySave(data) {
  return ajax({ url: `/quota/apply/save`, method: "post", data });
}

/*
 *@序号:447
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:cancel(https://apaas-yapi.midea.com/project/7260/interface/api/746317)
 */

export function quotaApplyCancel(data) {
  return ajax({ url: `/quota/apply/cancel`, method: "post", data });
}

/*
 *@序号:448
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:audit(https://apaas-yapi.midea.com/project/7260/interface/api/746320)
 */

export function quotaAprvAudit(data) {
  return ajax({ url: `/quota/aprv/audit`, method: "post", data });
}

/*
 *@序号:449
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:change(https://apaas-yapi.midea.com/project/7260/interface/api/746323)
 */

export function quotaAprvChange(data) {
  return ajax({ url: `/quota/aprv/change`, method: "post", data });
}

/*
 *@序号:450
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:reCredit(https://apaas-yapi.midea.com/project/7260/interface/api/746326)
 */

export function quotaAprvReCredit(data) {
  return ajax({ url: `/quota/aprv/reCredit`, method: "post", data });
}

/*
 *@序号:451
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:saveCredit(https://apaas-yapi.midea.com/project/7260/interface/api/746329)
 */

export function quotaCreditApplySave(data) {
  return ajax({ url: `/quota/credit/apply/save`, method: "post", data });
}

/*
 *@序号:452
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度作废(https://apaas-yapi.midea.com/project/7260/interface/api/746332)
 */

export function quotaCreditApplyCancle(data) {
  return ajax({ url: `/quota/credit/apply/cancle`, method: "post", data });
}

/*
 *@序号:453
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度审批(https://apaas-yapi.midea.com/project/7260/interface/api/746335)
 */

export function quotaCreditAprvAudit(data) {
  return ajax({ url: `/quota/credit/aprv/audit`, method: "post", data });
}

/*
 *@序号:454
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度变更(https://apaas-yapi.midea.com/project/7260/interface/api/746338)
 */

export function quotaCreditAprvChange(data) {
  return ajax({ url: `/quota/credit/aprv/change`, method: "post", data });
}

/*
 *@序号:455
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138851)
 *@菜单名称:授信额度重新授信(https://apaas-yapi.midea.com/project/7260/interface/api/746341)
 */

export function quotaCreditAprvReCredit(data) {
  return ajax({ url: `/quota/credit/aprv/reCredit`, method: "post", data });
}

/*
 *@序号:456
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:applyFreeze(https://apaas-yapi.midea.com/project/7260/interface/api/746344)
 */

export function quotaFreezeApply(data) {
  return ajax({ url: `/quota/freeze/apply`, method: "post", data });
}

/*
 *@序号:457
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:额度解冻保存(https://apaas-yapi.midea.com/project/7260/interface/api/746347)
 */

export function quotaThawApply(data) {
  return ajax({ url: `/quota/thaw/apply`, method: "post", data });
}

/*
 *@序号:458
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:额度解冻审核(https://apaas-yapi.midea.com/project/7260/interface/api/746350)
 */

export function quotaThawAprv(data) {
  return ajax({ url: `/quota/thaw/aprv`, method: "post", data });
}

/*
 *@序号:459
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业开单额度分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746353)
 */

export function quotaEntOpenQueryPage(data) {
  return ajax({ url: `/quota/ent/open/queryPage`, method: "post", data });
}

/*
 *@序号:460
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业开单额度导出(https://apaas-yapi.midea.com/project/7260/interface/api/746356)
 */

export function quotaEntOpenExport(params) {
  return ajax({ url: `/quota/ent/open/export`, method: "get", params });
}

/*
 *@序号:461
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业开单额度历史查询(https://apaas-yapi.midea.com/project/7260/interface/api/746359)
 */

export function quotaEntOpenHisQuery(data) {
  return ajax({ url: `/quota/ent/open/his/query`, method: "post", data });
}

/*
 *@序号:462
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业开单额度历史导出(https://apaas-yapi.midea.com/project/7260/interface/api/746362)
 */

export function quotaEntOpenHisExport(params) {
  return ajax({ url: `/quota/ent/open/his/export`, method: "get", params });
}

/*
 *@序号:463
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业授信额度分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746365)
 */

export function quotaEntCreditQueryPage(data) {
  return ajax({ url: `/quota/ent/credit/queryPage`, method: "post", data });
}

/*
 *@序号:464
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业授信额度导出(https://apaas-yapi.midea.com/project/7260/interface/api/746368)
 */

export function quotaEntCreditExport(params) {
  return ajax({ url: `/quota/ent/credit/export`, method: "get", params });
}

/*
 *@序号:465
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业授信额度历史查询(https://apaas-yapi.midea.com/project/7260/interface/api/746371)
 */

export function quotaEntCreditHisQuery(data) {
  return ajax({ url: `/quota/ent/credit/his/query`, method: "post", data });
}

/*
 *@序号:466
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:企业授信额度历史导出(https://apaas-yapi.midea.com/project/7260/interface/api/746374)
 */

export function quotaEntCreditHisExport(params) {
  return ajax({ url: `/quota/ent/credit/his/export`, method: "get", params });
}

/*
 *@序号:467
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138853)
 *@菜单名称:allCreditQueryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746377)
 */

export function quotaEntAllCreditQuery(data) {
  return ajax({ url: `/quota/ent/all/credit/query`, method: "post", data });
}

/*
 *@序号:468
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:开单额度申请分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746380)
 */

export function quotaOpenApplyQueryPage(data) {
  return ajax({ url: `/quota/open/apply/queryPage`, method: "post", data });
}

/*
 *@序号:469
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:applyDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746383)
 */

export function quotaOpenApplyDetail(data) {
  return ajax({ url: `/quota/open/apply/detail`, method: "post", data });
}

/*
 *@序号:470
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:reApplyDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746386)
 */

export function quotaOpenReApplyDetail(data) {
  return ajax({ url: `/quota/open/re/apply/detail`, method: "post", data });
}

/*
 *@序号:471
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:开单额度复核分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746389)
 */

export function quotaOpenAprvQueryPage(data) {
  return ajax({ url: `/quota/open/aprv/queryPage`, method: "post", data });
}

/*
 *@序号:472
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:queryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746392)
 */

export function quotaOpenQueryPage(data) {
  return ajax({ url: `/quota/open/queryPage`, method: "post", data });
}

/*
 *@序号:473
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:export(https://apaas-yapi.midea.com/project/7260/interface/api/746395)
 */

export function quotaOpenExport(params) {
  return ajax({ url: `/quota/open/export`, method: "get", params });
}

/*
 *@序号:474
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138855)
 *@菜单名称:detail(https://apaas-yapi.midea.com/project/7260/interface/api/746398)
 */

export function quotaOpenDetail(data) {
  return ajax({ url: `/quota/open/detail`, method: "post", data });
}

/*
 *@序号:475
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:applyQueryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746401)
 */

export function quotaFreezeApplyQueryPage(data) {
  return ajax({ url: `/quota/freeze/apply/queryPage`, method: "post", data });
}

/*
 *@序号:476
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:额度冻结申请导出(https://apaas-yapi.midea.com/project/7260/interface/api/746404)
 */

export function quotaFreezeApplyExport(params) {
  return ajax({ url: `/quota/freeze/apply/export`, method: "get", params });
}

/*
 *@序号:477
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:applyDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746407)
 */

export function quotaFreezeApplyDetail(data) {
  return ajax({ url: `/quota/freeze/apply/detail`, method: "post", data });
}

/*
 *@序号:478
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:aprvQueryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746410)
 */

export function quotaThawAprvQueryPage(data) {
  return ajax({ url: `/quota/thaw/aprv/queryPage`, method: "post", data });
}

/*
 *@序号:479
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:aprvDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746413)
 */

export function quotaThawAprvDetail(data) {
  return ajax({ url: `/quota/thaw/aprv/detail`, method: "post", data });
}

/*
 *@序号:480
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:额度冻结解冻分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746416)
 */

export function quotaFreezethawQueryPage(data) {
  return ajax({ url: `/quota/freezethaw/queryPage`, method: "post", data });
}

/*
 *@序号:481
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:freethawExport(https://apaas-yapi.midea.com/project/7260/interface/api/746419)
 */

export function quotaFreezethawExport(params) {
  return ajax({ url: `/quota/freezethaw/export`, method: "get", params });
}

/*
 *@序号:482
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:applyQueryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746422)
 */

export function quotaCreditApplyQueryPage(data) {
  return ajax({ url: `/quota/credit/apply/queryPage`, method: "post", data });
}

/*
 *@序号:483
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:applyDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746425)
 */

export function quotaCreditApplyDetail(data) {
  return ajax({ url: `/quota/credit/apply/detail`, method: "post", data });
}

/*
 *@序号:484
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:reApplyDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746428)
 */

export function quotaCreditReApplyDetail(data) {
  return ajax({ url: `/quota/credit/re/apply/detail`, method: "post", data });
}

/*
 *@序号:485
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:aprvQueryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746431)
 */

export function quotaCreditAprvQueryPage(data) {
  return ajax({ url: `/quota/credit/aprv/queryPage`, method: "post", data });
}

/*
 *@序号:486
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:queryPage(https://apaas-yapi.midea.com/project/7260/interface/api/746434)
 */

export function quotaCreditQueryPage(data) {
  return ajax({ url: `/quota/credit/queryPage`, method: "post", data });
}

/*
 *@序号:487
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:授信额度导出(https://apaas-yapi.midea.com/project/7260/interface/api/746437)
 */

export function quotaCreditExport(params) {
  return ajax({ url: `/quota/credit/export`, method: "get", params });
}

/*
 *@序号:488
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:detail(https://apaas-yapi.midea.com/project/7260/interface/api/746440)
 */

export function quotaCreditDetail(data) {
  return ajax({ url: `/quota/credit/detail`, method: "post", data });
}

/*
 *@序号:489
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138857)
 *@菜单名称:导出（重新授信.变更授信）(https://apaas-yapi.midea.com/project/7260/interface/api/746443)
 */

export function quotaBatchOptSellCreditExportexist(params) {
  return ajax({
    url: `/quota/batchOpt/sellCredit/export4exist`,
    method: "get",
    params,
  });
}

/*
 *@序号:490
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138857)
 *@菜单名称:导出(新增授信)(https://apaas-yapi.midea.com/project/7260/interface/api/746446)
 */

export function quotaBatchOptSellCreditExportadd(params) {
  return ajax({
    url: `/quota/batchOpt/sellCredit/export4add`,
    method: "get",
    params,
  });
}

/*
 *@序号:491
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138857)
 *@菜单名称:授信额度批量维护导入excel(开单、融单共用)(https://apaas-yapi.midea.com/project/7260/interface/api/746449)
 */

export function quotaBatchOptSellCreditImportByExcel(data) {
  return ajax({
    url: `/quota/batchOpt/sellCredit/importByExcel`,
    method: "post",
    data,
  });
}

/*
 *@序号:492
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138857)
 *@菜单名称:导出(新增开单)(https://apaas-yapi.midea.com/project/7260/interface/api/746452)
 */

export function quotaBatchOptOpenCreditExportadd(params) {
  return ajax({
    url: `/quota/batchOpt/openCredit/export4add`,
    method: "get",
    params,
  });
}

/*
 *@序号:493
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138857)
 *@菜单名称:导出（重新授信.变更授信）(https://apaas-yapi.midea.com/project/7260/interface/api/746455)
 */

export function quotaBatchOptOpenCreditExportexist(params) {
  return ajax({
    url: `/quota/batchOpt/openCredit/export4exist`,
    method: "get",
    params,
  });
}

/*
 *@序号:494
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:资方白名单-导出(https://apaas-yapi.midea.com/project/7260/interface/api/746458)
 */

export function quotaApplyWhiteListExport(params) {
  return ajax({ url: `/quota/apply/white/list/export`, method: "get", params });
}

/*
 *@序号:495
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:资方白名单-导入(https://apaas-yapi.midea.com/project/7260/interface/api/746461)
 */

export function quotaApplyWhiteListImport(data) {
  return ajax({ url: `/quota/apply/white/list/import`, method: "post", data });
}

/*
 *@序号:496
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138859)
 *@菜单名称:接口调用详情列表（分页）(https://apaas-yapi.midea.com/project/7260/interface/api/746464)
 */

export function itrusDetailsSelect(data) {
  return ajax({ url: `/itrus/details/select`, method: "post", data });
}

/*
 *@序号:497
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138859)
 *@菜单名称:接口使用统计（分页）<br>(https://apaas-yapi.midea.com/project/7260/interface/api/746467)
 */

export function itrusInterfaceCount(data) {
  return ajax({ url: `/itrus/interface/count`, method: "post", data });
}

/*
 *@序号:498
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138859)
 *@菜单名称:接口使用统计（导出）<br>(https://apaas-yapi.midea.com/project/7260/interface/api/746470)
 */

export function itrusInterfaceExport(data) {
  return ajax({ url: `/itrus/interface/export`, method: "post", data });
}

/*
 *@序号:499
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138859)
 *@菜单名称:接口调用查询（分页）(https://apaas-yapi.midea.com/project/7260/interface/api/746473)
 */

export function itrusInterfaceSelect(data) {
  return ajax({ url: `/itrus/interface/select`, method: "post", data });
}

/*
 *@序号:500
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:queryBlockChain(https://apaas-yapi.midea.com/project/7260/interface/api/746476)
 */

export function blockQueryBlock(data) {
  return ajax({ url: `/block/query/block`, method: "post", data });
}

/*
 *@序号:501
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:queryUser(https://apaas-yapi.midea.com/project/7260/interface/api/746479)
 */

export function blockQueryUser(data) {
  return ajax({ url: `/block/query/user`, method: "post", data });
}

/*
 *@序号:502
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:queryEnt(https://apaas-yapi.midea.com/project/7260/interface/api/746482)
 */

export function blockQueryEnt(data) {
  return ajax({ url: `/block/query/ent`, method: "post", data });
}

/*
 *@序号:503
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:decodeSign(https://apaas-yapi.midea.com/project/7260/interface/api/746485)
 */

export function blockQueryDecode(data) {
  return ajax({ url: `/block/query/decode`, method: "post", data });
}

/*
 *@序号:504
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138861)
 *@菜单名称:listQuery(https://apaas-yapi.midea.com/project/7260/interface/api/746488)
 */

export function invoiceWriteoffListQuery(data) {
  return ajax({ url: `/invoice/writeoff/list/query`, method: "post", data });
}

/*
 *@序号:505
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138861)
 *@菜单名称:export(https://apaas-yapi.midea.com/project/7260/interface/api/746491)
 */

export function invoiceWriteoffListExport(params) {
  return ajax({ url: `/invoice/writeoff/list/export`, method: "get", params });
}

/*
 *@序号:506
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138861)
 *@菜单名称:detail(https://apaas-yapi.midea.com/project/7260/interface/api/746494)
 */

export function invoiceWriteoffDetail(data) {
  return ajax({ url: `/invoice/writeoff/detail`, method: "post", data });
}

/*
 *@序号:507
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138861)
 *@菜单名称:writeoff(https://apaas-yapi.midea.com/project/7260/interface/api/746497)
 */

export function invoiceWriteoffWriteoff(data) {
  return ajax({ url: `/invoice/writeoff/writeoff`, method: "post", data });
}

/*
 *@序号:508
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138861)
 *@菜单名称:writeoffBack(https://apaas-yapi.midea.com/project/7260/interface/api/746500)
 */

export function invoiceWriteoffWriteoffBack(data) {
  return ajax({ url: `/invoice/writeoff/writeoff/back`, method: "post", data });
}

/*
 *@序号:509
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:orgList(https://apaas-yapi.midea.com/project/7260/interface/api/746503)
 */

export function enterpriseOrgOrgList(data) {
  return ajax({ url: `/enterprise/org/orgList`, method: "post", data });
}

/*
 *@序号:510
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:init(https://apaas-yapi.midea.com/project/7260/interface/api/746506)
 */

export function enterpriseOrgInit(params) {
  return ajax({ url: `/enterprise/org/init`, method: "get", params });
}

/*
 *@序号:511
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:queryEnterprise(https://apaas-yapi.midea.com/project/7260/interface/api/746509)
 */

export function enterpriseOrgQueryEnterprise(data) {
  return ajax({ url: `/enterprise/org/queryEnterprise`, method: "post", data });
}

/*
 *@序号:512
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:add(https://apaas-yapi.midea.com/project/7260/interface/api/746512)
 */

export function enterpriseOrgAdd(data) {
  return ajax({ url: `/enterprise/org/add`, method: "post", data });
}

/*
 *@序号:513
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:detail(https://apaas-yapi.midea.com/project/7260/interface/api/746515)
 */

export function enterpriseOrgDetail(params) {
  return ajax({ url: `/enterprise/org/detail`, method: "get", params });
}

/*
 *@序号:514
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:list(https://apaas-yapi.midea.com/project/7260/interface/api/746518)
 */

export function enterpriseOrgList(data) {
  return ajax({ url: `/enterprise/org/list`, method: "post", data });
}

/*
 *@序号:515
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:exportEnterpriseOrgList(https://apaas-yapi.midea.com/project/7260/interface/api/746521)
 */

export function enterpriseOrgExportEnterpriseOrgList(params) {
  return ajax({
    url: `/enterprise/org/exportEnterpriseOrgList`,
    method: "get",
    params,
  });
}

/*
 *@序号:516
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:orgValid(https://apaas-yapi.midea.com/project/7260/interface/api/746524)
 */

export function enterpriseOrgOrgValid(params) {
  return ajax({ url: `/enterprise/org/orgValid`, method: "get", params });
}

/*
 *@序号:517
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138863)
 *@菜单名称:entValid(https://apaas-yapi.midea.com/project/7260/interface/api/746527)
 */

export function enterpriseOrgEntValid(params) {
  return ajax({ url: `/enterprise/org/entValid`, method: "get", params });
}

/*
 *@序号:518
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:分页查询(https://apaas-yapi.midea.com/project/7260/interface/api/746530)
 */

export function accountBalanceSelectList(data) {
  return ajax({ url: `/account/balance/selectList`, method: "post", data });
}

/*
 *@序号:519
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:queryAccountNoDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746533)
 */

export function accountBalanceQueryAccountNoDetail(data) {
  return ajax({
    url: `/account/balance/queryAccountNoDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:520
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:导出(https://apaas-yapi.midea.com/project/7260/interface/api/746536)
 */

export function accountBalanceExport(params) {
  return ajax({ url: `/account/balance/export`, method: "get", params });
}

/*
 *@序号:521
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:立即更新(https://apaas-yapi.midea.com/project/7260/interface/api/746539)
 */

export function accountBalanceUpdateSingle(data) {
  return ajax({ url: `/account/balance/updateSingle`, method: "post", data });
}

/*
 *@序号:522
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:查找第一层级的组织(https://apaas-yapi.midea.com/project/7260/interface/api/746542)
 */

export function orgGetAllTree(params) {
  return ajax({ url: `/org/get/all/tree`, method: "get", params });
}

/*
 *@序号:523
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:查找特定树(https://apaas-yapi.midea.com/project/7260/interface/api/746545)
 */

export function orgGetSpecificTree(data) {
  return ajax({ url: `/org/get/specific/tree`, method: "post", data });
}

/*
 *@序号:524
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:获取所有集团(https://apaas-yapi.midea.com/project/7260/interface/api/746548)
 */

export function orgGetAllGroup(data) {
  return ajax({ url: `/org/get/all/group`, method: "post", data });
}

/*
 *@序号:525
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:查找特定树(https://apaas-yapi.midea.com/project/7260/interface/api/746551)
 */

export function orgGetAllEnterprise(data) {
  return ajax({ url: `/org/get/all/enterprise`, method: "post", data });
}

/*
 *@序号:526
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:查找所有法人单位核心企业(https://apaas-yapi.midea.com/project/7260/interface/api/746554)
 */

export function orgQueryLegalCoreEnt(data) {
  return ajax({ url: `/org/query/legal/coreEnt`, method: "post", data });
}

/*
 *@序号:527
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:组织机构列表查询(https://apaas-yapi.midea.com/project/7260/interface/api/746557)
 */

export function orgGetList(data) {
  return ajax({ url: `/org/get/list`, method: "post", data });
}

/*
 *@序号:528
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:组织机构列表导出(https://apaas-yapi.midea.com/project/7260/interface/api/746560)
 */

export function orgExportList(data) {
  return ajax({ url: `/org/export/list`, method: "post", data });
}

/*
 *@序号:529
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:上传文件(https://apaas-yapi.midea.com/project/7260/interface/api/746563)
 */

export function orgAddOrgFile(data) {
  return ajax({ url: `/org/add/org/file`, method: "post", data });
}

/*
 *@序号:530
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:组织架构管理编辑回显详情,opType 1新增回显  2编辑回显(https://apaas-yapi.midea.com/project/7260/interface/api/746566)
 */

export function orgGetDetailInfo(data) {
  return ajax({ url: `/org/get/detail/info`, method: "post", data });
}

/*
 *@序号:531
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:组织机构编辑节点(https://apaas-yapi.midea.com/project/7260/interface/api/746569)
 */

export function orgOpNode(data) {
  return ajax({ url: `/org/op/node`, method: "post", data });
}

/*
 *@序号:532
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:deleteOrg(https://apaas-yapi.midea.com/project/7260/interface/api/746572)
 */

export function orgDeleteOrg(data) {
  return ajax({ url: `/org/delete/org`, method: "post", data });
}

/*
 *@序号:533
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:「已废弃」(https://apaas-yapi.midea.com/project/7260/interface/api/746575)
 */

export function orgGetLegalNoreg(params) {
  return ajax({ url: `/org/get/legal/noreg`, method: "get", params });
}

/*
 *@序号:534
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:queryList4notRegisterLegal(https://apaas-yapi.midea.com/project/7260/interface/api/746578)
 */

export function orgEnterApplyQueryListNotRegisterLegal(data) {
  return ajax({
    url: `/org/enterApply/queryList/notRegisterLegal`,
    method: "post",
    data,
  });
}

/*
 *@序号:535
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:核心企业入驻申请(https://apaas-yapi.midea.com/project/7260/interface/api/746581)
 */

export function orgGetCoreApplyList(data) {
  return ajax({ url: `/org/get/core/apply/list`, method: "post", data });
}

/*
 *@序号:536
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:getCoreReviewList(https://apaas-yapi.midea.com/project/7260/interface/api/746584)
 */

export function orgGetCoreReviewList(data) {
  return ajax({ url: `/org/get/core/review/list`, method: "post", data });
}

/*
 *@序号:537
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:exportReviewList(https://apaas-yapi.midea.com/project/7260/interface/api/746587)
 */

export function orgExportReviewList(data) {
  return ajax({ url: `/org/export/review/list`, method: "post", data });
}

/*
 *@序号:538
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:核心企业申请第一步，通过三证合一号码或者营业执照获得企业信息(https://apaas-yapi.midea.com/project/7260/interface/api/746590)
 */

export function orgGetEntByCode(data) {
  return ajax({ url: `/org/get/ent/by/code`, method: "post", data });
}

/*
 *@序号:539
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:发起核心企业认证申请-保存企业基础信息(https://apaas-yapi.midea.com/project/7260/interface/api/746593)
 */

export function orgAddApply(data) {
  return ajax({ url: `/org/add/apply`, method: "post", data });
}

/*
 *@序号:540
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:企业信息回显(https://apaas-yapi.midea.com/project/7260/interface/api/746596)
 */

export function orgGetEntInfo(data) {
  return ajax({ url: `/org/get/ent/info`, method: "post", data });
}

/*
 *@序号:541
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:核心企业账号回显(https://apaas-yapi.midea.com/project/7260/interface/api/746599)
 */

export function orgGetAccountById(data) {
  return ajax({ url: `/org/get/account/by/id`, method: "post", data });
}

/*
 *@序号:542
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:保存账户信息(https://apaas-yapi.midea.com/project/7260/interface/api/746602)
 */

export function orgAddAccount(data) {
  return ajax({ url: `/org/add/account`, method: "post", data });
}

/*
 *@序号:543
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:selectUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746605)
 */

export function orgSelectUserInfo(data) {
  return ajax({ url: `/org/select/userInfo`, method: "post", data });
}

/*
 *@序号:544
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:findEntUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746608)
 */

export function orgGetUser(data) {
  return ajax({ url: `/org/get/user`, method: "post", data });
}

/*
 *@序号:545
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:保存操作员信息(https://apaas-yapi.midea.com/project/7260/interface/api/746611)
 */

export function orgAddUser(data) {
  return ajax({ url: `/org/add/user`, method: "post", data });
}

/*
 *@序号:546
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:findEntDocOrganCodeType(https://apaas-yapi.midea.com/project/7260/interface/api/746614)
 */

export function orgGetOrganCodetType(data) {
  return ajax({ url: `/org/get/organ/codet/type`, method: "post", data });
}

/*
 *@序号:547
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:findEntDocList(https://apaas-yapi.midea.com/project/7260/interface/api/746617)
 */

export function orgGetFileHistory(data) {
  return ajax({ url: `/org/get/file/history`, method: "post", data });
}

/*
 *@序号:548
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:findEntDocInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746620)
 */

export function orgGetFile(data) {
  return ajax({ url: `/org/get/file`, method: "post", data });
}

/*
 *@序号:549
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:上传文档(https://apaas-yapi.midea.com/project/7260/interface/api/746623)
 */

export function orgAddCoreEntFile(data) {
  return ajax({ url: `/org/add/core/ent/file`, method: "post", data });
}

/*
 *@序号:550
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:rejectApply(https://apaas-yapi.midea.com/project/7260/interface/api/746626)
 */

export function orgRejectApply(data) {
  return ajax({ url: `/org/reject/apply`, method: "post", data });
}

/*
 *@序号:551
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:getAllRejectInfo(https://apaas-yapi.midea.com/project/7260/interface/api/746629)
 */

export function orgRejectAll(data) {
  return ajax({ url: `/org/reject/all`, method: "post", data });
}

/*
 *@序号:552
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:DeleteCoreEntApply(https://apaas-yapi.midea.com/project/7260/interface/api/746632)
 */

export function orgCoreDelete(data) {
  return ajax({ url: `/org/core/delete`, method: "post", data });
}

/*
 *@序号:553
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:getCoreEntList(https://apaas-yapi.midea.com/project/7260/interface/api/746635)
 */

export function orgGetCoreEntList(data) {
  return ajax({ url: `/org/get/core/ent/list`, method: "post", data });
}

/*
 *@序号:554
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:exportCoreList(https://apaas-yapi.midea.com/project/7260/interface/api/746638)
 */

export function orgExportCoreList(data) {
  return ajax({ url: `/org/export/core/list`, method: "post", data });
}

/*
 *@序号:555
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:getCoreSonDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746641)
 */

export function orgCoreSonDetail(data) {
  return ajax({ url: `/org/core/son/detail`, method: "post", data });
}

/*
 *@序号:556
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:getEntAll(https://apaas-yapi.midea.com/project/7260/interface/api/746644)
 */

export function orgGetEntAll(data) {
  return ajax({ url: `/org/get/ent/all`, method: "post", data });
}

/*
 *@序号:557
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:平台化版本 上完后 再去掉(https://apaas-yapi.midea.com/project/7260/interface/api/746647)
 */

export function orgUpdateOrgcodeInit(params) {
  return ajax({ url: `/org/update/orgcode/init`, method: "get", params });
}

/*
 *@序号:558
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138841)
 *@菜单名称:发起成员单位认证申请-保存成员单位基础信息(https://apaas-yapi.midea.com/project/7260/interface/api/746650)
 */

export function orgAddMemberUnitApply(data) {
  return ajax({ url: `/org/add/memberUnit/apply`, method: "post", data });
}

/*
 *@序号:559
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:基准利率（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746653)
 */

export function baseRateSelectPage(data) {
  return ajax({ url: `/baseRate/selectPage`, method: "post", data });
}

/*
 *@序号:560
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:基准利率list(https://apaas-yapi.midea.com/project/7260/interface/api/746656)
 */

export function baseRateSelectList(data) {
  return ajax({ url: `/baseRate/selectList`, method: "post", data });
}

/*
 *@序号:561
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:基准利率-新增(https://apaas-yapi.midea.com/project/7260/interface/api/746659)
 */

export function baseRateAddItem(data) {
  return ajax({ url: `/baseRate/addItem`, method: "post", data });
}

/*
 *@序号:562
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:基准利率-更新(https://apaas-yapi.midea.com/project/7260/interface/api/746662)
 */

export function baseRateUpdateItem(data) {
  return ajax({ url: `/baseRate/updateItem`, method: "post", data });
}

/*
 *@序号:563
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:基准利率代码生成(https://apaas-yapi.midea.com/project/7260/interface/api/746665)
 */

export function baseRateCreateRateCode(data) {
  return ajax({ url: `/baseRate/createRateCode`, method: "post", data });
}

/*
 *@序号:564
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:基准利率-历史信息list(https://apaas-yapi.midea.com/project/7260/interface/api/746668)
 */

export function baseRateSelectHistoryList(data) {
  return ajax({ url: `/baseRate/selectHistoryList`, method: "post", data });
}

/*
 *@序号:565
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138865)
 *@菜单名称:selectById(https://apaas-yapi.midea.com/project/7260/interface/api/746671)
 */

export function baseRateSelectById(data) {
  return ajax({ url: `/baseRate/selectById`, method: "post", data });
}

/*
 *@序号:566
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:撤销收款流水(https://apaas-yapi.midea.com/project/7260/interface/api/746674)
 */

export function payReceiveCancel(data) {
  return ajax({ url: `/pay/receive/cancel`, method: "post", data });
}

/*
 *@序号:567
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:查询收款流水列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746677)
 */

export function payReceiveSelect(data) {
  return ajax({ url: `/pay/receive/select`, method: "post", data });
}

/*
 *@序号:568
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:查看流水对应明细(https://apaas-yapi.midea.com/project/7260/interface/api/746680)
 */

export function payReceiveDetail(data) {
  return ajax({ url: `/pay/receive/detail`, method: "post", data });
}

/*
 *@序号:569
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:手工匹配流水(https://apaas-yapi.midea.com/project/7260/interface/api/746683)
 */

export function payReceiveMatchHandle(data) {
  return ajax({ url: `/pay/receive/match/handle`, method: "post", data });
}

/*
 *@序号:570
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:费用核销-查找融资费用记录(https://apaas-yapi.midea.com/project/7260/interface/api/746686)
 */

export function payReceiveSelectWaitHandle(data) {
  return ajax({ url: `/pay/receive/selectWaitHandle`, method: "post", data });
}

/*
 *@序号:571
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:导出收款流水列表(https://apaas-yapi.midea.com/project/7260/interface/api/746689)
 */

export function payExport(params) {
  return ajax({ url: `/pay/export`, method: "get", params });
}

/*
 *@序号:572
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138867)
 *@菜单名称:冲销收款流水(https://apaas-yapi.midea.com/project/7260/interface/api/746692)
 */

export function payReceiveRevert(data) {
  return ajax({ url: `/pay/receive/revert`, method: "post", data });
}

/*
 *@序号:573
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138869)
 *@菜单名称:查看利率(https://apaas-yapi.midea.com/project/7260/interface/api/746695)
 */

export function interestSelectList(data) {
  return ajax({ url: `/interest/select/list`, method: "post", data });
}

/*
 *@序号:574
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138869)
 *@菜单名称:excel导入(https://apaas-yapi.midea.com/project/7260/interface/api/746698)
 */

export function interestAddByExcel(data) {
  return ajax({ url: `/interest/add/byExcel`, method: "post", data });
}

/*
 *@序号:575
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138869)
 *@菜单名称:导出利率列表(https://apaas-yapi.midea.com/project/7260/interface/api/746701)
 */

export function interestExport(params) {
  return ajax({ url: `/interest/export`, method: "get", params });
}

/*
 *@序号:576
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138869)
 *@菜单名称:融资利率导入模板(https://apaas-yapi.midea.com/project/7260/interface/api/746704)
 */

export function interestTemplateExport(params) {
  return ajax({ url: `/interest/template/export`, method: "get", params });
}

/*
 *@序号:577
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138871)
 *@菜单名称:财经利率设置申请列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746707)
 */

export function baseRateChangeSelectApplyPage(data) {
  return ajax({ url: `/baseRateChange/selectApplyPage`, method: "post", data });
}

/*
 *@序号:578
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138871)
 *@菜单名称:利率设置审批列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746710)
 */

export function baseRateChangeSelectReviewPage(data) {
  return ajax({
    url: `/baseRateChange/selectReviewPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:579
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138871)
 *@菜单名称:利率设置查询列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746713)
 */

export function baseRateChangeSelectPassPage(data) {
  return ajax({ url: `/baseRateChange/selectPassPage`, method: "post", data });
}

/*
 *@序号:580
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138871)
 *@菜单名称:财经利率设置-新增(https://apaas-yapi.midea.com/project/7260/interface/api/746716)
 */

export function baseRateChangeAddBaseRateProcess(data) {
  return ajax({
    url: `/baseRateChange/add/baseRateProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:581
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138871)
 *@菜单名称:利率组合模型-审批流程：pass或reject操作(https://apaas-yapi.midea.com/project/7260/interface/api/746719)
 */

export function baseRateChangeReviewBaseRateProcess(data) {
  return ajax({
    url: `/baseRateChange/review/baseRateProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:582
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138871)
 *@菜单名称:查询利率匹配流程明细(https://apaas-yapi.midea.com/project/7260/interface/api/746722)
 */

export function baseRateChangeQueryProcessDetail(data) {
  return ajax({
    url: `/baseRateChange/query/processDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:583
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138873)
 *@菜单名称:利率明细列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746725)
 */

export function interestMatchSelectInterestPage(data) {
  return ajax({
    url: `/interestMatch/select/interestPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:584
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138873)
 *@菜单名称:特殊利率明细列表（导出）(https://apaas-yapi.midea.com/project/7260/interface/api/746728)
 */

export function interestMatchExportInterestPageVip(data) {
  return ajax({
    url: `/interestMatch/export/interestPage/vip`,
    method: "post",
    data,
  });
}

/*
 *@序号:585
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138873)
 *@菜单名称:普通利率明细列表（导出）(https://apaas-yapi.midea.com/project/7260/interface/api/746731)
 */

export function interestMatchExportInterestPageGen(data) {
  return ajax({
    url: `/interestMatch/export/interestPage/gen`,
    method: "post",
    data,
  });
}

/*
 *@序号:586
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138873)
 *@菜单名称:查询利率匹配明细(https://apaas-yapi.midea.com/project/7260/interface/api/746734)
 */

export function interestMatchQueryDetail(data) {
  return ajax({ url: `/interestMatch/query/detail`, method: "post", data });
}

/*
 *@序号:587
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138875)
 *@菜单名称:普通融资费率列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746737)
 */

export function finCostRateSelect(data) {
  return ajax({ url: `/fin/cost/rate/select`, method: "post", data });
}

/*
 *@序号:588
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138875)
 *@菜单名称:普通融资费率明细查看-关联costRateId(https://apaas-yapi.midea.com/project/7260/interface/api/746740)
 */

export function finCostRateDetail(data) {
  return ajax({ url: `/fin/cost/rate/detail`, method: "post", data });
}

/*
 *@序号:589
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138875)
 *@菜单名称:普通融资费率-新增项(https://apaas-yapi.midea.com/project/7260/interface/api/746743)
 */

export function finCostRateAdd(data) {
  return ajax({ url: `/fin/cost/rate/add`, method: "post", data });
}

/*
 *@序号:590
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138875)
 *@菜单名称:普通融资费率-变更项(https://apaas-yapi.midea.com/project/7260/interface/api/746746)
 */

export function finCostRateEdit(data) {
  return ajax({ url: `/fin/cost/rate/edit`, method: "post", data });
}

/*
 *@序号:591
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138875)
 *@菜单名称:普通融资费率导出(https://apaas-yapi.midea.com/project/7260/interface/api/746749)
 */

export function finCostRateExport(params) {
  return ajax({ url: `/fin/cost/rate/export`, method: "get", params });
}

/*
 *@序号:592
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138875)
 *@菜单名称:excel导入(https://apaas-yapi.midea.com/project/7260/interface/api/746752)
 */

export function finAddCostRateByExcel(data) {
  return ajax({ url: `/fin/addCostRate/byExcel`, method: "post", data });
}

/*
 *@序号:593
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138877)
 *@菜单名称:查看利率(https://apaas-yapi.midea.com/project/7260/interface/api/746755)
 */

export function interestVipSelectList(data) {
  return ajax({ url: `/interest/vip/select/list`, method: "post", data });
}

/*
 *@序号:594
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138877)
 *@菜单名称:excel导入(https://apaas-yapi.midea.com/project/7260/interface/api/746758)
 */

export function interestVipAddByExcel(data) {
  return ajax({ url: `/interest/vip/add/byExcel`, method: "post", data });
}

/*
 *@序号:595
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138877)
 *@菜单名称:导出利率列表(https://apaas-yapi.midea.com/project/7260/interface/api/746761)
 */

export function interestVipExport(params) {
  return ajax({ url: `/interest/vip/export`, method: "get", params });
}

/*
 *@序号:596
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138877)
 *@菜单名称:导出特殊利率导入模板(https://apaas-yapi.midea.com/project/7260/interface/api/746764)
 */

export function interestVipTemplateExport(params) {
  return ajax({ url: `/interest/vip/template/export`, method: "get", params });
}

/*
 *@序号:597
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138879)
 *@菜单名称:查询融资费用记录(https://apaas-yapi.midea.com/project/7260/interface/api/746767)
 */

export function finCostRecordSelect(data) {
  return ajax({ url: `/fin/cost/record/select`, method: "post", data });
}

/*
 *@序号:598
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138879)
 *@菜单名称:融资费用记录导出(https://apaas-yapi.midea.com/project/7260/interface/api/746770)
 */

export function finCostRecordExport(params) {
  return ajax({ url: `/fin/cost/record/export`, method: "get", params });
}

/*
 *@序号:599
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138879)
 *@菜单名称:汇总金额(https://apaas-yapi.midea.com/project/7260/interface/api/746773)
 */

export function finCostRecordSum(data) {
  return ajax({ url: `/fin/cost/record/sum`, method: "post", data });
}

/*
 *@序号:600
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138881)
 *@菜单名称:利率组合模型列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746776)
 */

export function interestConfModelConfModelSelectPage(data) {
  return ajax({
    url: `/interestConfModel/confModel/selectPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:601
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138881)
 *@菜单名称:利率组合模型明细查看-关联rateConfId(https://apaas-yapi.midea.com/project/7260/interface/api/746779)
 */

export function interestConfModelConfModelDetail(data) {
  return ajax({
    url: `/interestConfModel/confModel/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:602
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138881)
 *@菜单名称:利率组合模型列表(下拉框使用)(https://apaas-yapi.midea.com/project/7260/interface/api/746782)
 */

export function interestConfModelConfModelSelectList(data) {
  return ajax({
    url: `/interestConfModel/confModel/selectList`,
    method: "post",
    data,
  });
}

/*
 *@序号:603
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138881)
 *@菜单名称:利率组合模型明细查看-关联rateCode(https://apaas-yapi.midea.com/project/7260/interface/api/746785)
 */

export function interestConfModelConfModelRelateDetail(data) {
  return ajax({
    url: `/interestConfModel/confModel/relateDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:604
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138883)
 *@菜单名称:querySendFlowList(https://apaas-yapi.midea.com/project/7260/interface/api/746788)
 */

export function finFlowSendList(data) {
  return ajax({ url: `/fin/flow/send/list`, method: "post", data });
}

/*
 *@序号:605
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138883)
 *@菜单名称:receiveDetail(https://apaas-yapi.midea.com/project/7260/interface/api/746791)
 */

export function finFlowReceiveDetail(data) {
  return ajax({ url: `/fin/flow/receive/detail`, method: "post", data });
}

/*
 *@序号:606
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138883)
 *@菜单名称:uploadFile2Fin(https://apaas-yapi.midea.com/project/7260/interface/api/746794)
 */

export function finFlowSendFileupload(data) {
  return ajax({ url: `/fin/flow/send/fileupload`, method: "post", data });
}

/*
 *@序号:607
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138883)
 *@菜单名称:finReject(https://apaas-yapi.midea.com/project/7260/interface/api/746797)
 */

export function finFlowReject(data) {
  return ajax({ url: `/fin/flow/reject`, method: "post", data });
}

/*
 *@序号:608
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138883)
 *@菜单名称:resend(https://apaas-yapi.midea.com/project/7260/interface/api/746800)
 */

export function finFlowResend(data) {
  return ajax({ url: `/fin/flow/resend`, method: "post", data });
}

/*
 *@序号:609
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138883)
 *@菜单名称:asynReceiveDeal(https://apaas-yapi.midea.com/project/7260/interface/api/746803)
 */

export function finFlowAsynReceiveDeal(data) {
  return ajax({ url: `/fin/flow/asynReceiveDeal`, method: "post", data });
}

/*
 *@序号:610
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138885)
 *@菜单名称:优惠融资费率列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746806)
 */

export function finVipRateSelect(data) {
  return ajax({ url: `/fin/vip/rate/select`, method: "post", data });
}

/*
 *@序号:611
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138885)
 *@菜单名称:优惠融资费率明细查询(https://apaas-yapi.midea.com/project/7260/interface/api/746809)
 */

export function finVipRateDetail(data) {
  return ajax({ url: `/fin/vip/rate/detail`, method: "post", data });
}

/*
 *@序号:612
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138885)
 *@菜单名称:优惠融资费率-新增项(https://apaas-yapi.midea.com/project/7260/interface/api/746812)
 */

export function finVipRateAdd(data) {
  return ajax({ url: `/fin/vip/rate/add`, method: "post", data });
}

/*
 *@序号:613
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138885)
 *@菜单名称:优惠融资费率-变更项(https://apaas-yapi.midea.com/project/7260/interface/api/746815)
 */

export function finVipRateEdit(data) {
  return ajax({ url: `/fin/vip/rate/edit`, method: "post", data });
}

/*
 *@序号:614
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138885)
 *@菜单名称:vip融资费率导出(https://apaas-yapi.midea.com/project/7260/interface/api/746818)
 */

export function finVipRateExport(params) {
  return ajax({ url: `/fin/vip/rate/export`, method: "get", params });
}

/*
 *@序号:615
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138885)
 *@菜单名称:excel导入(https://apaas-yapi.midea.com/project/7260/interface/api/746821)
 */

export function finAddVipCostRateByExcel(data) {
  return ajax({ url: `/fin/addVipCostRate/byExcel`, method: "post", data });
}

/*
 *@序号:616
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:利率设置申请列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746824)
 */

export function interestMatchChangeSelectApplyPage(data) {
  return ajax({
    url: `/interestMatchChange/selectApplyPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:617
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:利率设置审批列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746827)
 */

export function interestMatchChangeSelectReviewPage(data) {
  return ajax({
    url: `/interestMatchChange/selectReviewPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:618
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:利率设置查询列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746830)
 */

export function interestMatchChangeSelectPassPage(data) {
  return ajax({
    url: `/interestMatchChange/selectPassPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:619
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:融资利率列出（导出）(https://apaas-yapi.midea.com/project/7260/interface/api/746833)
 */

export function interestMatchChangeExportSelectPassPageGen(data) {
  return ajax({
    url: `/interestMatchChange/export/selectPassPage/gen`,
    method: "post",
    data,
  });
}

/*
 *@序号:620
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:查询利率匹配流程明细(https://apaas-yapi.midea.com/project/7260/interface/api/746836)
 */

export function interestMatchChangeQueryProcessDetail(data) {
  return ajax({
    url: `/interestMatchChange/query/processDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:621
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:查询特殊利率明细(https://apaas-yapi.midea.com/project/7260/interface/api/746839)
 */

export function interestMatchChangeQueryVipProcessDetail(data) {
  return ajax({
    url: `/interestMatchChange/query/vip/processDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:622
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:单笔导入(https://apaas-yapi.midea.com/project/7260/interface/api/746842)
 */

export function interestMatchChangeAddBySingle(data) {
  return ajax({
    url: `/interestMatchChange/add/bySingle`,
    method: "post",
    data,
  });
}

/*
 *@序号:623
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:利率组合模型-审批流程：pass或reject操作(https://apaas-yapi.midea.com/project/7260/interface/api/746845)
 */

export function interestMatchChangeReviewInterestMatchProcess(data) {
  return ajax({
    url: `/interestMatchChange/review/interestMatchProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:624
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:上传并校验excel(https://apaas-yapi.midea.com/project/7260/interface/api/746848)
 */

export function interestMatchChangeAddUploadExcel(data) {
  return ajax({
    url: `/interestMatchChange/add/uploadExcel`,
    method: "post",
    data,
  });
}

/*
 *@序号:625
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:一键终止（作废所有特殊利率）(https://apaas-yapi.midea.com/project/7260/interface/api/746851)
 */

export function interestMatchChangeCancelAll(data) {
  return ajax({ url: `/interestMatchChange/cancelAll`, method: "post", data });
}

/*
 *@序号:626
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138887)
 *@菜单名称:特殊利率新增/变更/终止特殊利率(https://apaas-yapi.midea.com/project/7260/interface/api/746854)
 */

export function interestMatchChangeVipChange(data) {
  return ajax({ url: `/interestMatchChange/vip/change`, method: "post", data });
}

/*
 *@序号:627
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型设置申请列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746857)
 */

export function interestConfModelChangeSelectApplyPage(data) {
  return ajax({
    url: `/interestConfModelChange/selectApplyPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:628
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型设置复核列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746860)
 */

export function interestConfModelChangeSelectReviewPage(data) {
  return ajax({
    url: `/interestConfModelChange/selectReviewPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:629
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型设置查询列表（分页查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746863)
 */

export function interestConfModelChangeSelectPassPage(data) {
  return ajax({
    url: `/interestConfModelChange/selectPassPage`,
    method: "post",
    data,
  });
}

/*
 *@序号:630
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合代码生成器(https://apaas-yapi.midea.com/project/7260/interface/api/746866)
 */

export function interestConfModelChangeCreateRateCode(data) {
  return ajax({
    url: `/interestConfModelChange/createRateCode`,
    method: "post",
    data,
  });
}

/*
 *@序号:631
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型-保存草稿或提交审批(https://apaas-yapi.midea.com/project/7260/interface/api/746869)
 */

export function interestConfModelChangeSubmitInterestConfModelProcess(data) {
  return ajax({
    url: `/interestConfModelChange/submit/interestConfModelProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:632
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型-审批流程：pass或reject操作或作废(https://apaas-yapi.midea.com/project/7260/interface/api/746872)
 */

export function interestConfModelChangeReviewInterestConfModelProcess(data) {
  return ajax({
    url: `/interestConfModelChange/review/interestConfModelProcess`,
    method: "post",
    data,
  });
}

/*
 *@序号:633
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型明细查看(https://apaas-yapi.midea.com/project/7260/interface/api/746875)
 */

export function interestConfModelChangeInterestConfModelProcessDetail(data) {
  return ajax({
    url: `/interestConfModelChange/interestConfModelProcess/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:634
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:计算返显利率(https://apaas-yapi.midea.com/project/7260/interface/api/746878)
 */

export function interestConfModelChangeCaculateRate(data) {
  return ajax({
    url: `/interestConfModelChange/caculateRate`,
    method: "post",
    data,
  });
}

/*
 *@序号:635
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型-利率组合证明文件查看（输入rateConfId查询）(https://apaas-yapi.midea.com/project/7260/interface/api/746881)
 */

export function interestConfModelChangeInterestConfModelProcessFileDetailForRateConfId(
  data,
) {
  return ajax({
    url: `/interestConfModelChange/interestConfModelProcess/fileDetailForRateConfId`,
    method: "post",
    data,
  });
}

/*
 *@序号:636
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138889)
 *@菜单名称:利率组合模型-利率组合证明文件查看(https://apaas-yapi.midea.com/project/7260/interface/api/746884)
 */

export function interestConfModelChangeInterestConfModelProcessFileDetail(
  data,
) {
  return ajax({
    url: `/interestConfModelChange/interestConfModelProcess/fileDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:637
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端查看变更申请列表（复核员查看）(https://apaas-yapi.midea.com/project/7260/interface/api/746887)
 */

export function entOmcAccountSelectApprovalList(data) {
  return ajax({
    url: `/ent/omcAccount/selectApprovalList`,
    method: "post",
    data,
  });
}

/*
 *@序号:638
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查看变更待处理列表（经办员查看）(https://apaas-yapi.midea.com/project/7260/interface/api/746890)
 */

export function entOmcAccountSelectDraftList(data) {
  return ajax({ url: `/ent/omcAccount/selectDraftList`, method: "post", data });
}

/*
 *@序号:639
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端查看变更历史记录列表（分页）(https://apaas-yapi.midea.com/project/7260/interface/api/746893)
 */

export function entOmcAccountSelectAccountHistory(data) {
  return ajax({
    url: `/ent/omcAccount/selectAccountHistory`,
    method: "post",
    data,
  });
}

/*
 *@序号:640
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查看变更历史记录详情(https://apaas-yapi.midea.com/project/7260/interface/api/746896)
 */

export function entOmcAccountSelectAccountHistoryDetail(data) {
  return ajax({
    url: `/ent/omcAccount/selectAccountHistoryDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:641
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查询选择供应商(https://apaas-yapi.midea.com/project/7260/interface/api/746899)
 */

export function entOmcAccountSelectEnt(data) {
  return ajax({ url: `/ent/omcAccount/selectEnt`, method: "post", data });
}

/*
 *@序号:642
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查询待修改供应商企业（选择企业）(https://apaas-yapi.midea.com/project/7260/interface/api/746902)
 */

export function entOmcAccountSelectAllEnt(data) {
  return ajax({ url: `/ent/omcAccount/selectAllEnt`, method: "post", data });
}

/*
 *@序号:643
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端查询企业名下账户(https://apaas-yapi.midea.com/project/7260/interface/api/746905)
 */

export function entOmcAccountSelectAccout(data) {
  return ajax({ url: `/ent/omcAccount/selectAccout`, method: "post", data });
}

/*
 *@序号:644
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端提交变更申请草稿(https://apaas-yapi.midea.com/project/7260/interface/api/746908)
 */

export function entOmcAccountSubmitDraft(data) {
  return ajax({ url: `/ent/omcAccount/submitDraft`, method: "post", data });
}

/*
 *@序号:645
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端新增银行卡账号(https://apaas-yapi.midea.com/project/7260/interface/api/746911)
 */

export function entOmcAccountAddBankAcocunt(data) {
  return ajax({ url: `/ent/omcAccount/addBankAcocunt`, method: "post", data });
}

/*
 *@序号:646
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端删除银行卡账号(https://apaas-yapi.midea.com/project/7260/interface/api/746914)
 */

export function entOmcAccountDelete(data) {
  return ajax({ url: `/ent/omcAccount/delete`, method: "post", data });
}

/*
 *@序号:647
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查看附件(https://apaas-yapi.midea.com/project/7260/interface/api/746917)
 */

export function entOmcAccountSelectFiles(data) {
  return ajax({ url: `/ent/omcAccount/selectFiles`, method: "post", data });
}

/*
 *@序号:648
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端创建变更默认收款银行账号申请草稿（直接提交/保存草稿）(https://apaas-yapi.midea.com/project/7260/interface/api/746920)
 */

export function entOmcAccountSaveAsDraft(data) {
  return ajax({ url: `/ent/omcAccount/saveAsDraft`, method: "post", data });
}

/*
 *@序号:649
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端删除变更申请草稿(https://apaas-yapi.midea.com/project/7260/interface/api/746923)
 */

export function entOmcAccountDeleteDraft(data) {
  return ajax({ url: `/ent/omcAccount/deleteDraft`, method: "post", data });
}

/*
 *@序号:650
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端修改变更申请草稿(https://apaas-yapi.midea.com/project/7260/interface/api/746926)
 */

export function entOmcAccountUpdateDraft(data) {
  return ajax({ url: `/ent/omcAccount/updateDraft`, method: "post", data });
}

/*
 *@序号:651
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:上传文件并记录(https://apaas-yapi.midea.com/project/7260/interface/api/746929)
 */

export function entOmcAccountUpLoadFile(data) {
  return ajax({ url: `/ent/omcAccount/upLoadFile`, method: "post", data });
}

/*
 *@序号:652
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端审核变更默认收款账号申请(https://apaas-yapi.midea.com/project/7260/interface/api/746932)
 */

export function entOmcAccountReview(data) {
  return ajax({ url: `/ent/omcAccount/review`, method: "post", data });
}

/*
 *@序号:653
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端查看打款/打款校验异常列表（分页）(https://apaas-yapi.midea.com/project/7260/interface/api/746935)
 */

export function entOmcAccountSelectAbnormalList(data) {
  return ajax({
    url: `/ent/omcAccount/selectAbnormalList`,
    method: "post",
    data,
  });
}

/*
 *@序号:654
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:运营端处理打款/打款校验异常(https://apaas-yapi.midea.com/project/7260/interface/api/746938)
 */

export function entOmcAccountDealWithAbnormal(data) {
  return ajax({
    url: `/ent/omcAccount/dealWithAbnormal`,
    method: "post",
    data,
  });
}

/*
 *@序号:655
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查看异常处理结果(https://apaas-yapi.midea.com/project/7260/interface/api/746941)
 */

export function entOmcAccountDealResult(data) {
  return ajax({ url: `/ent/omcAccount/dealResult`, method: "post", data });
}

/*
 *@序号:656
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:查看变更申请记录详情(https://apaas-yapi.midea.com/project/7260/interface/api/746944)
 */

export function entOmcAccountSelectAccountChangeDetail(data) {
  return ajax({
    url: `/ent/omcAccount/selectAccountChangeDetail`,
    method: "post",
    data,
  });
}

/*
 *@序号:657
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:调用主数据,查询总行(https://apaas-yapi.midea.com/project/7260/interface/api/746947)
 */

export function entAccountQueryCnapsBankTypeList(data) {
  return ajax({
    url: `/ent/account/queryCnapsBankTypeList`,
    method: "post",
    data,
  });
}

/*
 *@序号:658
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138891)
 *@菜单名称:调用主数据,按条件查询有效的联行列表(https://apaas-yapi.midea.com/project/7260/interface/api/746950)
 */

export function entAccountQueryCnapsList(data) {
  return ajax({ url: `/ent/account/queryCnapsList`, method: "post", data });
}

/*
 *@序号:659
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138893)
 *@菜单名称:selectPayeesByParam(https://apaas-yapi.midea.com/project/7260/interface/api/746953)
 */

export function entPayeeList(data) {
  return ajax({ url: `/ent/payee/list`, method: "post", data });
}

/*
 *@序号:660
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138893)
 *@菜单名称:downLoadPayeeByParam(https://apaas-yapi.midea.com/project/7260/interface/api/746956)
 */

export function entPayeesDownload(data) {
  return ajax({ url: `/ent/payees/download`, method: "post", data });
}

/*
 *@序号:661
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:查询文档中心电子档案(https://apaas-yapi.midea.com/project/7260/interface/api/746959)
 */

export function entDocumentSelect(data) {
  return ajax({ url: `/ent/document/select`, method: "post", data });
}

/*
 *@序号:662
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:每次上传附件即保存为草稿文件(https://apaas-yapi.midea.com/project/7260/interface/api/746962)
 */

export function entDocumentUploadDraft(data) {
  return ajax({ url: `/ent/document/upload/draft`, method: "post", data });
}

/*
 *@序号:663
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:提交补上传申请(https://apaas-yapi.midea.com/project/7260/interface/api/746965)
 */

export function entDocumentUploadApply(data) {
  return ajax({ url: `/ent/document/upload/apply`, method: "post", data });
}

/*
 *@序号:664
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:审核补上传申请(https://apaas-yapi.midea.com/project/7260/interface/api/746968)
 */

export function entDocumentUploadAudit(data) {
  return ajax({ url: `/ent/document/upload/audit`, method: "post", data });
}

/*
 *@序号:665
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:经办员查看审批列表(https://apaas-yapi.midea.com/project/7260/interface/api/746971)
 */

export function entDocumentSelectApplyList(data) {
  return ajax({ url: `/ent/document/selectApplyList`, method: "post", data });
}

/*
 *@序号:666
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:审核员查看待审批列表(https://apaas-yapi.midea.com/project/7260/interface/api/746974)
 */

export function entDocumentSelectAuditList(data) {
  return ajax({ url: `/ent/document/selectAuditList`, method: "post", data });
}

/*
 *@序号:667
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:查看文件详情(https://apaas-yapi.midea.com/project/7260/interface/api/746977)
 */

export function entDocumentUploadViewDetail(data) {
  return ajax({ url: `/ent/document/upload/viewDetail`, method: "post", data });
}

/*
 *@序号:668
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:删除单个文件(https://apaas-yapi.midea.com/project/7260/interface/api/746980)
 */

export function entDocumentDeleteSingle(data) {
  return ajax({ url: `/ent/document/deleteSingle`, method: "post", data });
}

/*
 *@序号:669
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:删除草稿记录(https://apaas-yapi.midea.com/project/7260/interface/api/746983)
 */

export function entDocumentDeleteBiz(data) {
  return ajax({ url: `/ent/document/deleteBiz`, method: "post", data });
}

/*
 *@序号:670
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138895)
 *@菜单名称:查询档案上传记录(https://apaas-yapi.midea.com/project/7260/interface/api/746986)
 */

export function entDocumentSelectDocBiz(data) {
  return ajax({ url: `/ent/document/selectDocBiz`, method: "post", data });
}

/*
 *@序号:671
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-初始化(https://apaas-yapi.midea.com/project/7260/interface/api/746989)
 */

export function coreEntChgNewsonApplyInit(data) {
  return ajax({ url: `/core/ent/chg/newson/apply/init`, method: "post", data });
}

/*
 *@序号:672
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-查询申请明细（编辑、详情用）(https://apaas-yapi.midea.com/project/7260/interface/api/746992)
 */

export function coreEntChgNewsonApplyDetail(data) {
  return ajax({
    url: `/core/ent/chg/newson/apply/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:673
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-申请-保存(https://apaas-yapi.midea.com/project/7260/interface/api/746995)
 */

export function coreEntChgNewsonApplySave(data) {
  return ajax({ url: `/core/ent/chg/newson/apply/save`, method: "post", data });
}

/*
 *@序号:674
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-申请-提交(https://apaas-yapi.midea.com/project/7260/interface/api/746998)
 */

export function coreEntChgNewsonApplyCommit(data) {
  return ajax({
    url: `/core/ent/chg/newson/apply/commit`,
    method: "post",
    data,
  });
}

/*
 *@序号:675
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-申请-审核拒绝(https://apaas-yapi.midea.com/project/7260/interface/api/747001)
 */

export function coreEntChgNewsonApplyReject(data) {
  return ajax({
    url: `/core/ent/chg/newson/apply/reject`,
    method: "post",
    data,
  });
}

/*
 *@序号:676
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-申请-审核通过(https://apaas-yapi.midea.com/project/7260/interface/api/747004)
 */

export function coreEntChgNewsonApplyPass(data) {
  return ajax({ url: `/core/ent/chg/newson/apply/pass`, method: "post", data });
}

/*
 *@序号:677
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增分公司-申请-作废(https://apaas-yapi.midea.com/project/7260/interface/api/747007)
 */

export function coreEntChgNewsonApplyCancle(data) {
  return ajax({
    url: `/core/ent/chg/newson/apply/cancle`,
    method: "post",
    data,
  });
}

/*
 *@序号:678
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增查询员-申请-初始化(https://apaas-yapi.midea.com/project/7260/interface/api/747010)
 */

export function coreEntChgNewempApplyInit(data) {
  return ajax({ url: `/core/ent/chg/newemp/apply/init`, method: "post", data });
}

/*
 *@序号:679
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增操作员-申请-明细(https://apaas-yapi.midea.com/project/7260/interface/api/747013)
 */

export function coreEntChgNewempApplyDetail(data) {
  return ajax({
    url: `/core/ent/chg/newemp/apply/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:680
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增操作员-申请-保存(https://apaas-yapi.midea.com/project/7260/interface/api/747016)
 */

export function coreEntChgNewempApplySave(data) {
  return ajax({ url: `/core/ent/chg/newemp/apply/save`, method: "post", data });
}

/*
 *@序号:681
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增操作员-申请-提交(https://apaas-yapi.midea.com/project/7260/interface/api/747019)
 */

export function coreEntChgNewempApplyCommit(data) {
  return ajax({
    url: `/core/ent/chg/newemp/apply/commit`,
    method: "post",
    data,
  });
}

/*
 *@序号:682
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增操作员-申请-审批通过(https://apaas-yapi.midea.com/project/7260/interface/api/747022)
 */

export function coreEntChgNewempApplyPass(data) {
  return ajax({ url: `/core/ent/chg/newemp/apply/pass`, method: "post", data });
}

/*
 *@序号:683
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增操作员-申请-拒绝(https://apaas-yapi.midea.com/project/7260/interface/api/747025)
 */

export function coreEntChgNewempApplyReject(data) {
  return ajax({
    url: `/core/ent/chg/newemp/apply/reject`,
    method: "post",
    data,
  });
}

/*
 *@序号:684
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增操作员-申请-作废(https://apaas-yapi.midea.com/project/7260/interface/api/747028)
 */

export function coreEntChgNewempApplyCancle(data) {
  return ajax({
    url: `/core/ent/chg/newemp/apply/cancle`,
    method: "post",
    data,
  });
}

/*
 *@序号:685
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:查询已入驻核心企业(https://apaas-yapi.midea.com/project/7260/interface/api/747031)
 */

export function coreEntChgEntCanapplyQuery(data) {
  return ajax({
    url: `/core/ent/chg/ent/canapply/query`,
    method: "post",
    data,
  });
}

/*
 *@序号:686
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增-申请-列表(https://apaas-yapi.midea.com/project/7260/interface/api/747034)
 */

export function coreEntChgEntCanapplyOption(data) {
  return ajax({
    url: `/core/ent/chg/ent/canapply/option`,
    method: "post",
    data,
  });
}

/*
 *@序号:687
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:历史-申请-列表(https://apaas-yapi.midea.com/project/7260/interface/api/747037)
 */

export function coreEntChgHisApplyList(data) {
  return ajax({ url: `/core/ent/chg/his/apply/list`, method: "post", data });
}

/*
 *@序号:688
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:历史-申请-导出(https://apaas-yapi.midea.com/project/7260/interface/api/747040)
 */

export function coreEntChgHisApplyExport(params) {
  return ajax({ url: `/core/ent/chg/his/apply/export`, method: "get", params });
}

/*
 *@序号:689
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:用户查询（身份证类型，身份证，名称）(https://apaas-yapi.midea.com/project/7260/interface/api/747043)
 */

export function coreEntChgUserQuery(data) {
  return ajax({ url: `/core/ent/chg/user/query`, method: "post", data });
}

/*
 *@序号:690
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:getUserName(https://apaas-yapi.midea.com/project/7260/interface/api/747046)
 */

export function coreEntChgUsernameGet(data) {
  return ajax({ url: `/core/ent/chg/username/get`, method: "post", data });
}

/*
 *@序号:691
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增查询员-申请-初始化(https://apaas-yapi.midea.com/project/7260/interface/api/747049)
 */

export function coreEntChgNewempApplyEntList(data) {
  return ajax({
    url: `/core/ent/chg/newemp/apply/entList`,
    method: "post",
    data,
  });
}

/*
 *@序号:692
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增银行账号-申请-初始化(https://apaas-yapi.midea.com/project/7260/interface/api/747052)
 */

export function coreEntChgNewaccApplyInit(data) {
  return ajax({ url: `/core/ent/chg/newacc/apply/init`, method: "post", data });
}

/*
 *@序号:693
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增账户-申请-明细(https://apaas-yapi.midea.com/project/7260/interface/api/747055)
 */

export function coreEntChgNewaccApplyDetail(data) {
  return ajax({
    url: `/core/ent/chg/newacc/apply/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:694
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增账户-申请-保存(https://apaas-yapi.midea.com/project/7260/interface/api/747058)
 */

export function coreEntChgNewaccApplySave(data) {
  return ajax({ url: `/core/ent/chg/newacc/apply/save`, method: "post", data });
}

/*
 *@序号:695
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增账户-申请-审批通过(https://apaas-yapi.midea.com/project/7260/interface/api/747061)
 */

export function coreEntChgNewaccApplyPass(data) {
  return ajax({ url: `/core/ent/chg/newacc/apply/pass`, method: "post", data });
}

/*
 *@序号:696
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增账户-申请-拒绝(https://apaas-yapi.midea.com/project/7260/interface/api/747064)
 */

export function coreEntChgNewaccApplyReject(data) {
  return ajax({
    url: `/core/ent/chg/newacc/apply/reject`,
    method: "post",
    data,
  });
}

/*
 *@序号:697
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:新增账户-申请-作废(https://apaas-yapi.midea.com/project/7260/interface/api/747067)
 */

export function coreEntChgNewaccApplyCancle(data) {
  return ajax({
    url: `/core/ent/chg/newacc/apply/cancle`,
    method: "post",
    data,
  });
}

/*
 *@序号:698
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:查询核心企业是否美的成员单位(https://apaas-yapi.midea.com/project/7260/interface/api/747070)
 */

export function coreEntChgCheckismidea(data) {
  return ajax({ url: `/core/ent/chg/checkismidea`, method: "post", data });
}

/*
 *@序号:699
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:核心企业新增操作员(https://apaas-yapi.midea.com/project/7260/interface/api/747073)
 */

export function coreEntChgNewempSaveUser(data) {
  return ajax({ url: `/core/ent/chg/newemp/save/user`, method: "post", data });
}

/*
 *@序号:700
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:审核员上传文件(https://apaas-yapi.midea.com/project/7260/interface/api/747076)
 */

export function coreEntChgUploadReview(data) {
  return ajax({ url: `/core/ent/chg/upload4Review`, method: "post", data });
}

/*
 *@序号:701
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138899)
 *@菜单名称:queryIntentionPage(https://apaas-yapi.midea.com/project/7260/interface/api/747079)
 */

export function entIntentionQueryPagenation(data) {
  return ajax({ url: `/ent/intention/query/pagenation`, method: "post", data });
}

/*
 *@序号:702
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138899)
 *@菜单名称:getIntentionInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747082)
 */

export function entIntentionGetInfo(data) {
  return ajax({ url: `/ent/intention/get/info`, method: "post", data });
}

/*
 *@序号:703
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138899)
 *@菜单名称:handleIntentionInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747085)
 */

export function entIntentionHandleInfo(data) {
  return ajax({ url: `/ent/intention/handle/info`, method: "post", data });
}

/*
 *@序号:704
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138899)
 *@菜单名称:意向-信息-导出(https://apaas-yapi.midea.com/project/7260/interface/api/747088)
 */

export function entIntentionApplyExport(data) {
  return ajax({ url: `/ent/intention/apply/export`, method: "post", data });
}

/*
 *@序号:705
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectMemInfoChange(https://apaas-yapi.midea.com/project/7260/interface/api/747091)
 */

export function memSelectMemInfoChange(data) {
  return ajax({ url: `/mem/select/mem/info/change`, method: "post", data });
}

/*
 *@序号:706
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:addMemInfoChange(https://apaas-yapi.midea.com/project/7260/interface/api/747094)
 */

export function memAddMemInfoChange(data) {
  return ajax({ url: `/mem/add/mem/info/change`, method: "post", data });
}

/*
 *@序号:707
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectOldMemInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747097)
 */

export function memSelectOldMemInfo(data) {
  return ajax({ url: `/mem/select/old/mem/info`, method: "post", data });
}

/*
 *@序号:708
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:deleteApply(https://apaas-yapi.midea.com/project/7260/interface/api/747100)
 */

export function memDeleteApply(data) {
  return ajax({ url: `/mem/delete/apply`, method: "post", data });
}

/*
 *@序号:709
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectMemInfoMagnifier(https://apaas-yapi.midea.com/project/7260/interface/api/747103)
 */

export function memSelectMemInfoMagnifier(data) {
  return ajax({ url: `/mem/select/mem/info/magnifier`, method: "post", data });
}

/*
 *@序号:710
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectMemInfoProduct(https://apaas-yapi.midea.com/project/7260/interface/api/747106)
 */

export function memSelectMemInfoProduct(data) {
  return ajax({ url: `/mem/select/mem/info/product`, method: "post", data });
}

/*
 *@序号:711
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectMemInfoChangeDetail(https://apaas-yapi.midea.com/project/7260/interface/api/747109)
 */

export function memSelectMemInfoChangeDetail(params) {
  return ajax({
    url: `/mem/select/mem/info/change/detail`,
    method: "get",
    params,
  });
}

/*
 *@序号:712
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:updateMemInfoChange(https://apaas-yapi.midea.com/project/7260/interface/api/747112)
 */

export function memUpdateMemInfoChange(data) {
  return ajax({ url: `/mem/update/mem/info/change`, method: "post", data });
}

/*
 *@序号:713
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectMemInfoChangeReviewDetail(https://apaas-yapi.midea.com/project/7260/interface/api/747115)
 */

export function memSelectMemInfoChangeReviewDetail(data) {
  return ajax({
    url: `/mem/select/mem/info/change/review/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:714
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectMemInfoChangeSuccessDetail(https://apaas-yapi.midea.com/project/7260/interface/api/747118)
 */

export function memSelectMemInfoChangeSuccessDetail(data) {
  return ajax({
    url: `/mem/select/mem/info/change/success/detail`,
    method: "post",
    data,
  });
}

/*
 *@序号:715
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:fileUpload(https://apaas-yapi.midea.com/project/7260/interface/api/747121)
 */

export function memCommonUpload(data) {
  return ajax({ url: `/mem/common/upload`, method: "post", data });
}

/*
 *@序号:716
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectFileList(https://apaas-yapi.midea.com/project/7260/interface/api/747124)
 */

export function memSelectFileList(data) {
  return ajax({ url: `/mem/select/file/list`, method: "post", data });
}

/*
 *@序号:717
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:deleteFile(https://apaas-yapi.midea.com/project/7260/interface/api/747127)
 */

export function memDeleteFile(data) {
  return ajax({ url: `/mem/delete/file`, method: "post", data });
}

/*
 *@序号:718
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:deleteFile(https://apaas-yapi.midea.com/project/7260/interface/api/747130)
 */

export function memDeleteTempFile(data) {
  return ajax({ url: `/mem/delete/temp/file`, method: "post", data });
}

/*
 *@序号:719
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectFinishedChange(https://apaas-yapi.midea.com/project/7260/interface/api/747133)
 */

export function memSelectFinishedChange(data) {
  return ajax({ url: `/mem/select/finished/change`, method: "post", data });
}

/*
 *@序号:720
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectChangeDetail(https://apaas-yapi.midea.com/project/7260/interface/api/747136)
 */

export function memSelectChangeDetail(data) {
  return ajax({ url: `/mem/select/change/detail`, method: "post", data });
}

/*
 *@序号:721
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectFileListForChange(https://apaas-yapi.midea.com/project/7260/interface/api/747139)
 */

export function memSelectChangeFileList(data) {
  return ajax({ url: `/mem/select/change/file/list`, method: "post", data });
}

/*
 *@序号:722
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:upLoadFile(https://apaas-yapi.midea.com/project/7260/interface/api/747142)
 */

export function memSaveChangeUpLoadFile(data) {
  return ajax({ url: `/mem/save/change/upLoadFile`, method: "post", data });
}

/*
 *@序号:723
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:审核驳回(https://apaas-yapi.midea.com/project/7260/interface/api/747145)
 */

export function entEnterpriseAuthbyEnterpriseIdSelect(enterpriseid) {
  return ajax({
    url: `/ent/enterpriseAuth/${enterpriseid}/select`,
    method: "post",
  });
}

/*
 *@序号:724
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:selectEditEntAuth(https://apaas-yapi.midea.com/project/7260/interface/api/747148)
 */

export function entEnterpriseAuthbyEnterpriseIdEditSelect(enterpriseid) {
  return ajax({
    url: `/ent/enterpriseAuth/${enterpriseid}/edit/select`,
    method: "post",
  });
}

/*
 *@序号:725
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:selectEntAuthByentTypeAndNameOrCode(https://apaas-yapi.midea.com/project/7260/interface/api/747151)
 */

export function entEnterpriseAuthSelectPaddingAuth(data) {
  return ajax({
    url: `/ent/enterpriseAuth/selectPaddingAuth`,
    method: "post",
    data,
  });
}

/*
 *@序号:726
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:checkEnterpriseInfoIsRepeat(https://apaas-yapi.midea.com/project/7260/interface/api/747154)
 */

export function entEnterpriseAuthCheckEnterpriseInfoIsRepeat(data) {
  return ajax({
    url: `/ent/enterpriseAuth/checkEnterpriseInfoIsRepeat`,
    method: "post",
    data,
  });
}

/*
 *@序号:727
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:企业认证复核通过(https://apaas-yapi.midea.com/project/7260/interface/api/747157)
 */

export function entEnterpriseAuthReviewPassEntInfoAuth(data) {
  return ajax({
    url: `/ent/enterpriseAuth/reviewPassEntInfoAuth`,
    method: "post",
    data,
  });
}

/*
 *@序号:728
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:企业认证复核驳回(https://apaas-yapi.midea.com/project/7260/interface/api/747160)
 */

export function entEnterpriseAuthReviewRejectEntInfoAuth(data) {
  return ajax({
    url: `/ent/enterpriseAuth/reviewRejectEntInfoAuth`,
    method: "post",
    data,
  });
}

/*
 *@序号:729
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:企业认证复核作废(https://apaas-yapi.midea.com/project/7260/interface/api/747163)
 */

export function entEnterpriseAuthReviewCancelEntInfoAuth(data) {
  return ajax({
    url: `/ent/enterpriseAuth/reviewCancelEntInfoAuth`,
    method: "post",
    data,
  });
}

/*
 *@序号:730
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138901)
 *@菜单名称:企业认证驳回后重发(https://apaas-yapi.midea.com/project/7260/interface/api/747166)
 */

export function entEnterpriseAuthRejectResendEntInfoAuth(data) {
  return ajax({
    url: `/ent/enterpriseAuth/rejectResendEntInfoAuth`,
    method: "post",
    data,
  });
}

/*
 *@序号:731
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:editEnterprise(https://apaas-yapi.midea.com/project/7260/interface/api/747169)
 */

export function entEnterpriseEdit(data) {
  return ajax({ url: `/ent/enterprise/edit`, method: "post", data });
}

/*
 *@序号:732
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:reAuthEnterprise(https://apaas-yapi.midea.com/project/7260/interface/api/747172)
 */

export function entEnterpriseReAuth(data) {
  return ajax({ url: `/ent/enterprise/reAuth`, method: "post", data });
}

/*
 *@序号:733
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:frozenEnterprise(https://apaas-yapi.midea.com/project/7260/interface/api/747175)
 */

export function entEnterprisebyEnterpriseIdFrozen(enterpriseid) {
  return ajax({
    url: `/ent/enterprise/${enterpriseid}/frozen`,
    method: "post",
  });
}

/*
 *@序号:734
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:thawEnterprise(https://apaas-yapi.midea.com/project/7260/interface/api/747178)
 */

export function entEnterprisebyEnterpriseIdThaw(enterpriseid) {
  return ajax({ url: `/ent/enterprise/${enterpriseid}/thaw`, method: "post" });
}

/*
 *@序号:735
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectByentTypeAndNameOrCode(https://apaas-yapi.midea.com/project/7260/interface/api/747181)
 */

export function entEnterpriseSelect(data) {
  return ajax({ url: `/ent/enterprise/select`, method: "post", data });
}

/*
 *@序号:736
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectDetails(https://apaas-yapi.midea.com/project/7260/interface/api/747184)
 */

export function entEnterprisebyEnterpriseIdSelectDetails(enterpriseid) {
  return ajax({
    url: `/ent/enterprise/${enterpriseid}/selectDetails`,
    method: "post",
  });
}

/*
 *@序号:737
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:queryEnterpriseByParam(https://apaas-yapi.midea.com/project/7260/interface/api/747187)
 */

export function entEnterprisesQuery(data) {
  return ajax({ url: `/ent/enterprises/query`, method: "post", data });
}

/*
 *@序号:738
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:memEntInit(https://apaas-yapi.midea.com/project/7260/interface/api/747190)
 */

export function entMementInit(params) {
  return ajax({ url: `/ent/mement/init`, method: "get", params });
}

/*
 *@序号:739
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:选择已入驻完成的企业(https://apaas-yapi.midea.com/project/7260/interface/api/747193)
 */

export function entEnterpriseSelectEnt(data) {
  return ajax({ url: `/ent/enterprise/selectEnt`, method: "post", data });
}

/*
 *@序号:740
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:修改企业等级(https://apaas-yapi.midea.com/project/7260/interface/api/747196)
 */

export function entEnterpriseUpdateEntGrade(data) {
  return ajax({ url: `/ent/enterprise/updateEntGrade`, method: "post", data });
}

/*
 *@序号:741
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:selectEntInfoByNameOrOrgCode(https://apaas-yapi.midea.com/project/7260/interface/api/747199)
 */

export function entSelectEntInfo(data) {
  return ajax({ url: `/ent/select/entInfo`, method: "post", data });
}

/*
 *@序号:742
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:exportSell(https://apaas-yapi.midea.com/project/7260/interface/api/747202)
 */

export function entEntInfoExport(params) {
  return ajax({ url: `/ent/entInfo/export`, method: "get", params });
}

/*
 *@序号:743
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:查询已入驻的核心企业或供应商(https://apaas-yapi.midea.com/project/7260/interface/api/747205)
 */

export function entEnterpriseSelectOuterEnt(data) {
  return ajax({ url: `/ent/enterprise/selectOuterEnt`, method: "post", data });
}

/*
 *@序号:744
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findEntDocOrganCodeType(https://apaas-yapi.midea.com/project/7260/interface/api/747208)
 */

export function entOnlineSupFindOrganCodeType(data) {
  return ajax({
    url: `/ent/online/sup/findOrganCodeType`,
    method: "post",
    data,
  });
}

/*
 *@序号:745
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:企业认证申请(https://apaas-yapi.midea.com/project/7260/interface/api/747211)
 */

export function entOnlineFindEnts(data) {
  return ajax({ url: `/ent/online/1/findEnts`, method: "post", data });
}

/*
 *@序号:746
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:企业认证复核(https://apaas-yapi.midea.com/project/7260/interface/api/747214)
 */

export function entOnlineFindEnts(data) {
  return ajax({ url: `/ent/online/2/findEnts`, method: "post", data });
}

/*
 *@序号:747
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:企业认证查询(https://apaas-yapi.midea.com/project/7260/interface/api/747217)
 */

export function entOnlineFindEnts(data) {
  return ajax({ url: `/ent/online/3/findEnts`, method: "post", data });
}

/*
 *@序号:748
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:cancelFrozen(https://apaas-yapi.midea.com/project/7260/interface/api/747220)
 */

export function entOnlineCancelFrozen(data) {
  return ajax({ url: `/ent/online/cancelFrozen`, method: "post", data });
}

/*
 *@序号:749
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:editAccountMoneyValidate(https://apaas-yapi.midea.com/project/7260/interface/api/747223)
 */

export function entOnlineEditAccountMoneyValidate(data) {
  return ajax({
    url: `/ent/online/editAccountMoneyValidate`,
    method: "post",
    data,
  });
}

/*
 *@序号:750
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747226)
 */

export function entOnlineSupFindEntInfo(data) {
  return ajax({ url: `/ent/online/sup/findEntInfo`, method: "post", data });
}

/*
 *@序号:751
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findEntAccount(https://apaas-yapi.midea.com/project/7260/interface/api/747229)
 */

export function entOnlineSupFindEntAccount(data) {
  return ajax({ url: `/ent/online/sup/findEntAccount`, method: "post", data });
}

/*
 *@序号:752
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findEntUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747232)
 */

export function entOnlineSupFindUserInfo(data) {
  return ajax({ url: `/ent/online/sup/findUserInfo`, method: "post", data });
}

/*
 *@序号:753
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findEntDocInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747235)
 */

export function entOnlineSupFindDocInfo(data) {
  return ajax({ url: `/ent/online/sup/findDocInfo`, method: "post", data });
}

/*
 *@序号:754
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findMemEntInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747238)
 */

export function entOnlineMemFindEntInfo(data) {
  return ajax({ url: `/ent/online/mem/findEntInfo`, method: "post", data });
}

/*
 *@序号:755
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findMemAccountInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747241)
 */

export function entOnlineMemFindAccountInfo(data) {
  return ajax({ url: `/ent/online/mem/findAccountInfo`, method: "post", data });
}

/*
 *@序号:756
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findMemUserInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747244)
 */

export function entOnlineMemFindUserInfo(data) {
  return ajax({ url: `/ent/online/mem/findUserInfo`, method: "post", data });
}

/*
 *@序号:757
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findMemDocInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747247)
 */

export function entOnlineMemFindDocInfo(data) {
  return ajax({ url: `/ent/online/mem/findDocInfo`, method: "post", data });
}

/*
 *@序号:758
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:findOperatorRecordInfo(https://apaas-yapi.midea.com/project/7260/interface/api/747250)
 */

export function entOnlineOperatorRecord(data) {
  return ajax({ url: `/ent/online/operatorRecord`, method: "post", data });
}

/*
 *@序号:759
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138897)
 *@菜单名称:updateMemEntother(https://apaas-yapi.midea.com/project/7260/interface/api/747253)
 */

export function entOnlineMemUpdateMemEntother(data) {
  return ajax({
    url: `/ent/online/mem/updateMemEntother`,
    method: "post",
    data,
  });
}

/*
 *@序号:760
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:syncVerifyData(https://apaas-yapi.midea.com/project/7260/interface/api/749444)
 */

export function batchTransferAcceptSyncVerifyData(data) {
  return ajax({
    url: `/batch/transfer/accept/syncVerifyData`,
    method: "post",
    data,
  });
}

/*
 *@序号:761
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138849)
 *@菜单名称:轮询风控结果(https://apaas-yapi.midea.com/project/7260/interface/api/749490)
 */

export function batchTransferRiskRes(data) {
  return ajax({ url: `/batch/transfer/risk/res`, method: "post", data });
}

/*
 *@序号:762
 *@项目名称:ibcp_omc(https://apaas-yapi.midea.com/project/7260/interface/api/cat_138791)
 *@菜单名称:文件预览(https://apaas-yapi.midea.com/project/7260/interface/api/749494)
 */

export function systemFilePreview(params) {
  return ajax({ url: `/system/file/preview`, method: "get", params });
}
