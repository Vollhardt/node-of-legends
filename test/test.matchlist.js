var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


describe('Match List API',function(){
	it('should get match',function(){
		this.timeout(10000);
		return lol.matchlist.getMatchListBySummonerId(19112268).should.eventually.be.an('Object'); //santana claus
	});
	it('should fail to get a match',function(){
		this.timeout(10000);
		return lol.matchlist.getMatchListBySummonerId(-34).should.eventually.be.rejected; //santana claus
	});
});