/**
 * @module champion
 * @desc Wrapper for Riot's champion api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

const serverdata = require('../services/serverdata');

/**
 * gets list of champions with their current flags set
 * @param {?boolean} [freeToPlay] true to only retrieve champions which are currently free to play.<br/>False retrieves all champions.**DEFAULT: FALSE**
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getChampionList(freeToPlay, region){
    let options = {
        freeToPlay: (freeToPlay &&  'boolean'===typeof freeToPlay? freeToPlay : false),
        region: region
    };

    return serverdata.makeAsyncHttpsCall('champion','championList', options);
}

/**
 * gets a specific champion's flag state
 * @param {number} championId
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getChampionsById(championId, region){
    let options = {region: region,championId: championId};

    if(championId)
        return serverdata.makeAsyncHttpsCall('champion','championById',options);
    else
        return Promise.reject(new Error('No champion ID specified'));
}

module.exports.getChampionList = getChampionList;
module.exports.getChampionsById = getChampionsById;
