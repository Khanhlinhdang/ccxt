'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetIdAll(params) { return this['publicGetIdAll'](params); }
    publicGetIdMarket(params) { return this['publicGetIdMarket'](params); }
    publicGetIdOrderbook(params) { return this['publicGetIdOrderbook'](params); }
    publicGetIdTicker(params) { return this['publicGetIdTicker'](params); }
    publicGetIdTrades(params) { return this['publicGetIdTrades'](params); }
    privatePostInfo(params) { return this['privatePostInfo'](params); }
    privatePostTrade(params) { return this['privatePostTrade'](params); }
    privatePostCancel(params) { return this['privatePostCancel'](params); }
    privatePostOrderbook(params) { return this['privatePostOrderbook'](params); }
    privatePostOrders(params) { return this['privatePostOrders'](params); }
    privatePostTransfer(params) { return this['privatePostTransfer'](params); }
    privatePostWithdraw(params) { return this['privatePostWithdraw'](params); }
    privatePostHistory(params) { return this['privatePostHistory'](params); }
    privatePostTransactions(params) { return this['privatePostTransactions'](params); }
    v1_01PublicGetTradingTicker(params) { return this['v1_01PublicGetTradingTicker'](params); }
    v1_01PublicGetTradingTickerSymbol(params) { return this['v1_01PublicGetTradingTickerSymbol'](params); }
    v1_01PublicGetTradingStats(params) { return this['v1_01PublicGetTradingStats'](params); }
    v1_01PublicGetTradingStatsSymbol(params) { return this['v1_01PublicGetTradingStatsSymbol'](params); }
    v1_01PublicGetTradingOrderbookSymbol(params) { return this['v1_01PublicGetTradingOrderbookSymbol'](params); }
    v1_01PublicGetTradingTransactionsSymbol(params) { return this['v1_01PublicGetTradingTransactionsSymbol'](params); }
    v1_01PublicGetTradingCandleHistorySymbolResolution(params) { return this['v1_01PublicGetTradingCandleHistorySymbolResolution'](params); }
    v1_01PrivateGetApiPaymentsDepositsCryptoAddresses(params) { return this['v1_01PrivateGetApiPaymentsDepositsCryptoAddresses'](params); }
    v1_01PrivateGetPaymentsWithdrawalDetailId(params) { return this['v1_01PrivateGetPaymentsWithdrawalDetailId'](params); }
    v1_01PrivateGetPaymentsDepositDetailId(params) { return this['v1_01PrivateGetPaymentsDepositDetailId'](params); }
    v1_01PrivateGetTradingOffer(params) { return this['v1_01PrivateGetTradingOffer'](params); }
    v1_01PrivateGetTradingStopOffer(params) { return this['v1_01PrivateGetTradingStopOffer'](params); }
    v1_01PrivateGetTradingConfigSymbol(params) { return this['v1_01PrivateGetTradingConfigSymbol'](params); }
    v1_01PrivateGetTradingHistoryTransactions(params) { return this['v1_01PrivateGetTradingHistoryTransactions'](params); }
    v1_01PrivateGetBalancesBITBAYHistory(params) { return this['v1_01PrivateGetBalancesBITBAYHistory'](params); }
    v1_01PrivateGetBalancesBITBAYBalance(params) { return this['v1_01PrivateGetBalancesBITBAYBalance'](params); }
    v1_01PrivateGetFiatCantorRateBaseIdQuoteId(params) { return this['v1_01PrivateGetFiatCantorRateBaseIdQuoteId'](params); }
    v1_01PrivateGetFiatCantorHistory(params) { return this['v1_01PrivateGetFiatCantorHistory'](params); }
    v1_01PrivatePostTradingOfferSymbol(params) { return this['v1_01PrivatePostTradingOfferSymbol'](params); }
    v1_01PrivatePostTradingStopOfferSymbol(params) { return this['v1_01PrivatePostTradingStopOfferSymbol'](params); }
    v1_01PrivatePostTradingConfigSymbol(params) { return this['v1_01PrivatePostTradingConfigSymbol'](params); }
    v1_01PrivatePostBalancesBITBAYBalance(params) { return this['v1_01PrivatePostBalancesBITBAYBalance'](params); }
    v1_01PrivatePostBalancesBITBAYBalanceTransferSourceDestination(params) { return this['v1_01PrivatePostBalancesBITBAYBalanceTransferSourceDestination'](params); }
    v1_01PrivatePostFiatCantorExchange(params) { return this['v1_01PrivatePostFiatCantorExchange'](params); }
    v1_01PrivateDeleteTradingOfferSymbolIdSidePrice(params) { return this['v1_01PrivateDeleteTradingOfferSymbolIdSidePrice'](params); }
    v1_01PrivateDeleteTradingStopOfferSymbolIdSidePrice(params) { return this['v1_01PrivateDeleteTradingStopOfferSymbolIdSidePrice'](params); }
    v1_01PrivatePutBalancesBITBAYBalanceId(params) { return this['v1_01PrivatePutBalancesBITBAYBalanceId'](params); }
}

module.exports = Exchange;
