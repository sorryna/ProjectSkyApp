import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage } from '../index';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsuccessPage');
  }
  goIndex(){
    this.navCtrl.push(IndexPage);
  }

}