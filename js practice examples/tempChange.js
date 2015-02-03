var converTo = function(uniteToConver,temperature) {			//   5=31  32=0
		var ChangeTemp = {'F':function(x){return x*9/5+52;}, 'C':function(x){return (x-32)/9*5;}};
	//return ChangeTemp[uniteToConver](temperature);

	function emptyFunc(){};

	var func= ChangeTemp[uniteToConver] || emptyFunc;
	return func(temperature);
};

console.log(converTo('F',10));
console.log(converTo('C',32));
console.log(converTo('fooo'))