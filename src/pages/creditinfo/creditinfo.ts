import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the CreditinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditinfo',
  templateUrl: 'creditinfo.html',
})
export class CreditinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditinfoPage');
  }
  goPayment(){
    this.navCtrl.push(PaymentPage);
  }

}
