import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { ClubPageComponent } from './pages/club-page/club-page.component';
import { ClubsPageComponent } from './pages/clubs-page/clubs-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'players', component: PlayersPageComponent },
  { path: 'player/:id', component: PlayerPageComponent },
  { path: 'club', component: ClubPageComponent },
  { path: 'clubs', component: ClubsPageComponent },
  { path: '404', component: MainPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
