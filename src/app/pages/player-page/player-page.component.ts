import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {

  id: number;
  constructor(private activateRoute: ActivatedRoute) { 
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
