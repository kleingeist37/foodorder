import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodItem } from '../shared/classes/food-item.class';


@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  @Input() item: FoodItem;
  maxCols: number;
  // keys;
  constructor() { }

  namedPropList: {header: string, value: any, span: number}[] = []

  ngOnInit(): void {
    // this.keys = Object.keys(this.item);

    //Evtl ein Fall für Localization
    this.namedPropList = [
      {header: "Nummer", value: this.item.number, span: 1},
      {header: "Name", value: this.item.displayname, span: 1},
      {header: "Zutaten", value: this.item.ingredients.sort(), span: 2},
      {header: "Preis", value: this.item.price, span: 1},
    ]

    this.maxCols = this.namedPropList.reduce((partialSum, a) => partialSum + a.span, 0);
  }

  arrayCheck(element: any) : boolean {
    return element instanceof Array;
  }

}
