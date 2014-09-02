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



module.exports.static = static;
module.exports.championFlags = championFlags;
module.exports.game = game;
module.exports.summoner = summoner;
module.exports.team = team;
module.exports.match = match;
module.exports.matchHistory = matchHistory;
module.exports.stats = stats;
module.exports.league = league;
module.exports.setConfig = config.setConfig;
