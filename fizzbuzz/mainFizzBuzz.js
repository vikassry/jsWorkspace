var r = require('./fizzbuzz.js').q;
var readline = require('readline');
var rl = readline.createInterface({input : process.stdin, output:process.stdout});

rl.setPrompt('Answer-> ');

console.log('--------------------------- FIZZBUZZ------------------------------');
count = 1;
limit = 15;

rl.prompt();
var fizz;
var buzz;
rl.question('Enter value of fizz and buzz', function(input){
	var fizzbuzzArray = input.trim().split('').filter(function(element){
		if(typeof(+element)=='number' && +element!=0 && String(+element)!='NaN')
			return true;
	});
	fizz = fizzbuzzArray[0];
	buzz = fizzbuzzArray[1];
	console.log('fizz: ',fizz)
	console.log("buzz: ",buzz);
	rl.prompt();
});

function fizzBuzz(input){
	if(input != r.checkFizzBuzz(count,fizz,buzz)){
		console.log('You Loose ..');
		rl.close();
	}
	if(count == limit){
		console.log('You Won !!!');
		return rl.close();
	}		
	if(input == r.checkFizzBuzz(count,fizz,buzz)){
		count++;
		rl.prompt();
	}
};

rl.on('line', fizzBuzz);
