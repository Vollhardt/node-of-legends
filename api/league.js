/**
 * @module league v3
 * @desc Wrapper for Riot's league data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

 'use strict';
 
let serverdata = require('../services/serverdata');

/**
* gets all leagues for which the specified summoner is a member
* @param {number} summonerId id of the summoner to get league information for
* @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
* @static
*/
function getLeaguesBySummonerId(summonerId, region){
    if(summonerId){
      let options = {region: region, summonerId:summonerId};
        return serverdata.makeAsyncHttpsCall('league','bySummonerId', options);
    }else
        return Promise.reject(new Error('No summoner ID specified'));
}

/**
 * gets all positions in all leagues for which the specified summoner is a member
 * @param {number} summonerId id of the summoner to get position information for
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getPositionsBySummonerId(summonerId, region){
    if(summonerId){
        let options = {region: region, summonerId:summonerId};
        return serverdata.makeAsyncHttpsCall('league','positionsBySummonerId', options);
    }else
        return Promise.reject(new Error('No summoner ID specified'));
}


/**
 * gets all master league information for the specified region
 * @param {string} queueType Ranked Queue type (RANKED_SOLO_5x5, RANKED_FLEX_SR, RANKED_FLEX_TT)
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMasterLeagues(queueType, region){
    if(queueType){
        let options = {queue: queueType, region: region};
        return serverdata.makeAsyncHttpsCall('league','masterLeaguesByQueue', options);
    }else
        return Promise.reject(new Error('No queue type specified'));
}

/**
 * gets all challenger league information for the specified region
 * @param {string} queueType Ranked Queue type (RANKED_SOLO_5x5, RANKED_FLEX_SR, RANKED_FLEX_TT)
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getChallengerLeagues(queueType, region){
    if(queueType){
        let options = {queue: queueType, region: region};
        return serverdata.makeAsyncHttpsCall('league','challengerLeaguesByQueue', options);
    }else
        return Promise.reject(new Error('No queue type specified'));
}

module.exports.getLeaguesBySummonerId = getLeaguesBySummonerId;
module.exports.getPositionsBySummonerId = getPositionsBySummonerId;
module.exports.getMasterLeagues = getMasterLeagues;
module.exports.getChallengerLeagues = getChallengerLeagues;
