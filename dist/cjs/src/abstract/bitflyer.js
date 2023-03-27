'use strict';

var Exchange$1 = require('../base/Exchange.js');

// -------------------------------------------------------------------------------
class Exchange extends Exchange$1["default"] {
    publicGetGetmarketsUsa(params) { return this['publicGetGetmarketsUsa'](params); }
    publicGetGetmarketsEu(params) { return this['publicGetGetmarketsEu'](params); }
    publicGetGetmarkets(params) { return this['publicGetGetmarkets'](params); }
    publicGetGetboard(params) { return this['publicGetGetboard'](params); }
    publicGetGetticker(params) { return this['publicGetGetticker'](params); }
    publicGetGetexecutions(params) { return this['publicGetGetexecutions'](params); }
    publicGetGethealth(params) { return this['publicGetGethealth'](params); }
    publicGetGetboardstate(params) { return this['publicGetGetboardstate'](params); }
    publicGetGetchats(params) { return this['publicGetGetchats'](params); }
    privateGetGetpermissions(params) { return this['privateGetGetpermissions'](params); }
    privateGetGetbalance(params) { return this['privateGetGetbalance'](params); }
    privateGetGetbalancehistory(params) { return this['privateGetGetbalancehistory'](params); }
    privateGetGetcollateral(params) { return this['privateGetGetcollateral'](params); }
    privateGetGetcollateralhistory(params) { return this['privateGetGetcollateralhistory'](params); }
    privateGetGetcollateralaccounts(params) { return this['privateGetGetcollateralaccounts'](params); }
    privateGetGetaddresses(params) { return this['privateGetGetaddresses'](params); }
    privateGetGetcoinins(params) { return this['privateGetGetcoinins'](params); }
    privateGetGetcoinouts(params) { return this['privateGetGetcoinouts'](params); }
    privateGetGetbankaccounts(params) { return this['privateGetGetbankaccounts'](params); }
    privateGetGetdeposits(params) { return this['privateGetGetdeposits'](params); }
    privateGetGetwithdrawals(params) { return this['privateGetGetwithdrawals'](params); }
    privateGetGetchildorders(params) { return this['privateGetGetchildorders'](params); }
    privateGetGetparentorders(params) { return this['privateGetGetparentorders'](params); }
    privateGetGetparentorder(params) { return this['privateGetGetparentorder'](params); }
    privateGetGetexecutions(params) { return this['privateGetGetexecutions'](params); }
    privateGetGetpositions(params) { return this['privateGetGetpositions'](params); }
    privateGetGettradingcommission(params) { return this['privateGetGettradingcommission'](params); }
    privatePostSendcoin(params) { return this['privatePostSendcoin'](params); }
    privatePostWithdraw(params) { return this['privatePostWithdraw'](params); }
    privatePostSendchildorder(params) { return this['privatePostSendchildorder'](params); }
    privatePostCancelchildorder(params) { return this['privatePostCancelchildorder'](params); }
    privatePostSendparentorder(params) { return this['privatePostSendparentorder'](params); }
    privatePostCancelparentorder(params) { return this['privatePostCancelparentorder'](params); }
    privatePostCancelallchildorders(params) { return this['privatePostCancelallchildorders'](params); }
}

module.exports = Exchange;
