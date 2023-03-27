// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetDepthPair (params?: {}): Promise<implicitReturnType> { return this['publicGetDepthPair'] (params); }
    publicGetCurrenciesPair (params?: {}): Promise<implicitReturnType> { return this['publicGetCurrenciesPair'] (params); }
    publicGetCurrenciesAll (params?: {}): Promise<implicitReturnType> { return this['publicGetCurrenciesAll'] (params); }
    publicGetCurrencyPairsPair (params?: {}): Promise<implicitReturnType> { return this['publicGetCurrencyPairsPair'] (params); }
    publicGetCurrencyPairsAll (params?: {}): Promise<implicitReturnType> { return this['publicGetCurrencyPairsAll'] (params); }
    publicGetLastPricePair (params?: {}): Promise<implicitReturnType> { return this['publicGetLastPricePair'] (params); }
    publicGetTickerPair (params?: {}): Promise<implicitReturnType> { return this['publicGetTickerPair'] (params); }
    publicGetTradesPair (params?: {}): Promise<implicitReturnType> { return this['publicGetTradesPair'] (params); }
    privatePostActiveOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostActiveOrders'] (params); }
    privatePostCancelOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostCancelOrder'] (params); }
    privatePostDepositHistory (params?: {}): Promise<implicitReturnType> { return this['privatePostDepositHistory'] (params); }
    privatePostGetIdInfo (params?: {}): Promise<implicitReturnType> { return this['privatePostGetIdInfo'] (params); }
    privatePostGetInfo (params?: {}): Promise<implicitReturnType> { return this['privatePostGetInfo'] (params); }
    privatePostGetInfo2 (params?: {}): Promise<implicitReturnType> { return this['privatePostGetInfo2'] (params); }
    privatePostGetPersonalInfo (params?: {}): Promise<implicitReturnType> { return this['privatePostGetPersonalInfo'] (params); }
    privatePostTrade (params?: {}): Promise<implicitReturnType> { return this['privatePostTrade'] (params); }
    privatePostTradeHistory (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeHistory'] (params); }
    privatePostWithdraw (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdraw'] (params); }
    privatePostWithdrawHistory (params?: {}): Promise<implicitReturnType> { return this['privatePostWithdrawHistory'] (params); }
    ecapiPostCreateInvoice (params?: {}): Promise<implicitReturnType> { return this['ecapiPostCreateInvoice'] (params); }
    ecapiPostGetInvoice (params?: {}): Promise<implicitReturnType> { return this['ecapiPostGetInvoice'] (params); }
    ecapiPostGetInvoiceIdsByOrderNumber (params?: {}): Promise<implicitReturnType> { return this['ecapiPostGetInvoiceIdsByOrderNumber'] (params); }
    ecapiPostCancelInvoice (params?: {}): Promise<implicitReturnType> { return this['ecapiPostCancelInvoice'] (params); }
    tlapiPostGetPositions (params?: {}): Promise<implicitReturnType> { return this['tlapiPostGetPositions'] (params); }
    tlapiPostPositionHistory (params?: {}): Promise<implicitReturnType> { return this['tlapiPostPositionHistory'] (params); }
    tlapiPostActivePositions (params?: {}): Promise<implicitReturnType> { return this['tlapiPostActivePositions'] (params); }
    tlapiPostCreatePosition (params?: {}): Promise<implicitReturnType> { return this['tlapiPostCreatePosition'] (params); }
    tlapiPostChangePosition (params?: {}): Promise<implicitReturnType> { return this['tlapiPostChangePosition'] (params); }
    tlapiPostCancelPosition (params?: {}): Promise<implicitReturnType> { return this['tlapiPostCancelPosition'] (params); }
    fapiGetGroupsGroupId (params?: {}): Promise<implicitReturnType> { return this['fapiGetGroupsGroupId'] (params); }
    fapiGetLastPriceGroupIdPair (params?: {}): Promise<implicitReturnType> { return this['fapiGetLastPriceGroupIdPair'] (params); }
    fapiGetTickerGroupIdPair (params?: {}): Promise<implicitReturnType> { return this['fapiGetTickerGroupIdPair'] (params); }
    fapiGetTradesGroupIdPair (params?: {}): Promise<implicitReturnType> { return this['fapiGetTradesGroupIdPair'] (params); }
    fapiGetDepthGroupIdPair (params?: {}): Promise<implicitReturnType> { return this['fapiGetDepthGroupIdPair'] (params); }
}