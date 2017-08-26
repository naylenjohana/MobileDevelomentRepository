import { Component, OnInit,Input } from '@angular/core';
import{Student} from '../models/student'


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
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  selected:Student;
  students:Array<Student>=STUDENTS;
  ngOnInit() {
  }
  onSelect(student: Student){
    this.selected = student;
  }
}
