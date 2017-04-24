/**
 * @module status
 * @deprecated
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
    return serverdata.generateAPIUrl("status", callmethod, options);
}

/**
 * gets list of shards
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getShardList(){
    var url = getStatusUrl("list", null);

    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets status of shards for region specified
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getShardStatus(region){
    var options = {region: region};
    var url = getStatusUrl("status", options);

    return serverdata.makeAsyncHttpsCall(url);
}

module.exports.getShardList = getShardList;
module.exports.getShardStatus = getShardStatus;
