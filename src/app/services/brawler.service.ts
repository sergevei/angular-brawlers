import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBrawler } from '../models/brawler.interface';
import { httpHeader } from './http.header';
import { brawlersUrl } from './api.links';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {}

  getBrawlers(): Observable<IBrawler> {
    return this.http.get<IBrawler>(brawlersUrl, httpHeader);
  }
}
