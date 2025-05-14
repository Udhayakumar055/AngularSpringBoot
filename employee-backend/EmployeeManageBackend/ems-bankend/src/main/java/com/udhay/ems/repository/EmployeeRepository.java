package com.udhay.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udhay.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
