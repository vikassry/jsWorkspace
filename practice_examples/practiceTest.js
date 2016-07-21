var r = require('./practice.js').practice;
var assert = require('assert');
var test = {};

test.add_1_increments_allItems = function(){
	var x = [9,8,42,31,12];
	var y = [10,9,43,32,13];
	assert.deepEqual(r.add(x,1),y);
};

test.impose_adds_only_item_of_two_equal_sized_arrays = function(){
	var x = [3];
	var y = [6];
	var z = [9];
	assert.deepEqual(r.impose(x,y),z);
};

test.impose_adds_individual_items_of_two_equal_sized_arrays = function(){
	var x = [1,2,3];
	var y = [4,5,6];
	var z = [5,7,9];
	assert.deepEqual(r.impose(x,y),z);
};

test.reverseText_reverses_given_text = function(){
	var x = "hello.";
	var y = ".olleh";
	assert.equal(r.reverseText(x),y);
};

test.reverseText_reverses_given_text_with_spaces = function(){
	var x = "hello. hello.";
	var y = ".olleh .olleh";
	assert.equal(r.reverseText(x),y);
};

test.decodeList_decodes_the_text_written_in_reverse_in_list = function(){
	var x = ['.doog','si','sihT'];
	var y = "This is good.";
	var z = ['.doog','si','sihT'];
	assert.equal(r.decodeList(x),y);
};

test.getVowelCount_gives_the_count_of_vowels = function(){
	var x = 'morning';
	assert.equal(r.getVowelCount(x),2);
};

test.findBestVowelWord_finds_the_word_with_highest_number_of_vowels = function(){
	var x = ['Good','morning','is','one','with','bright','sky','and','orange','sun'];
	var y = 'orange';
	assert.equal(r.findBestVowelWord(x),y);
};

test.findWorstVowelWord_finds_the_word_with_least_number_of_vowels = function(){
	var x = ['Good','morning','is','one','with','bright','sky'];
	var y = 'sky';
	assert.equal(r.findWorstVowelWord(x),y);
};


test.getMatchingCurrencies_finds_currencies_for_given_countries = function(){
	var currencies = {'Algeria':'Dinar','Angola' :'Luanda', 'Benin':'CFA Franc','Botswana':'Pula','Burundi':'Rupie' };
	var countries = ['Botswana','Angola'];
	var ans = ['Pula','Luanda'];
	assert.deepEqual(r.getMatchingCurrencies(currencies,countries),ans);	
};

test.impose_adds_items_of_second_array_if_available = function(){
	var x = [1,2,3];
	var y = [4,5];
	var z = [5,7,3];
	assert.deepEqual(r.impose(x,y),z);
};

test.findWorstVowelWord_finds_the_first_word_with_least_number_of_vowels = function(){
	var x = ['A','good','sky','is','dry','or','wet'];
	var y = 'sky';
	assert.equal(r.findWorstVowelWord(x),y);
};

test.findBestVowelWord_finds_the_first_word_with_highest_number_of_vowels = function(){
	var x = ['Good','morning','is','one','with','bright','sky'];
	var y = 'Good';
	assert.equal(r.findBestVowelWord(x),y);
};

test.getCountryCount_gives_number_of_countries_in_list = function(){
	var currencies = {'Algeria':'Dinar','Angola' :'Luanda', 'Benin':'CFA Franc','Botswana':'Pula','Burundi':'Rupie' };
	assert.equal(r.getCountryCount(currencies),5);	
};

test.getCountries_gives_a_text_version_of_countries = function(){
	var currencies = {'Algeria':'Dinar','Angola' :'Luanda', 'Benin':'CFA Franc','Botswana':'Pula','Burundi':'Rupie' };
	var countries = 'Algeria;Angola;Benin;Botswana;Burundi';
	assert.deepEqual(r.getCountries(currencies),countries);	
};

test.getCountry_gives_the_country_of_the_currency = function(){
	var currencies = {'Algeria':'Dinar','Angola' :'Luanda', 'Benin':'CFA Franc','Botswana':'Pula','Burundi':'Rupie' };
	assert.deepEqual(r.getCountry(currencies,'Rupie'),'Burundi');	
};


test.tidyText_removes_extra_spaces_between_words = function(){
	var x = 'The world is a very wide space. ';
	var y = 'The world is a very wide space.';
	assert.deepEqual(r.tidyText(x),y);
};

test.reverseWords_reverses_words_in_sentance = function(){
	var x = 'The world is a very wide space. Or is it not?';
	var y = 'ehT dlrow si a yrev ediw .ecaps rO si ti ?ton';
	assert.deepEqual(r.reverseWords(x),y);
};

test.add_5_increments_allItems_by_5 = function(){
	var x = [9,8,42,31,12];
	var y = [14,13,47,36,17];
	assert.deepEqual(r.add(x,5),y);
};

test.impose_adds_items_only_if_present_in_first_array = function(){
	var x = [1,2];
	var y = [4,5,6];
	var z = [5,7];
	assert.deepEqual(r.impose(x,y),z);
};

test.getCountry_gives_the_missing_for_countries_missing__in_the_currencyList = function(){
	var currencies = {'Algeria':'Dinar','Angola' :'Luanda', 'Benin':'CFA Franc','Botswana':'Pula','Burundi':'Rupie' };
	assert.deepEqual(r.getCountry(currencies,'Dollar'),'missing');	
};

test.getMatchingCurrencies_informs_missing_for_absent_countries = function(){
	var currencies = {'Algeria':'Dinar','Angola' :'Luanda', 'Benin':'CFA Franc','Botswana':'Pula','Burundi':'Rupie' };
	var countries = ['Botswana','Angola','India'];
	var ans = ['Pula','Luanda','missing'];
	assert.deepEqual(r.getMatchingCurrencies(currencies,countries),ans);	
};

test.findBestVowelWord_finds_the_first_word_with_highest_number_of_vowels_ignoring_case = function(){
	var x = ['A','dry','sky','is','a','dry','sky'];
	var y = 'A';
	assert.equal(r.findBestVowelWord(x),y);
};

exports.test = test;
