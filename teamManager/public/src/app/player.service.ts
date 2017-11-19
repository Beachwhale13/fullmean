import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {

  constructor(private _http: HttpClient) { }
  addPlayer(player){
    return this._http.post('/api/players', player).toPromise();
  }
  getPlayers(){
    return this._http.get('/api/players').toPromise();
  }
  deletePlayer(id){
    // console.log("in service " + id);
    return this._http.delete('/api/players/'+id).toPromise();
  }
  changeToNotPlay(id, gId){
    // console.log("in service to change to NP");
    // console.log('/api/players/'+id+'/'+gId+'/NP');
    return this._http.put('/api/players/'+id+'/'+gId+'/NP', {}).toPromise();
  }
  changeToUndecided(id, gId){
    // console.log("in service to change to P");
    // console.log('/api/players/'+id+'/'+gId+'/P');
    return this._http.put('/api/players/'+id+'/'+gId+'/U', {}).toPromise();
  }
  changeToPlay(id, gId){
    // console.log("in service to change to P");
    // console.log('/api/players/'+id+'/'+gId+'/P');
    return this._http.put('/api/players/'+id+'/'+gId+'/P', {}).toPromise();
  }
}
