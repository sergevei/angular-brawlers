import { Action } from '@ngrx/store';

import { IPlayer } from '../../shared/models/player.interface';

export enum EPlayerActions {
  GetPlayer= '[Player] Get Player',
  GetPlayerSuccess = '[Player] Get Player Success',
  GetPlayers = '[Player] Get Players',
  GetPlayersSuccess = '[Player] Get Players Success'
}

export class GetPlayer implements Action {
  public readonly type = EPlayerActions.GetPlayer;
  constructor(public payload: string) {}
}

export class GetPlayerSuccess implements Action {
  public readonly type = EPlayerActions.GetPlayerSuccess;
  constructor(public payload: IPlayer) {}
}

export class GetPlayers implements Action {
  public readonly type = EPlayerActions.GetPlayers;
}

export class GetPlayersSuccess implements Action {
  public readonly type = EPlayerActions.GetPlayersSuccess;
  constructor(public payload: IPlayer[]) {}
}

export type PlayerActions = GetPlayer | GetPlayerSuccess | GetPlayers | GetPlayersSuccess;
