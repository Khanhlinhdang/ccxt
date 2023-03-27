import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    v1PubGetHistKline(params?: {}): Promise<implicitReturnType>;
    v1PubGetHistTrades(params?: {}): Promise<implicitReturnType>;
    v1PublicGetInfo(params?: {}): Promise<implicitReturnType>;
    v1PublicGetInfoSymbol(params?: {}): Promise<implicitReturnType>;
    v1PublicGetSystemInfo(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketTrades(params?: {}): Promise<implicitReturnType>;
    v1PublicGetToken(params?: {}): Promise<implicitReturnType>;
    v1PublicGetTokenNetwork(params?: {}): Promise<implicitReturnType>;
    v1PublicGetFundingRates(params?: {}): Promise<implicitReturnType>;
    v1PublicGetFundingRateSymbol(params?: {}): Promise<implicitReturnType>;
    v1PublicGetFundingRateHistory(params?: {}): Promise<implicitReturnType>;
    v1PublicGetFutures(params?: {}): Promise<implicitReturnType>;
    v1PublicGetFuturesSymbol(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetClientToken(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderOid(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetClientOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrders(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderbookSymbol(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetKline(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetClientTradeTid(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderOidTrades(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetClientTrades(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetClientInfo(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetAssetDeposit(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetAssetHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetSubAccountAll(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetSubAccountAssets(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetTokenInterest(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetTokenInterestToken(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetInterestHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetInterestRepay(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetFundingFeeHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetPositions(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetPositionSymbol(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrder(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostAssetMainSubTransfer(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostAssetWithdraw(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostInterestRepay(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostClientAccountMode(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostClientLeverage(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrder(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteClientOrder(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrders(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteAssetWithdraw(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetClientHolding(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetAlgoOrderOid(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetAlgoOrders(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBalances(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetAccountinfo(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetPositions(params?: {}): Promise<implicitReturnType>;
    v3PrivateGetBuypower(params?: {}): Promise<implicitReturnType>;
    v3PrivatePostAlgoOrder(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutOrderOid(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutOrderClientOid(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutAlgoOrderOid(params?: {}): Promise<implicitReturnType>;
    v3PrivatePutAlgoOrderClientOid(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAlgoOrderOid(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAlgoOrdersPending(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteAlgoOrdersPendingSymbol(params?: {}): Promise<implicitReturnType>;
    v3PrivateDeleteOrdersPending(params?: {}): Promise<implicitReturnType>;
}
