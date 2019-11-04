import { Component, OnInit } from '@angular/core';
import { BsModalRef,BsModalService } from "ngx-bootstrap/modal";
import { EmployeeService } from "src/app/service/employee.service";
import { Employee } from "src/app/model/employee";
import { DelemployeeComponent } from "src/app/employee/delemployee/delemployee.component";

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  bsModalRef: BsModalRef;
  public listEmployee:any;
  
  constructor(private empService: EmployeeService,
    private bsModalService: BsModalService) {
    this.GetEmployeeList();
   }

  ngOnInit() {
  }
  GetEmployeeList() : void
  {
    this.empService.GetEmployeeList().subscribe(
      res => {
        console.log(res);
          this.listEmployee = res;
          console.log(this.listEmployee);
      },
      error =>{
      //  this.toastrService.error("Error getting Data");
      }
    );
  }

  deleteGridRow(ID: number) {
    console.log('Id -' + ID)
    this.bsModalRef = this.bsModalService.show(DelemployeeComponent);
    this.bsModalRef.content.ID = ID;
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        setTimeout(() => {
          this.GetEmployeeList();
        }, 5000);
      }
    });
  }
}
