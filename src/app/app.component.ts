import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';
import { Subscription } from 'rxjs';
import { OrderMenuService } from './order-menu/order-menu.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'foodorder';
  @ViewChild('drawer', { static: true}) public drawer!: MatDrawer;

  private stateSubscription: Subscription;

  constructor(private orderMenuService: OrderMenuService) { }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.stateSubscription = this.orderMenuService.isMenuOpen.subscribe((value: boolean) => this.toggleDrawer(value));    
  }

  toggleSideNav(){
    this.orderMenuService.toggleMenuState();
  }

  private toggleDrawer(value: boolean){
    this.drawer.toggle(value);
  }

}
