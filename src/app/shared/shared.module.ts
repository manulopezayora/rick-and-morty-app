import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchInputComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
