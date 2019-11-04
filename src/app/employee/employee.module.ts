import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ModalModule,BsModalService  } from "ngx-bootstrap/modal";
import { EmployeeRoutingModule } from './employee-routing.module';

import { AddemployeeComponent } from './addemployee/addemployee.component';

import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';



@NgModule({
  declarations: [ AddemployeeComponent, EditemployeeComponent, ListemployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  
})
export class EmployeeModule { }
