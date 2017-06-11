/**
 * @module runes
 * @desc Wrapper for Riot's Runes api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');

/**
 * gets list of rune pages for summoner ID specified
 * @param {number} summonerId ID of the summoner to get rune pages for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getRunesBySummonerId(summonerId, region){
    if(summonerId){
    	return serverdata.makeAsyncHttpsCall('runes', 'bySummonerId', {region:region,summonerId:summonerId});
	}else
		return Promise.reject(new Error('No summoner ID specified'));
}

module.exports.getRunesBySummonerId = getRunesBySummonerId;
