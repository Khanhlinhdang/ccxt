<?php

namespace ccxtpro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use Exception; // a common import
use \ccxt\ExchangeError;

class kucoin extends \ccxt\kucoin {

    use ClientTrait;

    public function describe () {
        return array_replace_recursive(parent::describe (), array(
            'has' => array(
                'ws' => true,
                'watchOrderBook' => true,
                'watchTickers' => false, // for now
                'watchTicker' => true,
                'watchTrades' => true,
                'watchBalance' => false, // for now
                'watchOHLCV' => false, // missing on the exchange side
            ),
            'options' => array(
                'tradesLimit' => 1000,
                'watchOrderBookRate' => 100, // get updates every 100ms or 1000ms
            ),
            'streaming' => array(
                // kucoin does not support built-in ws protocol-level ping-pong
                // instead it requires a custom json-based text ping-pong
                // https://docs.kucoin.com/#ping
                'ping' => array($this, 'ping'),
            ),
        ));
    }

    public function negotiate ($params = array ()) {
        $client = $this->client('ws');
        $messageHash = 'negotiate';
        $future = $this->safe_value($client->subscriptions, $messageHash);
        if ($future === null) {
            $future = $client->future ($messageHash);
            $client->subscriptions[$messageHash] = $future;
            $response = null;
            $throwException = false;
            if ($this->check_required_credentials($throwException)) {
                $response = $this->privatePostBulletPrivate ();
                //
                //     {
                //         code => "200000",
                //         $data => {
                //             $instanceServers => array(
                //                 {
                //                     pingInterval =>  50000,
                //                     $endpoint => "wss://push-private.kucoin.com/endpoint",
                //                     protocol => "websocket",
                //                     encrypt => true,
                //                     pingTimeout => 10000
                //                 }
                //             ),
                //             $token => "2neAiuYvAU61ZDXANAGAsiL4-iAExhsBXZxftpOeh_55i3Ysy2q2LEsEWU64mdzUOPusi34M_wGoSf7iNyEWJ1UQy47YbpY4zVdzilNP-Bj3iXzrjjGlWtiYB9J6i9GjsxUuhPw3BlrzazF6ghq4Lzf7scStOz3KkxjwpsOBCH4=.WNQmhZQeUKIkh97KYgU0Lg=="
                //         }
                //     }
                //
            } else {
                $response = $this->publicPostBulletPublic ();
            }
            $client->resolve ($response, $messageHash);
            // $data = $this->safe_value($response, 'data', array());
            // $instanceServers = $this->safe_value($data, 'instanceServers', array());
            // $firstServer = $this->safe_value($instanceServers, 0, array());
            // $endpoint = $this->safe_string($firstServer, 'endpoint');
            // $token = $this->safe_string($data, 'token');
        }
        return $future;
    }

    public function subscribe ($negotiation, $topic, $method, $symbol, $params = array ()) {
        $this->load_markets();
        $market = $this->market($symbol);
        $data = $this->safe_value($negotiation, 'data', array());
        $instanceServers = $this->safe_value($data, 'instanceServers', array());
        $firstServer = $this->safe_value($instanceServers, 0, array());
        $endpoint = $this->safe_string($firstServer, 'endpoint');
        $token = $this->safe_string($data, 'token');
        $nonce = $this->nonce();
        $query = array(
            'token' => $token,
            'acceptUserMessage' => 'true',
            // 'connectId' => $nonce, // user-defined id is supported, received by handleSystemStatus
        );
        $url = $endpoint . '?' . $this->urlencode($query);
        // $topic = '/market/snapshot'; // '/market/ticker';
        $messageHash = $topic . ':' . $market['id'];
        $subscribe = array(
            'id' => $nonce,
            'type' => 'subscribe',
            'topic' => $messageHash,
            'response' => true,
        );
        $subscription = array(
            'id' => (string) $nonce,
            'symbol' => $symbol,
            'topic' => $topic,
            'messageHash' => $messageHash,
            'method' => $method,
        );
        $request = array_merge($subscribe, $params);
        return $this->watch($url, $messageHash, $request, $messageHash, $subscription);
    }

    public function watch_ticker ($symbol, $params = array ()) {
        $this->load_markets();
        $negotiate = $this->negotiate();
        $topic = '/market/snapshot';
        return $this->after_async($negotiate, array($this, 'subscribe'), $topic, null, $symbol, $params);
    }

    public function handle_ticker ($client, $message) {
        //
        // updates come in every 2 sec unless there
        // were no changes since the previous update
        //
        //     {
        //         "$data" => {
        //             "sequence" => "1545896669291",
        //             "$data" => array(
        //                 "trading" => true,
        //                 "$symbol" => "KCS-BTC",
        //                 "buy" => 0.00011,
        //                 "sell" => 0.00012,
        //                 "sort" => 100,
        //                 "volValue" => 3.13851792584, // total
        //                 "baseCurrency" => "KCS",
        //                 "market" => "BTC",
        //                 "quoteCurrency" => "BTC",
        //                 "symbolCode" => "KCS-BTC",
        //                 "datetime" => 1548388122031,
        //                 "high" => 0.00013,
        //                 "vol" => 27514.34842,
        //                 "low" => 0.0001,
        //                 "changePrice" => -1.0e-5,
        //                 "changeRate" => -0.0769,
        //                 "lastTradedPrice" => 0.00012,
        //                 "board" => 0,
        //                 "mark" => 0
        //             }
        //         ),
        //         "subject" => "trade.snapshot",
        //         "topic" => "/market/snapshot:KCS-BTC",
        //         "type" => "$message"
        //     }
        //
        $data = $this->safe_value($message, 'data', array());
        $rawTicker = $this->safe_value($data, 'data', array());
        $ticker = $this->parse_ticker($rawTicker);
        $symbol = $ticker['symbol'];
        $this->tickers[$symbol] = $ticker;
        $messageHash = $this->safe_string($message, 'topic');
        if ($messageHash !== null) {
            $client->resolve ($ticker, $messageHash);
        }
        return $message;
    }

    public function watch_trades ($symbol, $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $negotiate = $this->negotiate();
        $topic = '/market/match';
        $future = $this->after_async($negotiate, array($this, 'subscribe'), $topic, null, $symbol, $params);
        return $this->after($future, array($this, 'filter_by_since_limit'), $since, $limit, 'timestamp', true);
    }

    public function handle_trade ($client, $message) {
        //
        //     {
        //         $data => $array(
        //             sequence => '1568787654360',
        //             $symbol => 'BTC-USDT',
        //             side => 'buy',
        //             size => '0.00536577',
        //             price => '9345',
        //             takerOrderId => '5e356c4a9f1a790008f8d921',
        //             time => '1580559434436443257',
        //             type => 'match',
        //             makerOrderId => '5e356bffedf0010008fa5d7f',
        //             tradeId => '5e356c4aeefabd62c62a1ece'
        //         ),
        //         subject => 'trade.l3match',
        //         topic => '/market/match:BTC-USDT',
        //         type => 'message'
        //     }
        //
        $data = $this->safe_value($message, 'data', $array());
        $trade = $this->parse_trade($data);
        $messageHash = $this->safe_string($message, 'topic');
        $symbol = $trade['symbol'];
        $array = $this->safe_value($this->trades, $symbol, $array());
        $array[] = $trade;
        $length = is_array($array) ? count($array) : 0;
        if ($length > $this->options['tradesLimit']) {
            array_shift($array);
        }
        $this->trades[$symbol] = $array;
        $client->resolve ($array, $messageHash);
        return $message;
    }

    public function watch_order_book ($symbol, $limit = null, $params = array ()) {
        //
        // https://docs.kucoin.com/#level-2-market-data
        //
        // 1. After receiving the websocket Level 2 data flow, cache the data.
        // 2. Initiate a REST request to get the snapshot data of Level 2 order book.
        // 3. Playback the cached Level 2 data flow.
        // 4. Apply the new Level 2 data flow to the local snapshot to ensure that
        // the sequence of the new Level 2 update lines up with the sequence of
        // the previous Level 2 data. Discard all the message prior to that
        // sequence, and then playback the change to snapshot.
        // 5. Update the level2 full data based on sequence according to the
        // size. If the price is 0, ignore the messages and update the sequence.
        // If the size=0, update the sequence and remove the price of which the
        // size is 0 out of level 2. For other cases, please update the price.
        //
        if ($limit !== null) {
            if (($limit !== 20) && ($limit !== 100)) {
                throw new ExchangeError($this->id . " watchOrderBook 'limit' argument must be null, 20 or 100");
            }
        }
        $this->load_markets();
        $negotiate = $this->negotiate();
        $topic = '/market/level2';
        $future = $this->after_async($negotiate, array($this, 'subscribe'), $topic, array($this, 'handle_order_book_subscription'), $symbol, $params);
        return $this->after($future, array($this, 'limit_order_book'), $symbol, $limit, $params);
    }

    public function fetch_order_book_snapshot ($client, $message, $subscription) {
        $symbol = $this->safe_string($subscription, 'symbol');
        $limit = $this->safe_integer($subscription, 'limit');
        $messageHash = $this->safe_string($subscription, 'messageHash');
        // 2. Initiate a REST request to get the $snapshot data of Level 2 order book.
        // todo => this is a synch blocking call in ccxt.php - make it async
        $snapshot = $this->fetch_order_book($symbol, $limit);
        $orderbook = $this->orderbooks[$symbol];
        $orderbook->reset ($snapshot);
        // unroll the accumulated deltas
        $messages = $orderbook->cache;
        // 3. Playback the cached Level 2 data flow.
        for ($i = 0; $i < count($messages); $i++) {
            $message = $messages[$i];
            $this->handle_order_book_message($client, $message, $orderbook);
        }
        $this->orderbooks[$symbol] = $orderbook;
        $client->resolve ($orderbook, $messageHash);
    }

    public function handle_delta ($bookside, $delta, $nonce) {
        $price = $this->safe_float($delta, 0);
        if ($price > 0) {
            $sequence = $this->safe_integer($delta, 2);
            if ($sequence > $nonce) {
                $amount = $this->safe_float($delta, 1);
                $bookside->store ($price, $amount);
            }
        }
    }

    public function handle_deltas ($bookside, $deltas, $nonce) {
        for ($i = 0; $i < count($deltas); $i++) {
            $this->handle_delta($bookside, $deltas[$i], $nonce);
        }
    }

    public function handle_order_book_message ($client, $message, $orderbook) {
        //
        //     {
        //         "type":"$message",
        //         "topic":"/market/level2:BTC-USDT",
        //         "subject":"trade.l2update",
        //         "$data":{
        //             "$sequenceStart":1545896669105,
        //             "$sequenceEnd":1545896669106,
        //             "symbol":"BTC-USDT",
        //             "$changes" => {
        //                 "$asks" => [["6","1","1545896669105"]], // price, size, sequence
        //                 "$bids" => [["4","1","1545896669106"]]
        //             }
        //         }
        //     }
        //
        $data = $this->safe_value($message, 'data', array());
        $sequenceEnd = $this->safe_integer($data, 'sequenceEnd');
        // 4. Apply the new Level 2 $data flow to the local snapshot to ensure that
        // the sequence of the new Level 2 update lines up with the sequence of
        // the previous Level 2 $data-> Discard all the $message prior to that
        // sequence, and then playback the change to snapshot.
        if ($sequenceEnd > $orderbook['nonce']) {
            $sequenceStart = $this->safe_integer($message, 'sequenceStart');
            if (($sequenceStart !== null) && (($sequenceStart - 1) > $orderbook['nonce'])) {
                // todo => $client->reject from handleOrderBookMessage properly
                throw new ExchangeError($this->id . ' handleOrderBook received an out-of-order nonce');
            }
            $changes = $this->safe_value($data, 'changes', array());
            $asks = $this->safe_value($changes, 'asks', array());
            $bids = $this->safe_value($changes, 'bids', array());
            $asks = $this->sort_by($asks, 2); // sort by sequence
            $bids = $this->sort_by($bids, 2);
            // 5. Update the level2 full $data based on sequence according to the
            // size. If the price is 0, ignore the messages and update the sequence.
            // If the size=0, update the sequence and remove the price of which the
            // size is 0 out of level 2. For other cases, please update the price.
            $this->handle_deltas($orderbook['asks'], $asks, $orderbook['nonce']);
            $this->handle_deltas($orderbook['bids'], $bids, $orderbook['nonce']);
            $orderbook['nonce'] = $sequenceEnd;
            $orderbook['timestamp'] = null;
            $orderbook['datetime'] = null;
        }
        return $orderbook;
    }

    public function handle_order_book ($client, $message) {
        //
        // initial snapshot is fetched with ccxt's fetchOrderBook
        // the feed does not include a snapshot, just the deltas
        //
        //     {
        //         "type":"$message",
        //         "topic":"/market/level2:BTC-USDT",
        //         "subject":"trade.l2update",
        //         "$data":{
        //             "sequenceStart":1545896669105,
        //             "sequenceEnd":1545896669106,
        //             "$symbol":"BTC-USDT",
        //             "changes" => {
        //                 "asks" => [["6","1","1545896669105"]], // price, size, sequence
        //                 "bids" => [["4","1","1545896669106"]]
        //             }
        //         }
        //     }
        //
        $messageHash = $this->safe_string($message, 'topic');
        $data = $this->safe_value($message, 'data');
        $marketId = $this->safe_string($data, 'symbol');
        $market = null;
        $symbol = null;
        if ($marketId !== null) {
            if (is_array($this->markets_by_id) && array_key_exists($marketId, $this->markets_by_id)) {
                $market = $this->markets_by_id[$marketId];
                $symbol = $market['symbol'];
            }
        }
        $orderbook = $this->orderbooks[$symbol];
        if ($orderbook['nonce'] === null) {
            // 1. After receiving the websocket Level 2 $data flow, cache the $data->
            $orderbook->cache[] = $message;
        } else {
            $this->handle_order_book_message($client, $message, $orderbook);
            $client->resolve ($orderbook, $messageHash);
        }
    }

    public function sign_message ($client, $messageHash, $message, $params = array ()) {
        // todo => implement kucoin signMessage
        return $message;
    }

    public function handle_order_book_subscription ($client, $message, $subscription) {
        $symbol = $this->safe_string($subscription, 'symbol');
        $limit = $this->safe_string($subscription, 'limit');
        if (is_array($this->orderbooks) && array_key_exists($symbol, $this->orderbooks)) {
            unset($this->orderbooks[$symbol]);
        }
        $this->orderbooks[$symbol] = $this->order_book(array(), $limit);
        // fetch the snapshot in a separate async call
        $this->spawn(array($this, 'fetch_order_book_snapshot'), $client, $message, $subscription);
    }

    public function handle_subscription_status ($client, $message) {
        //
        //     {
        //         $id => '1578090438322',
        //         type => 'ack'
        //     }
        //
        $id = $this->safe_string($message, 'id');
        $subscriptionsById = $this->index_by($client->subscriptions, 'id');
        $subscription = $this->safe_value($subscriptionsById, $id, array());
        $method = $this->safe_value($subscription, 'method');
        if ($method !== null) {
            $method($client, $message, $subscription);
        }
        return $message;
    }

    public function handle_system_status ($client, $message) {
        //
        // todo => answer the question whether handleSystemStatus should be renamed
        // and unified as handleStatus for any usage pattern that
        // involves system status and maintenance updates
        //
        //     {
        //         id => '1578090234088', // connectId
        //         type => 'welcome',
        //     }
        //
        return $message;
    }

    public function handle_subject ($client, $message) {
        //
        //     {
        //         "type":"$message",
        //         "topic":"/market/level2:BTC-USDT",
        //         "$subject":"trade.l2update",
        //         "data":{
        //             "sequenceStart":1545896669105,
        //             "sequenceEnd":1545896669106,
        //             "symbol":"BTC-USDT",
        //             "changes" => {
        //                 "asks" => [["6","1","1545896669105"]], // price, size, sequence
        //                 "bids" => [["4","1","1545896669106"]]
        //             }
        //         }
        //     }
        //
        $subject = $this->safe_string($message, 'subject');
        $methods = array(
            'trade.l2update' => array($this, 'handle_order_book'),
            'trade.snapshot' => array($this, 'handle_ticker'),
            'trade.l3match' => array($this, 'handle_trade'),
        );
        $method = $this->safe_value($methods, $subject);
        if ($method === null) {
            return $message;
        } else {
            return $method($client, $message);
        }
    }

    public function ping ($client) {
        // kucoin does not support built-in ws protocol-level ping-pong
        // instead it requires a custom json-based text ping-pong
        // https://docs.kucoin.com/#ping
        $id = (string) $this->nonce();
        return array(
            'id' => $id,
            'type' => 'ping',
        );
    }

    public function handle_pong ($client, $message) {
        // https://docs.kucoin.com/#ping
        $client->lastPong = $this->milliseconds();
        return $message;
    }

    public function handle_error_message ($client, $message) {
        return $message;
    }

    public function handle_message ($client, $message) {
        if ($this->handle_error_message($client, $message)) {
            $type = $this->safe_string($message, 'type');
            $methods = array(
                // 'heartbeat' => $this->handleHeartbeat,
                'welcome' => array($this, 'handle_system_status'),
                'ack' => array($this, 'handle_subscription_status'),
                'message' => array($this, 'handle_subject'),
                'pong' => array($this, 'handle_pong'),
            );
            $method = $this->safe_value($methods, $type);
            if ($method === null) {
                return $message;
            } else {
                return $method($client, $message);
            }
        }
    }
}
