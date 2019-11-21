interface IStarsPower {
  id: number;
  name: string;
}

export interface IBrawler {
  id: number;
  name: string;
  power?: number;
  rank?: number;
  trophies?: number;
  highestTrophies?: number;
  starsPower: IStarsPower[];
}
