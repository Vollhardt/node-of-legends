/**
 * @module championflags
 * @desc @desc Wrapper for Riot's champion data api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the champion api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object} options key/value options to pass to the riot api
 * @param {?number} [id] optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getChampionFlagUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("championFlags", callmethod, options, id);
}

/**
 * gets list of champions with their current flags set
 * @param {?boolean} [freeToPlay] true to only retrieve champions which are currently free to play.<br/>False retrieves all champions.**DEFAULT: FALSE**
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var getChampionFlagList = function(freeToPlay, region, callback){
    var options = {freeToPlay: (utils.isBoolean(freeToPlay) ? freeToPlay : false)};
    if(utils.isFunction(freeToPlay))
        callback = freeToPlay;
    else if(utils.isFunction(region)) {
        callback = region;
        options.region = freeToPlay;
    }
    else
        options.region = region;

    serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championList", options, null), callback);
};
/**
 * gets a specific champion's flag state
 * @param {number} id
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var getChampionFlagById = function(id, region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championById",options,id), callback);
};

exports.getChampionFlagList = getChampionFlagList;
exports.getChampionListById = getChampionFlagById;
