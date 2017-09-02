import { Component, OnInit,Input } from '@angular/core';
import{Student} from '../../models/student'
import {StudentService} from "../../services/student.service";



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  selected:Student;
  students:Array<Student>;
  ngOnInit() {
    this.getStudents();
  }
  onSelect(student: Student){
    this.selected = student;
    }
    getStudents() {
      this.studentService.getStudent().then(p=>this.students=p);
  }
}
