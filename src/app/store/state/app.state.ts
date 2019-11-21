import { initialBrawlerState, IBrawlerState  } from './brawler.state';
import { initialClubState, IClubState } from './club.state';
import { initialPlayerState, IPlayerState } from './player.state';

export interface IAppState {
  brawler: IBrawlerState;
  player: IPlayerState;
  club: IClubState;
}

export const initialAppState: IAppState = {
  brawler: initialBrawlerState,
  player: initialPlayerState,
  club: initialClubState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
