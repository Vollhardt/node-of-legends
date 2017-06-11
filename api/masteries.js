/**
 * @module masteries
 * @desc Wrapper for Riot's masteries v3 api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');

/**
 * gets a match record for the specified match ID
 * @param {number} summonerId summoner ID to get match record for
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMasteryById(summonerId){
  if(summonerId){
    return serverdata.makeAsyncHttpsCall('masteries','masteriesById', {summonerId:summonerId});
  }else
    return Promise.reject(new Error('No summoner ID specified'));
}

module.exports.getMasteryById = getMasteryById;
