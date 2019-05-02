import { Component, OnInit } from '@angular/core';
import {LoginRequest, AuthenticationService} from '../authentication.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: LoginRequest = {userName: '', password: ''};
  error: ErrorMessage;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.error = null;
  }

  onSubmit() {
    this.error = null;
    this.authenticationService.login(this.model).subscribe(
      (response) => {localStorage.setItem('access_token', response.access_token); },
      (err) => {this.onError(err); }
      );
  }

  onError(error: HttpErrorResponse) {
    console.log(error);
    this.error = {type: '', message: ''};
    if (error.status === 401) {
      this.error.message = 'Username/Password is invalid.';
      this.error.type = 'danger';
    } else if (error.status === 0 || error.status === 500) {
      this.error.message = 'Our server encountered a problem. Please try again.';
      this.error.type = 'info';
    }
  }

}

interface ErrorMessage {
  type: string;
  message: string;
}
