/**
 * @module championflags
 * @desc @desc Wrapper for Riot's champion data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 */

var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the champion api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?} options key/value options to pass to the riot api
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getChampionFlagUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("championFlags", callmethod, options, id);
}

/**
 * gets list of champions with their current flags set
 * @param {object?} [options] options to pass to the riot server
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 */
var getChampionFlagList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championList", options, null), callback);
};
/**
 * gets a specific champion's flags
 * @param {number} id
 * @param {object?} [options] options to pass to the riot server
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
 */
var getChampionFlagById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championById",options,id), callback);
};

exports.getChampionFlagList = getChampionFlagList;
exports.getChampionListById = getChampionFlagById;
