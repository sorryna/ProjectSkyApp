import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddContentPage } from '../pages/add-content/add-content';
import { ContentDetailPage } from '../pages/content-detail/content-detail';
import { IndexPage } from '../pages/index';
import { PlacelistPage } from '../pages/placelist/placelist';
import { FilterPage } from '../pages/filter/filter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddContentPage,
    ContentDetailPage,
    IndexPage,
    PlacelistPage,
    FilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddContentPage,
    ContentDetailPage,
    IndexPage,
    PlacelistPage,
    FilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
