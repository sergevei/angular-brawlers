import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroService } from './services/brawler.service';
import { PlayerService } from './services/player.service';
import { ClubService } from './services/club.service';

import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';

import { GetPlayers } from './store/actions/player.actions';
import { IPlayer } from './models/player.interface';
import { selectLoading, selectPlayers } from './store/selectors/player.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public players: Observable<IPlayer[]>;
  public isLoading: Observable<boolean>;

  constructor(
    // private heroService: HeroService,
    // private playerService: PlayerService,
    // private clubService: ClubService,
    private store: Store<IAppState>
  ) {
    this.players = store.select(selectPlayers);
    this.isLoading = store.select(selectLoading);
  }

  ngOnInit() {
    this.store.dispatch(new GetPlayers());

    // this.heroService.getBrawlers().subscribe(res => console.log(res));

    // this.playerService.getPlayers().subscribe(res => console.log(res));
    // this.playerService.getPlayer('$YGU20CRG').subscribe(res => console.log(res));

    // this.clubService.getClubs().subscribe(res => console.log(res));
    // this.clubService.getClub('$GJYR9C08').subscribe(res => console.log(res));
  }
}
