import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guard/auth.guard';
import {DefaultLayoutComponent} from './containers/default-layout';
import {RegisterComponent} from "./auth/register/register.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Authentication'
    }
  }
  ,
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'registration'
    }
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
