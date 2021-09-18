import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-technologies',
  templateUrl: './add-technologies.component.html',
  styleUrls: ['./add-technologies.component.scss']
})
export class AddTechnologiesComponent implements OnInit {

  pageTitle = 'Add Technology';

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}
