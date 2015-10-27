/**
 * @module stats
 * @desc Wrapper for Riot's game data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

 'use strict';
 
var serverdata = require('../services/serverdata');

/**
 * gets the URL for the stats api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?} options options to pass to the riot server
 * @param {number?} [id=null] optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getStatsUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("stats", callmethod, options, id);
}
/**
 * gets a summoner's full ranked statistics for a season
 * @param {number} summonerId the summoner id
 * @param {module:constants.STATS_SEASON?} season the season to gets stats for. **DEFAULT: current season**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getRankedStatsBySummonerId(summonerId, season, region){
    if(summonerId){
        var options = {region: region};
        
        if(season) options.season = season;

        var url = getStatsUrl("ranked", options, summonerId);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID specified'));
}

/**
 * Gets a summary of the summoner's stats for a ranked season
 * @param {number} summonerId the summoner id
 * @param {module:constants.STATS_SEASON?} season the season to gets stats for. **DEFAULT: current season**
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getStatSummaryBySummonerId(summonerId, season, region){
    if(summonerId){
        var options = {region: region};
        
        if(season) options.season = season;

        var url = getStatsUrl("summary", options, summonerId);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No summoner ID specified'));
}

module.exports.getStatSummaryBySummonerId = getStatSummaryBySummonerId;
module.exports.getRankedStatsBySummonerId = getRankedStatsBySummonerId;
