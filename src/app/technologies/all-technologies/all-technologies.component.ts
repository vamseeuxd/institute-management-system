import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConfirmPopupComponent } from 'src/app/shared/confirm-popup/confirm-popup.component';
import { AddTechnologiesComponent } from '../add-technologies/add-technologies.component';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface ITechnology {
  title: string;
  id?: string;
  duration: number;
  active: boolean;
}

@Component({
  selector: 'app-all-technologies',
  templateUrl: './all-technologies.component.html',
  styleUrls: ['./all-technologies.component.scss'],
})
export class AllTechnologiesComponent implements OnInit {
  technologiesTable: AngularFirestoreCollection<ITechnology>;
  technologies$: Observable<ITechnology[]>;

  pageTitle = 'Technologies Management';

  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private database: AngularFirestore
  ) {
    this.technologiesTable =
      this.database.collection<ITechnology>('technologies');
    this.technologies$ = this.technologiesTable.valueChanges({ idField: 'id' });
  }

  addTechnology() {
    this.modalRef = this.modalService.show(AddTechnologiesComponent, {
      class: 'modal-md',
    });
  }

  confirmation(technology: ITechnology) {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm',
    });
    console.log(this.modalRef.content);
    this.modalRef.content.onClose = (isConfirm: boolean) => {
      if (isConfirm) {
        if (technology && technology.id) {
          this.technologiesTable
            .doc(technology.id)
            .delete()
            .then(() => {
              this.modalRef?.hide();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        this.modalRef?.hide();
      }
    };
  }

  ngOnInit(): void {}
}
