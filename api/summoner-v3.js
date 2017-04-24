/**
 * @module summonerv3
 * @desc Wrapper for Riot's summoner v3 data api <br/>
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
    return serverdata.generateAPIUrl("summonerv3", callmethod, options, id);
}

/**
 * gets summoner information by summoner name
 * @param {string} summonerName name of the summoner to get league information for
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getSummonerByName(summonerName, region){
    if(summonerName){
        var options = {region: region};

        var url = getSummonerUrl("name", options, summonerName);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner name specified'));
}

/**
 * gets summoner information by summoner id
 * @param {number} summonerId id of the summoner or summoners to get information for
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getSummonerById(summonerId, region){
    if(summonerId){
        var options = {region: region};
        var url = getSummonerUrl("byId", options, summonerId);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID specified'));
}

/**
* gets summoner by account id
* @param {number} accountId id of the account to get the summoner for
* @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
* @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
* @static
*/
function getSummonerByAccountIds(accountId, region){
    if(accountId){
        var options = {region: region};
        var url = getSummonerUrl("byAccountId", options, accountId);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No account ID specified'));
}

module.exports.getSummonerByName = getSummonerByName;
module.exports.getSummonerById = getSummonerById;
module.exports.getSummonerByAccountIds = getSummonerByAccountIds;