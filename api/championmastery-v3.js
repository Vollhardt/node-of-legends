/**
 * @module championmasteryv3
 * @desc Wrapper for Riot's champion mastery v3 api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

"use strict";

var serverdata = require('../services/serverdata');
/**
 * gets the URL for the champion api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object} options key/value options to pass to the riot api
 * @param {?number} [id] optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getChampionMasteryUrl(callmethod, options, id){
  return serverdata.generateAPIUrl("championmasteryv3", callmethod, options, id);
}

/**
 * gets list of champions with their mastery level by summoner ID
 * @param {number} summonerId summoner ID to retrieve mastery list for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getChampionMasteryBySummonerId(summonerId, region){
  var options = {region: region};

  if(summonerId)
    return serverdata.makeAsyncHttpsCall(getChampionMasteryUrl("masteryById", options, summonerId));
  else
    return Promise.reject(new Error("No summoner ID specified"));
}

/**
 * gets a specific champion's mastery for a specified summoner
 * @param {number} summonerId ID of the summoner to retrieve the mastery for
 * @param {number} championId ID of the champion to retrieve the mastery for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getMasteryChampionsById(summonerId,championId, region){
  var options = {region: region};

  if(summonerId && championId) {
    let url = getChampionMasteryUrl("masteryByIdByChampionId", options, summonerId);
    url=url.replace('{championId}',championId);
    return serverdata.makeAsyncHttpsCall(url);
  }
  else
    return Promise.reject(new Error("No summoner or champion ID specified"));
}

/**
 * gets total mastery score for summoner
 * @param {number} summonerId summoner ID to retrieve mastery score for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getMasteryScoreForSummoner(summonerId, region){
  var options = {region: region};

  if(summonerId)
    return serverdata.makeAsyncHttpsCall(getChampionMasteryUrl("scoreById", options, summonerId));
  else
    return Promise.reject(new Error("No summoner ID specified"));
}

module.exports.getChampionMasteryBySummonerId = getChampionMasteryBySummonerId;
module.exports.getMasteryChampionsById = getMasteryChampionsById;
module.exports.getMasteryScoreForSummoner = getMasteryScoreForSummoner;
