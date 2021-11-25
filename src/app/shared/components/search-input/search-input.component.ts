import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() characterEvent;

  public character = new FormControl('', [Validators.required]);

  constructor() {
    this.characterEvent = new EventEmitter();
   }

  ngOnInit(): void {
  }

  public searchCharacter(): void {
    this.character.valid ? this.characterEvent.emit(this.character.value) : console.log('invalid');
  }

}
