/**
 * @module champion
 * @desc Wrapper for Riot's champion api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

"use strict";

var serverdata = require('../services/serverdata');
/**
 * gets the URL for the champion api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object} options key/value options to pass to the riot api
 * @param {?number} [id] optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getChampionFlagUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("champion", callmethod, options, id);
}

/**
 * gets list of champions with their current flags set
 * @param {?boolean} [freeToPlay] true to only retrieve champions which are currently free to play.<br/>False retrieves all champions.**DEFAULT: FALSE**
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getChampionList(freeToPlay, region){
    var options = {
        freeToPlay: (freeToPlay &&  'boolean'==typeof freeToPlay? freeToPlay : false),
        region: region
    };

    return serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championList", options, null));
}
/**
 * gets a specific champion's flag state
 * @param {number} id
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getChampionsById(id, region){
    var options = {region: region};

    if(id)
        return serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championById",options,id), callback);
    else
        return serverdata.rejectPromise("No champion ID specified");
}

module.exports.getChampionList = getChampionList;
module.exports.getChampionsById = getChampionsById;
