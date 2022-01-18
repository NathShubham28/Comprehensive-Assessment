import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorsService } from 'src/app/MyServices/doctors.service';
import { PatientsService } from 'src/app/MyServices/patients.service';
import { Patient } from 'src/app/patient';
import { PatientsListComponent } from './patients-list.component';
// import { getPatient } from './patients-list.component'
describe('PatientsListComponent', () => {
  let component: PatientsListComponent;
  let fixture: ComponentFixture<PatientsListComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;
  let dservice: DoctorsService;
  let pservice: PatientsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientsListComponent]
    });
    component = TestBed.inject(PatientsListComponent);
    dservice = TestBed.inject(DoctorsService);
    pservice = TestBed.inject(PatientsService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return a array of patients',()=>{
    const patients: Patient[]=[]
    const input = {
      id:1,
      dateOfVisit: "12-08-2021",
      name: "Shubham",
      doctor: {
        id:2,
        age:23,
        name: "Akash",
        specialization: "neuro"
      }
    };

    pservice.getPatientsList().subscribe(data =>
      expect(data).toEqual(patients)
    )

  });
  
});

// testing the getPatient list
// describe('getPatient', ()=>{

// });

