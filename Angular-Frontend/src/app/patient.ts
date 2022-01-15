import { Doctor } from "./doctor";

export class Patient {
  id: number;
  dateOfVisit: string;
  name: string;
  doctor: Doctor;
}
