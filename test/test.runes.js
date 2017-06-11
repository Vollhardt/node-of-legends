let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


describe('Runes API',function(){
	it('should get rune page list',function(){
		this.timeout(10000);
		return lol.runes.getRunesBySummonerId(19112268).should.eventually.be.an('Object');
	});
	it('should fail to get a rune page list',function(){
		this.timeout(10000);
		return lol.runes.getRunesBySummonerId(-34).should.eventually.be.rejected;
	});
});