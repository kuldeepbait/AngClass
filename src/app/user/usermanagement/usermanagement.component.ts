import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid-community/main";
import { UserService } from "src/app/user/service/user.service";
// import { GridOptions } from "ag-grid-community/dist/lib/entities/gridOptions";


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
   private gridApi;
   private gridColumnApi;
   private sortingOrder;
  public columnDefs: any[]; // Grid’s column definiation 
  constructor(private userService : UserService) { 
            this.columnDefs = [{  
                headerName: "Name",  
                field: "FullName",
                width:150, 
            }, {  
                headerName: "UserId",  
                field: "UserId",
                width:150,   
            },{  
                headerName: "Password",  
                field: "Password",
                width:150, 
            },{  
                headerName: "Email",  
                field: "Email",
                width:150,  
            }
        ]; 
  }

  ngOnInit() {
  }
  onGridLoad(params)
  {
    this.userService.GetUser().subscribe(
        res => {
          console.log(res);
          console.log('onGridLoad');
          console.log(params);
          this.gridApi = params.Api;
          this.gridColumnApi=params.columnApi;
          let dataValue=[{"name" : "kuldeep",age:22}];
          params.api.setRowData(res);
        },
        error =>{
          console.log('err');
        }
      );
    
    
  }

}
