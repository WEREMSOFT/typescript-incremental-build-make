"use strict";
exports.__esModule = true;
var game_object_1 = require("./core/game-object");
var mc;
var world = new game_object_1.GameObject();
var hero = new game_object_1.GameObject();
world.addChild(hero);
console.log('Hello World!!');
