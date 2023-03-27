'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    v1PublicGetPublicAuth(params) { return this['v1PublicGetPublicAuth'](params); }
    v1PublicGetPublicGetInstruments(params) { return this['v1PublicGetPublicGetInstruments'](params); }
    v1PublicGetPublicGetBook(params) { return this['v1PublicGetPublicGetBook'](params); }
    v1PublicGetPublicGetCandlestick(params) { return this['v1PublicGetPublicGetCandlestick'](params); }
    v1PublicGetPublicGetTrades(params) { return this['v1PublicGetPublicGetTrades'](params); }
    v1PublicGetPublicGetTickers(params) { return this['v1PublicGetPublicGetTickers'](params); }
    v1PublicGetPublicGetValuations(params) { return this['v1PublicGetPublicGetValuations'](params); }
    v1PublicGetPublicGetExpiredSettlementPrice(params) { return this['v1PublicGetPublicGetExpiredSettlementPrice'](params); }
    v1PublicGetPublicGetInsurance(params) { return this['v1PublicGetPublicGetInsurance'](params); }
    v1PrivatePostPrivateSetCancelOnDisconnect(params) { return this['v1PrivatePostPrivateSetCancelOnDisconnect'](params); }
    v1PrivatePostPrivateGetCancelOnDisconnect(params) { return this['v1PrivatePostPrivateGetCancelOnDisconnect'](params); }
    v1PrivatePostPrivateUserBalance(params) { return this['v1PrivatePostPrivateUserBalance'](params); }
    v1PrivatePostPrivateUserBalanceHistory(params) { return this['v1PrivatePostPrivateUserBalanceHistory'](params); }
    v1PrivatePostPrivateGetPositions(params) { return this['v1PrivatePostPrivateGetPositions'](params); }
    v1PrivatePostPrivateCreateOrder(params) { return this['v1PrivatePostPrivateCreateOrder'](params); }
    v1PrivatePostPrivateCreateOrderList(params) { return this['v1PrivatePostPrivateCreateOrderList'](params); }
    v1PrivatePostPrivateCancelOrder(params) { return this['v1PrivatePostPrivateCancelOrder'](params); }
    v1PrivatePostPrivateCancelOrderList(params) { return this['v1PrivatePostPrivateCancelOrderList'](params); }
    v1PrivatePostPrivateCancelAllOrders(params) { return this['v1PrivatePostPrivateCancelAllOrders'](params); }
    v1PrivatePostPrivateClosePosition(params) { return this['v1PrivatePostPrivateClosePosition'](params); }
    v1PrivatePostPrivateGetOrderHistory(params) { return this['v1PrivatePostPrivateGetOrderHistory'](params); }
    v1PrivatePostPrivateGetOpenOrders(params) { return this['v1PrivatePostPrivateGetOpenOrders'](params); }
    v1PrivatePostPrivateGetOrderDetail(params) { return this['v1PrivatePostPrivateGetOrderDetail'](params); }
    v1PrivatePostPrivateGetTrades(params) { return this['v1PrivatePostPrivateGetTrades'](params); }
    v1PrivatePostPrivateChangeAccountLeverage(params) { return this['v1PrivatePostPrivateChangeAccountLeverage'](params); }
    v1PrivatePostPrivateGetTransactions(params) { return this['v1PrivatePostPrivateGetTransactions'](params); }
    v1PrivatePostPrivateCreateSubaccountTransfer(params) { return this['v1PrivatePostPrivateCreateSubaccountTransfer'](params); }
    v1PrivatePostPrivateGetSubaccountBalances(params) { return this['v1PrivatePostPrivateGetSubaccountBalances'](params); }
    v1PrivatePostPrivateGetOrderList(params) { return this['v1PrivatePostPrivateGetOrderList'](params); }
    v1PrivatePostPrivateCreateWithdrawal(params) { return this['v1PrivatePostPrivateCreateWithdrawal'](params); }
    v1PrivatePostPrivateGetCurrencyNetworks(params) { return this['v1PrivatePostPrivateGetCurrencyNetworks'](params); }
    v1PrivatePostPrivateGetDepositAddress(params) { return this['v1PrivatePostPrivateGetDepositAddress'](params); }
    v1PrivatePostPrivateGetAccounts(params) { return this['v1PrivatePostPrivateGetAccounts'](params); }
    v2PublicGetPublicAuth(params) { return this['v2PublicGetPublicAuth'](params); }
    v2PublicGetPublicGetInstruments(params) { return this['v2PublicGetPublicGetInstruments'](params); }
    v2PublicGetPublicGetBook(params) { return this['v2PublicGetPublicGetBook'](params); }
    v2PublicGetPublicGetCandlestick(params) { return this['v2PublicGetPublicGetCandlestick'](params); }
    v2PublicGetPublicGetTicker(params) { return this['v2PublicGetPublicGetTicker'](params); }
    v2PublicGetPublicGetTrades(params) { return this['v2PublicGetPublicGetTrades'](params); }
    v2PublicGetPublicMarginGetTransferCurrencies(params) { return this['v2PublicGetPublicMarginGetTransferCurrencies'](params); }
    v2PublicGetPublicMarginGetLoadCurrenices(params) { return this['v2PublicGetPublicMarginGetLoadCurrenices'](params); }
    v2PublicGetPublicRespondHeartbeat(params) { return this['v2PublicGetPublicRespondHeartbeat'](params); }
    v2PrivatePostPrivateSetCancelOnDisconnect(params) { return this['v2PrivatePostPrivateSetCancelOnDisconnect'](params); }
    v2PrivatePostPrivateGetCancelOnDisconnect(params) { return this['v2PrivatePostPrivateGetCancelOnDisconnect'](params); }
    v2PrivatePostPrivateCreateWithdrawal(params) { return this['v2PrivatePostPrivateCreateWithdrawal'](params); }
    v2PrivatePostPrivateGetWithdrawalHistory(params) { return this['v2PrivatePostPrivateGetWithdrawalHistory'](params); }
    v2PrivatePostPrivateGetCurrencyNetworks(params) { return this['v2PrivatePostPrivateGetCurrencyNetworks'](params); }
    v2PrivatePostPrivateGetDepositHistory(params) { return this['v2PrivatePostPrivateGetDepositHistory'](params); }
    v2PrivatePostPrivateGetDepositAddress(params) { return this['v2PrivatePostPrivateGetDepositAddress'](params); }
    v2PrivatePostPrivateGetAccountSummary(params) { return this['v2PrivatePostPrivateGetAccountSummary'](params); }
    v2PrivatePostPrivateCreateOrder(params) { return this['v2PrivatePostPrivateCreateOrder'](params); }
    v2PrivatePostPrivateCancelOrder(params) { return this['v2PrivatePostPrivateCancelOrder'](params); }
    v2PrivatePostPrivateCancelAllOrders(params) { return this['v2PrivatePostPrivateCancelAllOrders'](params); }
    v2PrivatePostPrivateCreateOrderList(params) { return this['v2PrivatePostPrivateCreateOrderList'](params); }
    v2PrivatePostPrivateGetOrderHistory(params) { return this['v2PrivatePostPrivateGetOrderHistory'](params); }
    v2PrivatePostPrivateGetOpenOrders(params) { return this['v2PrivatePostPrivateGetOpenOrders'](params); }
    v2PrivatePostPrivateGetOrderDetail(params) { return this['v2PrivatePostPrivateGetOrderDetail'](params); }
    v2PrivatePostPrivateGetTrades(params) { return this['v2PrivatePostPrivateGetTrades'](params); }
    v2PrivatePostPrivateMarginGetUserConfig(params) { return this['v2PrivatePostPrivateMarginGetUserConfig'](params); }
    v2PrivatePostPrivateMarginGetAccountSummary(params) { return this['v2PrivatePostPrivateMarginGetAccountSummary'](params); }
    v2PrivatePostPrivateMarginTransfer(params) { return this['v2PrivatePostPrivateMarginTransfer'](params); }
    v2PrivatePostPrivateMarginBorrow(params) { return this['v2PrivatePostPrivateMarginBorrow'](params); }
    v2PrivatePostPrivateMarginRepay(params) { return this['v2PrivatePostPrivateMarginRepay'](params); }
    v2PrivatePostPrivateMarginGetTransferHistory(params) { return this['v2PrivatePostPrivateMarginGetTransferHistory'](params); }
    v2PrivatePostPrivateMarginGetBorrowHistory(params) { return this['v2PrivatePostPrivateMarginGetBorrowHistory'](params); }
    v2PrivatePostPrivateMarginGetInterestHistory(params) { return this['v2PrivatePostPrivateMarginGetInterestHistory'](params); }
    v2PrivatePostPrivateMarginGetRepayHistory(params) { return this['v2PrivatePostPrivateMarginGetRepayHistory'](params); }
    v2PrivatePostPrivateMarginGetLiquidationHistory(params) { return this['v2PrivatePostPrivateMarginGetLiquidationHistory'](params); }
    v2PrivatePostPrivateMarginGetLiquidationOrders(params) { return this['v2PrivatePostPrivateMarginGetLiquidationOrders'](params); }
    v2PrivatePostPrivateMarginCreateOrder(params) { return this['v2PrivatePostPrivateMarginCreateOrder'](params); }
    v2PrivatePostPrivateMarginCancelOrder(params) { return this['v2PrivatePostPrivateMarginCancelOrder'](params); }
    v2PrivatePostPrivateMarginCancelAllOrders(params) { return this['v2PrivatePostPrivateMarginCancelAllOrders'](params); }
    v2PrivatePostPrivateMarginGetOrderHistory(params) { return this['v2PrivatePostPrivateMarginGetOrderHistory'](params); }
    v2PrivatePostPrivateMarginGetOpenOrders(params) { return this['v2PrivatePostPrivateMarginGetOpenOrders'](params); }
    v2PrivatePostPrivateMarginGetOrderDetail(params) { return this['v2PrivatePostPrivateMarginGetOrderDetail'](params); }
    v2PrivatePostPrivateMarginGetTrades(params) { return this['v2PrivatePostPrivateMarginGetTrades'](params); }
    v2PrivatePostPrivateDerivTransfer(params) { return this['v2PrivatePostPrivateDerivTransfer'](params); }
    v2PrivatePostPrivateDerivGetTransferHistory(params) { return this['v2PrivatePostPrivateDerivGetTransferHistory'](params); }
    v2PrivatePostPrivateGetAccounts(params) { return this['v2PrivatePostPrivateGetAccounts'](params); }
    v2PrivatePostPrivateGetSubaccountBalances(params) { return this['v2PrivatePostPrivateGetSubaccountBalances'](params); }
    v2PrivatePostPrivateCreateSubaccountTransfer(params) { return this['v2PrivatePostPrivateCreateSubaccountTransfer'](params); }
    v2PrivatePostPrivateOtcGetOtcUser(params) { return this['v2PrivatePostPrivateOtcGetOtcUser'](params); }
    v2PrivatePostPrivateOtcGetInstruments(params) { return this['v2PrivatePostPrivateOtcGetInstruments'](params); }
    v2PrivatePostPrivateOtcRequestQuote(params) { return this['v2PrivatePostPrivateOtcRequestQuote'](params); }
    v2PrivatePostPrivateOtcAcceptQuote(params) { return this['v2PrivatePostPrivateOtcAcceptQuote'](params); }
    v2PrivatePostPrivateOtcGetQuoteHistory(params) { return this['v2PrivatePostPrivateOtcGetQuoteHistory'](params); }
    v2PrivatePostPrivateOtcGetTradeHistory(params) { return this['v2PrivatePostPrivateOtcGetTradeHistory'](params); }
    derivativesPublicGetPublicAuth(params) { return this['derivativesPublicGetPublicAuth'](params); }
    derivativesPublicGetPublicGetInstruments(params) { return this['derivativesPublicGetPublicGetInstruments'](params); }
    derivativesPublicGetPublicGetBook(params) { return this['derivativesPublicGetPublicGetBook'](params); }
    derivativesPublicGetPublicGetCandlestick(params) { return this['derivativesPublicGetPublicGetCandlestick'](params); }
    derivativesPublicGetPublicGetTrades(params) { return this['derivativesPublicGetPublicGetTrades'](params); }
    derivativesPublicGetPublicGetTickers(params) { return this['derivativesPublicGetPublicGetTickers'](params); }
    derivativesPublicGetPublicGetValuations(params) { return this['derivativesPublicGetPublicGetValuations'](params); }
    derivativesPublicGetPublicGetExpiredSettlementPrice(params) { return this['derivativesPublicGetPublicGetExpiredSettlementPrice'](params); }
    derivativesPublicGetPublicGetInsurance(params) { return this['derivativesPublicGetPublicGetInsurance'](params); }
    derivativesPrivatePostPrivateSetCancelOnDisconnect(params) { return this['derivativesPrivatePostPrivateSetCancelOnDisconnect'](params); }
    derivativesPrivatePostPrivateGetCancelOnDisconnect(params) { return this['derivativesPrivatePostPrivateGetCancelOnDisconnect'](params); }
    derivativesPrivatePostPrivateUserBalance(params) { return this['derivativesPrivatePostPrivateUserBalance'](params); }
    derivativesPrivatePostPrivateUserBalanceHistory(params) { return this['derivativesPrivatePostPrivateUserBalanceHistory'](params); }
    derivativesPrivatePostPrivateGetPositions(params) { return this['derivativesPrivatePostPrivateGetPositions'](params); }
    derivativesPrivatePostPrivateCreateOrder(params) { return this['derivativesPrivatePostPrivateCreateOrder'](params); }
    derivativesPrivatePostPrivateCreateOrderList(params) { return this['derivativesPrivatePostPrivateCreateOrderList'](params); }
    derivativesPrivatePostPrivateCancelOrder(params) { return this['derivativesPrivatePostPrivateCancelOrder'](params); }
    derivativesPrivatePostPrivateCancelOrderList(params) { return this['derivativesPrivatePostPrivateCancelOrderList'](params); }
    derivativesPrivatePostPrivateCancelAllOrders(params) { return this['derivativesPrivatePostPrivateCancelAllOrders'](params); }
    derivativesPrivatePostPrivateClosePosition(params) { return this['derivativesPrivatePostPrivateClosePosition'](params); }
    derivativesPrivatePostPrivateConvertCollateral(params) { return this['derivativesPrivatePostPrivateConvertCollateral'](params); }
    derivativesPrivatePostPrivateGetOrderHistory(params) { return this['derivativesPrivatePostPrivateGetOrderHistory'](params); }
    derivativesPrivatePostPrivateGetOpenOrders(params) { return this['derivativesPrivatePostPrivateGetOpenOrders'](params); }
    derivativesPrivatePostPrivateGetOrderDetail(params) { return this['derivativesPrivatePostPrivateGetOrderDetail'](params); }
    derivativesPrivatePostPrivateGetTrades(params) { return this['derivativesPrivatePostPrivateGetTrades'](params); }
    derivativesPrivatePostPrivateChangeAccountLeverage(params) { return this['derivativesPrivatePostPrivateChangeAccountLeverage'](params); }
    derivativesPrivatePostPrivateGetTransactions(params) { return this['derivativesPrivatePostPrivateGetTransactions'](params); }
    derivativesPrivatePostPrivateCreateSubaccountTransfer(params) { return this['derivativesPrivatePostPrivateCreateSubaccountTransfer'](params); }
    derivativesPrivatePostPrivateGetSubaccountBalances(params) { return this['derivativesPrivatePostPrivateGetSubaccountBalances'](params); }
    derivativesPrivatePostPrivateGetOrderList(params) { return this['derivativesPrivatePostPrivateGetOrderList'](params); }
}

module.exports = Exchange;
