var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

var getMatchHistoryUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("matchhistory", callmethod, options, id);
};

var getMatchHistoryBySummonerId = function(summonerId, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getMatchHistoryUrl("bySummonerId", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getRankedStatsBySummonerId = getMatchHistoryBySummonerId;
