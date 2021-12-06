import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FoodComponent} from "./food.component";
import {ListFoodComponent} from "./list-food/list-food.component";

const routes: Routes = [
  {
    path: 'food', component: FoodComponent,
    children: [
      {path: 'list', component: ListFoodComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
