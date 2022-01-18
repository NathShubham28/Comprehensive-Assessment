import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Doctor } from 'src/app/doctor';
import { DoctorsService } from 'src/app/MyServices/doctors.service';
import { PatientsService } from 'src/app/MyServices/patients.service';
import { Patient } from 'src/app/patient';

import { AddPatientComponent } from './add-patient.component';

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;
  let httpController: HttpTestingController
  let router: Router;
  let routerController: RouterTestingModule;
  let dservice: DoctorsService;
  let pservice: PatientsService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AddPatientComponent]
    });
    component = TestBed.inject(AddPatientComponent);
    pservice = TestBed.inject(PatientsService);
    dservice = TestBed.inject(DoctorsService);
    router = TestBed.inject(Router);
    httpController= TestBed.inject(HttpTestingController);
    routerController = TestBed.inject(RouterTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a patient',()=>{
    const patient: Patient = new Patient();
    const doctor: Doctor = new Doctor();
    const input:Patient = {
      id:1,
      dateOfVisit: "12-08-2021",
      name: "Shubham",
      doctor: {
        id:2,
        age:23,
        gender:"Male",
        name: "Akash",
        specialization: "neuro"
      }
    };

    pservice.createPatient(input).subscribe(data=>
      expect(data).toEqual(patient))
  });
});
