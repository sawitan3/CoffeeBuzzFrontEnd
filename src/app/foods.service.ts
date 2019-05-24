import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponseBase} from '@angular/common/http';
import { environment } from '../environments/environment';
import {Food} from './models/food';
import {catchError, map} from 'rxjs/operators';
import {MenuDetails, MenuItem, ApiResponse} from './models/common';
import {Observable, throwError} from 'rxjs';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  baseUrl = `${environment.baseUrl}/foods`;
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.storage.getItem('access_token')}`)
      .set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient,
              private storage: StorageService) { }

  public foodList() {
    return this.http.get<ApiResponse>(this.baseUrl).pipe(map(result => this.ConvertIntoDisplayModel(result.data) ));
  }

  public displayFoodTable() {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  public delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, this.header);
  }

  public add(food: NewFoodData): Observable<NewFoodData> {
    const foodJson = JSON.stringify(food);
    return this.http.post<NewFoodData>(this.baseUrl, foodJson, this.header).pipe(
      catchError(this.handleError)
    );
  }

  public update(food: Food) {
    return this.http.patch(`${this.baseUrl}/${food.id}`, food, this.header).pipe(
      catchError(this.handleError)
    );
  }

  private ConvertIntoDisplayModel(input: Food[]): MenuItem[] {
    const endResult = [];
    for (const item of input) {
      const newItem = new MenuItem();
      newItem.name = item.name;
      newItem.menuType = 'food';
      newItem.menuDetails = [];
      const itemDetails = new MenuDetails();
      itemDetails.itemId = item.id;
      itemDetails.qty = item.qty;
      itemDetails.price = item.price;
      newItem.menuDetails.push(itemDetails);
      endResult.push(newItem);
    }
    return endResult;
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

export interface NewFoodData {
  name: string;
  qty: number;
  price: number;
}
