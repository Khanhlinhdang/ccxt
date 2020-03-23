<?php

namespace ccxtpro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use Exception; // a common import

class bitstamp extends \ccxt\bitstamp {

    use ClientTrait;

    public function describe () {
        return array_replace_recursive(parent::describe (), array(
            'has' => array(
                'ws' => true,
                'watchOrderBook' => true,
                'watchTrades' => true,
                'watchOHLCV' => false,
                'watchTicker' => false,
                'watchTickers' => false,
            ),
            'urls' => array(
                'api' => array(
                    'ws' => 'wss://ws.bitstamp.net',
                ),
            ),
            'options' => array(
                'watchOrderBook' => array(
                    'type' => 'order_book', // detail_order_book, diff_order_book
                ),
                'tradesLimit' => 1000,
                'OHLCVLimit' => 1000,
            ),
        ));
    }

    public function watch_order_book ($symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market($symbol);
        $options = $this->safe_value($this->options, 'watchOrderBook', array());
        $type = $this->safe_string($options, 'type', 'order_book');
        $messageHash = $type . '_' . $market['id'];
        $url = $this->urls['api']['ws'];
        $request = array(
            'event' => 'bts:subscribe',
            'data' => array(
                'channel' => $messageHash,
            ),
        );
        $subscription = array(
            'messageHash' => $messageHash,
            'type' => $type,
            'symbol' => $symbol,
            'method' => array($this, 'handle_order_book_subscription'),
            'limit' => $limit,
            'params' => $params,
        );
        $message = array_merge($request, $params);
        $future = $this->watch($url, $messageHash, $message, $messageHash, $subscription);
        return $this->after($future, array($this, 'limit_order_book'), $symbol, $limit, $params);
    }

    public function fetch_order_book_snapshot ($client, $message, $subscription) {
        $symbol = $this->safe_string($subscription, 'symbol');
        $limit = $this->safe_integer($subscription, 'limit');
        $params = $this->safe_value($subscription, 'params');
        $messageHash = $this->safe_string($subscription, 'messageHash');
        // todo => this is a synch blocking call in ccxt.php - make it async
        $snapshot = $this->fetch_order_book($symbol, $limit, $params);
        $orderbook = $this->safe_value($this->orderbooks, $symbol);
        if ($orderbook !== null) {
            $orderbook->reset ($snapshot);
            // unroll the accumulated deltas
            $messages = $orderbook->cache;
            for ($i = 0; $i < count($messages); $i++) {
                $message = $messages[$i];
                $this->handle_order_book_message($client, $message, $orderbook);
            }
            $this->orderbooks[$symbol] = $orderbook;
            $client->resolve ($orderbook, $messageHash);
        }
    }

    public function handle_delta ($bookside, $delta) {
        $price = $this->safe_float($delta, 0);
        $amount = $this->safe_float($delta, 1);
        $id = $this->safe_string($delta, 2);
        if ($id === null) {
            $bookside->store ($price, $amount);
        } else {
            $bookside->store ($price, $amount, $id);
        }
    }

    public function handle_deltas ($bookside, $deltas) {
        for ($i = 0; $i < count($deltas); $i++) {
            $this->handle_delta($bookside, $deltas[$i]);
        }
    }

    public function handle_order_book_message ($client, $message, $orderbook, $nonce = null) {
        $data = $this->safe_value($message, 'data', array());
        $microtimestamp = $this->safe_integer($data, 'microtimestamp');
        if (($nonce !== null) && ($microtimestamp <= $nonce)) {
            return $orderbook;
        }
        $this->handle_deltas($orderbook['asks'], $this->safe_value($data, 'asks', array()));
        $this->handle_deltas($orderbook['bids'], $this->safe_value($data, 'bids', array()));
        $orderbook['nonce'] = $microtimestamp;
        $timestamp = intval ($microtimestamp / 1000);
        $orderbook['timestamp'] = $timestamp;
        $orderbook['datetime'] = $this->iso8601($timestamp);
        return $orderbook;
    }

    public function handle_order_book ($client, $message) {
        //
        // initial snapshot is fetched with ccxt's fetchOrderBook
        // the feed does not include a snapshot, just the deltas
        //
        //     {
        //         data => array(
        //             timestamp => '1583656800',
        //             microtimestamp => '1583656800237527',
        //             bids => [
        //                 ["8732.02", "0.00002478", "1207590500704256"],
        //                 ["8729.62", "0.01600000", "1207590502350849"],
        //                 ["8727.22", "0.01800000", "1207590504296448"],
        //             ],
        //             asks => [
        //                 ["8735.67", "2.00000000", "1207590693249024"],
        //                 ["8735.67", "0.01700000", "1207590693634048"],
        //                 ["8735.68", "1.53294500", "1207590692048896"],
        //             ],
        //         ),
        //         event => 'data',
        //         $channel => 'detail_order_book_btcusd'
        //     }
        //
        $channel = $this->safe_string($message, 'channel');
        $subscription = $this->safe_value($client->subscriptions, $channel);
        $symbol = $this->safe_string($subscription, 'symbol');
        $type = $this->safe_string($subscription, 'type');
        $orderbook = $this->safe_value($this->orderbooks, $symbol);
        if ($orderbook === null) {
            return $message;
        }
        if ($type === 'order_book') {
            $orderbook->reset (array());
            $this->handle_order_book_message($client, $message, $orderbook);
            $client->resolve ($orderbook, $channel);
            // replace top bids and asks
        } else if ($type === 'detail_order_book') {
            $orderbook->reset (array());
            $this->handle_order_book_message($client, $message, $orderbook);
            $client->resolve ($orderbook, $channel);
            // replace top bids and asks
        } else if ($type === 'diff_order_book') {
            // process incremental deltas
            $nonce = $this->safe_integer($orderbook, 'nonce');
            if ($nonce === null) {
                // buffer the events you receive from the stream
                $orderbook->cache[] = $message;
            } else {
                try {
                    $this->handle_order_book_message($client, $message, $orderbook, $nonce);
                    $client->resolve ($orderbook, $channel);
                } catch (Exception $e) {
                    if (is_array($this->orderbooks) && array_key_exists($symbol, $this->orderbooks)) {
                        unset($this->orderbooks[$symbol]);
                    }
                    if (is_array($client->subscriptions) && array_key_exists($channel, $client->subscriptions)) {
                        unset($client->subscriptions[$channel]);
                    }
                    $client->reject ($e, $channel);
                }
            }
        }
    }

    public function watch_trades ($symbol, $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market($symbol);
        $options = $this->safe_value($this->options, 'watchTrades', array());
        $type = $this->safe_string($options, 'type', 'live_trades');
        $messageHash = $type . '_' . $market['id'];
        $url = $this->urls['api']['ws'];
        $request = array(
            'event' => 'bts:subscribe',
            'data' => array(
                'channel' => $messageHash,
            ),
        );
        $subscription = array(
            'messageHash' => $messageHash,
            'type' => $type,
            'symbol' => $symbol,
            'limit' => $limit,
            'params' => $params,
        );
        $message = array_merge($request, $params);
        $future = $this->watch($url, $messageHash, $message, $messageHash, $subscription);
        return $this->after($future, array($this, 'filter_by_since_limit'), $since, $limit, 'timestamp', true);
    }

    public function parse_trade ($trade, $market = null) {
        //
        //     {
        //         buy_order_id => 1211625836466176,
        //         amount_str => '1.08000000',
        //         $timestamp => '1584642064',
        //         $microtimestamp => '1584642064685000',
        //         $id => 108637852,
        //         $amount => 1.08,
        //         sell_order_id => 1211625840754689,
        //         price_str => '6294.77',
        //         type => 1,
        //         $price => 6294.77
        //     }
        //
        $microtimestamp = $this->safe_integer($trade, 'microtimestamp');
        if ($microtimestamp === null) {
            return parent::parse_trade($trade, $market);
        }
        $id = $this->safe_string($trade, 'id');
        $timestamp = intval ($microtimestamp / 1000);
        $price = $this->safe_float($trade, 'price');
        $amount = $this->safe_float($trade, 'amount');
        $cost = null;
        if (($price !== null) && ($amount !== null)) {
            $cost = $price * $amount;
        }
        $symbol = null;
        $marketId = $this->safe_string($trade, 's');
        if (is_array($this->markets_by_id) && array_key_exists($marketId, $this->markets_by_id)) {
            $market = $this->markets_by_id[$marketId];
        }
        if (($symbol === null) && ($market !== null)) {
            $symbol = $market['symbol'];
        }
        $side = $this->safe_integer($trade, 'type');
        $side = ($side === 0) ? 'buy' : 'sell';
        return array(
            'info' => $trade,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601($timestamp),
            'symbol' => $symbol,
            'id' => $id,
            'order' => null,
            'type' => null,
            'takerOrMaker' => null,
            'side' => $side,
            'price' => $price,
            'amount' => $amount,
            'cost' => $cost,
            'fee' => null,
        );
    }

    public function handle_trade ($client, $message) {
        //
        //     {
        //         $data => $array(
        //             buy_order_id => 1207733769326592,
        //             amount_str => "0.14406384",
        //             timestamp => "1583691851",
        //             microtimestamp => "1583691851934000",
        //             id => 106833903,
        //             amount => 0.14406384,
        //             sell_order_id => 1207733765476352,
        //             price_str => "8302.92",
        //             type => 0,
        //             price => 8302.92
        //         ),
        //         event => "$trade",
        //         $channel => "live_trades_btcusd"
        //     }
        //
        // the $trade streams push raw $trade information in real-time
        // each $trade has a unique buyer and seller
        $channel = $this->safe_string($message, 'channel');
        $data = $this->safe_value($message, 'data');
        $subscription = $this->safe_value($client->subscriptions, $channel);
        $symbol = $this->safe_string($subscription, 'symbol');
        $market = $this->market($symbol);
        $trade = $this->parse_trade($data, $market);
        $array = $this->safe_value($this->trades, $symbol, $array());
        $array[] = $trade;
        $length = is_array($array) ? count($array) : 0;
        if ($length > $this->options['tradesLimit']) {
            array_shift($array);
        }
        $this->trades[$symbol] = $array;
        $client->resolve ($array, $channel);
    }

    public function sign_message ($client, $messageHash, $message, $params = array ()) {
        // todo => implement binance signMessage
        return $message;
    }

    public function handle_order_book_subscription ($client, $message, $subscription) {
        $type = $this->safe_string($subscription, 'type');
        $symbol = $this->safe_string($subscription, 'symbol');
        if (is_array($this->orderbooks) && array_key_exists($symbol, $this->orderbooks)) {
            unset($this->orderbooks[$symbol]);
        }
        if ($type === 'order_book') {
            $limit = $this->safe_integer($subscription, 'limit', 100);
            $this->orderbooks[$symbol] = $this->order_book(array(), $limit);
        } else if ($type === 'detail_order_book') {
            $limit = $this->safe_integer($subscription, 'limit', 100);
            $this->orderbooks[$symbol] = $this->indexed_order_book(array(), $limit);
        } else if ($type === 'diff_order_book') {
            $limit = $this->safe_integer($subscription, 'limit');
            $this->orderbooks[$symbol] = $this->order_book(array(), $limit);
            // fetch the snapshot in a separate async call
            $this->spawn(array($this, 'fetch_order_book_snapshot'), $client, $message, $subscription);
        }
    }

    public function handle_subscription_status ($client, $message) {
        //
        //     {
        //         'event' => "bts:subscription_succeeded",
        //         'channel' => "detail_order_book_btcusd",
        //         'data' => array(),
        //     }
        //
        $channel = $this->safe_string($message, 'channel');
        $subscription = $this->safe_value($client->subscriptions, $channel, array());
        $method = $this->safe_value($subscription, 'method');
        if ($method !== null) {
            $method($client, $message, $subscription);
        }
        return $message;
    }

    public function handle_subject ($client, $message) {
        //
        //     {
        //         data => array(
        //             timestamp => '1583656800',
        //             microtimestamp => '1583656800237527',
        //             bids => [
        //                 ["8732.02", "0.00002478", "1207590500704256"],
        //                 ["8729.62", "0.01600000", "1207590502350849"],
        //                 ["8727.22", "0.01800000", "1207590504296448"],
        //             ],
        //             asks => [
        //                 ["8735.67", "2.00000000", "1207590693249024"],
        //                 ["8735.67", "0.01700000", "1207590693634048"],
        //                 ["8735.68", "1.53294500", "1207590692048896"],
        //             ],
        //         ),
        //         event => 'data',
        //         $channel => 'detail_order_book_btcusd'
        //     }
        //
        $channel = $this->safe_string($message, 'channel');
        $subscription = $this->safe_value($client->subscriptions, $channel);
        $type = $this->safe_string($subscription, 'type');
        $methods = array(
            'live_trades' => array($this, 'handle_trade'),
            // 'live_orders' => array($this, 'handle_order_book'),
            'order_book' => array($this, 'handle_order_book'),
            'detail_order_book' => array($this, 'handle_order_book'),
            'diff_order_book' => array($this, 'handle_order_book'),
        );
        $method = $this->safe_value($methods, $type);
        if ($method === null) {
            return $message;
        } else {
            return $method($client, $message);
        }
    }

    public function handle_error_message ($client, $message) {
        return $message;
    }

    public function handle_message ($client, $message) {
        if (!$this->handle_error_message($client, $message)) {
            return;
        }
        //
        //     {
        //         'event' => "bts:subscription_succeeded",
        //         'channel' => "detail_order_book_btcusd",
        //         'data' => array(),
        //     }
        //
        //     {
        //         data => array(
        //             timestamp => '1583656800',
        //             microtimestamp => '1583656800237527',
        //             bids => [
        //                 ["8732.02", "0.00002478", "1207590500704256"],
        //                 ["8729.62", "0.01600000", "1207590502350849"],
        //                 ["8727.22", "0.01800000", "1207590504296448"],
        //             ],
        //             asks => [
        //                 ["8735.67", "2.00000000", "1207590693249024"],
        //                 ["8735.67", "0.01700000", "1207590693634048"],
        //                 ["8735.68", "1.53294500", "1207590692048896"],
        //             ],
        //         ),
        //         $event => 'data',
        //         channel => 'detail_order_book_btcusd'
        //     }
        //
        $event = $this->safe_string($message, 'event');
        if ($event === 'bts:subscription_succeeded') {
            return $this->handle_subscription_status($client, $message);
        } else {
            return $this->handle_subject($client, $message);
        }
    }
}
