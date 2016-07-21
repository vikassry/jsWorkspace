
var practice = {

	add : function(numbers, numberToAdd){
		return numbers.map(function(n){return n+numberToAdd});
	},
	
	impose : function(array1, array2){
		var sum = [];
		array1.forEach(function(element,index){
			sum[index] = element + (array2[index] || 0);
		});
		return sum;
	},

	decodeList : function(words){
		return this.reverseText(words.join(' '));
	},

	reverseText : function(word){
		return word.split('').reverse().join('');
	},

	getVowelCount : function(word){
		return (word.match(/[aeiou]/gi) || []).length;
	},

	findBestVowelWord : function(words){
		return words.reduce(function(prev_word, curr_word){
			return (practice.getVowelCount(prev_word) >= practice.getVowelCount(curr_word))
			 ? prev_word : curr_word;
		});
	},

	findWorstVowelWord : function(words){
		return words.reduce(function(prev_word, curr_word){
			return (practice.getVowelCount(prev_word) <= practice.getVowelCount(curr_word))
			 ? prev_word : curr_word;
		});
	},

	getMatchingCurrencies : function(countriesWithCurrency, countries){
		return countries.map(function(country){
			return countriesWithCurrency[country] || 'missing';
		});
	},

	getCountryCount : function(countriesWithCurrency){
		return Object.keys(countriesWithCurrency).length;
	},

	getCountries : function(countriesWithCurrency){
		return Object.keys(countriesWithCurrency).join(";");
	},

	getCountry : function(countriesWithCurrency, currency){
		var resultCountry = 'missing';
		Object.keys(countriesWithCurrency).forEach(function(country){
			countriesWithCurrency[country] == currency && (resultCountry = country);
		});
		return resultCountry;	
	},

	tidyText : function(sentence){
		return sentence.trim();
	},

	reverseWords : function(sentence){
		return sentence.split(" ").map(function(word){
			return practice.reverseText(word);
		}).join(" ");
	}
	
};
	
exports.practice = practice;