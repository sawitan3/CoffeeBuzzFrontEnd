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

  constructor(
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.addUser(this.user).subscribe();
    console.log(this.user);
    this.goHome();
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
