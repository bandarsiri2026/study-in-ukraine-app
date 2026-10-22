import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';



/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  currentImage = null;
  currentImage2 = null;
  currentImage3 = null;

  constructor( public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private emailComposer: EmailComposer) {
  }

  captureImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = imageData;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
  captureImage2() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage2 = imageData;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
  captureImage3() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage3 = imageData;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
  sendEmail() {
    let email = {
      to: '[email hidden]',
      cc: '[email hidden]',
      attachments: [
        this.currentImage,
        this.currentImage2,
        this.currentImage3
      ],
      subject: 'bac+releve de note+passport',
      body: 'etude en ukraine',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}




