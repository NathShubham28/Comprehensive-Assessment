import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private baseUrl = "http://localhost:8081/doctors"
  constructor(private httpClient: HttpClient) {
   }

   getDoctorsList(): Observable<Doctor[]> {
     return this.httpClient.get<Doctor[]>(`${this.baseUrl}`);
   }
}
