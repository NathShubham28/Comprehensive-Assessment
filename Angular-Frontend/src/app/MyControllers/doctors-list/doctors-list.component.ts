import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { DoctorsService } from 'src/app/MyServices/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[];

  constructor(private doctorService: DoctorsService) {  }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    })
  }
}
