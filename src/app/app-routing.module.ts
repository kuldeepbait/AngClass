import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";

const routes: Routes = [
  {path: "", loadChildren :() => import('./user/user.module').then(m => m.UserModule)},
  {path: "home", loadChildren :() => import('./home/home.module').then(m => m.HomeModule)},  
  { path: "App", component: AppComponent, }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
