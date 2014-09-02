var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');


var getStaticUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("static",callmethod, options, id);//.replace('api_key', 'tacos');
};

/**
 * gets list of champions
 * @param options options to pass to riot's API (optional)
 * @param callback callback funtion function(err,jsonData){...}
 */
var getChampionList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("championList", options, null);
serverdata.makeAsyncHttpsCall(url, callback);
};

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

var getItemList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("itemList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

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

var getMasteryList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("masteryList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

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

var getRuneList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }
    var url = getStaticUrl("runeList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

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

var getSummonerSpellList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("summonerSpellList", options, null);
    serverdata.makeAsyncHttpsCall(url, callback);
};

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

var getRealmData = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStaticUrl("realm", options, null);
        serverdata.makeAsyncHttpsCall(url, callback);
};

var getVersions = function(options, callback){
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
