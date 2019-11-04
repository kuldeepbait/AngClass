import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";
import { Employee } from "src/app/model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:55790/';
  constructor(private http: HttpClient) { }
  GetEmployeeList(): Observable<Employee> {
    console.log("Employee service -GetEmployee()");
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<Employee>(this.url+ 'api/GetEmployeeList', httpOptions); 
}
}
