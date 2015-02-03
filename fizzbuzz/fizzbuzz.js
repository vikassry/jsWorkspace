var p = {};
exports.q = p;

p.checkFizzBuzz = function(number,fizz,buzz){
	if(number%fizz == 0 && number%buzz == 0) 
		return 'fizzbuzz';
	if(number % fizz == 0) 
		return 'fizz';
	if(number % buzz == 0) 
		return 'buzz';	
	return number;
};

//console.log(p.checkFizzBuzz(+process.argv[4])) ;