import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import required page
import { NotesReadPage } from '../notes-read/notes-read';

@Component({
  selector: 'page-notes-list',
  templateUrl: 'notes-list.html',
})
export class NotesListPage {
  public categoryName: string;
  public notesList: string[];
  public isNotesLoading: boolean = true;
  public isNotesCountZero: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.categoryName = this.navParams.get('categoryName');
    this.categoryName = this.categoryName.toLowerCase();    
    
    // get notes records from database and stored into notesList
    this.http.get('http://smart-admin.000webhostapp.com/api/notes/category/' + this.categoryName + '/latest')
        .map( res => res.json())
        .subscribe( data => {
          // check data length not equal to zero
          this.isNotesLoading = false; // hide text of notes loading
          
          if(data.length != 0){
            this.notesList = data;            
          }else{
            this.isNotesCountZero = true; // show error message to user that empty resp from server.
          }
        });
  }

  ionViewDidLoad() { }
  
  // push page to show notes in readable format
  pushPage(notesId){
    this.navCtrl.push(NotesReadPage, {
      notesId
    })
  }
}
