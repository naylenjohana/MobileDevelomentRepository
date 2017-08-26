import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverComponent } from './driver/driver.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student/student-detail.component';
import {TeacherDetailComponent} from './teacher/teacher-detail.component'

@NgModule({
  declarations: [
    AppComponent,   
    StudentComponent,
    StudentDetailComponent,
    TeacherComponent,
    VehicleComponent,
    DriverComponent,
    HomeComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
