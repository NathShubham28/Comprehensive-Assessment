
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DoctorsService } from './doctors.service';
import { HttpClient } from '@angular/common/http';

describe('DoctorsService', () => {
  let service: DoctorsService;
  let http: HttpClient;
  let httpContorller: HttpTestingController;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(DoctorsService);
  // });
  // for checking the http test
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorsService]
    });
    service = TestBed.inject(DoctorsService);
    http = TestBed.inject(HttpClient);
    httpContorller = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
