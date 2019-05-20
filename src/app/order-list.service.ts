import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from './storage.service';
import {OrderListPayload, OrderListResponse} from './models/cart';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  baseUrl = `${environment.baseUrl}/order_lists`;
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.storage.getItem('access_token')}`)
  }

  constructor(private httpService: HttpClient,
              private storage: StorageService) { }

  public add(itemId: number, quantity: number) {
    const payload: OrderListPayload = {user_id: this.storage.getItem('user_id'), qty: quantity, item_id: itemId};
    return this.httpService.post(this.baseUrl, payload, this.header);
  }

  public get(): Observable<OrderListResponse[]> {
    const url = `${this.baseUrl}/${this.storage.getItem('user_id')}/get`;
    return this.httpService.get<OrderListResponse[]>(url, this.header);
  }
}
