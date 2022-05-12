import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { OrderMenuService } from '../order-menu/order-menu.service';
import { NavElement } from '../shared/classes/nav-element.class';
import { Data } from '../shared/data/data.class';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  elements: NavElement[] = [
    new NavElement('Home', '/', {}),
    new NavElement('Vorspeisen', '/list', {'cat': 'starter'}),
    new NavElement('Salate', '/list', {'cat': 'salad'}),
    new NavElement('Pizza', '/list', {'cat': 'pizza'}),
    new NavElement('Pasta', '/list', {'cat': 'pasta'})
];

  constructor(private orderMenuService: OrderMenuService){}
  
  // ngOnInit(): void {
  //   this.elements = Data.navElements;
  // }

  toggleSideMenu(){
    this.orderMenuService.toggleMenuState();
  }



}
