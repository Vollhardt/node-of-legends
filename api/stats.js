/**
 * @module stats
 * @desc @desc Wrapper for Riot's game data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the stats api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?} options options to pass to the riot server
 * @param {number?} [id=null] optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getStatsUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("stats", callmethod, options, id);
};
/**
 * gets a summoner's full ranked statistics for a season
 * @param {number} summonerId the summoner id
 * @param {module:constants.STATS_SEASON?} season the season to gets stats for. **DEFAULT: current season**
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getRankedStatsBySummonerId = function(summonerId, season, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(season)
        options.season = season;

    var url = getStatsUrl("ranked", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * Gets a summary of the summoner's stats for a ranked season
 * @param {number} summonerId the summoner id
 * @param {module:constants.STATS_SEASON?} season the season to gets stats for. **DEFAULT: current season**
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
var getStatSummaryBySummonerId = function(summonerId, season, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(season)
        options.season = season;

    var url = getStatsUrl("summary", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getStatSummaryBySummonerId = getStatSummaryBySummonerId;
exports.getRankedStatsBySummonerId = getRankedStatsBySummonerId;
