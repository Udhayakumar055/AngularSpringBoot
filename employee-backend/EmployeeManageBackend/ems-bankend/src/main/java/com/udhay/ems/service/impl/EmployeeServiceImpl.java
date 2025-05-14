package com.udhay.ems.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udhay.ems.entity.Employee;
import com.udhay.ems.exception.ResourceNotFoundException;
import com.udhay.ems.repository.EmployeeRepository;
import com.udhay.ems.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository; 

	@Override
	public Employee createEmployee(Employee employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> getAllEmployee() {
		List<Employee> value=employeeRepository.findAll();
		return value;
	}

	@Override
	public Employee getById(Long id) {
		Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id"+id));
		return employee;
	}

	@Override
	public Employee updateEmployee(Long id,Employee emp) {
		Employee updatedEmployee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id"+id));
		updatedEmployee.setId(emp.getId());
		updatedEmployee.setFirstName(emp.getFirstName());
		updatedEmployee.setLastName(emp.getLastName());
		updatedEmployee.setEmail(emp.getEmail());
		
		employeeRepository.save(updatedEmployee);
		
		return updatedEmployee;
	}
	
	
	
	

}
