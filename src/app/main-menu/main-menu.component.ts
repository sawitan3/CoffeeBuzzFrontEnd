import {Component, Input, OnInit} from '@angular/core';
import {Drink} from '../models/drink';
import {MenuService} from '../menu.service';
import {Food} from '../models/food';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  drinks: Drink[];
  food: Food[];

  @Input()
  name: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getDrinks();
    this.getFood();
  }

  getDrinks(): void {
    this.menuService.getDrinks().subscribe(result => {
      const res = result["data"];
      this.drinks = res;
      console.log(this.drinks);
    });
  }

  getFood(): void {
    this.menuService.getFood().subscribe(result => {
      let res = result["data"];
      this.food = res;
      console.log(this.food);
    });
  }
  //
  // getDrinks(): void {
  //   this.menuService.getDrinks().subscribe(result => this.drinks = result);
  // }

  // getDrinks(): void {
  //   this.menuService.getDrinks()
  //     .subscribe(result => {
  //       let res = result["data"];
  //       this.drinks = [{
  //         id: res['id'],
  //         name_id: res['name_id'],
  //         size_id: res['size_id'],
  //         price: res['price'],
  //         drink_name: {
  //           id: res['drink_name']['id'],
  //           name: res['drink_name']['name']
  //         },
  //         drink_size: {
  //           id: res['drink_size']['id'],
  //           size: res['drink_size']['size']
  //         }
  //       }];
  //     }
  //
  //   );
  // }
}
