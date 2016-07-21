
var numbers= [1,2,3,4,5,6,7,15,90];
var divisibleby5 = function(x){
	return (x % 5 == 0);
};

function find_divisible_by_5(arr,funref){
	var newArray = [];
	arr.forEach(function(x){
		if(funref(x))
			newArray.push(x);
	});
 console.log(newArray);
}
find_divisible_by_5(numbers,divisibleby5);

console.log('----------------------------')


var array = [1,2,3,4,5,6];
function say_hii(x){
	return x+'hii';
};

var mymap = function(arry,fun) {
	var new1 = [];
	arry.forEach(function(x){
	 	new1.push(fun(x));
	 });
 	console.log(new1);
};
mymap(array,say_hii);

console.log('------------------------------')


function increment(data){ return data+1;}

var increment_1 = function(arr,func){
	var new2 = [];
	arr.forEach(function(data){
		new2.push(func(data));
	});
	console.log(new2);
};
increment_1(array,increment);