/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./obj/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./obj/core/game-object.js":
/*!*********************************!*\
  !*** ./obj/core/game-object.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar vector_3_1 = __webpack_require__(/*! ./vector-3 */ \"./obj/core/vector-3.js\");\nvar GameObject = (function () {\n    function GameObject() {\n        console.log('Creating game object');\n        this.position = new vector_3_1.Vector3();\n        this.children = [];\n    }\n    GameObject.prototype.addChild = function (go) {\n        this.children.push(go);\n    };\n    return GameObject;\n}());\nexports.GameObject = GameObject;\n\n\n//# sourceURL=webpack:///./obj/core/game-object.js?");

/***/ }),

/***/ "./obj/core/vector-2.js":
/*!******************************!*\
  !*** ./obj/core/vector-2.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Vector2 = (function () {\n    function Vector2() {\n        this.x = 0;\n        this.y = 0;\n    }\n    return Vector2;\n}());\nexports.Vector2 = Vector2;\n\n\n//# sourceURL=webpack:///./obj/core/vector-2.js?");

/***/ }),

/***/ "./obj/core/vector-3.js":
/*!******************************!*\
  !*** ./obj/core/vector-3.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar vector_2_1 = __webpack_require__(/*! ./vector-2 */ \"./obj/core/vector-2.js\");\nvar Vector3 = (function (_super) {\n    __extends(Vector3, _super);\n    function Vector3() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.z = 0;\n        return _this;\n    }\n    return Vector3;\n}(vector_2_1.Vector2));\nexports.Vector3 = Vector3;\n\n\n//# sourceURL=webpack:///./obj/core/vector-3.js?");

/***/ }),

/***/ "./obj/main.js":
/*!*********************!*\
  !*** ./obj/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar game_object_1 = __webpack_require__(/*! ./core/game-object */ \"./obj/core/game-object.js\");\nvar mc;\nvar world = new game_object_1.GameObject();\nvar hero = new game_object_1.GameObject();\nworld.addChild(hero);\nconsole.log('Hello World!!');\n\n\n//# sourceURL=webpack:///./obj/main.js?");

/***/ })

/******/ });