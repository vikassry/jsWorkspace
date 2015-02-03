var words = ['aikas','Jeevan','suryavanshi','Shamal'];
var new_word = [];
words.forEach(function(x){
	if(x[0] >='a')
		new_word.push(x);
});
console.log(new_word);
