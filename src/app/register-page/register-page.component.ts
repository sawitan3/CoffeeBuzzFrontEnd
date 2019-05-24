import { Component, OnInit } from '@angular/core';
import {RegisterData, RegisterService} from '../register.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user: RegisterData = { username: '', email: '', role: '3', password: ''};

  confirm = '';

  error: {message; type} = null;

  constructor(
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.addUser(this.user).subscribe((res) => {
      this.goHome();
    }, (err) => {
      this.onError(err);
    });
  }

  onError(error: HttpErrorResponse) {
    console.log(error);
    this.error = {type: '', message: ''};
    if (error.status === 422) {
      this.error.message = 'Username is already used.';
      this.error.type = 'info';
    } else if (error.status === 0 || error.status === 500 || error.status === 404) {
      this.error.message = 'Our server encountered a problem. Please try again.';
      this.error.type = 'info';
    }
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
