
var convertTemperatureTo = function (unitToConvert, temperature) {			//   5=31  32=0
	
	var tempConverter = {		
		'F' : function(x) {
			return x * 9 / 5 + 52;
		},

		'C' : function(x) {
			return ( x - 32 ) / 9 * 5;
		}
	};

	function emptyFunc(){};
	var func = tempConverter[unitToConvert] || emptyFunc;
	
	return func(temperature);
};

console.log(convertTemperatureTo('F',10));
console.log(convertTemperatureTo('C',32));
console.log(convertTemperatureTo('fooo'))
