import { IPlayer } from './player.interface';

export interface IClub {
  tag: string;
  name: string;
  trophies?: number;
  rank?: number;
  memberCount?: number;
  description?: string;
  type?: string;
  requiredTrophies?: number;
  members: IPlayer[];
}
