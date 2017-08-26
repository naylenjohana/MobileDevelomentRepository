import { Component, Input } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacherDetailComponent.html'
})

export class TeacherDetailComponent {
  @Input()
  teacher: Teacher;
}