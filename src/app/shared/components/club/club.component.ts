import { Component, OnInit, Input } from '@angular/core';
import { IClub } from '../../models/club.interface';

@Component({
  selector: 'app-club-card',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  @Input() club: IClub;

  constructor() {}

  ngOnInit() {}
}
