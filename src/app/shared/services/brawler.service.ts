import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBrawlers } from '../models/brawler.interface';
import { httpHeader } from './http.header';
import { api } from './api.links';

@Injectable({
  providedIn: 'root'
})
export class BrawlerService {
  constructor(private http: HttpClient) {}

  getBrawlers(): Observable<IBrawlers> {
    return this.http.get<IBrawlers>(api.brawlersUrl, httpHeader);
  }
}
