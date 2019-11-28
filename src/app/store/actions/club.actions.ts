import { Action } from '@ngrx/store';

import { IClub } from '../../shared/models/club.interface';

export enum EClubsActions {
  GetClubs = '[Club] Get Clubs',
  GetClubsSuccess = '[Club] Get Clubs Success'
}

export class GetClubs implements Action {
  public readonly type = EClubsActions.GetClubs;
}

export class GetClubsSuccess implements Action {
  public readonly type = EClubsActions.GetClubsSuccess;
  constructor(public payload: IClub[]) {}
}

export type ClubActions = GetClubs | GetClubsSuccess;
