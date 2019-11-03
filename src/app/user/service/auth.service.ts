import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";
import { User } from "src/app/user/model/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    url = 'http://localhost:55790/';
    LoginIdSource = new  BehaviorSubject<boolean>(false);

  constructor(private router: Router,private http: HttpClient) {
    if(this.isLoggedIn())
      {
        console.log("isLoggedIn-yes");
        this.SetLoggedInUserDetails(true);
        this.router.navigate(['/home'])
      }
      else
        {
          this.router.navigate(['/login'])
        }
   }

login(user : User): Observable<string> {
    console.log("test service");
    console.log(user);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<string>(this.url+ 'api/login', user, httpOptions);
}
Register(user : User): Observable<string> {
  console.log("test service - register");
  console.log(user);
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<string>(this.url + 'api/UserRegistration', user, httpOptions);
}
 SetLoggedInUserDetails(isLogedIn: boolean){
  this.LoginIdSource.next(isLogedIn);
  sessionStorage.setItem('isLoggedIn','true');    
 }
 
  isLoggedIn(): boolean {      
    let status = false;      
    if (sessionStorage.getItem('isLoggedIn') == "true") {      
      status = true;      
    }       
    return status;      
  }    

 logout() :void {   
   console.log('service - logout') 
   this.SetLoggedInUserDetails(false);
   sessionStorage.setItem('isLoggedIn','false');  
   this.router.navigate(['/login'])   
  }   

}
