var utils = require('../services/utils.js');

var config = {
    region: "NA",
    apikey: ""
};

var setConfig = function(config){
    utils.extend(this.config, config);
    return this.config;
};

exports.setLolTacoConfig = setConfig;
exports.region = config.region;
exports.apikey = config.apikey;