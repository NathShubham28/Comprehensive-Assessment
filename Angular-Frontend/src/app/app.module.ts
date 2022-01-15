import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsListComponent } from './MyControllers/doctors-list/doctors-list.component';
import { PatientsListComponent } from './MyControllers/patients-list/patients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsListComponent,
    PatientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
