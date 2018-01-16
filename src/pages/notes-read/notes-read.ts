import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-notes-read',
  templateUrl: 'notes-read.html',
})
export class NotesReadPage {
  notesId: number;
  notesData: any;
  isNotesLoading: boolean = true;
  isNotesReadable: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.notesId = this.navParams.get('notesId');
    
    this.http.get('http://smart-admin.000webhostapp.com/api/notes/id/' + this.notesId)
        .map(res => res.json())
        .subscribe(data => {
        // set isNotesLoading to false for hiding elements
        this.isNotesLoading = false;
      
        if(data.length != 0){
          this.notesData = data;
        }else{
          this.isNotesReadable = false;
        }
    });
  }

  ionViewDidLoad() { }

}
