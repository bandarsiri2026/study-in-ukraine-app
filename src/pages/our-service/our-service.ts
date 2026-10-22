import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OurServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-our-service',
  templateUrl: 'our-service.html',
})
export class OurServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurServicePage');
  }

}
