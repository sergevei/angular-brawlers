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
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { ClubPageComponent } from './pages/club-page/club-page.component';
import { ClubsPageComponent } from './pages/clubs-page/clubs-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlayersPageComponent,
    PlayerPageComponent,
    ClubPageComponent,
    ClubsPageComponent,
    MainPageComponent,
    BrawlerComponent
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
    }),
    EffectsModule.forRoot([PlayerEffect, BrawlerEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
