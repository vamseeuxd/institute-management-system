import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBatchesComponent } from './batches/all-batches/all-batches.component';
import { AddFacultiesComponent } from './faculties/add-faculties/add-faculties.component';
import { AllFacultiesComponent } from './faculties/all-faculties/all-faculties.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { AllTechnologiesComponent } from './technologies/all-technologies/all-technologies.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'students', component: AllStudentsComponent },
  { path: 'addstudent', component: AddStudentsComponent },
  { path: 'addstudent/:id', component: AddStudentsComponent },
  { path: 'faculties', component: AllFacultiesComponent },
  { path: 'addFaculties/:id', component: AddFacultiesComponent },
  { path: 'addFaculties', component: AddFacultiesComponent },
  { path: 'technologies', component: AllTechnologiesComponent },
  { path: 'batches', component: AllBatchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
