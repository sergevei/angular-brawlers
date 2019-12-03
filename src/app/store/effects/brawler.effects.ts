import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  GetBrawlers,
  GetBrawlersSuccess,
  EBrawlerActions
} from '../actions/brawler.actions';
import { of } from 'rxjs';

import { BrawlerService } from '../../shared/services/brawler.service';

@Injectable()
export class BrawlerEffect {
  @Effect()
  getBrawlers = this.actions$.pipe(
    ofType<GetBrawlers>(EBrawlerActions.GetBrawlers),
    switchMap(() =>
      this.brawlerService.getBrawlers().pipe(
        map(brawlers => new GetBrawlersSuccess(brawlers.items)),
        catchError(() => of(console.log('error')))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private brawlerService: BrawlerService
  ) {}
}
