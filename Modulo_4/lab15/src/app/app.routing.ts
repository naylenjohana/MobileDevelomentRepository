import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {DriverComponent} from "./driver/driver.component";
import {VehicleComponent} from "./vehicle/vehicle.component";
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'student',  component:  StudentComponent},
  { path: 'teacher', component: TeacherComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}