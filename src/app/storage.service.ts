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
    sessionStorage.setItem(key, JSON.stringify(data));
    this.storageSub.next(true);
  }

  public getItem(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public removeItem(key: string) {
    sessionStorage.removeItem(key);
    this.storageSub.next(true);
  }

  public clear() {
    sessionStorage.clear();
    this.storageSub.next(true);
  }
}
