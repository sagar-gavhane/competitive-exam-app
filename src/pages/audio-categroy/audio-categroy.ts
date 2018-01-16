import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import page
import { AudioListPage } from '../audio-list/audio-list';

@IonicPage()
@Component({
  selector: 'page-audio-categroy',
  templateUrl: 'audio-categroy.html',
})
export class AudioCategroyPage {
  public categoryList: string [] = ['GS1', 'GS2', 'GS3', 'GS4'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  pushPage(categoryName = ''){    
    if(categoryName != ''){
      this.navCtrl.push(AudioListPage, {
        categoryName
      })
    }
  }
}