import { ConfirmPopupComponent } from './../../shared/confirm-popup/confirm-popup.component';
import { LoadingService } from './../../shared/loading-service/loading.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {
  fields = [
    'first_Name',
    'last_Name',
    'mobile',
    'email',
    'address',
    'status',
  ];

  studentsTable: AngularFirestoreCollection<any>;
  students$: Observable<any[]>;
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private loading: LoadingService,
    private database: AngularFirestore
  ) {
    this.studentsTable = this.database.collection<any>('students');
    this.students$ = this.studentsTable.valueChanges({ idField: 'id' });
  }

  pageTitle = 'Student Management';

  ngOnInit(): void {

  }

  confirmation(Student: any) {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm',
    });
    this.modalRef.content.onClose = (isConfirm: boolean) => {
      if (isConfirm) {
        if (Student && Student.id) {
          const loaderId = this.loading.show();
          this.studentsTable
            .doc(Student.id)
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
