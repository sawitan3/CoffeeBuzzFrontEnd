import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  isLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  }

  linkClick(destination: string) {
    this.router.navigateByUrl(destination);
    this.isNavbarCollapsed = true;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/main-page']);
  }

}
