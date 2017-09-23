import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {Student}   from '../../app/models/student';
/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

  students:Array<Student>=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.students[0]={
      id:1,
      age:21,
      firstName:'Johana',
      lastName:'Brito',
      nid:'12368894',
      courses:Array<string>()
    };
    this.students[1]={
      id:2,
      age:23,
      firstName:'Adela',
      lastName:'Rodriguez',
      nid:'79635844',
      courses:Array<string>()
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }
 
}
