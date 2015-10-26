/**
 * @desc contains server data for the riot servers
 * @module serverdata
 */

"use strict";

var https = require('https');
var http = require('http');
var _assign = require('lodash.assign');
var log = require('log4node');
log.setLogLevel(process.env.LOG_LEVEL || 'error');

var config = {
    region: "NA",
    apikey: null
};

function setConfig(update){
    _assign(config, update);
    log.debug('configuring: ' + JSON.stringify(config));
    return config;
};

/**
 * hosts by region code
 * @enum
 * @readonly
 * @static
 */
const HOST_BY_REGION = {
	BR: "https://br.api.pvp.net",
	EUNE: "https://eune.api.pvp.net",
	EUW: "https://euw.api.pvp.net",
	KR: "https://kr.api.pvp.net",
	LAS: "https://las.api.pvp.net",
	LAN: "https://lan.api.pvp.net",
	NA: "https://na.api.pvp.net",
	OCE: "https://oce.api.pvp.net",
	TR: "https://tr.api.pvp.net",
	RU: "https://ru.api.pvp.net",
	GLOBAL: "https://global.api.pvp.net",
    STATUS: "http://status.leagueoflegends.com"
};

/**
 * Region codes
 * @readonly
 * @enum
 * @static
 */
const REGION = {
    /** Brazil*/
    BRAZIL: "br",
	/**EU North and East **/
    EU_NORTH_EAST: "eune",
	/**EU West*/
    EU_WEST: "euw",
    /**Korea*/
	KOREA: "kr",
    /**Latin America South*/
	LATIN_AMERICA_SOUTH: "las",
    /**Latin America North*/
    LATIN_AMERICA_NORTH: "lan",
    /**North America (DEFAULT)*/
	NORTH_AMERICA: "na",
    /**Oceania*/
	OCEANIA: "oce",
    /**Turkey*/
	TURKEY: "tr",
    /**Russia*/
	RUSSIA: "ru"
};

/**
 * URLS for the riot API
 * @enum
 * @static
 * @readonly
 */
const URLS = {
    /** champion api */
    champion: {
        championList: '/api/lol/{region}/v1.2/champion',
        championById: '/api/lol/{region}/v1.2/champion/{id}'
    },
    /** current game api */
    currentgame: {
        spectator: '/observer-mode/rest/consumer/getSpectatorGameInfo/{region}/{id}'
    },
    featuredgame: {
        featured: '/observer-mode/rest/featured'
    },
    /** game api */
    game: {
        recentGames: '/api/lol/{region}/v1.3/game/by-summoner/{id}/recent'
    },
    /** league api */
    league: {
        bySummonerIds: '/api/lol/{region}/v2.5/league/by-summoner/{id}',
        entryBySummonerIds: '/api/lol/{region}/v2.5/league/by-summoner/{id}/entry',
        teamByTeamIds: '/api/lol/{region}/v2.5/league/by-team/{id}',
        entryByTeamIds: '/api/lol/{region}/v2.5/league/by-team/{id}/entry',
        masterLeagues: '/api/lol/{region}/v2.5/league/master',
        challengerLeagues: '/api/lol/{region}/v2.5/league/challenger'
    },
    /** match api*/
    match: {
        byId: '/api/lol/{region}/v2.2/match/{id}'
    },
    /** match list api */
    matchlist: {
        bySummonerId: '/api/lol/{region}/v2.2/matchlist/by-summoner/{id}'
    },
    /** static api */
    staticdata: {
        championList: '/api/lol/static-data/{region}/v1.2/champion',
        championById: '/api/lol/static-data/{region}/v1.2/champion/{id}',
        itemList: '/api/lol/static-data/{region}/v1.2/item',
        itemById: '/api/lol/static-data/{region}/v1.2/item/{id}',
        languages: '/api/lol/static-data/{region}/v1.2/languages',
        languagestrings: '/api/lol/static-data/{region}/v1.2/language-strings',
        maps: '/api/lol/static-data/{region}/v1.2/map',
        masteryList: '/api/lol/static-data/{region}/v1.2/mastery',
        masteryById: '/api/lol/static-data/{region}/v1.2/mastery/{id}',
        realm: '/api/lol/static-data/{region}/v1.2/realm',
        runeList: '/api/lol/static-data/{region}/v1.2/rune',
        runeById: '/api/lol/static-data/{region}/v1.2/rune/{id}',
        summonerSpellList: '/api/lol/static-data/{region}/v1.2/summoner-spell',
        summonerSpellById: '/api/lol/static-data/{region}/v1.2/summoner-spell/{id}',
        versions: '/api/lol/static-data/{region}/v1.2/versions'
    },
    /** statistics api */
    stats: {
        ranked: '/api/lol/{region}/v1.3/stats/by-summoner/{id}/ranked',
        summary: '/api/lol/{region}/v1.3/stats/by-summoner/{id}/summary'
    },
    /** status api */
    status: {
        list:'/shards',
        status: '/shards/{region}'
    },
    /** summoner api */
    summoner: {
        name: '/api/lol/{region}/v1.4/summoner/by-name/{id}',
        byIds: '/api/lol/{region}/v1.4/summoner/{id}', //can supply list of ids
        masteriesByIds: '/api/lol/{region}/v1.4/summoner/{id}/masteries', //can supply list of ids
        namesByIds: '/api/lol/{region}/v1.4/summoner/{id}/name', //can supply list of ids
        runesByIds: '/api/lol/{region}/v1.4/summoner/{id}/runes' //can supply list of ids
    },
    /** ranked team api */
    team: {
        bySummonerIds: '/api/lol/{region}/v2.4/team/by-summoner/{id}',
        byTeamIds: '/api/lol/{region}/v2.4/team/{teamIds}'
    }
};

/**
 * Generates a URL based on paramters passed in
 * @param {string} calltype the type of call to make
 * @param {string} callmethod the method to call
 * @param {options!} options to encode in the url
 * @param {number} [id] the id to use
 * @returns {string} url representing the call specified
 * @static
 */
function generateUrl(calltype, callmethod, options, id){
    var url = null;
    
    //set region
    var region = (options && options.region ? options.region : config.region).toUpperCase();
    
    //remove region so we do not encode extra params in the URL
    if(options) delete options['region'];
    
    var apikey = config.apikey;
    log.debug('\ncalltype: ' + calltype + '\ncallmethod: ' + callmethod + '\noptions: ' + JSON.stringify(options) + '\nid: ' + id + '\nregion: ' + region + '\napikey: ' + apikey);

    //check for required parameters
    if(region && calltype && callmethod && apikey && 0 < region.length && 0 < calltype.length && 0 < callmethod.length && 0 < apikey.length){
        //make sure id is present if necessary
        if(-1 == callmethod.indexOf("ById") || id){
            //verify nec. variables are defined
            if(HOST_BY_REGION[region] && URLS[calltype] && URLS[calltype][callmethod]){
                let host = HOST_BY_REGION['staticdata' === calltype ? 'GLOBAL' : ('status'===calltype ? 'STATUS' : region)];
                url = host + URLS[calltype][callmethod].replace("{region}",region.toLowerCase()).replace("{id}", id) + "?api_key=" + apikey;
            }
        }
    }

    //add options to the URL
    if(url && options && 0 < Object.keys(options).length){
        for(var key in options){
            url += "\&" + key + "=" + (Array.isArray(options[key]) ? options[key].join(",") : options[key]);
        }
    }
    
    log.debug('final url: ' + JSON.stringify(url));
    return url;
};

/**
 * returns a Promise to perform asynchronous https call to the specified URL.  
 * @param (string) url url to call
 * @static
 */
function makeAsyncHttpsCall(url){
    return new Promise(function(resolve,reject){
        
        https.get(url, function(res){
            log.debug('in get callback for: ' + url + '\nres: ' + res.statusCode + ' | ' + res.statusMessage);
            if(200 !== res.statusCode){
                reject(new Error(res.statusMessage));
            }else{
                var body = '';
                res
                    .on('data', function(chunk){
                        body += chunk;
                        }
                    )
                    .on('end', function(){
                        log.debug('body data: ' + body);
                            resolve(JSON.parse(body));
                        }
                    )
                ;
            }
        }).on('error', function(error){
            log.error(error);
            reject(new Error('error making API call: ' + error));//TODO: check if JSON
        });
    });
}

/**
 * returns a Promise to perform asynchronous http call to the specified URL.  
 * @param (string) url url to call
 * @static
 */
function makeAsyncHttpCall(url){
    return new Promise(function(resolve,reject){
        
        http.get(url, function(res){
            log.debug('in get callback for: ' + url + '\nres: ' + res.statusCode + ' | ' + res.statusMessage);
            if(200 !== res.statusCode){
                reject(new Error(res.statusMessage));
            }else{
                var body = '';
                res
                    .on('data', function(chunk){
                        body += chunk;
                        }
                    )
                    .on('end', function(){
                        log.debug('body data: ' + body);
                            resolve(JSON.parse(body));
                        }
                    )
                ;
            }
        }).on('error', function(error){
            log.error(error);
            reject(new Error('error making API call: ' + error));//TODO: check if JSON
        });
    });
}

/**
 * returns a rejected promise creating an error with the messsage specified
 * @param (string) url url to call
 * @static
 */
function rejectPromise(errorMessage){
    return new Promise(function(resolve, reject){
        reject(new Error(errorMessage));
    });
}

module.exports.generateAPIUrl = generateUrl;
module.exports.makeAsyncHttpsCall = makeAsyncHttpsCall;
module.exports.makeAsyncHttpCall = makeAsyncHttpCall;
module.exports.rejectPromise = rejectPromise;
module.exports.REGION = REGION;
module.exports.setConfig = setConfig;