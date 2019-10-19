import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BubbleSortComponent } from './algorithms/sorting/bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './algorithms/sorting/selection-sort/selection-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    SelectionSortComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
