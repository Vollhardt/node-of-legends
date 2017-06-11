let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('Summoner v3 API',function(){
	it('should get summoner information for individual summoner name ',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerByName('sexy hexy').should.eventually.be.an('Object');
	});
	it('should get summoner information for individually specified summoner id',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerById(19112268).should.eventually.be.an('Object');
	});
	it('should get summoner information for individually specified account id',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerByAccountIds(31806747).should.eventually.be.an('Object');
	});
});