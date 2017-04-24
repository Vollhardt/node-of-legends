var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


//test getting all champions
describe('Champion Mastery v3 API',function(){
	it('should get all masteries for summoner id 19112268',function(){
		this.timeout(10000);
		return lol.championmasteryv3.getChampionMasteryBySummonerId(19112268).should.eventually.be.an('Array');
	});
	it('should get mastery for Birdnivia for summoner id 19112268',function(){
		this.timeout(10000);
		return lol.championmasteryv3.getMasteryChampionsById(19112268,34).should.eventually.be.an('Object');
	});
	it('should get total mastery score for summoner id 19112268',function(){
		this.timeout(10000);
		return lol.championmasteryv3.getMasteryScoreForSummoner(19112268).should.eventually.be.an('Number');
	});
});