import { IBrawler } from '../../shared/models/brawler.interface';

export interface IBrawlerState {
  brawlers: IBrawler[];
  isLoading: boolean;
}

export const initialBrawlerState: IBrawlerState = {
  brawlers: null,
  isLoading: true,
};
