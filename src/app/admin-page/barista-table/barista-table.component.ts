import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/common';
import {Router} from '@angular/router';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-barista-table',
  templateUrl: './barista-table.component.html',
  styleUrls: ['./barista-table.component.css']
})
export class BaristaTableComponent implements OnInit {

  @Input()
  baristas: User[];

  constructor(private router: Router,
              private usersService: UsersService) { }

  ngOnInit() {
  }

  deleteBarista(id: number) {
    this.usersService.delete(id).subscribe((res) => {
      window.location.reload();
    });
  }

}
