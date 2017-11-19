import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Player } from './../player';
import { PlayerService } from './../player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewPlayerComponent implements OnInit {
  newPlayer = new Player();
  constructor(
    private _playerService: PlayerService,
    private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log("made a player" + this.newPlayer)
    this._playerService.addPlayer(this.newPlayer)
    .then((data)=>{
      // console.log("then for new player");
    })
    .catch((err)=>{
      console.log("catch");
      console.log("catch" + err);
    })
    this._router.navigate(['']);
  }
}
