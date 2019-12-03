import { Action } from '@ngrx/store';

import { IClub } from '../../shared/models/club.interface';

export enum EClubsActions {
  GetClubs = '[Club] Get Clubs',
  GetClubsSuccess = '[Club] Get Clubs Success',
  GetClub = '[Club] Get Club',
  GetClubSuccess = '[Club] Get Club Success',
  GetClubError = '[Club] Get Club Error'
}

export class GetClubs implements Action {
  public readonly type = EClubsActions.GetClubs;
}

export class GetClubsSuccess implements Action {
  public readonly type = EClubsActions.GetClubsSuccess;
  constructor(public payload: IClub[]) {}
}

export class GetClub implements Action {
  public readonly type = EClubsActions.GetClub;
  constructor(public payload: string) {}
}

export class GetClubSuccess implements Action {
  public readonly type = EClubsActions.GetClubSuccess;
  constructor(public payload: IClub) {}
}

export class GetClubError implements Action {
  public readonly type = EClubsActions.GetClubError;
}

export type ClubActions =
  | GetClubs
  | GetClubsSuccess
  | GetClub
  | GetClubSuccess
  | GetClubError;
