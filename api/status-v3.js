/**
 * @module statusv3
 * @desc Wrapper for Riot's status api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the status api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @returns {string} generated url
 * @private
 */
function getStatusUrl(callmethod, options){
    return serverdata.generateAPIUrl("statusv3", callmethod, options);
}

/**
 * gets status of shards for region specified
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getStatus(){
    var url = getStatusUrl("status", {});

    return serverdata.makeAsyncHttpsCall(url);
}

module.exports.getStatus = getStatus;
