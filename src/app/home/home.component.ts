import { Component, OnInit } from '@angular/core';
import { CategoryCard } from '../shared/classes/category-card.class';
import { Data } from '../shared/data/data.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: CategoryCard[] = [
    new CategoryCard('Vorspeisen', '/list', 'Will ja doch keiner', 'https://p1.pxfuel.com/preview/854/449/76/bruschetti-italian-food-starters-gourmet.jpg', {'cat': 'starter'}),
    new CategoryCard('Salate', '/list', 'Gesund statt rund!', 'https://simply-delicious-food.com/wp-content/uploads/2020/10/Lemon-Parmesan-Green-Salad-5.jpg', {'cat': 'salad'}),
    new CategoryCard('Pizza', '/list', 'Fett und nett', 'https://www.lieferando.de/foodwiki/uploads/sites/8/2018/01/pizza-3-1080x960.jpg', {'cat': 'pizza'}),
    new CategoryCard('Pasta', '/list', 'Mamma mia!', 'https://ais.kochbar.de/kbrezept/306041_1010094/1200x1200/pasta-aurora-rezept-bild-nr-2.jpg', {'cat': 'pasta'}),
];
  constructor() { }

  ngOnInit(): void {
    // this.cards = Data.CategoryCards;
  }

}
