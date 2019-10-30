import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";

const routes: Routes = [
  {path: "", loadChildren :"./user/user.module#UserModule"},
  {path: "home", loadChildren :"./home/home.module#HomeModule"},  
  { path: "App", component: AppComponent, }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
