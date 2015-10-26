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


//test current game api
describe('Current Game API',function(){
	it('might get a current game',function(){
		this.timeout(10000);
		return lol.currentgame.getSpectatorGameInfo(64709188).should.eventually.be.an('Object'); //santana claus
	});
	it('should fail to get a current game',function(){
		this.timeout(10000);
		return lol.currentgame.getSpectatorGameInfo(-34).should.eventually.be.rejected; //santana claus
	});
});