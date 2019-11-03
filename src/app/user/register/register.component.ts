import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/user/service/auth.service";
import { Router } from "@angular/router";
import { User } from "src/app/user/model/user";
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userModel = new User();
    
    constructor(private formBuilder: FormBuilder,private router: Router,
      private authService:AuthService,private alertService : ToastrService) 
    {
     
    }
    ngOnInit() {
       
    }
    
    Register(RegisterModel: NgForm)
    {
      console.log('valid');
      if(true)
        {
          console.log('valid');
          console.log(RegisterModel.value.UserId);
            // this.user.UserId = ModulesForm.value.UserId;
            // this.user.Password = ModulesForm.value.Password;
            console.log(RegisterModel.value)
            this.authService.Register(RegisterModel.value).subscribe(
              res => {
                console.log(res);
                if(res=="SUCCESS")
                  {
                    this.alertService.success("User registed successfull!!!","Message");
                    this.router.navigate(['/login'])
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
      

        }
}
