import { Component, OnInit,Input } from '@angular/core';

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
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { } 
  ngOnInit() {
  }
  selected:Teacher;
  teachers:Array<Teacher>=TEACHERS;
  onSelect(teacher:Teacher)
  {
    this.selected=teacher;
  }
}

