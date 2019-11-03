import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";
import { User } from "src/app/user/model/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:55790/';
  constructor(private http: HttpClient) { }
  GetUser(): Observable<User> {
    console.log("test service");
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<User>(this.url+ 'api/GetUser', httpOptions);
}
}
