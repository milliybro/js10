let person = new Person("MilliyBro", 20, 2023);

function Person(name, age, currentYear) {
   this.name = name;
   this.age = age;
   this.currentYear = currentYear;
 }
 
 Person.prototype.getBirthYear = function() {
   return this.currentYear - this.age;
 };
 
 
 let birthYear = person.getBirthYear();
 console.log(`Siz `+birthYear+` yilda tug'ilgansiz`); 