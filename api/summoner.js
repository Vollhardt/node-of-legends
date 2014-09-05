/**
 * @module summoner
 * @desc Wrapper for Riot's summoner data api <br/>
 * **NOTE**: calls to this API will **NOT** count towards your rate limit <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');


/**
 * gets the URL for the summoner api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getSummonerUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("summoner", callmethod, options, id);
};

/**
 * gets summoner information by summoner name
 * @param {string|string[]} summonerNames name/names of the summoner/summoners to get league information for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getSummonerByName = function(summonerNames, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getSummonerUrl("name", options, utils.objOrArrayToCsv(summonerNames, 40));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets summoner information by summoner id
 * @param {number|number[]} summonerIds ids of the summoner or summoners to get league information for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getSummonersByIds = function(summonerIds, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getSummonerUrl("byIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets summoner mastery information by summoner id
 * @param {number|number[]} summonerIds ids of the summoner or summoners to get league information for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getMasteriesByIds = function(summonerIds, region, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getSummonerUrl("masteriesByIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};
/**
* gets summoner names by summoner id
* @param {number|number[]} summonerIds ids of the summoner or summoners to get names for, **MAXIMUM 40**
* @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
* @param {tacoAPICallback} callback function to call after request is complete
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
* @static
*/
var getSummonerNamesByIds = function(summonerIds, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getSummonerUrl("namesByIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets summoner rune information by summoner id
 * @param {number|number[]} summonerIds ids of the summoner or summoners to get names for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getRunesByIds = function(summonerIds, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getSummonerUrl("runesByIds", region, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getSumonerByName = getSummonerByName;
exports.getTeamsByTeamIds = getSummonersByIds;
exports.getMasteriesByIds = getMasteriesByIds;
exports.getSummonerNamesByIds = getSummonerNamesByIds;
exports.getRunesByIds = getRunesByIds;