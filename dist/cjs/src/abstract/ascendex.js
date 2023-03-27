'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    v1PublicGetAssets(params) { return this['v1PublicGetAssets'](params); }
    v1PublicGetProducts(params) { return this['v1PublicGetProducts'](params); }
    v1PublicGetTicker(params) { return this['v1PublicGetTicker'](params); }
    v1PublicGetBarhistInfo(params) { return this['v1PublicGetBarhistInfo'](params); }
    v1PublicGetBarhist(params) { return this['v1PublicGetBarhist'](params); }
    v1PublicGetDepth(params) { return this['v1PublicGetDepth'](params); }
    v1PublicGetTrades(params) { return this['v1PublicGetTrades'](params); }
    v1PublicGetCashAssets(params) { return this['v1PublicGetCashAssets'](params); }
    v1PublicGetCashProducts(params) { return this['v1PublicGetCashProducts'](params); }
    v1PublicGetMarginAssets(params) { return this['v1PublicGetMarginAssets'](params); }
    v1PublicGetMarginProducts(params) { return this['v1PublicGetMarginProducts'](params); }
    v1PublicGetFuturesCollateral(params) { return this['v1PublicGetFuturesCollateral'](params); }
    v1PublicGetFuturesContracts(params) { return this['v1PublicGetFuturesContracts'](params); }
    v1PublicGetFuturesRefPx(params) { return this['v1PublicGetFuturesRefPx'](params); }
    v1PublicGetFuturesMarketData(params) { return this['v1PublicGetFuturesMarketData'](params); }
    v1PublicGetFuturesFundingRates(params) { return this['v1PublicGetFuturesFundingRates'](params); }
    v1PublicGetRiskLimitInfo(params) { return this['v1PublicGetRiskLimitInfo'](params); }
    v1PublicGetExchangeInfo(params) { return this['v1PublicGetExchangeInfo'](params); }
    v1PrivateGetInfo(params) { return this['v1PrivateGetInfo'](params); }
    v1PrivateGetWalletTransactions(params) { return this['v1PrivateGetWalletTransactions'](params); }
    v1PrivateGetWalletDepositAddress(params) { return this['v1PrivateGetWalletDepositAddress'](params); }
    v1PrivateGetDataBalanceSnapshot(params) { return this['v1PrivateGetDataBalanceSnapshot'](params); }
    v1PrivateGetDataBalanceHistory(params) { return this['v1PrivateGetDataBalanceHistory'](params); }
    v1PrivateAccountCategoryGetBalance(params) { return this['v1PrivateAccountCategoryGetBalance'](params); }
    v1PrivateAccountCategoryGetOrderOpen(params) { return this['v1PrivateAccountCategoryGetOrderOpen'](params); }
    v1PrivateAccountCategoryGetOrderStatus(params) { return this['v1PrivateAccountCategoryGetOrderStatus'](params); }
    v1PrivateAccountCategoryGetOrderHistCurrent(params) { return this['v1PrivateAccountCategoryGetOrderHistCurrent'](params); }
    v1PrivateAccountCategoryGetRisk(params) { return this['v1PrivateAccountCategoryGetRisk'](params); }
    v1PrivateAccountCategoryPostOrder(params) { return this['v1PrivateAccountCategoryPostOrder'](params); }
    v1PrivateAccountCategoryPostOrderBatch(params) { return this['v1PrivateAccountCategoryPostOrderBatch'](params); }
    v1PrivateAccountCategoryDeleteOrder(params) { return this['v1PrivateAccountCategoryDeleteOrder'](params); }
    v1PrivateAccountCategoryDeleteOrderAll(params) { return this['v1PrivateAccountCategoryDeleteOrderAll'](params); }
    v1PrivateAccountCategoryDeleteOrderBatch(params) { return this['v1PrivateAccountCategoryDeleteOrderBatch'](params); }
    v1PrivateAccountGroupGetCashBalance(params) { return this['v1PrivateAccountGroupGetCashBalance'](params); }
    v1PrivateAccountGroupGetMarginBalance(params) { return this['v1PrivateAccountGroupGetMarginBalance'](params); }
    v1PrivateAccountGroupGetMarginRisk(params) { return this['v1PrivateAccountGroupGetMarginRisk'](params); }
    v1PrivateAccountGroupGetFuturesCollateralBalance(params) { return this['v1PrivateAccountGroupGetFuturesCollateralBalance'](params); }
    v1PrivateAccountGroupGetFuturesPosition(params) { return this['v1PrivateAccountGroupGetFuturesPosition'](params); }
    v1PrivateAccountGroupGetFuturesRisk(params) { return this['v1PrivateAccountGroupGetFuturesRisk'](params); }
    v1PrivateAccountGroupGetFuturesFundingPayments(params) { return this['v1PrivateAccountGroupGetFuturesFundingPayments'](params); }
    v1PrivateAccountGroupGetOrderHist(params) { return this['v1PrivateAccountGroupGetOrderHist'](params); }
    v1PrivateAccountGroupGetSpotFee(params) { return this['v1PrivateAccountGroupGetSpotFee'](params); }
    v1PrivateAccountGroupPostTransfer(params) { return this['v1PrivateAccountGroupPostTransfer'](params); }
    v1PrivateAccountGroupPostFuturesTransferDeposit(params) { return this['v1PrivateAccountGroupPostFuturesTransferDeposit'](params); }
    v1PrivateAccountGroupPostFuturesTransferWithdraw(params) { return this['v1PrivateAccountGroupPostFuturesTransferWithdraw'](params); }
    v2PublicGetAssets(params) { return this['v2PublicGetAssets'](params); }
    v2PublicGetFuturesContract(params) { return this['v2PublicGetFuturesContract'](params); }
    v2PublicGetFuturesCollateral(params) { return this['v2PublicGetFuturesCollateral'](params); }
    v2PublicGetFuturesPricingData(params) { return this['v2PublicGetFuturesPricingData'](params); }
    v2PublicGetFuturesTicker(params) { return this['v2PublicGetFuturesTicker'](params); }
    v2PrivateGetAccountInfo(params) { return this['v2PrivateGetAccountInfo'](params); }
    v2PrivateAccountGroupGetOrderHist(params) { return this['v2PrivateAccountGroupGetOrderHist'](params); }
    v2PrivateAccountGroupGetFuturesPosition(params) { return this['v2PrivateAccountGroupGetFuturesPosition'](params); }
    v2PrivateAccountGroupGetFuturesFreeMargin(params) { return this['v2PrivateAccountGroupGetFuturesFreeMargin'](params); }
    v2PrivateAccountGroupGetFuturesOrderHistCurrent(params) { return this['v2PrivateAccountGroupGetFuturesOrderHistCurrent'](params); }
    v2PrivateAccountGroupGetFuturesOrderOpen(params) { return this['v2PrivateAccountGroupGetFuturesOrderOpen'](params); }
    v2PrivateAccountGroupGetFuturesOrderStatus(params) { return this['v2PrivateAccountGroupGetFuturesOrderStatus'](params); }
    v2PrivateAccountGroupPostFuturesIsolatedPositionMargin(params) { return this['v2PrivateAccountGroupPostFuturesIsolatedPositionMargin'](params); }
    v2PrivateAccountGroupPostFuturesMarginType(params) { return this['v2PrivateAccountGroupPostFuturesMarginType'](params); }
    v2PrivateAccountGroupPostFuturesLeverage(params) { return this['v2PrivateAccountGroupPostFuturesLeverage'](params); }
    v2PrivateAccountGroupPostFuturesTransferDeposit(params) { return this['v2PrivateAccountGroupPostFuturesTransferDeposit'](params); }
    v2PrivateAccountGroupPostFuturesTransferWithdraw(params) { return this['v2PrivateAccountGroupPostFuturesTransferWithdraw'](params); }
    v2PrivateAccountGroupPostFuturesOrder(params) { return this['v2PrivateAccountGroupPostFuturesOrder'](params); }
    v2PrivateAccountGroupPostFuturesOrderBatch(params) { return this['v2PrivateAccountGroupPostFuturesOrderBatch'](params); }
    v2PrivateAccountGroupPostFuturesOrderOpen(params) { return this['v2PrivateAccountGroupPostFuturesOrderOpen'](params); }
    v2PrivateAccountGroupPostSubuserSubuserTransfer(params) { return this['v2PrivateAccountGroupPostSubuserSubuserTransfer'](params); }
    v2PrivateAccountGroupPostSubuserSubuserTransferHist(params) { return this['v2PrivateAccountGroupPostSubuserSubuserTransferHist'](params); }
    v2PrivateAccountGroupDeleteFuturesOrder(params) { return this['v2PrivateAccountGroupDeleteFuturesOrder'](params); }
    v2PrivateAccountGroupDeleteFuturesOrderBatch(params) { return this['v2PrivateAccountGroupDeleteFuturesOrderBatch'](params); }
    v2PrivateAccountGroupDeleteFuturesOrderAll(params) { return this['v2PrivateAccountGroupDeleteFuturesOrderAll'](params); }
}

module.exports = Exchange;
