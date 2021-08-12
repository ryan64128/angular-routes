import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginAdminGuard } from './guards/login-admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "employees", component: EmployeesComponent, canActivate: [LoginAdminGuard], canActivateChild: [LoginAdminGuard],
    children: [
      {path: "details/:id", component: EmployeeDetailsComponent}
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "addemployee", component: AddEmployeeComponent},
  {path: "editemployee/:id", component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
