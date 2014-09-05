#Node-LoL

###League of Legends API Wrapper for Node.JS
> Find Riot's official API at:
> https://developer.riotgames.com/api

##Usage
Just require node-lol, set config and you're good to!
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
