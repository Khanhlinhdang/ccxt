'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetCurrencies(params) { return this['publicGetCurrencies'](params); }
    publicGetPairs(params) { return this['publicGetPairs'](params); }
    publicGetOrderbookPairName(params) { return this['publicGetOrderbookPairName'](params); }
    publicGetExchanges(params) { return this['publicGetExchanges'](params); }
    publicGetChartsPairTypeChart(params) { return this['publicGetChartsPairTypeChart'](params); }
    publicGetTicker(params) { return this['publicGetTicker'](params); }
    privateGetWallets(params) { return this['privateGetWallets'](params); }
    privateGetOrdersOwn(params) { return this['privateGetOrdersOwn'](params); }
    privateGetOrderId(params) { return this['privateGetOrderId'](params); }
    privateGetExchangesOwn(params) { return this['privateGetExchangesOwn'](params); }
    privateGetDeposits(params) { return this['privateGetDeposits'](params); }
    privateGetWithdraws(params) { return this['privateGetWithdraws'](params); }
    privatePostOrder(params) { return this['privatePostOrder'](params); }
    privatePostOrderCancel(params) { return this['privatePostOrderCancel'](params); }
}

module.exports = Exchange;
