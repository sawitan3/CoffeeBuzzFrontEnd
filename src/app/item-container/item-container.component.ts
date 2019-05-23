import { Component, OnInit, Input } from '@angular/core';
import {MenuItem, MenuDetails} from '../models/common';
import {CartOrchestratorService} from '../cart-orchestrator.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  selected: MenuDetails;
  qty: number;

  button: {disabled: boolean; message: string};

  @Input()
  public item: MenuItem;

  constructor(private cartOrchestrator: CartOrchestratorService, private router: Router) { }

  ngOnInit() {
    this.qty = 1;
    this.selected = this.item.menuDetails[0];
    this.button = {disabled: false, message: 'Add to Cart'};
    this.soldOutCheck();
  }

  addToCart() {
    this.cartOrchestrator.add(this.selected.itemId, this.qty, this.item.menuType).subscribe(_ => {
      this.router.navigateByUrl('/cart');
    }, err => {
      this.router.navigateByUrl('/login');
    });
  }

  soldOutCheck() {
    if (this.selected.qty && (this.selected.qty === 0 || this.qty > this.selected.qty)) {
      this.button.disabled = true;
      this.button.message = 'Sold out';
    } else {
      this.button.disabled = false;
      this.button.message = 'Add to Cart';
    }
  }

  onChange() {
    if (this.qty < 1) {
      this.qty = -this.qty;
    }
    if (this.qty === 0) {
      this.qty = 1;
    }
    this.soldOutCheck();
  }

}
