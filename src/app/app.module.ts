import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { AllFacultiesComponent } from './faculties/all-faculties/all-faculties.component';
import { AddFacultiesComponent } from './faculties/add-faculties/add-faculties.component';
import { AllTechnologiesComponent } from './technologies/all-technologies/all-technologies.component';
import { AddTechnologiesComponent } from './technologies/add-technologies/add-technologies.component';
import { ConfirmPopupComponent } from './shared/confirm-popup/confirm-popup.component';
import { AllBatchesComponent } from './batches/all-batches/all-batches.component';
import { AddBatchesComponent } from './batches/add-batches/add-batches.component';
import {AngularFireModule} from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    AllStudentsComponent,
    AddStudentsComponent,
    AllFacultiesComponent,
    AddFacultiesComponent,
    AllTechnologiesComponent,
    AddTechnologiesComponent,
    ConfirmPopupComponent,
    AllBatchesComponent,
    AddBatchesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAMyhTmxJEZ45-bW7o3rgcDzF8Etts004E',
      authDomain: 'imsys0.firebaseapp.com',
      projectId: 'imsys0',
      storageBucket: 'imsys0.appspot.com',
      messagingSenderId: '990086332519',
      appId: '1:990086332519:web:c476bfd0e678a9c40214c2',
    }),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
