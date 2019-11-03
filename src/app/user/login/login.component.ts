import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "src/app/user/service/auth.service";
import { User } from "src/app/user/model/user";
import { NgForm } from "@angular/forms";
import { ToastrService} from 'ngx-toastr';

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
    private authService:AuthService
    ,private alertService : ToastrService
  ) 
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
          console.log(loginModel.value)
          this.authService.login(loginModel.value).subscribe(
            res => {
              console.log(res);
              if(res=="LOGIN_SUCCESS")
                {
                  this.alertService.success("Logon Successfull","Message");
                  this.authService.SetLoggedInUserDetails(true);
                  this.router.navigate(['/home'])
                }
                else{
                  this.alertService.success("User does not exist","Message");
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
