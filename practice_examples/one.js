function fun(str){
	var word = str.split('');
	word.map(function(char,index){
		(!isNaN(char) && char!=' ') && (word[index] = ['jimmy','jammy','hiiii'][char]);	
		return word;
	});
	return word.join('');
};
console.log(fun('2, 0, 1, Where are you?'));