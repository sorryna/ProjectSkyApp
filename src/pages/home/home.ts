import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddContentPage } from '../add-content/add-content';
import { ContentDetailPage } from '../content-detail/content-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    
  }
  items = [
    'สถานที่เที่ยวในขอนแก่นสุดCool',
    'น่าเที่ยวในอุบล',
    'กรุงเทพที่น่าไป',
  ];

  public itemSelected(item) {
    this.navCtrl.push(ContentDetailPage,{ name : item});
  }

  goPageAddContent(){
    this.navCtrl.push(AddContentPage);
  }

}
