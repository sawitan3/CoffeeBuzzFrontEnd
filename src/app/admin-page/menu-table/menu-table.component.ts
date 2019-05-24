import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../../models/food';
import {Drink} from '../../models/drink';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.css']
})
export class MenuTableComponent implements OnInit {

  @Input()
  foods: Food[];

  @Input()
  drinks: Drink[];

  constructor() { }

  ngOnInit() {
  }

}
