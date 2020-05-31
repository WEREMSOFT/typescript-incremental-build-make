import { MyClass } from "./my-class";
import { GameObject } from "./core/game-object";
import { World } from "./core/world";
import { Sprite } from "./core/sprite";

const states = [
    {name: 'Alabama', capital: 'Montgomery'},
    {name: 'Washington', capital: 'DC'}
];

for (const state of states){
    console.log(state.capital);
}

let a = 4;
console.log(a);

function add(a: number, b: any){
    return a + b;
}

console.log(concatenate('hola', null));

function concatenate(a: string, b: string | null){
    return a.toLowerCase() + b!.toLowerCase();
}