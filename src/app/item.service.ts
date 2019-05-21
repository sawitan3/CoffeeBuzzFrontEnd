import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from './storage.service';
import {ItemPayload, ItemType} from './models/cart';
import {ApiResponse} from './models/common';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = `${environment.baseUrl}/items`;
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.storage.getItem('access_token')}`)
  }

  constructor(private httpService: HttpClient,
              private storage: StorageService) { }

  public add(id: number, type: ItemType) {
    const payload: ItemPayload = {item_type: type};
    if (type === 'drink') {
      payload.drink_id = id;
    } else if (type === 'food') {
      payload.food_id = id;
    }
    return this.httpService.post(this.baseUrl, payload, this.header);
  }

  public get(itemId: number) {
    return this.httpService.get<ApiResponse>(`${this.baseUrl}/${itemId}`, this.header);
  }
}
