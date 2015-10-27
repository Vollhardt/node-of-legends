/**
 * @module team
 * @desc Wrapper for Riot's team data api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the team api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getTeamUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("team", callmethod, options, id);
}

/**
 * gets ranked teams to which the summoner belongs
 * @param {number|number[]}summonerIds summoner ID or IDs to get ranked teams for **MAX 10**
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getTeamsBySummonerIds(summonerIds, region){
    if(summonerIds){
        var options = {region: region};
        var url = getTeamUrl("name", options, [].concat(summonerIds).slice(0,10).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID(s) specified'));
}

/**
 * gets a list of teams from the supplied team ID or IDs
 * @param {number|number[]}teamIds team ID or IDs to get ranked teams for **MAX 10**
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getTeamsByTeamIds(teamIds, region){
    if(teamIds){
        var options = {region: region};
        var url = getTeamUrl("name", options, [].concat(teamIds).slice(0,10).join(','));

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No team ID(s) specified'));
}

module.exports.getTeamsBySummonerIds = getTeamsBySummonerIds;
module.exports.getTeamsByTeamIds = getTeamsByTeamIds;
