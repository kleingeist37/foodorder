import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodItem } from '../shared/classes/food-item.class';
import { Data } from '../shared/data/data.class';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit, OnDestroy {
  itemList: FoodItem[] = [];
  subscription: Subscription;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.itemList = Data.Pizza;

    this.loadItems(this.route.snapshot.queryParams['cat']);

    this.subscription = this.route.queryParams.subscribe( 
      (params: Params) => this.loadItems(params['cat'])      
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadItems(cat: string){
    switch(cat){
        default:
        case 'pizza':
          this.itemList = Data.Pizza;
          break;

        case 'salad':
          this.itemList = Data.Salad;
    }
  }

}
