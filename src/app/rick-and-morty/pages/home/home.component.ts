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

  constructor(
    private rickMortyService: RickMortyService,
    private route: ActivatedRoute
  ) { 
    this.characterData = {};
    this.actualPage = 1;
    this.paginationNumbers = 0;
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

  private initialize(): void {
    this.getAllCharactersData();
  }

  public getCharactersByPage(page: number) {
    this.rickMortyService.getCharactersByPage(page).pipe(take(1)).subscribe(
      {
        next: (characters: Character) => {
          this.characterData = characters;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status)
        }
      }
    )
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
