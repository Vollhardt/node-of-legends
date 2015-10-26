# Welcome to Node-of-Legends's Promises API
The *official* API of the unofficial Node.JS wrapper for Riot's League Of Legend's [API](http://developer.riotgames.com) utilizing Promises!
### Installation
```
npm install node-of-legends
```

## Usage
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
	})
;
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

# Modules
All of the API calls are divided into the same logical groups that Riot has chosen for their modules.

## Champions
Not the most thrilling information, but important none-the-less.
```javascript
var championsApi= lol.champions;
```
Available Data:
- Free Champions
- Bot Enhabled
- Enabled in Ranked

Full Champion API [here](module-champions.html)

## Current Game (Spectator)
Want to get some specbate information?
Then hit up this saaaaweeeet API

```javascript
var currentGameApi = lol.currentgame;
```
Available Data:
 - Banned/Picked champs
 - General Game information
 - Observer Encryption Key

## Featured Games
Games featured by Riot's PVP.net client...Need them?
Sure you do, why? I still don't know the answer to that, BUT NOW YOU CAN HAVE THEM!!

```javascript
var featuredGamesApi = lol.featuredgames;
```

Available Data:
 - Featured Game information
 - Observer Encryption Key

## Game
Game information contains only one thing...

BUT YOU WANT IT!

**Recent game info**
```javascript
var gameApi= lol.game;
```
Available Data:
- Recent Game History

Full Game API [here](module-game.html)

## League
Information about Different Leagues around the [League of Legends](http://www.leagueoflegends.com) ranked universe

```javascript
var leagueApi= lol.league;
```
Available Data:
- Challenger League info by region
- Leagues Summoners are in
- Leagues Teams are in

Full League API [here](module-league.html)

## Match
Now you've got all your match/game IDs.

But you need all the related information for them.

the **match API** has got you covered.
```javascript
var matchApi= lol.match;
```
Available Data:
- Duration
- Timeline Information **new**
- Summoners
- Bans
- Champions
- Individual counts for: Wards place, wards killed, damage given/takem etc

Full Match API [here](module-match.html)

## Match List
Need longer match history for ranked queues?

The match list API is your ticket.
Contains all information from season 3 on for all ranked queues.
```javascript
var matchListApi= lol.matchlist;
```
Available Data:
- Ranked Queue Match Lists

Full Match List API [here](module-matchlist.html)

## Static
Free static data!

**All calls to this API do NOT count against your rate limit**

```javascript
var staticApi= lol.staticdata;
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

## Stats
Here is it.  The big Kahuna.

Stats. nuff said.
```javascript
var statsAPI= lol.stats;
```

Available Data(Ranked Queues Only)
- Statistical summary information by Summoner
- Aggregate ranked stats by Summoner and by Champion


Full Statistical API [here](module-stats.html)

## Status
Check on the League Shards' status!

```javascript
var serverStatus = lol.status;
```

Available Data:
 - Hostnames
 - Regions
 - Services
 - Status

## Summoner
Need Summoner data?!

Then this is the place for you:
```javascript
var summonerApi = lol.summoner;
```
Available Data:
- Summoner Name/IDs
- Rune Lists
- Mastery Lists

Full Summoner API [here](module-summoner.html)

## Team
Ranked Team information.

```javascript
var teamAPI= lol.team;
```
Available Data:
- Roster
- Match History
- Roster History
