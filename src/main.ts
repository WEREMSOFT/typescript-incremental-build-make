import { MyClass } from "./my-class";
import { GameObject } from "./core/game-object";

let mc: MyClass

let world = new GameObject();

let hero = new GameObject();

world.addChild(hero);

console.log('Hello World!!');