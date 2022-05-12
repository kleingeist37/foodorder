import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  openLink(route: string[], params?: Params){
    this.router.navigate([route], {queryParams: params});
  }
}
