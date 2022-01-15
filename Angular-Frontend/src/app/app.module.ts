import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsListComponent } from './MyControllers/doctors-list/doctors-list.component';
import { PatientsListComponent } from './MyControllers/patients-list/patients-list.component';
import { AdminComponent } from './MyControllers/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AddDoctorComponent } from './MyControllers/add-doctor/add-doctor.component';
import { AddPatientComponent } from './MyControllers/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsListComponent,
    PatientsListComponent,
    AdminComponent,
    HomeComponent,
    AddDoctorComponent,
    AddPatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
