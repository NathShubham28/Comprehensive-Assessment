package com.HostipalManagement.REST_API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HostipalManagement.REST_API.Repository.DoctorsRepository;
//import com.HostipalManagement.REST_API.Repository.PatientsRepository;
import com.HostipalManagement.REST_API.model.Doctors;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {
	@Autowired
	private DoctorsRepository doctorRepository;
		
	@GetMapping("/doctors")
	public List<Doctors> getAllDoctors(){
		return doctorRepository.findAll();
	}
	
	@PostMapping("/add-doctor")
	public Doctors addDoctor(@RequestBody Doctors doctor) {
		return doctorRepository.save(doctor);
		
	}
	
}
