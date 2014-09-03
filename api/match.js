/**
 * @module match
 * @desc Wrapper for Riot's match api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the match api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getMatchUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("match", callmethod, options, id);
};

/**
 * gets a match record for the specified match id
 * @param {number} id id to get match record for
 * @param {object?} [options] key/value options to pass to the riot api
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getMatchById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getMatchUrl("byId", options, id);

    serverdata.makeAsyncHttpsCall(url, callback);
};


/**
 * gets a match record for the specified match id with timeline information
 * @param {number} id id of the match to get
 * @param {object?} [options] key/value options to pass to the riot api
 * @param {tacoAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 * @static
 */
var getMatchWithTimelineById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = {};
    }

    options.includeTimeline = true;

    getMatchById(id, options, callback);
};

exports.getRankedStatsBySummonerId = getMatchById;
exports.getMatchWithTimelineById = getMatchWithTimelineById;
