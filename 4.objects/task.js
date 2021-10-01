function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [];
    }

    this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        this.marks = [];
    }

    for (let mark of marks) {
        this.marks.push(mark);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    const length = this.marks.length;
    for (let mark of this.marks) {
        sum += mark;
    }

    return sum / length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
}
