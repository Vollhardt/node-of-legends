/**
 * @desc Main module of loltaco
 * @module node-of-legends
 */

"use strict";

var staticdata = require('./api/staticdata');
var staticdatav3 = require('./api/staticdata-v3');
var champion = require('./api/champion');
var championmasteryv3 = require('./api/championmastery-v3');
var game = require('./api/game');
var summoner = require('./api/summoner');
var summonerv3 = require('./api/summoner-v3');
var stats = require('./api/stats');
var status = require('./api/status');
var statusv3 = require('./api/status-v3');
var masteries = require('./api/masteries');
var match = require('./api/match');
var matchlist = require('./api/matchlist');
var league = require('./api/league');
var currentgame = require('./api/currentgame');
var featuredgames = require('./api/featuredgames');
var spectator = require('./api/spectator');
var runes = require('./api/runes');
var serverdata = require('./services/serverdata');
var constants = require('./config/constants');

/**
 * static data api
 * @type {module:staticdata}
 */
module.exports.staticdata = staticdata;
/**
 * static data v3 api
 * @type {module:staticdatav3}
 */
module.exports.staticdatav3 = staticdatav3;
/**
 * champion
 * @type {module:champion}
 */
module.exports.champion = champion;
/**
 * champion mastery v3
 * @type {module:championmasteryv3}
 */
module.exports.championmasteryv3 = championmasteryv3;
/**
 * game api
 * @type {module:game}
 */
module.exports.game = game;
/**
 * summoner api
 * @type {module:summoner}
 */
module.exports.summoner = summoner;
/**
 * summoner v3 api
 * @type {module:summonerv3}
 */
module.exports.summonerv3 = summonerv3;
/**
 * masteries api
 * @type {module:match}
 */
module.exports.masteries = masteries;
/**
 * match api
 * @type {module:match}
 */
module.exports.match = match;
/**
 * match list api
 * @type {module:matchlist}
 */
module.exports.matchlist = matchlist;
/**
 * stats api
 * @type {module:stats}
 */
module.exports.stats = stats;
/**
 * leagues api
 * @type {module:league}
 */
module.exports.league = league;
/**
 * featuredgames api
 * @type {module:featuredgames}
 */
module.exports.featuredgames = featuredgames;
/**
 * currentgame api
 * @type {module:currentgame}
 */
module.exports.currentgame = currentgame;
/**
 * status api
 * @type {module:status}
 */
module.exports.status = status;
/**
 * runes api
 * @type {module:runes}
 */
module.exports.runes = runes;
/**
 * spectator api
 * @type {module:spectator}
 */
module.exports.spectator = spectator;
/**
 * status v3 api
 * @type {module:statusv3}
 */
module.exports.statusv3 = statusv3;

/**
 * @func
 * @desc sets the configuration
 * @param {object} config key/value pairs to set
 * @return {object} returns the config object
 * @static
 */
module.exports.setConfig = serverdata.setConfig;

/**
 * region list
 * @type {module:serverdata.REGION}
 */
module.exports.REGION = serverdata.REGION;

/**
 * Ranked Queue Types
 * @type {module:constants.RANKED_QUEUE_TYPE}
 */
module.exports.RANKED_QUEUE_TYPE = constants.RANKED_QUEUE_TYPE

/**
 * Types of champion data available on the static API
 * @type {module:constants.CHAMPION_DATA_TO_RETRIVE}
 */
module.exports.CHAMPION_DATA_TO_RETRIVE = constants.CHAMPION_DATA_TO_RETRIVE

/**
 * Types of item data available on the static API
 * @type {module:constants.ITEM_DATA_TO_RETRIEVE}
 */
module.exports.ITEM_DATA_TO_RETRIEVE = constants.ITEM_DATA_TO_RETRIEVE

/**
 * Types of mastery data available on the static API
 * @type {module:constants.MASTERY_DATA_TO_RETRIEVE}
 */
module.exports.MASTERY_DATA_TO_RETRIEVE = constants.MASTERY_DATA_TO_RETRIEVE

/**
 * Types of rune data available on the static API
 * @type {module:constants.RUNE_DATA_TO_RETRIEVE}
 */
module.exports.RUNE_DATA_TO_RETRIEVE = constants.RUNE_DATA_TO_RETRIEVE

/**
 * Types of summoner spell data available on the static API
 * @type {module:constants.SUMMONER_SPELL_INFO_TO_RETRIEVE}
 */
module.exports.SUMMONER_SPELL_INFO_TO_RETRIEVE = constants.SUMMONER_SPELL_INFO_TO_RETRIEVE