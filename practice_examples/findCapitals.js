var Countries = ['India','England','Pakistan','SriLanka','Australia','America'];
var Capitals = ['New Delhi','London','Islamabad','Kolambo','Melbourne','Washington D.C'];

function findCapital(country){
	var capital;
	Countries.forEach(function(element,index){
	if(element.toUpperCase() == country.toUpperCase())
		 capital = Capitals[index];						
	});
	return capital;												
};														
console.log(findCapital('eNglAnd'));

var showCapital = function(country){
	var countries = [['India','Delhi'],['England','London'],['Pakistan','Islamabad'],['SriLanka','Colambo'],
				['Australia','Melbourne'],['America','Washington']];
	var capital;	
	countries.forEach(function (c){
		(c[0] == country) && (capital = c[1]);
	});
	return capital;
};
console.log(showCapital('India'));


var findCap = function(country){
	countryObj = {India:'Delhi',Bangladesh:'Dhaka'};
	return countryObj[country];
};
console.log(findCap('Bangladesh'));