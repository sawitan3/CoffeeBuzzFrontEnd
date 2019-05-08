import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from './models/common';
import {environment} from '../environments/environment';
import {StorageService} from './storage.service';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = `${environment.baseUrl}/users`;

  constructor(private httpService: HttpClient,
              private storage: StorageService) { }

  public index() {
    return this.httpService.get<ApiResponse>(`${this.baseUrl}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.storage.getItem('access_token')}`)
    });
  }
}
