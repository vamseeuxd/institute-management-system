import { LoadingService } from './../../shared/loading-service/loading.service';
import { ITechnology } from './../all-technologies/all-technologies.component';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-technologies',
  templateUrl: './add-technologies.component.html',
  styleUrls: ['./add-technologies.component.scss'],
})
export class AddTechnologiesComponent implements OnInit {
  technologiesTable: AngularFirestoreCollection<ITechnology>;
  pageTitle = 'Add Technology';
  data: ITechnology | undefined;

  constructor(
    public bsModalRef: BsModalRef,
    private database: AngularFirestore,
    private loading: LoadingService,
  ) {
    this.technologiesTable =
      this.database.collection<ITechnology>('technologies');
  }

  ngOnInit(): void {}

  addTechnolgy(form: NgForm) {
    // alert(JSON.stringify(form.value, null, 2));
    if (this.data) {
      const loaderId = this.loading.show();
      this.technologiesTable
        .doc(this.data.id)
        .update(form.value)
        .then(() => {
          form.resetForm({});
          this.bsModalRef.hide();
          this.loading.hide(loaderId);
        })
        .catch((error) => {
          console.log(error);
          this.loading.hide(loaderId);
        });
    } else {
      const loaderId = this.loading.show();
      this.technologiesTable
        .add(form.value)
        .then((val) => {
          form.resetForm({});
          this.bsModalRef.hide();
          this.loading.hide(loaderId);
        })
        .catch((error) => {
          console.log(error);
          this.loading.hide(loaderId);
        });
    }
  }
}
