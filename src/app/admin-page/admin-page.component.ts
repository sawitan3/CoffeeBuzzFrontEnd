import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Role, User} from '../models/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateNewBaristaComponent} from './create-new-barista/create-new-barista.component';
import {Food} from '../models/food';
import {FoodsService} from '../foods.service';
import {DrinksService} from '../drinks.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private users: UsersService,
              private modalService: NgbModal,
              private food: FoodsService,
              private drink: DrinksService) { }

  baristas: User[];
  foods: Food[];

  ngOnInit() {
    this.getData();
    this.getFood();
    this.getDrink();
  }

  getData() {
    this.users.index().subscribe(
        (res) => {
        this.baristas = res.data;
        this.baristas = this.baristas.filter(item => item.role_id === Role.Barista);
      }
    );
  }

  getFood() {
    this.food.displayFoodTable().subscribe(
      (res) => {
        this.foods = res.data;
      }
    );
  }

  getDrink() {
    this.drink.displayDrinkTable().subscribe(
      (res) => {
        this.drink = res.data;
      }
    );
  }

  newBarista() {
    this.modalService.open(CreateNewBaristaComponent);
  }
}
