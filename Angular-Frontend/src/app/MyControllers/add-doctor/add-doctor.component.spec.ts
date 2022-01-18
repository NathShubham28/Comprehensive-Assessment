import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorsService } from 'src/app/MyServices/doctors.service';

import { AddDoctorComponent } from './add-doctor.component';

describe('AddDoctorComponent', () => {
  let component: AddDoctorComponent;
  let httpController: HttpClientTestingModule;
  let http: HttpClient;
  let fixture: ComponentFixture<AddDoctorComponent>;
  let router: Router;
  let routerController: RouterTestingModule;
  let service: DoctorsService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorComponent ]
    })
    .compileComponents();
  });

//  including the http test as well without which it will produce error

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [AddDoctorComponent]
    });
    component = TestBed.inject(AddDoctorComponent);
    service = TestBed.inject(DoctorsService);
    router = TestBed.inject(Router);
    httpController= HttpClientTestingModule;
    routerController = TestBed.inject(RouterTestingModule);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
