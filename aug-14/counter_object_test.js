var assert = require('assert');
var test = {};

var createCounter = function(){
	var count = 0;
	var counter = {
		get count(){return count;},
		next:function(){return ++count;}
	};
	return counter;
};

test.counter_starts_with_0 = function(){
	var c = createCounter();
	assert.equal(c.count,0);
};
test.counter_increments_count = function(){
	var c = createCounter();
	var currentCount = c.next();
	assert.equal(c.next(),currentCount+1);
};
test.individual_counters_move_at_different_speeds = function(){
	var c1 = createCounter();
	var c2 = createCounter();
	c1.next();
	assert.equal(c1.count,1);
	assert.equal(c2.count,0);
};
test.counter_should_not_be_changed_from_outside = function(){
	var c = createCounter();
	c.count = 5;
	assert.equal(c.next(),1);
};

exports.test = test;