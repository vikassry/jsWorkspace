var assert = require('assert')
var a = {};
var string = "Mahesh is Mahesh Dolly is not Tally Kaustav is tired of being called Talent show";

var find_frequency_of_words = function(str){
	var words = str.split(' ');
	var occurrance = {};
	words.forEach(function(word){
		occurrance[word] = occurrance[word] || 0;
		occurrance[word] += 1;
	}); 
	return occurrance;
};

console.log(find_frequency_of_words(string));