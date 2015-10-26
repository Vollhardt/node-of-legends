#Node-LoL

###League of Legends API Wrapper for Node.JS
> Find Riot's official API at:
> https://developer.riotgames.com/api

##Installation
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
	})
	.catch(function(error){
		console.log(error);
	})
;
```

##API Reference
A full API can be found at
http://node-lol.suds.io/api
