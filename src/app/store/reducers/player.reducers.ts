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
        notFound: false,
        isLoading: false,
        player: action.payload
      };
    }

    case EPlayerActions.GetPlayerError: {
      return {
        ...state,
        notFound: true,
        isLoading: false
      };
    }

    case EPlayerActions.GetPlayer: {
      return {
        ...state,
        notFound: true,
        isLoading: true
      };
    }

    case EPlayerActions.GetPlayersSuccess: {
      return {
        ...state,
        notFound: false,
        isLoading: false,
        players: action.payload
      };
    }

    case EPlayerActions.GetPlayers: {
      return {
        ...state,
        isLoading: true
      };
    }

    case EPlayerActions.GetBrawlerPlayers: {
      return {
        ...state,
        isLoading: true
      };
    }

    case EPlayerActions.GetBrawlerPlayersError: {
      return {
        ...state,
        notFound: true,
        isLoading: false
      };
    }

    default:
      return state;
  }
};
