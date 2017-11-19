import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {

  constructor(private _http: HttpClient) { }
  addNote(note){
    return this._http.post('/api/notes', note).toPromise();
  }
  getNotes(){
    return this._http.get('/api/notes').toPromise();
  }
}
