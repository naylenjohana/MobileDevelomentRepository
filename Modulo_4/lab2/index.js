var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person() {
    }
    Person.prototype.getId = function () { return this.id; };
    Person.prototype.getAge = function () { return this.age; };
    Person.prototype.getName = function () { return this.name; };
    Person.prototype.getLastName = function () { return this.lastNambre; };
    Person.prototype.setId = function (id) { this.id = id; };
    Person.prototype.setAge = function (age) { this.age = age; };
    Person.prototype.setName = function (name) { this.name = name; };
    Person.prototype.setLastName = function (lastName) { this.lastNambre = lastName; };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this);
    }
    Student.prototype.getClasses = function () { return this.classes; };
    Student.prototype.setClasses = function (classes) { this.classes = classes; };
    Student.prototype.getGrade = function () { return this.grade; };
    Student.prototype.setGrade = function (grade) { this.grade = grade; };
    Student.prototype.getGroup = function () { return this.group; };
    Student.prototype.setGroup = function (group) { this.group = group; };
    ;
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        _super.call(this);
    }
    Teacher.prototype.getProfesion = function () { return this.profession; };
    Teacher.prototype.setProfession = function (profession) { this.profession = profession; };
    Teacher.prototype.getGrades = function () { return this.grades; };
    Teacher.prototype.setGrades = function (grades) { this.grades = grades; };
    Teacher.prototype.getGroups = function () { return this.groups; };
    Teacher.prototype.setGroups = function (groups) { this.groups = groups; };
    Teacher.prototype.getStudents = function () { return this.students; };
    Teacher.prototype.setStudents = function (student) { this.students = student; };
    return Teacher;
}(Person));
var teachers = new Array();
var students = Array();
var teacher = new Teacher();
var student;
teacher.setAge(40);
teacher.setId(1);
teacher.setName('Pedro');
teacher.setLastName('Perez');
teacher.setGrades([1, 2, 3]);
teacher.setProfession('Electronic Engineer');
teacher.setGroups(['G02', 'G03']);
teachers.push(teacher);
teacher = new Teacher();
teacher.setAge(35);
teacher.setId(2);
teacher.setName('Ana');
teacher.setLastName('Gomez');
teacher.setGrades([1, 3]);
teacher.setProfession('Mathematic');
teacher.setGroups(['G01', 'G04']);
teachers.push(teacher);
teacher = new Teacher();
teacher.setAge(28);
teacher.setId(3);
teacher.setName('Maria');
teacher.setLastName('Gomez');
teacher.setGrades([3]);
teacher.setProfession('Sistems Engineer');
teacher.setGroups(['G05', 'G04']);
teachers.push(teacher);
///////////////////////////////////////////////
//STUDENTS
//////////////////////////////////////////////
student = new Student();
student.setId(1);
student.setAge(18);
student.setName('Johana');
student.setLastName('Perez');
student.setGrade(3);
student.setClasses(['Class1', 'Class2']);
student.setGroup('G02');
students.push(student);
student = new Student();
student.setAge(18);
student.setId(2);
student.setName('Francisco');
student.setLastName('Perez');
student.setGrade(3);
student.setClasses(['Class1', 'Class2']);
student.setGroup('G02');
students.push(student);
student = new Student();
student.setAge(18);
student.setId(3);
student.setName('Paola');
student.setLastName('Perez');
student.setGrade(1);
student.setClasses(['Class1', 'Class2']);
student.setGroup('G02');
students.push(student);
for (var i = 0; i < teachers.length; i++) {
    teachers[i].setStudents(students);
    console.log(teachers[i]);
}
