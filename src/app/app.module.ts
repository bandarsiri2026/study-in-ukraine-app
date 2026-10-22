import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TourismPage} from "../pages/tourism/tourism";
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OurServicePage} from "../pages/our-service/our-service";
import {InformationsPage} from "../pages/informations/informations";
import { UniversitesPage } from "../pages/universites/universites";
import { PricesAndSpecialitesPage } from "../pages/prices-and-specialites/prices-and-specialites";
import {PhotosPage} from "../pages/photos/photos";
import {ContactUsPage} from "../pages/contact-us/contact-us";
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera } from '@ionic-native/camera';









@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TourismPage,
    ListPage,
    OurServicePage,
    InformationsPage,
    UniversitesPage,
    PricesAndSpecialitesPage,
    PhotosPage,
    ContactUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TourismPage,
    ListPage,
    OurServicePage,
    InformationsPage,
    UniversitesPage,
    PricesAndSpecialitesPage,
    PhotosPage,
    ContactUsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailComposer,
    Camera,


  ]
})
export class AppModule {}
