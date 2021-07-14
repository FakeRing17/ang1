import { Movie } from '../model/movie';

export class MovieService {
  public getMovies() {
    let movies: Movie[];

    movies = [
      {
        id: 0,
        title: 'Zootopia',
        director: 'Byron Howard, Rich Moore',
        cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
        releaseDate: new Date(2016, 3, 4),
      },
      {
        id: 1,
        title: 'Batman v Superman: Dawn of Justice',
        director: 'Zack Snyder',
        cast: 'Ben Affleck, Henry Cavill, Amy Adams',
        releaseDate: new Date(2016, 3, 25),
      },
      {
        id: 2,
        title: 'Captain American: Civil War',
        director: 'Anthony Russo, Joe Russo',
        cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
        releaseDate: new Date(2016, 5, 6),
      },
      {
        id: 3,
        title: 'X-Men: Apocalypse',
        director: 'Bryan Singer',
        cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
        releaseDate: new Date(2016, 5, 27),
      },
      {
        id: 4,
        title: 'Warcraft',
        director: 'Duncan Jones',
        cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
        releaseDate: new Date(2016, 6, 10),
      },
    ];

    return movies;
  }
}
