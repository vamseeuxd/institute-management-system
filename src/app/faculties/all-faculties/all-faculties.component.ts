import { ConfirmPopupComponent } from './../../shared/confirm-popup/confirm-popup.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { LoadingService } from './../../shared/loading-service/loading.service';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-faculties',
  templateUrl: './all-faculties.component.html',
  styleUrls: ['./all-faculties.component.scss'],
})
export class AllFacultiesComponent implements OnInit {
  fields = [
    'first_Name',
    'last_Name',
    'mobile',
    'email',
    'type',
    'pinCode',
    'address',
    'experience',
    'status',
  ];

  facultiesTable: AngularFirestoreCollection<any>;
  faculties$: Observable<any[]>;
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private loading: LoadingService,
    private database: AngularFirestore
  ) {
    this.facultiesTable = this.database.collection<any>('faculties');
    this.faculties$ = this.facultiesTable.valueChanges({ idField: 'id' });
  }

  pageTitle = 'Faculty Management';

  ngOnInit(): void {

  }

  confirmation(faculty: any) {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm',
    });
    this.modalRef.content.onClose = (isConfirm: boolean) => {
      if (isConfirm) {
        if (faculty && faculty.id) {
          const loaderId = this.loading.show();
          this.facultiesTable
            .doc(faculty.id)
            .delete()
            .then(() => {
              this.modalRef?.hide();
              this.loading.hide(loaderId);
            })
            .catch((error) => {
              console.log(error);
              this.loading.hide(loaderId);
            });
        }
      } else {
        this.modalRef?.hide();
      }
    };
  }
}
