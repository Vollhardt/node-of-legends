/**
 * @module match
 * @desc Wrapper for Riot's match api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the match api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getMatchUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("match", callmethod, options, id);
};

/**
 * gets a match record for the specified match ID
 * @param {number} matchId matchId to get match record for
 * @param {?boolean} [getTimeline=false] if true will return timeline information for this match.
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getMatchById = function(matchId, getTimeline, callback){
    if(utils.isFunction(getTimeline)){
        callback = getTimeline;
        getTimeline = null;
    }

    var options = {includeTimeline: getTimeline || false};

    var url = getMatchUrl("byId", options, matchId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getRankedStatsBySummonerId = getMatchById;
