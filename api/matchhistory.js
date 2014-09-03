/**
 * @module matchhistory
 * @desc Wrapper for Riot's matchhistory api
 * <br/>https://developer.riotgames.com/api/methods#!/819
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the matchhistory api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?} options key/value options to pass to the riot api
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getMatchHistoryUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("matchhistory", callmethod, options, id);
};

/**
 * gets match history for the specified summoner id
 * @param {number} summonerId
 * @param {object?} [options] key/value options to pass to the riot api
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getMatchHistoryBySummonerId = function(summonerId, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getMatchHistoryUrl("bySummonerId", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getRankedStatsBySummonerId = getMatchHistoryBySummonerId;
