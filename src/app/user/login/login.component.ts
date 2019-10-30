import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "src/app/user/service/auth.service";
import { User } from "src/app/user/model/user";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userModel = new User();
  // ModulesForm: any;
  // loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,
    private authService:AuthService) 
  {
   
  }
  ngOnInit() {
      // this.loginForm = this.formBuilder.group({
      //     username: ['', Validators.required],
      //     password: ['', Validators.required]
      // });
  }
  // get f() { return this.loginForm.controls; }
  
  save(loginModel: NgForm)
  {
    console.log('valid');
    if(true)
      {
        console.log('valid');
        console.log(loginModel.value.UserId);
          // this.user.UserId = ModulesForm.value.UserId;
          // this.user.Password = ModulesForm.value.Password;
          console.log(loginModel.value)
          this.authService.login(loginModel.value).subscribe(
            res => {
              console.log(res);
              if(res=="LOGIN_SUCCESS")
                {
                  this.authService.SetLoggedInUserDetails(true);
                  this.router.navigate(['/home'])
                }
                else{
                  alert(res);
                  return false;
                }
            },
            error =>{
              console.log('err');
            }
          );
        }
    console.log('login submit');
  
  }
}
