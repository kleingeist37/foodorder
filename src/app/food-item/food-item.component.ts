import { Component, Input, OnInit } from '@angular/core';
import { FoodItem } from '../shared/classes/food-item.class';


@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() properties: FoodItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
