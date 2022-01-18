import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { PatientsService } from 'src/app/MyServices/patients.service';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Patient[];
  patient: Patient = new Patient();
  id: number;
  doctor: Doctor = new Doctor();
  selected = false;
  errorMessage= false;
  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {
    this.getPatient();
  }

  onSubmit(){
    this.selected = true;

    this.getPatients();
  }
  getPatients(){
    this.patientService.getPatientById(this.id).subscribe(


      data => {
        if(data === null) {
          this.errorMessage = true;
          this.selected = false;
          } else {
           this.errorMessage = false;
          }
      this.patient = data;
      this.doctor = data.doctor;
    }
    );
  }

  getPatient(){
    return this.patientService.getPatientsList().subscribe(data =>{
      this.patients = data;
    });
  }
}
