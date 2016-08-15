function Student(name,age,interest){
	this.name = name;
	this.age = age;
	this.interest = interest;
};
Student.prototype = {
	interestedIn : function(hobby){
		return this.interest.indexOf(hobby) >= 0;
	}
};
var s = new Student('vikas',19,['music','cricket']);

console.log(s);
console.log(s.interestedIn('music'));
console.log(s.interestedIn('crying'));
console.log('--------------------------------');


var createCircle = function(dimensions,radius){
	this.dimensions = dimensions;
	this.radius = radius;
};

createCircle.prototype = {
	Radius : function() { return this.radius; },
	area : function() { return this.radius * this.radius * 22 / 7; },
	perimeter : function() { return 2 * 22 / 7 * this.radius; }
};


Object.defineProperty(s, 'name', { writable : false })
var a = new createCircle([0,0],7);
console.log('radius',a.Radius());
console.log('area',a.area());
console.log('perimeter',a.perimeter());
console.log('a====>',a);
console.log('keys=',Object.keys(a));
console.log('---------------------------------');

console.log(s);
console.log(s.interestedIn);
s.interestedIn = 'dsaf';
console.log('after update: '+ s.interestedIn)
console.log(s)
delete s.interestedIn;
console.log(s.interestedIn);
console.log(s.name);
s.name = 'shamal';
console.log('after updation=',s.name)
delete s.name;
console.log('after deleting name=',s.name);
