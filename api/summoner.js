var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

var getSummonerUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("summoner", callmethod, options, id);
};

var getSummonerByName = function(name, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getSummonerUrl("name", options, null);

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getSummonersByIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getSummonerUrl("byIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getMasteriesByIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getSummonerUrl("masteriesByIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getSummonerNamesByIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getSummonerUrl("namesByIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getRunesByIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getSummonerUrl("runesByIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getSumonerByName = getSummonerByName;
exports.getTeamsByTeamIds = getSummonersByIds;
exports.getMasteriesByIds = getMasteriesByIds;
exports.getSummonerNamesByIds = getSummonerNamesByIds;
exports.getRunesByIds = getRunesByIds;