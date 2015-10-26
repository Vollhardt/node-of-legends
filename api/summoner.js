/**
 * @module summoner
 * @desc Wrapper for Riot's summoner data api <br/>
 * **NOTE**: calls to this API will **NOT** count towards your rate limit <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

 'use strict';
 
var serverdata = require('../services/serverdata');


/**
 * gets the URL for the summoner api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getSummonerUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("summoner", callmethod, options, id);
}

/**
 * gets summoner information by summoner name
 * @param {string|string[]} summonerNames name/names of the summoner/summoners to get league information for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getSummonerByName(summonerNames, region){
    if(summonerNames){
        var options = {region: region};

        var url = getSummonerUrl("name", options, [].concat(summonerNames).slice(0,40).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return serverdata.rejectPromise('No summoner name(s) specified');
}

/**
 * gets summoner information by summoner id
 * @param {number|number[]} summonerIds ids of the summoner or summoners to get league information for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getSummonersByIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};
        var url = getSummonerUrl("byIds", options, [].concat(summonerIds).slice(0,40).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return serverdata.rejectPromise('No summoner ID(s) specified');
}

/**
 * gets summoner mastery information by summoner id
 * @param {number|number[]} summonerIds ids of the summoner or summoners to get league information for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMasteriesByIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};
        var url = getSummonerUrl("masteriesByIds", options, [].concat(summonerIds).slice(0,40).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return serverdata.rejectPromise('No summoner ID(s) specified');
}

/**
* gets summoner names by summoner id
* @param {number|number[]} summonerIds ids of the summoner or summoners to get names for, **MAXIMUM 40**
* @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
* @static
*/
function getSummonerNamesByIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};
        var url = getSummonerUrl("namesByIds", options, [].concat(summonerIds).slice(0,40).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return serverdata.rejectPromise('No summoner ID(s) specified');
}

/**
 * gets summoner rune information by summoner id
 * @param {number|number[]} summonerIds ids of the summoner or summoners to get names for, **MAXIMUM 40**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getRunesByIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};
        var url = getSummonerUrl("runesByIds", options, [].concat(summonerIds).slice(0,40).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return serverdata.rejectPromise('No summoner ID(s) specified');
}

module.exports.getSummonerByName = getSummonerByName;
module.exports.getSummonersByIds = getSummonersByIds;
module.exports.getMasteriesByIds = getMasteriesByIds;
module.exports.getSummonerNamesByIds = getSummonerNamesByIds;
module.exports.getRunesByIds = getRunesByIds;