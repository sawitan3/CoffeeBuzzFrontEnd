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
import { EditBaristaComponent } from './admin-page/edit-barista/edit-barista.component';

import { MenuTableComponent } from './admin-page/menu-table/menu-table.component';
import { FoodListComponent } from './admin-page/food-list/food-list.component';
import { DrinkListComponent } from './admin-page/drink-list/drink-list.component';
import { AddNewFoodComponent } from './admin-page/add-new-food/add-new-food.component';
import { AddNewDrinkComponent } from './admin-page/add-new-drink/add-new-drink.component';
import { EditFoodComponent } from './admin-page/edit-food/edit-food.component';
import { EditDrinkComponent } from './admin-page/edit-drink/edit-drink.component';

import {BaristaGuard} from './guard/barista.guard';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, canActivate: [LoginPageGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterPageComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'barista-page', component: BaristaPageComponent, canActivate: [AuthGuard, BaristaGuard]},
  {path: 'change-password', component: UpdatePasswordComponent, canActivate: [AuthGuard]},
  {path: 'payment', component: PaymentPageComponent, canActivate: [AuthGuard]},
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
    BaristaTableComponent,
    EditBaristaComponent,
    MenuTableComponent,
    MenuTableComponent,
    FoodListComponent,
    DrinkListComponent,
    AddNewFoodComponent,
    AddNewDrinkComponent,
    EditFoodComponent,
    EditDrinkComponent,
    CartItemComponent,
    UpdatePasswordComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateNewBaristaComponent, EditBaristaComponent, AddNewFoodComponent,
    AddNewDrinkComponent, EditFoodComponent, EditDrinkComponent]
})
export class AppModule { }
