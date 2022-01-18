import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PatientsService } from './patients.service';

describe('PatientsService', () => {
  let service: PatientsService;
  let http: HttpClient;
  let httpContorller: HttpTestingController;

//  including the http test as well without which it will produce error
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientsService]
    });
    service = TestBed.inject(PatientsService);
    http = TestBed.inject(HttpClient);
    httpContorller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
