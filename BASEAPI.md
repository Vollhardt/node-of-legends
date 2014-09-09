# Welcome to Node-LoL's API
The *official* API of the unofficial Node.JS wrapper for Riot's League Of Legend's [API](http://developer.riotgames.com)!
###Installation
```
npm install node-lol
```

##Usage
Just require node-lol, set config and you're good to go!
```javascript
var lol = require('node-lol');
lol.setConfig({
    region: lol.REGION.NORTH_AMERICA,
    apikey: '<my-api-key>'
});
```
That's it.  It's all setup now.
Want to pull all Champion data?!
Super easy:
```javascript
lol.static.getAllChampData(function(error, data){
    console.log(data);
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
lol.static.getChampionList(dataTypesToRetrieve, mapDataById, locale, version, region, function(error, data){
    console.log(data);
});
```

#Submodules
All of the API calls are divided into the same logical groups that Riot has chosen for their modules.
##Summoner
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

##Game
Game information contains only one thing...

BUT YOU WANT IT!

**Recent game info**
```javascript
var gameApi= lol.game;
```
Available Data:
- Recent Game History

Full Game API [here](module-game.html)

##Match History
Need longer match history for ranked queues?

The match history API is your ticket.
Contains all information from season 3 on for all ranked queues.
```javascript
var matchHistoryApi= lol.matchhistory;
```
Available Data:
- Ranked Queue Match Lists

Full Match History API [here](module-matchhistory.html)

##Match
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

##Stats
Here is it.  The big Kahuna.

Stats. nuff said.
```javascript
var statsAPI= lol.stats;
```

Available Data(Ranked Queues Only)
- Statistical summary information by Summoner
- Aggregate ranked stats by Summoner and by Champion


Full Statistical API [here](module-stats.html)

##Team
Ranked Team information.

```javascript
var teamAPI= lol.team;
```
Available Data:
- Roster
- Match History
- Roster History

##League
Information about Different Leagues around the [League of Legends](http://www.leagueoflegends.com) ranked universe

```javascript
var leagueApi= lol.league;
```
Available Data:
- Challenger League info by region
- Leagues Summoners are in
- Leagues Teams are in

Full League API [here](module-league.html)

##Static
Free static data!

**All calls to this API do NOT count against your rate limit**

```javascript
var staticApi= lol.static;
```
Available Data:
- Champions (spells, lore, hp/mp, resource type, etc)
- Items (cost, build trees, stats, etc)
- Masteries (names, stats, etc)
- Runes (cost, combines, stats, etc)
- Summoner Spells (usable maps, cooldowns, etc)
- Realm Data
- Version Data

Full Static API [here](module-static.html)


##Champion Flags
Not the most thrilling information, but important none-the-less.
```javascript
var champFlagsApi= lol.championflags;
```
Available Data:
- Free Champions
- Bot Enhabled
- Enabled in Ranked

Full Champion Flag API [here](module-championflags.html)
