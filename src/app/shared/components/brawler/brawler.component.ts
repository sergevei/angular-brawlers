import { Component, OnInit, Input } from '@angular/core';
import { IBrawler } from '../../models/brawler.interface';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrls: ['./brawler.component.scss']
})
export class BrawlerComponent implements OnInit {
  @Input() brawler: IBrawler;

  constructor() {}

  ngOnInit() {}
}
