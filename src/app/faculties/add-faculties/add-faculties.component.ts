import { NgForm } from '@angular/forms';
import { LoadingService } from './../../shared/loading-service/loading.service';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-faculties',
  templateUrl: './add-faculties.component.html',
  styleUrls: ['./add-faculties.component.scss'],
})
export class AddFacultiesComponent implements OnInit {
  facultyTable: AngularFirestoreCollection<any>;
  pageTitle = 'Add Faculty';
  data: any | undefined;
  constructor(
    private database: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private loading: LoadingService
  ) {
    this.facultyTable = this.database.collection<any>('faculties');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const loaderId = this.loading.show();
      const subscription = this.facultyTable
        .doc(id)
        .valueChanges({ idField: 'id' })
        .subscribe((data) => {
          this.data = data;
          this.loading.hide(loaderId);
          console.log(this.data);
          subscription.unsubscribe();
        });
    }
  }

  addFaculty(form: NgForm) {
    if (this.data) {
      debugger;
      const loaderId = this.loading.show();
      this.facultyTable
        .doc(this.data.id)
        .update(form.value)
        .then(() => {
          form.resetForm({});
          this.loading.hide(loaderId);
          this.router.navigate(['faculties']);
        })
        .catch((error) => {
          console.log(error);
          this.loading.hide(loaderId);
        });
    } else {
      const loaderId = this.loading.show();
      this.facultyTable
        .add(form.value)
        .then((val) => {
          form.resetForm({});
          this.loading.hide(loaderId);
          this.router.navigate(['faculties']);
        })
        .catch((error) => {
          console.log(error);
          this.loading.hide(loaderId);
        });
    }
  }
}
