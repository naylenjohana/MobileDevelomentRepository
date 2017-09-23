import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPadrePage } from './tab-padre';

@NgModule({
  declarations: [
    TabPadrePage,
  ],
  imports: [
    IonicPageModule.forChild(TabPadrePage),
  ]
})
export class TabPadrePageModule {}
