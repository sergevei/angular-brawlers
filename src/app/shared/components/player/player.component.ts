import { Component, OnInit, Input } from '@angular/core';
import { IPlayer } from '../../models/player.interface';

@Component({
  selector: 'app-player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: IPlayer;

  constructor() {}

  ngOnInit() {}
}
