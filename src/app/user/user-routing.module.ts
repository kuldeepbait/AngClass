import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "src/app/user/login/login.component";
import { RegisterComponent } from "src/app/user/register/register.component";

const routes: Routes = [
  { path: "", component: LoginComponent, }, 
  { path: "login", component: LoginComponent, }, 
  { path: "register", component: RegisterComponent, }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
