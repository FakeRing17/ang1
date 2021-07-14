import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputchangeComponent } from './inputchange/inputchange.component';
import { FormsModule } from '@angular/forms';
import { NgforExComponent } from './ngfor-ex/ngfor-ex.component';
import { FromComponent } from './from/from.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceComponent } from './movie-service/movie-service.component';

@NgModule({
  declarations: [
    AppComponent,
    InputchangeComponent,
    NgforExComponent,
    FromComponent,
    TestServiceComponent,
    ViewMoviesComponent,
    MovieServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
