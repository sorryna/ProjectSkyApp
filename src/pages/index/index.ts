import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TopupPage } from '../topup/topup';
import { FilterPage } from '../filter/filter';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  goPageboard() {
    this.navCtrl.push(HomePage);
  }
  
  goTopup() {
    this.navCtrl.push(TopupPage);
  }

  goPageTravel() {
    this.navCtrl.push(FilterPage);
  }
  gopage() {
    this.navCtrl.push(DetailPage);
  }

}
