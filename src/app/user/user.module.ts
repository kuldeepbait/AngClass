import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Our Module
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
