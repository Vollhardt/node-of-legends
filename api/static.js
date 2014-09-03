/**
 * @module static
 * @desc Wrapper for Riot's static data api <br/>
 * **NOTE**: calls to this API will **NOT** count towards your rate limit <br/>
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output and optional parameters}
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
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getChampionList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("championList", options, null);
serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a champion specific information from a specified champion's id
 * @param {number} id
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getChampionById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("championById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * gets a full list of items
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getItemList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("itemList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets item specific information from a specified item's id
 * @param {number} id
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getItemById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }
    var url = getStaticUrl("itemById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * gets a list of all the masteries available
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getMasteryList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("masteryList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a specific mastery object pertaining to the supplied id
 * @param {number} id
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getMasteryById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }
    var url = getStaticUrl("masteryById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * gets a list of all available runes
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getRuneList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }
    var url = getStaticUrl("runeList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a rune object from a supplied rune id
 * @param {number} id
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getRuneById = function(id, options,  callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("runeById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * gets all summoner spell objects
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getSummonerSpellList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("summonerSpellList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets a summoner spell object from a supplied summoner spell id
 * @param {number} id
 * @param {object?} [options]
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getSummonerSpellById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("summonerSpellById", options, id);

    if(null != id)
        serverdata.makeAsyncHttpsCall(url, callback);
    else
        callback({status_code: null, message: "no id specified"},null);
};

/**
 * gets data about current realm
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getRealmData = function(callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("realm", options, null);
        serverdata.makeAsyncHttpsCall(url, callback);
};

/**
 * gets array of versions
 * @param {tacoAPICallback} callback
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for output and optional parameters}
 * @static
 */
var getVersions = function(callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("versions", options, null);
        serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getChampionList = getChampionList;
exports.getChampionById = getChampionById;
exports.getItemList = getItemList;
exports.getItemById = getItemById;
exports.getMasteryList = getMasteryList;
exports.getMasteryById = getMasteryById;
exports.getRuneList = getRuneList;
exports.getRuneById = getRuneById;
exports.getSummonerSpellList = getSummonerSpellList;
exports.getSummonerSpellById = getSummonerSpellById;
exports.getRealmData = getRealmData;
exports.getVersions = getVersions;
