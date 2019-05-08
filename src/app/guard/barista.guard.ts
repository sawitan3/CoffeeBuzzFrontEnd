import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class BaristaGuard implements CanActivate {
  constructor(private router: Router,
              private storage: StorageService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storage.getItem('role') === 'barista' ? true : this.router.navigate(['/main-page']);
  }
}
