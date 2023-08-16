let student = new Student("MilliyBro", "React", year-4, "Najot ta'lim");

let year = 7;
function Student(name, course, years, university) {
  this.name = name;
  this.course = course;
  this.years = years;
  this.university = university;
}

Student.prototype.leftYears = function () {
  return this.years;
};


let leftYears = student.leftYears();
console.log(leftYears+" oy qoldi");
