import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {
  images = ['02.jpg', '03.jpg', '04.jpg', '05.jpg','06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];



  constructor(public navCtrl: NavController) {
  }



}
