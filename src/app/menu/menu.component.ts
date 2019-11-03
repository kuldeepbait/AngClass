import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/user/service/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  LogOut()
  {
    this.authService.logout();
  }
}
