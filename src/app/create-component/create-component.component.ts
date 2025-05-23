import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent implements OnInit {

  employee:Employee =new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
  
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['employees']);
  }
  
  ngOnInit(): void {
    
  }

}
