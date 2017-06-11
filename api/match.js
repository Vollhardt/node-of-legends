/**
 * @module match
 * @desc Wrapper for Riot's match api. **Updated for v3**
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 */

'use strict';

let serverdata = require('../services/serverdata');
let _extend = require('lodash.assignin');

/**
 * gets a match record for the specified match ID
 * @param {number} matchId matchId to get match record for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 * @see {@link https://developer.riotgames.com/api/methods|See Riot API for method output}
 * @static
 */
function getMatchById(matchId, region){
    if(matchId){
    	return serverdata.makeAsyncHttpsCall('match','byId', { region: region,matchId:matchId} );
	}else
		return Promise.reject(new Error('No match ID specified'));
}

/**
 * gets a list of matches for the provided account ID.  See Riot API Documentation for options.
 * @param {number} accountId the account ID to get the match list for
 * @param {?object}  options options to pass to the riot server
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 */
function getMatchesByAccountId(accountId, options, region){
  if(accountId){
  	let opts = {region: region,accountId:accountId};
  	_extend(opts,options);

    return serverdata.makeAsyncHttpsCall('match','byAccountId', opts);
  }else
    return Promise.reject(new Error('No account ID specified'));
}

/**
 * gets the recent list of matches for the specified account id
 * @param {number} accountId the account ID to get the match list for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 */
function getRecentMatchesByAccountId(accountId, region){
	if(accountId){
    let opts = {region: region, accountId:accountId};
    return serverdata.makeAsyncHttpsCall('match','recent', opts);
	}else
    return Promise.reject(new Error('No account ID specified'));
}

/**
 * Gets the timelines (Partcipant and Match) for the specified match ID
 * @param {number} matchId the match ID to get data for
 * @param {?module:serverdata.REGION} [region] if no region is specified the configured region will be used
 */
function getTimelines(matchId, region){
  if(matchId){
    let opts = {region: region, matchId: matchId};
    return serverdata.makeAsyncHttpsCall('match','timelines', opts);
  }else
    return Promise.reject(new Error('No match ID specified'));
}

// /*
//  * Gets a list of matches for the specified tournament code
//  * @param {string} tournamentCode the tournament code to retrieve the match list for
//  * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
//  */
// function getMatchesByTournamentCode(tournamentCode, region){
//   if(tournamentCode){
//     let opts = {region: region, tournamentCode: tournamentCode};
//     return serverdata.makeAsyncHttpsCall('match','byTournamentCode', opts);
//   }else
//     return Promise.reject(new Error('No tournament code specified'));
// }
//
// /*
//  *
//  * @param {string} tournamentCode the tournament code to retrieve the match list for
//  * @param {number} matchId matchId to get match record for
//  * @param {module:serverdata.REGION} [region] if no region is specified the configured region will be used
//  */
// function getMatchFromTournamentById(tournamentCode, matchId, region){
//   if(tournamentCode && matchId){
//     let opts = {region: region, tournamentCode: tournamentCode,matchId:matchId};
//     return serverdata.makeAsyncHttpsCall('match','byMatchIdByTournamentCode', opts);
//   }else
//     return Promise.reject(new Error('No tournament code specified'));
// }

module.exports.getMatchById = getMatchById;
module.exports.getRecentMatchesByAccountId = getRecentMatchesByAccountId;
module.exports.getMatchesByAccountId = getMatchesByAccountId;
module.exports.getTimelines = getTimelines;
// module.exports.getMatchesByTournamentCode = getMatchesByTournamentCode;
// module.exports.getMatchFromTournamentById = getMatchFromTournamentById;

