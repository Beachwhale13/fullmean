import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { NoteService } from './../note.service';
import { Note } from './../note';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteListComponent implements OnInit {
  @Input() notes;

  constructor(private _noteService: NoteService) { }

  ngOnInit(){
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
  }

  // ngOnChanges(){
  //   if (this.updated == true){
  //
  //   }
  //   this.updated = false;
  // }

}
