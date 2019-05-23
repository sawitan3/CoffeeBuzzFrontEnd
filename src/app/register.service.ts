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
    return this.http.post<RegisterData>(this.baseUrl, userJson, httpOptions);
  }
}

export interface RegisterData {
  username: string;
  email: string;
  role: string;
  password: string;
}
