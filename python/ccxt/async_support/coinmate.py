# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.async_support.base.exchange import Exchange
from ccxt.base.errors import ExchangeError
from ccxt.base.errors import AuthenticationError
from ccxt.base.errors import ArgumentsRequired
from ccxt.base.errors import InsufficientFunds
from ccxt.base.errors import InvalidOrder
from ccxt.base.errors import OrderNotFound
from ccxt.base.errors import RateLimitExceeded


class coinmate(Exchange):

    def describe(self):
        return self.deep_extend(super(coinmate, self).describe(), {
            'id': 'coinmate',
            'name': 'CoinMate',
            'countries': ['GB', 'CZ', 'EU'],  # UK, Czech Republic
            'rateLimit': 1000,
            'has': {
                'CORS': True,
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'addMargin': False,
                'cancelOrder': True,
                'createOrder': True,
                'createReduceOnlyOrder': False,
                'fetchBalance': True,
                'fetchBorrowRate': False,
                'fetchBorrowRateHistories': False,
                'fetchBorrowRateHistory': False,
                'fetchBorrowRates': False,
                'fetchBorrowRatesPerSymbol': False,
                'fetchFundingHistory': False,
                'fetchFundingRate': False,
                'fetchFundingRateHistory': False,
                'fetchFundingRates': False,
                'fetchIndexOHLCV': False,
                'fetchIsolatedPositions': False,
                'fetchLeverage': False,
                'fetchMarkets': True,
                'fetchMarkOHLCV': False,
                'fetchMyTrades': True,
                'fetchOpenOrders': True,
                'fetchOrder': True,
                'fetchOrderBook': True,
                'fetchOrders': True,
                'fetchPosition': False,
                'fetchPositions': False,
                'fetchPositionsRisk': False,
                'fetchPremiumIndexOHLCV': False,
                'fetchTicker': True,
                'fetchTrades': True,
                'fetchTransactions': True,
                'reduceMargin': False,
                'setLeverage': False,
                'setMarginMode': False,
                'setPositionMode': False,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/51840849/87460806-1c9f3f00-c616-11ea-8c46-a77018a8f3f4.jpg',
                'api': 'https://coinmate.io/api',
                'www': 'https://coinmate.io',
                'fees': 'https://coinmate.io/fees',
                'doc': [
                    'https://coinmate.docs.apiary.io',
                    'https://coinmate.io/developers',
                ],
                'referral': 'https://coinmate.io?referral=YTFkM1RsOWFObVpmY1ZjMGREQmpTRnBsWjJJNVp3PT0',
            },
            'requiredCredentials': {
                'apiKey': True,
                'secret': True,
                'uid': True,
            },
            'api': {
                'public': {
                    'get': [
                        'orderBook',
                        'ticker',
                        'transactions',
                        'tradingPairs',
                    ],
                },
                'private': {
                    'post': [
                        'balances',
                        'bitcoinCashWithdrawal',
                        'bitcoinCashDepositAddresses',
                        'bitcoinDepositAddresses',
                        'bitcoinWithdrawal',
                        'bitcoinWithdrawalFees',
                        'buyInstant',
                        'buyLimit',
                        'cancelOrder',
                        'cancelOrderWithInfo',
                        'createVoucher',
                        'dashDepositAddresses',
                        'dashWithdrawal',
                        'ethereumWithdrawal',
                        'ethereumDepositAddresses',
                        'litecoinWithdrawal',
                        'litecoinDepositAddresses',
                        'openOrders',
                        'order',
                        'orderHistory',
                        'orderById',
                        'pusherAuth',
                        'redeemVoucher',
                        'replaceByBuyLimit',
                        'replaceByBuyInstant',
                        'replaceBySellLimit',
                        'replaceBySellInstant',
                        'rippleDepositAddresses',
                        'rippleWithdrawal',
                        'sellInstant',
                        'sellLimit',
                        'transactionHistory',
                        'traderFees',
                        'tradeHistory',
                        'transfer',
                        'transferHistory',
                        'unconfirmedBitcoinDeposits',
                        'unconfirmedBitcoinCashDeposits',
                        'unconfirmedDashDeposits',
                        'unconfirmedEthereumDeposits',
                        'unconfirmedLitecoinDeposits',
                        'unconfirmedRippleDeposits',
                    ],
                },
            },
            'fees': {
                'trading': {
                    'tierBased': True,
                    'percentage': True,
                    'maker': 0.12 / 100,
                    'taker': 0.25 / 100,
                    'tiers': {
                        'taker': [
                            [0, 0.25 / 100],
                            [10000, 0.23 / 100],
                            [100000, 0.21 / 100],
                            [250000, 0.20 / 100],
                            [500000, 0.15 / 100],
                            [1000000, 0.13 / 100],
                            [3000000, 0.10 / 100],
                            [15000000, 0.05 / 100],
                        ],
                        'maker': [
                            [0, 0.12 / 100],
                            [10000, 0.11 / 100],
                            [1000000, 0.10 / 100],
                            [250000, 0.08 / 100],
                            [500000, 0.05 / 100],
                            [1000000, 0.03 / 100],
                            [3000000, 0.02 / 100],
                            [15000000, 0],
                        ],
                    },
                },
                'promotional': {
                    'trading': {
                        'maker': 0.05 / 100,
                        'taker': 0.15 / 100,
                        'tiers': {
                            'taker': [
                                [0, 0.15 / 100],
                                [10000, 0.14 / 100],
                                [100000, 0.13 / 100],
                                [250000, 0.12 / 100],
                                [500000, 0.11 / 100],
                                [1000000, 0.1 / 100],
                                [3000000, 0.08 / 100],
                                [15000000, 0.05 / 100],
                            ],
                            'maker': [
                                [0, 0.05 / 100],
                                [10000, 0.04 / 100],
                                [1000000, 0.03 / 100],
                                [250000, 0.02 / 100],
                                [500000, 0],
                                [1000000, 0],
                                [3000000, 0],
                                [15000000, 0],
                            ],
                        },
                    },
                },
            },
            'options': {
                'promotionalMarkets': ['ETH/EUR', 'ETH/CZK', 'ETH/BTC', 'XRP/EUR', 'XRP/CZK', 'XRP/BTC', 'DASH/EUR', 'DASH/CZK', 'DASH/BTC', 'BCH/EUR', 'BCH/CZK', 'BCH/BTC'],
            },
            'exceptions': {
                'exact': {
                    'No order with given ID': OrderNotFound,
                },
                'broad': {
                    'Not enough account balance available': InsufficientFunds,
                    'Incorrect order ID': InvalidOrder,
                    'Minimum Order Size ': InvalidOrder,
                    'TOO MANY REQUESTS': RateLimitExceeded,
                    'Access denied.': AuthenticationError,  # {"error":true,"errorMessage":"Access denied.","data":null}
                },
            },
        })

    async def fetch_markets(self, params={}):
        response = await self.publicGetTradingPairs(params)
        #
        #     {
        #         "error":false,
        #         "errorMessage":null,
        #         "data": [
        #             {
        #                 "name":"BTC_EUR",
        #                 "firstCurrency":"BTC",
        #                 "secondCurrency":"EUR",
        #                 "priceDecimals":2,
        #                 "lotDecimals":8,
        #                 "minAmount":0.0002,
        #                 "tradesWebSocketChannelId":"trades-BTC_EUR",
        #                 "orderBookWebSocketChannelId":"order_book-BTC_EUR",
        #                 "tradeStatisticsWebSocketChannelId":"statistics-BTC_EUR"
        #             },
        #         ]
        #     }
        #
        data = self.safe_value(response, 'data')
        result = []
        for i in range(0, len(data)):
            market = data[i]
            id = self.safe_string(market, 'name')
            baseId = self.safe_string(market, 'firstCurrency')
            quoteId = self.safe_string(market, 'secondCurrency')
            base = self.safe_currency_code(baseId)
            quote = self.safe_currency_code(quoteId)
            symbol = base + '/' + quote
            promotionalMarkets = self.safe_value(self.options, 'promotionalMarkets', [])
            fees = self.safe_value(self.fees, 'trading')
            if self.in_array(symbol, promotionalMarkets):
                promotionalFees = self.safe_value(self.fees, 'promotional', {})
                fees = self.safe_value(promotionalFees, 'trading', fees)
            result.append({
                'id': id,
                'symbol': symbol,
                'base': base,
                'quote': quote,
                'settle': None,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': None,
                'type': 'spot',
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'active': None,
                'contract': False,
                'linear': None,
                'inverse': None,
                'taker': self.safe_number(fees, 'taker'),
                'maker': self.safe_number(fees, 'maker'),
                'contractSize': None,
                'expiry': None,
                'expiryDatetime': None,
                'strike': None,
                'optionType': None,
                'precision': {
                    'amount': self.safe_integer(market, 'lotDecimals'),
                    'price': self.safe_integer(market, 'priceDecimals'),
                },
                'limits': {
                    'leverage': {
                        'min': None,
                        'max': None,
                    },
                    'amount': {
                        'min': self.safe_number(market, 'minAmount'),
                        'max': None,
                    },
                    'price': {
                        'min': None,
                        'max': None,
                    },
                    'cost': {
                        'min': None,
                        'max': None,
                    },
                },
                'info': market,
            })
        return result

    def parse_balance(self, response):
        balances = self.safe_value(response, 'data')
        result = {'info': response}
        currencyIds = list(balances.keys())
        for i in range(0, len(currencyIds)):
            currencyId = currencyIds[i]
            code = self.safe_currency_code(currencyId)
            balance = self.safe_value(balances, currencyId)
            account = self.account()
            account['free'] = self.safe_string(balance, 'available')
            account['used'] = self.safe_string(balance, 'reserved')
            account['total'] = self.safe_string(balance, 'balance')
            result[code] = account
        return self.safe_balance(result)

    async def fetch_balance(self, params={}):
        await self.load_markets()
        response = await self.privatePostBalances(params)
        return self.parse_balance(response)

    async def fetch_order_book(self, symbol, limit=None, params={}):
        await self.load_markets()
        request = {
            'currencyPair': self.market_id(symbol),
            'groupByPriceLimit': 'False',
        }
        response = await self.publicGetOrderBook(self.extend(request, params))
        orderbook = response['data']
        timestamp = self.safe_timestamp(orderbook, 'timestamp')
        return self.parse_order_book(orderbook, symbol, timestamp, 'bids', 'asks', 'price', 'amount')

    async def fetch_ticker(self, symbol, params={}):
        await self.load_markets()
        request = {
            'currencyPair': self.market_id(symbol),
        }
        response = await self.publicGetTicker(self.extend(request, params))
        ticker = self.safe_value(response, 'data')
        timestamp = self.safe_timestamp(ticker, 'timestamp')
        last = self.safe_number(ticker, 'last')
        return {
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'high': self.safe_number(ticker, 'high'),
            'low': self.safe_number(ticker, 'low'),
            'bid': self.safe_number(ticker, 'bid'),
            'bidVolume': None,
            'ask': self.safe_number(ticker, 'ask'),
            'vwap': None,
            'askVolume': None,
            'open': None,
            'close': last,
            'last': last,
            'previousClose': None,
            'change': None,
            'percentage': None,
            'average': None,
            'baseVolume': self.safe_number(ticker, 'amount'),
            'quoteVolume': None,
            'info': ticker,
        }

    async def fetch_transactions(self, code=None, since=None, limit=None, params={}):
        await self.load_markets()
        request = {
            'limit': 1000,
        }
        if limit is not None:
            request['limit'] = limit
        if since is not None:
            request['timestampFrom'] = since
        if code is not None:
            currency = self.currency(code)
            request['currency'] = currency['id']
        response = await self.privatePostTransferHistory(self.extend(request, params))
        items = response['data']
        return self.parse_transactions(items, None, since, limit)

    def parse_transaction_status(self, status):
        statuses = {
            # any other types ?
            'COMPLETED': 'ok',
        }
        return self.safe_string(statuses, status, status)

    def parse_transaction(self, transaction, currency=None):
        #
        # deposits
        #
        #     {
        #         transactionId: 1862815,
        #         timestamp: 1516803982388,
        #         amountCurrency: 'LTC',
        #         amount: 1,
        #         fee: 0,
        #         walletType: 'LTC',
        #         transferType: 'DEPOSIT',
        #         transferStatus: 'COMPLETED',
        #         txid:
        #         'ccb9255dfa874e6c28f1a64179769164025329d65e5201849c2400abd6bce245',
        #         destination: 'LQrtSKA6LnhcwRrEuiborQJnjFF56xqsFn',
        #         destinationTag: null
        #     }
        #
        # withdrawals
        #
        #     {
        #         transactionId: 2140966,
        #         timestamp: 1519314282976,
        #         amountCurrency: 'EUR',
        #         amount: 8421.7228,
        #         fee: 16.8772,
        #         walletType: 'BANK_WIRE',
        #         transferType: 'WITHDRAWAL',
        #         transferStatus: 'COMPLETED',
        #         txid: null,
        #         destination: null,
        #         destinationTag: null
        #     }
        #
        timestamp = self.safe_integer(transaction, 'timestamp')
        amount = self.safe_number(transaction, 'amount')
        fee = self.safe_number(transaction, 'fee')
        txid = self.safe_string(transaction, 'txid')
        address = self.safe_string(transaction, 'destination')
        tag = self.safe_string(transaction, 'destinationTag')
        currencyId = self.safe_string(transaction, 'amountCurrency')
        code = self.safe_currency_code(currencyId, currency)
        type = self.safe_string_lower(transaction, 'transferType')
        status = self.parse_transaction_status(self.safe_string(transaction, 'transferStatus'))
        id = self.safe_string(transaction, 'transactionId')
        network = self.safe_string(transaction, 'walletType')
        return {
            'id': id,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'currency': code,
            'amount': amount,
            'type': type,
            'txid': txid,
            'network': network,
            'address': address,
            'addressTo': None,
            'addressFrom': None,
            'tag': tag,
            'tagTo': None,
            'tagFrom': None,
            'status': status,
            'fee': {
                'cost': fee,
                'currency': code,
            },
            'info': transaction,
        }

    async def fetch_my_trades(self, symbol=None, since=None, limit=None, params={}):
        await self.load_markets()
        if limit is None:
            limit = 1000
        request = {
            'limit': limit,
        }
        if symbol is not None:
            market = self.market(symbol)
            request['currencyPair'] = market['id']
        if since is not None:
            request['timestampFrom'] = since
        response = await self.privatePostTradeHistory(self.extend(request, params))
        data = self.safe_value(response, 'data', [])
        return self.parse_trades(data, None, since, limit)

    def parse_trade(self, trade, market=None):
        #
        # fetchMyTrades(private)
        #
        #     {
        #         transactionId: 2671819,
        #         createdTimestamp: 1529649127605,
        #         currencyPair: 'LTC_BTC',
        #         type: 'BUY',
        #         orderType: 'LIMIT',
        #         orderId: 101810227,
        #         amount: 0.01,
        #         price: 0.01406,
        #         fee: 0,
        #         feeType: 'MAKER'
        #     }
        #
        # fetchTrades(public)
        #
        #     {
        #         "timestamp":1561598833416,
        #         "transactionId":"4156303",
        #         "price":10950.41,
        #         "amount":0.004,
        #         "currencyPair":"BTC_EUR",
        #         "tradeType":"BUY"
        #     }
        #
        marketId = self.safe_string(trade, 'currencyPair')
        market = self.safe_market(marketId, market, '_')
        priceString = self.safe_string(trade, 'price')
        amountString = self.safe_string(trade, 'amount')
        side = self.safe_string_lower_2(trade, 'type', 'tradeType')
        type = self.safe_string_lower(trade, 'orderType')
        orderId = self.safe_string(trade, 'orderId')
        id = self.safe_string(trade, 'transactionId')
        timestamp = self.safe_integer_2(trade, 'timestamp', 'createdTimestamp')
        fee = None
        feeCostString = self.safe_string(trade, 'fee')
        if feeCostString is not None:
            fee = {
                'cost': feeCostString,
                'currency': market['quote'],
            }
        takerOrMaker = self.safe_string(trade, 'feeType')
        takerOrMaker = 'maker' if (takerOrMaker == 'MAKER') else 'taker'
        return self.safe_trade({
            'id': id,
            'info': trade,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'symbol': market['symbol'],
            'type': type,
            'side': side,
            'order': orderId,
            'takerOrMaker': takerOrMaker,
            'price': priceString,
            'amount': amountString,
            'cost': None,
            'fee': fee,
        }, market)

    async def fetch_trades(self, symbol, since=None, limit=None, params={}):
        await self.load_markets()
        market = self.market(symbol)
        request = {
            'currencyPair': market['id'],
            'minutesIntoHistory': 10,
        }
        response = await self.publicGetTransactions(self.extend(request, params))
        #
        #     {
        #         "error":false,
        #         "errorMessage":null,
        #         "data":[
        #             {
        #                 "timestamp":1561598833416,
        #                 "transactionId":"4156303",
        #                 "price":10950.41,
        #                 "amount":0.004,
        #                 "currencyPair":"BTC_EUR",
        #                 "tradeType":"BUY"
        #             }
        #         ]
        #     }
        #
        data = self.safe_value(response, 'data', [])
        return self.parse_trades(data, market, since, limit)

    async def fetch_open_orders(self, symbol=None, since=None, limit=None, params={}):
        response = await self.privatePostOpenOrders(self.extend({}, params))
        extension = {'status': 'open'}
        return self.parse_orders(response['data'], None, since, limit, extension)

    async def fetch_orders(self, symbol=None, since=None, limit=None, params={}):
        if symbol is None:
            raise ArgumentsRequired(self.id + ' fetchOrders() requires a symbol argument')
        await self.load_markets()
        market = self.market(symbol)
        request = {
            'currencyPair': market['id'],
        }
        # offset param that appears in other parts of the API doesn't appear to be supported here
        if limit is not None:
            request['limit'] = limit
        response = await self.privatePostOrderHistory(self.extend(request, params))
        return self.parse_orders(response['data'], market, since, limit)

    def parse_order_status(self, status):
        statuses = {
            'FILLED': 'closed',
            'CANCELLED': 'canceled',
            'PARTIALLY_FILLED': 'open',
            'OPEN': 'open',
        }
        return self.safe_string(statuses, status, status)

    def parse_order_type(self, type):
        types = {
            'LIMIT': 'limit',
            'MARKET': 'market',
        }
        return self.safe_string(types, type, type)

    def parse_order(self, order, market=None):
        #
        # limit sell
        #
        #     {
        #         id: 781246605,
        #         timestamp: 1584480015133,
        #         trailingUpdatedTimestamp: null,
        #         type: 'SELL',
        #         currencyPair: 'ETH_BTC',
        #         price: 0.0345,
        #         amount: 0.01,
        #         stopPrice: null,
        #         originalStopPrice: null,
        #         marketPriceAtLastUpdate: null,
        #         marketPriceAtOrderCreation: null,
        #         orderTradeType: 'LIMIT',
        #         hidden: False,
        #         trailing: False,
        #         clientOrderId: null
        #     }
        #
        # limit buy
        #
        #     {
        #         id: 67527001,
        #         timestamp: 1517931722613,
        #         trailingUpdatedTimestamp: null,
        #         type: 'BUY',
        #         price: 5897.24,
        #         remainingAmount: 0.002367,
        #         originalAmount: 0.1,
        #         stopPrice: null,
        #         originalStopPrice: null,
        #         marketPriceAtLastUpdate: null,
        #         marketPriceAtOrderCreation: null,
        #         status: 'CANCELLED',
        #         orderTradeType: 'LIMIT',
        #         hidden: False,
        #         avgPrice: null,
        #         trailing: False,
        #     }
        #
        id = self.safe_string(order, 'id')
        timestamp = self.safe_integer(order, 'timestamp')
        side = self.safe_string_lower(order, 'type')
        priceString = self.safe_string(order, 'price')
        amountString = self.safe_string(order, 'originalAmount')
        remainingString = self.safe_string_2(order, 'remainingAmount', 'amount')
        status = self.parse_order_status(self.safe_string(order, 'status'))
        type = self.parse_order_type(self.safe_string(order, 'orderTradeType'))
        averageString = self.safe_string(order, 'avgPrice')
        marketId = self.safe_string(order, 'currencyPair')
        symbol = self.safe_symbol(marketId, market, '_')
        clientOrderId = self.safe_string(order, 'clientOrderId')
        stopPrice = self.safe_number(order, 'stopPrice')
        return self.safe_order({
            'id': id,
            'clientOrderId': clientOrderId,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'lastTradeTimestamp': None,
            'symbol': symbol,
            'type': type,
            'timeInForce': None,
            'postOnly': None,
            'side': side,
            'price': priceString,
            'stopPrice': stopPrice,
            'amount': amountString,
            'cost': None,
            'average': averageString,
            'filled': None,
            'remaining': remainingString,
            'status': status,
            'trades': None,
            'info': order,
            'fee': None,
        }, market)

    async def create_order(self, symbol, type, side, amount, price=None, params={}):
        await self.load_markets()
        method = 'privatePost' + self.capitalize(side)
        request = {
            'currencyPair': self.market_id(symbol),
        }
        if type == 'market':
            if side == 'buy':
                request['total'] = self.amount_to_precision(symbol, amount)  # amount in fiat
            else:
                request['amount'] = self.amount_to_precision(symbol, amount)  # amount in fiat
            method += 'Instant'
        else:
            request['amount'] = self.amount_to_precision(symbol, amount)  # amount in crypto
            request['price'] = self.price_to_precision(symbol, price)
            method += self.capitalize(type)
        response = await getattr(self, method)(self.extend(request, params))
        id = self.safe_string(response, 'data')
        return {
            'info': response,
            'id': id,
        }

    async def fetch_order(self, id, symbol=None, params={}):
        await self.load_markets()
        request = {
            'orderId': id,
        }
        market = None
        if symbol:
            market = self.market(symbol)
        response = await self.privatePostOrderById(self.extend(request, params))
        data = self.safe_value(response, 'data')
        return self.parse_order(data, market)

    async def cancel_order(self, id, symbol=None, params={}):
        #   {"error":false,"errorMessage":null,"data":{"success":true,"remainingAmount":0.01}}
        request = {'orderId': id}
        response = await self.privatePostCancelOrderWithInfo(self.extend(request, params))
        return {
            'info': response,
        }

    def nonce(self):
        return self.milliseconds()

    def sign(self, path, api='public', method='GET', params={}, headers=None, body=None):
        url = self.urls['api'] + '/' + path
        if api == 'public':
            if params:
                url += '?' + self.urlencode(params)
        else:
            self.check_required_credentials()
            nonce = str(self.nonce())
            auth = nonce + self.uid + self.apiKey
            signature = self.hmac(self.encode(auth), self.encode(self.secret))
            body = self.urlencode(self.extend({
                'clientId': self.uid,
                'nonce': nonce,
                'publicKey': self.apiKey,
                'signature': signature.upper(),
            }, params))
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        return {'url': url, 'method': method, 'body': body, 'headers': headers}

    def handle_errors(self, code, reason, url, method, headers, body, response, requestHeaders, requestBody):
        if response is not None:
            if 'error' in response:
                # {"error":true,"errorMessage":"Minimum Order Size 0.01 ETH","data":null}
                if response['error']:
                    message = self.safe_string(response, 'errorMessage')
                    feedback = self.id + ' ' + message
                    self.throw_exactly_matched_exception(self.exceptions['exact'], message, feedback)
                    self.throw_broadly_matched_exception(self.exceptions['broad'], message, feedback)
                    raise ExchangeError(self.id + ' ' + self.json(response))
        if code > 400:
            if body:
                feedback = self.id + ' ' + body
                self.throw_exactly_matched_exception(self.exceptions['exact'], body, feedback)
                self.throw_broadly_matched_exception(self.exceptions['broad'], body, feedback)
                raise ExchangeError(feedback)  # unknown message
            raise ExchangeError(self.id + ' ' + body)
