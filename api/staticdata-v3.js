/**
 * @module staticdatav3
 * @desc Wrapper for Riot's static data v3 api <br/>
 * **NOTE**: calls to this API will **NOT** count towards your rate limit <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

"use strict";

var serverdata = require('../services/serverdata');
var log = require('log4node');
log.setLogLevel(process.env.LOG_LEVEL || 'error');

/**
 * gets the URL for the static api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
function getStaticUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("staticdatav3",callmethod, options, id);//.replace('api_key', 'tacos');
}

/**
 * gets a list of champions
 * @param {?module:constants.CHAMPION_DATA_TO_RETRIVE|module:constants.CHAMPION_DATA_TO_RETRIVE[]}dataType
 * @param {boolean?} byId=false if true, keys will be champ ids and not champ names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getChampionList(dataType, byId, locale, version, region){
    var options = {region: region};

    if(dataType) options.champData = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    var url = getStaticUrl("championList", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * Gets all data for all champions
 * @param {number?} [id=null] ID of champion to get (null or do not supply for all champs)
 */
function getAllChampData(id){
    if(id)
        return getChampionById(id,'all', false, null, null, null);
    else
        return getChampionList('all', false, null, null, null);
}

/**
 * gets a champion specific information from a specified champion's id
 * @param {number} champId ID of the champion to retrieve data for
 * @param {?module:constants.ITEM_DATA_TO_RETRIEVE|module:constants.ITEM_DATA_TO_RETRIEVE[]} dataType
 * @param {boolean?} byId=false if true, keys will be champ ids and not champ names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getChampionById(champId, dataType, byId, locale, version, region){
    log.debug('getChampionById: ' + champId);
    if(champId){
        var options = {region: region};

        if(dataType) options.champData = [].concat(dataType).join(',');
        if(locale) options.locale = locale;
        if(version) options.version = version;
        options.dataById = byId || false;

        var url = getStaticUrl("championById", options, champId);
        return serverdata.makeAsyncHttpsCall(url);
    }
    else
        return Promise.reject(new Error('No champion ID specified'));
}

/**
 * gets a full list of items
 * @param {?module:constants.ITEM_DATA_TO_RETRIEVE|module:constants.ITEM_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getItemList(dataType, locale, version, region){
    var options = {region: region};

    if(dataType) options.itemListData = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("itemList", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets item specific information from a specified item's id
 * @param {number} id the item's ID which to retrieve
 * @param {?module:constants.ITEM_DATA_TO_RETRIEVE|module:constants.ITEM_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getItemById(id, dataType, locale, version, region){
    if(id){
        var options = {region: region};

        if(dataType) options.itemListData = [].concat(dataType).join(',');
        if(locale) options.locale = locale;
        if(version) options.version = version;

        var url = getStaticUrl("itemById", options, id);
    
        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No item ID specified'));
}

/**
 * Gets all data for all items
 * @param {number?} [id=null] ID of item to get (null or do not supply for all items)
 */
function getAllItemData(id){
    if(id)
        return getItemById(id,'all', false, null, null, null);
    else
        return getItemList('all', false, null, null, null);
}

/**
 * gets a list of all the masteries available
 * @param {?module:constants.MASTERY_DATA_TO_RETRIEVE|module:constants.MASTERY_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getMasteryList(dataType, locale, version, region){
    var options = {region: region};

    if(dataType) options.masteryListData = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("masteryList", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets a specific mastery object pertaining to the supplied id
 * @param {number} id ID of mastery to get data for
 * @param {?module:constants.MASTERY_DATA_TO_RETRIEVE|module:constants.MASTERY_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getMasteryById(id, dataType, locale, version, region){
    if(id){
        var options = {region: region};

        if(dataType) options.masteryListData = [].concat(dataType).join(',');
        if(locale) options.locale = locale;
        if(version) options.version = version;

        var url = getStaticUrl("masteryById", options, id);
    
        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No mastery ID specified'));
}

/**
 * Gets all data for all masteries
 * @param {number?} [id=null] ID of item to get (null or do not supply for all masteries)
 */
function getAllMasteryData(id){
    if(id)
        return getMasteryById(id, 'all', null, null, null);
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
    var options = {region: region};

    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("profileIcons", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets a list of all available runes
 * @param {?module:constants.RUNE_DATA_TO_RETRIEVE|module:constants.RUNE_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getRuneList(dataType, locale, version, region){
    var options = {region: region};

    if(dataType) options.runeListData = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("runeList", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets a rune object from a supplied rune id
 * @param {number} id ID of the rune to retrieve
 * @param {?module:constants.RUNE_DATA_TO_RETRIEVE|module:constants.RUNE_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getRuneById(id, dataType, locale, version, region){
    if(id){
        var options = {region: region};

        if(dataType) options.runeListData = [].concat(dataType).join(',');
        if(locale) options.locale = locale;
        if(version) options.version = version;

        var url = getStaticUrl("runeById", options, id);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No rune ID specified'));
}

/**
 * Gets all data for all runes
 * @param {number?} [id=null] ID of item to get (null or do not supply for all runes)
 */
function getAllRuneData(id){
    if(id)
        return getRuneById(id, 'all', null, null, null);
    else
        return getRuneList('all', null, null, null);
}

/**
 * gets all summoner spell objects
 * @param {?module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE|module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE[]} dataType
 * @param {boolean} byId=false if true, keys will be spell ids and not spell names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getSummonerSpellList(dataType, byId, locale, version, region){
    var options = {region: region};

    if(dataType) options.champData = [].concat(dataType).join(',');
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    var url = getStaticUrl("summonerSpellList", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets a summoner spell object from a supplied summoner spell id
 * @param {number} id
 * @param {?module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE|module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE[]} dataType
 * @param {boolean} byId=false if true, keys will be spell ids and not spell names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getSummonerSpellById(id, dataType, byId, locale, version, region){
    if(id){
        var options = {region: region};

        if(dataType) options.champData = [].concat(dataType).join(',');
        if(locale) options.locale = locale;
        if(version) options.version = version;
        options.dataById = byId || false;
        var url = getStaticUrl("summonerSpellById", options, id);

        return serverdata.makeAsyncHttpsCall(url);
    }else
        return Promise.reject(new Error('No spell ID specified'));
}

/**
 * Gets all data for all summoner spells
 * @param {number?} [id=null] ID of item to get (null or do not supply for all summoner spells)
 */
function getAllSummonerSpellData(id){
    if(id)
        return getSummonerSpellById(id, 'all', false, null, null, null);
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
    var options = {region: region};

    var url = getStaticUrl("realm", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets array of versions
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getVersions(region){
    var options = {region: region};
    var url = getStaticUrl("versions", options, null);
    return serverdata.makeAsyncHttpsCall(url);
}

/**
 * gets array of languages(locales) supported in region
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
function getLanguages(region){
    var options = {region: region};
    var url = getStaticUrl("languages", options, null);
    return serverdata.makeAsyncHttpsCall(url);
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
    var options = {region: region};
    if(locale) options.locale=locale;
    if(version) options.version=version;
    var url = getStaticUrl("languagestrings", options, null);
    return serverdata.makeAsyncHttpsCall(url);
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
    var options = {region: region};
    if(locale) options.locale=locale;
    if(version) options.version=version;
    var url = getStaticUrl("maps", options, null);
    return serverdata.makeAsyncHttpsCall(url);
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
