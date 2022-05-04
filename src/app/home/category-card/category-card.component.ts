import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})

export class CategoryCardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() url: string;
  @Input() route: string[];
  @Input() params: Params;

  constructor(private navigationService: NavigationService) { }


  openLink(){
    // console.log(this.route);
    this.navigationService.openLink(this.route, this.params);
  }
  ngOnInit(): void {
  }

}
