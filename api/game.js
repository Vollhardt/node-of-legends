var utils = require('../services/utils.js');
var serverdata = require('../services/serverdata.js');

var getGameUrl = function(callmethod, options){
    return serverdata.generateAPIUrl("game",callmethod,options);
};

var getSummonerRecentGameHistoryById = function(summonerId, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getGameUrl("recentGames",options);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getSummonerRecentGameHistoryById = getSummonerRecentGameHistoryById;