import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentDetailComponent} from '../pages/studentDetailcomponent';
import {TeacherDetailComponent} from '../pages/teacherDetailcomponent';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    ,TeacherDetailComponent
    ,StudentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
