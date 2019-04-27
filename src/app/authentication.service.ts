import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = `${environment.baseUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(loginDetail: loginRequest): Observable<loginResponse>{
  	return this.http.post<loginResponse>(`${this.baseUrl}/login`,loginDetail)
  }
}

export interface loginRequest {
	userName: string,
	password: string,
}

export interface loginResponse {
	access_token: string,
	token_type: string,
	expires_in: number
}