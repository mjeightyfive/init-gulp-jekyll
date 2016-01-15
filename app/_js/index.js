'use strict';

var moduleA = require('./modules/moduleA.js');
var moduleB = require('./modules/moduleB.js');

var a = moduleA.init();
var b = moduleB.init();

console.log('a', a);
console.log('b', b);
