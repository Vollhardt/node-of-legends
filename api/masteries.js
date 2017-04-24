/**
 * @module masteries
 * @desc Wrapper for Riot's masteries v3 api
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

var serverdata = require('../services/serverdata');

/**
 * gets the URL for the mastery api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {?object}  options options to pass to the riot server
 * @param {?number} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getMasteryUrl(callmethod, options, id){
  return serverdata.generateAPIUrl("masteries", callmethod, options, id);
};

/**
 * gets a match record for the specified match ID
 * @param {number} summonerId summoner ID to get match record for
 * @param {?boolean} [getTimeline=false] if true will return timeline information for this match.
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMasteryById(summonerId){
  if(summonerId){
    var url = getMasteryUrl("masteriesById", {}, summonerId);

    return serverdata.makeAsyncHttpsCall(url);
  }else
    return Promise.reject(new Error('No summoner ID specified'));
};

module.exports.getMasteryById = getMasteryById;
