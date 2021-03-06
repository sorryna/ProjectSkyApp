import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentsuccess',
  templateUrl: 'paymentsuccess.html',
})
export class PaymentsuccessPage {
  public Topup: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Topup = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsuccessPage');
  }
  goIndex(){
    this.navCtrl.popToRoot();
  }

}
