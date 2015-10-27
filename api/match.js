/**
 * @module match
 * @desc Wrapper for Riot's match api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the match api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getMatchUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("match", callmethod, options, id);
};

/**
 * gets a match record for the specified match ID
 * @param {number} matchId matchId to get match record for
 * @param {?boolean} [getTimeline=false] if true will return timeline information for this match.
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMatchById(matchId, getTimeline){
    if(matchId){
    	var options = {includeTimeline: getTimeline || false};

    	var url = getMatchUrl("byId", options, matchId);

    	return serverdata.makeAsyncHttpsCall(url);
	}else
		return Promise.reject(new Error('No match ID specified'));
};

module.exports.getMatchById = getMatchById;
