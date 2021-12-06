import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnackbarComponent} from "./snackbar/snackbar.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteComponent } from './delete/delete.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ShareRoutingModule} from "./share-routing.module";
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [
    SnackbarComponent,
    HeaderComponent,
    FooterComponent,
    DeleteComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule,
    HttpClientModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    ShareRoutingModule
  ],
  exports: [
    SnackbarComponent,
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
