var loltaco = require('./node-lol.js');
var utils = require('./utils.js');

function printCallback(error, data){
    console.log(error);
    console.log(data);
}
//static.getChampionList({},printCallback);
//loltaco.static.getChampionById(34,{},printCallback);

//static.getItemList({},printCallback);
//static.getMasteryList({},printCallback);

//static.getRealmData({},printCallback);
//static.getVersions({},printCallback);
//
//console.log(utils.isFunction(printCallback));
//console.log(utils.isFunction("l"));
//console.log(utils.isFunction({}));
//console.log(utils.isFunction({make: 'l'}));

var arr = [1,2,3];
var nonarr = 34;
var arr2 = [];
arr2.push(arr);
console.log(arr);
console.log(nonarr);
//arr = nonarr;
console.log(Array.isArray(arr));
console.log(Array.isArray(nonarr));
console.log(Array.isArray(arr2));