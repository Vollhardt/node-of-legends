/**
 * @module runes
 * @desc Wrapper for Riot's Runes api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the runes api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getRunesUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("runes", callmethod, options, id);
};

/**
 * gets list of rune pages for summoner ID specified
 * @param {number} summonerId ID of the summoner to get rune pages for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getRunesBySummonerId(summonerId, region){
    if(summonerId){
    	var url = getRunesUrl("bySummonerId", {region:region}, summonerId);
    	return serverdata.makeAsyncHttpsCall(url);
	}else
		return Promise.reject(new Error('No summoner ID specified'));
};

module.exports.getRunesBySummonerId = getRunesBySummonerId;
