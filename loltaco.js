/**
 * @desc Main module of loltaco
 * @module loltaco
 */
var static = require('./api/static.js');
var championFlags = require('./api/championFlags.js');
var game = require('./api/game.js');
var summoner = require('./api/summoner.js');
var team = require('./api/team.js');
var stats = require('./api/stats.js');
var match = require('./api/match.js');
var matchHistory = require('./api/matchhistory.js');
var league = require('./api/league.js');
var config = require('./config/config.js');


/**
 * static api
 * @type {module:static}
 */
module.exports.static = static;
/**
 * champion flags api
 * @type {module:championflags}
 */
module.exports.championFlags = championFlags;
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
 * match history api
 * @type {module:matchhistory}
 */
module.exports.matchHistory = matchHistory;
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
 * @func
 * @desc sets the configuration
 * @param {object} config key/value pairs to set
 * @return {object} returns the config object
 * @static
 */
module.exports.setConfig = config.setConfig;

/**
 *  @desc callback signature of all api calls
 *  @callback tacoAPICallback
 *  @param {{status_code: number, message: string}} error
 *  @param {Object} data
 *  @global
 */