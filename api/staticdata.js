/**
 * @module staticdata
 * @desc Wrapper for Riot's static data v3 api <br/>
 * **NOTE**: calls to this API will **NOT** count towards your rate limit <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');

/**
 * gets a list of champions
 * @param {?string|string[]}dataType
 * @param {boolean?} byId=false if true, keys will be champ ids and not champ names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getChampionList(dataType, byId, locale, version, region){
  let options = {region: region};

  if(dataType) options.tags = [].concat(dataType);
  if(locale) options.locale = locale;
  if(version) options.version = version;
  options.dataById = byId || false;

  return serverdata.makeAsyncHttpsCall('staticdata','championList', options);
}

/**
 * Gets all data for all champions
 * @param {number?} [championId=null] ID of champion to get (null or do not supply for all champs)
 */
function getAllChampData(championId){
  if(championId)
    return getChampionById(championId,'all', false, null, null, null);
  else
    return getChampionList('all', false, null, null, null);
}

/**
 * gets a champion specific information from a specified champion's id
 * @param {number} champId ID of the champion to retrieve data for
 * @param {?string|string[]} dataType
 * @param {boolean?} byId=false if true, keys will be champ ids and not champ names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getChampionById(champId, dataType, byId, locale, version, region){
  if(champId){
    let options = {region: region,championId:champId};

    if(dataType) options.tags = [].concat(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    return serverdata.makeAsyncHttpsCall('staticdata','championById', options);
  }
  else
    return Promise.reject(new Error('No champion ID specified'));
}

/**
 * gets a full list of items
 * @param {?string|string[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getItemList(dataType, locale, version, region){
  let options = {region: region};

  if(dataType) options.tags = [].concat(dataType);
  if(locale) options.locale = locale;
  if(version) options.version = version;

  return serverdata.makeAsyncHttpsCall('staticdata','itemList', options);
}

/**
 * gets item specific information from a specified item's id
 * @param {number} itemId the item's ID which to retrieve
 * @param {?string|string[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getItemById(itemId, dataType, locale, version, region){
  if(itemId){
    let options = {region: region,itemId:itemId};

    if(dataType) options.tags = [].concat(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    return serverdata.makeAsyncHttpsCall('staticdata','itemById', options);
  }else
    return Promise.reject(new Error('No item ID specified'));
}

/**
 * Gets all data for all items
 * @param {number?} [itemId=null] ID of item to get (null or do not supply for all items)
 */
function getAllItemData(itemId){
  if(itemId)
    return getItemById(itemId,'all', false, null, null, null);
  else
    return getItemList('all', false, null, null, null);
}

/**
 * gets a list of all the masteries available
 * @param {?string|string[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getMasteryList(dataType, locale, version, region){
  let options = {region: region};

  if(dataType) options.tags = [].concat(dataType).join(',');
  if(locale) options.locale = locale;
  if(version) options.version = version;

  return serverdata.makeAsyncHttpsCall('staticdata','masteryList', options);
}

/**
 * gets a specific mastery object pertaining to the supplied id
 * @param {number} masteryId ID of mastery to get data for
 * @param {?string|string[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getMasteryById(masteryId, dataType, locale, version, region){
  if(masteryId){
    let options = {region: region,masteryId:masteryId};

    if(dataType) options.tags = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;

    return serverdata.makeAsyncHttpsCall('staticdata','masteryById', options);
  }else
    return Promise.reject(new Error('No mastery ID specified'));
}

/**
 * Gets all data for all masteries
 * @param {number?} [masteryId=null] ID of item to get (null or do not supply for all masteries)
 */
function getAllMasteryData(masteryId){
  if(masteryId)
    return getMasteryById(masteryId, 'all', null, null, null);
  else
    return getMasteryList('all', null, null, null);
}

/**
 * gets a list of all profile icons
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getProfileIcons(locale, version, region){
  let options = {region: region};

  if(locale) options.locale = locale;
  if(version) options.version = version;

  return serverdata.makeAsyncHttpsCall('staticdata','profileIcons', options);
}

/**
 * gets a list of all available runes
 * @param {?string|string[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getRuneList(dataType, locale, version, region){
  let options = {region: region};

  if(dataType) options.tags = [].concat(dataType).join(',');
  if(locale) options.locale = locale;
  if(version) options.version = version;

  return serverdata.makeAsyncHttpsCall('staticdata','runeList', options);
}

/**
 * gets a rune object from a supplied rune id
 * @param {number} runeId ID of the rune to retrieve
 * @param {?string|string[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getRuneById(runeId, dataType, locale, version, region){
  if(runeId){
    let options = {region: region,runeId:runeId};

    if(dataType) options.tags = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;

    return serverdata.makeAsyncHttpsCall('staticdata','runeById', options);
  }else
    return Promise.reject(new Error('No rune ID specified'));
}

/**
 * Gets all data for all runes
 * @param {number?} [runeId=null] ID of item to get (null or do not supply for all runes)
 */
function getAllRuneData(runeId){
  if(runeId)
    return getRuneById(runeId, 'all', null, null, null);
  else
    return getRuneList('all', null, null, null);
}

/**
 * gets all summoner spell objects
 * @param {?string|string[]} dataType
 * @param {boolean} byId=false if true, keys will be spell ids and not spell names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getSummonerSpellList(dataType, byId, locale, version, region){
  let options = {region: region};

  if(dataType) options.tags = [].concat(dataType).join(',');
  if(locale) options.locale = locale;
  if(version) options.version = version;
  options.dataById = byId || false;

  return serverdata.makeAsyncHttpsCall('staticdata','summonerSpellList', options, null);
}

/**
 * gets a summoner spell object from a supplied summoner spell id
 * @param {number} summonerSpellId
 * @param {?string|string[]} dataType
 * @param {boolean} byId=false if true, keys will be spell ids and not spell names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getSummonerSpellById(summonerSpellId, dataType, byId, locale, version, region){
  if(summonerSpellId){
    let options = {region: region,summonerSpellId:summonerSpellId};

    if(dataType) options.tags = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    return serverdata.makeAsyncHttpsCall('staticdata','summonerSpellById', options);
  }else
    return Promise.reject(new Error('No spell ID specified'));
}

/**
 * Gets all data for all summoner spells
 * @param {number?} [summonerSpellId=null] ID of item to get (null or do not supply for all summoner spells)
 */
function getAllSummonerSpellData(summonerSpellId){
  if(summonerSpellId)
    return getSummonerSpellById(summonerSpellId, 'all', false, null, null, null);
  else
    return getSummonerSpellList('all', false, null, null, null);
}

/**
 * gets data about a realm
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getRealmData(region){
  return serverdata.makeAsyncHttpsCall('staticdata','realm', {region: region});
}

/**
 * gets array of versions
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getVersions(region){
  return serverdata.makeAsyncHttpsCall('staticdata','versions', {region: region});
}

/**
 * gets array of languages(locales) supported in region
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getLanguages(region){
  return serverdata.makeAsyncHttpsCall('staticdata','languages', {region: region});
}

/**
 * gets display strings for specified language(locale)
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getLanguageStrings(locale, version, region){
  let options = {region: region};
  if(locale) options.locale=locale;
  if(version) options.version=version;
  return serverdata.makeAsyncHttpsCall('staticdata','languagestrings', options);
}

/**
 * gets map information for specified language(locale)
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getMaps(locale, version, region){
  let options = {region: region};
  if(locale) options.locale=locale;
  if(version) options.version=version;
  return serverdata.makeAsyncHttpsCall('staticdata','maps', options);
}

module.exports.getChampionList = getChampionList;
module.exports.getAllChampData = getAllChampData;
module.exports.getChampionById = getChampionById;
module.exports.getItemList = getItemList;
module.exports.getAllItemData = getAllItemData;
module.exports.getItemById = getItemById;
module.exports.getLanguages = getLanguages;
module.exports.getLanguageStrings = getLanguageStrings;
module.exports.getMaps = getMaps;
module.exports.getMasteryList = getMasteryList;
module.exports.getAllMasteryData = getAllMasteryData;
module.exports.getMasteryById = getMasteryById;
module.exports.getProfileIcons = getProfileIcons;
module.exports.getRuneList = getRuneList;
module.exports.getAllRuneData = getAllRuneData;
module.exports.getRuneById = getRuneById;
module.exports.getSummonerSpellList = getSummonerSpellList;
module.exports.getAllSummonerSpellData = getAllSummonerSpellData;
module.exports.getSummonerSpellById = getSummonerSpellById;
module.exports.getRealmData = getRealmData;
module.exports.getVersions = getVersions;
