var assert = require('assert');
var test = {};

var xx = (function(){
	console.log('once');
	return function(){return 5};
})();
console.log(xx());

var uniqueCount = (function(){
	var count = 0;
	return function(){
		return count++;
	};
})();

test.unique_counter_start_with_0_and_next_gives_1 = function(){
	count = 99;
	assert.equal(uniqueCount(),0);
	assert.equal(uniqueCount(),1);
	assert.equal(uniqueCount(),2);
};

exports.test = test;