/**
 * @desc contains server data for the riot servers
 * @module serverdata
 */

'use strict';

const https = require('https');
const _assign = require('lodash.assign');

let config = {
    region: 'NA',
    apikey: null
};

function setConfig(update){
    _assign(config, update);
    return config;
}

/**
 * hosts by region code
 * @enum
 * @readonly
 * @static
 */
const HOST_BY_REGION= {
  BR: 'br1.api.riotgames.com',
  EUNE: 'eun1.api.riotgames.com',
  EUW: 'euw1.api.riotgames.com',
  JP: 'jp1.api.riotgames.com',
  KR: 'kr.api.riotgames.com',
  LAN: 'la1.api.riotgames.com',
  LAS: 'la2.api.riotgames.com',
  NA: 'na1.api.riotgames.com',
  OCE: 'oc1.api.riotgames.com',
  PBE: 'pbe1.api.riotgames.com',
  TR: 'tr1.api.riotgames.com',
  RU: 'ru.api.riotgames.com',
  GLOBAL: 'americas.api.riotgames.com'
};

/**
 * Region codes
 * @readonly
 * @enum
 * @static
 */
const REGION = {
  /** Brazil*/
  BRAZIL: 'br',
  /**EU North and East **/
  EU_NORTH_EAST: 'eune',
  /**EU West*/
  EU_WEST: 'euw',
  /**Japan*/
  JAPAN: 'jp',
  /**Korea*/
  KOREA: 'kr',
  /**Latin America North*/
  LATIN_AMERICA_NORTH: 'lan',
  /**Latin America South*/
  LATIN_AMERICA_SOUTH: 'las',
  /**North America (DEFAULT)*/
  NORTH_AMERICA: 'na',
  /**Oceania*/
  OCEANIA: 'oce',
  /**Public Beta Environment*/
  PBE: 'pbe',
  /**Turkey*/
  TURKEY: 'tr',
  /**Russia*/
  RUSSIA: 'ru'
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
        championById: '/lol/platform/v3/champions/{championId}'
    },
    /** champion mastery api */
    championmastery:{
        masteryById: '/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}',
        masteryByIdByChampionId: '/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}',
        scoreById: '/lol/champion-mastery/v3/scores/by-summoner/{summonerId}'
    },
    /** league api */
    league: {
        bySummonerId: '/lol/league/v3/leagues/by-summoner/{summonerId}',
        positionsBySummonerId:'/lol/league/v3/positions/by-summoner/{summonerId}',
        masterLeaguesByQueue: '/lol/league/v3/masterleagues/by-queue/{queue}',
        challengerLeaguesByQueue: '/lol/league/v3/challengerleagues/by-queue/{queue}'
    },
  /** masteries v3 api*/
    masteries: {
        masteriesById: '/lol/platform/v3/masteries/by-summoner/{summonerId}'
    },
    /** match api*/
    match: {
        byId: '/lol/match/v3/matches/{matchId}',
        byAccountId: '/lol/match/v3/matchlists/by-account/{accountId}',
        recent: '/lol/match/v3/matchlists/by-account/{accountId}/recent',
        timelines: '/lol/match/v3/timelines/by-match/{matchId}',
        byTournamentCode: '/lol/match/v3/matches/by-tournament-code/{tournamentCode}/ids',
        byMatchIdByTournamentCode: '/lol/match/v3/matches/{matchId}/by-tournament-code/{tournamentCode}'
    },
    /** runes api*/
    runes: {
      bySummonerId: '/lol/platform/v3/runes/by-summoner/{summonerId}'
    },
    /** spectator api*/
    spectator: {
      bySummonerId:'/lol/spectator/v3/active-games/by-summoner/{summonerId}',
      featuredGames: '/lol/spectator/v3/featured-games'
    },
    /** static v3 api */
    staticdata: {
        championList: '/lol/static-data/v3/champions',
        championById: '/lol/static-data/v3/champions/{championId}',
        itemList: '/lol/static-data/v3/items',
        itemById: '/lol/static-data/v3/items/{itemId}',
        languages: '/lol/static-data/v3/languages',
        languagestrings: '/lol/static-data/v3/language-strings',
        maps: '/lol/static-data/v3/maps',
        masteryList: '/lol/static-data/v3/masteries',
        masteryById: '/lol/static-data/v3/masteries/{masteryId}',
        profileIcons: '/lol/static-data/v3/profile-icons',
        realm: '/lol/static-data/v3/realms',
        runeList: '/lol/static-data/v3/runes',
        runeById: '/lol/static-data/v3/runes/{runeId}',
        summonerSpellList: '/lol/static-data/v3/summoner-spells',
        summonerSpellById: '/lol/static-data/v3/summoner-spells/{summonerSpellId}',
        versions: '/lol/static-data/v3/versions'
    },
    /** status v3 api */
    status:{
        status: '/lol/status/v3/shard-data'
    },
    /** summoner v3 api */
    summoner: {
        name: '/lol/summoner/v3/summoners/by-name/{summonerName}',
        byId: '/lol/summoner/v3/summoners/{summonerId}', //can supply list of ids
        byAccountId: '/lol/summoner/v3/summoners/by-account/{accountId}', //can supply list of ids
    }
};

/**
 * returns a Promise to perform asynchronous https call to the specified objects.
 * @param {string} calltype the type of call to make
 * @param {string} callmethod the method to call
 * @param {options!} options to encode in the url
 * @static
 */
function makeAsyncHttpsCall(calltype, callmethod, options){
  //setup options block
  let httpsOpts = {
    method: 'GET',
    port: 443,
    protocol: 'https:',
    headers: {'X-Riot-Token':config.apikey}
  };

  //set region
  let region = (options && options.region ? options.region : config.region).toUpperCase();

  //remove region so we do not encode extra params in the URL
  if(options) delete options['region'];

  if(region && calltype && callmethod && config.apikey && 0 < region.length && 0 < calltype.length && 0 < callmethod.length && 0 < config.apikey.length){
      //verify nec. variables are defined
      if(HOST_BY_REGION[region] && URLS[calltype] && URLS[calltype][callmethod]){
        // httpsOpts.hostname = HOST_BY_REGION['staticdata' === calltype ? 'GLOBAL' : region];
        httpsOpts.hostname = HOST_BY_REGION[region];
        httpsOpts.path = URLS[calltype][callmethod] +'?';
        //add options to the URL
        if(options && 0 < Object.keys(options).length){
          for(let key in options){
            if(-1===httpsOpts.path.indexOf('{' + key +'}')) //if not in URL then add to query string
              httpsOpts.path +=  key+'='+(Array.isArray(options[key]) ?options[key].join('\&'+key+'=') : options[key]) + '\&';
            else //if in URL replace
              httpsOpts.path = httpsOpts.path.replace('{' + key +'}', options[key])
          }
        }
      }//end if(HOST_BY_REGION[region]...
  }//end if(region && calltype && callmethod...

  //make call
  return new Promise(function(resolve,reject){
    https.request(httpsOpts, function(res){
      if(200 !== res.statusCode){
        reject({msg:res.statusMessage,status:res.statusCode});
      }else{
        let body = '';
        res
          .on('data', function(chunk){
              body += chunk;
            }
          )
          .on('end', function(){
              resolve(JSON.parse(body));
            }
          );
      }
    }).on('error', function(error){
      reject(new Error('error making API call: ' + error));//TODO: check if JSON
    }).end();
  });
}

module.exports.makeAsyncHttpsCall = makeAsyncHttpsCall;
module.exports.REGION = REGION;
module.exports.setConfig = setConfig;
module.exports.configuredRegion = config.region;