import { IBrawler } from './brawler.interface';
import { IClub } from './club.interface';

export interface IPlayer {
  tag: string;
  name: string;
  nameColor: string;
  trophies: number;
  role?: string;
  rank?: number;
  highestTrophies?: number;
  expLevel?: number;
  expPoints?: number;
  '3vs3Victories'?: number;
  soloVictories?: number;
  duoVictories?: number;
  bestRoboRumbleTime?: number;
  bestTimeAsBigBrawler?: number;
  club?: IClub;
  brawlers?: IBrawler[];
}

export interface IPlayers {
  items: IPlayer[];
}
