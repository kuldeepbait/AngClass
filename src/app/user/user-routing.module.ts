import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "src/app/user/login/login.component";
import { RegisterComponent } from "src/app/user/register/register.component";
import { UsermanagementComponent } from "src/app/user/usermanagement/usermanagement.component";

const routes: Routes = [
  { path: "", component: LoginComponent, }, 
  { path: "login", component: LoginComponent, }, 
  { path: "register", component: RegisterComponent, }, 
  { path: "UserMgmt", component: UsermanagementComponent, }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
