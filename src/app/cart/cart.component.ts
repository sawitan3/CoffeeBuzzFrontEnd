import { Component, OnInit } from '@angular/core';
import {CartOrchestratorService} from '../cart-orchestrator.service';
import {CartItem} from '../models/cart';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: CartItem[];

  constructor(private orchestratorService: CartOrchestratorService,
              private router: Router) { }

  ngOnInit() {
    this.orchestratorService.get().then(res => {
      Promise.all(res).then(result => {
        this.items = result;
      });
    });
  }

  goAway() {
    this.router.navigateByUrl('/payment');
  }

}
