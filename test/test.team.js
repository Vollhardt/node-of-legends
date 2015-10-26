var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});

describe('Team, API',function(){
	it('should get teams for the individually specified summoner id',function(){
		this.timeout(10000);
		return lol.team.getTeamsBySummonerIds(19112268).should.eventually.be.an('Object');
	});
	it('should get team information for multiple specified summoner ids',function(){
		this.timeout(10000);
		return lol.team.getTeamsBySummonerIds([19112268,19035694,19036686]).should.eventually.be.an('Object');
	});
	it('should get team information for individually specified team id',function(){
		this.timeout(10000);
		return lol.team.getTeamsByTeamIds('TEAM-753e71d0-352b-11e4-91d2-782bcb4d0bb2').should.eventually.be.an('Object');
	});
	it('should get team information for multiple specified team ids',function(){
		this.timeout(10000);
		return lol.team.getTeamsByTeamIds(['TEAM-97969510-ce5f-11e3-9bd2-782bcb4d0bb2','TEAM-753e71d0-352b-11e4-91d2-782bcb4d0bb2']).should.eventually.be.an('Object');
	});
});