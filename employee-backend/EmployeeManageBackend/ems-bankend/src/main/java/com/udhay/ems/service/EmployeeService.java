package com.udhay.ems.service;

import java.util.List;

import com.udhay.ems.entity.Employee;

public interface EmployeeService {
	
	Employee createEmployee(Employee employee);
	List<Employee> getAllEmployee();
	Employee getById(Long id);
	Employee updateEmployee(Long id,Employee emp);
	
	
	

}
