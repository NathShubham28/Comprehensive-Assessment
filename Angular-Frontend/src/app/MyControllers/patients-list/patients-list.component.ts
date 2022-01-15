import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/MyServices/patients.service';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Patient[];
  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {
    this.getPatient();
  }
  private getPatient(){
    return this.patientService.getPatientsList().subscribe(data =>{
      this.patients = data;
    });
  }
}
