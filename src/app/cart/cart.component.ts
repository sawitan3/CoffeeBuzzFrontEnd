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

  public sum: number;

  constructor(private orchestratorService: CartOrchestratorService,
              private router: Router) { }

  ngOnInit() {
    this.orchestratorService.get().then(res => {
      Promise.all(res).then(result => {
        this.items = result;
        this.sum = this.items.map((item) => item.price * item.qty).reduce((a, b) => a + b, 0);
      });
    });
  }

  goAway() {
    this.router.navigateByUrl('/payment');
  }

}
