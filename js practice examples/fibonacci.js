var Fib = function(number){
	var first_no = 0, second_no = 1, array = [], i=0;
	function fibonaci(number) {	
		while(i < number){
			var next_no = first_no + second_no;
			array.push(next_no);
			first_no = second_no;
			second_no = next_no;
			i++;
		};
		array.unshift(0,1);
	};
	fibonaci(number);
	return array[number];
};
console.log(Fib(process.argv[2]));

//------------------------------------------------------------------------------------

var fibo = function(number){
 	var fib_array=[];
	function Fibonacci(n){
		if (n == 0)
			return 0;
		else if (n == 1)
			return 1;
		return (Fibonacci(n-1) + Fibonacci(n-2));
	};
	Fibonacci(number);
	arr = [0,1,2,3,4,5,6,7].map(Fibonacci);
	return arr[arr.indexOf(number)-1];
}
console.log(fibo(5));
//-------------------------------------------------------------------------------

var fib=function(number){
 	var fib_array=[];
 	var a=0, b=1;
 		if(number==1)
 			return a;
 		fib_array.push(a);
 		fib_array.push(b);
 		function fibonaci(a,b){
 			if(fib_array.length-1>number)
 				return;
 			fib_array.push(a+b);
 			return fibonaci(b,a+b);
 		}
 		fibonaci(a,b);
 		return fib_array[number];
 	};
 	console.log(fib(process.argv[2]));

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