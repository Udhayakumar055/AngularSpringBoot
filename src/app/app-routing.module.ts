import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateComponentComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
