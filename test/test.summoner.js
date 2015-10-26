var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('Summoner API',function(){
	it('should get summoner information for individual summoner name ',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerByName('sexy hexy').should.eventually.be.an('Object');
	});
	it('should get summoner information for multiple summoner name ',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerByName(['sexy hexy','switche','sanajin']).should.eventually.be.an('Object');
	});
	it('should get summoner information for individually specified summoner id',function(){
		this.timeout(10000);
		return lol.summoner.getSummonersByIds(19112268).should.eventually.be.an('Object');
	});
	it('should get summoner information for multiple specified summoner ids',function(){
		this.timeout(10000);
		return lol.summoner.getSummonersByIds([19112268,19035694,19036686]).should.eventually.be.an('Object');
	});
	it('should get summoner information for individually specified summoner id',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerNamesByIds(19112268).should.eventually.be.an('Object');
	});
	it('should get summoner names for multiple specified summoner ids',function(){
		this.timeout(10000);
		return lol.summoner.getSummonerNamesByIds([19112268,19035694,19036686]).should.eventually.be.an('Object');
	});

	it('should get mastery information for individual summoner id ',function(){
		this.timeout(10000);
		return lol.summoner.getMasteriesByIds(19112268).should.eventually.be.an('Object');
	});
	it('should get mastery information for multiple summoner id ',function(){
		this.timeout(10000);
		return lol.summoner.getMasteriesByIds([19112268,19035694,19036686]).should.eventually.be.an('Object');
	});

	it('should get runes information for individual summoner id ',function(){
		this.timeout(10000);
		return lol.summoner.getRunesByIds(19112268).should.eventually.be.an('Object');
	});
	it('should get runes information for multiple summoner id ',function(){
		this.timeout(10000);
		return lol.summoner.getRunesByIds([19112268,19035694,19036686]).should.eventually.be.an('Object');
	});


});