import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { take } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character, CharacterInfo, CharacterResult } from '../../shared/model/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public characterData: Character;
  public actualPage: number;
  public paginationNumbers!: number;
  public haveFilters: filtersModel;

  constructor(
    private rickMortyService: RickMortyService,
    private route: ActivatedRoute
  ) { 
    this.characterData = {};
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

  public searchCharacter(character: string) {
    this.actualPage = 1;
    this.getCharactersByName(character);
  }

  private initialize(): void {
    this.getAllCharactersData();
  }

  private getCharactersByName(name: string) {
    this.haveFilters.name = name;
    this.rickMortyService.getCharactersByName(name).pipe(take(1)).subscribe(
      {
        next: (characters: Character) => {
          this.characterData = characters;
          this.paginationNumbers = characters.info?.pages || 0;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status)
        }
      }
    )
  }

  private getCharactersByPage(page: number) {
    if (this.haveFilters.name) {
      this.rickMortyService.getCharactersByFilters( page, this.haveFilters.name).pipe(take(1)).subscribe(
        {
          next: (characters: Character) => {
            this.characterData = characters;
            this.paginationNumbers = characters.info?.pages || 0;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.status)
          }
        }
      )
    } else {
      this.rickMortyService.getCharactersByPage(page).pipe(take(1)).subscribe(
        {
          next: (characters: Character) => {
            this.characterData = characters;
            this.paginationNumbers = characters.info?.pages || 0;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.status)
          }
        }
      )
    }
  }

  private getAllCharactersData(): void {
    this.rickMortyService.getAllCharacters().pipe(take(1)).subscribe(
      {
        next: (characters: Character) => {
          this.characterData = characters;
          this.paginationNumbers = characters.info?.pages || 0;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status)
        }
      });
  }
}

type filtersModel = {
  name?: string;
}