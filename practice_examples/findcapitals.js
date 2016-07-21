var Countries = ['India','England','Pakistan','SriLanka','Australia','America'];
var Capitals = ['New Delhi','London','Islamabad','Kolambo','Melbourne','Washington D.C'];

function find_capital(x){
	var capital;
	Countries.forEach(function(data,i){
	if(data[0].toUpperCase()+data.slice(1).toLowerCase()==x)
		 return capital=Capitals[i];						
	});
	return capital;												
};														
console.log(find_capital('England'));


var show_capital = function(country){
	var capital ='';
	countries =[['India','Delhi'],['England','London'],['Pakistan','Islamabad'],['SriLanka','Colambo'],['Australia','Melbourne'],['America','Washington']];
	countries.forEach(function (c){
		(c[0] == country) && (capital = c[1]);
});
	return capital;
};
console.log(show_capital('India'));


function findcap(x){
	countryObj = {India:'Delhi',Bangladesh:'Dhaka'};
	return countryObj[x];
};
console.log(findcap('Bangladesh'));