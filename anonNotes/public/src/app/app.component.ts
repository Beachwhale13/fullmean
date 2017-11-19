import { Component, ViewEncapsulation } from '@angular/core';
import { NoteService } from './note.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updated = false;
  notes: any;
  constructor(private _noteService: NoteService, private _http: HttpClient){
  }

  update(eventData){
    this._noteService.addNote(eventData)
    .then((data)=>{
      console.log("then" + data);
      this._noteService.getNotes()
      .then((data)=>{
        console.log("then");
        console.log(data);
        this.notes = data;
      })
      .catch((err)=>{
        console.log("catch");
        console.log(err);
      })
    })
    .catch((err)=>{
      console.log("catch" + err);
    })

  }
}
