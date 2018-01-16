import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesListPage } from '../notes-list/notes-list';

@Component({
  selector: 'page-notes-category',
  templateUrl: 'notes-category.html',
})
export class NotesCategoryPage {
  public categoryList: string [] = ['GS1', 'GS2', 'GS3', 'GS4', 'English', 'Marathi'];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}
  
  pushPage(categoryName){
    if(categoryName){
      this.navCtrl.push(NotesListPage, {
        categoryName
      });
    }
  }
}
