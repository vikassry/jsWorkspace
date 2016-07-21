var myNewConstructor = function(func,arg){
	var _new = {};
	if(func.prototype){
		_new.__proto__ =  func.prototype;
		var constructor = func.bind(_new,arg);
		constructor();		
	}
	return _new;
};

var f = function(x){
	this.color=x;
};

f.prototype={
 	height:5.4
};

var c = myNewConstructor(f,'green');
console.log(c);