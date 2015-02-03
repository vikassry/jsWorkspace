var animal = {eats:true};
var rabbit = {jumps:true};
rabbit.__proto__ = animal;
console.log('rabbit',rabbit, 'rabbit.eats',rabbit.eats);

var simpleField = function(initialValue){
	return {
		value:initialValue,
		enumerable:true,
		configurable:true,
		writable:true
	};
};
var dog = Object.create(animal,{
	barks: simpleField('bow wow'),
	flies: simpleField(false)
});
//dog.barks = 420;
console.log('--dog',dog, 'dog.eats',dog.eats);
console.log(Object.keys(animal), Object.keys(dog));
delete dog.barks;
console.log(dog);

var bird = Object.create(Object.prototype,{
	flies: {
		value:true,
		enumerable:true
	}
});

console.log(bird);

var zz = Object.create({flies:true});
console.log(zz.flies);

var hh = Object.create(rabbit.__proto__);
console.log(hh.eats);
