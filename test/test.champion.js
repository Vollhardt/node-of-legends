let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


//test getting all champions
describe('Champion API',function(){
	it('should get all champions',function(){
		this.timeout(10000);
		return lol.champion.getChampionList().should.eventually.be.an('Object');
	});
	it('should get all champions in EU West',function(){
		this.timeout(10000);
		return lol.champion.getChampionList(false, lol.REGION.EU_WEST).should.eventually.be.an('Object');
	});
	it('should get free to play',function(){
		this.timeout(10000);
		return lol.champion.getChampionList(true).should.eventually.be.an('Object');
	});
	it('should get Anivia',function(){
		this.timeout(10000);
		return lol.champion.getChampionsById(34).should.eventually.be.an('Object');
	});
	it('should get Anivia in Brazil',function(){
		this.timeout(10000);
		return lol.champion.getChampionsById(34,lol.REGION.BRAZIL).should.eventually.be.an('Object');
	});
	it('should fail to pull champion with id -34',function(){
		this.timeout(10000);
		return lol.champion.getChampionsById(-34).should.eventually.be.rejected;
	});
});