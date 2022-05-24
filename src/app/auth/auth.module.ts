import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    MatSnackBarModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
