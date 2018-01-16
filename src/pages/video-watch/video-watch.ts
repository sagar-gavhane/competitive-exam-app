import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-video-watch',
  templateUrl: 'video-watch.html',
})

export class VideoWatchPage {
  videoId: number;
  videoData: string;
  videoSource: string;
  isVideoLoading: boolean = true;
  isVideoUnavailable: boolean =false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public sanitizer: DomSanitizer) {
    this.videoId = this.navParams.get('videoId');

    // get json of video from server
    this.http.get('http://smart-admin.000webhostapp.com/api/video/id/'+this.videoId)
        .map(res=>res.json())
        .subscribe( data => {
          if(data.length != 0){
            this.videoData = data;
            this.videoSource = 'https://www.youtube.com/embed/'+ data[0].video_youtube_id+'?autoplay=1&rel=0&cc_load_policy=1';
          }else{
            this.isVideoUnavailable = true;
          }
          this.isVideoLoading = false;          
        })
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad VideoWatchPage');
  // }

}
