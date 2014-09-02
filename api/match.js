var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

var getMatchUrl = function(callmethod, options, id){
    return serverdata.generateAPIUrl("match", callmethod, options, id);
};

var getMatchById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    var url = getMatchUrl("byId", options, id);

    serverdata.makeAsyncHttpsCall(url, callback);
};

var getMatchWithTimelineById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = {};
    }

    options.includeTimeline = true;

    getMatchById(id, options, callback);
};

exports.getRankedStatsBySummonerId = getMatchById;
exports.getMatchWithTimelineById = getMatchWithTimelineById;
