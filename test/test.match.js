let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

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
	it('should get a list of matches by account id',function(){
		this.timeout(10000);
		return lol.match.getMatchesByAccountId(31806747).should.eventually.be.be.an('Object');
	});
	it('should fail to get a list of matches by account id',function(){
		this.timeout(10000);
		return lol.match.getMatchesByAccountId(-34).should.eventually.be.rejected;
	});
	it('should get recent matches from an account ID',function(){
		this.timeout(10000);
		return lol.match.getRecentMatchesByAccountId(31806747).should.eventually.be.be.an('Object');
	});
	it('should fail to get recent matches from an account ID',function(){
		this.timeout(10000);
		return lol.match.getRecentMatchesByAccountId(-34).should.eventually.be.rejected;
	});
	it('should get a timeline from a match ID',function(){
		this.timeout(10000);
		return lol.match.getTimelines(2521416779).should.eventually.be.be.an('Object');
	});
	it('should fail to get a timeline from a match ID',function(){
		this.timeout(10000);
		return lol.match.getTimelines(-34).should.eventually.be.rejected;
	});
	// it('should fail to get a match',function(){
	// 	this.timeout(10000);
	// 	return lol.match.getMatchesByTournamentCode(-34).should.eventually.be.be.an('Object');
	// });
	// it('should fail to get a match',function(){
	// 	this.timeout(10000);
	// 	return lol.match.getMatchesByTournamentCode(-34).should.eventually.be.rejected;
	// });
	// it('should get a match from a tournament',function(){
	// 	this.timeout(10000);
	// 	return lol.match.getMatchFromTournamentById(-34).should.eventually.be.be.an('Object');
	// });
	// it('should fail to get a match from a tournament',function(){
	// 	this.timeout(10000);
	// 	return lol.match.getMatchFromTournamentById(-34).should.eventually.be.rejected;
	// });
});