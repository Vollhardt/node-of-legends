var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('Games API',function(){
	it('should get games for specified summoner(sexy hexy [19112268])',function(){
		this.timeout(10000);
		return lol.game.getSummonerRecentGameHistoryById(19112268).should.eventually.be.an('Object');
	});
	it('should recent history of games for a specified summoner in Korea (cowsep[25531791])',function(){
		this.timeout(10000);
		return lol.game.getSummonerRecentGameHistoryById(25531791,lol.REGION.KOREA).should.eventually.be.an('Object');
	});
	it('should fail to get a history of games for a specified invalid summoner id (-34])',function(){
		this.timeout(10000);
		return lol.game.getSummonerRecentGameHistoryById(-34).should.eventually.be.rejected;
	});
});