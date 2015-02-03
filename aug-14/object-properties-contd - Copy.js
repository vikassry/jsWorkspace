var cp = function(){
	return 2*3.14*this.radius;
};

var square = function(x){
	return x*x;
};

console.log('square(2)',square(2));
console.log('square.apply(null,[2])',square.apply(null,[2]));

var mcp = function(x){
	return cp.apply(this)*x;
};

var round = {radius:5,calcPerimeter:cp};

console.log('round.calcPerimeter()',round.calcPerimeter());

var circle = {
	radius:0,
	get area(){
		return 3.14 * this.radius * this.radius;
	},
	calculatePerimeter: cp
};

var anotherRound = {radius:10};
var z = circle.calculatePerimeter;

var x = Object.create(circle);

console.log('x',x);
console.log('x.radius',x.radius);
console.log('x.area',x.area);

console.log('circle',circle);
console.log('circle.radius',circle.radius);
circle.radius = 4;
console.log('circle.radius',circle.radius);
console.log('circle.area',circle.area);

x.radius = 5;
console.log('x',x);
console.log('x.radius',x.radius);
console.log('x.area',x.area);
console.log('x.calculatePerimeter()',x.calculatePerimeter());

console.log('circle.radius',circle.radius);
console.log('circle.area',circle.area);
console.log('circle.calculatePerimeter()',circle.calculatePerimeter());

console.log('z()',z.apply(round));
console.log('mcp(2)',mcp.apply(round,[2]));