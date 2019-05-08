import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BaristaPageComponent } from './barista-page/barista-page.component';

import { AuthGuard } from './guard/auth.guard';
import {LoginPageGuard} from './guard/login-page.guard';
import { CreateNewBaristaComponent } from './admin-page/create-new-barista/create-new-barista.component';
import { BaristaTableComponent } from './admin-page/barista-table/barista-table.component';
import {AdminGuard} from './guard/admin.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, canActivate: [LoginPageGuard]},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'barista-page', component: BaristaPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: MainMenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    MainMenuComponent,
    CartComponent,
    RegisterPageComponent,
    ItemContainerComponent,
    AdminPageComponent,
    BaristaPageComponent,
    CreateNewBaristaComponent,
    BaristaTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
