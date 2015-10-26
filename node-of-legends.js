/**
 * @desc Main module of loltaco
 * @module node-of-legends
 */

"use strict";

var staticdata = require('./api/staticdata');
var champion = require('./api/champion');
var game = require('./api/game');
var summoner = require('./api/summoner');
var team = require('./api/team');
var stats = require('./api/stats');
var status = require('./api/status');
var match = require('./api/match');
var matchlist = require('./api/matchlist');
var league = require('./api/league');
var currentgame = require('./api/currentgame');
var featuredgames = require('./api/featuredgames');
var serverdata = require('./services/serverdata');
var constants = require('./config/constants');

/**
 * static data api
 * @type {module:staticdata}
 */
module.exports.staticdata = staticdata;
/**
 * champion
 * @type {module:champion}
 */
module.exports.champion = champion;
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
 * team api
 * @type {module:team}
 */
module.exports.team = team;
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