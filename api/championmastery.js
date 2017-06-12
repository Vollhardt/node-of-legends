/**
 * @module championmastery
 * @desc Wrapper for Riot's champion mastery v3 api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');

/**
 * gets list of champions with their mastery level by summoner ID
 * @param {number} summonerId summoner ID to retrieve mastery list for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getChampionMasteryBySummonerId(summonerId, region){
  let options = {region: region, summonerId: summonerId};

  if(summonerId)
    return serverdata.makeAsyncHttpsCall('championmastery','masteryById', options);
  else
    return Promise.reject(new Error('No summoner ID specified'));
}

/**
 * gets a specific champion's mastery for a specified summoner
 * @param {number} summonerId ID of the summoner to retrieve the mastery for
 * @param {number} championId ID of the champion to retrieve the mastery for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getMasteryChampionsById(summonerId,championId, region){
  if(summonerId && championId) {
    let options = {region: region,championId: championId,summonerId:summonerId};
    return serverdata.makeAsyncHttpsCall('championmastery','masteryByIdByChampionId', options);
  }
  else
    return Promise.reject(new Error('No summoner or champion ID specified'));
}

/**
 * gets total mastery score for summoner
 * @param {number} summonerId summoner ID to retrieve mastery score for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getMasteryScoreForSummoner(summonerId, region){
  let options = {region: region, summonerId:summonerId};

  if(summonerId)
    return serverdata.makeAsyncHttpsCall('championmastery','scoreById', options);
  else
    return Promise.reject(new Error('No summoner ID specified'));
}

module.exports.getChampionMasteryBySummonerId = getChampionMasteryBySummonerId;
module.exports.getMasteryChampionsById = getMasteryChampionsById;
module.exports.getMasteryScoreForSummoner = getMasteryScoreForSummoner;
