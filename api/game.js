/**
 * @module game
 * @desc Wrapper for Riot's game data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');
var log = require('log4node');
log.setLogLevel(process.env.LOG_LEVEL || 'error');

/**
 * gets the URL for the game api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number} id summoner ID to generate URL for
 * @returns {string} generated url
 * @private
 */
function getGameUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("game",callmethod,options, id);
}

/**
 * gets a match record for the specified match id
 * @param {number} summonerId id of the summoner to get game history for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getSummonerRecentGameHistoryById(summonerId, region){
    if(summonerId){
	    var options = {region: region};

		var url = getGameUrl("recentGames",options, summonerId);
		log.debug('\n\nsummonerId: ' + summonerId + '\n\n');
    	return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID specified.'));
}

module.exports.getSummonerRecentGameHistoryById = getSummonerRecentGameHistoryById;