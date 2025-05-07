import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8085/api/emp/employees";
  constructor(private httpclient:HttpClient) { }
  getEmployeeList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);

  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}`, employee);
}
getEmployeeById(id:number): Observable<Employee> {
  return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);

}
updateEmployee(id: number, employee: Employee): Observable<Object> {
  return this.httpclient.put(`${this.baseUrl}/${id}`, employee);
}

deleteEmployee(id: number): Observable<Object> {
  return this.httpclient.delete(`${this.baseUrl}/${id}`);
}



}
