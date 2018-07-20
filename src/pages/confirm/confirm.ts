import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentsuccessPage } from '../paymentsuccess/paymentsuccess';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
public Topup: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Topup = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }
  goPaymentsuccess(){
    this.navCtrl.push(PaymentsuccessPage,this.Topup);
  }

}
