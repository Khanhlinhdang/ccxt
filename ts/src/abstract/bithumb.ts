// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetTickerCurrency (params?: {}): Promise<implicitReturnType> { return this['publicGetTickerCurrency'] (params); }
    publicGetTickerAll (params?: {}): Promise<implicitReturnType> { return this['publicGetTickerAll'] (params); }
    publicGetTickerALLBTC (params?: {}): Promise<implicitReturnType> { return this['publicGetTickerALLBTC'] (params); }
    publicGetTickerALLKRW (params?: {}): Promise<implicitReturnType> { return this['publicGetTickerALLKRW'] (params); }
    publicGetOrderbookCurrency (params?: {}): Promise<implicitReturnType> { return this['publicGetOrderbookCurrency'] (params); }
    publicGetOrderbookAll (params?: {}): Promise<implicitReturnType> { return this['publicGetOrderbookAll'] (params); }
    publicGetTransactionHistoryCurrency (params?: {}): Promise<implicitReturnType> { return this['publicGetTransactionHistoryCurrency'] (params); }
    publicGetTransactionHistoryAll (params?: {}): Promise<implicitReturnType> { return this['publicGetTransactionHistoryAll'] (params); }
    publicGetCandlestickCurrencyInterval (params?: {}): Promise<implicitReturnType> { return this['publicGetCandlestickCurrencyInterval'] (params); }
    privatePostInfoAccount (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoAccount'] (params); }
    privatePostInfoBalance (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoBalance'] (params); }
    privatePostInfoWalletAddress (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoWalletAddress'] (params); }
    privatePostInfoTicker (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoTicker'] (params); }
    privatePostInfoOrders (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoOrders'] (params); }
    privatePostInfoUserTransactions (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoUserTransactions'] (params); }
    privatePostInfoOrderDetail (params?: {}): Promise<implicitReturnType> { return this['privatePostInfoOrderDetail'] (params); }
    privatePostTradePlace (params?: {}): Promise<implicitReturnType> { return this['privatePostTradePlace'] (params); }
    privatePostTradeCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeCancel'] (params); }
    privatePostTradeBtcWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeBtcWithdrawal'] (params); }
    privatePostTradeKrwDeposit (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeKrwDeposit'] (params); }
    privatePostTradeKrwWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeKrwWithdrawal'] (params); }
    privatePostTradeMarketBuy (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeMarketBuy'] (params); }
    privatePostTradeMarketSell (params?: {}): Promise<implicitReturnType> { return this['privatePostTradeMarketSell'] (params); }
}