/**
 * @module spectator
 * @desc Wrapper for Riot's spectator api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the spectator api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getSpectatorUrl(callmethod, options, id){
  return serverdata.generateAPIUrl("spectator", callmethod, options);
}

/**
 * gets game summoner is in
 * @param {number} summonerId ID of the summoner to get game information for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getActiveGameBySummonerId(summonerId, region){
  if(summonerId){
    var url = getSpectatorUrl("bySummonerId", {region: region}, summonerId);

    return serverdata.makeAsyncHttpsCall(url);
  }else
    return Promise.reject(new Error('No summoner ID specified'));
};


/**
 * gets featured games for a region
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getFeaturedGames(region){
  var options = {region: region};
  var url = getSpectatorUrl("featuredGames", options);

  return serverdata.makeAsyncHttpsCall(url);
}

module.exports.getActiveGameBySummonerId = getActiveGameBySummonerId;
module.exports.getFeaturedGames = getFeaturedGames;
