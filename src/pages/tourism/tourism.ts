import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TourismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tourism',
  templateUrl: 'tourism.html',
})
export class TourismPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismPage');
  }

}
