/**
 * @module currentgame
 * @desc Wrapper for Riot's current game api
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
function getCurrentGameUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("currentgame", callmethod, options, id);
}

/**
 * gets list of champions with their current flags set
 * @param {number} summonerId id of the summoner or summoners to get spectator information for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getSpectatorGameInfo(summonerId, region){
    if(summonerId){
        var options = {region: region};

        return serverdata.makeAsyncHttpsCall(getCurrentGameUrl("spectator", options, summonerId));
    }else
        return Promise.reject(new Error('No summoner ID specified.'));
}

module.exports.getSpectatorGameInfo = getSpectatorGameInfo;
