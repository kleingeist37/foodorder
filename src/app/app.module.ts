import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { MealListComponent } from './meal-list/meal-list.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { HomeComponent } from './home/home.component';
import { CategoryCardComponent } from './home/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealListComponent,
    FoodItemComponent,
    HomeComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
