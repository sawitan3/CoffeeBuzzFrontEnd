import { Component, OnInit } from '@angular/core';
import {LoginRequest, LoginResponse, AuthenticationService, User} from '../authentication.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: LoginRequest = {username: '', password: ''};
  error: ErrorMessage;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.error = null;
  }

  onSubmit() {
    this.error = null;
    this.authenticationService.login(this.model).subscribe(
      (response) => {this.onSuccess(response); },
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

  onSuccess(response: LoginResponse) {
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('isLoggedIn', 'true');
    this.authenticationService.me().subscribe(
        (res) => {this.redirection(res); },
        (err) => {this.onError(err); }
    );
  }

  redirection(response: User) {
    if (response.role_id === 1) {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin-page']);
    } else if (response.role_id === 2 ) {
      localStorage.setItem('role', 'barista');
      this.router.navigate(['/barista-page']);
    } else {
      localStorage.setItem('role', 'customer');
      this.router.navigate(['/main-page']);
    }
  }

}

interface ErrorMessage {
  type: string;
  message: string;
}
