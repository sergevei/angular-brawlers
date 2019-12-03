import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetClub } from 'src/app/store/actions/club.actions';
import { IClub } from 'src/app/shared/models/club.interface';
import { Observable } from 'rxjs';

import {
  selectLoading,
  selectClub,
  selectNotFound
} from '../../../store/selectors/club.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.scss']
})
export class ClubPageComponent implements OnInit {
  public club: Observable<IClub>;
  public isLoading: Observable<boolean>;
  public notFound: Observable<boolean>;

  constructor(
    private store: Store<IAppState>,
    private activateRoute: ActivatedRoute
  ) {
    this.club = store.select(selectClub);
    this.isLoading = store.select(selectLoading);
    this.notFound = store.select(selectNotFound);
  }

  dispatchGetClub() {
    this.store.dispatch(
      new GetClub(
        `%23${this.activateRoute.snapshot.paramMap.get('tag').slice(1)}`
      )
    );
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(() => this.dispatchGetClub());
  }
}
