var assert = require('assert');
var test = {};

var createfunctions = function(count){
	var arr = [];
	for(var i=0;i<count;i++){
		arr[i] = (
			function(x){
				return function(){return x;}
			})(i);
	}
	return arr;
};
test.each_function_returns_respective_number = function(){
	var arr = createfunctions(5);
	assert.equal(arr[4](),4);
	assert.equal(arr[0](),0);
	assert.equal(arr[1](),1);
	assert.equal(arr[2](),2);
	assert.equal(arr[3](),3);
};
exports.test = test;