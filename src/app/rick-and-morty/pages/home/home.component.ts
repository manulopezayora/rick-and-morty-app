import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character } from '../../model/character.model';
import { filtersModel } from '../../model/filter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public characterData$: Observable<Character>;
  public actualPage: number;
  public haveFilters: filtersModel;

  constructor(
    private rickMortyService: RickMortyService
  ) {
    this.actualPage = 1;
  }

  ngOnInit(): void {
    this.initialize();
  }

  public previousPage(): void {
    if (this.actualPage > 1) {
      this.actualPage--; 
      this.getCharactersByPage(this.actualPage);
    }
  }

  public nextPage(): void {
    if (this.actualPage >= 1) {
      this.actualPage++; 
      this.getCharactersByPage(this.actualPage);
    }
  }

  public searchCharacter(character: string): void {
    this.actualPage = 1;
    this.getCharactersByName(character);
  }

  private initialize(): void {
    this.getAllCharactersData();
  }

  private getCharactersByName(name: string):void {
    this.haveFilters.name = name;
    this.characterData$ =  this.rickMortyService.getCharactersByName(name);
  }

  private getCharactersByPage(page: number): void {
    if (this.haveFilters.name) {
      this.characterData$ = this.rickMortyService.getCharactersByFilters( page, this.haveFilters.name);
    } else {
      this.characterData$ = this.rickMortyService.getCharactersByPage(page);
    }
  }

  private getAllCharactersData(): void {
    this.characterData$ = this.rickMortyService.getAllCharacters();
  }
}