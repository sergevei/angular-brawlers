import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IClub } from '../models/club.interface';
import { httpHeader } from './http.header';
import { clubsUrl, clubUrl } from './api.links';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  constructor(private http: HttpClient) {}

  getClubs(): Observable<IClub[]> {
    return this.http.get<IClub[]>(clubsUrl, httpHeader);
  }

  getClub(tag): Observable<IClub> {
    return this.http.get<IClub>(clubUrl + tag, httpHeader);
  }
}
