var createCounter = function(){
	var count = 0;
	var result = {
		increment:function(){return ++count;},
		reset:function(){count = 0;}
	};
	return result;
};

var counter = createCounter();
counter.increment();
var anotherCounter = createCounter();
console.log('counter',counter.increment());
console.log('anotherCounter',anotherCounter.increment());

var x = function(name){
	var z = {name:name};
	return z;
};

x1 = x('hello');
x2 = x('ola');
x2.name='popopop';
console.log(x1,x2);

x1 = "asas";
console.log(x1,x2);

var addOne = new Function("x","return x+1;");
console.log(addOne.toString(), addOne(2));

var ComplexNumber = function(xx,yy){
	this.x = xx;
	this.y = yy;
};

var n1 = new ComplexNumber(2,3);

console.log(n1,ComplexNumber.toString());

var Counter = function(count){
	this.increment = function(){return ++count;};
	this.reset = function(){count=0};
};

var nc = new Counter(3);
var ncc = new Counter(1);
console.log(nc.increment(),ncc.increment());

