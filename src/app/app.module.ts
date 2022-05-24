import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatListModule, MatRippleModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {AuthModule} from './auth/auth.module';


const APP_CONTAINERS = [
  DefaultLayoutComponent,
];
@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRippleModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
