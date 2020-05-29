"use strict";
exports.__esModule = true;
var vector_3_1 = require("./vector-3");
var GameObject = (function () {
    function GameObject() {
        console.log('Creating game object');
        this.position = new vector_3_1.Vector3();
        this.children = [];
    }
    GameObject.prototype.addChild = function (go) {
        this.children.push(go);
    };
    return GameObject;
}());
exports.GameObject = GameObject;
