import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {
  categoryName: string;
  jobList: any;
  isLoading: boolean = true;
  isDataCountZero: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private iab: InAppBrowser) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryName = this.categoryName.split(' ').join('_');
    this.categoryName = this.categoryName.toLowerCase();

    // get job list from server
    this.http.get('http://smart-admin.000webhostapp.com/api/jobs/category/' + this.categoryName + '/latest')
      .map( res=> res.json())
      .subscribe( data => {
        this.isLoading = false;
        if(data.length != 0){
          this.jobList = data;
        }else{
          this.isDataCountZero = true;
        }
      });
  }

  ionViewDidLoad() { }

  viewInAppBrowser(fileName){
    let url = encodeURI('https://docs.google.com/viewer?url=http://smart-admin.000webhostapp.com/assets/resource/job/pdf/'+fileName);

    this.iab.create(url);
  }

}
