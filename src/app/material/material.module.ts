import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  exports: [
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
