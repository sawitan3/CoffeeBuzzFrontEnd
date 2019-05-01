import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  @Input()
  type: number;

  @Input()
  name: string;

  @Input()
  price: number;

  @Input()
  size: string;


  constructor() { }

  ngOnInit() {
  }

  isDrink(): boolean {
    if (this.type === 1) {
      return true;
    }
    return false;
  }

}
