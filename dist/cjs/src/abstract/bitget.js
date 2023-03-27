'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicSpotGetPublicTime(params) { return this['publicSpotGetPublicTime'](params); }
    publicSpotGetPublicCurrencies(params) { return this['publicSpotGetPublicCurrencies'](params); }
    publicSpotGetPublicProducts(params) { return this['publicSpotGetPublicProducts'](params); }
    publicSpotGetPublicProduct(params) { return this['publicSpotGetPublicProduct'](params); }
    publicSpotGetMarketTicker(params) { return this['publicSpotGetMarketTicker'](params); }
    publicSpotGetMarketTickers(params) { return this['publicSpotGetMarketTickers'](params); }
    publicSpotGetMarketFills(params) { return this['publicSpotGetMarketFills'](params); }
    publicSpotGetMarketCandles(params) { return this['publicSpotGetMarketCandles'](params); }
    publicSpotGetMarketDepth(params) { return this['publicSpotGetMarketDepth'](params); }
    publicSpotGetMarketSpotVipLevel(params) { return this['publicSpotGetMarketSpotVipLevel'](params); }
    publicMixGetMarketContracts(params) { return this['publicMixGetMarketContracts'](params); }
    publicMixGetMarketDepth(params) { return this['publicMixGetMarketDepth'](params); }
    publicMixGetMarketTicker(params) { return this['publicMixGetMarketTicker'](params); }
    publicMixGetMarketTickers(params) { return this['publicMixGetMarketTickers'](params); }
    publicMixGetMarketFills(params) { return this['publicMixGetMarketFills'](params); }
    publicMixGetMarketCandles(params) { return this['publicMixGetMarketCandles'](params); }
    publicMixGetMarketIndex(params) { return this['publicMixGetMarketIndex'](params); }
    publicMixGetMarketFundingTime(params) { return this['publicMixGetMarketFundingTime'](params); }
    publicMixGetMarketHistoryFundRate(params) { return this['publicMixGetMarketHistoryFundRate'](params); }
    publicMixGetMarketCurrentFundRate(params) { return this['publicMixGetMarketCurrentFundRate'](params); }
    publicMixGetMarketOpenInterest(params) { return this['publicMixGetMarketOpenInterest'](params); }
    publicMixGetMarketMarkPrice(params) { return this['publicMixGetMarketMarkPrice'](params); }
    publicMixGetMarketSymbolLeverage(params) { return this['publicMixGetMarketSymbolLeverage'](params); }
    publicMixGetMarketContractVipLevel(params) { return this['publicMixGetMarketContractVipLevel'](params); }
    privateSpotGetAccountGetInfo(params) { return this['privateSpotGetAccountGetInfo'](params); }
    privateSpotGetAccountAssets(params) { return this['privateSpotGetAccountAssets'](params); }
    privateSpotGetAccountTransferRecords(params) { return this['privateSpotGetAccountTransferRecords'](params); }
    privateSpotGetWalletDepositAddress(params) { return this['privateSpotGetWalletDepositAddress'](params); }
    privateSpotGetWalletWithdrawalInner(params) { return this['privateSpotGetWalletWithdrawalInner'](params); }
    privateSpotGetWalletWithdrawalList(params) { return this['privateSpotGetWalletWithdrawalList'](params); }
    privateSpotGetWalletDepositList(params) { return this['privateSpotGetWalletDepositList'](params); }
    privateSpotPostAccountBills(params) { return this['privateSpotPostAccountBills'](params); }
    privateSpotPostAccountSubAccountSpotAssets(params) { return this['privateSpotPostAccountSubAccountSpotAssets'](params); }
    privateSpotPostTradeOrders(params) { return this['privateSpotPostTradeOrders'](params); }
    privateSpotPostTradeBatchOrders(params) { return this['privateSpotPostTradeBatchOrders'](params); }
    privateSpotPostTradeCancelOrder(params) { return this['privateSpotPostTradeCancelOrder'](params); }
    privateSpotPostTradeCancelBatchOrders(params) { return this['privateSpotPostTradeCancelBatchOrders'](params); }
    privateSpotPostTradeOrderInfo(params) { return this['privateSpotPostTradeOrderInfo'](params); }
    privateSpotPostTradeOpenOrders(params) { return this['privateSpotPostTradeOpenOrders'](params); }
    privateSpotPostTradeHistory(params) { return this['privateSpotPostTradeHistory'](params); }
    privateSpotPostTradeFills(params) { return this['privateSpotPostTradeFills'](params); }
    privateSpotPostWalletTransfer(params) { return this['privateSpotPostWalletTransfer'](params); }
    privateSpotPostWalletWithdrawal(params) { return this['privateSpotPostWalletWithdrawal'](params); }
    privateSpotPostWalletSubTransfer(params) { return this['privateSpotPostWalletSubTransfer'](params); }
    privateSpotPostPlanPlacePlan(params) { return this['privateSpotPostPlanPlacePlan'](params); }
    privateSpotPostPlanModifyPlan(params) { return this['privateSpotPostPlanModifyPlan'](params); }
    privateSpotPostPlanCancelPlan(params) { return this['privateSpotPostPlanCancelPlan'](params); }
    privateSpotPostPlanCurrentPlan(params) { return this['privateSpotPostPlanCurrentPlan'](params); }
    privateSpotPostPlanHistoryPlan(params) { return this['privateSpotPostPlanHistoryPlan'](params); }
    privateMixGetAccountAccount(params) { return this['privateMixGetAccountAccount'](params); }
    privateMixGetAccountAccounts(params) { return this['privateMixGetAccountAccounts'](params); }
    privateMixGetAccountAccountBill(params) { return this['privateMixGetAccountAccountBill'](params); }
    privateMixGetAccountAccountBusinessBill(params) { return this['privateMixGetAccountAccountBusinessBill'](params); }
    privateMixGetAccountOpenCount(params) { return this['privateMixGetAccountOpenCount'](params); }
    privateMixGetOrderCurrent(params) { return this['privateMixGetOrderCurrent'](params); }
    privateMixGetOrderHistory(params) { return this['privateMixGetOrderHistory'](params); }
    privateMixGetOrderDetail(params) { return this['privateMixGetOrderDetail'](params); }
    privateMixGetOrderFills(params) { return this['privateMixGetOrderFills'](params); }
    privateMixGetOrderHistoryProductType(params) { return this['privateMixGetOrderHistoryProductType'](params); }
    privateMixGetOrderAllFills(params) { return this['privateMixGetOrderAllFills'](params); }
    privateMixGetPlanCurrentPlan(params) { return this['privateMixGetPlanCurrentPlan'](params); }
    privateMixGetPlanHistoryPlan(params) { return this['privateMixGetPlanHistoryPlan'](params); }
    privateMixGetPositionSinglePosition(params) { return this['privateMixGetPositionSinglePosition'](params); }
    privateMixGetPositionAllPosition(params) { return this['privateMixGetPositionAllPosition'](params); }
    privateMixGetTraceCurrentTrack(params) { return this['privateMixGetTraceCurrentTrack'](params); }
    privateMixGetTraceFollowerOrder(params) { return this['privateMixGetTraceFollowerOrder'](params); }
    privateMixGetTraceHistoryTrack(params) { return this['privateMixGetTraceHistoryTrack'](params); }
    privateMixGetTraceSummary(params) { return this['privateMixGetTraceSummary'](params); }
    privateMixGetTraceProfitSettleTokenIdGroup(params) { return this['privateMixGetTraceProfitSettleTokenIdGroup'](params); }
    privateMixGetTraceProfitDateGroupList(params) { return this['privateMixGetTraceProfitDateGroupList'](params); }
    privateMixGetTradeProfitDateList(params) { return this['privateMixGetTradeProfitDateList'](params); }
    privateMixGetTraceWaitProfitDateList(params) { return this['privateMixGetTraceWaitProfitDateList'](params); }
    privateMixGetTraceTraderSymbols(params) { return this['privateMixGetTraceTraderSymbols'](params); }
    privateMixGetOrderMarginCoinCurrent(params) { return this['privateMixGetOrderMarginCoinCurrent'](params); }
    privateMixPostAccountSetLeverage(params) { return this['privateMixPostAccountSetLeverage'](params); }
    privateMixPostAccountSetMargin(params) { return this['privateMixPostAccountSetMargin'](params); }
    privateMixPostAccountSetMarginMode(params) { return this['privateMixPostAccountSetMarginMode'](params); }
    privateMixPostAccountSetPositionMode(params) { return this['privateMixPostAccountSetPositionMode'](params); }
    privateMixPostOrderPlaceOrder(params) { return this['privateMixPostOrderPlaceOrder'](params); }
    privateMixPostOrderBatchOrders(params) { return this['privateMixPostOrderBatchOrders'](params); }
    privateMixPostOrderCancelOrder(params) { return this['privateMixPostOrderCancelOrder'](params); }
    privateMixPostOrderCancelAllOrders(params) { return this['privateMixPostOrderCancelAllOrders'](params); }
    privateMixPostOrderCancelBatchOrders(params) { return this['privateMixPostOrderCancelBatchOrders'](params); }
    privateMixPostPlanPlacePlan(params) { return this['privateMixPostPlanPlacePlan'](params); }
    privateMixPostPlanModifyPlan(params) { return this['privateMixPostPlanModifyPlan'](params); }
    privateMixPostPlanModifyPlanPreset(params) { return this['privateMixPostPlanModifyPlanPreset'](params); }
    privateMixPostPlanPlaceTPSL(params) { return this['privateMixPostPlanPlaceTPSL'](params); }
    privateMixPostPlanPlaceTrailStop(params) { return this['privateMixPostPlanPlaceTrailStop'](params); }
    privateMixPostPlanPlacePositionsTPSL(params) { return this['privateMixPostPlanPlacePositionsTPSL'](params); }
    privateMixPostPlanModifyTPSLPlan(params) { return this['privateMixPostPlanModifyTPSLPlan'](params); }
    privateMixPostPlanCancelPlan(params) { return this['privateMixPostPlanCancelPlan'](params); }
    privateMixPostPlanCancelAllPlan(params) { return this['privateMixPostPlanCancelAllPlan'](params); }
    privateMixPostTraceCloseTrackOrder(params) { return this['privateMixPostTraceCloseTrackOrder'](params); }
    privateMixPostTraceSetUpCopySymbols(params) { return this['privateMixPostTraceSetUpCopySymbols'](params); }
}

module.exports = Exchange;
