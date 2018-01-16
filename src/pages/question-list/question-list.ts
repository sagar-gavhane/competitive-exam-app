import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-question-list',
  templateUrl: 'question-list.html',
})
export class QuestionListPage {
  categoryName: string;
  questionList: any;
  isQuestionLoading: boolean = true;
  isQuestionCountZero: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private iab: InAppBrowser) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryName = this.categoryName.toLowerCase();

    // get question data from server and store into questionList variable
    this.http.get('http://smart-admin.000webhostapp.com/api/question/category/' + this.categoryName + '/latest')
      .map(res => res.json())
      .subscribe(data => {
        // hide isQuestionLoading
        this.isQuestionLoading = false;

        if (data.length != 0) {
          this.questionList = data;          
        } else {
          this.isQuestionCountZero = true;
        }
      });
  }

  ionViewDidLoad() {}

  viewInAppBrowser(fileName){
    let url = encodeURI('https://docs.google.com/viewer?url=http://smart-admin.000webhostapp.com/assets/resource/question/pdf/'+fileName);

    this.iab.create(url);
  }
}
