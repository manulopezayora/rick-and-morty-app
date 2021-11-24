import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    LocationsComponent,
    EpisodesComponent,
    CharacterCardComponent,
    PaginationComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class RickAndMortyModule { }
