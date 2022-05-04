import { Component, OnInit } from '@angular/core';
import { CategoryCard } from '../shared/classes/category-card.class';
import { Data } from '../shared/data/data.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: CategoryCard[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = Data.CategoryCards;
  }

}
