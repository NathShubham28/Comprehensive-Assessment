import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './MyControllers/doctors-list/doctors-list.component';
import { PatientsListComponent } from './MyControllers/patients-list/patients-list.component';

const routes: Routes = [
  {path:'patients-list', component: PatientsListComponent},
  {path:'doctors-list', component: DoctorsListComponent}
  // {path:'', redirectTo: 'doctors-list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
