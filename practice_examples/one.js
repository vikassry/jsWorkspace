var x = [1,2,3,4,5,];
console.log(x);

function fun(str){
	var word = str.split('');
	word.map(function(x,index){
		(!isNaN(x) && x!=' ') && (word[index] = ['jimmy','jammy','hiiii'][x]);	
		return word;
	});
	return word.join('');
};
console.log(fun('0, 1, 0, Where are you?'));