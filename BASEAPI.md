# Welcome to node-of-legends's Promises API
The *official* API of the unofficial Node.JS wrapper for Riot's League Of Legend's [API](http://developer.riotgames.com) utilizing Promises!
### Installation
```
npm install node-of-legends
```

### Usage
Just require node-of-legends, set config and you're good to go!
```javascript
var lol = require('node-of-legends');
lol.setConfig({
    region: lol.REGION.NORTH_AMERICA,
    apikey: '<my-api-key>'
});
```
That's it.  It's all setup now.
Want to pull all Champion data?!
Super easy:
```javascript
lol.staticdata.getAllChampData()
	.then(function(data){
    	console.log(data);
	})
	.catch(function(error){
		console.log(error);
	});
```
Want more control directly over the Riot API?
That's also available!
```javascript
var dataTypesToRetrieve = [];
var mapDataById = true;
var locale = 'en_US';
var region = 'NA';
var version = '4.13.1';
lol.staticdata.getChampionList(dataTypesToRetrieve, mapDataById, locale, version, region)
	.then(function(data){
    	console.log(data);
	});
```


* * * 


# Modules
All of the API calls are divided into the same logical groups that Riot has chosen for their modules.

---

### [Champion](module-champion.html)
Not the most thrilling information, but important none-the-less.
```javascript
var championApi = lol.champion;
```
Available Data:
- Free Champions
- Bot Enhabled
- Enabled in Ranked

Full Champion API [here](module-champion.html)

---

### [Champion Mastery](module-championmastery.html)
Hear ye, hear ye! Champion Mastery Information for sale(free).
```javascript
var championMasteryApi = lol.championmastery;
```
Available Data:
- Champion Mastery Data for any Summoner
- Summoner's Total Mastery Points

Full Champion Mastery API [here](module-championmastery.html)

---

### [Game](module-game.html)
Game information contains only one thing...

BUT YOU WANT IT!

**Recent game info**
```javascript
var gameApi = lol.game;
```
Available Data:
- Recent Game History

Full Game API [here](module-game.html)

---

### [League](module-league.html)
Information about Different Leagues around the [League of Legends](http://www.leagueoflegends.com) ranked universe

```javascript
var leagueApi = lol.league;
```
Available Data:
- Challenger League info by region
- Leagues Summoners are in

Full League API [here](module-league.html)

---

### [Match](module-match.html)
Now you've got all your match/game IDs.

But you need all the related information for them.

the **match API** has got you covered.
```javascript
var matchApi = lol.match;
```
Available Data:
- Duration
- Timeline Information **new**
- Summoners
- Bans
- Champions
- Individual counts for: Wards place, wards killed, damage given/takem etc

Full Match API [here](module-match.html)

---

### [Match List](module-matchlist.html)
Need longer match history for ranked queues?

The match list API is your ticket.
Contains all information from season 3 on for all ranked queues.
```javascript
var matchListApi = lol.matchlist;
```
Available Data:
- Ranked Queue Match Lists

Full Match List API [here](module-matchlist.html)

---

### [Runes](module-runes.html)
Need Rune Page information for your Favorite Streamoes?

Don't worry, the Runes API is HOT TO TROT
Contains all the information you crave to make your rune pages just like the pros
```javascript
var runesApi = lol.runes;
```
Available Data:
- Rune Page Information
- Current Rune Page Information

Full Runes API [here](module-runes.html)

---

### [Spectator](module-spectator.html)
Want to get some specbate information?
Then hit up this saaaaweeeet API

```javascript
var spectatorApi = lol.spectator;
```
Available Data:
 - Live Game Data (including, but not limited to)
   - Banned/Picked champs
   - General Game information
   - Observer Encryption Key
 - Featured Games by Region
 - Observer Encryption Key

Full Spectator API [here](module-spectator.html)

---

### [Static](module-staticdata.html)
Free static data!

**All calls to this API do NOT count against your rate limit**

```javascript
var staticApi = lol.staticdata;
```
Available Data:
- Champions (spells, lore, hp/mp, resource type, etc)
- Items (cost, build trees, stats, etc)
- Masteries (names, stats, etc)
- Runes (cost, combines, stats, etc)
- Summoner Spells (usable maps, cooldowns, etc)
- Realm Data
- Version Data

Full Static API [here](module-staticdata.html)

---

### [Stats](module-stats.html)
Here is it.  The big Kahuna.

Stats. 'nuff said.
```javascript
var statsAPI = lol.stats;
```

Available Data(Ranked Queues Only)
- Statistical summary information by Summoner
- Aggregate ranked stats by Summoner and by Champion


Full Statistical API [here](module-stats.html)

---

### [Status](module-status.html)
Check on the League Shards' status!

```javascript
var serverStatus = lol.status;
```

Available Data:
 - Hostnames
 - Regions
 - Services
 - Status

Full Status API [here](module-status.html)

---

### [Summoner ](module-summoner.html)
Need Summoner data?!

Then this is the place for you:
```javascript
var summonerApi = lol.summoner;
```
Available Data:
- Summoner Name/IDs
- Account IDs

Full Summoner API [here](module-summoner.html)

---

