import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  sendAds($event){
    this.http.post('http://smart-admin.000webhostapp.com/api/ads_send', {
      fullName: this.fullName,
      contactNumber: this.contactNumber,
      emailAddress: this.emailAddress,
      message: this.message
    })
    .map(res=>res.json())
    .subscribe( data => {
      console.log(data);
    })
  }
}
