import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";
import { User } from "src/app/user/model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    url = 'http://localhost:55790/api/login';
    LoginIdSource = new  BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(user : User): Observable<string> {
    console.log("test service");
    console.log(user);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<string>(this.url, user, httpOptions);
}
 SetLoggedInUserDetails(isLogedIn: boolean){
  this.LoginIdSource.next(isLogedIn);
 }

}
