'use strict';

var chai = require('chai');
var should = chai.should();
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


describe('Status API',function(){
	it('should get a list of shards',function(){
		this.timeout(10000);
		return lol.status.getShardList().should.eventually.be.an('Array');
	});

	it('should get status of Brazil',function(){
		this.timeout(10000);
		return lol.status.getShardStatus(lol.REGION.BRAZIL).should.eventually.be.an('Object');
	});
});