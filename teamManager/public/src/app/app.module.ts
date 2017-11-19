import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './player.service';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    NewPlayerComponent,
    PlayerStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
