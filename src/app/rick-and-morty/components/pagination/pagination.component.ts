import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character, CharacterInfo } from '../../model/character.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() characterData: Character;

  public paginationNumbers!: number[];

  constructor(
    private rickMortyService: RickMortyService
  ) {
    this.characterData = {};
   }

  ngOnInit(): void {
    this.paginationNumbers = this.setPaginationNumbers(this.characterData);
    console.log(this.paginationNumbers)
  }

  public getCharactersByPage(page: number) {
    this.rickMortyService.getCharactersByPage(page).pipe(take(1)).subscribe(
      {
        next: (characters: Character) => {
          console.log(characters)
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status)
        }
      }
    )
  }

  private setPaginationNumbers(pagesIterator: Character){
    let totalNumberArray: number[] = [];
    const counter = pagesIterator.info?.pages || 0;
    for (let i = 0; i < counter; i++) {
      totalNumberArray.push(i + 1);
    }
    return totalNumberArray;
  }

}
