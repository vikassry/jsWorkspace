var a = [1,2,3];
var b = [3,2,1];
var c = [2,2,2,0];

var addTwoElements = function (coll1,coll2){
	var longCollection = (coll1.length > coll2.length) ? coll1 : coll2;
	var shortCollection = (coll1.length <= coll2.length) ? coll1 : coll2;
	return longCollection.map(function(element , index){
		return shortCollection[index] && (element + shortCollection[index]) || element;
	});
};

d = [1,3,5,8];

var star = function(numbers){
	var result ='';
	numbers.forEach(function(number){
		result = result + createStars(number)
		console.log(result);
	});
};

function createStars(number){
	if(number <= 0) return "";
	return "*" + createStars(number - 1);
};

star(d);
console.log(addTwoElements(a,c));
