"use strict";
exports.__esModule = true;
var states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Washington', capital: 'DC' }
];
for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
    var state = states_1[_i];
    console.log(state.capital);
}
var a = 4;
console.log(a);
function add(a, b) {
    return a + b;
}
console.log(concatenate('hola', null));
function concatenate(a, b) {
    return a.toLowerCase() + b.toLowerCase();
}
