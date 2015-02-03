var r = require('./fizzbuzz.js').q;
var assert = require('assert');
var test = {};
exports.test = test;

test['fizzbuzz responds fizz when number is divisible by fizz'] = function(){
	assert.equal(r.checkFizzBuzz(2,2,3), 'fizz');
	assert.equal(r.checkFizzBuzz(26,2,3), 'fizz');
	assert.notEqual(r.checkFizzBuzz(9,2,3), 'fizz');
	assert.notEqual(r.checkFizzBuzz(8,2,3), 'buzz');
};

test['fizzbuzz responds buzz when number is divisible by buzz'] = function(){
	assert.notEqual(r.checkFizzBuzz(6,2,3), 'buzz');
	assert.equal(r.checkFizzBuzz(15,2,3), 'buzz');
};

test['fizzbuzz responds fizzbuzz when number is divisible by both fizz and buzz']  = function(){
	assert.equal(r.checkFizzBuzz(66,2,3), 'fizzbuzz');
	assert.notEqual(r.checkFizzBuzz(11,2,3), 'fizzbuzz');
	assert.notEqual(r.checkFizzBuzz(14,2,3), 'fizzbuzz');
};

test['fizzbuzz responds with the number when number is neither divisible by fizz nor buzz'] = function(){
	assert.equal(r.checkFizzBuzz(17,2,3), 17);
	assert.notEqual(r.checkFizzBuzz(37,2,3), 'fizzbuzz');
};


