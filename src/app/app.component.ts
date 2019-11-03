import { Component } from '@angular/core';
import { AuthService } from "src/app/user/service/auth.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';
  isUserLoggedIn: boolean;
  constructor(private route: ActivatedRoute,private router: Router, private authService:AuthService)
  {
     this.authService.LoginIdSource.subscribe(x => this.isUserLoggedIn = x);
  }
}
