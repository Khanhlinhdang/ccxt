// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import _coinbasepro from '../coinbasepro.js';

export default class coinbasepro extends _coinbasepro {
    publicGetCurrencies (params?: {}): Promise<implicitReturnType> { return this['publicGetCurrencies'] (params); }
    publicGetProducts (params?: {}): Promise<implicitReturnType> { return this['publicGetProducts'] (params); }
    publicGetProductsId (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsId'] (params); }
    publicGetProductsIdBook (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsIdBook'] (params); }
    publicGetProductsIdCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsIdCandles'] (params); }
    publicGetProductsIdStats (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsIdStats'] (params); }
    publicGetProductsIdTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsIdTicker'] (params); }
    publicGetProductsIdTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsIdTrades'] (params); }
    publicGetTime (params?: {}): Promise<implicitReturnType> { return this['publicGetTime'] (params); }
    publicGetProductsSparkLines (params?: {}): Promise<implicitReturnType> { return this['publicGetProductsSparkLines'] (params); }
    privateGetAccounts (params?: {}): Promise<implicitReturnType> { return this['privateGetAccounts'] (params); }
    privateGetAccountsId (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountsId'] (params); }
    privateGetAccountsIdHolds (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountsIdHolds'] (params); }
    privateGetAccountsIdLedger (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountsIdLedger'] (params); }
    privateGetAccountsIdTransfers (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountsIdTransfers'] (params); }
    privateGetCoinbaseAccounts (params?: {}): Promise<implicitReturnType> { return this['privateGetCoinbaseAccounts'] (params); }
    privateGetFills (params?: {}): Promise<implicitReturnType> { return this['privateGetFills'] (params); }
    privateGetFunding (params?: {}): Promise<implicitReturnType> { return this['privateGetFunding'] (params); }
    privateGetFees (params?: {}): Promise<implicitReturnType> { return this['privateGetFees'] (params); }
    privateGetMarginProfileInformation (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginProfileInformation'] (params); }
    privateGetMarginBuyingPower (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginBuyingPower'] (params); }
    privateGetMarginWithdrawalPower (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginWithdrawalPower'] (params); }
    privateGetMarginWithdrawalPowerAll (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginWithdrawalPowerAll'] (params); }
    privateGetMarginExitPlan (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginExitPlan'] (params); }
    privateGetMarginLiquidationHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginLiquidationHistory'] (params); }
    privateGetMarginPositionRefreshAmounts (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginPositionRefreshAmounts'] (params); }
    privateGetMarginStatus (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginStatus'] (params); }
    privateGetOracle (params?: {}): Promise<implicitReturnType> { return this['privateGetOracle'] (params); }
    privateGetOrders (params?: {}): Promise<implicitReturnType> { return this['privateGetOrders'] (params); }
    privateGetOrdersId (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersId'] (params); }
    privateGetOrdersClientClientOid (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersClientClientOid'] (params); }
    privateGetOtcOrders (params?: {}): Promise<implicitReturnType> { return this['privateGetOtcOrders'] (params); }
    privateGetPaymentMethods (params?: {}): Promise<implicitReturnType> { return this['privateGetPaymentMethods'] (params); }
    privateGetPosition (params?: {}): Promise<implicitReturnType> { return this['privateGetPosition'] (params); }
    privateGetProfiles (params?: {}): Promise<implicitReturnType> { return this['privateGetProfiles'] (params); }
    privateGetProfilesId (params?: {}): Promise<implicitReturnType> { return this['privateGetProfilesId'] (params); }
    privateGetReportsReportId (params?: {}): Promise<implicitReturnType> { return this['privateGetReportsReportId'] (params); }
    privateGetTransfers (params?: {}): Promise<implicitReturnType> { return this['privateGetTransfers'] (params); }
    privateGetTransfersTransferId (params?: {}): Promise<implicitReturnType> { return this['privateGetTransfersTransferId'] (params); }
    privateGetUsersSelfExchangeLimits (params?: {}): Promise<implicitReturnType> { return this['privateGetUsersSelfExchangeLimits'] (params); }
    privateGetUsersSelfHoldBalances (params?: {}): Promise<implicitReturnType> { return this['privateGetUsersSelfHoldBalances'] (params); }
    privateGetUsersSelfTrailingVolume (params?: {}): Promise<implicitReturnType> { return this['privateGetUsersSelfTrailingVolume'] (params); }
    privateGetWithdrawalsFeeEstimate (params?: {}): Promise<implicitReturnType> { return this['privateGetWithdrawalsFeeEstimate'] (params); }
    privateGetConversionsConversionId (params?: {}): Promise<implicitReturnType> { return this['privateGetConversionsConversionId'] (params); }
    privatePostConversions (params?: {}): Promise<implicitReturnType> { return this['privatePostConversions'] (params); }
    privatePostDepositsCoinbaseAccount (params?: {}): Promise<implicitReturnType> { return this['privatePostDepositsCoinbaseAccount'] (params); }
    privatePostDepositsPaymentMethod (params?: {}): Promise<implicitReturnType> { return this['privatePostDepositsPaymentMethod'] (params); }
    privatePostCoinbaseAccountsIdAddresses (params?: {}): Promise<implicitReturnType> { return this['privatePostCoinbaseAccountsIdAddresses'] (params); }
    privatePostFundingRepay (params?: {}): Promise<implicitReturnType> { return this['privatePostFundingRepay'] (params); }
    privatePostOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostOrders'] (params); }
    privatePostPositionClose (params?: {}): Promise<implicitReturnType> { return this['privatePostPositionClose'] (params); }
    privatePostProfilesMarginTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostProfilesMarginTransfer'] (params); }
    privatePostProfilesTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostProfilesTransfer'] (params); }
    privatePostReports (params?: {}): Promise<implicitReturnType> { return this['privatePostReports'] (params); }
    privatePostWithdrawalsCoinbase (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdrawalsCoinbase'] (params); }
    privatePostWithdrawalsCoinbaseAccount (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdrawalsCoinbaseAccount'] (params); }
    privatePostWithdrawalsCrypto (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdrawalsCrypto'] (params); }
    privatePostWithdrawalsPaymentMethod (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdrawalsPaymentMethod'] (params); }
    privateDeleteOrders (params?: {}): Promise<implicitReturnType> { return this['privateDeleteOrders'] (params); }
    privateDeleteOrdersClientClientOid (params?: {}): Promise<implicitReturnType> { return this['privateDeleteOrdersClientClientOid'] (params); }
    privateDeleteOrdersId (params?: {}): Promise<implicitReturnType> { return this['privateDeleteOrdersId'] (params); }
}