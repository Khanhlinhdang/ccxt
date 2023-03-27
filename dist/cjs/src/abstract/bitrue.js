'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    klinePublicGetPublicJson(params) { return this['klinePublicGetPublicJson'](params); }
    klinePublicGetPublicCurrencyJson(params) { return this['klinePublicGetPublicCurrencyJson'](params); }
    v1PublicGetPing(params) { return this['v1PublicGetPing'](params); }
    v1PublicGetTime(params) { return this['v1PublicGetTime'](params); }
    v1PublicGetExchangeInfo(params) { return this['v1PublicGetExchangeInfo'](params); }
    v1PublicGetDepth(params) { return this['v1PublicGetDepth'](params); }
    v1PublicGetTrades(params) { return this['v1PublicGetTrades'](params); }
    v1PublicGetHistoricalTrades(params) { return this['v1PublicGetHistoricalTrades'](params); }
    v1PublicGetAggTrades(params) { return this['v1PublicGetAggTrades'](params); }
    v1PublicGetTicker24hr(params) { return this['v1PublicGetTicker24hr'](params); }
    v1PublicGetTickerPrice(params) { return this['v1PublicGetTickerPrice'](params); }
    v1PublicGetTickerBookTicker(params) { return this['v1PublicGetTickerBookTicker'](params); }
    v1PublicGetMarketKline(params) { return this['v1PublicGetMarketKline'](params); }
    v1PrivateGetOrder(params) { return this['v1PrivateGetOrder'](params); }
    v1PrivateGetOpenOrders(params) { return this['v1PrivateGetOpenOrders'](params); }
    v1PrivateGetAllOrders(params) { return this['v1PrivateGetAllOrders'](params); }
    v1PrivateGetAccount(params) { return this['v1PrivateGetAccount'](params); }
    v1PrivateGetMyTrades(params) { return this['v1PrivateGetMyTrades'](params); }
    v1PrivateGetEtfNetValueSymbol(params) { return this['v1PrivateGetEtfNetValueSymbol'](params); }
    v1PrivateGetWithdrawHistory(params) { return this['v1PrivateGetWithdrawHistory'](params); }
    v1PrivateGetDepositHistory(params) { return this['v1PrivateGetDepositHistory'](params); }
    v1PrivatePostOrder(params) { return this['v1PrivatePostOrder'](params); }
    v1PrivatePostWithdrawCommit(params) { return this['v1PrivatePostWithdrawCommit'](params); }
    v1PrivateDeleteOrder(params) { return this['v1PrivateDeleteOrder'](params); }
    v2PrivateGetMyTrades(params) { return this['v2PrivateGetMyTrades'](params); }
    openPrivatePostPoseidonApiV1ListenKey(params) { return this['openPrivatePostPoseidonApiV1ListenKey'](params); }
    openPrivatePutPoseidonApiV1ListenKeyListenKey(params) { return this['openPrivatePutPoseidonApiV1ListenKeyListenKey'](params); }
    openPrivateDeletePoseidonApiV1ListenKeyListenKey(params) { return this['openPrivateDeletePoseidonApiV1ListenKeyListenKey'](params); }
}

module.exports = Exchange;
