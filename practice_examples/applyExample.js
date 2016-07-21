var c = function(){
 	var fns=[];
 	for(var i=0; i<arguments.length; i++){
		fns.push(arguments[i]);
	};
	console.log("arguments1: ",fns);

	return function(){
		var argsArray=[];
		for(var i=0; i<arguments.length; i++){
		argsArray.push(arguments[i]);
		};
		console.log("arguments2: ",argsArray);
		var result = fns.reduce(function(args,fn){
			var foo = [fn.apply(fn,args)];
		console.log("foo : ",args,fn, foo);
			return foo;
		},argsArray);
		return result[0];
		};
 };

 	
var r13 = function(x){ return String.fromCharCode(((x.toUpperCase().charCodeAt(0)-65+13) % 26)+65) };

var n = function(v){ return v.map(r13) };

var s = function(v){ return v.join("") };

var v = function(string){ return string.match(/[aeiou]/gi) };

var pigLatin = c(v,n,s);

console.log(pigLatin("education"));