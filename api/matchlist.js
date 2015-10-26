/**
 * @module matchlist
 * @desc Wrapper for Riot's match list api
 * @see {@link https://developer.riotgames.com/api/methods#!/1033|See Riot API for method output}
 */

'use strict';
 
var serverdata = require('../services/serverdata');

/**
 * gets the URL for the matchlist api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object} options key/value options to pass to the riot api
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getMatchListUrl(callmethod, options, id){
    return serverdata.generateAPIUrl('matchlist', callmethod, options, id);
};

/**
 * gets match list for the specified summoner id
 * @param {number} summonerId
 * @param {?number|number[]} championIds ID(s) of champions to get games for, null for all.
 * @param {?module:constants.RANKED_QUEUE_TYPE|module:constants.RANKED_QUEUE_TYPE[]} rankedQueues one or more Ranked Queue Types to search, pass null to get all.
 * @param {?number} beginTime The begin time to use for fetching games specified as epoch milliseconds. If the endTime parameter is specified on its own, beginTime is assumed to be the start of the summoner's match history.
 * @param {?number} endTime The end time to use for fetching games specified as epoch milliseconds. If the beginTime parameter is specified on its own, endTime is assumed to be the current time.
 * @param {?number} beginIndex index at which to start pulling matches.
 * @param {?number} endIndex index to stop pulling matched.
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used **(Riot does not allow non-ranked match history to be retrieved)**
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMatchListBySummonerId(summonerId, championIds, rankedQueues, beginTime, endTime, beginIndex, endIndex, region){
    if(summonerId){
        var options = {region: region};

        if(championIds) options.championIds = [].concat(championIds).join(',');
        if(rankedQueues) options.rankedQueues = rankedQueues;
        if(beginIndex && 0 <= beginIndex) options.beginIndex = beginIndex;
        if(endIndex && 0 <= endIndex) options.endIndex = endIndex;
        if(beginTime && 0 <= beginTime) options.beginTime = beginTime;
        if(endTime && 0 <= endTime) options.endTime = endTime;

        var url = getMatchListUrl('bySummonerId', options, summonerId);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return serverdata.rejectPromise('No summoner ID specified');
};

module.exports.getMatchListBySummonerId = getMatchListBySummonerId;
