import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
