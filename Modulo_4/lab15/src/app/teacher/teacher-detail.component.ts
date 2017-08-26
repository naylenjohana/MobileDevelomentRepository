import { Component, OnInit,Input } from '@angular/core';
import {Teacher} from '../models/teacher';


@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher-detail.component.html',
})
export class TeacherDetailComponent implements OnInit {

  constructor() { } 
  ngOnInit() {
  }
  @Input()
  teacher:Teacher;

}
