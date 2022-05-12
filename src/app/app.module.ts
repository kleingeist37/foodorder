import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { MealListComponent } from './meal-list/meal-list.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { HomeComponent } from './home/home.component';
import { CategoryCardComponent } from './home/category-card/category-card.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCardComponent,
    FoodItemComponent,
    HomeComponent,
    MealListComponent,
    NavbarComponent,
    OrderMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
