var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


//test current game api
describe('Spectator API',function(){
	it('might get a current game',function(){
		this.timeout(10000);
		return lol.spectator.getActiveGameBySummonerId(64709188).should.eventually.be.an('Object'); //santana claus
	});
	it('should get featured games in Japan',function(){
		this.timeout(10000);
		return lol.spectator.getFeaturedGames(lol.REGION.JAPAN).should.eventually.be.an('Object'); //santana claus
	});
	it('should fail to get a current game',function(){
		this.timeout(10000);
		return lol.spectator.getActiveGameBySummonerId(-34).should.eventually.be.rejected; //santana claus
	});
});