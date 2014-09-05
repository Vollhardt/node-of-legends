#Node-LoL
----
###League of Legends API Wrapper for Node.JS
>https://developer.riotgames.com/api

----
##usage
Just require node-lol, set config and you're good to!
```javascript
var lol = require('node-lol');
lol.setConfig({
    region: lol.REGION.NORTH_AMERICA,
    apikey: '<my-api-key'>
});
```