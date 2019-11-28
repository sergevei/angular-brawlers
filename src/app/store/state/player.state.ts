import { IPlayer } from '../../shared/models/player.interface';

export interface IPlayerState {
  isLoading: boolean;
  players: IPlayer[];
  player: IPlayer;
  notFound: boolean;
}

export const initialPlayerState: IPlayerState = {
  isLoading: true,
  notFound: false,
  players: null,
  player: null,
};
