var assert = require('assert');
var calcm = require('./calc.js');
var t = {};

exports.test = t;
var calc = calcm.create();

t._has_1_when_reset_1 = function(){
	calc.reset(1);
	assert.equal(calc.getValue(),1);
};
t._has_0_when_created = function(){
	var calc = calcm.create();
	assert.equal(calc.getValue(),0);
};
t._has_0_when_added_0 = function(){
	calc.reset(0);
	calc.add(0);
	assert.equal(calc.getValue(),0);	
};
t._has_1_when_added_1 = function(){
	calc.reset(0);
	calc.add(1);
	assert.equal(calc.getValue(),1);	
};
t._has_2_when_1_is_added_to_1 = function(){
	calc.reset(1);
	calc.add(1);
	assert.equal(calc.getValue(),2);	
};

t._different_calc_have_different_values = function(){
	var a = calcm.create();
	a.reset(1);
	var b = calcm.create();
	b.reset(2);
	assert.equal(a.getValue(),1);
	assert.equal(b.getValue(),2);
};