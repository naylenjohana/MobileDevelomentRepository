import { Component } from '@angular/core';
import{Student} from '../models/student';
import {Teacher} from '../models/teacher';

const TEACHERS: Teacher[] = [
  {
    id: 1,
    name: "Johan",
    lastName:'Perez',
    age:35,
    classes:['CLASS05','CLASS06']
  },
  {
    id: 1,
    name: "Pablo",
    lastName:'Rodriguez',
    age:35,
    classes:['CLASS01','CLASS02']
    
  },
];

const STUDENTS: Student[] = [
  {
    id: 1,
    name: "Johan",
    lastName:'Perez',
    age:19,    
  },
  {
    id: 1,
    name: "Ana",
    lastName:'Rodriguez',
    age:20,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedTeacher:Teacher;
  selectedStudent:Student;
  teachers:Array<Teacher>=TEACHERS;
  students:Array<Student>=STUDENTS;

  onSelectTeacher(teacher: Teacher){
   console.log(teacher)
    this.selectedTeacher = teacher;
  }

  onSelectStudent(student: Student){
    this.selectedStudent = student;
  }
}
