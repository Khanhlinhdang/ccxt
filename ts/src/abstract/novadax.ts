// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetCommonSymbol (params?: {}): Promise<implicitReturnType> { return this['publicGetCommonSymbol'] (params); }
    publicGetCommonSymbols (params?: {}): Promise<implicitReturnType> { return this['publicGetCommonSymbols'] (params); }
    publicGetCommonTimestamp (params?: {}): Promise<implicitReturnType> { return this['publicGetCommonTimestamp'] (params); }
    publicGetMarketTickers (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketTickers'] (params); }
    publicGetMarketTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketTicker'] (params); }
    publicGetMarketDepth (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketDepth'] (params); }
    publicGetMarketTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketTrades'] (params); }
    publicGetMarketKlineHistory (params?: {}): Promise<implicitReturnType> { return this['publicGetMarketKlineHistory'] (params); }
    privateGetOrdersGet (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersGet'] (params); }
    privateGetOrdersList (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersList'] (params); }
    privateGetOrdersFill (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersFill'] (params); }
    privateGetOrdersFills (params?: {}): Promise<implicitReturnType> { return this['privateGetOrdersFills'] (params); }
    privateGetAccountGetBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountGetBalance'] (params); }
    privateGetAccountSubs (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountSubs'] (params); }
    privateGetAccountSubsBalance (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountSubsBalance'] (params); }
    privateGetAccountSubsTransferRecord (params?: {}): Promise<implicitReturnType> { return this['privateGetAccountSubsTransferRecord'] (params); }
    privateGetWalletQueryDepositWithdraw (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletQueryDepositWithdraw'] (params); }
    privatePostOrdersCreate (params?: {}): Promise<implicitReturnType> { return this['privatePostOrdersCreate'] (params); }
    privatePostOrdersCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostOrdersCancel'] (params); }
    privatePostAccountWithdrawCoin (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountWithdrawCoin'] (params); }
    privatePostAccountSubsTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostAccountSubsTransfer'] (params); }
}