var nodehun = require('./../build/Release/nodehun');
var fs = require('fs');
//var mctime = require('microtime');
unit = typeof mctime !== "undefined" ? "μs":"ms",
time = typeof mctime !== "undefined" ? mctime.now : Date.now;

var affbuf = fs.readFileSync(__dirname+'/dictionaries/en_US/en_US.aff');
var dictbuf = fs.readFileSync(__dirname+'/dictionaries/en_US/en_US.dic');
var dictbuf2 = fs.readFileSync(__dirname+'/dictionaries/en_CA/en_CA.dic');

var timeInit = time();
var dict = new nodehun(affbuf,dictbuf);
console.log('time to initialize dictionary class:',time() - timeInit,unit);


dict.spellSuggest('colour',function(a,b){console.log('"colour" without en_CA',a,b)});
var timeAdd = time();
dict.addDictionary(dictbuf2,function(added){
    console.log("dictionary added:",added);
    console.log('time to add dictionary:',time() - timeAdd, unit);
    dict.spellSuggest('colour',function(a,b){console.log('"colour" with en_CA',a,b)});
});
