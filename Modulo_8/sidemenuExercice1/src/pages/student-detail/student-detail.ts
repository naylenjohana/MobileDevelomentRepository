import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StudentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-detail',
  templateUrl: 'student-detail.html',
})
export class StudentDetailPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  SaveStudent(){

  };
}

