/**
 * @module league
 * @desc Wrapper for Riot's league data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

 'use strict';
 
var serverdata = require('../services/serverdata');

/**
 * gets the URL for the league api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getLeagueUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("league", callmethod, options, id);
}

/**
* gets all leagues for which the specified summoner or summoners are members
* @param {number|number[]} summonerIds ids of the summoner or summoners to get league information for, **MAXIMUM 10**
* @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
* @static
*/
function getLeaguesBySummonerIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};

        var url = getLeagueUrl("bySummonerIds", options, [].concat(summonerIds).slice(0,10).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID(s) specified'));
}

/**
 * gets all entries for which the specified summoner or summoners are members
 * @param {number|number[]} summonerIds id of the summoner or summoners to get entry information for, **MAXIMUM 10**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getEntryBySummonerIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};
        var url = getLeagueUrl("entryBySummonerIds", options, [].concat(summonerIds).slice(0,10).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID(s) specified'));
}


/**
 * gets all master league information for the specified region
 * @param {module:constants.RANKED_QUEUE_TYPE} queueType Ranked Queue type
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMasterLeagues(queueType, region){
    if(queueType){
        var options = {type: queueType, region: region};

        var url = getLeagueUrl('masterLeagues', options, null);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No queue type specified'));
}

/**
 * gets all challenger league information for the specified region
 * @param {module:constants.RANKED_QUEUE_TYPE} queueType Ranked Queue type
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getChallengerLeagues(queueType, region){
    if(queueType){
        var options = {type: queueType, region: region};

        var url = getLeagueUrl("challengerLeagues", options, null);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No queue type specified'));
}

module.exports.getLeaguesBySummonerIds = getLeaguesBySummonerIds;
module.exports.getEntryBySummonerIds = getEntryBySummonerIds;
module.exports.getMasterLeagues = getMasterLeagues;
module.exports.getChallengerLeagues = getChallengerLeagues;
