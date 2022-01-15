import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl="http://localhost:8081/patients"
  private addPatientUrl = "http://localhost:8081/add-patient";

  constructor(private httpClient: HttpClient) { }

  getPatientsList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.addPatientUrl}`, patient);
 }
}
