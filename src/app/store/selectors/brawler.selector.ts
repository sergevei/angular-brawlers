import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IBrawlerState } from '../state/brawler.state';

const brawlerState = (state: IAppState) => state.brawler;

export const selectBrawlers = createSelector(
  brawlerState,
  (state: IBrawlerState) => state.brawlers
);

export const selectLoading = createSelector(
  brawlerState,
  (state: IBrawlerState) => state.isLoading
);
