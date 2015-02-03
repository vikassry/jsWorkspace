var assert = require('assert');
var test = {};

var shout = function(times){
	var result ='';
	for(var i=0;i<times;i++)
		result+=this.words;
	return result;
};
var dog = {
	words:'bow-wow'
};

var sum = function(a,b){
	return a+b;
};

var add = sum.bind(null);
var add5 = sum.bind(null,5);
var add6And7 = sum.bind(null,6,7);

test.invoke_funtion_in_4_ways = function(){
	assert.equal('bow-wow',shout.apply(dog,[1]));
	assert.equal('bow-wowbow-wow',shout.call(dog,2));
	dog.bark = shout;
	assert.equal('bow-wow',dog.bark(1));
	delete dog.bark;

	var dogsBark = shout.bind(dog);
	assert.equal('bow-wow',dogsBark(1));
};

test.adds_two_numbers = function(){
	assert.equal(3,sum(1,2));
	assert.equal(5,add(2,3));
	assert.equal(7,add5(2));
	assert.equal(13,add6And7());
};

exports.test = test;