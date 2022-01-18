import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { Patient } from 'src/app/patient';
import { DoctorsService } from 'src/app/MyServices/doctors.service';
import { PatientsService } from 'src/app/MyServices/patients.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[];
  patients: Patient[];
  doctor: Doctor;
  selected: Boolean=false;
  count: number;
  constructor(private doctorService: DoctorsService, private patientService: PatientsService) {  }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    })
  }

  private getPatient(){
    return this.patientService.getPatientsList().subscribe(data =>{
      this.patients = data;
    });
  }

  countPatient(sendId:number){
    console.log(this.doctor);
    this.doctorService.countPatients(sendId).subscribe(data =>{
      this.count = data;
    });
    console.log(this.count);

  }
  selectDoctor(doc:Doctor){
    this.selected =true;
    this.count = doc.id;
    this.doctor = doc;
    this.countPatient(this.count);
    // console.log(this.doctor);
  }
}
