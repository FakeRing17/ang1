import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../server/movie.service';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css'],
})
export class ViewMoviesComponent implements OnInit {
  movies: Movie[] = [];
  movieAdd: Movie = new Movie();
  title: string = '';
  order: string = 'desc';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  get itemNum() {
    return this.movies.length;
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  CompositeKey(index: any, item: Movie) {
    return item.title + item.director;
  }

  deleteMovie = (id: number): void => {
    this.movieService.deleteMovie(id).subscribe(
      (data) => {
        const imovie = this.movies.indexOf(data);
        this.movies.splice(imovie, 1);
        alert('Xoá thành công');
      },
      (err) => {
        console.log(err);
      }
    );
  };

  edit = (data: Movie): void => {
    this.movieAdd = data;
  };

  addMovie(): void {
    this.movieService.addMovie(this.movieAdd).subscribe(
      (data) => {
        alert('Thêm thành công');
        this.getMovies();
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.movieAdd = new Movie();
      }
    );
  }

  updateMovie(): void {
    this.movieService.updateMovie(this.movieAdd).subscribe(
      (data) => {
        alert('Cập nhật thành công');
        this.getMovies();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchByTitle() {
    this.movieService.searchMovieByTitle(this.title).subscribe(
      (data) => {
        console.log(data);
        if (data.length != 0) {
          this.movies = data;
        } else {
          alert('Không tìm thấy');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sortTitle(title: string): void {
    if (this.order == 'desc') this.order = 'asc';
    else this.order = 'desc';
    this.movieService.sortTitle(title, this.order).subscribe((data) => {
      this.movies = data;
    });
  }
}
