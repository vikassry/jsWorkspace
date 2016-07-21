var fact = function(n){
	var fact = 1;
	var mult = 2;
	while(n > 0){
		fact = n*fact;
		n--;
	};
	return fact;
};
console.log(fact(process.argv[2]));


function factorial(numb){
	return (numb <= 0) ? 1 : numb * factorial(numb-1);
};
console.log(factorial(+process.argv[2]));