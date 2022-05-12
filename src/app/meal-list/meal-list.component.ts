import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodItem } from '../shared/classes/food-item.class';
import { Data } from '../shared/data/data.class';
import { HttpClientService } from '../shared/services/http-client.service';


@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit, OnDestroy {
  itemList: FoodItem[] = [];
  title: string;
  url: string;
  subscription: Subscription;
  foodListSub: Subscription
  constructor(private route: ActivatedRoute, private httpClient: HttpClientService) { }


  ngOnInit(): void {
    //Data.Pizza;
    //this.httpClient.pushData(this.itemList, this.route.snapshot.queryParams['cat']);
    //this.loadItems(this.route.snapshot.queryParams['cat']);

    this.subscription = this.route.queryParams.subscribe( 
      (params: Params) => this.loadItems(params['cat'])      
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.foodListSub.unsubscribe();
  }



  private loadItems(cat: string){
    this.foodListSub =  this.httpClient
                            .getData(cat)
                            .subscribe((response: FoodItem[]) => {
                              this.itemList = response;
                            }); 

    this.title = cat;
    this.url = Data.Pictures.find(x => x.cat === cat).url;
    // switch(cat){
    //     default:
    //     case 'pizza':
    //       this.itemList = Data.Pizza;
          
    //       break;

    //     case 'salad':
    //       this.itemList = Data.Salad;
    // }
  }

}
