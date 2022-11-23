import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../model/character.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() characters: Character;
  @Input() currentPage: number;
  @Output() sendCurrentPage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.currentPage = this.currentPage ?? 1;
  }

  public previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.sendCurrentPage.emit(this.currentPage);
    }
  }

  public nextPage(): void {
    if (this.currentPage >= 1) {
      this.currentPage++;
      this.sendCurrentPage.emit(this.currentPage);
    }
  }

  // private setPaginationNumbers(pagesIterator: Character){
  //   let totalNumberArray: number[] = [];
  //   const counter = pagesIterator.info?.pages || 0;
  //   for (let i = 0; i < counter; i++) {
  //     totalNumberArray.push(i + 1);
  //   }
  //   return totalNumberArray;
  // }

}
