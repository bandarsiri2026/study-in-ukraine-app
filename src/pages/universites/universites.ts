import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UniversitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-universites',
  templateUrl: 'universites.html',
})
export class UniversitesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitesPage');
  }

}
