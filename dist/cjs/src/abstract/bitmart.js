'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetSystemTime(params) { return this['publicGetSystemTime'](params); }
    publicGetSystemService(params) { return this['publicGetSystemService'](params); }
    publicGetSpotV1Currencies(params) { return this['publicGetSpotV1Currencies'](params); }
    publicGetSpotV1Symbols(params) { return this['publicGetSpotV1Symbols'](params); }
    publicGetSpotV1SymbolsDetails(params) { return this['publicGetSpotV1SymbolsDetails'](params); }
    publicGetSpotV1Ticker(params) { return this['publicGetSpotV1Ticker'](params); }
    publicGetSpotV2Ticker(params) { return this['publicGetSpotV2Ticker'](params); }
    publicGetSpotV1Steps(params) { return this['publicGetSpotV1Steps'](params); }
    publicGetSpotV1SymbolsKline(params) { return this['publicGetSpotV1SymbolsKline'](params); }
    publicGetSpotV1SymbolsBook(params) { return this['publicGetSpotV1SymbolsBook'](params); }
    publicGetSpotV1SymbolsTrades(params) { return this['publicGetSpotV1SymbolsTrades'](params); }
    publicGetContractV1Tickers(params) { return this['publicGetContractV1Tickers'](params); }
    publicGetContractPublicDetails(params) { return this['publicGetContractPublicDetails'](params); }
    publicGetContractPublicDepth(params) { return this['publicGetContractPublicDepth'](params); }
    publicGetContractPublicOpenInterest(params) { return this['publicGetContractPublicOpenInterest'](params); }
    publicGetContractPublicFundingRate(params) { return this['publicGetContractPublicFundingRate'](params); }
    publicGetContractPublicKline(params) { return this['publicGetContractPublicKline'](params); }
    privateGetAccountSubAccountV1TransferList(params) { return this['privateGetAccountSubAccountV1TransferList'](params); }
    privateGetAccountSubAccountV1TransferHistory(params) { return this['privateGetAccountSubAccountV1TransferHistory'](params); }
    privateGetAccountSubAccountMainV1Wallet(params) { return this['privateGetAccountSubAccountMainV1Wallet'](params); }
    privateGetAccountSubAccountMainV1SubaccountList(params) { return this['privateGetAccountSubAccountMainV1SubaccountList'](params); }
    privateGetAccountV1Wallet(params) { return this['privateGetAccountV1Wallet'](params); }
    privateGetAccountV1Currencies(params) { return this['privateGetAccountV1Currencies'](params); }
    privateGetSpotV1Wallet(params) { return this['privateGetSpotV1Wallet'](params); }
    privateGetAccountV1DepositAddress(params) { return this['privateGetAccountV1DepositAddress'](params); }
    privateGetAccountV1WithdrawCharge(params) { return this['privateGetAccountV1WithdrawCharge'](params); }
    privateGetAccountV2DepositWithdrawHistory(params) { return this['privateGetAccountV2DepositWithdrawHistory'](params); }
    privateGetAccountV1DepositWithdrawDetail(params) { return this['privateGetAccountV1DepositWithdrawDetail'](params); }
    privateGetSpotV1OrderDetail(params) { return this['privateGetSpotV1OrderDetail'](params); }
    privateGetSpotV2Orders(params) { return this['privateGetSpotV2Orders'](params); }
    privateGetSpotV1Trades(params) { return this['privateGetSpotV1Trades'](params); }
    privateGetSpotV2Trades(params) { return this['privateGetSpotV2Trades'](params); }
    privateGetSpotV3Orders(params) { return this['privateGetSpotV3Orders'](params); }
    privateGetSpotV2OrderDetail(params) { return this['privateGetSpotV2OrderDetail'](params); }
    privateGetSpotV1MarginIsolatedBorrowRecord(params) { return this['privateGetSpotV1MarginIsolatedBorrowRecord'](params); }
    privateGetSpotV1MarginIsolatedRepayRecord(params) { return this['privateGetSpotV1MarginIsolatedRepayRecord'](params); }
    privateGetSpotV1MarginIsolatedPairs(params) { return this['privateGetSpotV1MarginIsolatedPairs'](params); }
    privateGetSpotV1MarginIsolatedAccount(params) { return this['privateGetSpotV1MarginIsolatedAccount'](params); }
    privateGetSpotV1TradeFee(params) { return this['privateGetSpotV1TradeFee'](params); }
    privateGetSpotV1UserFee(params) { return this['privateGetSpotV1UserFee'](params); }
    privateGetContractPrivateAssetsDetail(params) { return this['privateGetContractPrivateAssetsDetail'](params); }
    privateGetContractPrivateOrder(params) { return this['privateGetContractPrivateOrder'](params); }
    privateGetContractPrivateOrderHistory(params) { return this['privateGetContractPrivateOrderHistory'](params); }
    privateGetContractPrivatePosition(params) { return this['privateGetContractPrivatePosition'](params); }
    privatePostAccountSubAccountMainV1SubToMain(params) { return this['privatePostAccountSubAccountMainV1SubToMain'](params); }
    privatePostAccountSubAccountSubV1SubToMain(params) { return this['privatePostAccountSubAccountSubV1SubToMain'](params); }
    privatePostAccountSubAccountMainV1MainToSub(params) { return this['privatePostAccountSubAccountMainV1MainToSub'](params); }
    privatePostAccountSubAccountSubV1SubToSub(params) { return this['privatePostAccountSubAccountSubV1SubToSub'](params); }
    privatePostAccountSubAccountMainV1SubToSub(params) { return this['privatePostAccountSubAccountMainV1SubToSub'](params); }
    privatePostAccountV1WithdrawApply(params) { return this['privatePostAccountV1WithdrawApply'](params); }
    privatePostSpotV1SubmitOrder(params) { return this['privatePostSpotV1SubmitOrder'](params); }
    privatePostSpotV1BatchOrders(params) { return this['privatePostSpotV1BatchOrders'](params); }
    privatePostSpotV2CancelOrder(params) { return this['privatePostSpotV2CancelOrder'](params); }
    privatePostSpotV1CancelOrders(params) { return this['privatePostSpotV1CancelOrders'](params); }
    privatePostSpotV3CancelOrder(params) { return this['privatePostSpotV3CancelOrder'](params); }
    privatePostSpotV2BatchOrders(params) { return this['privatePostSpotV2BatchOrders'](params); }
    privatePostSpotV2SubmitOrder(params) { return this['privatePostSpotV2SubmitOrder'](params); }
    privatePostSpotV1MarginSubmitOrder(params) { return this['privatePostSpotV1MarginSubmitOrder'](params); }
    privatePostSpotV1MarginIsolatedBorrow(params) { return this['privatePostSpotV1MarginIsolatedBorrow'](params); }
    privatePostSpotV1MarginIsolatedRepay(params) { return this['privatePostSpotV1MarginIsolatedRepay'](params); }
    privatePostSpotV1MarginIsolatedTransfer(params) { return this['privatePostSpotV1MarginIsolatedTransfer'](params); }
    privatePostContractPrivateTrades(params) { return this['privatePostContractPrivateTrades'](params); }
}

module.exports = Exchange;
