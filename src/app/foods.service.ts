import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { environment } from '../environments/environment';
import {Food} from './models/food';
import {map} from 'rxjs/operators';
import {MenuDetails, MenuItem, MenuResponse} from './models/common';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  baseUrl = `${environment.baseUrl}/foods`;

  constructor(private http: HttpClient) { }

  public foodList() {
    return this.http.get<MenuResponse>(this.baseUrl).pipe(map(result => this.ConvertIntoDisplayModel(result.data) ));
  }

  private ConvertIntoDisplayModel(input: Food[]): MenuItem[] {
    const endResult = [];
    for (const item of input) {
      const newItem = new MenuItem();
      newItem.name = item.name;
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
}
