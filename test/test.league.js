let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('League API',function(){

	describe('#getLeaguesBySummonerIds',function(){
		it('should get league information for individually specified summoner id',function(){
			return lol.league.getLeaguesBySummonerId(21438871).should.eventually.be.an('Array');
		});
		it('should get league information for individually specified summoner id in Korea',function(){
			return lol.league.getLeaguesBySummonerId(57720996,lol.REGION.KOREA).should.eventually.be.an('Array');
		});
		it('should fail to get league information for incorrect summoner id',function(){
			return lol.league.getLeaguesBySummonerId(-34).should.eventually.be.an('Array').that.is.empty;
		});
	});
	describe('#getPositionBySummonerIds',function(){
		it('should get entry information for individually specified summoner id',function(){
			return lol.league.getPositionsBySummonerId(21438871).should.eventually.be.an('Array');
		});
		it('should get entry information for individually specified summoner id in Korea',function(){
			return lol.league.getPositionsBySummonerId(54610571,lol.REGION.KOREA).should.eventually.be.an('Array');
		});
		it('should fail to get entry information for incorrect summoner id',function(){
			return lol.league.getPositionsBySummonerId(-34).should.eventually.be.an('Array').that.is.empty;
		});
	});

	describe('#getMasterLeagues',function(){
		it('should get Master League information for SOLO Q',function(){
			return lol.league.getMasterLeagues('RANKED_SOLO_5x5').should.eventually.be.an('Object');
		});
		it('should get Master League information for SOLO Q in Korea',function(){
			return lol.league.getMasterLeagues('RANKED_SOLO_5x5', lol.REGION.KOREA).should.eventually.be.an('Object');
		});
		it('should fail to get Master league information for invalid constant',function(){
			return lol.league.getMasterLeagues('-34').should.eventually.be.rejected;
		});
	});

	describe('#getChallengerLeagues',function(){
		it('should get Challenger League information for SOLO Q',function(){
			return lol.league.getMasterLeagues('RANKED_SOLO_5x5').should.eventually.be.an('Object');
		});
		it('should get Challenger League information for SOLO Q in Korea',function(){
			return lol.league.getMasterLeagues('RANKED_SOLO_5x5', lol.REGION.KOREA).should.eventually.be.an('Object');
		});
		it('should fail to get Challenger League information for invalid constant',function(){
			return lol.league.getMasterLeagues('-34').should.eventually.be.rejected;
		});
	});
});