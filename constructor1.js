let animal = new Animal("Lion", 80, 15);

function Animal(name, speed, limitAge) {
   this.name = name;
   this.speed = speed;
   this.limitAge = limitAge;
 }
 
 Animal.prototype.info = function() {
   return "Name: " + this.name + ", Speed: " + this.speed + ", Limit Age: " + this.limitAge;
};

console.log(animal.info());