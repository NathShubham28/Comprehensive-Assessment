package com.HostipalManagement.REST_API.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HostipalManagement.REST_API.model.Patients;

@Repository
public interface PatientsRepository extends JpaRepository<Patients, Integer>{
	
}
