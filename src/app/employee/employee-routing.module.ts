import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListemployeeComponent } from "src/app/employee/listemployee/listemployee.component";

const routes: Routes = [
  { path: "employeeList", component: ListemployeeComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
