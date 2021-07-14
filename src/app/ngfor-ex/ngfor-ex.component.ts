import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-ex',
  templateUrl: './ngfor-ex.component.html',
  styleUrls: ['./ngfor-ex.component.css'],
})
export class NgforExComponent implements OnInit {
  movieAdd: Movie = new Movie();

  constructor() {}

  ngOnInit(): void {}

  title: string = 'Top 5 Movies';

  get itemNum() {
    return this.movies.length;
  }

  movies: Movie[] = [
    {
      title: 'Zootopia',
      director: 'Byron Howard, Rich Moore',
      cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
      releaseDate: 'March 4, 2016',
    },
    {
      title: 'Batman v Superman: Dawn of Justice',
      director: 'Zack Snyder',
      cast: 'Ben Affleck, Henry Cavill, Amy Adams',
      releaseDate: 'March 25, 2016',
    },
    {
      title: 'Captain American: Civil War',
      director: 'Anthony Russo, Joe Russo',
      cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
      releaseDate: 'May 6, 2016',
    },
    {
      title: 'X-Men: Apocalypse',
      director: 'Bryan Singer',
      cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
      releaseDate: 'May 27, 2016',
    },
    {
      title: 'Warcraft',
      director: 'Duncan Jones',
      cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
      releaseDate: 'June 10, 2016',
    },
  ];

  CompositeKey(index: any, item: Movie) {
    return item.title + item.director;
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
    alert('Bạn có muốn xoá?');
  }
  addMovie(): void {
    this.movies.push(this.movieAdd);
    this.movieAdd = new Movie();
  }
}

class Movie {
  title: string = '';
  director: string = '';
  cast: string = '';
  releaseDate: string = '';
}
