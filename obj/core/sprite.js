"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var game_object_1 = require("./game-object");
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super.call(this) || this;
    }
    Sprite.prototype.update = function (delta) {
        console.log('updateando sprite');
    };
    Sprite.prototype.draw = function () {
        console.log('drawing sprite');
    };
    return Sprite;
}(game_object_1.GameObject));
exports.Sprite = Sprite;
