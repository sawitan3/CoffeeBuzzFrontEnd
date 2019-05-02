import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { environment } from '../environments/environment';
import {Drink} from './models/drink';


@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  baseUrl = `${environment.baseUrl}/drinks`;

  constructor(private http: HttpClient) { }

  public drinkList() {
    return this.http.get<Response>(this.baseUrl);
  }
}

export interface Response {
  data: Drink[];
}

