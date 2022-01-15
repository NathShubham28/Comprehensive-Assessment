import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { DoctorsService } from 'src/app/MyServices/doctors.service';
import { PatientsService } from 'src/app/MyServices/patients.service';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient: Patient = new Patient();
  doctors: Doctor[];
  constructor(private doctorService: DoctorsService, private patientService: PatientsService, private router: Router) { }

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data =>{
      this.goToPatientList();
    });
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  goToPatientList(){
    this.router.navigate([`/patients-list`]);
  }

  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    })
  }

  onSubmit(){
    console.log(this.patient);
  }

  onSelect(doc: Doctor){
    console.log(doc.id);
  }
}
