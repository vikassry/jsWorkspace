var rabbit = {jumps:true};
var animal = {eats:true};
console.log('rabbit jumps',rabbit.jumps,'rabbit eats',rabbit.eats, rabbit);
console.log(Object.keys(rabbit));

rabbit.__proto__ = animal;

console.log('after rabbit inherits animal');
console.log('rabbit jumps',rabbit.jumps,'rabbit eats',rabbit.eats, rabbit);
console.log(Object.keys(rabbit));

delete rabbit.eats;
console.log('after deleting rabbit.eats');
console.log('rabbit jumps',rabbit.jumps,'rabbit eats',rabbit.eats, rabbit);

console.log('after rabbit.eats=false');
rabbit.eats=false;
console.log('rabbit jumps',rabbit.jumps,'rabbit eats',rabbit.eats, rabbit);

console.log('rabbit.__proto__',rabbit.__proto__);

rabbit.__proto__.eats = 420;

console.log('after rabbit.__proto__.eats = 420');
console.log('rabbit.__proto__',rabbit.__proto__);
console.log('rabbit jumps',rabbit.jumps,'rabbit eats',rabbit.eats, rabbit);

delete rabbit.eats;
console.log('after deleting rabbit.eats');
console.log('rabbit jumps',rabbit.jumps,'rabbit eats',rabbit.eats, rabbit);
