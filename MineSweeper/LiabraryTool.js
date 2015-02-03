var lib = {};
exports.lib = lib;

var create2DArray = function(row){
	var _2DArray = new Array();
	for(var i = 0; i<row; i++){
		_2DArray[i] = new Array();
	}
	return _2DArray;
};

var randomPositionCreator = function(size,range){
	var position=[];
	for(var i=0; i<size; i++){
		var number = parseInt(Math.random().toFixed(2)*100);
		number<range &&position.every(function(p){return p!=number}) ? position.push(number) : i--;	
	}
	return position;
};
console.log(randomPositionCreator(6,35));
