// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetGetLastTradesByCurrency (params?: {}): Promise<implicitReturnType> { return this['publicGetGetLastTradesByCurrency'] (params); }
    publicGetGetLastTradesByInstrument (params?: {}): Promise<implicitReturnType> { return this['publicGetGetLastTradesByInstrument'] (params); }
    publicGetGetOrderBook (params?: {}): Promise<implicitReturnType> { return this['publicGetGetOrderBook'] (params); }
    publicGetTickers (params?: {}): Promise<implicitReturnType> { return this['publicGetTickers'] (params); }
    publicGetGetInstruments (params?: {}): Promise<implicitReturnType> { return this['publicGetGetInstruments'] (params); }
    publicGetGetTradingviewChartData (params?: {}): Promise<implicitReturnType> { return this['publicGetGetTradingviewChartData'] (params); }
    publicGetCmcSpotSummary (params?: {}): Promise<implicitReturnType> { return this['publicGetCmcSpotSummary'] (params); }
    publicGetCmcSpotTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetCmcSpotTicker'] (params); }
    publicGetCmcSpotOrderbook (params?: {}): Promise<implicitReturnType> { return this['publicGetCmcSpotOrderbook'] (params); }
    publicGetCmcMarketTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetCmcMarketTrades'] (params); }
    publicGetCmcContracts (params?: {}): Promise<implicitReturnType> { return this['publicGetCmcContracts'] (params); }
    publicGetCmcContractOrderbook (params?: {}): Promise<implicitReturnType> { return this['publicGetCmcContractOrderbook'] (params); }
    publicGetCoinGeckoSpotPairs (params?: {}): Promise<implicitReturnType> { return this['publicGetCoinGeckoSpotPairs'] (params); }
    publicGetCoinGeckoSpotTicker (params?: {}): Promise<implicitReturnType> { return this['publicGetCoinGeckoSpotTicker'] (params); }
    publicGetCoinGeckoSpotOrderbook (params?: {}): Promise<implicitReturnType> { return this['publicGetCoinGeckoSpotOrderbook'] (params); }
    publicGetCoinGeckoMarketTrades (params?: {}): Promise<implicitReturnType> { return this['publicGetCoinGeckoMarketTrades'] (params); }
    publicGetCoinGeckoContracts (params?: {}): Promise<implicitReturnType> { return this['publicGetCoinGeckoContracts'] (params); }
    publicGetCoinGeckoContractOrderbook (params?: {}): Promise<implicitReturnType> { return this['publicGetCoinGeckoContractOrderbook'] (params); }
    publicGetGetPerpetualLeverageBracket (params?: {}): Promise<implicitReturnType> { return this['publicGetGetPerpetualLeverageBracket'] (params); }
    publicGetGetPerpetualLeverageBracketAll (params?: {}): Promise<implicitReturnType> { return this['publicGetGetPerpetualLeverageBracketAll'] (params); }
    publicPostAuth (params?: {}): Promise<implicitReturnType> { return this['publicPostAuth'] (params); }
    privateGetGetDepositRecord (params?: {}): Promise<implicitReturnType> { return this['privateGetGetDepositRecord'] (params); }
    privateGetGetWithdrawRecord (params?: {}): Promise<implicitReturnType> { return this['privateGetGetWithdrawRecord'] (params); }
    privateGetGetPosition (params?: {}): Promise<implicitReturnType> { return this['privateGetGetPosition'] (params); }
    privateGetGetPositions (params?: {}): Promise<implicitReturnType> { return this['privateGetGetPositions'] (params); }
    privateGetGetOpenOrdersByCurrency (params?: {}): Promise<implicitReturnType> { return this['privateGetGetOpenOrdersByCurrency'] (params); }
    privateGetGetOpenOrdersByInstrument (params?: {}): Promise<implicitReturnType> { return this['privateGetGetOpenOrdersByInstrument'] (params); }
    privateGetGetOrderHistoryByCurrency (params?: {}): Promise<implicitReturnType> { return this['privateGetGetOrderHistoryByCurrency'] (params); }
    privateGetGetOrderHistoryByInstrument (params?: {}): Promise<implicitReturnType> { return this['privateGetGetOrderHistoryByInstrument'] (params); }
    privateGetGetOrderState (params?: {}): Promise<implicitReturnType> { return this['privateGetGetOrderState'] (params); }
    privateGetGetUserTradesByCurrency (params?: {}): Promise<implicitReturnType> { return this['privateGetGetUserTradesByCurrency'] (params); }
    privateGetGetUserTradesByInstrument (params?: {}): Promise<implicitReturnType> { return this['privateGetGetUserTradesByInstrument'] (params); }
    privateGetGetUserTradesByOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetGetUserTradesByOrder'] (params); }
    privateGetGetPerpetualUserConfig (params?: {}): Promise<implicitReturnType> { return this['privateGetGetPerpetualUserConfig'] (params); }
    privatePostLogout (params?: {}): Promise<implicitReturnType> { return this['privatePostLogout'] (params); }
    privatePostGetAssetsInfo (params?: {}): Promise<implicitReturnType> { return this['privatePostGetAssetsInfo'] (params); }
    privatePostAddWithdrawAddress (params?: {}): Promise<implicitReturnType> { return this['privatePostAddWithdrawAddress'] (params); }
    privatePostBuy (params?: {}): Promise<implicitReturnType> { return this['privatePostBuy'] (params); }
    privatePostSell (params?: {}): Promise<implicitReturnType> { return this['privatePostSell'] (params); }
    privatePostCancel (params?: {}): Promise<implicitReturnType> { return this['privatePostCancel'] (params); }
    privatePostCancelAllByCurrency (params?: {}): Promise<implicitReturnType> { return this['privatePostCancelAllByCurrency'] (params); }
    privatePostCancelAllByInstrument (params?: {}): Promise<implicitReturnType> { return this['privatePostCancelAllByInstrument'] (params); }
    privatePostClosePosition (params?: {}): Promise<implicitReturnType> { return this['privatePostClosePosition'] (params); }
    privatePostAdjustPerpetualLeverage (params?: {}): Promise<implicitReturnType> { return this['privatePostAdjustPerpetualLeverage'] (params); }
    privatePostAdjustPerpetualMarginType (params?: {}): Promise<implicitReturnType> { return this['privatePostAdjustPerpetualMarginType'] (params); }
    privatePostSubmitTransfer (params?: {}): Promise<implicitReturnType> { return this['privatePostSubmitTransfer'] (params); }
}