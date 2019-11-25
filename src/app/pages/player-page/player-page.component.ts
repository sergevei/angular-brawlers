import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  params: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.params = this.activateRoute.queryParams;
  }

  ngOnInit() {
    if (this.params.value.playerTag) {
      console.log(this.params.value.tag);
    }
    if (this.params.value.brawlerId) {
      console.log(this.params.value.brawlerId);
    }
  }
}
