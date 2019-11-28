import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IClubState } from '../state/club.state';

const clubState = (state: IAppState) => state.club;

export const selectClubs = createSelector(
  clubState,
  (state: IClubState) => state.clubs
);

export const selectLoading = createSelector(
  clubState,
  (state: IClubState) => state.isLoading
);
