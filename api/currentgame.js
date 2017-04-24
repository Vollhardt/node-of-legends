/**
 * @module currentgame
 * @deprecated
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
function getCurrentGameUrl(callmethod, options, id) {
  return serverdata.generateAPIUrl("currentgame", callmethod, options, id);
}

/**
 * gets list of champions with their current flags set
 * @param {number} summonerId id of the summoner or summoners to get spectator information for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
function getSpectatorGameInfo(summonerId, region) {
  if (summonerId) {
    var options = {region: region};
    let url = getCurrentGameUrl("spectator", options, summonerId);
    region=region?region:serverdata.configuredRegion;
    //replace inline region code with new region code
    url = url.replace('/' + region.toLowerCase() + '/', '/' + ALTERNATE_REGION_CODE[region.toUpperCase()] + '/');

    return serverdata.makeAsyncHttpsCall(url);
  } else
    return Promise.reject(new Error('No summoner ID specified.'));
}

/**
 * Alternate Region codes only necessary for this API
 * @readonly
 * @enum
 * @static
 */
const ALTERNATE_REGION_CODE = {
  /** Brazil*/
  BR: "br1",
  /**EU North and East **/
  EUNE: "eun1",
  /**EU West*/
  EUW: "euw1",
  /**Japan*/
  JP: "jp1",
  /**Korea*/
  KR: "kr",
  /**Latin America North*/
  LAN: "la1",
  /**Latin America South*/
  LAS: "la2",
  /**North America (DEFAULT)*/
  NA: "na1",
  /**Oceania*/
  OCE: "oc1",
  /**Public Beta Environment*/
  PBE: "pbe1",
  /**Turkey*/
  TR: "tr1",
  /**Russia*/
  RU: "ru"
};

module.exports.getSpectatorGameInfo = getSpectatorGameInfo;
