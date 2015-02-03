var calcm = require('./calc.js');
var calc = calcm.create();
var expression = process.argv[2];
//console.log(expression);
var parts = expression.split(' ');
calc.reset(+parts[0]);
if(parts[1] == '+')
	calc.add(+parts[2]);
console.log(calc.getValue());