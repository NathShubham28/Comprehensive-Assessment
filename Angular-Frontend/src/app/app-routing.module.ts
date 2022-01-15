import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDoctorComponent } from './MyControllers/add-doctor/add-doctor.component';
import { AddPatientComponent } from './MyControllers/add-patient/add-patient.component';
import { AdminComponent } from './MyControllers/admin/admin.component';
import { DoctorsListComponent } from './MyControllers/doctors-list/doctors-list.component';
import { PatientsListComponent } from './MyControllers/patients-list/patients-list.component';

const routes: Routes = [
  {path:'patients-list', component: PatientsListComponent},
  {path:'doctors-list', component: DoctorsListComponent},
  {path:'add-doctor', component: AddDoctorComponent},
  {path:'add-patient', component: AddPatientComponent},
  {path:'home', component: HomeComponent},
  {path:'admin', component: AdminComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
