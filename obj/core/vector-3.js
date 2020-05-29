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
var vector_2_1 = require("./vector-2");
var Vector3 = (function (_super) {
    __extends(Vector3, _super);
    function Vector3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.z = 0;
        return _this;
    }
    return Vector3;
}(vector_2_1.Vector2));
exports.Vector3 = Vector3;
