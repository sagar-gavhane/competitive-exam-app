import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AdsSentSuccessPage } from './../ads-sent-success/ads-sent-success';

@Component({
  selector: 'page-ads-send',
  templateUrl: 'ads-send.html',
})
export class AdsSendPage {
  fullName: string;
  contactNumber: string;
  emailAddress: string;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() { }

  sendAds($event) {
    const body = {
      fullName: this.fullName,
      contactNumber: this.contactNumber,
      emailAddress: this.emailAddress,
      message: this.message
    };

    let req = this.http.post('http://smart-admin.000webhostapp.com/api/ads_send', body);

    console.log(req.subscribe());

    this.fullName = '';
    this.contactNumber = '';
    this.emailAddress = '';
    this.message = '';
    this.navCtrl.push(AdsSentSuccessPage);
  }
}
