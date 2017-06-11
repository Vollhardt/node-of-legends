/**
 * @desc Main module of loltaco
 * @module node-of-legends
 */

'use strict';

const staticdata = require('./api/staticdata');
const staticdatav3 = require('./api/staticdata');
const champion = require('./api/champion');
const championmastery = require('./api/championmastery');
const summoner = require('./api/summoner');
const masteries = require('./api/masteries');
const match = require('./api/match');
const league = require('./api/league');
const spectator = require('./api/spectator');
const runes = require('./api/runes');
const serverdata = require('./services/serverdata');
const status = require('./api/status');

/**
 * static data api
 * @type {module:staticdata}
 */
module.exports.staticdata = staticdata;
/**
 * static data v3 api
 * @type {module:staticdata}
 */
module.exports.staticdata = staticdatav3;
/**
 * champion
 * @type {module:champion}
 */
module.exports.champion = champion;
/**
 * champion mastery v3
 * @type {module:championmastery}
 */
module.exports.championmastery = championmastery;
/**
 * summoner api
 * @type {module:summoner}
 */
module.exports.summoner = summoner;
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
 * leagues api
 * @type {module:league}
 */
module.exports.league = league;
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
