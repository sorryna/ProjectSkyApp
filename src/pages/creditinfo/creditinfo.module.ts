import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditinfoPage } from './creditinfo';

@NgModule({
  declarations: [
    CreditinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditinfoPage),
  ],
})
export class CreditinfoPageModule {}
