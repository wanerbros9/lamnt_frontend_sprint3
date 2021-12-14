import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFoodComponent } from './create-food/create-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { ListFoodComponent } from './list-food/list-food.component';
import {FoodComponent} from "./food.component";
import {FoodRoutingModule} from "./food-routing.module";
import {ShareModule} from "../../share-module/share.module";
import { DetailFoodComponent } from './detail-food/detail-food.component';



@NgModule({
  declarations: [
    FoodComponent,
    CreateFoodComponent,
    UpdateFoodComponent,
    ListFoodComponent,
    DetailFoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    ShareModule
  ]
})
export class FoodModule { }
