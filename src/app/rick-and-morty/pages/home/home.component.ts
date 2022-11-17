import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character } from '../../shared/model/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public characterData$: Observable<Character>;
  public actualPage: number;
  public paginationNumbers!: number;
  public haveFilters: filtersModel;

  constructor(
    private rickMortyService: RickMortyService
  ) {
    this.actualPage = 1;
    this.paginationNumbers = 0;
    this.haveFilters = {};
  }

  ngOnInit(): void {
    this.initialize();
  }

  public previousPage(): void {
    if (this.actualPage > 1) {
      --this.actualPage; 
      this.getCharactersByPage(this.actualPage);
    }
  }

  public nextPage(): void {
    if (this.actualPage >= 1) {
      ++this.actualPage; 
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
    // this.rickMortyService.getCharactersByName(name).pipe(take(1)).subscribe(
    //   {
    //     next: (characters: Character) => {
    //       this.characterData = characters;
    //       this.paginationNumbers = characters.info?.pages || 0;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       console.log(error.status)
    //     }
    //   }
    // )
  }

  private getCharactersByPage(page: number): void {
    if (this.haveFilters.name) {
      this.characterData$ = this.rickMortyService.getCharactersByFilters( page, this.haveFilters.name);
      // this.paginationNumbers = characters.info?.pages || 0;
    } else {
      this.characterData$ = this.rickMortyService.getCharactersByPage(page);
      // this.paginationNumbers = characters.info?.pages || 0;
    }
  }

  private getAllCharactersData(): void {
    this.characterData$ = this.rickMortyService.getAllCharacters();
    // this.paginationNumbers = characters.info?.pages || 0;
  }
}

type filtersModel = {
  name?: string;
}