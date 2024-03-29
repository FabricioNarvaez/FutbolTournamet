import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SwiperComponent } from './components/homeComponents/swiper/swiper.component';
import { TableComponent } from './components/homeComponents/table/table.component';
import { CardsComponent } from './components/homeComponents/cards/cards.component';
import { SelectorComponent } from './components/homeComponents/selector/selector.component';
import { ClubPageComponent } from './components/clubPage/clubPage.component';
import { ClubPageGeneralComponent } from './components/clubPageGeneral/clubPageGeneral.component';
import { NextMatchComponent } from './components/clubPageGeneralComponents/nextMatch/nextMatch.component';
import { StatsComponent } from './components/clubPageGeneralComponents/stats/stats.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SwiperComponent,
    TableComponent,
    CardsComponent,
    SelectorComponent,
    ClubPageComponent,
    ClubPageGeneralComponent,
    NextMatchComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SwiperModule
  ],
  providers: [appRoutingProviders, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
