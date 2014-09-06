/**
 * @module static
 * @desc Wrapper for Riot's static data api <br/>
 * **NOTE**: calls to this API will **NOT** count towards your rate limit <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */
var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

/**
 * gets the URL for the match api for the specified method
 * @param {string} callmethod method to generate URL for
 * @param {object?}  options options to pass to the riot server
 * @param {number?} id optional ID to pass
 * @returns {string} generated url
 * @private
 */
var getStaticUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("static",callmethod, options, id);//.replace('api_key', 'tacos');
};

/**
 * gets a list of champions
 * @param {module:constants.CHAMPION_DATA_TO_RETRIVE|module:constants.CHAMPION_DATA_TO_RETRIVE[]}dataType
 * @param {boolean} byId=false if true, keys will be champ ids and not champ names
 * @param {string} locale local code to use for returned data
 * @param {string} version data version
 * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getChampionList = function(dataType, byId, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.champData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    var url = getStaticUrl("championList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * Gets all data for all champions
 * @param {number?} [id=null] ID of champion to get (null or do not supply for all champs)
 * @param {lolAPICallback} callback function to call after request is complete
 */
var getAllChampData = function(id, callback){
    if(utils.isFunction(id)) {
        callback = id;
        id = null;
    }
    if(id)
        getChampionById(id,'all', false, null, null, null, callback);
    else
        getChampionList('all', false, null, null, null, callback);
};

/**
 * gets a champion specific information from a specified champion's id
 * @param {number} champId ID of the champion to retrieve data for
 * @param {?module:constants.ITEM_DATA_TO_RETRIEVE|module:constants.ITEM_DATA_TO_RETRIEVE[]} dataType
 * @param {boolean?} byId=false if true, keys will be champ ids and not champ names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getChampionById = function(champId, dataType, byId, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.champData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    var url = getStaticUrl("championById", options, champId);

    if(null != champId)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * gets a full list of items
 * @param {?module:constants.ITEM_DATA_TO_RETRIEVE|module:constants.ITEM_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getItemList = function(dataType, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.itemListData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("itemList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets item specific information from a specified item's id
 * @param {number} id the item's ID which to retrieve
 * @param {?module:constants.ITEM_DATA_TO_RETRIEVE|module:constants.ITEM_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getItemById = function(id, dataType, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.itemListData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("itemById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * Gets all data for all items
 * @param {number?} [id=null] ID of item to get (null or do not supply for all items)
 * @param {lolAPICallback} callback function to call after request is complete
 */
var getAllItemData = function(id, callback){
    if(utils.isFunction(id)) {
        callback = id;
        id = null;
    }
    if(id)
        getItemById(id,'all', false, null, null, null, callback);
    else
        getItemList('all', false, null, null, null, callback);
};

/**
 * gets a list of all the masteries available
 * @param {?module:constants.MASTERY_DATA_TO_RETRIEVE|module:constants.MASTERY_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getMasteryList = function(dataType, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.masteryListData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("masteryList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a specific mastery object pertaining to the supplied id
 * @param {number} id ID of mastery to get data for
 * @param {?module:constants.MASTERY_DATA_TO_RETRIEVE|module:constants.MASTERY_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getMasteryById = function(id, dataType, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.masteryListData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("masteryById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * Gets all data for all masteries
 * @param {number?} [id=null] ID of item to get (null or do not supply for all masteries)
 * @param {lolAPICallback} callback function to call after request is complete
 */
var getAllMasteryData = function(id, callback){
    if(utils.isFunction(id)) {
        callback = id;
        id = null;
    }
    if(id)
        getMasteryById(id, 'all', null, null, null, callback);
    else
        getMasteryList('all', null, null, null, callback);
};

/**
 * gets a list of all available runes
 * @param {?module:constants.RUNE_DATA_TO_RETRIEVE|module:constants.RUNE_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getRuneList = function(dataType, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.runeListData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("runeList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a rune object from a supplied rune id
 * @param {number} id ID of the rune to retrieve
 * @param {?module:constants.RUNE_DATA_TO_RETRIEVE|module:constants.RUNE_DATA_TO_RETRIEVE[]} dataType
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getRuneById = function(id, dataType, locale, version, region,  callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.runeListData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;

    var url = getStaticUrl("runeById", options, id);
    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * Gets all data for all runes
 * @param {number?} [id=null] ID of item to get (null or do not supply for all runes)
 * @param {lolAPICallback} callback function to call after request is complete
 */
var getAllRuneData = function(id, callback){
    if(utils.isFunction(id)) {
        callback = id;
        id = null;
    }
    if(id)
        getRuneById(id, 'all', null, null, null, callback);
    else
        getRuneList('all', null, null, null, callback);
};

/**
 * gets all summoner spell objects
 * @param {?module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE|module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE[]} dataType
 * @param {boolean} byId=false if true, keys will be spell ids and not spell names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getSummonerSpellList = function(dataType, byId, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.champData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;

    var url = getStaticUrl("summonerSpellList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a summoner spell object from a supplied summoner spell id
 * @param {number} id
 * @param {?module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE|module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE[]} dataType
 * @param {boolean} byId=false if true, keys will be spell ids and not spell names
 * @param {string?} locale local code to use for returned data
 * @param {string?} version data version
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getSummonerSpellById = function(id, dataType, byId, locale, version, region, callback){
    var options = {};
    if(utils.isFunction(region))
        callback = region;
    else
        options.region = region;

    if(dataType) options.champData = utils.objOrArrayToCsv(dataType);
    if(locale) options.locale = locale;
    if(version) options.version = version;
    options.dataById = byId || false;
    var url = getStaticUrl("summonerSpellById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * Gets all data for all summoner spells
 * @param {number?} [id=null] ID of item to get (null or do not supply for all summoner spells)
 * @param {lolAPICallback} callback function to call after request is complete
 */
var getAllSummonerSpellData = function(id, callback){
    if(utils.isFunction(id)) {
        callback = id;
        id = null;
    }
    if(id)
        getSummonerSpellById(id, 'all', false, null, null, null, callback);
    else
        getSummonerSpellList('all', false, null, null, null, callback);
};

/**
 * gets data about a realm
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getRealmData = function(region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getStaticUrl("realm", options, null);
        serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets array of versions
 * @param {module:serverdata.REGION?} [region] if no region is specified the configured region will be used
 * @param {lolAPICallback} callback function to call after request is complete
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output}
 * @static
 */
var getVersions = function(region, callback){
    if(utils.isFunction(region))
        callback = region;
    else
        var options = {region: region};

    var url = getStaticUrl("versions", options, null);
        serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getChampionList = getChampionList;
exports.getAllChampData = getAllChampData;
exports.getChampionById = getChampionById;
exports.getItemList = getItemList;
exports.getAllItemData = getAllItemData;
exports.getItemById = getItemById;
exports.getMasteryList = getMasteryList;
exports.getAllMasteryData = getAllMasteryData;
exports.getMasteryById = getMasteryById;
exports.getRuneList = getRuneList;
exports.getAllRuneData = getAllRuneData;
exports.getRuneById = getRuneById;
exports.getSummonerSpellList = getSummonerSpellList;
exports.getAllSummonerSpellData = getAllSummonerSpellData;
exports.getSummonerSpellById = getSummonerSpellById;
exports.getRealmData = getRealmData;
exports.getVersions = getVersions;

