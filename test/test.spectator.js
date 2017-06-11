let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


//test current game api
describe('Spectator API',function(){
	it('might get a current game',function(){
		this.timeout(10000);
		return lol.spectator.getActiveGameBySummonerId(64709188).should.eventually.be.an('Object'); //chowdog
	});
	it('should get featured games in Japan',function(){
		this.timeout(10000);
		return lol.spectator.getFeaturedGames(lol.REGION.JAPAN).should.eventually.be.an('Object'); //chowdog
	});
	it('should fail to get a current game',function(){
		this.timeout(10000);
		return lol.spectator.getActiveGameBySummonerId(-34).should.eventually.be.rejected; //chowdog
	});
});