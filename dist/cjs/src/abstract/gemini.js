'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    webGetRestApi(params) { return this['webGetRestApi'](params); }
    publicGetV1Symbols(params) { return this['publicGetV1Symbols'](params); }
    publicGetV1SymbolsDetailsSymbol(params) { return this['publicGetV1SymbolsDetailsSymbol'](params); }
    publicGetV1StakingRates(params) { return this['publicGetV1StakingRates'](params); }
    publicGetV1PubtickerSymbol(params) { return this['publicGetV1PubtickerSymbol'](params); }
    publicGetV2TickerSymbol(params) { return this['publicGetV2TickerSymbol'](params); }
    publicGetV2CandlesSymbolTimeframe(params) { return this['publicGetV2CandlesSymbolTimeframe'](params); }
    publicGetV1TradesSymbol(params) { return this['publicGetV1TradesSymbol'](params); }
    publicGetV1AuctionSymbol(params) { return this['publicGetV1AuctionSymbol'](params); }
    publicGetV1AuctionSymbolHistory(params) { return this['publicGetV1AuctionSymbolHistory'](params); }
    publicGetV1Pricefeed(params) { return this['publicGetV1Pricefeed'](params); }
    publicGetV1BookSymbol(params) { return this['publicGetV1BookSymbol'](params); }
    publicGetV1EarnRates(params) { return this['publicGetV1EarnRates'](params); }
    privatePostV1StakingUnstake(params) { return this['privatePostV1StakingUnstake'](params); }
    privatePostV1StakingStake(params) { return this['privatePostV1StakingStake'](params); }
    privatePostV1StakingRewards(params) { return this['privatePostV1StakingRewards'](params); }
    privatePostV1StakingHistory(params) { return this['privatePostV1StakingHistory'](params); }
    privatePostV1OrderNew(params) { return this['privatePostV1OrderNew'](params); }
    privatePostV1OrderCancel(params) { return this['privatePostV1OrderCancel'](params); }
    privatePostV1WrapSymbol(params) { return this['privatePostV1WrapSymbol'](params); }
    privatePostV1OrderCancelSession(params) { return this['privatePostV1OrderCancelSession'](params); }
    privatePostV1OrderCancelAll(params) { return this['privatePostV1OrderCancelAll'](params); }
    privatePostV1OrderStatus(params) { return this['privatePostV1OrderStatus'](params); }
    privatePostV1Orders(params) { return this['privatePostV1Orders'](params); }
    privatePostV1Mytrades(params) { return this['privatePostV1Mytrades'](params); }
    privatePostV1Notionalvolume(params) { return this['privatePostV1Notionalvolume'](params); }
    privatePostV1Tradevolume(params) { return this['privatePostV1Tradevolume'](params); }
    privatePostV1ClearingNew(params) { return this['privatePostV1ClearingNew'](params); }
    privatePostV1ClearingStatus(params) { return this['privatePostV1ClearingStatus'](params); }
    privatePostV1ClearingCancel(params) { return this['privatePostV1ClearingCancel'](params); }
    privatePostV1ClearingConfirm(params) { return this['privatePostV1ClearingConfirm'](params); }
    privatePostV1Balances(params) { return this['privatePostV1Balances'](params); }
    privatePostV1BalancesStaking(params) { return this['privatePostV1BalancesStaking'](params); }
    privatePostV1NotionalbalancesCurrency(params) { return this['privatePostV1NotionalbalancesCurrency'](params); }
    privatePostV1Transfers(params) { return this['privatePostV1Transfers'](params); }
    privatePostV1AddressesNetwork(params) { return this['privatePostV1AddressesNetwork'](params); }
    privatePostV1DepositNetworkNewAddress(params) { return this['privatePostV1DepositNetworkNewAddress'](params); }
    privatePostV1DepositCurrencyNewAddress(params) { return this['privatePostV1DepositCurrencyNewAddress'](params); }
    privatePostV1WithdrawCurrency(params) { return this['privatePostV1WithdrawCurrency'](params); }
    privatePostV1AccountTransferCurrency(params) { return this['privatePostV1AccountTransferCurrency'](params); }
    privatePostV1PaymentsAddbank(params) { return this['privatePostV1PaymentsAddbank'](params); }
    privatePostV1PaymentsMethods(params) { return this['privatePostV1PaymentsMethods'](params); }
    privatePostV1PaymentsSenWithdraw(params) { return this['privatePostV1PaymentsSenWithdraw'](params); }
    privatePostV1BalancesEarn(params) { return this['privatePostV1BalancesEarn'](params); }
    privatePostV1EarnInterest(params) { return this['privatePostV1EarnInterest'](params); }
    privatePostV1EarnHistory(params) { return this['privatePostV1EarnHistory'](params); }
    privatePostV1ApprovedAddressesNetworkRequest(params) { return this['privatePostV1ApprovedAddressesNetworkRequest'](params); }
    privatePostV1ApprovedAddressesAccountNetwork(params) { return this['privatePostV1ApprovedAddressesAccountNetwork'](params); }
    privatePostV1ApprovedAddressesNetworkRemove(params) { return this['privatePostV1ApprovedAddressesNetworkRemove'](params); }
    privatePostV1Account(params) { return this['privatePostV1Account'](params); }
    privatePostV1AccountCreate(params) { return this['privatePostV1AccountCreate'](params); }
    privatePostV1AccountList(params) { return this['privatePostV1AccountList'](params); }
    privatePostV1Heartbeat(params) { return this['privatePostV1Heartbeat'](params); }
}

module.exports = Exchange;
