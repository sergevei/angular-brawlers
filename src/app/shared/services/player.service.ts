import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPlayer, IPlayers } from '../models/player.interface';
import { httpHeader } from './http.header';
import { api } from './api.links';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<IPlayers> {
    return this.http.get<IPlayers>(api.playersUrl, httpHeader);
  }

  getTopBrawlerPlayers(brawlerId): Observable<IPlayers> {
    return this.http.get<IPlayers>(api.brawlerPlayers + brawlerId + api.brawlerPlayersLimit, httpHeader);
  }

  getPlayerByTag(playerTag): Observable<IPlayer> {
    return this.http.get<IPlayer>(api.playerUrlByTag + playerTag, httpHeader);
  }
}
