import { Injectable } from '@angular/core';
import { DrinksService} from './drinks.service';
import {FoodsService} from './foods.service';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsolidatedMenuService {

  constructor(private drinksService: DrinksService, private foodsService: FoodsService) { }

  public Menu() {
    const drinks = this.drinksService.drinkList();
    const foods = this.foodsService.foodList();
    return forkJoin([drinks, foods]).pipe(map(result => result[0].concat(result[1])));
  }
}
