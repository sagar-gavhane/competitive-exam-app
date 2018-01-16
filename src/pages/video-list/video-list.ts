import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import pages
import { VideoWatchPage } from '../video-watch/video-watch';

@IonicPage()
@Component({
  selector: 'page-video-list',
  templateUrl: 'video-list.html',
})
export class VideoListPage {
  categoryName: string;
  isVideoLoading: boolean = true;  
  isVideoCountZero: boolean = false;
  videoList: string [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryName = this.categoryName.toLowerCase();    

    // get video list from server
    this.http.get('http://smart-admin.000webhostapp.com/api/video/category/'+ this.categoryName +'/latest')
        .map(res => res.json())
        .subscribe(data => {          
          if(data.length == 0){
            this.isVideoCountZero = true;
          }else{  
            this.videoList = data;
          }
          this.isVideoLoading = false;
        })
  }

  pushPage(videoId =''){
    if(videoId !== ''){
      this.navCtrl.push(VideoWatchPage, {
        videoId
      })
    }
  }
}
