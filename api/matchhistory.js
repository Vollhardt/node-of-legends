/**
 * @module matchhistory
 * @desc Wrapper for Riot's matchhistory api
 * @see {@link https://developer.riotgames.com/api/methods#!/819|See Riot API for method output}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the matchhistory api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object} options key/value options to pass to the riot api
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getMatchHistoryUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("matchhistory", callmethod, options, id);
};

/**
 * gets match history for the specified summoner id
 * @param {number} summonerId
 * @param {?module:constants.RANKED_QUEUE_TYPE|module:constants.RANKED_QUEUE_TYPE[]} rankedQueues one or more Ranked Queue Types to search, pass null to get all
 * @param {?number} beginIndex index at which to start pulling matches. **max** games which can be queried at once is **15**.  If range is larger than max end index will be changed.
 * @param {?number} endIndex index to stop pulling matched. **max** games which can be queried at once is **15**.  If range is larger than max end index will be changed. If end is not specified it will be generated as begin+15
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used **(Riot does not allow non-ranked match history to be retrieved)**
 * @param {lolAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getMatchHistoryBySummonerId = function(summonerId, rankedQueues, beginIndex, endIndex, region, callback){
    if(utils.isFunction(region))
        callback = region;

    var options = {};

    if(rankedQueues) options.rankedQueues = rankedQueues;
    if(beginIndex && 0 <= beginIndex) options.beginIndex = beginIndex;
    if(endIndex && 0 <= endIndex) options.endIndex = endIndex;
    if(region) options.region = region;

    var url = getMatchHistoryUrl("bySummonerId", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getRankedStatsBySummonerId = getMatchHistoryBySummonerId;
