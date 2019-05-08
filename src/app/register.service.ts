import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  baseUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  addUser(user: RegisterData): Observable<RegisterData> {
    const userJson = JSON.stringify(user);
    console.log(userJson);
    return this.http.post<RegisterData>(this.baseUrl, userJson, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}, ` +
        `the error was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

export interface RegisterData {
  username: string;
  email: string;
  role: string;
  password: string;
}
