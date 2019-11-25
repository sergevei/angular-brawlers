import { Action } from '@ngrx/store';

import { IBrawler } from '../../shared/models/brawler.interface';

export enum EBrawlerActions {
  GetBrawlers = '[Player] Get Brawlers',
  GetBrawlersSuccess = '[Player] Get Brawlers Success'
}

export class GetBrawlers implements Action {
  public readonly type = EBrawlerActions.GetBrawlers;
}

export class GetBrawlersSuccess implements Action {
  public readonly type = EBrawlerActions.GetBrawlersSuccess;
  constructor(public payload: IBrawler[]) {}
}

export type BrawlerActions = GetBrawlers | GetBrawlersSuccess;
