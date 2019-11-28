import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';

import { GetBrawlerPlayers } from '../../../store/actions/player.actions';
import { IPlayer } from '../../../shared/models/player.interface';
import {
  selectLoading,
  selectPlayers,
  selectError
} from '../../../store/selectors/player.selectors';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brawler-players-page',
  templateUrl: './brawler-players-page.component.html',
  styleUrls: ['./brawler-players-page.component.scss']
})
export class BrawlerPlayersPageComponent implements OnInit {
  public players: Observable<IPlayer[]>;
  public isLoading: Observable<boolean>;
  public notFound: Observable<boolean>;
  public brawlerName = '';

  constructor(
    private store: Store<IAppState>,
    private activateRoute: ActivatedRoute
  ) {
    this.players = store.select(selectPlayers);
    this.isLoading = store.select(selectLoading);
    this.notFound = store.select(selectError);
  }

  ngOnInit() {
    this.store.dispatch(
      new GetBrawlerPlayers(this.activateRoute.snapshot.paramMap.get('id'))
    );
    this.brawlerName = this.activateRoute.snapshot.queryParams.name;
  }
}
