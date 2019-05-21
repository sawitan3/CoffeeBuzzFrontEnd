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
  @Input()
  public item: MenuItem;

  constructor(private cartOrchestrator: CartOrchestratorService, private router: Router) { }

  ngOnInit() {
    this.selected = this.item.menuDetails[0];
  }

  addToCart() {
    console.log(this.selected);
    console.log(this.item);
    this.cartOrchestrator.add(this.selected.itemId, this.qty, this.item.menuType).subscribe(_ => {
      this.router.navigateByUrl('/cart');
    });
  }

}
