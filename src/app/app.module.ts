import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Redux devtools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from './app.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlayerReducers } from './store/reducers/player.reducers';
import { PlayerEffect } from './store/effects/player.effects';
import { BrawlerReducers } from './store/reducers/brawler.reducers';
import { BrawlerEffect } from './store/effects/brawler.effects';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

// Components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrawlerComponent } from './shared/components/brawler/brawler.component';

// Pages
import { PlayersPageComponent } from './pages/player-layout/players-page/players-page.component';
import { PlayerPageComponent } from './pages/player-layout/player-page/player-page.component';
import { ClubPageComponent } from './pages/club-layout/club-page/club-page.component';
import { ClubsPageComponent } from './pages/club-layout/clubs-page/clubs-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ClubReducers } from './store/reducers/club.reducer';
import { ClubEffect } from './store/effects/club.effects';
import { PlayerComponent } from './shared/components/player/player.component';
import { ClubComponent } from './shared/components/club/club.component';
import { PlayerLayoutComponent } from './pages/player-layout/player-layout';
import { ClubLayoutComponent } from './pages/club-layout/club-layout';
import { BrawlerPlayersPageComponent } from './pages/player-layout/brawler-players-page/brawler-players-page.component';

@NgModule({
  declarations: [
    BrawlerPlayersPageComponent,
    ClubLayoutComponent,
    PlayerLayoutComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlayersPageComponent,
    PlayerPageComponent,
    ClubPageComponent,
    ClubsPageComponent,
    MainPageComponent,
    BrawlerComponent,
    LoaderComponent,
    PlayerComponent,
    ClubComponent
  ],
  imports: [
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      player: PlayerReducers,
      brawler: BrawlerReducers,
      club: ClubReducers,
    }),
    EffectsModule.forRoot([PlayerEffect, BrawlerEffect, ClubEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
