var ld = require('lodash');
var dice = [1,2,3,0];
console.log(ld.sample(dice)+ld.sample(dice) || 12);