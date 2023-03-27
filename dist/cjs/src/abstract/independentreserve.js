'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetGetValidPrimaryCurrencyCodes(params) { return this['publicGetGetValidPrimaryCurrencyCodes'](params); }
    publicGetGetValidSecondaryCurrencyCodes(params) { return this['publicGetGetValidSecondaryCurrencyCodes'](params); }
    publicGetGetValidLimitOrderTypes(params) { return this['publicGetGetValidLimitOrderTypes'](params); }
    publicGetGetValidMarketOrderTypes(params) { return this['publicGetGetValidMarketOrderTypes'](params); }
    publicGetGetValidOrderTypes(params) { return this['publicGetGetValidOrderTypes'](params); }
    publicGetGetValidTransactionTypes(params) { return this['publicGetGetValidTransactionTypes'](params); }
    publicGetGetMarketSummary(params) { return this['publicGetGetMarketSummary'](params); }
    publicGetGetOrderBook(params) { return this['publicGetGetOrderBook'](params); }
    publicGetGetAllOrders(params) { return this['publicGetGetAllOrders'](params); }
    publicGetGetTradeHistorySummary(params) { return this['publicGetGetTradeHistorySummary'](params); }
    publicGetGetRecentTrades(params) { return this['publicGetGetRecentTrades'](params); }
    publicGetGetFxRates(params) { return this['publicGetGetFxRates'](params); }
    publicGetGetOrderMinimumVolumes(params) { return this['publicGetGetOrderMinimumVolumes'](params); }
    publicGetGetCryptoWithdrawalFees(params) { return this['publicGetGetCryptoWithdrawalFees'](params); }
    privatePostGetOpenOrders(params) { return this['privatePostGetOpenOrders'](params); }
    privatePostGetClosedOrders(params) { return this['privatePostGetClosedOrders'](params); }
    privatePostGetClosedFilledOrders(params) { return this['privatePostGetClosedFilledOrders'](params); }
    privatePostGetOrderDetails(params) { return this['privatePostGetOrderDetails'](params); }
    privatePostGetAccounts(params) { return this['privatePostGetAccounts'](params); }
    privatePostGetTransactions(params) { return this['privatePostGetTransactions'](params); }
    privatePostGetFiatBankAccounts(params) { return this['privatePostGetFiatBankAccounts'](params); }
    privatePostGetDigitalCurrencyDepositAddress(params) { return this['privatePostGetDigitalCurrencyDepositAddress'](params); }
    privatePostGetDigitalCurrencyDepositAddresses(params) { return this['privatePostGetDigitalCurrencyDepositAddresses'](params); }
    privatePostGetTrades(params) { return this['privatePostGetTrades'](params); }
    privatePostGetBrokerageFees(params) { return this['privatePostGetBrokerageFees'](params); }
    privatePostGetDigitalCurrencyWithdrawal(params) { return this['privatePostGetDigitalCurrencyWithdrawal'](params); }
    privatePostPlaceLimitOrder(params) { return this['privatePostPlaceLimitOrder'](params); }
    privatePostPlaceMarketOrder(params) { return this['privatePostPlaceMarketOrder'](params); }
    privatePostCancelOrder(params) { return this['privatePostCancelOrder'](params); }
    privatePostSynchDigitalCurrencyDepositAddressWithBlockchain(params) { return this['privatePostSynchDigitalCurrencyDepositAddressWithBlockchain'](params); }
    privatePostRequestFiatWithdrawal(params) { return this['privatePostRequestFiatWithdrawal'](params); }
    privatePostWithdrawFiatCurrency(params) { return this['privatePostWithdrawFiatCurrency'](params); }
    privatePostWithdrawDigitalCurrency(params) { return this['privatePostWithdrawDigitalCurrency'](params); }
}

module.exports = Exchange;
