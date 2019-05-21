import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../models/cart';
import {OrderListService} from '../../order-list.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  public item: CartItem;

  constructor(private orderService: OrderListService) { }

  ngOnInit() {
  }

  removeFromCart() {
    this.orderService.remove(this.item.id).subscribe(() => {window.location.reload();});
  }
}
