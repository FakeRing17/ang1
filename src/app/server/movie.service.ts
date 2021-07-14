import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://60ed48f1a78dc700178addd6.mockapi.io/Movies';
  movies: Movie[] = [];

  public getMovies(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  public deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(this.baseURL + `/${id}`);
  }

  public addMovie(movie: Movie): Observable<any> {
    return this.http.post<any>(this.baseURL, movie);
  }

  public updateMovie(movie: Movie): Observable<any> {
    return this.http.put<any>(this.baseURL + `/${movie.id}`, movie);
  }

  public searchMovieByTitle(title: string): Observable<any> {
    return this.http.get<Movie[]>(this.baseURL + `?title=${title}`);
  }

  public sortTitle(abc: string, order: string): Observable<any> {
    return this.http.get<Movie[]>(
      this.baseURL + `?sortBy=${abc}&order=${order}`
    );
  }
}
