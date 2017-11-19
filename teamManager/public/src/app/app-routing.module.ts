import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerStatusComponent } from './player-status/player-status.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: PlayerListComponent},
  {path: 'players/list', pathMatch: 'full', component: PlayerListComponent},
  {path: 'players/addplayer', pathMatch: 'full', component: NewPlayerComponent},
  {path: 'status/game/:gId', pathMatch: 'full', component: PlayerStatusComponent, children:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
