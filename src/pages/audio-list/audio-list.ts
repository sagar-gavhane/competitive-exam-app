import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import page
import { AudioListenPage } from '../audio-listen/audio-listen';

@IonicPage()
@Component({
  selector: 'page-audio-list',
  templateUrl: 'audio-list.html',
})
export class AudioListPage {
  categoryName: string;
  audioList: string [];
  isAudioLoading: boolean = true;
  isAudioCountZero: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryName = this.categoryName.toLowerCase();

    this.http.get('http://smart-admin.000webhostapp.com/api/audio/category/'+this.categoryName+'/latest')
        .map( res => res.json())
        .subscribe( data => {
          this.isAudioLoading = false; // hide loading text
      
          if(data.length != 0){
            this.audioList = data;            
          }else{
            this.isAudioCountZero = true;
          }          
        })
  }

  pushPage(audioId = ''){
    if(audioId != ''){
      this.navCtrl.push(AudioListenPage, {
        audioId
      })
    }
  }

}
