/**
 * @module spectator
 * @desc Wrapper for Riot's spectator api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');

/**
 * gets game summoner is in
 * @param {number} summonerId ID of the summoner to get game information for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getActiveGameBySummonerId(summonerId, region){
  if(summonerId){
    return serverdata.makeAsyncHttpsCall('spectator','bySummonerId', {region: region,summonerId:summonerId});
  }else
    return Promise.reject(new Error('No summoner ID specified'));
}


/**
 * gets featured games for a region
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getFeaturedGames(region){
  return serverdata.makeAsyncHttpsCall('spectator','featuredGames', {region: region});
}

module.exports.getActiveGameBySummonerId = getActiveGameBySummonerId;
module.exports.getFeaturedGames = getFeaturedGames;
