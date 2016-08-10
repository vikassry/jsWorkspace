var fruits=['apple','banana','papaya','chickoo'];

var find_length = function(x){
	var len = 0;
	x.forEach(function(data){
		len =len + data.length;
	});
	return len;
};
console.log(find_length(fruits));		//console.log(fruits.join('').length)

var numbers = [2,3,4,5,6,7,8,1,6,9,10];
function find_next(number){
	number.forEach(function(x){
		console.log(x+'->'+(x+1));//	console.log(x+(x+1).toString())
	});
};
find_next(numbers);	