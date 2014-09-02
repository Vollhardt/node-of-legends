var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

var getStatsUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("stats", callmethod, options, id);
};

var getRankedStatsBySummonerId = function(summonerId, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStatsUrl("ranked", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getStatSummaryBySummonerId = function(summonerId, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getStatsUrl("summary", options, summonerId);

    serverdata.makeAsyncHttpsCall(url, callback);
};

exports.getStatSummaryBySummonerId = getStatSummaryBySummonerId;
exports.getRankedStatsBySummonerId = getRankedStatsBySummonerId;
