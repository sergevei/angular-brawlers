import { Action } from '@ngrx/store';

import { IBrawler } from '../../shared/models/brawler.interface';

export enum EBrawlerActions {
  GetBrawlers = '[Brawler] Get Brawlers',
  GetBrawlersSuccess = '[Brawler] Get Brawlers Success'
}

export class GetBrawlers implements Action {
  public readonly type = EBrawlerActions.GetBrawlers;
}

export class GetBrawlersSuccess implements Action {
  public readonly type = EBrawlerActions.GetBrawlersSuccess;
  constructor(public payload: IBrawler[]) {}
}

export type BrawlerActions = GetBrawlers | GetBrawlersSuccess;
