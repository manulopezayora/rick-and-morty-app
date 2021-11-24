import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character, CharacterInfo } from '../../shared/model/character.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: any;

  constructor(
    private rickMortyService: RickMortyService
  ) { }

  ngOnInit(): void {
    console.log(this.pagination)
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

  private setPaginationNumbers(pagesIterator: CharacterInfo){
    let totalNumberArray: number[] = [];
    for (let i = 0; i < pagesIterator.pages; i++) {
      totalNumberArray.push(i + 1);
    }
    return totalNumberArray;
  }

}
