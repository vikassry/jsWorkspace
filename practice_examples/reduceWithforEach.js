var names = ['vikash','suryavanshi','jeevan'];
var numbers = [1,2,3,4,65];

var findMax = function(array){
	var max = array.reduce(function(pv,cv){
		return(pv.length > cv.length) ? pv : cv;
	});
	return max;
};
console.log(findMax(names));

var arrofArr = [[1,2],[3,4],[5,6],[7,8]];
var flatten = function(arr){
	return arr.reduce(function(x,y){
		return (x.concat(y));
	});
};
console.log(flatten(arrofArr));
