class Person{
	private	id:number;
	private age:number;
	private name:string;
	private lastNambre:string;

	constructor(){
		
	}

	getId():number{return this.id;}
	getAge():number{return this.age;}
	getName():string{return this.name;}
	getLastName():string{return this.lastNambre;}
	setId(id:number):void{this.id=id;}
	setAge(age:number):void{this.age=age;}
	setName(name:string){this.name=name;}
	setLastName(lastName:string){this.lastNambre=lastName;}
}

class Student extends Person {
	
	private classes:Array<string>;
	private grade:number;
	private group:string;

	constructor(){
		super()
		
	} 

	getClasses():Array<string>{return this.classes;}
	setClasses(classes:Array<string>){this.classes=classes;}
	getGrade():number{return this.grade;}
	setGrade(grade:number){this.grade=grade;}
	getGroup():string{return this.group;}
	setGroup(group:string){this.group=group;};
}

class Teacher extends Person{
	private profession:string;
	private grades:Array<number>;
	private groups:Array<string>;
	private students:Array<Student>;
	constructor(){
		super()
	}

	getProfesion():string{return this.profession;}
	setProfession(profession:string){this.profession=profession;}
	getGrades():Array<number>{return this.grades;}
	setGrades(grades:Array<number>){this.grades=grades;}
	getGroups():Array<string>{return this.groups;}
	setGroups(groups:Array<string>):void {this.groups=groups;}
	getStudents():Array<Student>{return this.students;}
	setStudents(student: Array<Student>):void{this.students=student;}
}
let teachers: Array<Teacher>=new Array<Teacher>();
let students:Array<Student>=Array<Student>();
let teacher:Teacher=new Teacher();
let student:Student;

teacher.setAge(40);
teacher.setId(1);	
teacher.setName('Pedro');	
teacher.setLastName('Perez');	
teacher.setGrades([1,2,3]);
teacher.setProfession('Electronic Engineer');
teacher.setGroups(['G02','G03']);
teachers.push(teacher);
teacher=new Teacher();
teacher.setAge(35);
teacher.setId(2);	
teacher.setName('Ana');	
teacher.setLastName('Gomez');	
teacher.setGrades([1,3]);
teacher.setProfession('Mathematic');
teacher.setGroups(['G01','G04']);
teachers.push(teacher);
teacher=new Teacher();
teacher.setAge(28);
teacher.setId(3);	
teacher.setName('Maria');	
teacher.setLastName('Gomez');	
teacher.setGrades([3]);
teacher.setProfession('Sistems Engineer');
teacher.setGroups(['G05','G04']);
teachers.push(teacher);
///////////////////////////////////////////////
//STUDENTS
//////////////////////////////////////////////
student=new Student();
student.setId(1);
student.setAge(18);	
student.setName('Johana');	
student.setLastName('Perez');	
student.setGrade(3);
student.setClasses(['Class1','Class2']);
student.setGroup('G02');
students.push(student);

student=new Student();
student.setAge(18);
student.setId(2);	
student.setName('Francisco');	
student.setLastName('Perez');	
student.setGrade(3);
student.setClasses(['Class1','Class2']);
student.setGroup('G02');
students.push(student);

student=new Student();
student.setAge(18);
student.setId(3);	
student.setName('Paola');	
student.setLastName('Perez');	
student.setGrade(1);
student.setClasses(['Class1','Class2']);
student.setGroup('G02');
students.push(student);



for (var i = 0; i<teachers.length; i++) {
	teachers[i].setStudents(students);
	console.log(teachers[i]);
}

