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


describe('Stats API',function(){
	it('should get stats for summoner id 19112268',function(){
		this.timeout(10000);
		return lol.stats.getRankedStatsBySummonerId(19112268).should.eventually.be.an('Object');
	});
	it('should fail to get stats',function(){
		this.timeout(10000);
		return lol.stats.getRankedStatsBySummonerId(-34).should.eventually.be.rejected;
	});
		it('should get stat summary for 19112268',function(){
		this.timeout(10000);
		return lol.stats.getStatSummaryBySummonerId(19112268).should.eventually.be.an('Object');
	});
	it('should fail to get stats',function(){
		this.timeout(10000);
		return lol.stats.getStatSummaryBySummonerId(-34).should.eventually.be.rejected;
	});
});