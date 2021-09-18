import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConfirmPopupComponent } from 'src/app/shared/confirm-popup/confirm-popup.component';
import { AddTechnologiesComponent } from '../add-technologies/add-technologies.component';

@Component({
  selector: 'app-all-technologies',
  templateUrl: './all-technologies.component.html',
  styleUrls: ['./all-technologies.component.scss']
})
export class AllTechnologiesComponent implements OnInit {



  pageTitle = 'Batches Management';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  addTechnology() {
    this.modalRef = this.modalService.show(AddTechnologiesComponent, {
      class: 'modal-md',
    });
  }

  confirmation() {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm',
    });
  }


  ngOnInit(): void {
  }
  technologies: any = [
    {
      sno: '1',
      title: 'Full Stock Developer',
      duration: '56 Days',
    },
    {
      sno: '2',
      title: 'Angular Developer',
      duration: '50 Days',
    },
    {
      sno: '3',
      title: 'Android Developer',
      duration: '45 Days',
    },
    {
      sno: '4',
      title: 'iOS Developer',
      duration: '45 Days',
    },
    {
      sno: '5',
      title: 'Graphic Designer',
      duration: '30 Days',
    },
    {
      sno: '6',
      title: 'Web Designer',
      duration: '45 Days',
    },
  ]
}
