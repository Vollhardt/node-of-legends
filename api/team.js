var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

var getTeamUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("team", callmethod, options, id);
};

var getTeamsBySummonerIds = function(summonerIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getTeamUrl("name", options, utils.objOrArrayToCsv(summonerIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getTeamsByTeamIds = function(teamIds, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getTeamUrl("byIds", options, utils.objOrArrayToCsv(teamIds));

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getSumonerByName = getTeamsBySummonerIds;
exports.getTeamsByTeamIds = getTeamsByTeamIds;
