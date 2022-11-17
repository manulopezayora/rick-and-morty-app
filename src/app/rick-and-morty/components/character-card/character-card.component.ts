import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character, CharacterResult } from '../../shared/model/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() characterData: CharacterResult;

  public statusColor: string;
  public alive: boolean;
  public dead: boolean;
  public unknown: boolean;

  constructor(
    private router: Router
  ) {
    this.statusColor = '';
    this.alive = false;
    this.dead = false;
    this.unknown = false;
  }

  ngOnInit(): void {
  }

  public getDetail(character: CharacterResult): void {
    this.router.navigate(['character/' + character.id]);
  } 

}
