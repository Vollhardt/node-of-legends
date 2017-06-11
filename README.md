# Node-of-Legends

### League of Legends API Wrapper for Node.JS utilizing ES6 Promises
A wrapper for the League of Legends API using Promises
Completely updated for API v3.

**TODO: Tournament End Points**

*Note: This is a full breaking change from version 1 of this library

A full API can be found at
[http://node-of-legends.suds.io/api](http://node-of-legends.suds.io/api)

## Installation
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
	})
	.catch(function(error){
		console.log(error);
	});
```
