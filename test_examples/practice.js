var p = {};
exports.practice = p;

p.add=function(x,y){
	if(x==undefined)
	return y;
else if(y==undefined)
	return x;
return x+y;
}

p.parenthesize=function(a){
	return	a="("+a+")";	
}

p.comment=function(a) {
	return a= '//'+a;
}

p.apply=function(a,parenthesize,comment){
	var b=comment(parenthesize(a));
	return b;
}

p.middle_element=function(a){
	if(a.length%2==0)
		return a[(a.length/2)-1];
	return a[Math.floor(a.length/2)];
}

p.common_elements_of=function(x,y) {
	var common=[];
	x.forEach(function (data1, index1) {
		y.forEach(function(data2, index2){
			if(data1==data2)
				common.push(data1);
		});
	});  return common;
}

p.contains_even_numbers=function(x){
	var result=false;
	x.forEach(function(data){
		if(data%2==0)
			result=true;
	});
	 return result;
}


p.every=function(x,greater_than5){
	var result=true;
	var greater_than5=function(x){
		if(x<=5)
			result=false;
	};
	x.forEach(function(number){
		 greater_than5(number);});
		 return result;
}

p.some=function(x,greater_than_5){
	var result=false;
	var greater_than_5=function(x){
		if(x>5)
			result=true;
	};
	x.forEach(function(x){
		greater_than_5(x);
	});
	return result;
}


p.count_vowels=function(names){
	var leng=[];
	function isVowel(char){
		if(['a','e','i','o','u','A','E',"I",'O','U'].indexOf(char)>=0)
			leng.push(char);	
	}
	names.map(function(name){
		name.split('').map(isVowel);
	});
	return leng.length;
}

p.largest_word_of=function(names){
	var large='';
	var len=names[0].length;
	names.map(function(x){
		if(x.length>len)
			large=x;
		len=x.length;
	}); return large;
}



console.log('=======================================>> ',{}.__proto__,'========>',[].__proto__);