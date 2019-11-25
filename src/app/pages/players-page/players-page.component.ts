import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';

import { GetPlayers } from '../../store/actions/player.actions';
import { IPlayer } from '../../shared/models/player.interface';
import {
  selectLoading,
  selectPlayers
} from '../../store/selectors/player.selectors';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.scss']
})
export class PlayersPageComponent implements OnInit {
  public players: Observable<IPlayer[]>;
  public isLoading: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.players = store.select(selectPlayers);
    this.isLoading = store.select(selectLoading);
  }

  ngOnInit() {
    this.store.dispatch(new GetPlayers());
  }
}
