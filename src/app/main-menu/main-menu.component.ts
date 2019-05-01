import { Component, OnInit } from '@angular/core';
import {DrinksService, Drink} from '../drinks.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  drinks: DisplayDrink[]

  constructor(public drinksService: DrinksService) { }

  ngOnInit() {
  	this.drinksService.drinkList().subscribe(
  	  (result)=>{this.drinks = this.ConvertDataForDisplay(result.data);},(error)=>{console.log(error)});
  }

  private ConvertDataForDisplay(input: Drink[]): DisplayDrink[]{
  	let endResult = [];
    let currentDisplayObject = new DisplayDrink();
    currentDisplayObject.drinkDetails = [];
    let currentDrinkId = 1;
    for (const currentItem of input){
      if(currentItem.name_id!=currentDrinkId){
        endResult.push(currentDisplayObject);
        currentDisplayObject = new DisplayDrink();
        currentDisplayObject.drinkDetails = [];
        currentDrinkId = currentItem.name_id;
      }
      currentDisplayObject.name = currentItem.drink_name[0].name;
      let drinkDetails = new DrinkDetails();
      drinkDetails.size = currentItem.drink_size[0].size;
      drinkDetails.price = currentItem.price;
      drinkDetails.itemId = currentItem.id;
      currentDisplayObject.drinkDetails.push(drinkDetails);
    }
    endResult.push(currentDisplayObject);
    return endResult;
  }

}

export class DisplayDrink{
	name: string;
	drinkDetails: DrinkDetails[]
}

export class DrinkDetails{
	size: string;
	price: number;
	itemId: number;
}