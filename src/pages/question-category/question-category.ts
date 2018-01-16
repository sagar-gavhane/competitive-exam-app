import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionListPage } from '../question-list/question-list';

@Component({
  selector: 'page-question-category',
  templateUrl: 'question-category.html',
})
export class QuestionCategoryPage {
  public categoryList: string[] = ['GS1', 'GS2', 'GS3', 'GS4', 'English', 'Marathi'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}
  
  // push page to question list page
  pushPage(categoryName){
    this.navCtrl.push(QuestionListPage, {
      categoryName
    })
  }
}
