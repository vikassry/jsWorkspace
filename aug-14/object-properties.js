var animal = {eats:true};
console.log('eats' in animal);
console.log('barks' in animal);
console.log(animal.hasOwnProperty('eats'));
console.log(animal.propertyIsEnumerable('eats'));
console.log('----------');

var dog = {barks:true};
dog.__proto__ = animal;
console.log('eats' in dog);
console.log('barks' in dog);
console.log('----------');
console.log(dog.hasOwnProperty('eats'));
console.log(dog.hasOwnProperty('barks'));
console.log(dog.propertyIsEnumerable('barks'));
console.log(dog.propertyIsEnumerable('eats'));

var rabbit = Object.create(animal,{
	jumps:{value:true,enumerable:false}
});
console.log('----------');
console.log(rabbit.propertyIsEnumerable('jumps'));
console.log(rabbit.propertyIsEnumerable('eats'));
console.log(rabbit);
console.log(Object.keys(rabbit));

var student = {name:'guru',city:'mysore',age:'21'};
student.__proto__ = animal;
console.log(student);
console.log(Object.keys(student));
for(var key in student){
	console.log(key,'-->', student[key]);
}

