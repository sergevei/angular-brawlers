import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPlayer, IPlayers } from '../models/player.interface';
import { httpHeader } from './http.header';
import { playersUrl, playerUrl } from './api.links';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<IPlayers> {
    return this.http.get<IPlayers>(playersUrl, httpHeader);
  }

  getPlayer(tag): Observable<IPlayer> {
    return this.http.get<IPlayer>(playerUrl + tag, httpHeader);
  }
}
