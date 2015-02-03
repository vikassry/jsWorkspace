var num = +process.argv[2];
var result=0;
while(num > 0){
	var digit = num %10;
	num = (num-digit)/10;
	result = result*10+digit;
}
console.log(result+'\n');


var num = +process.argv[2];
var reverse = function(n){
	console.log('start reverse(n:',n,')');
	if(n<10) return n;
	console.log('more than 1 digit');
	var digit = n %10;
	console.log('digit:',digit);
	var rest = (n - digit)/10;
	console.log('rest:',rest);
	var tser = reverse(rest);
	console.log('tser:',tser);
	var digits = Math.floor(Math.log(n)/Math.log(10));
	console.log('digits:',digits);
	return digit*Math.pow(10,digits)+tser;		
};
console.log(reverse(num));

 var reverse = function(number){
	if (number < 10) 
		return number;
	var digit = number%10;
	var number = (number - digit) / 10;
  	var power = 1 + Math.floor(Math.log(number) / Math.log(10));
  	return digit*Math.pow(10,power)+reverse(number); 
};
console.log(reverse(+process.argv[2]));