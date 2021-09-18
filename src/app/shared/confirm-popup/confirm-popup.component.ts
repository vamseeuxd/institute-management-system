import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  modalRef?: BsModalRef;
  @Input() message?: string;
  onClose: any;
  // constructor(private modalService: BsModalService) { }
  constructor(public bsModalRef: BsModalRef) {}

  confirm(): void {
    this.onClose(true)
  }

  decline(): void {
    this.onClose(false)
  }


  ngOnInit(): void {
  }

}
