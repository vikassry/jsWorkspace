assert = require('assert');
var test = {};
exports.test = test;

var find_Longest = function(array){
	if(!array || array.length == 0 || typeof(array[0]) =='number'|| array[0] =="")
		return 'John Smith';

	return array.reduce(function(x,y){
		return (x.length > y.length) ? x : y;
	});
};

test.gives_longest_string_when_array_of_strings_is_passed = function(){
	var people = ['jaya','costa','maa durge'];
	assert.equal(find_Longest(people),'maa durge');
};

test.gives_john_smith_when_empty_array_is_passed = function(){
	assert.equal(find_Longest([]),'John Smith');
};

test.gives_john_smith_when_empty_string_is_passed = function(){
	assert.equal(find_Longest(""),'John Smith');
};

test.gives_john_smith_when_nothing_is_passed = function(){
	assert.equal(find_Longest(),'John Smith');
};

test.gives_john_smith_when_array_of_numbers_is_passed = function(){
	people = [1,2,3,4];
	assert.equal(find_Longest(people),'John Smith')
};