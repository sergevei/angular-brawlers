import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IClub, IClubs } from '../models/club.interface';
import { httpHeader } from './http.header';
import { api } from './api.links';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  constructor(private http: HttpClient) {}

  getClubs(): Observable<IClubs> {
    return this.http.get<IClubs>(api.clubsUrl, httpHeader);
  }

  getClub(tag): Observable<IClub> {
    return this.http.get<IClub>(api.clubUrl + tag, httpHeader);
  }
}
