import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl="http://localhost:8081/patients"
  constructor(private httpClient: HttpClient) { }

  getPatientsList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }
}
