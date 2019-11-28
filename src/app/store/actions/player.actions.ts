import { Action } from '@ngrx/store';

import { IPlayer } from '../../shared/models/player.interface';

export enum EPlayerActions {
  GetPlayer = '[Player] Get Player',
  GetPlayerSuccess = '[Player] Get Player Success',
  GetPlayerError = '[Player] Get Player Error(not found)',

  GetPlayers = '[Player] Get Players',
  GetPlayersSuccess = '[Player] Get Players Success',

  GetBrawlerPlayers = '[Player] Get Brawler Players',
  GetBrawlerPlayersError = '[Player] Get Brawler Players Error',
}

export class GetPlayer implements Action {
  public readonly type = EPlayerActions.GetPlayer;
  constructor(public payload: string) {}
}

export class GetPlayerSuccess implements Action {
  public readonly type = EPlayerActions.GetPlayerSuccess;
  constructor(public payload: IPlayer) {}
}

export class GetPlayerError implements Action {
  public readonly type = EPlayerActions.GetPlayerError;
}

export class GetPlayers implements Action {
  public readonly type = EPlayerActions.GetPlayers;
}

export class GetPlayersSuccess implements Action {
  public readonly type = EPlayerActions.GetPlayersSuccess;
  constructor(public payload: IPlayer[]) {}
}

export class GetBrawlerPlayers implements Action {
  public readonly type = EPlayerActions.GetBrawlerPlayers;
  constructor(public payload: string) {}
}

export class GetBrawlerPlayersError implements Action {
  public readonly type = EPlayerActions.GetBrawlerPlayersError;
}

export type PlayerActions =
  | GetPlayer
  | GetPlayerSuccess
  | GetPlayerError
  | GetPlayers
  | GetPlayersSuccess
  | GetBrawlerPlayers
  | GetBrawlerPlayersError;
