var nestedClosure = function(a){
	return function func1(b)
	{
		return function func2(c){
			return a+b+c;
		};
	};
};
console.log(nestedClosure(2)(3)(4));