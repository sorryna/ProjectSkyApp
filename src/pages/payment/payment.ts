import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  public Topup: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  goConfirm(){
    this.navCtrl.push(ConfirmPage, this.Topup);
  }
}
