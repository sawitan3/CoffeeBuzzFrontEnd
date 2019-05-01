
import {Component, Input, OnInit} from '@angular/core';
import {DisplayDrink, Drink, DrinkDetails} from '../models/drink';
import {MenuService} from '../menu.service';
import {Food} from '../models/food';
import {DrinksService} from '../drinks.service';

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

  drinks: DisplayDrink[];

  constructor(public drinksService: DrinksService) { }

  ngOnInit() {
    this.getDrinks();
  }

  private getDrinks() {
    this.drinksService.drinkList().subscribe(
      (result) => {this.drinks = this.ConvertDataForDisplay(result.data); } , (error) => {console.log(error);});
  }

  private ConvertDataForDisplay(input: Drink[]): DisplayDrink[] {
    const endResult = [];
    let currentDisplayObject = new DisplayDrink();
    currentDisplayObject.drinkDetails = [];
    let currentDrinkId = 1;
    for (const currentItem of input) {
      if (currentItem.name_id != currentDrinkId) {
        endResult.push(currentDisplayObject);
        currentDisplayObject = new DisplayDrink();
        currentDisplayObject.drinkDetails = [];
        currentDrinkId = currentItem.name_id;
      }
      currentDisplayObject.name = currentItem.drink_name[0].name;
      const drinkDetails = new DrinkDetails();
      drinkDetails.size = currentItem.drink_size[0].size;
      drinkDetails.price = currentItem.price;
      drinkDetails.itemId = currentItem.id;
      currentDisplayObject.drinkDetails.push(drinkDetails);
    }
    endResult.push(currentDisplayObject);
    return endResult;
  }
}


