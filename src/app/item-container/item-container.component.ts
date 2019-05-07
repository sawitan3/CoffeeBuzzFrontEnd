import { Component, OnInit, Input } from '@angular/core';
import {MenuItem, MenuDetails} from '../models/common';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  selected: MenuDetails;
  @Input()
  public item: MenuItem;

  constructor() { }

  ngOnInit() {
    this.selected = this.item.menuDetails[0];
  }

}
