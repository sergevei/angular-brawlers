import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IPlayerState } from '../state/player.state';

const playerState = (state: IAppState) => state.player;

export const selectPlayers = createSelector(
  playerState,
  (state: IPlayerState) => state.players
);

export const selectPlayer = createSelector(
  playerState,
  (state: IPlayerState) => state.player
);

export const selectLoading = createSelector(
  playerState,
  (state: IPlayerState) => state.isLoading
);
