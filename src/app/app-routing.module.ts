import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlayersPageComponent } from './pages/player-layout/players-page/players-page.component';
import { PlayerPageComponent } from './pages/player-layout/player-page/player-page.component';
import { ClubPageComponent } from './pages/club-layout/club-page/club-page.component';
import { ClubsPageComponent } from './pages/club-layout/clubs-page/clubs-page.component';
import { PlayerLayoutComponent } from './pages/player-layout/player-layout';
import { ClubLayoutComponent } from './pages/club-layout/club-layout';
import { BrawlerPlayersPageComponent } from './pages/player-layout/brawler-players-page/brawler-players-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'players',
    component: PlayerLayoutComponent,
    children: [
      { path: '', component: PlayersPageComponent },
      { path: ':tag', component: PlayerPageComponent },
      { path: ':id/brawler', component: BrawlerPlayersPageComponent }
    ]
  },
  {
    path: 'clubs',
    component: ClubLayoutComponent,
    children: [
      { path: '', component: ClubsPageComponent },
      { path: ':tag', component: ClubPageComponent }
    ]
  },
  { path: '404', component: MainPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
