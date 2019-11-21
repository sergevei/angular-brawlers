import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  GetPlayer,
  GetPlayers,
  EPlayerActions,
  GetPlayersSuccess
} from '../actions/player.actions';
import { of } from 'rxjs';

import { PlayerService } from '../../shared/services/player.service';

@Injectable()
export class PlayerEffect {
  @Effect()
  getPlayer = this.actions$.pipe(
    ofType<GetPlayers>(EPlayerActions.GetPlayers),
    switchMap(() =>
      this.playerService.getPlayers().pipe(
        map(players => {
          return new GetPlayersSuccess(players.items);
        }),
        catchError(() => of(console.log('error')))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
