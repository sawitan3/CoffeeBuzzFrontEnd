import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Drink} from './models/drink';
import { environment } from '../environments/environment';
import {Food} from './models/food';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private drinksUrl = `${environment.baseUrl}/auth/drinks`;
  private foodUrl = `${environment.baseUrl}/auth/foods`;

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinksUrl).pipe(
      catchError(this.handleError<Drink[]>('getDrinks', []))
    );
  }

  getFood(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodUrl).pipe(
      catchError(this.handleError<Food[]>('getFood', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

// .pipe(
  // catchError(this.handleError<Drink[]>('getDrinks', []))
// );
