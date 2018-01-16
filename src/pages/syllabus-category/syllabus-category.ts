import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SyllabusListPage } from '../syllabus-list/syllabus-list';

@Component({
  selector: 'page-syllabus-category',
  templateUrl: 'syllabus-category.html',
})
export class SyllabusCategoryPage {
  preCategoryList: string[] = ['Paper I', 'Paper II', 'STI (Pre)', 'PSI (Pre)', 'ASO (Pre)', 'Cumbain Exam'];
  mainsCategoryList: string[] = ['GS I', 'GS II', 'GS III', 'GS IV', 'PSI (Mains)', 'STI (Mains)', 'ASO (Mains)'];
  otherCategoryList: string[] = ['Direct Recruitment'];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  // push page to syllabus list page
  pushPage(categoryName) {
    this.navCtrl.push(SyllabusListPage, {
      categoryName
    });
  }
}
