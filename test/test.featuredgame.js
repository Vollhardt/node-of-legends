var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('Featured Games API',function(){
	it('should get featured games for NA (default region)',function(){
		this.timeout(10000);
		return lol.featuredgames.getFeaturedGames().should.eventually.be.an('Object');
	});
	it('should get featured games for a specified reginon (BRAZIL)',function(){
		this.timeout(10000);
		return lol.featuredgames.getFeaturedGames(lol.REGION.BRAZIL).should.eventually.be.an('Object');
	});
});