import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-batches',
  templateUrl: './add-batches.component.html',
  styleUrls: ['./add-batches.component.scss']
})
export class AddBatchesComponent implements OnInit {

  pageTitle = 'Add Batch';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}
