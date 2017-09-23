import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabPadrePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-padre',
  templateUrl: 'tab-padre.html'
})
export class TabPadrePage {

  tab1Root = 'Tab1Page'
  tab2Root = 'Tab2Page'
  tab3Root = 'Tab3Page'


  constructor(public navCtrl: NavController) {}

}
