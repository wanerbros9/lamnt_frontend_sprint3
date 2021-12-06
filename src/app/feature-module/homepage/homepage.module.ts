import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {HomepageRoutingModule} from "./homepage-routing.module";
import {ShareModule} from "../../share-module/share.module";


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ShareModule
  ]
})
export class HomepageModule {
}
