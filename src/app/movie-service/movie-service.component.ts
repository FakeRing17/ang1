import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-service',
  templateUrl: './movie-service.component.html',
  providers: [MovieService],
})
export class MovieServiceComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  getMovies() {
    this.movies = this.movieService.getMovies();
  }
}
