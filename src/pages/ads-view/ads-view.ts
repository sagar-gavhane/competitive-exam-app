import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-ads-view',
  templateUrl: 'ads-view.html',
})
export class AdsViewPage {
  isLoading: boolean = true;
  isDataCountZero: boolean = false;
  adsData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://smart-admin.000webhostapp.com/api/view_ads')
      .map( res => res.json())
      .subscribe( data => {
        this.isLoading = false;
        if(data.length != 0){
          this.adsData = data;
        }else{
          this.isDataCountZero = true;
        }
      });
  }

  ionViewDidLoad() { }

}
