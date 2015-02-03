var createCalculator = function(){
	var calcValue = 0;
	var calc = {
		reset:function(x){
			calcValue=x;	
		},
		getValue:function(){
			return calcValue;
		},
		add:function(x){
			calcValue += x;
		}

	};
	return calc;
};

exports.create = createCalculator;