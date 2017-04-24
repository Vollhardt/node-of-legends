var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('League API',function(){

	describe('#getLeaguesBySummonerIds',function(){
		it('should get league information for individually specified summoner id',function(){
			return lol.league.getLeaguesBySummonerIds(35301382).should.eventually.be.an('Object');
		});
		it('should get league information for multiple specified summoner ids',function(){
			return lol.league.getLeaguesBySummonerIds([35301382,19035694,19036686]).should.eventually.be.an('Object');
		});
		it('should get league information for individually specified summoner id in Korea',function(){
			return lol.league.getLeaguesBySummonerIds(54610571,lol.REGION.KOREA).should.eventually.be.an('Object');
		});
		it('should fail to get league information for incorrect summoner id',function(){
			return lol.league.getLeaguesBySummonerIds(-34).should.eventually.be.rejected;
		});
	});
	describe('#getEntryBySummonerIds',function(){
		it('should get entry information for individually specified summoner id',function(){
			return lol.league.getEntryBySummonerIds(35301382).should.eventually.be.an('Object');
		});
		it('should get entry information for multiple specified summoner ids',function(){
			return lol.league.getEntryBySummonerIds([35301382,19035694,19036686]).should.eventually.be.an('Object');
		});
		it('should get entry information for individually specified summoner id in Korea',function(){
			return lol.league.getEntryBySummonerIds(54610571,lol.REGION.KOREA).should.eventually.be.an('Object');
		});
		it('should fail to get entry information for incorrect summoner id',function(){
			return lol.league.getEntryBySummonerIds(-34).should.eventually.be.rejected;
		});
	});

	describe('#getMasterLeagues',function(){
		it('should get Master League information for SOLO Q',function(){
			return lol.league.getMasterLeagues(lol.RANKED_QUEUE_TYPE.SOLO_5v5).should.eventually.be.an('Object');
		});
		it('should get Master League information for SOLO Q in Korea',function(){
			return lol.league.getMasterLeagues(lol.RANKED_QUEUE_TYPE.SOLO_5v5, lol.REGION.KOREA).should.eventually.be.an('Object');
		});
		it('should fail to get Master league information for invalid constant',function(){
			return lol.league.getMasterLeagues('-34').should.eventually.be.rejected;
		});
	});

	describe('#getChallengerLeagues',function(){
		it('should get Challenger League information for SOLO Q',function(){
			return lol.league.getMasterLeagues(lol.RANKED_QUEUE_TYPE.SOLO_5v5).should.eventually.be.an('Object');
		});
		it('should get Challenger League information for SOLO Q in Korea',function(){
			return lol.league.getMasterLeagues(lol.RANKED_QUEUE_TYPE.SOLO_5v5, lol.REGION.KOREA).should.eventually.be.an('Object');
		});
		it('should fail to get Challenger League information for invalid constant',function(){
			return lol.league.getMasterLeagues('-34').should.eventually.be.rejected;
		});
	});
});