import { Component, OnInit } from '@angular/core';
import {loginRequest, AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

	model: loginRequest = {userName:"",password:""};

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.authenticationService.login(this.model).subscribe(
  		(response)=>{localStorage.setItem("access_token",response.access_token)},
  		(err)=>{console.log(err)}
  	)
  }

}
