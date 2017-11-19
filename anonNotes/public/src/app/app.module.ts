import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './note.service';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './note-list/note-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
