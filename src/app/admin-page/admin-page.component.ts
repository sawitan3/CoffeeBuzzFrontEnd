import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Role, User} from '../models/common';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private users: UsersService) { }

  baristas: User[];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.users.index().subscribe(
        (res) => {
        this.baristas = res.data;
        this.baristas = this.baristas.filter(item => item.role_id === Role.Barista);
      }
    );
  }
}
