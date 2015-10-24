/**
 * @desc contains server data for the riot servers
 * @module serverdata
 */
var https = require('https');
var _ = require('lodash');
var log = require('log4node');
log.setLogLevel(process.env.LOG_LEVEL || 'info');

var config = {
    region: "NA",
    apikey: null
};

function setConfig(update){
    _.assign(config, update);
log.info('config: ' + JSON.stringify(config));
    return config;
};

/**
 * hosts by region code
 * @enum
 * @readonly
 * @static
 */
HOST_BY_REGION = {
	BR: "br.api.pvp.net",
	EUNE: "eune.api.pvp.net",
	EUW: "euw.api.pvp.net",
	KR: "kr.api.pvp.net",
	LAS: "las.api.pvp.net",
	LAN: "lan.api.pvp.net",
	NA: "na.api.pvp.net",
	OCE: "oce.api.pvp.net",
	TR: "tr.api.pvp.net",
	RU: "ru.api.pvp.net",
	GLOBAL: "global.api.pvp.net"
};

/**
 * Region codes
 * @readonly
 * @enum
 * @static
 */
REGION = {
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
URLS = {
    /** static api */
    staticAPI: {
        championList: '/api/lol/static-data/{region}/v1.2/champion',
        championById: '/api/lol/static-data/{region}/v1.2/champion/{id}/',
        itemList: '/api/lol/static-data/{region}/v1.2/item',
        itemById: '/api/lol/static-data/{region}/v1.2/item/{id}',
        masteryList: '/api/lol/static-data/{region}/v1.2/mastery',
        masteryById: '/api/lol/static-data/{region}/v1.2/mastery/{id}',
        realm: '/api/lol/static-data/{region}/v1.2/realm',
        runeList: '/api/lol/static-data/{region}/v1.2/rune',
        runeById: '/api/lol/static-data/{region}/v1.2/rune/{id}',
        summonerSpellList: '/api/lol/static-data/{region}/v1.2/summoner-spell',
        summonerSpellById: '/api/lol/static-data/{region}/v1.2/summoner-spell/{id}',
        versions: '/api/lol/static-data/{region}/v1.2/versions'
    },
    /** champion api */
    championFlags: {
        championList: '/api/lol/{region}/v1.2/champion',
        championById: '/api/lol/{region}/v1.2/champion/{id}'
    },
    /** game api */
    game: {
        recentGames: '/api/lol/{region}/v1.3/game/by-summoner/{id}/recent'
    },
    /** summoner api */
    summoner: {
        name: '/api/lol/{region}/v1.4/summoner/by-name/{id}',
        byIds: '/api/lol/{region}/v1.4/summoner/{id}', //can supply list of ids
        masteriesByIds: '/api/lol/{region}/v1.4/summoner/{id}/masteries', //can supply list of ids
        namesByIds: '/api/lol/{region}/v1.4/summoner/{id}/names', //can supply list of ids
        runesByIds: '/api/lol/{region}/v1.4/summoner/{id}/runes' //can supply list of ids
    },
    /** league api */
    league: {
        bySummonerIds: '/api/lol/{region}/v2.5/league/by-summoner/{id}',
        entryBySummonerIds: '/api/lol/{region}/v2.5/league/by-summoner/{id}/entry',
        teamByTeamIds: '/api/lol/{region}/v2.5/league/by-team/{id}',
        entryByTeamIds: '/api/lol/{region}/v2.5/league/by-team/{id}/entry',
        challengerLeagues: '/api/lol/{region}/v2.5/league/challenger'
    },
    /** match api*/
    match: {
        byId: '/api/lol/{region}/v2.2/match/{id}'
    },
    /** match history api */
    matchHistory: {
        bySummonerId: '/api/lol/{region}/v2.2/matchhistory/{id}'
    },
    /** statistics api */
    stats: {
        ranked: '/api/lol/{region}/v1.3/stats/by-summoner/{id}/ranked',
        summary: '/api/lol/{region}/v1.3/stats/by-summoner/{id}/summary'
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
var generateUrl = function(calltype, callmethod, options, id){
    var url = null;
    var region = (options && options.region ? options.region : config.region);
    var apikey = config.apikey;
    log.info('\ncalltype: ' + calltype + '\ncallmethod: ' + callmethod + '\noptions: ' + JSON.stringify(options) + '\nid: ' + id + '\nregion: ' + region + '\napikey: ' + apikey);

    if(region && calltype && callmethod && apikey && 0 < region.length && 0 < calltype.length && 0 < callmethod.length && 0 < apikey.length){
        log.info('if(region && calltype && callmethod && apikey && 0 < region.length && 0 < calltype.length && 0 < callmethod.length && null !== apikey && 0 < apikey.length)');
        if(-1 == callmethod.indexOf("ById") || id){
            if(HOST_BY_REGION[region] && URLS[calltype] && URLS[calltype][callmethod]){
                url = "https://" + HOST_BY_REGION[region] + URLS[calltype][callmethod].replace("{region}",REGION[region]).replace("{id}", id) + "?api_key=" + apikey;
                log.info('if(HOST_BY_REGION[region] && URLS[calltype] && URLS[calltype][callmethod])');
            }
            log.info('if(-1 == callmethod.indexOf("ById") || id)');
        }
        
    }

    if(null != url && null != options && 0 < options.length)
        for(var key in options)
            url += "\&" + key + "=" + (Array.isArray(options[key]) ? options[key].join(",") : options[key]);
    log.info('url2: ' + JSON.stringify(id));
    return url;
};

/**
 * performs asynchronous https call to the specified URL
 * @param (string) url url to call
 * @param {lolAPICallback} callback
 * @static
 */
function makeAsyncHttpsCall(url, callback){
    console.log('url: ' + url);
    https.get(url, function(res){
        var body = '';
        res
            .on('data', function(chunk){
                body += chunk;
            })
            .on('end', function(){
                utils.makeCallback(callback, res.statusCode, body);
            });
    }).on('error', function(error){
        console.log(error);
        callback({statusCode: null, message: 'error making API call'}, null);
    });
};

exports.generateAPIUrl = generateUrl;
exports.makeAsyncHttpsCall = makeAsyncHttpsCall;
exports.REGION = REGION;
exports.setConfig = setConfig;