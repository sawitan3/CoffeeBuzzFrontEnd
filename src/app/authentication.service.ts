import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = `${environment.baseUrl}/auth`;

  constructor(private http: HttpClient) { }

  public login(loginDetail: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginDetail);
  }

  public me(): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/me`, null, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
    });
  }
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role_id: number;
}
