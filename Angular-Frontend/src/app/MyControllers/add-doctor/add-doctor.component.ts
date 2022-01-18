import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { DoctorsService } from 'src/app/MyServices/doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();
  
  constructor(private doctorService: DoctorsService, private router: Router) { }

  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data =>{
      this.goToDoctorList();
    });
  }
  ngOnInit(): void {
  }

  goToDoctorList(){
    this.router.navigate([`/doctors-list`]);
  }

  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }
}
