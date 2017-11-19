import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {
  @Output() noteCreated = new EventEmitter();
  newNote: Note = new Note();

  constructor(private _noteService: NoteService) { }
  ngOnInit() {
  }

  onSubmit(){
    console.log("made new note" + this.newNote)
    this.noteCreated.emit(this.newNote);

  }

}
