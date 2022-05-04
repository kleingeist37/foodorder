import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  openLink(target: string[], params: Params, relative: boolean = true){
    // console.log(params);
    if(relative)
      this.route.navigate([target], {queryParams: {...params}, relativeTo: this.activatedRoute});
    else 
      this.route.navigate([target], {queryParams: {...params}});
  }
  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
}
