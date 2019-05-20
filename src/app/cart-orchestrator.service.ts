import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageService} from './storage.service';
import {ItemService} from './item.service';
import {OrderListService} from './order-list.service';
import {ItemType, OrderListResponse} from './models/cart';
import {map, mergeMap} from 'rxjs/operators';
import {ConsolidatedMenuService} from './consolidated-menu.service';
import {MenuItem} from './models/common';

@Injectable({
  providedIn: 'root'
})
export class CartOrchestratorService {

  constructor(private httpService: HttpClient,
              private storage: StorageService,
              private itemService: ItemService,
              private orderListService: OrderListService,
              private consolidatedMenu: ConsolidatedMenuService) { }

  public add(itemId: number, qty: number, type: ItemType) {
    return this.itemService.add(itemId, type).pipe(mergeMap((x: any) => this.orderListService.add(x.data.id, qty)));
  }

  public get() {
    return this.orderListService.get().pipe(map(res => res.map(item => this.convertItem(item))));
  }

  private convertItem(item: OrderListResponse) {
    let menuItems: MenuItem[];
    this.consolidatedMenu.Menu().subscribe((res) => {menuItems = res; });
    let currentItem: MenuItem;
    this.itemService.get(item.item_id).subscribe((res) => {
      const itemArrays = menuItems.filter(x => (x.menuType === res.data.item_type) &&
          (x.menuDetails.filter(y => (y.itemId === res.data.food_id) || (y.itemId === res.data.drink_id)).length > 0));
      currentItem = itemArrays[0];
    });
    return currentItem;
  }
}
