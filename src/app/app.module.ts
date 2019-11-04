import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import {  ModalModule,BsModalService  } from "ngx-bootstrap/modal";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DelemployeeComponent } from './employee/delemployee/delemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DelemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents:[DelemployeeComponent],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
