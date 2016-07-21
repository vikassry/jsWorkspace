var  myFunction = function(a){
	return function func1(b)
	{
		return function func2(c){
			return a+b+c;
		};
	};
};
console.log(myFunction(2)(3)(4));