import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodComponent} from './food/food.component';
import {AccountComponent} from './account/account.component';
import {OrderComponent} from './order/order.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FoodModule} from "./food/food.module";
import {AccountModule} from "./account/account.module";
import {OrderModule} from "./order/order.module";
import {HomepageModule} from "./homepage/homepage.module";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FoodModule,
    AccountModule,
    OrderModule,
    HomepageModule
  ],
  exports: [
    FoodModule,
    AccountModule,
    OrderModule,
    HomepageModule
  ]
})
export class FeatureModule {
}
