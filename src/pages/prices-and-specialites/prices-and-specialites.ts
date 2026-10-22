import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PricesAndSpecialitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-prices-and-specialites',
  templateUrl: 'prices-and-specialites.html',
})
export class PricesAndSpecialitesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricesAndSpecialitesPage');
  }

}
