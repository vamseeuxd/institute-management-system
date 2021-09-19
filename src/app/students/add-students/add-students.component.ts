import { NgForm } from '@angular/forms';
import { LoadingService } from './../../shared/loading-service/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {
  studentTable: AngularFirestoreCollection<any>;
  pageTitle = 'Add Student';
  data: any | undefined;
  constructor(
    private database: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private loading: LoadingService
  ) {
    this.studentTable = this.database.collection<any>('students');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const loaderId = this.loading.show();
      const subscription = this.studentTable
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

  addStudent(form: NgForm) {
    if (this.data) {
      debugger;
      const loaderId = this.loading.show();
      this.studentTable
        .doc(this.data.id)
        .update(form.value)
        .then(() => {
          form.resetForm({});
          this.loading.hide(loaderId);
          this.router.navigate(['students']);
        })
        .catch((error) => {
          console.log(error);
          this.loading.hide(loaderId);
        });
    } else {
      const loaderId = this.loading.show();
      this.studentTable
        .add(form.value)
        .then((val) => {
          form.resetForm({});
          this.loading.hide(loaderId);
          this.router.navigate(['students']);
        })
        .catch((error) => {
          console.log(error);
          this.loading.hide(loaderId);
        });
    }
  }
}
