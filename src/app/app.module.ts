import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CartComponent } from './cart/cart.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ItemContainerComponent } from './item-container/item-container.component';

const appRoutes: Routes = [
  {path:"login", component: LoginPageComponent},
  {path:"cart", component: CartComponent},
  {path:"register",component:RegisterPageComponent},
  {path:"**", component: MainMenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    MainMenuComponent,
    CartComponent,
    RegisterPageComponent,
    ItemContainerComponent
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
