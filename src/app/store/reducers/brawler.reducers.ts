import { BrawlerActions, EBrawlerActions } from '../actions/brawler.actions';
import { initialBrawlerState, IBrawlerState} from '../state/brawler.state';

export const BrawlerReducers = (
  state = initialBrawlerState,
  action: BrawlerActions
): IBrawlerState => {
  switch (action.type) {

    case EBrawlerActions.GetBrawlers : {
      return {
        ...state,
        isLoading: true,
      };
    }

    case EBrawlerActions.GetBrawlersSuccess: {
      return {
        ...state,
        brawlers: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
