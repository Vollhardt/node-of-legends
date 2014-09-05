/**
 * @module team
 * @desc Wrapper for Riot's team data api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the team api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getTeamUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("team", callmethod, options, id);
};

/**
 * gets ranked teams to which the summoner belongs
 * @param {number|number[]}summonerIds summoner ID or IDs to get ranked teams for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var getTeamsBySummonerIds = function(summonerIds, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getTeamUrl("name", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a list of teams from the supplied team ID or IDs
 * @param {number|number[]}teamIds team ID or IDs to get ranked teams for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var getTeamsByTeamIds = function(teamIds, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getTeamUrl("byIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getSumonerByName = getTeamsBySummonerIds;
exports.getTeamsByTeamIds = getTeamsByTeamIds;
