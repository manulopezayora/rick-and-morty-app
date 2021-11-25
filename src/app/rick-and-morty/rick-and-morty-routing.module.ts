import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full'
  },
  {
    path: 'character',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'location',
    component: LocationsComponent,
    pathMatch: 'full'
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
    pathMatch: 'full'
  }, 
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickAndMortyRoutingModule { }
