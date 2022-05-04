import { Component, OnInit } from '@angular/core';
import { Params, RouteConfigLoadEnd } from '@angular/router';
import { NavElement } from '../shared/classes/nav-element.class';
import { Data } from '../shared/data/data.class';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  elements: NavElement[] = [];
  constructor(private navigationService: NavigationService) { }


  openLink(route: string[], params?: Params){
    this.navigationService.openLink(route, params);
  }

  ngOnInit(): void {
    this.elements = Data.navElements;
  }

}
