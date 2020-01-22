<?php

namespace ccxtpro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use \ccxtpro\ClientTrait; // websocket functionality
use Exception; // a common import
use \ccxt\AuthenticationError;

class bittrex extends \ccxt\bittrex {

    use ClientTrait;

    public function describe () {
        return array_replace_recursive(parent::describe (), array(
            'has' => array(
                'ws' => true,
                'watchOrderBook' => true,
                'watchBalance' => true,
            ),
            'urls' => array(
                'api' => array(
                    'ws' => 'wss://socket.bittrex.com/signalr/connect',
                    'signalr' => 'https://socket.bittrex.com/signalr',
                ),
            ),
            'api' => array(
                'signalr' => array(
                    'get' => array(
                        'negotiate',
                        'start',
                    ),
                ),
            ),
            'options' => array(
                'hub' => 'c2',
            ),
        ));
    }

    public function create_signal_r_query ($params = array ()) {
        $hub = $this->safe_string($this->options, 'hub', 'c2');
        $hubs = array(
            array( 'name' => $hub ),
        );
        $ms = $this->milliseconds ();
        return array_merge(array(
            'transport' => 'webSockets',
            'connectionData' => $this->json ($hubs),
            'clientProtocol' => 1.5,
            '_' => $ms, // no cache
            'tid' => $this->sum (fmod($ms, 10), 1), // random
        ), $params);
    }

    public function negotiate ($params = array ()) {
        $client = $this->client ($this->urls['api']['ws']);
        $messageHash = 'negotiate';
        $future = $this->safe_value($client->subscriptions, $messageHash);
        if ($future === null) {
            $future = $client->future ($messageHash);
            $client->subscriptions[$messageHash] = $future;
            $request = $this->create_signal_r_query ($params);
            $response = $this->signalrGetNegotiate (array_merge($request, $params));
            //
            //     {
            //         Url => '/signalr/v1.1/signalr',
            //         ConnectionToken => 'lT/sa19+FcrEb4W53On2v+Pcc3d4lVCHV5/WJtmQw1RQNQMpm7K78w/WnvfTN2EgwQopTUiFX1dioHN7Bd1p8jAbfdxrqf5xHAMntJfOrw1tON0O',
            //         ConnectionId => 'a2afb0f7-346f-4f32-b7c7-01e04584b86a',
            //         KeepAliveTimeout => 20,
            //         DisconnectTimeout => 30,
            //         ConnectionTimeout => 110,
            //         TryWebSockets => true,
            //         ProtocolVersion => '1.5',
            //         TransportConnectTimeout => 5,
            //         LongPollDelay => 0
            //     }
            //
            $result = array(
                'request' => $request,
                'response' => $response,
            );
            $client->resolve ($result, $messageHash);
        }
        return $future;
    }

    public function start ($negotiation, $params = array ()) {
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $request = $this->create_signal_r_query (array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
        )));
        return $this->signalrGetStart ($request);
    }

    public function authenticate ($params = array ()) {
        $this->check_required_credentials();
        $future = $this->negotiate ();
        return $this->after_async ($future, array($this, 'get_auth_context'), $params);
    }

    public function get_auth_context ($negotiation, $params = array ()) {
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $query = array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
        ));
        $url = $this->urls['api']['ws'] . '?' . $this->urlencode ($query);
        $method = 'GetAuthContext';
        $client = $this->client ($url);
        $authenticate = $this->safe_value($client->subscriptions, $method, array());
        $future = $this->safe_value($authenticate, 'future');
        if ($future === null) {
            $future = $client->future ('authenticated');
            $requestId = (string) $this->milliseconds ();
            $hub = $this->safe_string($this->options, 'hub', 'c2');
            $request = array(
                'H' => $hub,
                'M' => $method, // $request $method
                'A' => array( $this->apiKey ), // arguments
                'I' => $requestId, // invocation $request id
            );
            $subscription = array(
                'id' => $requestId,
                'method' => array($this, 'handle_get_auth_context'),
                'negotiation' => $negotiation,
                'future' => $future,
            );
            $this->spawn (array($this, 'watch'), $url, $requestId, $request, $method, $subscription);
        }
        return $future;
    }

    public function handle_get_auth_context ($client, $message, $subscription) {
        //
        //     {
        //         'R' => '7d10e6b583484659918821072c83a5b6ce488e03cb744d86a2cc820bad466f1f',
        //         'I' => '1579474528471'
        //     }
        //
        // var_dump ($this->iso8601 ($this->milliseconds ()), 'handleGetAuthContext');
        $negotiation = $this->safe_value($subscription, 'negotiation', array());
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $query = array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
        ));
        $url = $this->urls['api']['ws'] . '?' . $this->urlencode ($query);
        $challenge = $this->safe_string($message, 'R');
        $signature = $this->hmac ($this->encode ($challenge), $this->encode ($this->secret), 'sha512');
        $requestId = (string) $this->milliseconds ();
        $hub = $this->safe_string($this->options, 'hub', 'c2');
        $method = 'Authenticate';
        $request = array(
            'H' => $hub,
            'M' => $method, // $request $method
            'A' => array( $this->apiKey, $signature ), // arguments
            'I' => $requestId, // invocation $request id
        );
        $authenticateSubscription = array(
            'id' => $requestId,
            'method' => array($this, 'handle_authenticate'),
            'negotiation' => $negotiation,
        );
        $this->spawn (array($this, 'watch'), $url, $requestId, $request, $requestId, $authenticateSubscription);
        return $message;
    }

    public function handle_authenticate ($client, $message, $subscription) {
        //
        //     array( 'R' => true, 'I' => '1579474528821' )
        //
        $R = $this->safe_value($message, 'R');
        if ($R) {
            $client->resolve ($subscription['negotiation'], 'authenticated');
        } else {
            $error = new AuthenticationError ('Authentication failed');
            $client->reject ($error, 'authenticated');
            $authSubscriptionHash = 'GetAuthContext';
            if (is_array($client->subscriptions) && array_key_exists($authSubscriptionHash, $client->subscriptions)) {
                unset($client->subscriptions[$authSubscriptionHash]);
            }
        }
        return $message;
    }

    public function subscribe_to_user_deltas ($negotiation, $params = array ()) {
        $this->load_markets();
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $query = array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
        ));
        $url = $this->urls['api']['ws'] . '?' . $this->urlencode ($query);
        $requestId = (string) $this->milliseconds ();
        $method = 'SubscribeToUserDeltas';
        $messageHash = 'balance';
        $subscribeHash = $method;
        $hub = $this->safe_string($this->options, 'hub', 'c2');
        $request = array(
            'H' => $hub,
            'M' => $method,
            'A' => array(), // arguments
            'I' => $requestId, // invocation $request id
        );
        $subscription = array(
            'id' => $requestId,
            'params' => $params,
            'method' => array($this, 'handle_subscribe_to_user_deltas'),
            'negotiation' => $negotiation,
        );
        return $this->watch ($url, $messageHash, $request, $subscribeHash, $subscription);
    }

    public function watch_balance ($params = array ()) {
        $this->load_markets();
        $future = $this->authenticate ();
        return $this->after_async ($future, array($this, 'subscribe_to_user_deltas'), $params);
    }

    public function subscribe_to_exchange_deltas ($negotiation, $symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $query = array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
            // 'tid' => $this->milliseconds (fmod(), 10),
        ));
        $url = $this->urls['api']['ws'] . '?' . $this->urlencode ($query);
        $requestId = (string) $this->milliseconds ();
        $method = 'SubscribeToExchangeDeltas';
        $messageHash = 'orderbook' . ':' . $symbol;
        $subscribeHash = $method . ':' . $symbol;
        $marketId = $market['id'];
        $hub = $this->safe_string($this->options, 'hub', 'c2');
        $request = array(
            'H' => $hub,
            'M' => $method,
            'A' => array( $marketId ), // arguments
            'I' => $requestId, // invocation $request id
        );
        $subscription = array(
            'id' => $requestId,
            'symbol' => $symbol,
            'limit' => $limit,
            'params' => $params,
            'method' => array($this, 'handle_subscribe_to_exchange_deltas'),
            'negotiation' => $negotiation,
        );
        $future = $this->watch ($url, $messageHash, $request, $subscribeHash, $subscription);
        return $this->after ($future, array($this, 'limit_order_book'), $symbol, $limit, $params);
    }

    public function watch_order_book ($symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $future = $this->negotiate ();
        return $this->after_async ($future, array($this, 'subscribe_to_exchange_deltas'), $symbol, $limit, $params);
    }

    public function limit_order_book ($orderbook, $symbol, $limit = null, $params = array ()) {
        return $orderbook->limit ($limit);
    }

    public function handle_delta ($bookside, $delta) {
        $price = $this->safe_float($delta, 'R');
        $amount = $this->safe_float($delta, 'Q');
        $bookside->store ($price, $amount);
    }

    public function handle_deltas ($bookside, $deltas) {
        for ($i = 0; $i < count($deltas); $i++) {
            $this->handle_delta ($bookside, $deltas[$i]);
        }
    }

    public function handle_exchange_delta ($client, $message) {
        //
        //     {
        //         'M' => 'BTC-ETH',
        //         'N' => 2322248,
        //         'Z' => array(),
        //         'S' => array(
        //             array( 'TY' => 0, 'R' => 0.01938852, 'Q' => 29.32758526 ),
        //             array( 'TY' => 1, 'R' => 0.02322822, 'Q' => 0 )
        //         ),
        //         'f' => array()
        //     }
        //
        $marketId = $this->safe_string($message, 'M');
        $market = null;
        $symbol = null;
        if (is_array($this->markets_by_id) && array_key_exists($marketId, $this->markets_by_id)) {
            $market = $this->markets_by_id[$marketId];
            $symbol = $market['symbol'];
        }
        //
        // https://bittrex.github.io/api/v1-1#socket-connections
        //
        //     1 Drop existing websocket connections and flush accumulated data and state (e.g. $market nonces).
        //     2 Re-establish websocket connection.
        //     3 Subscribe to BTC-ETH $market deltas, cache received data keyed by nonce.
        //     4 Query BTC-ETH $market state.
        //     5 Apply cached deltas sequentially, starting with nonces greater than that received in step 4.
        //
        if (($symbol !== null) && (is_array($this->orderbooks) && array_key_exists($symbol, $this->orderbooks))) {
            $orderbook = $this->orderbooks[$symbol];
            if ($orderbook['nonce'] !== null) {
                $this->handle_order_book_message ($client, $message, $orderbook);
                $name = 'orderbook';
                $messageHash = $name . ':' . $symbol;
                $client->resolve ($orderbook, $messageHash);
            } else {
                $orderbook->cache[] = $message;
            }
        }
    }

    public function handle_order_book_message ($client, $message, $orderbook) {
        //
        //     {
        //         'M' => 'BTC-ETH',
        //         'N' => 2322248,
        //         'Z' => array(),
        //         'S' => array(
        //             array( 'TY' => 0, 'R' => 0.01938852, 'Q' => 29.32758526 ),
        //             array( 'TY' => 1, 'R' => 0.02322822, 'Q' => 0 )
        //         ),
        //         'f' => array()
        //     }
        //
        $nonce = $this->safe_integer($message, 'N');
        // var_dump (new Date (), 'handleOrderBookMessage', $nonce, $orderbook['nonce']);
        if ($nonce > $orderbook['nonce']) {
            $this->handle_deltas ($orderbook['asks'], $this->safe_value($message, 'S', array()));
            $this->handle_deltas ($orderbook['bids'], $this->safe_value($message, 'Z', array()));
            $orderbook['nonce'] = $nonce;
        }
        return $orderbook;
    }

    public function handle_balance_delta ($client, $message) {
        //
        //     {
        //         N => 4, // nonce
        //         $d => array(
        //             U => '2832c5c6-ac7a-493e-bc16-ebca06c73670', // uuid
        //             W => 334126, // $account id (wallet)
        //             c => 'BTC', // currency
        //             b => 0.0181687, // balance
        //             a => 0.0081687, // available
        //             z => 0, // pending
        //             p => '1cL5M4HjjoGWMA4jgHC5v6GqcjfxeeNMy', // address
        //             r => false, // requested
        //             u => 1579561864940, // last updated timestamp
        //             h => null, // autosell
        //         ),
        //     }
        //
        // var_dump (new Date (), 'handleBalanceDelta', $message);
        $d = $this->safe_value($message, 'd');
        $account = $this->account ();
        $account['free'] = $this->safe_float($d, 'a');
        $account['total'] = $this->safe_float($d, 'b');
        $code = $this->safe_currency_code($this->safe_string($d, 'c'));
        $result = array();
        $result[$code] = $account;
        $this->balance = array_replace_recursive($this->balance, $result);
        $this->balance = $this->parse_balance($this->balance);
        $client->resolve ($this->balance, 'balance');
        return $message;
    }

    public function fetch_balance_snapshot ($client, $message, $subscription) {
        // var_dump (new Date (), 'fetchBalanceSnapshot');
        // todo => this is a synch blocking call in ccxt.php - make it async
        $response = $this->fetchBalance ();
        $this->balance = array_replace_recursive($this->balance, $response);
        // $messageHash = $this->safe_string($subscription, 'messageHash');
        $client->resolve ($this->balance, 'balance');
    }

    public function fetch_balance_state ($params = array ()) {
        // var_dump (new Date (), 'fetchBalanceState');
        $this->load_markets();
        $future = $this->authenticate ();
        return $this->after_async ($future, array($this, 'query_balance_state'), $params);
    }

    public function query_balance_state ($negotiation, $params = array ()) {
        //
        // This $method does not work as expected.
        //
        // In general Bittrex API docs do not mention how to get the current
        // state or a snapshot of balances of all coins over WS. The docs only
        // specify how to 'Authenticate' (that works fine) which subscribes
        // the user being authenticated to balance and order deltas by default.
        //
        // Investigating the WS message log in the browser on the
        // balance page on Bittrex's website shows a $request to
        // QueryBalanceState over WS sent in the very beginning.
        // However, in case of WS in the browser on the Bittrex website
        // there is no 'Authenticate' message, therefore the Bittrex website
        // uses a different authentication mechanism (presumably, involving
        // HTTP headers and Cookies upon the SignalR $negotiation handshake).
        //
        // An attempt to replicate the same $request to QueryBalanceState
        // over WS here has failed – the WS server responds to that $request
        // with an empty message containing just the $request id, without
        // the actual snapshot result (no field called R in the SignalR message).
        //
        // The issue experienced is 100% identical to
        //
        //     https://github.com/Bittrex/bittrex.github.io/issues/23
        //
        //     2020-01-20T16:20:52.133Z connecting to wss://socket.bittrex.com/signalr/connect?transport=webSockets&connectionData=%5B%7B%22name%22%3A%22c2%22%7D%5D&clientProtocol=1.5&_=1579537250704&tid=4&$connectionToken=ycjp5vmHhq3%2BZ5yyAgSejQyUOQR%2Bj3aWrwoqBH3Tu4MWk0y84QjuCo4tp6PHPwrVqQf96jE7QRIZ3SwTcpMf5pdS40Vkxr3e4AjUdrRfFuoaidSh
        //     2020-01-20T16:20:52.469Z onUpgrade
        //     2020-01-20T16:20:52.471Z onOpen
        //     2020-01-20T16:20:52.471Z sending {
        //         H => 'c2',
        //         M => 'GetAuthContext',
        //         A => array( '247febd8422c4b1dbdcd8a4ca9a6d15b' ),
        //         I => '1579537252133'
        //     }
        //     2020-01-20T16:20:52.584Z handleSystemStatus array( C => 'd-4F618038-L,0|LC0f,0|LC0g,1', S => 1, M => array() )
        //     2020-01-20T16:20:52.938Z onMessage {
        //         R => '99d0f9052ee442eba5736169517ef9a67ecf08c83a364295a647c989c32737f4',
        //         I => '1579537252133'
        //     }
        //     2020-01-20T16:20:52.943Z sending {
        //         H => 'c2',
        //         M => 'Authenticate',
        //         A => array(
        //             '247febd8422c4b1dbdcd8a4ca9a6d15b',
        //             '7935676d6c995f0435ec1cab48a8d02e3b4d1f786f941abba8aedbe2e088db0f023c15cee132dc6db50dd674e4ebf5a417de9ed59645b5668314846bbea8ec57'
        //         ),
        //         I => '1579537252943'
        //     }
        //     2020-01-20T16:20:56.216Z onMessage array( R => true, I => '1579537252943' )
        //     2020-01-20T16:20:56.217Z sending array( H => 'c2', M => 'SubscribeToUserDeltas', A => array(), I => '1579537256217' )
        //     2020-01-20T16:20:57.035Z onMessage array( R => true, I => '1579537256217' )
        //     2020-01-20T16:20:57.037Z sending array( H => 'c2', M => 'QueryBalanceState', A => array(), I => '1579537257037' )
        //     2020-01-20T16:20:57.772Z onMessage array( I => '1579537257037' )
        //                                                  ↑
        //                                                  |
        //                       :( no 'R' here ------------+
        //
        // The last message in the sequence above has no resulting 'R' field
        // which is present in the WebInspector and should contain the snapshot.
        // Since the balance snapshot is returned and observed in WebInspector
        // this is not caused by low balances. Apparently, a 'Query*' over WS
        // requires a different authentication sequence that involves
        // headers and cookies from reCaptcha and Cloudflare.
        //
        // var_dump (new Date (), 'queryBalanceState');
        //
        $this->load_markets();
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $query = array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
        ));
        $url = $this->urls['api']['ws'] . '?' . $this->urlencode ($query);
        $method = 'QueryBalanceState';
        $requestId = (string) $this->milliseconds ();
        $hub = $this->safe_string($this->options, 'hub', 'c2');
        $request = array(
            'H' => $hub,
            'M' => $method,
            'A' => array(), // arguments
            'I' => $requestId, // invocation $request id
        );
        $subscription = array(
            'id' => $requestId,
            'method' => array($this, 'handle_balance_state'),
        );
        $future = $this->watch ($url, $requestId, $request, $requestId, $subscription);
        return $this->after ($future, array($this, 'limit_order_book'), $params);
    }

    public function handle_balance_state ($client, $message, $subscription) {
        // var_dump (new Date (), 'handleBalanceState');
        $R = $this->safe_string($message, 'R');
        // if ($R !== null) {
        //     //
        //     //     {
        //     //         N => 2,
        //     //         y => {
        //     //             USDT => array(
        //     //                 U => '2832c5c6-ac7a-493e-bc16-ebca06c73670',
        //     //                 W => 334126,
        //     //                 c => 'USDT',
        //     //                 b => 0.00002077,
        //     //                 a => 0.00002077,
        //     //                 z => 0,
        //     //                 p => null,
        //     //                 r => false,
        //     //                 u => 978307200000,
        //     //                 h => null
        //     //             ),
        //     //             BTC => array(
        //     //                 U => '2832c5c6-ac7a-493e-bc16-ebca06c73670',
        //     //                 W => 334126,
        //     //                 c => 'BTC',
        //     //                 b => 0.00000736,
        //     //                 a => 0.00000736,
        //     //                 z => 0,
        //     //                 p => '1cL5M4HjjoGWMA4jgHC5v6GqcjfxeeNMy',
        //     //                 r => false,
        //     //                 u => 978307200000,
        //     //                 h => null
        //     //             ),
        //     //         }
        //     //     }
        //     //
        //     $response = json_decode($this->inflate ($R, $as_associative_array = true));
        // }
        return $R;
    }

    public function fetch_exchange_state ($symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $future = $this->negotiate ();
        return $this->after_async ($future, array($this, 'query_exchange_state'), $symbol, $limit, $params);
    }

    public function query_exchange_state ($negotiation, $symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $connectionToken = $this->safe_string($negotiation['response'], 'ConnectionToken');
        $query = array_merge($negotiation['request'], array(
            'connectionToken' => $connectionToken,
        ));
        $url = $this->urls['api']['ws'] . '?' . $this->urlencode ($query);
        $method = 'QueryExchangeState';
        $requestId = (string) $this->milliseconds ();
        $marketId = $market['id'];
        $hub = $this->safe_string($this->options, 'hub', 'c2');
        $request = array(
            'H' => $hub,
            'M' => $method,
            'A' => array( $marketId ), // arguments
            'I' => $requestId, // invocation $request id
        );
        $subscription = array(
            'id' => $requestId,
            'method' => array($this, 'handle_exchange_state'),
        );
        $future = $this->watch ($url, $requestId, $request, $requestId, $subscription);
        return $this->after ($future, array($this, 'limit_order_book'), $symbol, $limit, $params);
    }

    public function handle_exchange_state ($client, $message, $subscription) {
        $R = json_decode($this->inflate ($this->safe_value($message, 'R', $as_associative_array = true)));
        //
        //     {
        //         'M' => 'BTC-ETH',
        //         'N' => 2571953,
        //         'Z' => array( // bids
        //             array( 'Q' => 2.38619729, 'R' => 0.01964739 ),
        //             array( 'Q' => 6, 'R' => 0.01964738 ),
        //             array( 'Q' => 0.0257, 'R' => 0.01964736 ),
        //         ),
        //         'S' => array( // asks
        //             array( 'Q' => 1.84253634, 'R' => 0.01965675 ),
        //             array( 'Q' => 3.61380271, 'R' => 0.01965677 ),
        //             array( 'Q' => 5.6518, 'R' => 0.01965678 ),
        //         ),
        //         'f' => array( // last fills
        //             array(
        //                 'I' => 49355896,
        //                 'T' => 1579380036860,
        //                 'Q' => 0.06966562,
        //                 'P' => 0.01964993,
        //                 't' => 0.0013689245564066,
        //                 'F' => 'FILL',
        //                 'OT' => 'SELL',
        //                 'U' => '421c649f-82fa-437b-b8f2-2a6a55bbecbc'
        //             ),
        //         )
        //     }
        //
        $marketId = $this->safe_string($R, 'M');
        if (is_array($this->markets_by_id) && array_key_exists($marketId, $this->markets_by_id)) {
            $market = $this->markets_by_id[$marketId];
            $symbol = $market['symbol'];
            $orderbook = $this->safe_value($this->orderbooks, $symbol);
            if ($orderbook !== null) {
                $snapshot = $this->parse_order_book($R, null, 'Z', 'S', 'R', 'Q');
                $snapshot['nonce'] = $this->safe_integer($R, 'N');
                $orderbook->reset ($snapshot);
                // unroll the accumulated deltas
                $messages = $orderbook->cache;
                for ($i = 0; $i < count($messages); $i++) {
                    $message = $messages[$i];
                    $this->handle_order_book_message ($client, $message, $orderbook);
                }
                $this->orderbooks[$symbol] = $orderbook;
                $messageHash = 'orderbook:' . $symbol;
                $client->resolve ($orderbook, $messageHash);
                $requestId = $this->safe_string($subscription, 'id');
                $client->resolve ($orderbook, $requestId);
            }
        }
    }

    public function handle_subscribe_to_user_deltas ($client, $message, $subscription) {
        // var_dump (new Date (), 'handleSubscribeToUserDeltas');
        // fetch the snapshot in a separate async call
        $this->spawn (array($this, 'fetch_balance_snapshot'), $client, $message, $subscription);
        // the two lines below may work when bittrex fixes the snapshots
        // $params = $this->safe_value($subscription, 'params');
        // $this->spawn (array($this, 'fetch_balance_state'), $params);
    }

    public function handle_subscribe_to_exchange_deltas ($client, $message, $subscription) {
        $symbol = $this->safe_string($subscription, 'symbol');
        $limit = $this->safe_string($subscription, 'limit');
        $params = $this->safe_string($subscription, 'params');
        if (is_array($this->orderbooks) && array_key_exists($symbol, $this->orderbooks)) {
            unset($this->orderbooks[$symbol]);
        }
        $this->orderbooks[$symbol] = $this->order_book (array(), $limit);
        // fetch the snapshot in a separate async call
        $this->spawn (array($this, 'fetch_exchange_state'), $symbol, $limit, $params);
    }

    public function handle_subscription_status ($client, $message) {
        //
        //     array( 'R' => true, $I => '1579299273251' )
        //
        $I = $this->safe_string($message, 'I'); // noqa => E741
        $subscription = $this->safe_value($client->subscriptions, $I);
        if ($subscription === null) {
            $subscriptionsById = $this->index_by($client->subscriptions, 'id');
            $subscription = $this->safe_value($subscriptionsById, $I, array());
        } else {
            // clear if subscriptionHash === requestId (one-time request)
            unset($client->subscriptions[$I]);
        }
        $method = $this->safe_value($subscription, 'method');
        if ($method === null) {
            $client->resolve ($message, $I);
        } else {
            $method($client, $message, $subscription);
        }
        return $message;
    }

    public function handle_system_status ($client, $message) {
        // send signalR protocol start() call
        $future = $this->negotiate ();
        $this->spawn (array($this, 'after_async'), $future, array($this, 'start'));
        // var_dump (new Date (), 'handleSystemStatus', $message);
        return $message;
    }

    public function handle_heartbeat ($client, $message) {
        //
        // every 20 seconds (approx) if no other updates are sent
        //
        //     array()
        //
        // var_dump (new Date (), 'heartbeat');
        $client->resolve ($message, 'heartbeat');
    }

    public function handle_order_delta ($client, $message) {
        return $message;
    }

    public function handle_message ($client, $message) {
        $methods = array(
            'uE' => array($this, 'handle_exchange_delta'),
            'uO' => array($this, 'handle_order_delta'),
            'uB' => array($this, 'handle_balance_delta'),
        );
        $M = $this->safe_value($message, 'M', array());
        for ($i = 0; $i < count($M); $i++) {
            $methodType = $this->safe_value($M[$i], 'M');
            $method = $this->safe_value($methods, $methodType);
            if ($method !== null) {
                $A = $this->safe_value($M[$i], 'A', array());
                for ($k = 0; $k < count($A); $k++) {
                    $update = json_decode($this->inflate ($A[$k], $as_associative_array = true));
                    $method($client, $update);
                }
            }
        }
        // resolve invocations by request id
        if (is_array($message) && array_key_exists('I', $message)) {
            $this->handle_subscription_status ($client, $message);
        }
        if (is_array($message) && array_key_exists('S', $message)) {
            $this->handle_system_status ($client, $message);
        }
        $keys = is_array($message) ? array_keys($message) : array();
        $numKeys = is_array($keys) ? count($keys) : 0;
        if ($numKeys < 1) {
            $this->handle_heartbeat ($client, $message);
        }
    }

    public function sign_message ($client, $messageHash, $message, $params = array ()) {
        // todo => implement signMessage() if needed
        return $message;
    }

    public function sign ($path, $api = 'public', $method = 'GET', $params = array (), $headers = null, $body = null) {
        if ($api === 'signalr') {
            $url = $this->implode_params($this->urls['api'][$api], array(
                'hostname' => $this->hostname,
            )) . '/' . $path;
            if ($params) {
                $url .= '?' . $this->urlencode ($params);
            }
            return array( 'url' => $url, 'method' => $method, 'body' => $body, 'headers' => $headers );
        } else {
            return parent::sign ($path, $api, $method, $params, $headers, $body);
        }
    }
}
