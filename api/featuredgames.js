/**
 * @module featuredgames
 * @desc Wrapper for Riot's featured game data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the game api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @returns {string} generated url
 * @private
 */
function getFeaturedGameUrl(callmethod, options){
    return serverdata.generateAPIUrl('featuredgame',callmethod,options);
}

/**
 * gets a match record for the specified match id
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getFeaturedGames(region){
	    var options = {region: region};

		var url = getFeaturedGameUrl('featured',options);
    	return serverdata.makeAsyncHttpsCall(url);
}

module.exports.getFeaturedGames = getFeaturedGames;