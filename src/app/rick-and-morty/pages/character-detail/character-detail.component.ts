import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { RickMortyService } from '../../services/rick-morty.service';
import { CharacterResult } from '../../model/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public characterId: string;
  public characterData!: CharacterResult;

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) {
    this.characterId = route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.getCharacterDetail(this.characterId);
  }

  private getCharacterDetail(id: string) {
    this.rickMortyService.getCharacterDetail(id).pipe(take(1)).subscribe(
      {
        next: (character: CharacterResult) => {
          this.characterData = character;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status)
        }
      }
    )
  }

}
