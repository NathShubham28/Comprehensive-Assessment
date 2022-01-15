package com.HostipalManagement.REST_API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HostipalManagement.REST_API.Repository.PatientsRepository;
import com.HostipalManagement.REST_API.model.Doctors;
import com.HostipalManagement.REST_API.model.Patients;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
	@Autowired
	private PatientsRepository patientRepository;
	
	@GetMapping("/patients")
	public List<Patients> getAllPatients(){
		return patientRepository.findAll();
	}
	
	@PostMapping("/add-patient")
	public Patients addPatient(@RequestBody Patients patient) {
		return patientRepository.save(patient);
		
	}
}
