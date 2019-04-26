import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {path:"login", component: LoginPageComponent},
  {path:"cart", component: CartComponent},
  {path:"**", component: MainMenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    MainMenuComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
