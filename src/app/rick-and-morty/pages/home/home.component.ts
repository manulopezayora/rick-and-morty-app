import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character } from '../../model/character.model';
import { filtersModel } from '../../model/filter.model';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(PaginationComponent) paginationComponent!: PaginationComponent;

  public characterData$: Observable<Character>;
  public haveFilters: filtersModel;
  public currentPage: number;

  constructor(
    private rickMortyService: RickMortyService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  public searchCharacter(character: string): void {
    this.currentPage = 1;
    this.getCharactersByName(character);
  }

  public getCharactersByPage(pageNumber: number): void {
    if (this.haveFilters && this.haveFilters.name) {
      this.characterData$ = this.rickMortyService.getCharactersByFilters(pageNumber, this.haveFilters.name);
    } else {
      this.characterData$ = this.rickMortyService.getCharactersByPage(pageNumber);
    }
    this.currentPage = pageNumber;
  }

  private initialize(): void {
    this.getAllCharactersData();
  }

  private getCharactersByName(name: string):void {
    this.haveFilters = { name };
    this.characterData$ =  this.rickMortyService.getCharactersByName(name);
  }

  private getAllCharactersData(): void {
    this.characterData$ = this.rickMortyService.getAllCharacters();
  }
}