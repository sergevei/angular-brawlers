import { PlayerActions, EPlayerActions } from '../actions/player.actions';
import { initialPlayerState, IPlayerState } from '../state/player.state';

export const PlayerReducers = (
  state = initialPlayerState,
  action: PlayerActions
): IPlayerState => {
  switch (action.type) {
    case EPlayerActions.GetPlayerSuccess: {
      return {
        ...state,
        player: action.payload
      };
    }

    case EPlayerActions.GetPlayersSuccess: {
      return {
        ...state,
        isLoading: false,
        players: action.payload
      };
    }

    default:
      return state;
  }
};
