import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Joke } from '../models/joke.model';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const jokeApiUrl = environment.jokeApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  /** POST: check for jokes that match available letters */
  checkJoke (joke: Joke): any {
    return this.http.post( jokeApiUrl, joke, httpOptions );
  }

}