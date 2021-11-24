import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuIsShown: boolean;

  constructor() { 
    this.menuIsShown = false;
  }

  ngOnInit(): void {
  }

  public pushMenu(): void {
    this.menuIsShown = !this.menuIsShown;
  }

}
