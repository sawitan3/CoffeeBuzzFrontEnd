import { Component, OnInit } from '@angular/core';
import {RegisterData, RegisterService} from '../register.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user: RegisterData = { username: '', email: '', role: '3', password: ''};

  error;

  constructor(
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.addUser(this.user).subscribe((res) => {
      this.goHome();
    }, (err) => {
      this.error = {};
      this.error.type = 'danger';
      this.error.message = 'Failed to create a new account, try changing the username.';
    });
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
