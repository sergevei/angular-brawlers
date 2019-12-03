import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  GetClubs,
  GetClubsSuccess,
  EClubsActions,
  GetClub,
  GetClubSuccess,
  GetClubError
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
        map(clubs => new GetClubsSuccess(clubs.items)),
        catchError(() => of(console.log('error')))
      )
    )
  );

  @Effect()
  getClub = this.actions$.pipe(
    ofType<GetClub>(EClubsActions.GetClub),
    map((action: GetClub) => action.payload),
    switchMap((clubTag: string) =>
      this.clubService.getClub(clubTag).pipe(
        map(club => new GetClubSuccess(club)),
        catchError(() => of(new GetClubError()))
      )
    )
  );

  constructor(private actions$: Actions, private clubService: ClubService) {}
}
