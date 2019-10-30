import { Component } from '@angular/core';
import { AuthService } from "src/app/user/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngClass';
  isUserLoggedIn: boolean;
  constructor( private authService:AuthService)
  {
    this.authService.LoginIdSource.subscribe(x => this.isUserLoggedIn = x);
  }
}
