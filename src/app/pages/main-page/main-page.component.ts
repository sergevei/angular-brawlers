import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';

import { GetBrawlers } from '../../store/actions/brawler.actions';
import { IBrawler } from '../../shared/models/brawler.interface';
import {
  selectLoading,
  selectBrawlers
} from '../../store/selectors/brawler.selector';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public brawlers: Observable<IBrawler[]>;
  public isLoading: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.brawlers = store.select(selectBrawlers);
    this.isLoading = store.select(selectLoading);
  }

  ngOnInit() {
    this.store.dispatch(new GetBrawlers());
  }
}
