var scope="global scope";
var checkScope= function(){
	var scope = "local scope";
	return function(){return scope;};
}
checkScope();

function give_value(a){
	return function(){return a};
};

var numbers=[];
for(var i=0; i<8; i++){
	numbers[i]=function(){return{i:i}};
};

var o = {
	w:0,
	x:1,
	y:2,
	get z(){
		return 'hhiiiii'
	},
	set z(n){
		this.x *= n; this.y *= n; 
	},
	get c(){
		return 'i m c';
	},

	set c(a){
		this.p ='bye';
	}
};
console.log(o);
o.z=5;
o.c=0;
console.log(o);
console.log(o.c)