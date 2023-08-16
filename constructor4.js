let employee = new Employee("MilliyBro", 12000, "Homework project");

function Employee(name, salary, workName) {
   this.name = name;
   this.salary = salary;
   this.workName = workName;
 }
 
 Employee.prototype.increaseSalary = function(percent) {
   let increaseAmount = (this.salary * percent) / 100;
   let newSalary = this.salary + increaseAmount;
   return newSalary;
 };
 
 
 let newMonthlySalary = employee.increaseSalary(10);
 console.log(newMonthlySalary); 