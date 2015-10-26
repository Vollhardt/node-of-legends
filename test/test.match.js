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


describe('Match API',function(){
	it('should get match',function(){
		this.timeout(10000);
		return lol.match.getMatchById(1991254805).should.eventually.be.an('Object');
	});
	it('should fail to get a match',function(){
		this.timeout(10000);
		return lol.match.getMatchById(-34).should.eventually.be.rejected; 
	});
});