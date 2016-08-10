var Fibonacci = function(n){
	if (n == 0)
		return 0;
	if (n == 1)
		return 1;
	return (Fibonacci(n-1) + Fibonacci(n-2));
};
console.log("Fibonacci",Fibonacci(+process.argv[2]));

//---------------------------------------------------------------------------

var resizeArray = function(arr,number,obj){
	function insert(number){
		if(number == 0) return;
		arr[number-1] = obj;
		insert(number-1);
	};
	insert(number);
	return arr;
};

var a = [];
var b = {x:1};
console.log('----',resizeArray(a,3,{x:2}));
delete b.x;
console.log('deletion: ',delete b);
console.log('after deleting b.x: ',b.x);
console.log('b.__proto__ => ',b.__proto__);


var Person = function(f_name,l_name){
	this.f_name = f_name; 
	this.l_name = l_name;
};

Person.prototype = {
	toString: function(){
		return [this.l_name,this.f_name].join(",");
	}, 
	truncateName: function(){
		return this.toString().substr(0,10);
	}, 
	upperCaseName: function(){ 
		return this.toString().toUpperCase();
	} 
};
var p = new Person("Amir","Khan");
console.log('prototype:\n ', p.__proto__);
console.log(p.prototype);
console.log('prototype:\n ', Person.prototype);