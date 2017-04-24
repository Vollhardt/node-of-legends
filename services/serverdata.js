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
const HOST_BY_REGION= {
  BR: "https://br1.api.riotgames.com",
  EUNE: "https://eun1.api.riotgames.com",
  EUW: "https://euw1.api.riotgames.com",
  JP: "https://jp1.api.riotgames.com",
  KR: "https://kr.api.riotgames.com",
  LAN: "https://la1.api.riotgames.com",
  LAS: "https://la2.api.riotgames.com",
  NA: "https://na1.api.riotgames.com",
  OCE: "https://oc1.api.riotgames.com",
  PBE: "https://pbe1.api.riotgames.com",
  TR: "https://tr1.api.riotgames.com",
  RU: "https://ru.api.riotgames.com",
  GLOBAL: "https://global.api.riotgames.com"
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
  /**Japan*/
  JAPAN: "jp",
  /**Korea*/
  KOREA: "kr",
  /**Latin America North*/
  LATIN_AMERICA_NORTH: "lan",
  /**Latin America South*/
  LATIN_AMERICA_SOUTH: "las",
  /**North America (DEFAULT)*/
  NORTH_AMERICA: "na",
  /**Oceania*/
  OCEANIA: "oce",
  /**Public Beta Environment*/
  PBE: "pbe",
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
        championList: '/lol/platform/v3/champions',
        championById: '/lol/platform/v3/champions/{id}'
    },
    /** champion mastery api */
    championmasteryv3:{
        masteryById: '/lol/champion-mastery/v3/champion-masteries/by-summoner/{id}',
        masteryByIdByChampionId: '/lol/champion-mastery/v3/champion-masteries/by-summoner/{id}/by-champion/{championId}',
        scoreById: '/lol/champion-mastery/v3/scores/by-summoner/{id}'
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
        masterLeagues: '/api/lol/{region}/v2.5/league/master',
        challengerLeagues: '/api/lol/{region}/v2.5/league/challenger'
    },
  /** masteries v3 api*/
    masteries: {
        masteriesById: '/lol/platform/v3/masteries/by-summoner/{id}'
    },
    /** match api*/
    match: {
        byId: '/api/lol/{region}/v2.2/match/{id}'
    },
    /** match list api */
    matchlist: {
        bySummonerId: '/api/lol/{region}/v2.2/matchlist/by-summoner/{id}'
    },
    /** runes api*/
    runes: {
      bySummonerId: '/lol/platform/v3/runes/by-summoner/{id}'
    },
    /** spectator api*/
    spectator: {
      bySummonerId:'/lol/spectator/v3/active-games/by-summoner/{id}',
      featuredGames: '/lol/spectator/v3/featured-games'
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
    /** static v3 api */
    staticdatav3: {
        championList: '/lol/static-data/v3/champions',
        championById: '/lol/static-data/v3/champions/{id}',
        itemList: '/lol/static-data/v3/items',
        itemById: '/lol/static-data/v3/items/{id}',
        languages: '/lol/static-data/v3/languages',
        languagestrings: '/lol/static-data/v3/language-strings',
        maps: '/lol/static-data/v3/maps',
        masteryList: '/lol/static-data/v3/masteries',
        masteryById: '/lol/static-data/v3/masteries/{id}',
        profileIcons: '/lol/static-data/v3/profile-icons',
        realm: '/lol/static-data/v3/realms',
        runeList: '/lol/static-data/v3/runes',
        runeById: '/lol/static-data/v3/runes/{id}',
        summonerSpellList: '/lol/static-data/v3/summoner-spells',
        summonerSpellById: '/lol/static-data/v3/summoner-spells/{id}',
        versions: '/lol/static-data/v3/versions'
    },
    /** statistics api */
    stats: {
        ranked: '/api/lol/{region}/v1.3/stats/by-summoner/{id}/ranked',
        summary: '/api/lol/{region}/v1.3/stats/by-summoner/{id}/summary'
    },
    /** status api */
    status: {
        list:'/lol/status/v1/shards',
        status: '/lol/status/v1/shard'
    },
    /** status v3 api */
    statusv3:{
        status: '/lol/status/v3/shard-data'
    },
    /** summoner api */
    summoner: {
        name: '/api/lol/{region}/v1.4/summoner/by-name/{id}',
        byIds: '/api/lol/{region}/v1.4/summoner/{id}', //can supply list of ids
        namesByIds: '/api/lol/{region}/v1.4/summoner/{id}/name', //can supply list of ids
    },
    /** summoner v3 api */
    summonerv3: {
        name: '/lol/summoner/v3/summoners/by-name/{id}',
        byId: '/lol/summoner/v3/summoners/{id}', //can supply list of ids
        byAccountId: '/lol/summoner/v3/summoners/by-account/{id}', //can supply list of ids
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
    log.debug('\ncalltype: ' + calltype + '\ncallmethod: ' + callmethod + '\noptions: ' + JSON.stringify(options) + '\nid: ' + (id?id:'null') + '\nregion: ' + region + '\napikey: ' + apikey);

    //check for required parameters
    if(region && calltype && callmethod && apikey && 0 < region.length && 0 < calltype.length && 0 < callmethod.length && 0 < apikey.length){
        //make sure id is present if necessary
        if(-1 == callmethod.indexOf("ById") || id){
            //verify nec. variables are defined
            if(HOST_BY_REGION[region] && URLS[calltype] && URLS[calltype][callmethod]){
                let host = HOST_BY_REGION['staticdata' === calltype ? 'GLOBAL' : region];
                // featureg games cannot be called on the new 'NA1' urls
              if('featuredgame'==calltype || 'league'==calltype || 'status'==calltype || 'currentgame' == calltype){
                host = host.replace(/1|2/,'');
              }
                url = host + URLS[calltype][callmethod].replace("{region}",region.toLowerCase()).replace("{id}", (id?id:'')) + "?api_key=" + apikey;
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
    return makeCallToApi(url, https);
}

/**
 * returns a Promise to perform asynchronous http call to the specified URL.  
 * @param (string) url url to call
 * @static
 */
function makeAsyncHttpCall(url){
    return makeCallToApi(url, http);
}

/**
 * returns a Promise to perform the call to the url using the specified module (http/https)
 * @param (string) url url to call
 * @param (object) module http/https module
 * @static
 */
function makeCallToApi(url, module){
    return new Promise(function(resolve,reject){
        
        module.get(url, function(res){
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
                    );
            }
        }).on('error', function(error){
            log.error(error);
            reject(new Error('error making API call: ' + error));//TODO: check if JSON
        });
    });
}

module.exports.generateAPIUrl = generateUrl;
module.exports.makeAsyncHttpsCall = makeAsyncHttpsCall;
module.exports.makeAsyncHttpCall = makeAsyncHttpCall;
module.exports.REGION = REGION;
module.exports.setConfig = setConfig;
module.exports.configuredRegion = config.region;