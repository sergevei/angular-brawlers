import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetClubs } from 'src/app/store/actions/club.actions';
import { IClub } from 'src/app/shared/models/club.interface';
import { Observable } from 'rxjs';

import {
  selectLoading,
  selectClubs
} from '../../../store/selectors/club.selectors';

@Component({
  selector: 'app-clubs-page',
  templateUrl: './clubs-page.component.html',
  styleUrls: ['./clubs-page.component.scss']
})
export class ClubsPageComponent implements OnInit {
  public clubs: Observable<IClub[]>;
  public isLoading: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.clubs = store.select(selectClubs);
    this.isLoading = store.select(selectLoading);
  }

  ngOnInit() {
    this.store.dispatch(new GetClubs());
  }
}
