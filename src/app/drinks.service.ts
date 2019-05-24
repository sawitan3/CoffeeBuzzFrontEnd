import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import {ApiResponse} from './models/common';
import {catchError, map} from 'rxjs/operators';
import {MenuDetails, MenuItem} from './models/common';
import {Drink} from './models/drink';
import {throwError} from 'rxjs';
import {StorageService} from './storage.service';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  baseUrl = `${environment.baseUrl}/drinks`;
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.storage.getItem('access_token')}`)
      .set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient,
              private storage: StorageService) { }

  public drinkList() {
    return this.http.get<ApiResponse>(this.baseUrl).pipe(map(x => this.ConvertDataForDisplay(x.data)));
  }

  public displayDrinkTable() {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  public update(drink: Drink) {
    const updateDrink = JSON.stringify({nameId: drink.name_id, sizeId: drink.size_id, price: drink.price});
    log(updateDrink);
    return this.http.patch(`${this.baseUrl}/${drink.id}`, updateDrink, this.header).pipe(
      catchError(this.handleError)
    );
  }

  private ConvertDataForDisplay(input: Drink[]): MenuItem[] {
    const endResult = [];
    let currentDisplayObject = new MenuItem();
    currentDisplayObject.menuDetails = [];
    let currentDrinkId = 1;
    for (const currentItem of input) {
      if (currentItem.name_id !== currentDrinkId) {
        endResult.push(currentDisplayObject);
        currentDisplayObject = new MenuItem();
        currentDisplayObject.menuDetails = [];
        currentDrinkId = currentItem.name_id;
      }
      currentDisplayObject.name = currentItem.drink_name[0].name;
      const drinkDetails = new MenuDetails();
      drinkDetails.size = currentItem.drink_size[0].size;
      drinkDetails.price = currentItem.price;
      drinkDetails.itemId = currentItem.id;
      currentDisplayObject.menuDetails.push(drinkDetails);
    }
    endResult.push(currentDisplayObject);
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
