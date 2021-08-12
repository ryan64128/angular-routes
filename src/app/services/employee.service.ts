import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: any[] = [
    {id: 0, first: "ryan", last: "roberts", salary: 100000, department: "Software"},
    {id: 1, first: "john", last: "roberts", salary: 45000, department: "IT"},
    {id: 2, first: "jim", last: "davis", salary: 65000, department: "Testing"},
    {id: 3, first: "frank", last: "costanza", salary: 85000, department: "Business"},
  ]

  constructor() { }

  getEmployees(): any[]{
    return this.employees;
  }

  getEmployeeById(id: number): any{
    for (let i=0; i<this.employees.length; i++){
      if (this.employees[i].id == id){
        return this.employees[i];
      }
    }
    return ;
  }

  saveEmployee(emp: any): any{
    this.employees.push(emp);
    return emp;
  }

  deleteEmployee(id: number): void{
    for (let i=0; i<this.employees.length; i++){
      if (this.employees[i].id == id){
        this.employees.splice(i,1);
        return;
      }
    }
    console.log(`Employee with id: ${id} not found`);
  }

  updateEmployee(emp: any, id: number): any{
    let empFound = this.getEmployeeById(id);
    if (empFound != undefined){
      empFound.first = emp.first;
      empFound.last = emp.last;
      empFound.salary = emp.salary;
      empFound.department = emp.department;
      return empFound;
    }
    return;
  }
}
