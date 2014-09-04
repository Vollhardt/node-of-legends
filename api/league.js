/**
 * @module league
 * @desc @desc Wrapper for Riot's league data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the league api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getLeagueUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("league", callmethod, options, id);
};

/**
* gets all leagues for which the specified summoner or summoners are members
* @param {number|number[]} summonerId ids of the summoner or summoners to get league information for, **MAXIMUM 10**
* @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
* @param {tacoAPICallback} callback function to call after request is complete
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
* @static
*/
var getLeaguesBySummonerIds = function(summonerIds, region, callback){
    if(utils.isFunction(region)){
        callback = region;
        region = null;
    }else
        var options = {region: region};

    var url = getLeagueUrl("bySummonerIds", options, utils.objOrArrayToCsv(summonerIds, 10));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets all entries for which the specified summoner or summoners are members
 * @param {number|number[]} summonerId id of the summoner or summoners to get entry information for, **MAXIMUM 10**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getEntryBySummonerIds = function(summonerIds, region, callback){
    if(utils.isFunction(region)){
        callback = region;
        region = null;
    }else
        var options = {region: region};
    var url = getLeagueUrl("entryBySummonerIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};


/**
 * gets all team information for specified team or teams
 * @param {number|number[]} teamIds id(s) of the team or teams to get team information for, **MAXIMUM 10**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getTeamsByTeamIds = function(teamIds, options, callback){
    if(utils.isFunction(region)){
        callback = region;
        region = null;
    }else
        var options = {region: region};

    var url = getLeagueUrl("teamByTeamIds", region, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets all entry information for specified team or teams
 * @param {number|number[]} teamIds id(s) of the team or teams to get team information for **MAXIMUM 10**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getEntryByTeamIds = function(teamIds, region, callback){
    if(utils.isFunction(region)){
        callback = region;
        region = null;
    }else
        var options = {region: region};

    var url = getLeagueUrl("entryByTeamIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets all challenger league information for the specified region
 * @param {module:constants.RANKED_QUEUE_TYPE} queueType Ranked Queue type
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getChallengerLeagues = function(queueType, region, callback){
    var options = {
        type: queueType
    }

    if(utils.isFunction(region)){
        callback = region;
        region = null;
    }
    else
        options.region = region;



    var url = getLeagueUrl("challengerLeagues", options, null);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getLeaguesBySummonerIds = getLeaguesBySummonerIds;
exports.getEntryBySummonerIds = getEntryBySummonerIds;
exports.getTeamsByTeamIds = getTeamsByTeamIds;
exports.getEntryByTeamIds = getEntryByTeamIds;
exports.getChallengerLeagues = getChallengerLeagues;
