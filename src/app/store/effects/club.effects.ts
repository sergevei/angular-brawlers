import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  GetClubs,
  GetClubsSuccess,
  EClubsActions
} from '../actions/club.actions';
import { of } from 'rxjs';

import { ClubService } from '../../shared/services/club.service';

@Injectable()
export class ClubEffect {
  @Effect()
  getClubs = this.actions$.pipe(
    ofType<GetClubs>(EClubsActions.GetClubs),
    switchMap(() =>
      this.clubService.getClubs().pipe(
        map(clubs => {
          console.log(clubs);
          return new GetClubsSuccess(clubs.items);
        }),
        catchError(() => of(console.log('error')))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private clubService: ClubService
  ) {}
}
