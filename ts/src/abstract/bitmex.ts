// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

export default class Exchange extends _Exchange {
    publicGetAnnouncement (params?: {}): Promise<implicitReturnType> { return this['publicGetAnnouncement'] (params); }
    publicGetAnnouncementUrgent (params?: {}): Promise<implicitReturnType> { return this['publicGetAnnouncementUrgent'] (params); }
    publicGetFunding (params?: {}): Promise<implicitReturnType> { return this['publicGetFunding'] (params); }
    publicGetInstrument (params?: {}): Promise<implicitReturnType> { return this['publicGetInstrument'] (params); }
    publicGetInstrumentActive (params?: {}): Promise<implicitReturnType> { return this['publicGetInstrumentActive'] (params); }
    publicGetInstrumentActiveAndIndices (params?: {}): Promise<implicitReturnType> { return this['publicGetInstrumentActiveAndIndices'] (params); }
    publicGetInstrumentActiveIntervals (params?: {}): Promise<implicitReturnType> { return this['publicGetInstrumentActiveIntervals'] (params); }
    publicGetInstrumentCompositeIndex (params?: {}): Promise<implicitReturnType> { return this['publicGetInstrumentCompositeIndex'] (params); }
    publicGetInstrumentIndices (params?: {}): Promise<implicitReturnType> { return this['publicGetInstrumentIndices'] (params); }
    publicGetInsurance (params?: {}): Promise<implicitReturnType> { return this['publicGetInsurance'] (params); }
    publicGetLeaderboard (params?: {}): Promise<implicitReturnType> { return this['publicGetLeaderboard'] (params); }
    publicGetLiquidation (params?: {}): Promise<implicitReturnType> { return this['publicGetLiquidation'] (params); }
    publicGetOrderBook (params?: {}): Promise<implicitReturnType> { return this['publicGetOrderBook'] (params); }
    publicGetOrderBookL2 (params?: {}): Promise<implicitReturnType> { return this['publicGetOrderBookL2'] (params); }
    publicGetQuote (params?: {}): Promise<implicitReturnType> { return this['publicGetQuote'] (params); }
    publicGetQuoteBucketed (params?: {}): Promise<implicitReturnType> { return this['publicGetQuoteBucketed'] (params); }
    publicGetSchema (params?: {}): Promise<implicitReturnType> { return this['publicGetSchema'] (params); }
    publicGetSchemaWebsocketHelp (params?: {}): Promise<implicitReturnType> { return this['publicGetSchemaWebsocketHelp'] (params); }
    publicGetSettlement (params?: {}): Promise<implicitReturnType> { return this['publicGetSettlement'] (params); }
    publicGetStats (params?: {}): Promise<implicitReturnType> { return this['publicGetStats'] (params); }
    publicGetStatsHistory (params?: {}): Promise<implicitReturnType> { return this['publicGetStatsHistory'] (params); }
    publicGetTrade (params?: {}): Promise<implicitReturnType> { return this['publicGetTrade'] (params); }
    publicGetTradeBucketed (params?: {}): Promise<implicitReturnType> { return this['publicGetTradeBucketed'] (params); }
    publicGetWalletAssets (params?: {}): Promise<implicitReturnType> { return this['publicGetWalletAssets'] (params); }
    publicGetWalletNetworks (params?: {}): Promise<implicitReturnType> { return this['publicGetWalletNetworks'] (params); }
    privateGetApiKey (params?: {}): Promise<implicitReturnType> { return this['privateGetApiKey'] (params); }
    privateGetChat (params?: {}): Promise<implicitReturnType> { return this['privateGetChat'] (params); }
    privateGetChatChannels (params?: {}): Promise<implicitReturnType> { return this['privateGetChatChannels'] (params); }
    privateGetChatConnected (params?: {}): Promise<implicitReturnType> { return this['privateGetChatConnected'] (params); }
    privateGetExecution (params?: {}): Promise<implicitReturnType> { return this['privateGetExecution'] (params); }
    privateGetExecutionTradeHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetExecutionTradeHistory'] (params); }
    privateGetNotification (params?: {}): Promise<implicitReturnType> { return this['privateGetNotification'] (params); }
    privateGetOrder (params?: {}): Promise<implicitReturnType> { return this['privateGetOrder'] (params); }
    privateGetPosition (params?: {}): Promise<implicitReturnType> { return this['privateGetPosition'] (params); }
    privateGetUser (params?: {}): Promise<implicitReturnType> { return this['privateGetUser'] (params); }
    privateGetUserAffiliateStatus (params?: {}): Promise<implicitReturnType> { return this['privateGetUserAffiliateStatus'] (params); }
    privateGetUserCheckReferralCode (params?: {}): Promise<implicitReturnType> { return this['privateGetUserCheckReferralCode'] (params); }
    privateGetUserCommission (params?: {}): Promise<implicitReturnType> { return this['privateGetUserCommission'] (params); }
    privateGetUserDepositAddress (params?: {}): Promise<implicitReturnType> { return this['privateGetUserDepositAddress'] (params); }
    privateGetUserExecutionHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetUserExecutionHistory'] (params); }
    privateGetUserMargin (params?: {}): Promise<implicitReturnType> { return this['privateGetUserMargin'] (params); }
    privateGetUserMinWithdrawalFee (params?: {}): Promise<implicitReturnType> { return this['privateGetUserMinWithdrawalFee'] (params); }
    privateGetUserWallet (params?: {}): Promise<implicitReturnType> { return this['privateGetUserWallet'] (params); }
    privateGetUserWalletHistory (params?: {}): Promise<implicitReturnType> { return this['privateGetUserWalletHistory'] (params); }
    privateGetUserWalletSummary (params?: {}): Promise<implicitReturnType> { return this['privateGetUserWalletSummary'] (params); }
    privateGetWalletAssets (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletAssets'] (params); }
    privateGetWalletNetworks (params?: {}): Promise<implicitReturnType> { return this['privateGetWalletNetworks'] (params); }
    privateGetUserEvent (params?: {}): Promise<implicitReturnType> { return this['privateGetUserEvent'] (params); }
    privatePostApiKey (params?: {}): Promise<implicitReturnType> { return this['privatePostApiKey'] (params); }
    privatePostApiKeyDisable (params?: {}): Promise<implicitReturnType> { return this['privatePostApiKeyDisable'] (params); }
    privatePostApiKeyEnable (params?: {}): Promise<implicitReturnType> { return this['privatePostApiKeyEnable'] (params); }
    privatePostChat (params?: {}): Promise<implicitReturnType> { return this['privatePostChat'] (params); }
    privatePostOrder (params?: {}): Promise<implicitReturnType> { return this['privatePostOrder'] (params); }
    privatePostOrderBulk (params?: {}): Promise<implicitReturnType> { return this['privatePostOrderBulk'] (params); }
    privatePostOrderCancelAllAfter (params?: {}): Promise<implicitReturnType> { return this['privatePostOrderCancelAllAfter'] (params); }
    privatePostOrderClosePosition (params?: {}): Promise<implicitReturnType> { return this['privatePostOrderClosePosition'] (params); }
    privatePostPositionIsolate (params?: {}): Promise<implicitReturnType> { return this['privatePostPositionIsolate'] (params); }
    privatePostPositionLeverage (params?: {}): Promise<implicitReturnType> { return this['privatePostPositionLeverage'] (params); }
    privatePostPositionRiskLimit (params?: {}): Promise<implicitReturnType> { return this['privatePostPositionRiskLimit'] (params); }
    privatePostPositionTransferMargin (params?: {}): Promise<implicitReturnType> { return this['privatePostPositionTransferMargin'] (params); }
    privatePostUserCancelWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostUserCancelWithdrawal'] (params); }
    privatePostUserConfirmEmail (params?: {}): Promise<implicitReturnType> { return this['privatePostUserConfirmEmail'] (params); }
    privatePostUserConfirmEnableTFA (params?: {}): Promise<implicitReturnType> { return this['privatePostUserConfirmEnableTFA'] (params); }
    privatePostUserConfirmWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostUserConfirmWithdrawal'] (params); }
    privatePostUserDisableTFA (params?: {}): Promise<implicitReturnType> { return this['privatePostUserDisableTFA'] (params); }
    privatePostUserLogout (params?: {}): Promise<implicitReturnType> { return this['privatePostUserLogout'] (params); }
    privatePostUserLogoutAll (params?: {}): Promise<implicitReturnType> { return this['privatePostUserLogoutAll'] (params); }
    privatePostUserPreferences (params?: {}): Promise<implicitReturnType> { return this['privatePostUserPreferences'] (params); }
    privatePostUserRequestEnableTFA (params?: {}): Promise<implicitReturnType> { return this['privatePostUserRequestEnableTFA'] (params); }
    privatePostUserRequestWithdrawal (params?: {}): Promise<implicitReturnType> { return this['privatePostUserRequestWithdrawal'] (params); }
    privatePutOrder (params?: {}): Promise<implicitReturnType> { return this['privatePutOrder'] (params); }
    privatePutOrderBulk (params?: {}): Promise<implicitReturnType> { return this['privatePutOrderBulk'] (params); }
    privatePutUser (params?: {}): Promise<implicitReturnType> { return this['privatePutUser'] (params); }
    privateDeleteApiKey (params?: {}): Promise<implicitReturnType> { return this['privateDeleteApiKey'] (params); }
    privateDeleteOrder (params?: {}): Promise<implicitReturnType> { return this['privateDeleteOrder'] (params); }
    privateDeleteOrderAll (params?: {}): Promise<implicitReturnType> { return this['privateDeleteOrderAll'] (params); }
}