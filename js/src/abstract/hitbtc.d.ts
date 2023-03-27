import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
export default class Exchange extends _Exchange {
    publicGetCurrency(params?: {}): Promise<implicitReturnType>;
    publicGetCurrencyCurrency(params?: {}): Promise<implicitReturnType>;
    publicGetSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetSymbolSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetTicker(params?: {}): Promise<implicitReturnType>;
    publicGetTickerSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetTrades(params?: {}): Promise<implicitReturnType>;
    publicGetTradesSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetOrderbook(params?: {}): Promise<implicitReturnType>;
    publicGetOrderbookSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetCandles(params?: {}): Promise<implicitReturnType>;
    publicGetCandlesSymbol(params?: {}): Promise<implicitReturnType>;
    privateGetTradingBalance(params?: {}): Promise<implicitReturnType>;
    privateGetOrder(params?: {}): Promise<implicitReturnType>;
    privateGetOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetTradingFeeAll(params?: {}): Promise<implicitReturnType>;
    privateGetTradingFeeSymbol(params?: {}): Promise<implicitReturnType>;
    privateGetMarginAccount(params?: {}): Promise<implicitReturnType>;
    privateGetMarginAccountSymbol(params?: {}): Promise<implicitReturnType>;
    privateGetMarginPosition(params?: {}): Promise<implicitReturnType>;
    privateGetMarginPositionSymbol(params?: {}): Promise<implicitReturnType>;
    privateGetMarginOrder(params?: {}): Promise<implicitReturnType>;
    privateGetMarginOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetHistoryOrder(params?: {}): Promise<implicitReturnType>;
    privateGetHistoryTrades(params?: {}): Promise<implicitReturnType>;
    privateGetHistoryOrderOrderIdTrades(params?: {}): Promise<implicitReturnType>;
    privateGetAccountBalance(params?: {}): Promise<implicitReturnType>;
    privateGetAccountCryptoAddressCurrency(params?: {}): Promise<implicitReturnType>;
    privateGetAccountCryptoAddressesCurrency(params?: {}): Promise<implicitReturnType>;
    privateGetAccountCryptoUsedAddressesCurrency(params?: {}): Promise<implicitReturnType>;
    privateGetAccountCryptoEstimateWithdraw(params?: {}): Promise<implicitReturnType>;
    privateGetAccountCryptoIsMineAddress(params?: {}): Promise<implicitReturnType>;
    privateGetAccountTransactions(params?: {}): Promise<implicitReturnType>;
    privateGetAccountTransactionsId(params?: {}): Promise<implicitReturnType>;
    privateGetSubAcc(params?: {}): Promise<implicitReturnType>;
    privateGetSubAccAcl(params?: {}): Promise<implicitReturnType>;
    privateGetSubAccBalanceSubAccountUserID(params?: {}): Promise<implicitReturnType>;
    privateGetSubAccDepositAddressSubAccountUserIdCurrency(params?: {}): Promise<implicitReturnType>;
    privatePostOrder(params?: {}): Promise<implicitReturnType>;
    privatePostMarginOrder(params?: {}): Promise<implicitReturnType>;
    privatePostAccountCryptoAddressCurrency(params?: {}): Promise<implicitReturnType>;
    privatePostAccountCryptoWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostAccountCryptoTransferConvert(params?: {}): Promise<implicitReturnType>;
    privatePostAccountTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostAccountTransferInternal(params?: {}): Promise<implicitReturnType>;
    privatePostSubAccFreeze(params?: {}): Promise<implicitReturnType>;
    privatePostSubAccActivate(params?: {}): Promise<implicitReturnType>;
    privatePostSubAccTransfer(params?: {}): Promise<implicitReturnType>;
    privatePutOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    privatePutMarginAccountSymbol(params?: {}): Promise<implicitReturnType>;
    privatePutMarginOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    privatePutAccountCryptoWithdrawId(params?: {}): Promise<implicitReturnType>;
    privatePutSubAccAclSubAccountUserId(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrder(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    privateDeleteMarginAccount(params?: {}): Promise<implicitReturnType>;
    privateDeleteMarginAccountSymbol(params?: {}): Promise<implicitReturnType>;
    privateDeleteMarginPosition(params?: {}): Promise<implicitReturnType>;
    privateDeleteMarginPositionSymbol(params?: {}): Promise<implicitReturnType>;
    privateDeleteMarginOrder(params?: {}): Promise<implicitReturnType>;
    privateDeleteMarginOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
    privateDeleteAccountCryptoWithdrawId(params?: {}): Promise<implicitReturnType>;
    privatePatchOrderClientOrderId(params?: {}): Promise<implicitReturnType>;
}
