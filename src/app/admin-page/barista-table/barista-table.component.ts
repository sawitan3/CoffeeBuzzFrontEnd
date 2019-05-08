import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/common';

@Component({
  selector: 'app-barista-table',
  templateUrl: './barista-table.component.html',
  styleUrls: ['./barista-table.component.css']
})
export class BaristaTableComponent implements OnInit {

  @Input()
  baristas: User[];

  constructor() { }

  ngOnInit() {
  }

}
