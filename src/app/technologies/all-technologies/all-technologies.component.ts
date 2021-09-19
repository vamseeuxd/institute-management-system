import { LoadingService } from './../../shared/loading-service/loading.service';
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
    private loading: LoadingService,
    private database: AngularFirestore
  ) {
    this.technologiesTable =
      this.database.collection<ITechnology>('technologies');
    this.technologies$ = this.technologiesTable.valueChanges({ idField: 'id' });
  }

  addTechnology(
    isNew = true,
    dataToUpdate: ITechnology | undefined = undefined
  ) {
    if (isNew) {
      this.modalRef = this.modalService.show(AddTechnologiesComponent, {
        class: 'modal-md',
      });
    } else if (dataToUpdate) {
      this.modalRef = this.modalService.show(AddTechnologiesComponent, {
        class: 'modal-md',
      });
      this.modalRef.content.data = dataToUpdate;
    }
  }

  confirmation(technology: ITechnology) {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm',
    });
    this.modalRef.content.onClose = (isConfirm: boolean) => {
      if (isConfirm) {
        if (technology && technology.id) {
          const loaderId = this.loading.show();
          this.technologiesTable
            .doc(technology.id)
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

  ngOnInit(): void {}
}
