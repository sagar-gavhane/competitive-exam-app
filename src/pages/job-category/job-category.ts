import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JobListPage } from '../job-list/job-list';

@Component({
  selector: 'page-job-category',
  templateUrl: 'job-category.html',
})
export class JobCategoryPage {
  categoryList: string[] = ['10th Pass', '12th Pass', 'Diploma', 'Graduate'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {  }

  // push page
  pushPage(categoryName){
    categoryName = categoryName.split(' ').join('_'); // replace space with underscore
    
    this.navCtrl.push(JobListPage, {
      categoryName
    });
  }
}
