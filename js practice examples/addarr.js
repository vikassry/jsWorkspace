var a = [1,2,3];
var b = [3,2,1];
var c = [2,2,2];

var addTwoElements = function (x,y){
	result = [];
	x.forEach(function(data, i){
		result[i] = data + y[i];
	});
	return result;
};
console.log(addTwoElements(a,c));


var a = [1,3,5,8];
var star = function(data){
	var result ='';
	data.forEach(function(x){
		for(var i=0; i<x; i++){
			result = result +'*';
		};
		console.log(result);
	});
};
star(a);