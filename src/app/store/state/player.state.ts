import { IPlayer } from '../../shared/models/player.interface';

export interface IPlayerState {
  isLoading: boolean;
  players: IPlayer[];
  player: IPlayer;
}

export const initialPlayerState: IPlayerState = {
  isLoading: true,
  players: null,
  player: null,
};
