var serverdata = require('../services/serverdata.js');
var utils = require('../services/utils.js');

function getChampionFlagUrl(callmethod, options, id){
    return serverdata.generateAPIUrl("championFlags", callmethod, options, id);
}

var getChampionFlagList = function(options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championList", options, null), callback);
};

var getChampionFlagById = function(id, options, callback){
    if(utils.isFunction(options)){
        callback = options;
        options = null;
    }

    serverdata.makeAsyncHttpsCall(getChampionFlagUrl("championById",options,id), callback);
};

exports.getChampionFlagList = getChampionFlagList;
exports.getChampionListById = getChampionFlagById;
