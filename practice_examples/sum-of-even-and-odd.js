//node sum-of-even-and-odd.js 1,2,3,4,5,6,78,79,80
//sum of even is 170 and sum of odd is 88

var items = '1,2,3,4,5,6,78,79,80';
var toInt = function (number) {
	return +number;
};
var items = items.split(',')
var numbers = items.map(toInt);

var isEven = function(x){
	return x%2 === 0;
};

var isOdd = function(x){
	return !isEven(x);
};

var evens = numbers.filter(isEven);
var odds = numbers.filter(isOdd);

var accumulate = function(pv,cv){
	return pv+cv;
};

var evenSum = evens.reduce(accumulate);
var oddSum = odds.reduce(accumulate);

console.log('sum of even is',evenSum,'and sum of odd is',oddSum);