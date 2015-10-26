var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
chai.use(require('chai-as-promised'));
var lol = require('../node-of-legends');

//setup config
lol.setConfig({
	region: lol.REGION.NORTH_AMERICA,
	apikey: process.env.RIOT_API_KEY
});


describe('Static Data API',function(){
	describe('Champions',function(){
		it('should get champion list',function(){
			this.timeout(10000);
			return lol.staticdata.getChampionList().should.eventually.be.an('Object');
		});
		it('should get all champions in EU West with all data and by id',function(){
			this.timeout(10000);
			return lol.staticdata.getChampionList(lol.CHAMPION_DATA_TO_RETRIVE.ALL, false, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Anivia',function(){
			return lol.staticdata.getAllChampData(34).should.eventually.be.an('Object');
		});
	});
	
	describe('Items',function(){
		it('should get item list',function(){
			this.timeout(10000);
			return lol.staticdata.getItemList().should.eventually.be.an('Object');
		});
		it('should get all items in EU West with all data',function(){
			this.timeout(10000);
			return lol.staticdata.getItemById(lol.ITEM_DATA_TO_RETRIEVE.ALL, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Cinderhulk',function(){
			return lol.staticdata.getAllItemData(3725).should.eventually.be.an('Object');
		});
	});

	describe('Language APIs',function(){
		it('should get language list',function(){
			this.timeout(1000);
			return lol.staticdata.getLanguages().should.eventually.be.an('Array');
		});
		it('should get display strings',function(){
			this.timeout(1000);
			return lol.staticdata.getLanguageStrings().should.eventually.be.an('Object');
		});
		it('should get display strings ofr pt_BR',function(){
			this.timeout(1000);
			return lol.staticdata.getLanguageStrings('pt_BR').should.eventually.be.an('Object');
		});
	});

	describe('Map',function(){
		it('should get display strings',function(){
			this.timeout(1000);
			return lol.staticdata.getMaps().should.eventually.be.an('Object');
		});
	});

	describe('Masteries',function(){
		it('should get mastery list',function(){
			this.timeout(10000);
			return lol.staticdata.getMasteryList().should.eventually.be.an('Object');
		});
		it('should get all masteries in EU West with all data',function(){
			this.timeout(10000);
			return lol.staticdata.getMasteryById(lol.MASTERY_DATA_TO_RETRIEVE.ALL, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for Bandit',function(){
			return lol.staticdata.getAllMasteryData(4352).should.eventually.be.an('Object');
		});
	});

	describe('Realm',function(){
		it('should get realm data',function(){
			this.timeout(1000);
			return lol.staticdata.getRealmData().should.eventually.be.an('Object');
		});
	});

	describe('Runes',function(){
		it('should get rune list',function(){
			this.timeout(10000);
			return lol.staticdata.getRuneList().should.eventually.be.an('Object');
		});
		it('should get all runes in EU West with all data',function(){
			this.timeout(10000);
			return lol.staticdata.getRuneById(lol.RUNE_DATA_TO_RETRIEVE.ALL, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for AP Quint',function(){
			return lol.staticdata.getAllRuneData(5235).should.eventually.be.an('Object');
		});
	});

	describe('Summoner Spells',function(){
		it('should get summoner spell list',function(){
			this.timeout(10000);
			return lol.staticdata.getSummonerSpellList().should.eventually.be.an('Object');
		});
		it('should get all summoner spells in EU West with all data',function(){
			this.timeout(10000);
			return lol.staticdata.getSummonerSpellById(lol.SUMMONER_SPELL_INFO_TO_RETRIEVE.ALL, null, null, lol.REGION.EU_WEST).should.eventually.be.an('Object');
		});	
		it('should get all data for AP Quint',function(){
			return lol.staticdata.getAllSummonerSpellData(5235).should.eventually.be.an('Object');
		});
	});

	describe('Versions',function(){
		it('should get version data',function(){
			this.timeout(1000);
			return lol.staticdata.getVersions().should.eventually.be.an('Array');
		});
	});
});