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
* @param {number|number[]} summonerId id of the summoner or summoners to get league information for
* @param {object?} [options] key/value options to pass to the riot api
* @param {tacoAPICallback} callback function to call after request is complete
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
* @static
*/
var getLeaguesBySummonerIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("bySummonerIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets all entries for which the specified summoner or summoners are members
 * @param {number|number[]} summonerId id of the summoner or summoners to get entry information for
 * @param {object?} [options] key/value options to pass to the riot api
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getEntryBySummonerIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("entryBySummonerIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};


/**
 * gets all team information for specified team or teams
 * @param {number|number[]} teamIds id(s) of the team or teams to get team information for
 * @param {object?} [options] key/value options to pass to the riot api
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getTeamsByTeamIds = function(teamIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("teamByTeamIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets all entry information for specified team or teams
 * @param {number|number[]} teamIds id(s) of the team or teams to get team information for
 * @param {object?} [options] key/value options to pass to the riot api
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getEntryByTeamIds = function(teamIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("entryByTeamIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets all challenger league information for the specified region
 * @param {REGION} region Region
 * @param {rankedQueueType} queueType Ranked Queue type
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getChallengerLeagues = function(region, queueType, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("challengerLeagues", options, null);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getLeaguesBySummonerIds = getLeaguesBySummonerIds;
exports.getEntryBySummonerIds = getEntryBySummonerIds;
exports.getTeamsByTeamIds = getTeamsByTeamIds;
exports.getEntryByTeamIds = getEntryByTeamIds;
exports.getChallengerLeagues = getChallengerLeagues;
