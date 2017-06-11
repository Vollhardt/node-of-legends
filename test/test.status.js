'use strict';

let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


describe('Status V3 API',function(){
	it('should get a list of shards',function(){
		this.timeout(10000);
		return lol.status.getStatus().should.eventually.be.an('Object');
	});
});