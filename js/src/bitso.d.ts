import Exchange from './abstract/bitso.js';
import { Balances, Int, OHLCV, Order, OrderBook, OrderSide, OrderType, Ticker, Trade, Transaction } from './base/types.js';
/**
 * @class bitso
 * @extends Exchange
 */
export default class bitso extends Exchange {
    describe(): any;
    fetchLedger(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        timestamp: number;
        datetime: string;
        direction: string;
        account: string;
        referenceId: string;
        referenceAccount: string;
        type: string;
        currency: any;
        amount: number;
        before: number;
        after: number;
        status: string;
        fee: any;
        info: object;
    };
    fetchMarkets(params?: {}): Promise<any[]>;
    parseBalance(response: any): Balances;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseTicker(ticker: any, market?: any): Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    parseTrade(trade: any, market?: any): Trade;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: number, params?: {}): Promise<Trade[]>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: string, params?: {}): Promise<any[]>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any[]>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): Order;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: number, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchDeposit(id: string, code?: string, params?: {}): Promise<Transaction>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: string;
        tag: any;
        network: any;
        info: any;
    }>;
    fetchTransactionFees(codes?: any, params?: {}): Promise<{}>;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<{}>;
    parseDepositWithdrawFees(response: any, codes?: any, currencyIdKey?: any): {};
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<Transaction>;
    safeNetwork(networkId: any): string;
    parseTransaction(transaction: any, currency?: any): Transaction;
    parseTransactionStatus(status: any): string;
    nonce(): number;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
