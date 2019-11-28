import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPlayer } from '../../../store/actions/player.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/shared/models/player.interface';
import {
  selectPlayer,
  selectLoading,
  selectError
} from 'src/app/store/selectors/player.selectors';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  public player: Observable<IPlayer>;
  public isLoading: Observable<boolean>;
  public notFound: Observable<boolean>;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) {
    this.player = store.select(selectPlayer);
    this.isLoading = store.select(selectLoading);
    this.notFound = store.select(selectError);
  }

  topBrawler(brawlers) {
    const maxTrophies = Math.max(...brawlers.map(e => e.trophies));
    return brawlers.find(e => e.trophies === maxTrophies);
  }

  dispatchGetPlayer() {
    this.store.dispatch(
      new GetPlayer(
        `%23${this.activateRoute.snapshot.paramMap.get('tag').slice(1)}`
      )
    );
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(() => this.dispatchGetPlayer());
  }
}
