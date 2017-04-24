var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('Masteries API',function(){
	it('should get summoner mastery information for individual summoner id ',function(){
		this.timeout(10000);
		return lol.masteries.getMasteryById(19112268).should.eventually.be.an('Object');
	});

});