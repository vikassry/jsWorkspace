var names = ['vikash','suryavanshi','jeevan'];
var numbers = [1,2,3,4,65];

var add_elements = function(array){
	var max = array.reduce(function(pv,cv){
		return(pv.length > cv.length) ? pv : cv;
	});
	return max;
};
console.log(add_elements(names));
console.log('-----------------------------');


var red = numbers.reduce(function(x,y){
	return x + y;
 }, 5);
console.log(red);
console.log('-----------------------------');


var arrofArr = [[1,2],[3,4],[5,6],[7,8]];
var flatten = function(arr){
	return arr.reduce(function(x,y){
		return (x.concat(y));
	});
};
console.log(flatten(arrofArr));
console.log('-----------------------------');


function ff(x,y){
	y.forEach(function(a){
		x.push(a);
	});
	return x;
};
console.log(ff(arrofArr[0],arrofArr[1]));