
import {Component, OnInit} from '@angular/core';
import {DrinksService} from '../drinks.service';
import { ConsolidatedMenuService} from '../consolidated-menu.service';
import {MenuItem} from '../models/common';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  // drinks: Drink[];
  // food: Food[];
  //
  // @Input()
  // name: string;
  //
  // constructor(private menuService: MenuService) { }
  //
  // ngOnInit() {
  //   this.getDrinks();
  //   this.getFood();
  // }
  //
  // getDrinks(): void {
  //   this.menuService.getDrinks().subscribe(result => {
  //     const res = result["data"];
  //     this.drinks = res;
  //     console.log(this.drinks);
  //   });
  // }
  //
  // getFood(): void {
  //   this.menuService.getFood().subscribe(result => {
  //     let res = result["data"];
  //     this.food = res;
  //     console.log(this.food);
  //   });food

  items: MenuItem[];

  constructor(public menuService: ConsolidatedMenuService) { }

  ngOnInit() {
    this.getDrinks();
  }

  private getDrinks() {
    this.menuService.Menu().subscribe(
      (result) => {this.items = result;} , (error) => { console.log(error); });
  }

}


