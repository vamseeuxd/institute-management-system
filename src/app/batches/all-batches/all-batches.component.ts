import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AddBatchesComponent } from '../add-batches/add-batches.component';
import { ConfirmPopupComponent } from 'src/app/shared/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-all-batches',
  templateUrl: './all-batches.component.html',
  styleUrls: ['./all-batches.component.scss']
})
export class AllBatchesComponent implements OnInit {

  pageTitle = 'Batches Management';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  addBatch() {
    this.modalRef = this.modalService.show(AddBatchesComponent, {
      class: 'modal-lg',
    });
  }

  confirmation() {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm',
    });
  }


  ngOnInit(): void {
  }

  batches: any = [
    {
      id: 'IMS56879',
      name: 'Full Stock Developer',
      sDate: '15 Nov 2020',
      eDate: '13 Jan 2021',
      duration: '56 Days',
    },
    {
      id: 'IMS13458',
      name: 'Android Mobile Developer',
      sDate: '15 Nov 2020',
      eDate: '30 Dec 2020',
      duration: '45 Days',
    },
    {
      id: 'IMS78911',
      name: 'iOS Mobile Developer',
      sDate: '30 Nov 2020',
      eDate: '15 Jan 2021',
      duration: '45 Days',
    },
    {
      id: 'IMS12849',
      name: 'Web Designer',
      sDate: '15 Nov 2020',
      eDate: '30 Dec 2020',
      duration: '45 Days',
    },
  ]
}
