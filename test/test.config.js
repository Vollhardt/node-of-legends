let chai = require('chai');
let should = chai.should();
let assert = chai.assert;
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//test to validate API key is set
describe('API Key',function(){
	it('should be defined',function(){
		assert.isDefined(process.env.RIOT_API_KEY, 'RIOT_API_KEY is defined.');
	});
	it('should be a string', function(){
		process.env.RIOT_API_KEY.should.be.a('string');
	});
});

//set config test
describe('Setting Configuration',function(){
	it('should set the configuration without error',function(){
		lol.setConfig({
			region: lol.REGION.NORTH_AMERICA,
			apikey: process.env.RIOT_API_KEY
		});
	});
});