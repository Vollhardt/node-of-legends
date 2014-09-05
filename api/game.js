/**
 * @module game
 * @desc @desc Wrapper for Riot's game data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var utils = require('../services/utils.js');
var serverdata = require('../services/serverdata.js');

/**
 * gets the URL for the game api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @returns {string} generated url
 * @private
 */
var getGameUrl = function(callmethod, options){
    return serverdata.generateAPIUrl("game",callmethod,options);
};

/**
 * gets a match record for the specified match id
 * @param {number} summonerId id of the summoner to get game history for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getSummonerRecentGameHistoryById = function(summonerId, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getGameUrl("recentGames",options);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getSummonerRecentGameHistoryById = getSummonerRecentGameHistoryById;