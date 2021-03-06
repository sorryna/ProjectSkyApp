import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddContentPage } from '../pages/add-content/add-content';
import { ContentDetailPage } from '../pages/content-detail/content-detail';
import { IndexPage } from '../pages/index';
import { TopupPage } from '../pages/topup/topup';
import { CreditinfoPage } from '../pages/creditinfo/creditinfo';
import { PaymentPage } from '../pages/payment/payment';
import { ConfirmPage } from '../pages/confirm/confirm';
import { PaymentsuccessPage } from '../pages/paymentsuccess/paymentsuccess';
import { PlacelistPage } from '../pages/placelist/placelist';
import { FilterPage } from '../pages/filter/filter';
import { DetailPage } from '../pages/detail/detail';
import { MapPage } from '../pages/map/map';
import { GalleryPage } from '../pages/gallery/gallery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddContentPage,
    ContentDetailPage,
    IndexPage,
    TopupPage,
    CreditinfoPage,
    PaymentPage,
    ConfirmPage,
    PaymentsuccessPage,
    PlacelistPage,
    FilterPage,
    DetailPage,
    MapPage,
    GalleryPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddContentPage,
    ContentDetailPage,
    IndexPage,
    TopupPage,
    CreditinfoPage,
    PaymentPage,
    ConfirmPage,
    PaymentsuccessPage,
    PlacelistPage,
    FilterPage,
    DetailPage,
    MapPage,
    GalleryPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
