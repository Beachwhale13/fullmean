import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Player } from './../player';
import { PlayerService } from './../player.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerListComponent implements OnInit {
  players;

  constructor(
    private _playerService: PlayerService,
    private _router: Router) { }

  ngOnInit() {
    this._playerService.getPlayers()
    .then((data)=>{
      // console.log("then: all data");
      this.players = data;
    })
    .catch((err)=>{
      console.log("catch" + err);
    })
  }

  deletePlayer(playerId){
    console.log(playerId);
    this._playerService.deletePlayer(playerId)
    .then((data)=>{
      this._playerService.getPlayers()
      .then((data)=>{
        // console.log("then: all data");
        this.players = data;
      })
      .catch((err)=>{
        console.log("catch" + err);
      })
    })
  }
}
