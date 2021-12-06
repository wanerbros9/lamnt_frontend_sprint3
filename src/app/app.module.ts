import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShareModule} from "./share-module/share.module";
import {HttpClientModule} from "@angular/common/http";
import { FoodComponent } from './feature-module/food/food.component';
import {FeatureModule} from "./feature-module/feature.module";
import {FoodModule} from "./feature-module/food/food.module";
import {OrderModule} from "./feature-module/order/order.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareModule,
    FeatureModule,
    AppRoutingModule,
    FoodModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
