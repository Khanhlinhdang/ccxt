// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetPublicCurrency (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicCurrency'] (params); }
    publicGetPublicSymbol (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicSymbol'] (params); }
    publicGetPublicTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicTicker'] (params); }
    publicGetPublicPriceRate (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicPriceRate'] (params); }
    publicGetPublicTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicTrades'] (params); }
    publicGetPublicOrderbook (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicOrderbook'] (params); }
    publicGetPublicCandles (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicCandles'] (params); }
    publicGetPublicFuturesInfo (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFuturesInfo'] (params); }
    publicGetPublicFuturesHistoryFunding (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFuturesHistoryFunding'] (params); }
    publicGetPublicFuturesCandlesIndexPrice (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFuturesCandlesIndexPrice'] (params); }
    publicGetPublicFuturesCandlesMarkPrice (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFuturesCandlesMarkPrice'] (params); }
    publicGetPublicFuturesCandlesPremiumIndex (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFuturesCandlesPremiumIndex'] (params); }
    publicGetPublicFuturesCandlesOpenInterest (params?: {}): Promise<implicitReturnType> { return this['publicGetPublicFuturesCandlesOpenInterest'] (params); }
    privateGetSpotBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotBalance'] (params); }
    privateGetSpotOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotOrder'] (params); }
    privateGetSpotOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotOrderClientOrderId'] (params); }
    privateGetSpotFee (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotFee'] (params); }
    privateGetSpotFeeSymbol (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotFeeSymbol'] (params); }
    privateGetSpotHistoryOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotHistoryOrder'] (params); }
    privateGetSpotHistoryTrade (params?: {}): Promise<implicitReturnType> { return this['privateGetSpotHistoryTrade'] (params); }
    privateGetMarginAccount (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginAccount'] (params); }
    privateGetMarginAccountIsolatedSymbol (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginAccountIsolatedSymbol'] (params); }
    privateGetMarginOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginOrder'] (params); }
    privateGetMarginOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginOrderClientOrderId'] (params); }
    privateGetMarginHistoryClearing (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginHistoryClearing'] (params); }
    privateGetMarginHistoryOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginHistoryOrder'] (params); }
    privateGetMarginHistoryPositions (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginHistoryPositions'] (params); }
    privateGetMarginHistoryTrade (params?: {}): Promise<implicitReturnType> { return this['privateGetMarginHistoryTrade'] (params); }
    privateGetFuturesBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesBalance'] (params); }
    privateGetFuturesAccount (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesAccount'] (params); }
    privateGetFuturesAccountIsolatedSymbol (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesAccountIsolatedSymbol'] (params); }
    privateGetFuturesOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesOrder'] (params); }
    privateGetFuturesOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesOrderClientOrderId'] (params); }
    privateGetFuturesFee (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesFee'] (params); }
    privateGetFuturesFeeSymbol (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesFeeSymbol'] (params); }
    privateGetFuturesHistoryClearing (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesHistoryClearing'] (params); }
    privateGetFuturesHistoryOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesHistoryOrder'] (params); }
    privateGetFuturesHistoryPositions (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesHistoryPositions'] (params); }
    privateGetFuturesHistoryTrade (params?: {}): Promise<implicitReturnType> { return this['privateGetFuturesHistoryTrade'] (params); }
    privateGetWalletBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletBalance'] (params); }
    privateGetWalletCryptoAddress (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletCryptoAddress'] (params); }
    privateGetWalletCryptoAddressRecentDeposit (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletCryptoAddressRecentDeposit'] (params); }
    privateGetWalletCryptoAddressRecentWithdraw (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletCryptoAddressRecentWithdraw'] (params); }
    privateGetWalletCryptoAddressCheckMine (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletCryptoAddressCheckMine'] (params); }
    privateGetWalletTransactions (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletTransactions'] (params); }
    privateGetWalletCryptoCheckOffchainAvailable (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletCryptoCheckOffchainAvailable'] (params); }
    privateGetWalletCryptoFeeEstimate (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletCryptoFeeEstimate'] (params); }
    privateGetSubAccount (params?: {}): Promise<implicitReturnType> { return this['privateGetSubAccount'] (params); }
    privateGetSubAccountAcl (params?: {}): Promise<implicitReturnType> { return this['privateGetSubAccountAcl'] (params); }
    privateGetSubAccountBalanceSubAccID (params?: {}): Promise<implicitReturnType> { return this['privateGetSubAccountBalanceSubAccID'] (params); }
    privateGetSubAccountCryptoAddressSubAccIDCurrency (params?: {}): Promise<implicitReturnType> { return this['privateGetSubAccountCryptoAddressSubAccIDCurrency'] (params); }
    privatePostSpotOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostSpotOrder'] (params); }
    privatePostMarginOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostMarginOrder'] (params); }
    privatePostFuturesOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostFuturesOrder'] (params); }
    privatePostWalletConvert (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletConvert'] (params); }
    privatePostWalletCryptoAddress (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletCryptoAddress'] (params); }
    privatePostWalletCryptoWithdraw (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletCryptoWithdraw'] (params); }
    privatePostWalletTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostWalletTransfer'] (params); }
    privatePostSubAccountFreeze (params?: {}): Promise<implicitReturnType> { return this['privatePostSubAccountFreeze'] (params); }
    privatePostSubAccountActivate (params?: {}): Promise<implicitReturnType> { return this['privatePostSubAccountActivate'] (params); }
    privatePostSubAccountTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostSubAccountTransfer'] (params); }
    privatePostSubAccountAcl (params?: {}): Promise<implicitReturnType> { return this['privatePostSubAccountAcl'] (params); }
    privatePatchSpotOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privatePatchSpotOrderClientOrderId'] (params); }
    privatePatchMarginOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privatePatchMarginOrderClientOrderId'] (params); }
    privatePatchFuturesOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privatePatchFuturesOrderClientOrderId'] (params); }
    privateDeleteSpotOrder (params?: {}): Promise<implicitReturnType> { return this['privateDeleteSpotOrder'] (params); }
    privateDeleteSpotOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privateDeleteSpotOrderClientOrderId'] (params); }
    privateDeleteMarginPosition (params?: {}): Promise<implicitReturnType> { return this['privateDeleteMarginPosition'] (params); }
    privateDeleteMarginPositionIsolatedSymbol (params?: {}): Promise<implicitReturnType> { return this['privateDeleteMarginPositionIsolatedSymbol'] (params); }
    privateDeleteMarginOrder (params?: {}): Promise<implicitReturnType> { return this['privateDeleteMarginOrder'] (params); }
    privateDeleteMarginOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privateDeleteMarginOrderClientOrderId'] (params); }
    privateDeleteFuturesPosition (params?: {}): Promise<implicitReturnType> { return this['privateDeleteFuturesPosition'] (params); }
    privateDeleteFuturesPositionIsolatedSymbol (params?: {}): Promise<implicitReturnType> { return this['privateDeleteFuturesPositionIsolatedSymbol'] (params); }
    privateDeleteFuturesOrder (params?: {}): Promise<implicitReturnType> { return this['privateDeleteFuturesOrder'] (params); }
    privateDeleteFuturesOrderClientOrderId (params?: {}): Promise<implicitReturnType> { return this['privateDeleteFuturesOrderClientOrderId'] (params); }
    privateDeleteWalletCryptoWithdrawId (params?: {}): Promise<implicitReturnType> { return this['privateDeleteWalletCryptoWithdrawId'] (params); }
    privatePutMarginAccountIsolatedSymbol (params?: {}): Promise<implicitReturnType> { return this['privatePutMarginAccountIsolatedSymbol'] (params); }
    privatePutFuturesAccountIsolatedSymbol (params?: {}): Promise<implicitReturnType> { return this['privatePutFuturesAccountIsolatedSymbol'] (params); }
    privatePutWalletCryptoWithdrawId (params?: {}): Promise<implicitReturnType> { return this['privatePutWalletCryptoWithdrawId'] (params); }
}