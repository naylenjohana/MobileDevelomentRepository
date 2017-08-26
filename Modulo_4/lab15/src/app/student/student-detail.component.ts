import { Component, OnInit,Input } from '@angular/core';
import{Student} from '../models/student'



@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',  
})
export class StudentDetailComponent implements OnInit {

  constructor() { }
  @Input()
  student:Student;
  ngOnInit() {
  }
}