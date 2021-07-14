import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforExComponent } from './ngfor-ex/ngfor-ex.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { InputchangeComponent } from './inputchange/inputchange.component';

const routes: Routes = [
  { path: '', redirectTo: 'viewMovie', pathMatch: 'full' },
  { path: 'viewMovie', component: ViewMoviesComponent },
  { path: 'ngfor', component: NgforExComponent },
  { path: 'inputChange', component: InputchangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
