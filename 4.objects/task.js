function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  let marks = [];
  this.marks = marks
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks){
    this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function () {
  if (this.marks && this.marks.length){
    return this.marks.reduce((val, item) => val + item) / this.marks.length
  } 
  else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason
}

let student = new Student("Василиса", "женский", 19);
console.log(student.getAverage())
console.log(student)
