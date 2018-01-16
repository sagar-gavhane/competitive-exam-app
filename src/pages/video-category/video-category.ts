import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import pages
import { VideoListPage } from '../video-list/video-list';

@IonicPage()
@Component({
  selector: 'page-video-category',
  templateUrl: 'video-category.html',
})
export class VideoCategoryPage {
  categoryLists: string [] = ['GS1', 'GS2', 'GS3', 'GS4'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage(pageName = '', categoryName = ''){
    if(pageName != ''){
      if(pageName == 'video-list-page' && categoryName != ''){
        this.navCtrl.push(VideoListPage, {
          categoryName
        })
      }
    }
  }
}
