import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Player } from './../player';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerStatusComponent implements OnInit {
  gId : number;
  players;
  constructor(
    private _route: ActivatedRoute,
    private _playerService: PlayerService
  ) {}

  ngOnInit() {
    this._playerService.getPlayers()
    .then((data)=>{
      this.players = data;
    })
    .catch((err)=>{
      console.log("catch" + err);
    });
    this._route.paramMap.subscribe(params => {
      // console.log(params.get('gId'));
      this.gId = parseInt(params.get('gId'));
    })
  }

  changeToNotPlay(playerId){
    console.log("changing to not play")
    this._playerService.changeToNotPlay(playerId, this.gId)
    .then((data) => {
      this._playerService.getPlayers()
      .then((data)=>{
        this.players = data;
      })
      .catch((err)=>{
        console.log("catch" + err);
      })
    })
  }

  changeToPlay(playerId){
    console.log("changing to play")
    this._playerService.changeToPlay(playerId, this.gId)
    .then((data) => {
      this._playerService.getPlayers()
      .then((data)=>{
        this.players = data;
      })
      .catch((err)=>{
        console.log("catch" + err);
      })
    })
  }

  changeToUndecided(playerId){
    console.log("changing to undecided")
    this._playerService.changeToUndecided(playerId, this.gId)
    .then((data) => {
      this._playerService.getPlayers()
      .then((data)=>{
        this.players = data;
      })
      .catch((err)=>{
        console.log("catch" + err);
      })
    })
  }
}
