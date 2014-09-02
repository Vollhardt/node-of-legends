var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

var getLeagueUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("league", callmethod, options, id);
};

var getLeaguesBySummonerIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("bySummonerIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getEntryBySummonerIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("entryBySummonerIds", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getTeamsByTeamIds = function(teamIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("teamByTeamIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getEntryByTeamIds = function(teamIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("entryByTeamIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getChallengerLeagues = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getLeagueUrl("challengerLeagues", options, null);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getLeaguesBySummonerIds = getLeaguesBySummonerIds;
exports.getEntryBySummonerIds = getEntryBySummonerIds;
exports.getTeamsByTeamIds = getTeamsByTeamIds;
exports.getEntryByTeamIds = getEntryByTeamIds;
exports.getChallengerLeagues = getChallengerLeagues;
