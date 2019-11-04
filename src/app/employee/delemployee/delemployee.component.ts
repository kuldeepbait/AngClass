import { Component, OnInit, EventEmitter} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delemployee',
  templateUrl: './delemployee.component.html',
  styleUrls: ['./delemployee.component.css']
})
export class DelemployeeComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  Delete(ID: number) {
    console.log('ID',ID);
    this.event.emit('OK');
    //this.toastrService.success("Record deleted Successfully");
    this.bsModalRef.hide();
  }

  onClose() {
    this.bsModalRef.hide();

  }

}
