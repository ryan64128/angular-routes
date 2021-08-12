import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService {
  employees: any[] = [];
  url: string = "http://localhost:8080/employees";
  constructor(private httpClient: HttpClient, private sharedService: SharedService) {this.getEmployees();}

  // getEmployees(): Observable<any[]>{
  //   return this.httpClient.get<any[]>(this.url);
  // }

  public shareUpdatedEmployees(): void{
    this.sharedService.updateEmployees(this.employees);
  }

  getEmployees(): void{
    this.httpClient.get<any[]>(this.url).subscribe(
      (data) => {this.employees = data; this.shareUpdatedEmployees();},
      (error) => {console.log(error);},
      () => {console.log("Complete");}
    );
  }

  // getEmployeeById(id: number): Observable<any[]>{
  //   return this.httpClient.get<any[]>(this.url + '/' + id);
  // }

  getEmployeeById(id: number): any{
    for (let i=0; i<this.employees.length;i++){
      if (this.employees[i].id == id){
        return this.employees[i];
      }
    }
  }

  saveEmployee(emp: any){
    this.httpClient.post<any>(this.url, emp).subscribe(
      (data) => {console.log(data); this.employees.push(data); this.shareUpdatedEmployees();},
      (error) => {},
      () => {}
    );
  }

  updateEmployee(emp: any, id: number){
    this.httpClient.post<any>(this.url, emp).subscribe(
      (data) => {
                  console.log(data); 
                  for (let i=0; i<this.employees.length; i++){
                    if (this.employees[i].id == id){
                      this.employees[i] = data;
                      break;
                    }
                  }
                  this.shareUpdatedEmployees();
                },
      (error) => {},
      () => {}
    );
  }

  deleteEmployee(id: number): void{
    this.httpClient.delete(this.url + "/" + id).subscribe(
      (data) => {
                  for (let i=0; i<this.employees.length; i++){
                    if (this.employees[i].id == id){
                      this.employees.splice(i,1);
                      break;
                    }
                  } 
                  this.shareUpdatedEmployees();
                },
      (error) => {console.log("error received: " + error)},
      () => {console.log("completed")}
    )
  }

  // updateEmployee(emp: any, id: number): any{
  //   let empFound = this.getEmployeeById(id);
  //   if (empFound != undefined){
  //     empFound.first = emp.first;
  //     empFound.last = emp.last;
  //     empFound.salary = emp.salary;
  //     empFound.department = emp.department;
  //     return empFound;
  //   }
  //   return;
  // }

  // public bindEmployees(): Observable<any[]>{
  //   return of(this.employees);
  // }
}
