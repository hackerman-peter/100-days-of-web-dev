//jshint esversion:6

var superheroes = require("superheroes");
var mySuperHeroName = superheroes.random();

var superVillains = require("supervillains");
var mySuperVillainName = superVillains.random();

console.log(mySuperHeroName + " vs." + mySuperVillainName);
