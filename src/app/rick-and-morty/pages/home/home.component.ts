import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  public paginationNumbers: number[];

  constructor(
    private rickMortyService: RickMortyService
  ) { 
    this.characterData = {};
    this.paginationNumbers = [];
  }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.getAllCharactersData();
  }

  private getAllCharactersData(): void {
    this.rickMortyService.getAllCharacters().pipe(take(1)).subscribe(
      {
        next: (characters: Character) => {
          this.characterData = characters;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status)
        }
      });
  }
}
