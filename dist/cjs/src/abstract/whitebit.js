'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    webGetV1Healthcheck(params) { return this['webGetV1Healthcheck'](params); }
    v1PublicGetMarkets(params) { return this['v1PublicGetMarkets'](params); }
    v1PublicGetTickers(params) { return this['v1PublicGetTickers'](params); }
    v1PublicGetTicker(params) { return this['v1PublicGetTicker'](params); }
    v1PublicGetSymbols(params) { return this['v1PublicGetSymbols'](params); }
    v1PublicGetDepthResult(params) { return this['v1PublicGetDepthResult'](params); }
    v1PublicGetHistory(params) { return this['v1PublicGetHistory'](params); }
    v1PublicGetKline(params) { return this['v1PublicGetKline'](params); }
    v1PrivatePostAccountBalance(params) { return this['v1PrivatePostAccountBalance'](params); }
    v1PrivatePostOrderNew(params) { return this['v1PrivatePostOrderNew'](params); }
    v1PrivatePostOrderCancel(params) { return this['v1PrivatePostOrderCancel'](params); }
    v1PrivatePostOrders(params) { return this['v1PrivatePostOrders'](params); }
    v1PrivatePostAccountOrderHistory(params) { return this['v1PrivatePostAccountOrderHistory'](params); }
    v1PrivatePostAccountExecutedHistory(params) { return this['v1PrivatePostAccountExecutedHistory'](params); }
    v1PrivatePostAccountExecutedHistoryAll(params) { return this['v1PrivatePostAccountExecutedHistoryAll'](params); }
    v1PrivatePostAccountOrder(params) { return this['v1PrivatePostAccountOrder'](params); }
    v2PublicGetMarkets(params) { return this['v2PublicGetMarkets'](params); }
    v2PublicGetTicker(params) { return this['v2PublicGetTicker'](params); }
    v2PublicGetAssets(params) { return this['v2PublicGetAssets'](params); }
    v2PublicGetFee(params) { return this['v2PublicGetFee'](params); }
    v2PublicGetDepthMarket(params) { return this['v2PublicGetDepthMarket'](params); }
    v2PublicGetTradesMarket(params) { return this['v2PublicGetTradesMarket'](params); }
    v4PublicGetAssets(params) { return this['v4PublicGetAssets'](params); }
    v4PublicGetCollateralMarkets(params) { return this['v4PublicGetCollateralMarkets'](params); }
    v4PublicGetFee(params) { return this['v4PublicGetFee'](params); }
    v4PublicGetOrderbookMarket(params) { return this['v4PublicGetOrderbookMarket'](params); }
    v4PublicGetTicker(params) { return this['v4PublicGetTicker'](params); }
    v4PublicGetTradesMarket(params) { return this['v4PublicGetTradesMarket'](params); }
    v4PublicGetTime(params) { return this['v4PublicGetTime'](params); }
    v4PublicGetPing(params) { return this['v4PublicGetPing'](params); }
    v4PublicGetMarkets(params) { return this['v4PublicGetMarkets'](params); }
    v4PrivatePostCollateralAccountBalance(params) { return this['v4PrivatePostCollateralAccountBalance'](params); }
    v4PrivatePostCollateralAccountPositionsHistory(params) { return this['v4PrivatePostCollateralAccountPositionsHistory'](params); }
    v4PrivatePostCollateralAccountLeverage(params) { return this['v4PrivatePostCollateralAccountLeverage'](params); }
    v4PrivatePostCollateralAccountPositionsOpen(params) { return this['v4PrivatePostCollateralAccountPositionsOpen'](params); }
    v4PrivatePostCollateralAccountSummary(params) { return this['v4PrivatePostCollateralAccountSummary'](params); }
    v4PrivatePostMainAccountAddress(params) { return this['v4PrivatePostMainAccountAddress'](params); }
    v4PrivatePostMainAccountBalance(params) { return this['v4PrivatePostMainAccountBalance'](params); }
    v4PrivatePostMainAccountCreateNewAddress(params) { return this['v4PrivatePostMainAccountCreateNewAddress'](params); }
    v4PrivatePostMainAccountCodes(params) { return this['v4PrivatePostMainAccountCodes'](params); }
    v4PrivatePostMainAccountCodesApply(params) { return this['v4PrivatePostMainAccountCodesApply'](params); }
    v4PrivatePostMainAccountCodesMy(params) { return this['v4PrivatePostMainAccountCodesMy'](params); }
    v4PrivatePostMainAccountCodesHistory(params) { return this['v4PrivatePostMainAccountCodesHistory'](params); }
    v4PrivatePostMainAccountFiatDepositUrl(params) { return this['v4PrivatePostMainAccountFiatDepositUrl'](params); }
    v4PrivatePostMainAccountHistory(params) { return this['v4PrivatePostMainAccountHistory'](params); }
    v4PrivatePostMainAccountWithdraw(params) { return this['v4PrivatePostMainAccountWithdraw'](params); }
    v4PrivatePostMainAccountWithdrawPay(params) { return this['v4PrivatePostMainAccountWithdrawPay'](params); }
    v4PrivatePostMainAccountTransfer(params) { return this['v4PrivatePostMainAccountTransfer'](params); }
    v4PrivatePostTradeAccountBalance(params) { return this['v4PrivatePostTradeAccountBalance'](params); }
    v4PrivatePostTradeAccountExecutedHistory(params) { return this['v4PrivatePostTradeAccountExecutedHistory'](params); }
    v4PrivatePostTradeAccountOrder(params) { return this['v4PrivatePostTradeAccountOrder'](params); }
    v4PrivatePostTradeAccountOrderHistory(params) { return this['v4PrivatePostTradeAccountOrderHistory'](params); }
    v4PrivatePostOrderCollateralLimit(params) { return this['v4PrivatePostOrderCollateralLimit'](params); }
    v4PrivatePostOrderCollateralMarket(params) { return this['v4PrivatePostOrderCollateralMarket'](params); }
    v4PrivatePostOrderCollateralTriggerMarket(params) { return this['v4PrivatePostOrderCollateralTriggerMarket'](params); }
    v4PrivatePostOrderNew(params) { return this['v4PrivatePostOrderNew'](params); }
    v4PrivatePostOrderMarket(params) { return this['v4PrivatePostOrderMarket'](params); }
    v4PrivatePostOrderStockMarket(params) { return this['v4PrivatePostOrderStockMarket'](params); }
    v4PrivatePostOrderStopLimit(params) { return this['v4PrivatePostOrderStopLimit'](params); }
    v4PrivatePostOrderStopMarket(params) { return this['v4PrivatePostOrderStopMarket'](params); }
    v4PrivatePostOrderCancel(params) { return this['v4PrivatePostOrderCancel'](params); }
    v4PrivatePostOrders(params) { return this['v4PrivatePostOrders'](params); }
    v4PrivatePostProfileWebsocketToken(params) { return this['v4PrivatePostProfileWebsocketToken'](params); }
}

module.exports = Exchange;
