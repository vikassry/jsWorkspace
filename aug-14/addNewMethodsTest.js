var assert = require('assert');
var test = {};

(0).__proto__.times = function(operation){
	for(var i=0;i<this;i++)	
		operation(i);	
};

var generateArray = function(till){
	var result = [];
	for(var i=this+0;i<till;i++)
		result.push(i);
	return result;
};
(0).__proto__.to = generateArray;

(0).__proto__.sqrt = function(){
	return Math.sqrt(this);
};

Object.defineProperty((0).__proto__,'squareRoot',{
	get:function(){return Math.sqrt(this);}
});

Object.defineProperty(''.__proto__,'last',{
	get:function(){return this[this.length-1];}
});

test.to_method_on_a_number_generates_an_array_till_a_given_limit = function(){
	assert.deepEqual((51).to(55),[51,52,53,54]);
	assert.deepEqual((1).to(3),[1,2]);
};

test.sqrt_method_on_number_gives_square_root = function(){
	assert.equal((4).sqrt(),2);
};

test.squareRoot_property_on_number_gives_square_root = function(){
	assert.equal((4).squareRoot,2);
};

test.times_method_on_number_does_the_given_operation_for_that_many_times = function(){
	var text ='';
	var talk = function(){text+='talk';};
	(5).times(talk);
	assert.equal(text,'talktalktalktalktalk');

	var left=10;
	(10).times(function(){left--;});
	assert.equal(left,0);

	//(5).times(function(n){console.log('this is time ',n)});

};

test.last_property_on_string_gives_last_character = function(){
	assert.equal('Hella'.last,'a');
};

exports.test = test;