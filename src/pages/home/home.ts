import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import pages
import { VideoCategoryPage } from '../video-category/video-category';
import { AudioCategroyPage } from '../audio-categroy/audio-categroy';
import { NotesCategoryPage } from '../notes-category/notes-category';
import { QuestionCategoryPage } from '../question-category/question-category';
import { SyllabusCategoryPage } from '../syllabus-category/syllabus-category';
import { JobCategoryPage } from '../job-category/job-category';
import { GoogleMapPage } from '../google-map/google-map';
import { AdsViewPage } from '../ads-view/ads-view';
import { AdsSendPage } from '../ads-send/ads-send';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  pushPage(pageName = ''){
    if(pageName !== ''){
      switch(pageName){
        case 'video-category-page':
          this.navCtrl.push(VideoCategoryPage);
          break;

        case 'audio-category-page':
          this.navCtrl.push(AudioCategroyPage);
          break;
        
        case 'notes-category-page':
          this.navCtrl.push(NotesCategoryPage);
          break;
        
        case 'question-category-page':
          this.navCtrl.push(QuestionCategoryPage);
          break;
        case 'syllabus-category-page':
          this.navCtrl.push(SyllabusCategoryPage);
          break;
        
        case 'jobs-category-page':
          this.navCtrl.push(JobCategoryPage);
          break;
          
        case 'google-map-page':
          this.navCtrl.push(GoogleMapPage);
          break;
          
        case 'ads-view-page':
          this.navCtrl.push(AdsViewPage);
          break;
        
        case 'ads-send-page':
          this.navCtrl.push(AdsSendPage);
          break;
      }
    }
  }
}
