import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  baseUrl = `${environment.baseUrl}/drinks`;

  constructor(private http: HttpClient) { }

  public drinkList(){
  	return this.http.get<Response>(this.baseUrl);
  }
}

export interface Drink{
	id: number,
	name_id: number,
	size_id: number,
	price: number,
	drink_name: DrinkName[],
	drink_size: DrinkSize[]
}

export interface Response {
	data: Drink[]
}

export interface DrinkName{
	id: number,
	name: string
}

export interface DrinkSize{
	id: number,
	size: string
}