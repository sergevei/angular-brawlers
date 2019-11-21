import { IBrawler } from '../../models/brawler.interface';

export interface IBrawlerState {
  brawlers: IBrawler[];
}

export const initialBrawlerState: IBrawlerState = {
  brawlers: null,
};
