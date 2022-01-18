import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DoctorsListComponent } from './doctors-list.component';
import { DoctorsService } from 'src/app/MyServices/doctors.service';
import { Doctor } from 'src/app/doctor';

describe('DoctorsListComponent', () => {
  let component: DoctorsListComponent;
  let fixture: ComponentFixture<DoctorsListComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;
  let service: DoctorsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorsListComponent]
    });
    component = TestBed.inject(DoctorsListComponent)
    service = TestBed.inject(DoctorsService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a array of doctors',()=>{
    const doctors: Doctor[]=[]

    service.getDoctorsList().subscribe(data =>
      expect(data).toEqual(doctors)
    )

  });

});
