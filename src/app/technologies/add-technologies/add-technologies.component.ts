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

  constructor(
    public bsModalRef: BsModalRef,
    private database: AngularFirestore
  ) {
    this.technologiesTable =
      this.database.collection<ITechnology>('technologies');
  }

  ngOnInit(): void {}

  addTechnolgy(form: NgForm) {
    // alert(JSON.stringify(form.value, null, 2));
    this.technologiesTable
      .add(form.value)
      .then((val) => {
        form.resetForm({});
        this.bsModalRef.hide();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
