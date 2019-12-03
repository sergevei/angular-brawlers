import { IClub } from '../../shared/models/club.interface';

export interface IClubState {
  clubs: IClub[];
  club: IClub;
  isLoading: boolean;
  notFound: boolean;
}

export const initialClubState: IClubState = {
  clubs: null,
  club: null,
  isLoading: true,
  notFound: true,
};
