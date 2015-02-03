
function performOperation(func,arg1,arg2){
	var Operations = {
		add:function(x,y){return x+y;},
		subtract:function(x,y){return x-y;},
		mul:function(x,y){return x*y;}, 
		div:function(x,y){return x/x;},
		"foo":function(x,y){return 'foo';}
	};
	//return Operations[func](arg1,arg2);
	function emty(){};
	var call = Operations[func] || emty;
	return call(arg1,arg2);
};

console.log(performOperation('add',3,2));
console.log(performOperation("subtract",3,2));
console.log(performOperation("mul",3,2));
console.log(performOperation("div",3,3));
console.log(performOperation("foo",3,2));
console.log(performOperation("BAAR",3,2));