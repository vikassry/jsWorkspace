var numbers = [1,2,3,4,5,6,7,15,90];

var divisibleby5 = function(number){
	return (number % 5 == 0);
};

function find_divisible_by_5(values,operation){
	var filtered_values = [];
	values.forEach(function(value){
		if(operation(value))
			filtered_values.push(value);
	});
 	return filtered_values;
};


var array = [1,2,3,4,5,6];
function say_hii(arg){
	return arg + 'hii';
};

var mymap = function(elements,operation) {
	var mapped = [];
	elements.forEach(function(element){
	 	mapped.push(operation(element));
	 });
	return mapped;
};


function increment(data){ return data + 1 };

var incrementBy_1 = function(values,operation){
	var incremented_values = [];
	values.forEach(function(data){
		incremented_values.push(operation(data));
	});
	return incremented_values;
};

console.log(find_divisible_by_5(numbers,divisibleby5))
console.log(mymap(array,say_hii));
console.log(incrementBy_1(array,increment));
