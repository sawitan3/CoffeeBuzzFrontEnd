import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {UsersService} from '../users.service';
import {User} from '../models/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  user: User;

  constructor(private authService: AuthenticationService,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.authService.me().subscribe((res) => {this.user = res});
  }

  onSubmit() {
    this.usersService.password(this.user).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }

}
