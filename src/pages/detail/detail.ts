import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { GalleryPage } from '../gallery/gallery';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  goPageboard() {
    this.navCtrl.push(HomePage);
  }

  goPageMap() {
    this.navCtrl.push(MapPage);
  }

  goPageGallery() {
    this.navCtrl.push(GalleryPage);
  }

}
