var assert = require('assert');
var p = require('./practice.js').practice;
var test = {};

// function related tests. 
// The following tests are primarily there to help you understand functions 
var greater_than_5 = function(x) {
	return x>5;
}

test.adds_two_positive_numbers = function() {
	assert.equal(p.add(2,3),5);
};

test.adds_two_negative_numbers = function() {
	assert.equal(p.add(-1,-2),-3);
};

test.returns_number_when_only_one_argument_provided = function() {
	assert.equal(p.add(5),5);
};

test.parenthesize_a_string = function() {
	assert.equal(p.parenthesize("foobar"),"(foobar)");
}

test.comment_a_string = function() {
	assert.equal(p.comment("foobar"),"//foobar");
}

test.apply_comment_on_parenthesize = function() {
	assert.equal(p.apply("foobar",p.parenthesize,p.comment),"//(foobar)");
}

test.apply_parenthesize_on_comment = function() {
	assert.equal(p.apply("foobar",p.comment,p.parenthesize),"(//foobar)");
}

// array related tests
test.fetch_middle_element_of_even_sized_array = function() {
	var numbers = [1,2,3,4];
	assert.equal(p.middle_element(numbers),2);
}

test.fetch_middle_element_of_odd_sized_array = function() {
	var numbers = [1,2,3,4,5];
	assert.equal(p.middle_element(numbers),3);
}

// Use forEach to find common elements
test.common_elements_of_arrays = function() {
	var multiples_of_two = [2,4,6,8,10,12];
	var multiples_of_three = [3,6,9,12];
	
	assert.deepEqual(p.common_elements_of(multiples_of_two,multiples_of_three),[6,12]);
}

test.common_elements_of_returns_empty_when_nothing_common = function() {
	var fruits = ["Apple", "Mango", "Banana"];
	var vegetables = ["Tomato","Brinjal","Potato"];
	
	assert.deepEqual(p.common_elements_of(fruits,vegetables),[]);
}

test.contains_even_numbers_returns_true_when_even_present = function() {
	var numbers = [2,3,5,7,11];
	
	assert.equal(p.contains_even_numbers(numbers),true);
}

test.contains_even_numbers_returns_false_when_even_not_present = function() {
	var numbers = [3,5,7,11];
	
	assert.equal(p.contains_even_numbers(numbers),false);
}

test.every_returns_true_when_every_element_passes_a_condition = function() {
	var numbers = [6,9,100];
	
	assert.equal(p.every(numbers,greater_than_5),true);
}

test.every_returns_false_when_any_element_fails_a_condition = function() {
	var numbers = [5,9,100];
	
	assert.equal(p.every(numbers,greater_than_5),false);
}

test.some_returns_true_when_some_element_passes_a_condition = function() {
	var numbers = [2,3,6];
	
	assert.equal(p.some(numbers,greater_than_5),true);
}

test.every_returns_false_when_all_element_fail_a_condition = function() {
	var numbers = [2,3,4];
	
	assert.equal(p.some(numbers,greater_than_5),false);
}

// Only Filter/Map/Reduce for these
test.counts_the_number_of_vowels_in_an_array_of_strings = function() {
	var names = ["John", "Jaani", "Janardhan", "Umesh"];
	
	assert.equal(p.count_vowels(names),9);
}

test.find_the_largest_word_among_given_words = function() {
	var names = ["John", "Jaani", "Janardhan", "Umesh"];

	assert.equal(p.largest_word_of(names),"Janardhan");
}

test.find_words_that_only_begin_with_consonants = function() {
	var names = ["John", "Jaani", "Janardhan", "Umesh"];

	assert.deepEqual(p.words_beginning_with_consonant(names),["John","Jaani","Janardhan"])
}

test.find_words_that_only_begin_with_consonants_without_case = function() {
	var names = ["John", "jaani", "Janardhan", "Umesh"];

	assert.deepEqual(p.words_beginning_with_consonant(names),["John","jaani","Janardhan"])
}

test.separate_splits_an_array_based_on_value = function() {
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	
	assert.deepEqual(p.separate(numbers,5),[[1,2,3,4],[5,6,7,8,9,10]]);
}

test.apply_many_applies_a_stack_of_functions_in_reverse_order = function() {
	var name = "Obelix";
	
	assert.equal(p.apply_many(name,[p.parenthesize,p.comment]),"(//Obelix)");
}

exports.test = test;