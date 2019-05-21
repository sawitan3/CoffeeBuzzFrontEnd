import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageService} from './storage.service';
import {ItemService} from './item.service';
import {OrderListService} from './order-list.service';
import {CartItem, ItemType, OrderListResponse} from './models/cart';
import {map, mergeMap} from 'rxjs/operators';
import {ConsolidatedMenuService} from './consolidated-menu.service';
import {MenuDetails, MenuItem} from './models/common';
import {isNullOrUndefined} from 'util';

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
    return this.orderListService.get().pipe(map(res => res.map(async item => await this.convertItem(item)))).toPromise();
  }

  private async convertItem(item: OrderListResponse) {
    let menuItems: MenuItem[];
    let currentItem: MenuItem;
    let foodIds;
    menuItems = await this.consolidatedMenu.Menu().toPromise();
    const temporaryItem = await this.itemService.get(item.item_id).toPromise();
    foodIds = {foodId: temporaryItem.data.food_id, drinkId: temporaryItem.data.drink_id}
    const itemArrays = menuItems.filter(x => (x.menuType === temporaryItem.data.item_type) &&
        (x.menuDetails.filter(y =>
            ((y.itemId === temporaryItem.data.food_id) && (!isNullOrUndefined(temporaryItem.data.food_id)))
            ||
            ((y.itemId === temporaryItem.data.drink_id) && (!isNullOrUndefined(temporaryItem.data.drink_id)))).length > 0));
    currentItem = itemArrays[0];
    const presentationalItem = this.mapForDisplay(currentItem, item, foodIds);
    return presentationalItem;
  }

  private mapForDisplay(item: MenuItem, orderItem: OrderListResponse, x: {foodId, drinkId}): CartItem {
    const Details: MenuDetails = item.menuDetails.filter(y =>
        ((y.itemId === x.foodId) && (!isNullOrUndefined(x.foodId)))
        ||
        ((y.itemId === x.drinkId) && (!isNullOrUndefined(x.drinkId))))[0];
    const result: CartItem = {
      id: orderItem.id,
      name: item.name,
      size: Details.size,
      qty: orderItem.qty,
      price: Details.price,
      menuType: item.menuType
    }
    return result;
  }
}
