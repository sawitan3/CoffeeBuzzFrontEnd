import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {ApiResponse} from './models/common';
import {map} from 'rxjs/operators';
import {MenuDetails, MenuItem} from './models/common';
import {Drink} from './models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  baseUrl = `${environment.baseUrl}/drinks`;

  constructor(private http: HttpClient) { }

  public drinkList() {
    return this.http.get<ApiResponse>(this.baseUrl).pipe(map(x => this.ConvertDataForDisplay(x.data)));
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
      currentDisplayObject.menuType = 'drink';
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
}
