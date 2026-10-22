import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {TourismPage} from "../pages/tourism/tourism";
import { ListPage } from '../pages/list/list';
import {OurServicePage} from "../pages/our-service/our-service";
import {InformationsPage} from "../pages/informations/informations";
import { UniversitesPage } from "../pages/universites/universites";
import { PricesAndSpecialitesPage } from "../pages/prices-and-specialites/prices-and-specialites";
import {PhotosPage} from "../pages/photos/photos";
import {ContactUsPage} from "../pages/contact-us/contact-us";



@Component({
  templateUrl: 'app.html',
  selector: 'ion-gallery '
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;



  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public toastCtrl: ToastController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      //back button handle
      //Registration of push in Android and Windows Phone
      var lastTimeBackPress = 0;
      var timePeriodToExit  = 2000;

      platform.registerBackButtonAction(() => {
        // get current active page
        let view = this.nav.getActive();
        if (view.component.name == "TabsPage") {
          //Double check to exit app
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            let toast = this.toastCtrl.create({
              message:  'Press back again to exit App?',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            lastTimeBackPress = new Date().getTime();
          }
        } else {
          // go to previous page
          this.nav.pop({});
        }
      });
    });
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: HomePage, icon:"md-home" },
      { title: 'السياحة', component: TourismPage, icon:"md-jet" },
      { title: 'إجراءات-التسجيل', component: ListPage, icon:"md-person-add" },
      { title: 'خدمات شركتنا', component: OurServicePage, icon:"md-ribbon" },
      { title: 'معلومات مهمة', component: InformationsPage, icon:"md-sunny"},
      { title: 'الجامعات', component: UniversitesPage, icon:"md-school" },
      { title: 'أسعار الدراسة و التخصصات', component: PricesAndSpecialitesPage, icon:"md-star" },
      { title: 'معرض الصور', component: PhotosPage, icon:"md-images" },
      { title: 'تواصل معنا', component: ContactUsPage, icon:"md-mail" }




    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
