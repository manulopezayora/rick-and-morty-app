import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { MenuComponent } from './shared/components/menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    HttpClientModule
  ]
})
export class RickAndMortyModule { }
