import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageSub = new Subject<boolean>();
  constructor() { }

  public watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  public setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
    this.storageSub.next(true);
  }

  public getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
    this.storageSub.next(true);
  }

  public clear() {
    localStorage.clear();
    this.storageSub.next(true);
  }
}
