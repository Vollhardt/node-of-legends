let chai = require('chai');
let should = chai.should();
chai.use(require('chai-as-promised'));
let lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


describe('Static Data v3 API',function(){

	describe('Champions',function(){
		it('should get champion list',function(){
			return lol.staticdata.getChampionList().should.eventually.be.an('Object');
		});
		it('should get all champions in EU West with all data and by id',function(){
			this.timeout(10000); 
			return lol.staticdata.getChampionList('all', false, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Anivia',function(){
			return lol.staticdata.getAllChampData(34).should.eventually.be.an('Object');
		});
	});
	
	describe('Items',function(){
		it('should get item list',function(){
			return lol.staticdata.getItemList().should.eventually.be.an('Object');
		});
		it('should get all items in EU West with all data',function(){
			return lol.staticdata.getItemList('all', null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Boots 1',function(){
			return lol.staticdata.getAllItemData(1001).should.eventually.be.an('Object');
		});
	});

	describe('Language APIs',function(){
		it('should get language list',function(){
			return lol.staticdata.getLanguages().should.eventually.be.an('Array');
		});
		it('should get display strings',function(){
			return lol.staticdata.getLanguageStrings().should.eventually.be.an('Object');
		});
		it('should get display strings ofr pt_BR',function(){
			return lol.staticdata.getLanguageStrings('pt_BR').should.eventually.be.an('Object');
		});
	});

	describe('Map',function(){
		it('should get display strings',function(){
			return lol.staticdata.getMaps().should.eventually.be.an('Object');
		});
	});

	describe('Masteries',function(){
		it('should get mastery list',function(){
			return lol.staticdata.getMasteryList().should.eventually.be.an('Object');
		});
		it('should get all masteries in EU West with all data',function(){
			return lol.staticdata.getMasteryList('all', null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Fury',function(){
			return lol.staticdata.getAllMasteryData(6111).should.eventually.be.an('Object');
		});
	});

	describe('Profile Icons',function(){
		it('should get profile icons',function(){
			return lol.staticdata.getProfileIcons().should.eventually.be.an('Object');
		});
	});

	describe('Realm',function(){
		it('should get realm data',function(){
			return lol.staticdata.getRealmData().should.eventually.be.an('Object');
		});
	});

	describe('Runes',function(){
		it('should get rune list',function(){
			return lol.staticdata.getRuneList().should.eventually.be.an('Object');
		});
		it('should get all runes in EU West with all data',function(){
			return lol.staticdata.getRuneList('all', null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for AP Quint',function(){
			return lol.staticdata.getAllRuneData(5235).should.eventually.be.an('Object');
		});
	});

	describe('Summoner Spells',function(){
		it('should get summoner spell list',function(){
			return lol.staticdata.getSummonerSpellList().should.eventually.be.an('Object');
		});
		it('should get all summoner spells in EU West with all data',function(){
			return lol.staticdata.getSummonerSpellList('all', null, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Teleport',function(){
			return lol.staticdata.getAllSummonerSpellData(12).should.eventually.be.an('Object');
		});
	});

	describe('Versions',function(){
		it('should get version data',function(){
			return lol.staticdata.getVersions().should.eventually.be.an('Array');
		});
	});
});