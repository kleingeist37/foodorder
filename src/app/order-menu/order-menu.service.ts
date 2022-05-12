import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderMenuService{
    private menuState: boolean = false;
    isMenuOpen: Subject<boolean> = new Subject<boolean>();
    
    toggleMenuState(){
        this.menuState = !this.menuState;
        this.isMenuOpen.next(this.menuState);
    }
}