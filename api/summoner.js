/**
 * @module summoner
 * @desc Wrapper for Riot's summoner v3 data api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';
 
let serverdata = require('../services/serverdata');

/**
 * gets summoner information by summoner name
 * @param {string} summonerName name of the summoner to get league information for
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getSummonerByName(summonerName, region){
    if(summonerName){
        let options = {region: region,summonerName:summonerName.replace(/\s/,'')};
        return serverdata.makeAsyncHttpsCall('summoner','name', options);
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
        let options = {region: region,summonerId:summonerId};

        return serverdata.makeAsyncHttpsCall('summoner','byId', options);
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
        let options = {region: region,accountId:accountId};

        return serverdata.makeAsyncHttpsCall('summoner','byAccountId', options);
    }else
        return Promise.reject(new Error('No account ID specified'));
}

module.exports.getSummonerByName = getSummonerByName;
module.exports.getSummonerById = getSummonerById;
module.exports.getSummonerByAccountIds = getSummonerByAccountIds;