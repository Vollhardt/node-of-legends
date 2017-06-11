/**
 * @module status
 * @desc Wrapper for Riot's status api <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');

/**
 * gets status of shards for region specified
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getStatus(){
    return serverdata.makeAsyncHttpsCall('status', 'status',  {});
}

module.exports.getStatus = getStatus;
