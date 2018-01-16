import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-audio-listen',
  templateUrl: 'audio-listen.html',
})
export class AudioListenPage {
  audioId: number;
  audioData: string;
  isAudioLoading: boolean = true;
  isAudioCountZero: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.audioId = this.navParams.get('audioId');

    this.http.get('http://smart-admin.000webhostapp.com/api/audio/single/' + this.audioId)
        .map( res => res.json() )
        .subscribe( data => {

          if(data.length != 0){
            this.audioData = data;            
          }else{
            this.isAudioCountZero = true;
          }
          this.isAudioLoading = false;
        })
  }

}
