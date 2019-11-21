import { IClub } from '../../models/club.interface';

export interface IClubState {
  clubs: IClub[];
  club: IClub;
}

export const initialClubState: IClubState = {
  clubs: null,
  club: null,
};
