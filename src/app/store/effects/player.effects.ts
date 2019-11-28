import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  GetPlayer,
  GetPlayers,
  EPlayerActions,
  GetPlayersSuccess,
  GetPlayerSuccess,
  GetPlayerError,
  GetBrawlerPlayers,
  GetBrawlerPlayersError
} from '../actions/player.actions';
import { of } from 'rxjs';

import { PlayerService } from '../../shared/services/player.service';

@Injectable()
export class PlayerEffect {
  @Effect()
  getPlayers = this.actions$.pipe(
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

  @Effect()
  getPlayerByTag = this.actions$.pipe(
    ofType<GetPlayer>(EPlayerActions.GetPlayer),
    map((action: GetPlayer) => {
      return action.payload;
    }),
    switchMap(playerTag =>
      this.playerService.getPlayerByTag(playerTag).pipe(
        map(player => {
          return new GetPlayerSuccess(player);
        }),
        catchError(() => of(new GetPlayerError()))
      )
    )
  );

  @Effect()
  getBrawlerPlayers = this.actions$.pipe(
    ofType<GetBrawlerPlayers>(EPlayerActions.GetBrawlerPlayers),
    map((action: GetBrawlerPlayers) => {
      return action.payload;
    }),
    switchMap(brawlerId =>
      this.playerService.getTopBrawlerPlayers(brawlerId).pipe(
        map(players => {
          return new GetPlayersSuccess(players.items);
        }),
        catchError(() => of(new GetBrawlerPlayersError()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
