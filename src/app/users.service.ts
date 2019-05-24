import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse, User} from './models/common';
import {environment} from '../environments/environment';
import {StorageService} from './storage.service';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = `${environment.baseUrl}/users`;
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.storage.getItem('access_token')}`)
  };

  constructor(private httpService: HttpClient,
              private storage: StorageService) { }

  public index() {
    return this.httpService.get<ApiResponse>(`${this.baseUrl}`, this.header);
  }

  public delete(id: number) {
    return this.httpService.delete(`${this.baseUrl}/${id}`, this.header);
  }

  public update(user: User) {
    return this.httpService.patch(`${environment.baseUrl}/admin`, user, this.header);
  }

  public password(user: User) {
    return this.httpService.put(`${this.baseUrl}/${user.id}`, {...user, role: user.role_id}, this.header);
  }
}
