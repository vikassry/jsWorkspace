var assert = require('assert');
var test = {};
var myMax = function(){
	var max = arguments[0];
	var length=arguments.length;
	for(var i=1;i<length;i++){		
		max = max < arguments[i]? arguments[i]:max;
	}
	return max;
};

var myFun = function(a){
	return (a && 'world'+arguments[arguments.length-1])||'hello';	
};

test.finds_the_max_of_1_number = function(){
	assert.equal(1,myMax(1));
};
test.finds_the_max_of_2_numbers = function(){
	assert.equal(2,myMax(1,2));
};
test.finds_the_max_of_10_numbers = function(){
	assert.equal(33,myMax(1,2,5,33,5,2,5,7,-1,2));
};

test.gives_hello_if_no_args_passed = function(){
	assert.equal('hello',myFun());
};
test.gives_world_and_arg_if_one_arg_is_passed = function(){
	assert.equal('world1',myFun(1));
	assert.equal('worldhello',myFun('hello'));
};
test.gives_world_and_last_arg_if_more_than_one_arg_is_passed = function(){
	assert.equal('world2',myFun(1,2));
	assert.equal('worldtoto',myFun('tata','toto'));
};

exports.test = test;