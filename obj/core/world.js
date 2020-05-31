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
var updateable_1 = require("./updateable");
var drawable_1 = require("./drawable");
var World = (function (_super) {
    __extends(World, _super);
    function World() {
        return _super.call(this) || this;
    }
    World.prototype.update = function (delta) {
        console.log('children length on update', this.children.length);
        for (var i = 0; i < this.children.length; i++) {
            // TODO: Something went wrong here
            if (this.children[i] instanceof updateable_1.Updateable) {
                this.children[i].update(delta);
            }
        }
    };
    World.prototype.draw = function () {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i] instanceof drawable_1.Drawable) {
                this.children[i].draw();
            }
        }
    };
    return World;
}(game_object_1.GameObject));
exports.World = World;
