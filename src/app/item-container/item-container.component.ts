import { Component, OnInit, Input } from '@angular/core';
import {DisplayDrink, DrinkDetails} from '../models/drink';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  selected: DrinkDetails;
  @Input('drink')
  public dataObject: DisplayDrink;

  @Input()
  price: number;

  @Input()
  size: string;


  constructor() { }

  ngOnInit() {
    this.selected = this.dataObject.drinkDetails[0];
  }

}
