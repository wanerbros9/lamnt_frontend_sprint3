import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from "./account.component";
import {AccountRoutingModule} from "./account-routing.module";
import {ShareModule} from "../../share-module/share.module";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ShareModule
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
  ]
})
export class AccountModule {
}
