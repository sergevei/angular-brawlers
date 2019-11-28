import { ClubActions, EClubsActions } from '../actions/club.actions';
import { initialClubState, IClubState} from '../state/club.state';

export const ClubReducers = (
  state = initialClubState,
  action: ClubActions
): IClubState => {
  switch (action.type) {

    case EClubsActions.GetClubs : {
      return {
        ...state,
        isLoading: true,
      };
    }

    case EClubsActions.GetClubsSuccess: {
      return {
        ...state,
        clubs: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
