import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-syllabus-list',
  templateUrl: 'syllabus-list.html',
})
export class SyllabusListPage {
  categoryName: string;
  syllabusList: any;
  isLoading: boolean = true;
  isDataReady: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private iab: InAppBrowser) {
    this.categoryName = this.navParams.get('categoryName');
    
    // get syllabus list from server
    this.http.get('http://smart-admin.000webhostapp.com/api/syllabus/category/' + this.categoryName + '/latest')
        .map(res => res.json())
        .subscribe(data => {
          this.isLoading = false;
          if(data.length != 0) {
            this.syllabusList = data;
          }else{
            this.isDataReady = false;
          }
        });

  }

  ionViewDidLoad() { }

  viewInAppBrowser(fileName){
    let url = encodeURI('https://docs.google.com/viewer?url=http://smart-admin.000webhostapp.com/assets/resource/syllabus/pdf/'+fileName);

    this.iab.create(url);
  }

}
