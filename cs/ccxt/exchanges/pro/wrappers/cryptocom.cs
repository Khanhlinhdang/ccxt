namespace ccxt.pro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

public class  Cryptocom: cryptocom { public Cryptocom(object args = null) : base(args) { } }
public partial class cryptocom
{
    /// <summary>
    /// watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#book-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>limit</term>
    /// <description>
    /// int : the maximum amount of order book entries to return
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// <item>
    /// <term>params.bookSubscriptionType</term>
    /// <description>
    /// string : The subscription type. Allowed values: SNAPSHOT full snapshot. This is the default if not specified. SNAPSHOT_AND_UPDATE delta updates
    /// </description>
    /// </item>
    /// <item>
    /// <term>params.bookUpdateFrequency</term>
    /// <description>
    /// int : Book update interval in ms. Allowed values: 100 for snapshot subscription 10 for delta subscription
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols.</returns>
    public async Task<ccxt.pro.IOrderBook> WatchOrderBook(string symbol, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchOrderBook(symbol, limit, parameters);
        return ((ccxt.pro.IOrderBook) res).Copy();
    }
    public async Task<ccxt.pro.IOrderBook> WatchOrderBookForSymbols(List<string> symbols, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchOrderBookForSymbols(symbols, limit, parameters);
        return ((ccxt.pro.IOrderBook) res).Copy();
    }
    /// <summary>
    /// get the list of most recent trades for a particular symbol
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#trade-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>since</term>
    /// <description>
    /// int : timestamp in ms of the earliest trade to fetch
    /// </description>
    /// </item>
    /// <item>
    /// <term>limit</term>
    /// <description>
    /// int : the maximum amount of trades to fetch
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object[]</term> a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}.</returns>
    public async Task<List<Trade>> WatchTrades(string symbol, Int64? since2 = 0, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var since = since2 == 0 ? null : (object)since2;
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchTrades(symbol, since, limit, parameters);
        return ((IList<object>)res).Select(item => new Trade(item)).ToList<Trade>();
    }
    /// <summary>
    /// get the list of most recent trades for a particular symbol
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#trade-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>since</term>
    /// <description>
    /// int : timestamp in ms of the earliest trade to fetch
    /// </description>
    /// </item>
    /// <item>
    /// <term>limit</term>
    /// <description>
    /// int : the maximum amount of trades to fetch
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object[]</term> a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}.</returns>
    public async Task<List<Trade>> WatchTradesForSymbols(List<string> symbols, Int64? since2 = 0, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var since = since2 == 0 ? null : (object)since2;
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchTradesForSymbols(symbols, since, limit, parameters);
        return ((IList<object>)res).Select(item => new Trade(item)).ToList<Trade>();
    }
    /// <summary>
    /// watches information on multiple trades made by the user
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#user-trade-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>since</term>
    /// <description>
    /// int : the earliest time in ms to fetch trades for
    /// </description>
    /// </item>
    /// <item>
    /// <term>limit</term>
    /// <description>
    /// int : the maximum number of trade structures to retrieve
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object[]</term> a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure}.</returns>
    public async Task<List<Trade>> WatchMyTrades(string symbol = null, Int64? since2 = 0, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var since = since2 == 0 ? null : (object)since2;
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchMyTrades(symbol, since, limit, parameters);
        return ((IList<object>)res).Select(item => new Trade(item)).ToList<Trade>();
    }
    /// <summary>
    /// watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#ticker-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}.</returns>
    public async Task<Ticker> WatchTicker(string symbol, Dictionary<string, object> parameters = null)
    {
        var res = await this.watchTicker(symbol, parameters);
        return new Ticker(res);
    }
    /// <summary>
    /// watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for all markets of a specific list
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#ticker-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}.</returns>
    public async Task<Tickers> WatchTickers(List<String> symbols = null, Dictionary<string, object> parameters = null)
    {
        var res = await this.watchTickers(symbols, parameters);
        return new Tickers(res);
    }
    /// <summary>
    /// watches best bid & ask for symbols
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#ticker-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}.</returns>
    public async Task<Tickers> WatchBidsAsks(List<String> symbols = null, Dictionary<string, object> parameters = null)
    {
        var res = await this.watchBidsAsks(symbols, parameters);
        return new Tickers(res);
    }
    /// <summary>
    /// watches historical candlestick data containing the open, high, low, and close price, and the volume of a market
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#candlestick-time_frame-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>since</term>
    /// <description>
    /// int : timestamp in ms of the earliest candle to fetch
    /// </description>
    /// </item>
    /// <item>
    /// <term>limit</term>
    /// <description>
    /// int : the maximum amount of candles to fetch
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>int[][]</term> A list of candles ordered as timestamp, open, high, low, close, volume.</returns>
    public async Task<List<OHLCV>> WatchOHLCV(string symbol, string timeframe = "1m", Int64? since2 = 0, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var since = since2 == 0 ? null : (object)since2;
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchOHLCV(symbol, timeframe, since, limit, parameters);
        return ((IList<object>)res).Select(item => new OHLCV(item)).ToList<OHLCV>();
    }
    /// <summary>
    /// watches information on multiple orders made by the user
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#user-order-instrument_name"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>since</term>
    /// <description>
    /// int : the earliest time in ms to fetch orders for
    /// </description>
    /// </item>
    /// <item>
    /// <term>limit</term>
    /// <description>
    /// int : the maximum number of order structures to retrieve
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object[]</term> a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}.</returns>
    public async Task<List<Order>> WatchOrders(string symbol = null, Int64? since2 = 0, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var since = since2 == 0 ? null : (object)since2;
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchOrders(symbol, since, limit, parameters);
        return ((IList<object>)res).Select(item => new Order(item)).ToList<Order>();
    }
    /// <summary>
    /// watch all open positions
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#user-position_balance"/>  <br/>
    /// <list type="table">
    /// </list>
    /// </remarks>
    /// <returns> <term>object[]</term> a list of [position structure]{@link https://docs.ccxt.com/en/latest/manual.html#position-structure}.</returns>
    public async Task<List<Position>> WatchPositions(List<String> symbols = null, Int64? since2 = 0, Int64? limit2 = 0, Dictionary<string, object> parameters = null)
    {
        var since = since2 == 0 ? null : (object)since2;
        var limit = limit2 == 0 ? null : (object)limit2;
        var res = await this.watchPositions(symbols, since, limit, parameters);
        return ((IList<object>)res).Select(item => new Position(item)).ToList<Position>();
    }
    /// <summary>
    /// watch balance and get the amount of funds available for trading or funds locked in orders
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#user-balance"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}.</returns>
    public async Task<Balances> WatchBalance(Dictionary<string, object> parameters = null)
    {
        var res = await this.watchBalance(parameters);
        return new Balances(res);
    }
    /// <summary>
    /// create a trade order
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#private-create-order"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>price</term>
    /// <description>
    /// float : the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders
    /// </description>
    /// </item>
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}.</returns>
    public async Task<Order> CreateOrderWs(string symbol, string type, string side, double amount, double? price2 = 0, Dictionary<string, object> parameters = null)
    {
        var price = price2 == 0 ? null : (object)price2;
        var res = await this.createOrderWs(symbol, type, side, amount, price, parameters);
        return new Order(res);
    }
    public async Task<Order> CancelOrderWs(string id, string symbol = null, Dictionary<string, object> parameters = null)
    {
        var res = await this.cancelOrderWs(id, symbol, parameters);
        return new Order(res);
    }
    /// <summary>
    /// cancel all open orders
    /// </summary>
    /// <remarks>
    /// See <see href="https://exchange-docs.crypto.com/exchange/v1/rest-ws/index.html#private-cancel-all-orders"/>  <br/>
    /// <list type="table">
    /// <item>
    /// <term>params</term>
    /// <description>
    /// object : extra parameters specific to the exchange API endpoint
    /// </description>
    /// </item>
    /// </list>
    /// </remarks>
    /// <returns> <term>object</term> Returns exchange raw message {@link https://docs.ccxt.com/#/?id=order-structure}.</returns>
    public async Task<Dictionary<string, object>> CancelAllOrdersWs(string symbol = null, Dictionary<string, object> parameters = null)
    {
        var res = await this.cancelAllOrdersWs(symbol, parameters);
        return ((Dictionary<string, object>)res);
    }
    public async Task<Dictionary<string, object>> WatchPublicMultiple(object messageHashes, object topics, Dictionary<string, object> parameters = null)
    {
        var res = await this.watchPublicMultiple(messageHashes, topics, parameters);
        return ((Dictionary<string, object>)res);
    }
    public async Task<Dictionary<string, object>> WatchPrivateRequest(object nonce, Dictionary<string, object> parameters = null)
    {
        var res = await this.watchPrivateRequest(nonce, parameters);
        return ((Dictionary<string, object>)res);
    }
    public async Task<Dictionary<string, object>> WatchPrivateSubscribe(object messageHash, Dictionary<string, object> parameters = null)
    {
        var res = await this.watchPrivateSubscribe(messageHash, parameters);
        return ((Dictionary<string, object>)res);
    }
}
