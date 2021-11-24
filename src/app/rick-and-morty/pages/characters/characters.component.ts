import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character, CharacterResult } from '../../shared/model/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characterData: CharacterResult[];

  constructor(
    private rickMortyService: RickMortyService
  ) { 
    this.characterData = [];
  }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.getAllCharactersData();
  }

  private getAllCharactersData(): void {
    this.rickMortyService.getAllCharacters().pipe(take(1)).subscribe(
      (characters: Character) => {
        const { results } = characters;
        this.characterData = results;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status)
      });
  }
}
